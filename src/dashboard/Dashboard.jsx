import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import MonthlyBlogMdyTrendChart from './MonthlyBlogMdyTrendChart';
import AnimatedNumber from '@/component/AnimatedNumber';
import TopTagsChart from './TopTagsChart';
import TopTaggedBlogsChart from './TopTaggedBlogsChart';
import TopLongestBlogsChart from './TopLongestBlogsChart';
import {
  calculateMonthlyBlogMdy,
  getAvailableMonths,
  topAppearanceTags,
  topLongestBlogs,
  topTaggedBlogs,
  totalTags,
  totalWords,
} from './dataCollect';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState('2025-07');
  const monthlyBlogMdy = calculateMonthlyBlogMdy(selectedMonth);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 顶部指标卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-[var(--tpm-primary)] mb-2">
            <AnimatedNumber value={totalTags} />
          </div>
          <div className="text-gray-600 text-lg">标签总数</div>
        </div>

        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6 flex flex-col items-center justify-center">
          <div className="text-5xl font-bold text-[var(--tpm-primary)] mb-2">
            <AnimatedNumber value={totalWords} />
          </div>
          <div className="text-gray-600 text-lg">博客总字数</div>
        </div>
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6">
          <div className="h-64">
            <TopTagsChart data={topAppearanceTags} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6">
          <div className="h-64">
            <TopTaggedBlogsChart data={topTaggedBlogs} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6">
          <div className="h-64">
            <TopLongestBlogsChart data={topLongestBlogs} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky-100 to-sky-50 rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[var(--tpm-primary)]">月度博客趋势</h2>
            <div>
              <label htmlFor="month-select" className="mr-2 text-[var(--tpm-primary)]">选择月份：</label>
              <select
                id="month-select"
                className="border border-gray-300 rounded-md px-3 py-1"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {
                  getAvailableMonths().map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))
                }
              </select>
            </div>
          </div>
          <div className="h-64">
            <MonthlyBlogMdyTrendChart
              ctimeData={monthlyBlogMdy.ctime}
              mtimeData={monthlyBlogMdy.mtime}
              selectedMonth={selectedMonth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
