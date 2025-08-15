import { describe, it, expect } from 'vitest';
import {
  isSpace,
  processSpacesForOneDollar,
  getModifiedContent,
  ignoreContinuousDollars,
  processEmptyLinesAroundBlockMath,
  getNewStringContent,
} from '@/scripts/auto-add-space-for-dollar';

describe('isSpace', () => {
  it('识别空白字符', () => {
    expect(isSpace(' ')).toBe(true);
    expect(isSpace('\t')).toBe(true);
    expect(isSpace('\v')).toBe(true);
    expect(isSpace('\f')).toBe(true);
  });

  it('排除非空白字符', () => {
    expect(isSpace('a')).toBe(false);
    expect(isSpace('$')).toBe(false);
    expect(isSpace('\\')).toBe(false);
    expect(isSpace('\n')).toBe(false);
    expect(isSpace('\r')).toBe(false);
    expect(isSpace('')).toBe(false);
  });
});

describe('ignoreContinuousDollars', () => {
  it('空数组返回空数组', () => {
    expect(ignoreContinuousDollars([])).toEqual([]);
  });

  it('单个位置返回原数组', () => {
    expect(ignoreContinuousDollars([5])).toEqual([5]);
  });

  it('不连续位置返回原数组', () => {
    expect(ignoreContinuousDollars([1, 3, 5])).toEqual([1, 3, 5]);
    expect(ignoreContinuousDollars([10, 20, 30])).toEqual([10, 20, 30]);
  });

  it('过滤连续两个位置', () => {
    expect(ignoreContinuousDollars([1, 2])).toEqual([]);
    expect(ignoreContinuousDollars([5, 6])).toEqual([]);
  });

  it('过滤多个连续对', () => {
    expect(ignoreContinuousDollars([1, 2, 4, 5])).toEqual([]);
    expect(ignoreContinuousDollars([10, 11, 20, 21])).toEqual([]);
  });

  it('混合连续和非连续位置', () => {
    expect(ignoreContinuousDollars([1, 2, 5])).toEqual([5]);
    expect(ignoreContinuousDollars([3, 5, 6, 8])).toEqual([3, 8]);
    expect(ignoreContinuousDollars([10, 11, 13, 14, 16])).toEqual([16]);
  });

  it('处理三个连续位置', () => {
    expect(ignoreContinuousDollars([1, 2, 3])).toEqual([]);
    expect(ignoreContinuousDollars([5, 6, 7])).toEqual([]);
  });

  it('处理四个连续位置', () => {
    expect(ignoreContinuousDollars([1, 2, 3, 4])).toEqual([]);
    expect(ignoreContinuousDollars([10, 11, 12, 13])).toEqual([]);
  });

  it('处理重叠连续序列', () => {
    expect(ignoreContinuousDollars([1, 2, 3, 5])).toEqual([5]);
    expect(ignoreContinuousDollars([1, 2, 3, 4, 6])).toEqual([6]);
  });

  it('处理大间隔中的连续对', () => {
    expect(ignoreContinuousDollars([1, 10, 11, 20, 21, 30])).toEqual([1, 30]);
    expect(ignoreContinuousDollars([5, 6, 15, 16, 25, 26])).toEqual([]);
  });

  it('保持原始顺序', () => {
    const input = [10, 20, 21, 30, 31, 40];
    const output = ignoreContinuousDollars(input);
    expect(output).toEqual([10, 40]);
    // 验证顺序是否保持
    expect(output).toEqual(expect.arrayContaining([10, 40]));
    expect(output.indexOf(10)).toBeLessThan(output.indexOf(40));
  });
});

