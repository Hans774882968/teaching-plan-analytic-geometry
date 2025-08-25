import { useState } from 'react';
import {
  FaDraftingCompass,
  FaShapes,
  FaCube,
  FaCircle,
  FaArrowRight,
  FaBookmark,
  FaChartLine,
  FaUserCircle,
} from 'react-icons/fa';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import { addToFavorite, cn } from '@/lib/utils';
import { motion } from 'motion/react';
import styles from './TeachingPlanList.module.scss';
import { Link } from 'react-router-dom';
import NoData from '@/component/NoData';
import { tagColorList } from '@/lib/getTagColor';
import Card from '@/component/teachingPlan/Card';
import {
  LEARNING_PARTNER_MAP,
  TP_ITEMS_PER_PAGE,
  TP_PER_PAGE_OPTIONS,
} from '@/common/consts';
import { getPaginationItems } from '@/lib/pagination';
import { PaginationWithToolbar } from '@/component/ui/pagination-with-toolbar';
import CategorySelector from './CategorySelector';
import DifficultySelector from './DifficultySelector';
import LearningPartnerSelector from './LearningPartnerSelector';
import SelectMode from '@/component/SelectMode';
import { useLessonFilterStore } from './states/lessonFilterState';
import { getFilteredLessons } from './utils';
import { Input } from '@/component/ui/input';
import { Button } from '@/component/ui/button';
import { TypeAnimation } from 'react-type-animation';

// 在首页用 Helmet 改标题无效，决定改 index.html 的标题
const lessonPlans = [
  { url: '/rotation/definition', title: '图形的旋转', category: ['平面几何'], difficulty: '初中', lpName: 'conan' },
  { url: '/exponential/real-num-exp-powers', title: '实数指数幂及其运算', category: ['代数'], difficulty: '高中', lpName: 'chitanda' },
  { url: '/exponential/exp-function', title: '指数函数的性质与图像', category: ['代数'], difficulty: '高中', lpName: 'chitanda' },
  { url: '/logarithmic/log-operation', title: '对数运算', category: ['代数'], difficulty: '高中', lpName: 'menhera' },
  { url: '/logarithmic/log-calculation', title: '对数运算法则', category: ['代数'], difficulty: '高中', lpName: 'menhera' },
  { url: '/logarithmic/log-function', title: '对数函数', category: ['代数'], difficulty: '高中', lpName: 'menhera' },
  { url: '/logarithmic/inv-function', title: '指数函数与对数函数的关系', category: ['代数'], difficulty: '高中', lpName: 'menhera' },
  { url: '/function-definition/representation', title: '函数及其表示方法', category: ['代数'], difficulty: '高中', lpName: 'conan' },
  { url: '/function-definition/monotonicity', title: '函数的单调性', category: ['代数'], difficulty: '高中', lpName: 'conan' },
  { url: '/function-definition/even-odd', title: '函数的奇偶性', category: ['代数'], difficulty: '高中', lpName: 'conan' },
  { url: '/plane-vector-definition', title: '平面向量的定义及其线性运算', category: ['平面几何'], difficulty: '高中', lpName: 'conan' },
  { url: '/solid-geometry-intro/oblique-drawing', title: '空间几何体与斜二测画法', category: ['空间几何'], difficulty: '高中', lpName: 'conan' },
  { url: '/spatial-vector/fundamental-theorem', title: '空间向量基本定理', category: ['空间几何'], difficulty: '高中', lpName: 'conan' },
  { url: '/ellipse-definition', title: '椭圆的定义与性质', category: ['圆锥曲线', '代数'], difficulty: '高中', lpName: 'conan' },
  { url: '/hyperbola-definition', title: '双曲线的定义与性质', category: ['圆锥曲线', '代数'], difficulty: '高中', lpName: 'conan' },
  { url: '/parabola-definition', title: '抛物线的定义与性质', category: ['圆锥曲线', '代数'], difficulty: '高中', lpName: 'conan' },
].map((lesson, index) => ({ ...lesson, id: index + 1 }));

