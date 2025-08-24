import { longTextTrim } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

export default function TopTagsChart({ data }) {
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
    labels: data.map(item => item.tag),
    datasets: [
      {
        label: '引用次数',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(79, 70, 229, 0.8)',
        borderColor: 'rgba(79, 70, 229, 1)',
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
        text: '被最多博客引用的标签',
        font: {
          size: 16,
        },
        color: '#4A90E2',
      },
      tooltip: {
        callbacks: {
          label: (context) => `引用次数: ${context.parsed.y}`,
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
          text: '引用次数',
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
