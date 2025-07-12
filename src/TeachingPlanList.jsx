import { useState } from 'react';
import {
  FaDraftingCompass,
  FaShapes,
  FaVectorSquare,
  FaCube,
  FaCircle,
  FaGlobeAsia,
  FaArrowRight,
  FaBookmark,
} from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import styles from './TeachingPlanList.module.scss';
import { Link } from 'react-router-dom';
import { addToFavorite } from './lib/utils';

// 在首页用 Helmet 改标题无效，决定改 index.html 的标题
const lessonPlans = [
  { url: '/ellipse-definition', title: '平面几何基础 (TODO)', category: '平面几何', difficulty: '初级', icon: <FaShapes /> },
  { url: '/function-definition/representation', title: '函数及其表示方法', category: '代数', difficulty: '中级', icon: <FaCube /> },
  { url: '/function-definition/monotonicity', title: '函数的单调性', category: '代数', difficulty: '中级', icon: <FaCube /> },
  { url: '/plane-vector-definition', title: '平面向量的定义及其线性运算', category: '平面几何', difficulty: '中级', icon: <FaVectorSquare /> },
  { url: '/ellipse-definition', title: '立体几何入门 (TODO)', category: '空间几何', difficulty: '中级', icon: <FaCube /> },
  { url: '/ellipse-definition', title: '椭圆的定义与性质', category: '圆锥曲线', difficulty: '中级', icon: <FaCircle /> },
  { url: '/hyperbola-definition', title: '双曲线的定义与性质', category: '圆锥曲线', difficulty: '中级', icon: <FaCircle /> },
  { url: '/parabola-definition', title: '抛物线的定义与性质', category: '圆锥曲线', difficulty: '中级', icon: <FaCircle /> },
  { url: '/ellipse-definition', title: '空间解析几何 (TODO)', category: '空间几何', difficulty: '中级', icon: <FaGlobeAsia /> },
].map((lesson, index) => ({ ...lesson, id: index + 1 }));

// 难度颜色映射
const difficultyColors = {
  '初级': 'bg-green-100 text-green-800',
  '中级': 'bg-blue-100 text-blue-800',
  '高级': 'bg-purple-100 text-purple-800',
};

// 分类颜色映射
const categoryColors = {
  '平面几何': 'bg-yellow-100 text-yellow-800',
  '空间几何': 'bg-pink-100 text-pink-800',
  '圆锥曲线': 'bg-teal-100 text-teal-800',
  '代数': 'bg-indigo-100 text-indigo-800',
  // TODO
  // '线性代数': 'bg-orange-100 text-orange-800',
  // '证明方法': 'bg-red-100 text-red-800',
  // '应用案例': 'bg-cyan-100 text-cyan-800',
};

// 教案卡片组件
function LessonCard({ lesson, index }) {
  function onBookmarkBtnClick() {
    addToFavorite(lesson.url, lesson.title);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className={cn(
        styles.lessonCard,
        styles.bounceInAnimation,
        'bg-white rounded-xl overflow-hidden shadow-lg'
      )}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className={`p-3 rounded-lg ${categoryColors[lesson.category]} mr-4`}>
            {lesson.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
            <div className="flex items-center mb-4">
              <span className={`px-2 py-1 rounded-md text-xs font-semibold ${difficultyColors[lesson.difficulty]}`}>
                {lesson.difficulty}
              </span>
              <span className={`px-2 py-1 rounded-md text-xs font-semibold ml-2 ${categoryColors[lesson.category]}`}>
                {lesson.category}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button className="text-blue-600 hover:text-blue-800 font-medium">
            <Link className="flex items-center" to={lesson.url}>
              查看
              <FaArrowRight className="ml-1.5 text-sm" />
            </Link>
          </button>
          <div className="flex">
            <button
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 ml-2"
              onClick={onBookmarkBtnClick}
              title="收藏教案"
            >
              <FaBookmark />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// 主组件
export default function TeachingPlanList() {
  const [filter, setFilter] = useState('all');

  const filteredLessons = filter === 'all'
    ? lessonPlans
    : lessonPlans.filter(lesson => lesson.category === filter);

  // 获取所有分类
  const categories = [...new Set(lessonPlans.map(lesson => lesson.category))];

  return (
    <div
      className={cn(
        styles.teachingPlanList,
        'min-h-screen py-8 px-4 sm:px-6 lg:px-8'
      )}
    >
      {/* 头部 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className={cn(
            styles.floating,
            'w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white'
          )}>
            <FaDraftingCompass className="text-2xl" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          数学<span className="text-blue-600">教案</span>库
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          探索数学世界的教学资源，精选教案助力高效教学
        </p>
      </motion.header>

      {/* 分类过滤 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilter('all')}
            className={cn(
              'px-4 py-2 rounded-full font-medium transition-all',
              filter === 'all' ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'
            )}
          >
            全部教案
          </button>

          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={
                cn(
                  'px-4 py-2 rounded-full font-medium transition-all',
                  filter === category ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'
                )}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 教案列表 */}
      <motion.div
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredLessons.map((lesson, index) => (
          <LessonCard key={lesson.id} lesson={lesson} index={index} />
        ))}
      </motion.div>

      {/* 浮动几何元素 */}
      <motion.div
        className={cn(
          styles.floating,
          'fixed top-40 left-10 w-8 h-8 rounded-full bg-blue-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.div
        className={cn(
          styles.floating,
          'fixed bottom-40 right-10 w-12 h-12 rounded-full bg-purple-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.div
        className={cn(
          styles.floating,
          'fixed top-[20%] right-[15%] w-10 h-10 transform rotate-45 bg-yellow-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />
      <motion.div
        className={cn(styles.floating, 'fixed top-2/3 left-[5%]')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex items-center justify-center text-blue-500">
          <FaCube className="text-2xl" />
        </div>
      </motion.div>
      <motion.div
        className={cn(styles.floating, 'fixed top-1/3 right-[5%]')}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <div className="rounded-lg flex items-center justify-center text-purple-300">
          <FaCircle className="text-xl" />
        </div>
      </motion.div>
    </div>
  );
}
