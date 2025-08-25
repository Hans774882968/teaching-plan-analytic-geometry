import { blogMap, blogList, tags } from 'virtual:blog-data';

export const blogs = blogList.map((blogTitle) => ({
  ...blogMap[blogTitle],
}));

export function calculateMonthlyBlogMdy(month) {
  if (blogs.length === 0) {
    return { ctime: [], mtime: [] };
  }

  // 解析月份
  const [year, monthNum] = month.split('-').map(Number);
  const daysInMonth = new Date(year, monthNum, 0).getDate();

  // 初始化计数数组
  const ctimeCounts = Array(daysInMonth).fill().map((_, i) => ({ day: i + 1, count: 0 }));
  const mtimeCounts = Array(daysInMonth).fill().map((_, i) => ({ day: i + 1, count: 0 }));

  // 遍历博客数据
  blogs.forEach(blog => {
    // 处理创建时间
    const [ctimeYear, ctimeMonth, ctimeDay] = blog.ctime.split(' ')[0].split('-').map(Number);
    if (ctimeYear === year && ctimeMonth === monthNum) {
      if (ctimeDay <= daysInMonth) {
        ctimeCounts[ctimeDay - 1].count++;
      }
    }

    // 处理修改时间
    const [mtimeYear, mtimeMonth, mtimeDay] = blog.mtime.split(' ')[0].split('-').map(Number);
    if (mtimeYear === year && mtimeMonth === monthNum) {
      if (mtimeDay <= daysInMonth) {
        mtimeCounts[mtimeDay - 1].count++;
      }
    }
  });

  return {
    ctime: ctimeCounts,
    mtime: mtimeCounts,
  };
}

export function getAvailableMonths() {
  if (blogs.length === 0) return [];

  const months = new Set();
  blogs.forEach(blog => {
    const ctimeMonth = blog.ctime.substring(0, 7);
    const mtimeMonth = blog.mtime.substring(0, 7);
    months.add(ctimeMonth);
    months.add(mtimeMonth);
  });

  return Array.from(months).sort();
}

export const totalTags = tags.length;
export const totalBlogs = blogs.length;

const allTagsInBlog = blogs.flatMap(blog => blog.tags);
export const totalTagReferences = allTagsInBlog.length;
// 统计每个标签被引用的次数
const tagCounts = allTagsInBlog.reduce((acc, tag) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});

export const totalWords = blogs.reduce((sum, blog) => sum + blog.content.length, 0);

export const totalTitleWords = blogs.reduce((sum, blog) => sum + blog.title.length, 0);

// 被引用最多的前5个标签
export const topAppearanceTags = Object.entries(tagCounts)
  .map(([tag, count]) => ({ tag, count }))
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);

// 拥有最多标签的前5篇博客
export const topTaggedBlogs = [...blogs]
  .sort((a, b) => b.tags.length - a.tags.length)
  .slice(0, 5)
  .map(blog => ({
    title: blog.title,
    count: blog.tags.length,
  }));

// 标题最长的前5篇博客
export const topLongestTitleBlogs = [...blogs]
  .sort((a, b) => b.title.length - a.title.length)
  .slice(0, 5)
  .map(blog => ({
    title: blog.title,
    length: blog.title.length,
  }));

// 内容最长的前5篇博客
export const topLongestBlogs = [...blogs]
  .sort((a, b) => b.content.length - a.content.length)
  .slice(0, 5)
  .map(blog => ({
    title: blog.title,
    length: blog.content.length,
  }));
