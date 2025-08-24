import { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  calcGroupedData,
  getDaysInMonth,
  parseSelectedMonth,
} from './blogTrendUtils';
import dayjs from 'dayjs';

export default function MonthlyBlogMdyTrendChart({ ctimeData, mtimeData, selectedMonth }) {
  const [groupSize, setGroupSize] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // 小于640px使用3天分组，大屏幕使用1天分组
      setGroupSize(window.innerWidth < 640 ? 3 : 1);
    };

    // 初始设置
    handleResize();

    // 添加窗口大小变化监听
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [year, month] = parseSelectedMonth(selectedMonth);
  const daysInMonth = useMemo(() => getDaysInMonth(year, month), [year, month]);

  // 根据分组大小分组数据
  const groupedData = useMemo(() => {
    return calcGroupedData(ctimeData, mtimeData, daysInMonth, groupSize);
  }, [ctimeData, mtimeData, daysInMonth, groupSize]);

  const { labels, ctimeCounts, mtimeCounts } = groupedData;

  const chartData = {
    labels,
    datasets: [
      {
        label: '创建',
        data: ctimeCounts,
        borderColor: 'rgba(79, 70, 229, 1)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true,
      },
      {
        label: '修改',
        data: mtimeCounts,
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `月度博客趋势 (${selectedMonth})`,
        font: {
          size: 16,
        },
        color: '#4A90E2',
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            const tooltipItemLabel = tooltipItems[0].label;
            return tooltipItemLabel.includes('日') ? `${selectedMonth}: ${tooltipItemLabel}` : dayjs(selectedMonth).add(Number(tooltipItemLabel) - 1, 'day').format('YYYY-MM-DD');
          },
          label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: '博客数',
        },
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        title: {
          display: true,
          text: '日期',
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
  };

  return <Line data={chartData} options={options} />;
}
