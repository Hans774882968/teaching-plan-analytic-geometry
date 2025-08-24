import { describe, it, expect } from 'vitest';
import {
  calcGroupedData,
  getDaysInMonth,
  parseSelectedMonth,
} from '@/dashboard/blogTrendUtils';

describe('日期工具函数', () => {
  describe('parseSelectedMonth', () => {
    it('应该正确解析年月字符串', () => {
      const result = parseSelectedMonth('2023-10');
      expect(result).toEqual([2023, 10]);
    });

    it('应该处理单数字月份', () => {
      const result = parseSelectedMonth('2023-5');
      expect(result).toEqual([2023, 5]);
    });
  });

  describe('getDaysInMonth', () => {
    it('应该返回正确的月份天数', () => {
      // 2023年10月有31天
      expect(getDaysInMonth(2023, 10)).toBe(31);

      // 2023年2月有28天（非闰年）
      expect(getDaysInMonth(2023, 2)).toBe(28);

      // 2020年2月有29天（闰年）
      expect(getDaysInMonth(2020, 2)).toBe(29);
    });
  });
});

describe('数据分组函数', () => {
  const mockCtimeData = [
    { day: 1, count: 5 },
    { day: 2, count: 3 },
    { day: 5, count: 7 },
    { day: 31, count: 2 },
  ];

  const mockMtimeData = [
    { day: 1, count: 2 },
    { day: 3, count: 4 },
    { day: 5, count: 1 },
    { day: 30, count: 6 },
  ];

  it('应该按分组大小正确分组数据 (groupSize = 1)', () => {
    const result = calcGroupedData(mockCtimeData, mockMtimeData, 31, 1);

    expect(result.labels).toHaveLength(31);
    expect(result.ctimeCounts).toHaveLength(31);
    expect(result.mtimeCounts).toHaveLength(31);

    // 检查第一天
    expect(result.labels[0]).toBe(1);
    expect(result.ctimeCounts[0]).toBe(5);
    expect(result.mtimeCounts[0]).toBe(2);

    // 检查没有数据的日子
    expect(result.ctimeCounts[3]).toBe(0); // 第4天
    expect(result.mtimeCounts[3]).toBe(0); // 第4天
  });

  it('应该按分组大小正确分组数据 (groupSize = 7)', () => {
    const result = calcGroupedData(mockCtimeData, mockMtimeData, 31, 7);

    // 31天，每组7天，应该有5组
    expect(result.labels).toHaveLength(5);
    expect(result.ctimeCounts).toHaveLength(5);
    expect(result.mtimeCounts).toHaveLength(5);

    // 检查标签格式
    expect(result.labels[0]).toBe('1-7日');
    expect(result.labels[4]).toBe('29-31日');

    // 检查第一组数据 (1-7日)
    expect(result.ctimeCounts[0]).toBe(15); // 第1天:5 + 第2天:3 + 第5天:7 = 15
    expect(result.mtimeCounts[0]).toBe(7);  // 第1天:2 + 第3天:4 + 第5天:1 = 7
  });

  it('应该处理空数据', () => {
    const result = calcGroupedData([], [], 30, 5);

    expect(result.ctimeCounts.every(count => count === 0)).toBe(true);
    expect(result.mtimeCounts.every(count => count === 0)).toBe(true);
    expect(result.labels).toHaveLength(6); // 30天，每组5天，共6组
  });

  it('应该处理不完整的分组', () => {
    // 测试不能整除的分组情况
    const result = calcGroupedData(mockCtimeData, mockMtimeData, 10, 3);

    // 10天，每组3天，应该有4组 (1-3, 4-6, 7-9, 10-10)
    expect(result.labels).toHaveLength(4);
    expect(result.labels[3]).toBe('10-10日'); // 最后一组只有一天
  });
});