describe('processSpacesForOneDollar', () => {
  it('在$符号前后添加空格', () => {
    expect(processSpacesForOneDollar('price$100')).toBe('price $ 100');
    expect(processSpacesForOneDollar('100$price')).toBe('100 $ price'); // 仅后侧加空格
    expect(processSpacesForOneDollar('a$b$c')).toBe('a $ b $ c');
  });

  it('压缩多余空格', () => {
    expect(processSpacesForOneDollar('a  $  b')).toBe('a $ b');
    expect(processSpacesForOneDollar('$\t\tvalue')).toBe('$ value');
    expect(processSpacesForOneDollar('key\v\v$')).toBe('key $');
  });

  it('处理字符串开头/结尾的$', () => {
    expect(processSpacesForOneDollar('$100')).toBe('$ 100'); // 开头只加后空格
    expect(processSpacesForOneDollar('100$')).toBe('100 $'); // 结尾只加前空格
    expect(processSpacesForOneDollar('$')).toBe('$');
  });

  it('忽略转义$符号', () => {
    expect(processSpacesForOneDollar('\\$100')).toBe('\\$100');
    expect(processSpacesForOneDollar('a\\$b')).toBe('a\\$b');
    expect(processSpacesForOneDollar('\\\\$')).toBe('\\\\ $'); // 源码有两个\，相当于源码编译后的字符串有一个\
  });

  it('忽略连续的$', () => {
    expect(processSpacesForOneDollar('$$100')).toBe('$$100');
    expect(processSpacesForOneDollar('50$$100')).toBe('50$$100');
    expect(processSpacesForOneDollar('100$$')).toBe('100$$');

    expect(processSpacesForOneDollar('$ $100')).toBe('$ $ 100');
    expect(processSpacesForOneDollar('$ $100 $$200')).toBe('$ $ 100 $$200');
  });

  it('处理换行符边界', () => {
    expect(processSpacesForOneDollar('$\nvalue')).toBe('$\nvalue');
    expect(processSpacesForOneDollar('key\n$')).toBe('key\n$');
    expect(processSpacesForOneDollar('a \n $ b')).toBe('a \n$ b');
  });

  it('复杂字符串处理', () => {
    expect(processSpacesForOneDollar('price$\\$100\\$')).toBe('price $ \\$100\\$');
    expect(processSpacesForOneDollar('a  $  b\t$c\n$d')).toBe('a $ b $ c\n$ d');
  });
});

