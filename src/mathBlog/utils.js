import { filterBySelections, isSubSequence } from '@/lib/utils';

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

export function getFilteredBlogs(
  displayableBlogs,
  tagFilter,
  mode,
  ctimeRange,
  mtimeRange,
  titleFilter,
  contentFilter
) {
  let filteredBlogs = [...displayableBlogs];

  // 标签筛选
  if (tagFilter && tagFilter.length > 0) {
    filteredBlogs = filterBySelections(filteredBlogs, 'tags', tagFilter, mode);
  }

  // 创建时间筛选
  if (ctimeRange && (ctimeRange.from || ctimeRange.to)) {
    filteredBlogs = filteredBlogs.filter(blog => {
      const blogCtime = new Date(blog.ctime);
      if (ctimeRange.from && blogCtime < new Date(ctimeRange.from)) {
        return false;
      }
      if (ctimeRange.to && blogCtime > new Date(ctimeRange.to)) {
        return false;
      }
      return true;
    });
  }

  // 修改时间筛选
  if (mtimeRange && (mtimeRange.from || mtimeRange.to)) {
    filteredBlogs = filteredBlogs.filter(blog => {
      const blogMtime = new Date(blog.mtime);
      if (mtimeRange.from && blogMtime < new Date(mtimeRange.from)) {
        return false;
      }
      if (mtimeRange.to && blogMtime > new Date(mtimeRange.to)) {
        return false;
      }
      return true;
    });
  }

  if (titleFilter && titleFilter.trim()) {
    const searchTerm = titleFilter.trim().toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog => {
      const blogTitleLower = blog.title.toLowerCase();
      return isSubSequence(blogTitleLower, searchTerm);
    });
  }

  if (contentFilter && contentFilter.trim()) {
    const searchTerm = contentFilter.trim().toLowerCase();
    filteredBlogs = filteredBlogs.filter(blog => {
      const blogContentLower = blog.content.toLowerCase();
      return isSubSequence(blogContentLower, searchTerm);
    });
  }

  return filteredBlogs;
}

export function sortBlogs(displayableBlogs, sortRule) {
  if (sortRule) {
    displayableBlogs.sort((a, b) => {
      if (sortRule === 'title-asc') return a.title.localeCompare(b.title);
      if (sortRule === 'title-desc') return b.title.localeCompare(a.title);
      if (sortRule === 'content-asc') return a.content.localeCompare(b.content);
      if (sortRule === 'content-desc') return b.content.localeCompare(a.content);
      if (sortRule === 'ctime-asc') return new Date(a.ctime) - new Date(b.ctime);
      if (sortRule === 'ctime-desc') return new Date(b.ctime) - new Date(a.ctime);
      if (sortRule === 'mtime-asc') return new Date(a.mtime) - new Date(b.mtime);
      if (sortRule === 'mtime-desc') return new Date(b.mtime) - new Date(a.mtime);
      return 0;
    });
  }

  return displayableBlogs;
}
