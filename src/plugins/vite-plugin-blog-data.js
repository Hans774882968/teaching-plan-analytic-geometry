import path from 'path';
import fs from 'fs';
import dayjs from 'dayjs';
import fsPromise from 'fs/promises';
import chokidar from 'chokidar';
import matter from 'gray-matter';
import { serverNotifyReload } from './utils';

const blogsDir = path.resolve(process.cwd(), 'docs', 'blogs');
try {
  fs.accessSync(blogsDir, fs.constants.R_OK | fs.constants.W_OK);
} catch (_) {
  fs.mkdirSync(blogsDir, { recursive: true });
}
const virtualModuleId = 'virtual:blog-data';
const resolvedVirtualModuleId = '\0' + virtualModuleId;

function getTags(blogs) {
  const tagSet = new Set();
  for (const blog of blogs) {
    if (!Array.isArray(blog.tags) || !blog.tags.length) {
      continue;
    }
    for (const tag of blog.tags) {
      if (!tagSet.has(tag)) {
        tagSet.add(tag);
      }
    }
  }
  const tags = [...tagSet];
  return tags;
}

export default function blogDataPlugin() {
  return {
    name: 'vite-plugin-blog-data',
    configureServer(server) {
      // 监听文件夹变化
      const watcher = chokidar.watch(blogsDir, {
        ignored: (path, stats) => {
          return stats?.isFile() && !path.endsWith('.md');
        },
        ignoreInitial: true,
        persistent: true,
      });

      // 文件变化时触发 HMR
      watcher
        .on('add', (filePath) => {
          console.log(`[${virtualModuleId}] File added: ${filePath}`);
          serverNotifyReload(server, resolvedVirtualModuleId);
        })
        .on('change', (filePath) => {
          console.log(`[${virtualModuleId}] File changed: ${filePath}`);
          serverNotifyReload(server, resolvedVirtualModuleId);
        })
        .on('unlink', (filePath) => {
          console.log(`[${virtualModuleId}] File removed: ${filePath}`);
          serverNotifyReload(server, resolvedVirtualModuleId);
        });
    },
    resolveId(id) {
      if (id === virtualModuleId) return resolvedVirtualModuleId;
    },
    async load(id) {
      if (id !== resolvedVirtualModuleId) return;

      try {
        const files = fs.readdirSync(blogsDir);
        const mdFiles = files.filter(file => file.endsWith('.md'));
        const mdFilePaths = mdFiles.map((mdFile) => [mdFile, path.join(blogsDir, mdFile)]);

        // 博客数据，按 title 升序排序
        const blogs = [];

        for (const [mdFile, mdFilePath] of mdFilePaths) {
          const rawContent = await fsPromise.readFile(mdFilePath, 'utf-8');
          const stats = await fsPromise.stat(mdFilePath);

          const { data, content } = matter(rawContent);
          const title = data.title || path.basename(mdFile, '.md');

          const titleEncoded = encodeURIComponent(title);
          const author = data.author || 'hans7';

          const ctime = data.ctime_f || dayjs(stats.birthtime).format('YYYY-MM-DD HH:mm:ss');
          const mtime = data.mtime_f || dayjs(stats.mtime).format('YYYY-MM-DD HH:mm:ss');

          let tags = [];
          if (Array.isArray(data.tags)) {
            tags = data.tags;
          } else if (typeof data.tags === 'string') {
            tags = [data.tags];
          }

          blogs.push({
            title,
            titleEncoded,
            author,
            content,
            ctime,
            mtime,
            tags,
            prev: '',
            next: '',
          });
        }

        blogs.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });

        // 设置prev/next链接
        blogs.forEach((blog, index) => {
          if (index > 0) blog.prev = blogs[index - 1].titleEncoded;
          if (index < blogs.length - 1) blog.next = blogs[index + 1].titleEncoded;
        });

        // 转换为哈希表
        const blogMap = {};
        blogs.forEach((blog) => {
          blogMap[blog.title] = blog;
        });

        // 博客列表页展示的博客列表。按 mtime 降序排序，相同则按 title 升序
        const blogList = blogs.map((blog) => blog.title).sort((a, b) => {
          const ba = blogMap[a];
          const bb = blogMap[b];
          const timeDiff = new Date(bb.mtime).getTime() - new Date(ba.mtime).getTime();
          return timeDiff !== 0 ? timeDiff : ba.title.localeCompare(bb.title);
        });

        const tags = getTags(blogs);

        return `
export const blogMap = ${JSON.stringify(blogMap, null, 2)};
export const blogList = ${JSON.stringify(blogList)};
export const tags = ${JSON.stringify(tags)};
`.trim();
      } catch (err) {
        console.error(`[${virtualModuleId}] Error loading blogs data:`, err);
        return 'export const blogMap = {};\nexport const blogList = [];';
      }
    },
  };
}
