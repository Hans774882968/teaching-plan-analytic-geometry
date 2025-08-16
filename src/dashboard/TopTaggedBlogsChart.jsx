import { Bar } from 'react-chartjs-2';

// 最多标签博客图表
export default function TopTaggedBlogsChart({ data }) {
  const chartData = {
    labels: data.map(item => item.title),
    datasets: [
      {
        label: '标签数量',
        data: data.map(item => item.count),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: 'rgba(16, 185, 129, 1)',
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
        text: '拥有最多标签的博客',
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
          label: (context) => `标签数量: ${context.parsed.y}`,
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
          text: '标签数量',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            const label = this.getLabelForValue(value);
            return label.length > 15 ? label.substring(0, 15) + '...' : label;
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
