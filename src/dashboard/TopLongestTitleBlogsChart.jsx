import { Bar } from 'react-chartjs-2';
import { longTextTrim } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function TopLongestTitleBlogsChart({ data }) {
  const [displayBytes, setDisplayBytes] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      setDisplayBytes(window.innerWidth < 640 ? 10 : 20);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chartData = {
    labels: data.map(item => item.title),
    datasets: [
      {
        label: '字数',
        data: data.map(item => item.length),
        backgroundColor: 'rgba(74, 144, 226, 0.8)',
        borderColor: 'rgba(74, 144, 226, 1)',
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '标题最长的博客',
        font: {
          size: 16,
        },
        color: '#4A90E2',
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => {
            return data[tooltipItems[0].dataIndex].title;
          },
          label: (context) => `字数: ${context.parsed.y.toLocaleString()}`,
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
          text: '字数',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            const label = this.getLabelForValue(value);
            return longTextTrim(label, displayBytes);
          },
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
  };

  return <Bar data={chartData} options={options} />;
}
