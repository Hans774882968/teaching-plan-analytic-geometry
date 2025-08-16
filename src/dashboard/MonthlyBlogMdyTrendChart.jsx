import { Line } from 'react-chartjs-2';

export default function MonthlyBlogMdyTrendChart({ ctimeData, mtimeData, selectedMonth }) {
  // 获取该月的天数
  const [year, month] = selectedMonth.split('-').map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();

  // 生成该月所有天的标签
  const labels = Array.from({ length: daysInMonth }, (_, i) => `${i + 1}日`);

  // 初始化数据数组
  const ctimeCounts = Array(daysInMonth).fill(0);
  const mtimeCounts = Array(daysInMonth).fill(0);

  // 填充数据
  ctimeData.forEach(({ day, count }) => {
    ctimeCounts[day - 1] = count;
  });

  mtimeData.forEach(({ day, count }) => {
    mtimeCounts[day - 1] = count;
  });

  const chartData = {
    labels,
    datasets: [
      {
        label: '创建时间',
        data: ctimeCounts,
        borderColor: 'rgba(79, 70, 229, 1)',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        tension: 0.3,
        fill: true,
      },
      {
        label: '修改时间',
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
            return `${selectedMonth}-${tooltipItems[0].label}`;
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
          text: '博客数量',
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