describe('processEmptyLinesAroundBlockMath', () => {
  it('没有块级数学公式时不修改内容', () => {
    const input = '这是一段普通文本\n没有数学公式';
    expect(processEmptyLinesAroundBlockMath(input)).toEqual(input);
  });

  it('单个块级数学公式添加空行', () => {
    const input = `文本行1
文本行2
$$
数学公式
$$
文本行3`;

    const expected = `文本行1
文本行2

$$
数学公式
$$

文本行3`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('处理开头和结尾的数学公式', () => {
    const input = `$$
开头公式
$$
中间文本
$$
结尾公式
$$`;

    const expected = `$$
开头公式
$$

中间文本

$$
结尾公式
$$
`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('保留已有的空行', () => {
    const input = `文本行1

$$
公式1
$$

文本行2

$$
公式2
$$`;

    // 应保持原样，不添加额外空行
    expect(processEmptyLinesAroundBlockMath(input)).toEqual(`${input}\n`);
  });

  it('移除多余空行1', () => {
    const input = `文本行1

\n\n\n\n

$$
公式1
$$


文本行2`;

    const expected = `文本行1

$$
公式1
$$

文本行2`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('移除多余空行2', () => {
    const input = `文本行1

\n\n    \n\n

\t\t  \n

$$
公式1
$$

\t\t  \t


文本行2`;

    const expected = `文本行1

$$
公式1
$$

文本行2`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('移除多余空行3-开头的公式', () => {
    const input = `

\n\n\n\n

$$
公式1
$$


文本行2`;

    const expected = `$$
公式1
$$

文本行2`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('移除多余空行4-结尾的公式', () => {
    const input = `文本行1

\n\n\n\n

$$
公式1
$$

\n  \n\t  \n
`;

    const expected = `文本行1

$$
公式1
$$
`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('处理多个数学公式', () => {
    const input = `文本行
$$
公式1
$$
更多文本
$$
公式2
$$
结束文本`;

    const expected = `文本行

$$
公式1
$$

更多文本

$$
公式2
$$

结束文本`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('处理相邻的数学公式', () => {
    const input = `$$
公式1
$$
$$
公式2
$$`;

    const expected = `$$
公式1
$$

$$
公式2
$$
`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('处理只有 $$ 行的内容', () => {
    const input = `$$
$$`;

    const expected = `$$
$$
`;

    expect(processEmptyLinesAroundBlockMath(input)).toEqual(expected);
  });

  it('处理空输入', () => {
    expect(processEmptyLinesAroundBlockMath('')).toEqual('');
  });
});

describe('getNewStringContent', () => {
  it('依次应用所有处理函数', () => {
    const input = `文本行
$100
$$
数学公式
$$
更多内容`;

    const expected = `文本行
$ 100

$$
数学公式
$$

更多内容`;

    expect(getNewStringContent(input)).toEqual(expected);
  });

  it('处理空字符串', () => {
    expect(getNewStringContent('')).toEqual('');
  });

  it('处理只有美元符号的内容', () => {
    const input = '$';
    expect(getNewStringContent(input)).toEqual('$');
  });

  it('处理只有数学公式的内容', () => {
    const input = `$$
公式
$$`;

    const expected = `$$
公式
$$
`;

    expect(getNewStringContent(input)).toEqual(expected);
  });

  it('处理混合内容', () => {
    const input = `开头文本
价格$100
$$
a = b
$$
结束$文本`;

    const expected = `开头文本
价格 $ 100

$$
a = b
$$

结束 $ 文本`;

    expect(getNewStringContent(input)).toEqual(expected);
  });

  it('处理转义美元符号', () => {
    const input = `正常$符号 \\$转义符号
$$
数学\\$公式
$$`;

    const expected = `正常 $ 符号 \\$转义符号

$$
数学\\$公式
$$
`;

    expect(getNewStringContent(input)).toEqual(expected);
  });
});

describe('getModifiedContent', () => {
  it('处理普通字符串', () => {
    const codes = [
      'const str = "price$100";',
      'const str = "price $100";',
    ];
    for (const code of codes) {
      const { newContent, modified } = getModifiedContent(code);
      expect(modified).toBe(true);
      expect(newContent).toContain('"price $ 100"');
    }
  });

  it('处理模板字符串', () => {
    const code = 'const str = `price$100`;';
    const { newContent, modified } = getModifiedContent(code);
    expect(modified).toBe(true);
    expect(newContent).toContain('`price $ 100`');
  });

  it('处理多个$位置', () => {
    const code = `
      const a = "a$b";
      const b = \`c$d\`;
    `;
    const { newContent } = getModifiedContent(code);
    expect(newContent).toContain('"a $ b"');
    expect(newContent).toContain('`c $ d`');
  });

  it('处理JSX中的字符串', () => {
    const code = `
      function Comp() {
        return <div title="hello$world">text$here</div>;
      }
    `;
    const { newContent } = getModifiedContent(code);
    expect(newContent).toContain('title="hello $ world"');
    expect(newContent).toContain('>text$here</div>');
  });

  it('转义字符', () => {
    const codes = [
      String.raw`const str = "has \$ escaped";`,
      String.raw`const str = "has\$ escaped";`,
      String.raw`const str = "has \$escaped";`,
      String.raw`const str = "has\$escaped";`,
      String.raw`const str = "has \\$ escaped";`,
      String.raw`const str = "has\\$ escaped";`,
      String.raw`const str = "has \\$escaped";`,
      String.raw`const str = "has\\$escaped";`,
    ];
    const ans = [
      String.raw`const str = "has \$ escaped";`,
      String.raw`const str = "has\$ escaped";`,
      String.raw`const str = "has \$escaped";`,
      String.raw`const str = "has\$escaped";`,

      String.raw`const str = "has \\ $ escaped";`,
      String.raw`const str = "has\\ $ escaped";`,
      String.raw`const str = "has \\ $ escaped";`,
      String.raw`const str = "has\\ $ escaped";`,
    ];
    for (let i = 0; i < codes.length; i++) {
      const { newContent } = getModifiedContent(codes[i]);
      expect(newContent).toBe(ans[i]);
    }
  });

  it('保持其他代码结构不变', () => {
    const originalCode = `
      function test() {
        return {
          key: "value$here",
          other: 123
        };
      }
    `;
    const { newContent } = getModifiedContent(originalCode);
    expect(newContent).toContain('"value $ here"');
    expect(newContent).toMatch(/return\s*{/); // 保持原有结构
    expect(newContent).toContain('other: 123');
  });

  it('更贴近真实用例：无块级公式', () => {
    const code = `export default {
  points: [
    {
      title: String.raw\`⚡ 指数函数的定义\`,
      content: String.raw\`
指数函数是形如$y = a^x$ 的函数，其中：
- $ a$是底数， $a > 0 $ 且 $ a \\neq 1 $
- $ x $ 是指数，为自变量

举例：
- $ y = 2^x $
- $ y = \\left(\\frac{1}{3}\\right)^x $

<span class="highlight">关键特征</span>：自变量出现在指数位置，底数为常数

<strong class="hard">注意：</strong>当底数 $a = 1$ 时，函数退化为常数函数 $y = 1$
\`,
      thinks: [
        {
          think: String.raw\`为什么指数函数的底数  $ a  $ 必须大于 0 且不等于 1？\`,
          answer: String.raw\`当  $   a \\leq 0   $  时，函数在某些点无定义（如 $ a = -2 $ 时， $ (-2)^{1/2}   $ 无实数解）；当 $ a = 1 $ 时，函数恒等于 1，失去指数函数的特性。\`,
          answerRowMaxHeight: '120px',
        },
      ],
    },
  ]
}
`;
    const goal = `export default {
  points: [
    {
      title: String.raw\`⚡ 指数函数的定义\`,
      content: String.raw\`
指数函数是形如 $ y = a^x $ 的函数，其中：
- $ a $ 是底数， $ a > 0 $ 且 $ a \\neq 1 $
- $ x $ 是指数，为自变量

举例：
- $ y = 2^x $
- $ y = \\left(\\frac{1}{3}\\right)^x $

<span class="highlight">关键特征</span>：自变量出现在指数位置，底数为常数

<strong class="hard">注意：</strong>当底数 $ a = 1 $ 时，函数退化为常数函数 $ y = 1 $
\`,
      thinks: [
        {
          think: String.raw\`为什么指数函数的底数 $ a $ 必须大于 0 且不等于 1？\`,
          answer: String.raw\`当 $ a \\leq 0 $ 时，函数在某些点无定义（如 $ a = -2 $ 时， $ (-2)^{1/2} $ 无实数解）；当 $ a = 1 $ 时，函数恒等于 1，失去指数函数的特性。\`,
          answerRowMaxHeight: '120px',
        },
      ],
    },
  ]
}
`;
    expect(getModifiedContent(code).newContent).toBe(goal);
  });

  it('更贴近真实用例：有块级公式', () => {
    const code = `
const foo = {
  title: String.raw\`🌐 指数函数的 $$性$质\`,
  content: String.raw\`
#### 1. 定义域和值域
- <span class="highlight">定义域</span>：$ \\mathbb{R} $ ，即所有实数。
- <span class="highlight">值域</span>：$ (0, +\\infty) $ 。这意味着无论 x 取何值，函数值总是正数！

#### 2. 奇偶性
指数函数 $ y = a^x $ 既不是奇函数也不是偶函数

#### 3. <span class="hard">单调性（重点难点）</span>
单调性由底数 $ a $ 决定：
- 当 $ a > 1 $ 时，函数<span class="highlight">单调递增</span>
- 当 $ 0 < a < 1 $ 时，函数<span class="highlight">单调递减</span>

$$
\\text{单调性总结：} \\quad 
\\begin{cases} 
\\text{增函数} & a > 1 \\
\\text{减函数} & 0 < a < 1 
\\end{cases}
$$
\`,
}
`;
    const goal = `
const foo = {
  title: String.raw\`🌐 指数函数的 $$性 $ 质\`,
  content: String.raw\`
#### 1. 定义域和值域
- <span class="highlight">定义域</span>： $ \\mathbb{R} $ ，即所有实数。
- <span class="highlight">值域</span>： $ (0, +\\infty) $ 。这意味着无论 x 取何值，函数值总是正数！

#### 2. 奇偶性
指数函数 $ y = a^x $ 既不是奇函数也不是偶函数

#### 3. <span class="hard">单调性（重点难点）</span>
单调性由底数 $ a $ 决定：
- 当 $ a > 1 $ 时，函数<span class="highlight">单调递增</span>
- 当 $ 0 < a < 1 $ 时，函数<span class="highlight">单调递减</span>

$$
\\text{单调性总结：} \\quad 
\\begin{cases} 
\\text{增函数} & a > 1 \\
\\text{减函数} & 0 < a < 1 
\\end{cases}
$$
\`,
}
`;
    expect(getModifiedContent(code).newContent).toBe(goal);
  });
});
