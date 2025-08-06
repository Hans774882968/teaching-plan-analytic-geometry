type ID = string;

interface Blog {
  title: ID;
  titleEncoded: ID;
  author: string;
  content: string;
  ctime: string;
  mtime: string;
  tags: string[];
  prev: ID; // 上一篇 blog 的 title
  next: ID; // 下一篇 blog 的 title
}
