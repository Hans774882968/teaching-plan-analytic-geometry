import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import dayjs from 'dayjs';
import chokidar from 'chokidar';
import matter from 'gray-matter';

const FILE_NAME = 'blog-metadata-processor';
const CACHE_FILE_NAME = 'blog-content-cache.json';
const CACHE_FILE_PATH = path.resolve(__dirname, CACHE_FILE_NAME);
const BLOGS_DIR = path.resolve('docs', 'blogs');
const MARKDOWN_PATTERN = '**/*.md';

export function readCacheFile() {
  try {
    if (fs.existsSync(CACHE_FILE_PATH)) {
      const cacheRaw = fs.readFileSync(CACHE_FILE_PATH, 'utf-8');
      const blogContentCache = JSON.parse(cacheRaw);
      return blogContentCache;
    }
    return {};
  } catch (error) {
    console.error(`[${FILE_NAME}] Failed to read cache file:`, error.message);
    return {};
  }
}

/**
 * 判断 mtime 是否需要更新
 * @param {number} existingMtime - 现有 mtime
 * @param {number} mtime - 新的 mtime
 * @param {string} basename - 无 .md 文件名
 * @param {string} content - 文件内容
 * @param {Record<string, string>} blogContentCache - 博客文件内容缓存
 * @returns {boolean}
 */
export function shouldUpdateMtime(existingMtime, mtime, basename, content, blogContentCache) {
  if (!existingMtime) return true;
  if (Math.abs(existingMtime - mtime) < 10000) return false;
  const encodedContent = encodeURI(content);
  return blogContentCache[basename] !== encodedContent;
}

/**
 * 构建新的前置元数据
 * @param {Record<string, any>} frontmatter - 现有元数据
 * @param {string} basename - 无 .md 文件名
 * @param {fs.Stats} stats - 文件状态
 * @param {string} content - 文件内容
 * @param {Record<string, string>} blogContentCache - 博客文件内容缓存
 * @returns {{ newFrontmatter: Record<string, any>, updated: boolean }}
 */
export function buildNewFrontmatter(frontmatter, basename, stats, content, blogContentCache) {
  const newFrontmatter = { ...frontmatter };
  let updated = false;

  // 处理title
  if (!newFrontmatter.title) {
    newFrontmatter.title = basename;
    updated = true;
  }

  // 处理ctime
  if (!newFrontmatter.ctime) {
    const ctime = stats.birthtime.getTime();
    newFrontmatter.ctime = ctime.toString();
    newFrontmatter.ctime_f = dayjs(ctime).format('YYYY-MM-DD HH:mm:ss');
    updated = true;
  }

  // 处理mtime
  const mtime = stats.mtime.getTime();
  const existingMtime = newFrontmatter.mtime ? parseInt(newFrontmatter.mtime) : null;

  if (shouldUpdateMtime(existingMtime, mtime, basename, content, blogContentCache)) {
    newFrontmatter.mtime = mtime.toString();
    newFrontmatter.mtime_f = dayjs(mtime).format('YYYY-MM-DD HH:mm:ss');
    updated = true;
  }

  return { newFrontmatter, updated };
}

/**
 * 更新文件的前置元数据
 * @param {string} filePath - 文件路径
 * @param {string} content - 文件内容
 * @param {Record<string, any>} newFrontmatter - 新的元数据
 * @returns {Promise<void>}
 */
export async function updateFileFrontmatter(filePath, content, newFrontmatter) {
  const newContent = matter.stringify(content, newFrontmatter, {
    language: 'yaml',
    delimiters: '---',
  });
  await fs.promises.writeFile(filePath, newContent, 'utf-8');
}

/**
 * 处理单个博客文件
 * @param {string} filePath - 文件路径
 * @param {Record<string, string>} currentContentMap - 正在更新的博客文件内容缓存
 * @param {Record<string, string>} blogContentCache - 读取的博客文件内容缓存
 * @returns {Promise<{ success: boolean, filename: string, error?: Error }>}
 */
export async function processBlogFile(filePath, currentContentMap, blogContentCache) {
  try {
    const rawContent = await fs.promises.readFile(filePath, 'utf-8');
    const stats = await fs.promises.stat(filePath);
    const basename = path.basename(filePath, '.md');

    const { data: frontmatter, content } = matter(rawContent);
    currentContentMap[basename] = encodeURI(content);
    const { newFrontmatter, updated } = buildNewFrontmatter(frontmatter, basename, stats, content, blogContentCache);

    if (updated) {
      await updateFileFrontmatter(filePath, content, newFrontmatter);
    }

    return { success: true, filename: path.relative(BLOGS_DIR, filePath) };
  } catch (error) {
    console.error(`[${FILE_NAME}] Error processing ${path.relative(BLOGS_DIR, filePath)}:`, error.message);
    return { success: false, filename: path.relative(BLOGS_DIR, filePath), error };
  }
}

