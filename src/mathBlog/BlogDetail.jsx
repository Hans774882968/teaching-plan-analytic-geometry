import { blogMap } from 'virtual:blog-data';
import MarkdownRenderer from '@/component/MarkdownRenderer';
import { Link, Navigate, useParams } from 'react-router-dom';
import styles from '@/component/teachingPlan/basic.module.scss';
import Card from '@/component/teachingPlan/Card';
import { calcReadTime } from '@/lib/utils';
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegClock,
  FaTags,
} from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';
import Tag from '@/component/Tag';
import { getTagColorByIndex } from '../lib/getTagColor';
import { TOO_LONG_ELEMENT_HOVER_SCALE } from '@/common/consts';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/component/ui/breadcrumb';

export default function BlogDetail() {
  const { title: blogTitle } = useParams();
  const blog = blogMap[blogTitle];

  if (!blog) {
    return <Navigate to="/404" />;
  }

  const readTime = calcReadTime(blog.content.length);
  const readTimeContent = `${readTime}分钟`;
  const prevDecoded = decodeURIComponent(blog.prev);
  const nextDecoded = decodeURIComponent(blog.next);

  return (
    <div className={styles.container}>
      <Card whileHover={{ scale: TOO_LONG_ELEMENT_HOVER_SCALE }}>
        <div className="border-b border-gray-200 pb-6">
          <Breadcrumb>
            <BreadcrumbList className="text-xl">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">首页</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blogs">博客列表</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold">正文</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
          <MarkdownRenderer content={blog.title} />
        </h1>

        <div className="flex flex-col gap-2 text-gray-600 text-sm mb-6">
          <div className="flex flex-wrap items-center">
            <div className="flex items-center gap-1.5 mr-6 mb-2 md:mb-0">
              <FaRegCalendarAlt className="text-blue-500" />
              <span>创建时间: {blog.ctime}</span>
            </div>
            <div className="flex items-center gap-1.5 mr-6 mb-2 md:mb-0">
              <FaRegPenToSquare className="text-blue-500" />
              <span>更新时间: {blog.mtime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaRegClock className="text-blue-500" />
              <span>阅读时间: {readTimeContent}</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <FaTags className="text-blue-500" />
              <div className="flex flex-wrap items-center gap-2.5">
                <span>标签: </span>
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
        </div>

        <div className="border-t border-gray-200 pt-6">
          <MarkdownRenderer content={blog.content} />
        </div>
      </Card>

      {/* 上一篇/下一篇文章导航 */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {
          blog.prev ? (
            <Link
              to={`/blog/${blog.prev}`}
              className="bg-white rounded-xl shadow p-5 flex-1 group hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-1 text-blue-500 mb-1">
                <FaChevronLeft />
                <span>上一篇</span>
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                <MarkdownRenderer content={prevDecoded} />
              </h3>
            </Link>
          ) : (
            <div
              className="bg-white rounded-xl shadow p-5 flex-1 group hover:bg-blue-50 transition-colors"
            >
              <div className="flex items-center gap-1 text-blue-500 mb-1">
                <FaChevronLeft />
                <span>上一篇</span>
              </div>
              <h3 className="font-medium text-gray-800">没有了</h3>
            </div>
          )
        }

        {
          blog.next ? (
            <Link
              to={`/blog/${blog.next}`}
              className="bg-white rounded-xl shadow p-5 flex-1 group hover:bg-blue-50 transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-1 text-blue-500 mb-1">
                <span>下一篇</span>
                <FaChevronRight />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                <MarkdownRenderer content={nextDecoded} />
              </h3>
            </Link>
          ) : (
            <div
              className="bg-white rounded-xl shadow p-5 flex-1 group hover:bg-blue-50 transition-colors text-right"
            >
              <div className="flex items-center justify-end gap-1 text-blue-500 mb-1">
                <span>下一篇</span>
                <FaChevronRight />
              </div>
              <h3 className="font-medium text-gray-800">没有了</h3>
            </div>
          )
        }
      </div>
    </div>
  );
}
