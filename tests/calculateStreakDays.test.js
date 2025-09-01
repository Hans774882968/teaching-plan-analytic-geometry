import { calculateStreakDays } from '@/mathChallenges/dailyQuestion/utils';
import { describe, it, expect, vi, afterEach } from 'vitest';

/**
 * 设置固定系统时间（格式：YYYY-MM-DD）
 * 用于模拟 "今天" 的日期
 */
const setToday = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  vi.useFakeTimers();
  vi.setSystemTime(new Date(year, month - 1, day));
};

describe('calculateStreakDays', () => {
  // 每个测试后重置时间
  afterEach(() => {
    vi.useRealTimers();
  });

  it('should return 0 for empty check-in dates', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays([])).toBe(0);
  });

  it('昨天签到，但今天没签到，连胜也应大于0（参考多邻国）', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-02'])).toBe(1);
    expect(calculateStreakDays(['2023-10-01', '2023-10-02'])).toBe(2);
    expect(calculateStreakDays(['2023-09-30', '2023-10-01', '2023-10-02'])).toBe(3);
    expect(calculateStreakDays(['2023-08-31', '2023-10-01', '2023-10-02'])).toBe(2);
    expect(calculateStreakDays(['2023-09-28', '2023-09-30', '2023-10-01', '2023-10-02'])).toBe(3);
  });

  it('前天签到了，昨天没签到，连胜应显示0', () => {
    setToday('2025-09-02');
    expect(calculateStreakDays(['2025-08-21', '2025-08-29', '2025-08-30', '2025-08-31'])).toBe(0);
  });

  it('should return 1 when only today is checked in', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-03'])).toBe(1);
  });

  it('should return 2 for two consecutive days (including today)', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-02', '2023-10-03'])).toBe(2);
  });

  it('should return 3 for three consecutive days', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-01', '2023-10-02', '2023-10-03'])).toBe(3);
  });

  it('should return 1 when there is a gap before today', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-01', '2023-10-03'])).toBe(1); // Missing 2023-10-02
    expect(calculateStreakDays(['2023-09-30', '2023-10-01', '2023-10-03'])).toBe(1); // Missing 2023-10-02
  });

  it('should ignore future dates and return 1', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-03', '2023-10-04'])).toBe(1); // 2023-10-04 is future
  });

  it('should handle duplicate dates correctly', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-03', '2023-10-03'])).toBe(1);
  });

  it('should handle unsorted input correctly', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-03', '2023-10-01', '2023-10-02'])).toBe(3);
  });

  it('should handle year-end transition (Dec 31 to Jan 1)', () => {
    setToday('2024-01-01');
    expect(calculateStreakDays(['2023-12-31', '2024-01-01'])).toBe(2);
  });

  it('should handle leap year correctly (Feb 29)', () => {
    setToday('2024-03-01');
    expect(calculateStreakDays(['2024-02-28', '2024-02-29', '2024-03-01'])).toBe(3);
  });

  it('should ignore future dates when calculating streak', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-02', '2023-10-03', '2023-10-04'])).toBe(2);
  });

  it('should handle month-end transition (Jan 31 to Feb 1)', () => {
    setToday('2023-02-01');
    expect(calculateStreakDays(['2023-01-30', '2023-01-31', '2023-02-01'])).toBe(3);
  });

  it('should return 0 when only future dates exist', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['2023-10-04'])).toBe(0);
  });

  it('should handle invalid date formats (ignores them)', () => {
    setToday('2023-10-03');
    expect(calculateStreakDays(['invalid', '2023-10-03', '2023-10-02'])).toBe(2);
    expect(calculateStreakDays(['invalid1', '2023-10-01', '2023-10-03', '2023-10-02', '2023-09-30xxx'])).toBe(3);
  });
});
