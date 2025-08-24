// 获取该月的天数
export function parseSelectedMonth(selectedMonth) {
  const [year, month] = selectedMonth.split('-').map(Number);
  return [year, month];
}

export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// 根据分组大小分组数据
export function calcGroupedData(ctimeData, mtimeData, daysInMonth, groupSize) {
  // 初始化分组数组
  const groupedCtime = [];
  const groupedMtime = [];
  const groupedLabels = [];

  // 按分组大小遍历
  for (let i = 0; i < daysInMonth; i += groupSize) {
    const startDay = i + 1;
    const endDay = Math.min(i + groupSize, daysInMonth);

    // 计算该分组的博客数量
    let ctimeCount = 0;
    let mtimeCount = 0;

    for (let j = startDay; j <= endDay; j++) {
      // 获取当天的数据
      const ctimeDayData = ctimeData.find(d => d.day === j);
      const mtimeDayData = mtimeData.find(d => d.day === j);

      // 累加计数
      if (ctimeDayData) ctimeCount += ctimeDayData.count;
      if (mtimeDayData) mtimeCount += mtimeDayData.count;
    }

    // 添加分组数据
    groupedCtime.push(ctimeCount);
    groupedMtime.push(mtimeCount);

    // 生成分组标签
    if (groupSize === 1) {
      groupedLabels.push(startDay);
    } else {
      groupedLabels.push(`${startDay}-${endDay}日`);
    }
  }

  return {
    labels: groupedLabels,
    ctimeCounts: groupedCtime,
    mtimeCounts: groupedMtime,
  };
}
