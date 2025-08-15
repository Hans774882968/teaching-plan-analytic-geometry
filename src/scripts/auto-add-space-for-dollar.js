import fs from 'fs';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import chokidar from 'chokidar';
import { glob } from 'glob';
import ListNode from '@/common/ListNode';

const CONFIG_FILES_PATTERN = 'src/**/*{config,Config}.{js,jsx}';

// 辅助函数：判断字符是否为空格（不含换行）
export function isSpace(char) {
  return char === ' ' || char === '\t' || char === '\v' || char === '\f';
}

export function ignoreContinuousDollars(dollarPositions) {
  const positionSet = new Set();
  for (let i = 0; i + 1 < dollarPositions.length; i++) {
    if (dollarPositions[i] + 1 === dollarPositions[i + 1]) {
      positionSet.add(dollarPositions[i]);
      positionSet.add(dollarPositions[i + 1]);
    }
  }
  return dollarPositions.filter((p) => !positionSet.has(p));
}

// 在落单的 $ 的前后添加空格
export function processSpacesForOneDollar(str) {
  let escaped = false;
  const initialDollarPositions = [];

  // 识别所有非转义的$位置
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      escaped = !escaped;
    } else if (str[i] === '$' && !escaped) {
      initialDollarPositions.push(i);
    } else if (escaped && str[i] !== '\\') {
      escaped = false;
    }
  }

  const dollarPositions = ignoreContinuousDollars(initialDollarPositions);

  // 从后往前处理每个$位置
  let result = str;
  for (let i = dollarPositions.length - 1; i >= 0; i--) {
    const pos = dollarPositions[i];
    let beforeStart = pos - 1;
    let afterEnd = pos + 1;

    // 向前压缩空格
    while (beforeStart >= 0 && isSpace(result[beforeStart])) {
      beforeStart--;
    }
    const beforeReplacement = beforeStart >= 0 && result[beforeStart] !== '\n' ? ' ' : '';

    // 向后压缩空格
    while (afterEnd < result.length) {
      const char = result[afterEnd];
      if (!isSpace(char) || char === '\n' || char === '\r') break;
      afterEnd++;
    }
    const afterReplacement = afterEnd < result.length && result[afterEnd] !== '\n' ? ' ' : '';

    const replacement = `${beforeReplacement}$${afterReplacement}`;
    // 构建替换段
    result =
      result.slice(0, beforeStart + 1) +
      replacement +
      result.slice(afterEnd);
  }

  return result;
}

export function processEmptyLinesAroundBlockMath(str) {
  const lines = str.split('\n');

  const dummyHead = new ListNode('');
  const dummyTail = new ListNode('');
  let current = dummyHead;

  // 构建双向链表
  for (const line of lines) {
    const node = new ListNode(line);
    current.next = node;
    node.prev = current;
    current = node;
  }
  current.next = dummyTail;
  dummyTail.prev = current;

  // 查找所有 $$ 节点
  const mathNodes = [];
  let node = dummyHead.next;
  while (node) {
    if (node.data.trim() === '$$') {
      mathNodes.push(node);
    }
    node = node.next;
  }

  // 从后往前处理每个 $$ 节点
  for (let i = mathNodes.length - 1; i >= 0; i--) {
    const mathNode = mathNodes[i];
    const isOpening = i % 2 === 0; // 奇数位置为开始（0-based）

    if (isOpening) {
      // 处理开头 $$ - 向前查找
      let prevNonEmpty = mathNode.prev;

      // 向前查找第一个非空行节点
      while (prevNonEmpty !== dummyHead && prevNonEmpty.data.trim() === '') {
        prevNonEmpty = prevNonEmpty.prev;
      }

      prevNonEmpty.next = mathNode;
      mathNode.prev = prevNonEmpty;

      // 在非空节点后添加一个空行（如果需要）
      if (prevNonEmpty !== dummyHead) {
        const emptyNode = new ListNode('');
        prevNonEmpty.next = emptyNode;
        emptyNode.prev = prevNonEmpty;
        emptyNode.next = mathNode;
        mathNode.prev = emptyNode;
      }
    } else {
      // 处理结束 $$ - 向后查找
      let nextNonEmpty = mathNode.next;

      // 向后查找第一个非空行节点
      while (nextNonEmpty !== dummyTail && nextNonEmpty.data.trim() === '') {
        nextNonEmpty = nextNonEmpty.next;
      }

      mathNode.next = nextNonEmpty;
      nextNonEmpty.prev = mathNode;

      // 在非空节点前添加一个空行
      const emptyNode = new ListNode('');
      mathNode.next = emptyNode;
      emptyNode.prev = mathNode;
      emptyNode.next = nextNonEmpty;
      nextNonEmpty.prev = emptyNode;
    }
  }

  // 从链表重建字符串
  const resultLines = [];
  let currentNode = dummyHead.next;
  while (currentNode !== dummyTail) {
    resultLines.push(currentNode.data);
    currentNode = currentNode.next;
  }

  return resultLines.join('\n');
}

