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
import TopTagsChart from './TopTagsChart';
import TopTaggedBlogsChart from './TopTaggedBlogsChart';
import TopLongestBlogsChart from './TopLongestBlogsChart';
import TopLongestTitleBlogsChart from './TopLongestTitleBlogsChart';
import IndicatorCard from './IndicatorCard';
import ChartCard from './ChartCard';
import {
  calculateMonthlyBlogMdy,
  getAvailableMonths,
  topAppearanceTags,
  topLongestBlogs,
  topLongestTitleBlogs,
  topTaggedBlogs,
  totalBlogs,
  totalTagReferences,
  totalTags,
  totalTitleWords,
  totalWords,
} from './dataCollect';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/component/ui/select';
import { FaBlog, FaBook, FaBookOpen, FaTags } from 'react-icons/fa';

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
        <IndicatorCard txt={<><FaTags />标签总数</>} val={totalTags} />
        <IndicatorCard txt={<><FaTags />标签总引用数</>} val={totalTagReferences} />
        <IndicatorCard txt={<><FaBlog />博客总数</>} val={totalBlogs} />
        <IndicatorCard txt={<><FaBookOpen />博客总字数</>} val={totalWords} />
        <IndicatorCard txt={<><FaBook />博客标题总字数</>} val={totalTitleWords} />
      </div>

      {/* 图表区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <ChartCard>
          <div className="h-80">
            <TopTagsChart data={topAppearanceTags} />
          </div>
        </ChartCard>

        <ChartCard>
          <div className="h-80">
            <TopTaggedBlogsChart data={topTaggedBlogs} />
          </div>
        </ChartCard>

        <ChartCard>
          <div className="h-80">
            <TopLongestTitleBlogsChart data={topLongestTitleBlogs} />
          </div>
        </ChartCard>

        <ChartCard>
          <div className="h-80">
            <TopLongestBlogsChart data={topLongestBlogs} />
          </div>
        </ChartCard>

        <ChartCard>
          <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:justify-between sm:items-center">
            <h2 className="text-xl font-bold text-[var(--tpm-primary)] sm:w-1/2">月度博客趋势</h2>
            <Select
              className="border border-gray-300 rounded-md px-3 py-1"
              value={selectedMonth}
              onValueChange={setSelectedMonth}
            >
              <SelectTrigger>
                <SelectValue placeholder="请选择" />
              </SelectTrigger>
              <SelectContent>
                {
                  getAvailableMonths().map((month) => {
                    return (
                      <SelectItem key={month} value={month}>
                        {month}
                      </SelectItem>
                    );
                  })
                }
              </SelectContent>
            </Select>
          </div>
          <div className="h-80">
            <MonthlyBlogMdyTrendChart
              ctimeData={monthlyBlogMdy.ctime}
              mtimeData={monthlyBlogMdy.mtime}
              selectedMonth={selectedMonth}
            />
          </div>
        </ChartCard>
      </div>
    </div>
  );
}
