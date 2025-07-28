import { blogMap, blogList, tags } from 'virtual:blog-data';
import { motion } from 'motion/react';
import { FaArrowRight, FaRegCalendarAlt, FaTags, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import basicStyles from '@/component/teachingPlan/basic.module.scss';
import styles from './BlogList.module.scss';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { cn } from '@/lib/utils';
import { getTagColorByIndex } from '@/lib/getTagColor';
import Tag from '@/component/Tag';
import { FaRegPenToSquare } from 'react-icons/fa6';
import Header from '@/component/teachingPlan/Header';
import Card from '@/component/teachingPlan/Card';
import { useState } from 'react';

// 将Markdown转换为纯文本（用于预览）
function markdownToText(markdown) {
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

const displayBlogs = blogList.map((blogTitle) => ({
  ...blogMap[blogTitle],
  previewContent: markdownToText(blogMap[blogTitle].content.substring(0, 280)),
}));
const displayTags = ['全部', ...tags];

function getFilteredBlogs(displayBlogs, tagFilter) {
  const filteredByTagBlogs = tagFilter === '全部'
    ? displayBlogs
    : displayBlogs.filter((blog) => blog.tags.includes(tagFilter));
  return filteredByTagBlogs;
}

function TagArea({ tags, tagFilter, setTagFilter }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      选择标签：
      {
        tags.map((tag, index) => {
          const selected = tagFilter === tag;

          return (
            <Tag
              key={tag}
              className={cn(
                'cursor-pointer',
                selected ? 'bg-blue-500 text-white' : getTagColorByIndex(index)
              )}
              onClick={() => setTagFilter(tag)}
            >
              {tag}
            </Tag>
          );
        })
      }
    </div>
  );
}

export default function BlogList() {
  const [tagFilter, setTagFilter] = useState('全部');
  const filteredBlogs = getFilteredBlogs(displayBlogs, tagFilter);

  return (
    <div className={basicStyles.container}>
      <Header>
        <h1 className={basicStyles.teachingPlanH1}>📚 博客列表 🔍</h1>
        <p>这里汇聚了各种足够硬核的数学博客~</p>
      </Header>

      <Card className="flex flex-col gap-4">
        <TagArea
          tags={displayTags}
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
        />
        <div>共{filteredBlogs.length}篇</div>
      </Card>

      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {filteredBlogs.map((blog, index) => (
          <div key={blog.title}>
            <div className="blog-card block p-6 hover:bg-sky-50 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    <MarkdownRenderer content={blog.title} />
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3">
                    <Link
                      className="flex items-center gap-2.5"
                      to="https://github.com/Hans774882968"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaUserCircle className="text-blue-500" />
                      <span>hans7</span>
                    </Link>
                    <div className="flex items-center gap-2.5">
                      <FaRegPenToSquare className="text-blue-500" />
                      <span>{blog.mtime}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FaRegCalendarAlt className="text-blue-500" />
                      <span>{blog.ctime}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FaTags className="text-blue-500" />
                      <div className="flex flex-wrap gap-2.5">
                        {
                          blog.tags && blog.tags.length > 0 ? (
                            blog.tags.map((tag, index) => {
                              return (
                                <Tag key={tag} className={getTagColorByIndex(index)}>
                                  {tag}
                                </Tag>
                              );
                            })
                          ) : '暂无'
                        }
                      </div>
                    </div>
                  </div>

                  <div className={cn('text-gray-600 mb-4', styles.truncateLines)}>
                    {markdownToText(blog.previewContent)}
                  </div>

                  <Link
                    to={`/blog/${blog.titleEncoded}`}
                    className="flex items-center font-medium text-(--tpm-color-link) hover:text-(--tpm-color-link-hover) transition-colors">
                    <span>阅读全文</span>
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            </div>

            {index < filteredBlogs.length - 1 && (
              <div className="border-t border-gray-200 mx-6"></div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
