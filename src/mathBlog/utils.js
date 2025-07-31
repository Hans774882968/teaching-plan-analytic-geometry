import { filterBySelections } from '@/lib/utils';

// 将Markdown转换为纯文本（用于预览）
export function markdownToText(markdown) {
  if (!markdown) return '';
  // 简单替换Markdown标记
  return markdown
    .replace(/#{1,6}\s/g, '') // 移除标题
    .replace(/\*{1,2}(.*?)\*{1,2}/g, '$1') // 移除粗体和斜体
    .replace(/!?\[(.*?)\]\(.*?\)/g, '$1') // 移除图片和链接
    .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // 移除代码块
    .replace(/\n/g, ' ') // 替换换行符
    .replace(/\s{2,}/g, ' ') // 压缩多个空格
    .trim();
}

export function getFilteredBlogs(displayableBlogs, tagFilter, mode) {
  const filteredByTagBlogs = filterBySelections(displayableBlogs, 'tags', tagFilter, mode);
  return filteredByTagBlogs;
}