export function writeToCacheFile(currentContentMap) {
  const mpEntries = Object.entries(currentContentMap);
  // 排序可让 git diff 更少
  const hashMapContent = mpEntries
    .sort()
    .reduce((content, [key, val], idx) => {
      return content + `  "${key}": "${val}"${idx + 1 < mpEntries.length ? ',' : ''}\n`;
    }, '');
  const cacheContent = `{
${hashMapContent}}`;
  fs.writeFileSync(CACHE_FILE_PATH, cacheContent, 'utf-8');
}

/**
 * 处理所有博客文件
 * @returns {Promise<{ successCount: number, failureCount: number, failures: Array<{filename: string, error: Error}> }>}
 */
export async function processAllBlogs() {
  const startTime = Date.now();
  const currentContentMap = {};

  try {
    // 查找所有markdown文件
    const blogFiles = await glob(MARKDOWN_PATTERN, {
      cwd: BLOGS_DIR,
      absolute: true,
    });

    if (blogFiles.length === 0) {
      const duration = Date.now() - startTime;
      console.log(`[${FILE_NAME}] ✨ 无需处理任何博客~`);
      console.log(`[${FILE_NAME}] ⏱️ 总耗时: ${duration}ms`);
      return { successCount: 0, failureCount: 0, failures: [] };
    }

    console.log(`[${FILE_NAME}] Found ${blogFiles.length} blog files to process`);

    const blogContentCache = readCacheFile();

    // 处理所有文件
    const results = await Promise.allSettled(
      blogFiles.map(file => processBlogFile(file, currentContentMap, blogContentCache))
    );

    writeToCacheFile(currentContentMap);

    // 统计结果
    const successes = [];
    const failures = [];

    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        if (result.value.success) {
          successes.push(result.value);
        } else {
          failures.push(result.value);
        }
      } else {
        failures.push({
          success: false,
          filename: path.relative(BLOGS_DIR, blogFiles[index]),
          error: result.reason,
        });
      }
    });

    const successCount = successes.length;
    const failureCount = failures.length;
    const duration = Date.now() - startTime;

    // 输出统计结果
    console.log(`\n[${FILE_NAME}] ✨ 处理完成:`);
    console.log(`[${FILE_NAME}] ✔️ 成功: ${successCount} 个文件`);
    console.log(`[${FILE_NAME}] ❌ 失败: ${failureCount} 个文件`);

    if (failureCount > 0) {
      const topFailures = failures.slice(0, 10);
      console.log(`[${FILE_NAME}] ⚠️ 前 ${Math.min(10, failureCount)} 个处理失败的文件:`);
      topFailures.forEach(failure => {
        console.log(`  - ${failure.filename}: ${failure.error?.message || '⚠️ 未知错误'}`);
      });
    }

    console.log(`[${FILE_NAME}] ⏱️ 总耗时: ${duration}ms`);

    return { successCount, failureCount, failures };
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[${FILE_NAME}] ⚠️ 处理过程中发生错误:`, error.message);
    console.log(`[${FILE_NAME}] ⏱️ 总耗时: ${duration}ms`);
    return { successCount: 0, failureCount: 0, failures: [] };
  }
}

export function setupWatcher() {
  console.log(`[${FILE_NAME}] Setting up file watcher...`);

  const watcher = chokidar.watch(BLOGS_DIR, {
    ignored: (path, stats) => {
      return stats?.isFile() && !['.md'].some((v) => path.endsWith(v));
    },
    ignoreInitial: true,
    persistent: true,
  });

  watcher
    .on('add', (filePath) => {
      console.log(`[${FILE_NAME}] File added: ${filePath}`);
      processAllBlogs();
    })
    .on('change', (filePath) => {
      console.log(`[${FILE_NAME}] File changed: ${filePath}`);
      processAllBlogs();
    })
    .on('unlink', (filePath) => {
      console.log(`[${FILE_NAME}] File removed: ${filePath}`);
      processAllBlogs();
    });

  return watcher;
}

async function main() {
  try {
    await processAllBlogs();
    const watcher = setupWatcher();

    // 优雅关闭
    process.on('SIGINT', () => {
      console.log(`\n[${FILE_NAME}] Closing watcher...`);
      watcher.close();
      process.exit();
    });
  } catch (err) {
    console.error(`[${FILE_NAME}]`, 'Error:', err);
    process.exit(114514);
  }
}

if (import.meta.filename === process.argv[1]) {
  main();
}
