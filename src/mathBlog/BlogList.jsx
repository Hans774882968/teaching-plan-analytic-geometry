import { blogMap, blogList, tags as displayTags } from 'virtual:blog-data';
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
import {
  DEFAULT_ITEMS_PER_PAGE,
} from '@/common/consts';
import { PaginationWithToolbar } from '@/component/ui/pagination-with-toolbar';
import { getPaginationItems } from '@/lib/pagination';
import NoData from '@/component/NoData';
import TagArea from './TagArea';
import { useFilterStore } from './states/filterState';
import { getFilteredBlogs, markdownToText } from './utils';

const displayableBlogs = blogList.map((blogTitle) => ({
  ...blogMap[blogTitle],
  previewContent: markdownToText(blogMap[blogTitle].content.substring(0, 280)),
}));

export default function BlogList() {
  const { mode, tagFilter, setTagFilter } = useFilterStore();
  const filteredBlogs = getFilteredBlogs(displayableBlogs, tagFilter, mode);

  const onTagChange = (tag) => {
    setTagFilter(tag);
    setCurrentPage(1);
  };

  const [itemsPerPage, setItemsPerPage] = useState(DEFAULT_ITEMS_PER_PAGE);
  // 所有导致数据个数变化的场景都需要重置页码
  const [currentPage, setCurrentPage] = useState(1);
  const {
    pageItems: displayBlogs,
  } = getPaginationItems({ itemsPerPage, currentPage, items: filteredBlogs });

  return (
    <div className={basicStyles.container}>
      <Header>
        <h1 className={basicStyles.teachingPlanH1}>📚 博客列表 🔍</h1>
        <p>这里汇聚了各类足够硬核的数学博客~</p>
      </Header>

      {/* 取消 hover scale 规避博客标题的公式出现在下拉框之上的问题 */}
      <Card
        className="flex flex-col gap-4"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1 }}
      >
        <TagArea
          tags={displayTags}
          tagFilter={tagFilter}
          onTagChange={onTagChange}
        />

        <div className="flex gap-4 items-center">
          <PaginationWithToolbar
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
            showTotal={(total, ranges) => `第${ranges[0]} ~ ${ranges[1]}篇，共${total}篇`}
            total={filteredBlogs.length}
          />
        </div>
      </Card>

      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {displayBlogs.length ? displayBlogs.map((blog, index) => (
          <div key={blog.title}>
            {
              index > 0 && (
                <div className="border-b border-gray-200 mx-6"></div>
              )
            }
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
          </div>
        )) : (
          <div className="py-5">
            <NoData text="暂无博客" />
          </div>
        )}
      </motion.div>
    </div>
  );
}