const categories = [...new Set(lessonPlans.flatMap(lesson => lesson.category))].sort();
const difficulties = [...new Set(lessonPlans.map(lesson => lesson.difficulty))];
const learningPartners = [...new Set(lessonPlans.flatMap(lesson => lesson.lpName))].sort();

// 难度颜色映射
const difficultyColors = {
  '小学': 'bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900',
  '初中': 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900',
  '高中': 'bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-900',
  '大学': 'bg-orange-100 text-orange-800 hover:bg-orange-200 hover:text-orange-900',
  '数专/研究生': 'bg-red-100 text-red-800 hover:bg-red-200 hover:text-red-900',
};

// 分类颜色映射
const categoryColors = categories.reduce((categoryColors, category, index) => {
  categoryColors[category] = tagColorList[index % tagColorList.length];
  return categoryColors;
}, {});

const categoryShapes = {
  '平面几何': <FaShapes />,
  '空间几何': <FaCube />,
  '圆锥曲线': <FaCircle />,
  '代数': <FaChartLine />,
};

// 学习伙伴颜色映射
const learningPartnerColors = learningPartners.reduce((learningPartnerColors, learningPartner, index) => {
  learningPartnerColors[learningPartner] = tagColorList[index % tagColorList.length];
  return learningPartnerColors;
}, {});

const LEARNING_PARTNER_TEXT_COLOR = {
  conan: 'text-[var(--lp-text-color-male)]',
  chitanda: 'text-[var(--lp-text-color-female)]',
  menhera: 'text-[var(--lp-text-color-female)]',
};

