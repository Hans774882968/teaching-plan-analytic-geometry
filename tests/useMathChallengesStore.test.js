import { mathChallengesFields, useMathChallengesStoreForTest } from '@/mathChallenges/mathChallengesState';
import { act, renderHook } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach } from 'vitest';

vi.mock('@/mathChallenges/levels', () => {
  const levels = [
    { title: 'L1', quiz: [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }] },
    { title: 'L2', quiz: [{ id: 'q1' }] },
    { title: 'L3', quiz: [{ id: 'q1' }, { id: 'q2' }] },
  ];

  return {
    levels,
    levelsMp: levels.reduce((res, level) => {
      res[level.title] = level;
      return res;
    }, {}),
  };
});

describe('mathChallengesState', () => {
  beforeEach(() => {
    useMathChallengesStoreForTest.setState({ ...mathChallengesFields });
  });

  it('初始状态正确', () => {
    const s = useMathChallengesStoreForTest.getState();
    expect(s.score).toBe(mathChallengesFields.score);
    expect(s.scoredMp).toEqual(mathChallengesFields.scoredMp);
    expect(s.bestTimeMp).toEqual(mathChallengesFields.bestTimeMp);
  });

  describe('setScore', () => {
    it('可更新分数', async () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => result.current.setScore(100));
      expect(result.current.score).toBe(100);
    });
  });

  describe('markScored / isScored', () => {
    it('同一题目仅记录一次', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => {
        result.current.markScored('L1', 'q1');
        result.current.markScored('L1', 'q1'); // 故意重复
        result.current.markScored('L1', 'q2');
      });

      expect(result.current.isScored('L1', 'q1')).toBe(true);
      expect(result.current.isScored('L1', 'q2')).toBe(true);
      expect(
        result.current.scoredMp.L1
      ).toEqual(['q1', 'q2']);
    });
  });

  describe('isCompleted', () => {
    it('当答题数与关卡总数一致时返回 true', () => {
      // L1 有 3 题
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => {
        result.current.markScored('L1', 'q1');
        result.current.markScored('L1', 'q2');
        result.current.markScored('L1', 'q3');
      });
      expect(result.current.isCompleted('L1')).toBe(true);
    });

    it('未完成返回 false', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      expect(result.current.isCompleted('L1')).toBe(false);
    });
  });

  describe('updateBestTime / getBestTime', () => {
    it('仅当更快时才更新', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());

      act(() => result.current.updateBestTime('L1', 30));
      expect(result.current.getBestTime('L1')).toBe(30);

      act(() => result.current.updateBestTime('L1', 40));
      expect(result.current.getBestTime('L1')).toBe(30); // 没变

      act(() => result.current.updateBestTime('L1', 20));
      expect(result.current.getBestTime('L1')).toBe(20);
    });
  });

  describe('countCompletedLevels / countSolvedQuestions', () => {
    it('统计已完成关卡与总答题数1', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => {
        result.current.markScored('L1', 'q1');
        result.current.markScored('L1', 'q2');
        result.current.markScored('L2', 'q1');
      });
      expect(result.current.countCompletedLevels()).toBe(1);
      expect(result.current.countSolvedQuestions()).toBe(3);
    });

    it('统计已完成关卡与总答题数2', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => {
        result.current.markScored('L1', 'q2');
        result.current.markScored('L2', 'q1');
        result.current.markScored('L3', 'q1');
        result.current.markScored('L3', 'q2');
      });
      expect(result.current.countCompletedLevels()).toBe(2);
      expect(result.current.countSolvedQuestions()).toBe(4);
    });
  });

  describe('reset', () => {
    it('可一键清空', () => {
      const { result } = renderHook(() => useMathChallengesStoreForTest());
      act(() => {
        result.current.setScore(999);
        result.current.markScored('L1', 'q1');
        result.current.updateBestTime('L1', 10);
        result.current.reset();
      });
      const s = useMathChallengesStoreForTest.getState();
      expect(s.score).toBe(mathChallengesFields.score);
      expect(s.scoredMp).toEqual(mathChallengesFields.scoredMp);
      expect(s.bestTimeMp).toEqual(mathChallengesFields.bestTimeMp);
    });
  });
});
