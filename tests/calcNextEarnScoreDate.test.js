import { calcNextEarnScoreDate } from '@/mathChallenges/dailyQuestion/utils';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';

const setToday = (dateString) => {
  const [year, month, day] = dateString.split('-').map(Number);
  vi.useFakeTimers();
  vi.setSystemTime(new Date(year, month - 1, day));
};

describe('calcNextEarnScoreDate', () => {
  beforeEach(() => {
    setToday('2025-09-03');
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('0天连胜，则签到第7天，获得额外奖励的日期是9号', () => {
    const result = calcNextEarnScoreDate(0, false);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-09');
  });

  it('有2天连胜且今天尚未签到，则连胜第7天，获得额外奖励的日期是7号', () => {
    const result = calcNextEarnScoreDate(2, false);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-07');
  });

  it('有3天连胜且今天已签到，则连胜第7天，获得额外奖励的日期是7号', () => {
    const result = calcNextEarnScoreDate(3, true);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-07');
  });

  it('有9天连胜且今天尚未签到，则连胜第15天，获得额外奖励的日期是8号', () => {
    const result = calcNextEarnScoreDate(9, false);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-08');
  });

  it('有20天连胜且今天已签到，则连胜第30天，获得额外奖励的日期是13号', () => {
    const result = calcNextEarnScoreDate(20, true);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-13');
  });

  it('有69天连胜且今天尚未签到，则连胜第90天，获得额外奖励的日期是23号', () => {
    const result = calcNextEarnScoreDate(69, false);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-23');
  });

  it('有100天连胜且今天已签到，则连胜第120天，获得额外奖励的日期是23号', () => {
    const result = calcNextEarnScoreDate(100, true);
    expect(result.format('YYYY-MM-DD')).toBe('2025-09-23');
  });

  it('临界点', () => {
    const inpArgs = [
      [6, true],
      [6, false],
      [7, true],
      [7, false],

      [14, true],
      [14, false],
      [15, true],
      [15, false],

      [29, true],
      [29, false],
      [30, true],
      [30, false],
      [31, true],
      [31, false],

      [59, true],
      [59, false],
      [60, true],
      [60, false],
    ];
    const ans = [
      '2025-09-04',
      '2025-09-03',
      '2025-09-11',
      '2025-09-10',

      '2025-09-04',
      '2025-09-03',
      '2025-09-18',
      '2025-09-17',

      '2025-09-04',
      '2025-09-03',
      '2025-10-03',
      '2025-10-02',
      '2025-10-02',
      '2025-10-01',

      '2025-09-04',
      '2025-09-03',
      '2025-10-03',
      '2025-10-02',
    ];
    inpArgs.forEach(([inp, isTodayCheckedIn], index) => {
      const result = calcNextEarnScoreDate(inp, isTodayCheckedIn);
      console.log(inp, isTodayCheckedIn, result.format('YYYY-MM-DD'), ans[index]);//dbg
      expect(result.format('YYYY-MM-DD')).toBe(ans[index]);
    });
  });
});