// 教案卡片组件
function LessonCard({ lesson, index }) {
  const learningPartnerName = LEARNING_PARTNER_MAP[lesson.lpName];

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
      <div className="p-6 flex flex-col gap-4 justify-between h-full">
        <div className="flex items-start gap-4">
          <div className="flex flex-col gap-4">
            {
              // 允许 2 个，再多就影响观感
              lesson.category.slice(0, 2).map(cat => (
                <div key={cat} className={cn('p-3 rounded-lg transition-colors duration-300', categoryColors[cat])}>
                  {cat && categoryShapes[cat]}
                </div>
              ))
            }
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
            <div className="flex items-center">
              <span className={cn(
                'px-2 py-1 rounded-md text-xs font-semibold transition-colors duration-300',
                difficultyColors[lesson.difficulty]
              )}>
                {lesson.difficulty}
              </span>
              {
                lesson.category.map(cat => (
                  <span
                    key={cat}
                    className={cn(
                      'px-2 py-1 rounded-md text-xs font-semibold transition-colors duration-300 ml-2',
                      categoryColors[cat]
                    )}
                  >
                    {cat}
                  </span>
                ))
              }
            </div>
            <div
              className={cn('flex items-center', LEARNING_PARTNER_TEXT_COLOR[lesson.lpName] || 'text-[var(--lp-text-color-backup)]')}
              title={`学习伙伴：${learningPartnerName}`}
            >
              <FaUserCircle className="mr-2" />
              <span className="font-semibold">{LEARNING_PARTNER_MAP[lesson.lpName]}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
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
  const {
    mode,
    categoryFilter,
    difficultyFilter,
    learningPartnerFilter,
    titleFilter,
    setMode,
    setCategoryFilter,
    setDifficultyFilter,
    setLearningPartnerFilter,
    setTitleFilter,
  } = useLessonFilterStore();

  const filteredLessons = getFilteredLessons(
    lessonPlans,
    categoryFilter,
    difficultyFilter,
    learningPartnerFilter,
    titleFilter,
    mode
  );

  const [itemsPerPage, setItemsPerPage] = useState(TP_ITEMS_PER_PAGE);
  // 所有导致数据个数变化的场景都需要重置页码
  const [currentPage, setCurrentPage] = useState(1);
  const {
    pageItems: displayLessons,
  } = getPaginationItems({ itemsPerPage, currentPage, items: filteredLessons });

  const onCategoryFilterChange = (category) => {
    setCategoryFilter(category);
    setCurrentPage(1);
  };

  const onDifficultyFilterChange = (difficulty) => {
    setDifficultyFilter(difficulty);
    setCurrentPage(1);
  };

  const onLearningPartnerFilterChange = (learningPartner) => {
    setLearningPartnerFilter(learningPartner);
    setCurrentPage(1);
  };

  const onTitleFilterChange = (titleFilter) => {
    setTitleFilter(titleFilter);
    setCurrentPage(1);
  };

  const onResetFilters = () => {
    // 清空表单所有项目
    onCategoryFilterChange([]);
    onDifficultyFilterChange('all');
    onLearningPartnerFilterChange([]);
    onTitleFilterChange('');
  };

  const onModeChange = (val) => {
    setMode(val);
    onResetFilters();
  };

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
        <h1 className={cn(styles.indexTitle, 'text-4xl md:text-5xl font-bold text-gray-800 mb-4')}>
          数学<span className="text-blue-600">教案</span>库
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          <TypeAnimation
            sequence={[
              'LLM高效生成教学资源方案探索，为教师高效教学赋能',
              1500,
              'LLM高效生成教学资源方案探索，为学生高效探索赋能',
              1500,
            ]}
            speed={50}
            wrapper="span"
            repeat={Infinity}
          />
        </p>
      </motion.header>

      <Card
        className="max-w-4xl mx-auto mb-12 flex flex-col gap-4 !overflow-x-visible"
        initial={{ opacity: 0, scale: 0.95, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            筛选模式：
            <SelectMode defaultValue={mode} onValueChange={onModeChange} />
          </div>

          <CategorySelector
            categories={categories}
            onCategoryFilterChange={onCategoryFilterChange}
            categoryColors={categoryColors}
          />

          <DifficultySelector
            difficulties={difficulties}
            onDifficultyFilterChange={onDifficultyFilterChange}
            difficultyColors={difficultyColors}
          />

          <LearningPartnerSelector
            learningPartners={learningPartners}
            learningPartnerColors={learningPartnerColors}
            onLearningPartnerFilterChange={onLearningPartnerFilterChange}
          />

          <div className="flex flex-wrap items-center gap-3">
            搜索标题：
            <Input
              className="w-50 sm:w-70 md:w-90"
              name="标题"
              placeholder="请输入"
              value={titleFilter}
              onChange={(e) => onTitleFilterChange(e.target.value)}
            />
          </div>
        </div>

        <div>
          <Button
            onClick={onResetFilters}
            variant="default"
          >
            重置
          </Button>
        </div>

        <PaginationWithToolbar
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          itemsPerPageOptions={TP_PER_PAGE_OPTIONS}
          onPageChange={setCurrentPage}
          setItemsPerPage={setItemsPerPage}
          total={filteredLessons.length}
        />
      </Card>

      {/* 教案列表 */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {
          displayLessons.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                displayLessons.map((lesson, index) => (
                  <LessonCard key={lesson.id} lesson={lesson} index={index} />
                ))
              }
            </div>
          ) : (
            <Card>
              <NoData text="暂无教案" />
            </Card>
          )
        }
      </motion.div>

      {/* 浮动几何元素 */}
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed top-40 left-10 w-8 h-8 rounded-full bg-blue-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed bottom-40 right-10 w-12 h-12 rounded-full bg-purple-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed top-[40%] left-[10%] w-10 h-10 transform rotate-45 bg-yellow-300 opacity-30'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      />
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed top-2/3 left-[5%]'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex items-center justify-center text-blue-500">
          <FaCube className="text-2xl" />
        </div>
      </motion.div>
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed top-1/2 right-[10%]'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="flex items-center justify-center text-blue-500">
          <FaDraftingCompass className="text-2xl" />
        </div>
      </motion.div>
      <motion.div
        className={cn(
          styles.floating,
          'hidden xl:block',
          'fixed top-1/3 right-[5%]'
        )}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <div className="rounded-lg flex items-center justify-center text-purple-300">
          <FaCircleDollarToSlot className="text-2xl" />
        </div>
      </motion.div>
    </div>
  );
}