export function getNewStringContent(content) {
  const res = [
    processSpacesForOneDollar,
    processEmptyLinesAroundBlockMath,
  ].reduce((res, fn) => fn(res), content);
  return res;
}

export function getModifiedContent(code) {
  const ast = parse(code, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
  });

  const replacements = [];

  traverse(ast, {
    // 处理普通字符串
    StringLiteral(path) {
      if (!path.node.extra?.raw) return;

      const raw = path.node.extra.raw;
      const contentStart = path.node.start + 1; // 跳过开引号
      const contentEnd = path.node.end - 1;     // 跳过闭引号
      const content = raw.slice(1, -1);
      const newContent = getNewStringContent(content);

      if (newContent !== content) {
        replacements.push({
          start: contentStart,
          end: contentEnd,
          newText: newContent,
        });
      }
    },

    // 处理模板字符串
    TemplateLiteral(path) {
      path.node.quasis.forEach(quasi => {
        const { raw } = quasi.value;
        const contentStart = quasi.start;
        const contentEnd = quasi.end;
        const newRaw = getNewStringContent(raw);

        if (newRaw !== raw) {
          replacements.push({
            start: contentStart,
            end: contentEnd,
            newText: newRaw,
          });
        }
      });
    },
  });

  const modified = replacements.length > 0;
  if (!modified) {
    return {
      newContent: code,
      modified,
    };
  }
  let modifiedCode = code;
  replacements.sort((a, b) => b.start - a.start); // 按start倒序
  for (const rep of replacements) {
    modifiedCode =
      modifiedCode.slice(0, rep.start) +
      rep.newText +
      modifiedCode.slice(rep.end);
  }
  return {
    newContent: modifiedCode,
    modified,
  };
}

// 处理单个文件
export function processFile(filePath) {
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    const { newContent, modified } = getModifiedContent(code);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

export async function addSpaceForEveryDollar() {
  const configFiles = await glob(CONFIG_FILES_PATTERN, {
    ignore: ['node_modules/**'],
  });
  console.log(`Processing ${configFiles.length} config files...`);

  for (const filePath of configFiles) {
    processFile(filePath);
  }
}

export function setupWatcher() {
  console.log('Setting up file watcher...');

  const watcher = chokidar.watch('src', {
    ignored: (path, stats) => {
      return stats?.isFile() && !['config.js', 'Config.js', 'config.jsx', 'Config.jsx'].some((v) => path.endsWith(v));
    },
    ignoreInitial: true,
    persistent: true,
  });

  watcher
    .on('add', (filePath) => {
      console.log(`File added: ${filePath}`);
      processFile(filePath);
    })
    .on('change', (filePath) => {
      console.log(`File changed: ${filePath}`);
      processFile(filePath);
    })
    .on('unlink', (filePath) => {
      console.log(`File removed: ${filePath}`);
      // 不用做事
    });

  return watcher;
}

async function main() {
  try {
    // 初始处理
    await addSpaceForEveryDollar();

    const watcher = setupWatcher();

    // 优雅关闭
    process.on('SIGINT', () => {
      console.log('\nClosing watcher...');
      watcher.close();
      process.exit();
    });
  } catch (err) {
    console.error('Error:', err);
    process.exit(114514);
  }
}

if (import.meta.filename === process.argv[1]) {
  main();
}
