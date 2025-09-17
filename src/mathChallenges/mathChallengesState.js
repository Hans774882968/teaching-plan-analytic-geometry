import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { levels, levelsMp } from './levels';

export const mathChallengesFields = {
  score: 0,
  scoredMp: {},
  bestTimeMp: {},
};

const baseStore = (set, get) => ({
  ...mathChallengesFields,
  setScore: (score) => set({ score }),
  markScored(lessonTitle, qid) {
    set((state) => {
      const list = state.scoredMp[lessonTitle] ?? [];
      if (list.includes(qid)) return state;
      return {
        scoredMp: {
          ...state.scoredMp,
          [lessonTitle]: [...list, qid],
        },
      };
    });
  },
  isScored(lessonTitle, qid) {
    return (get().scoredMp[lessonTitle] ?? []).includes(qid);
  },
  isCompleted(lessonTitle) {
    const scoredQuestions = get().scoredMp[lessonTitle] ?? [];
    return scoredQuestions.length === levelsMp[lessonTitle].quiz.length;
  },
  getBestTime(lessonTitle) {
    return get().bestTimeMp[lessonTitle] ?? null;
  },
  updateBestTime(lessonTitle, time) {
    set((state) => {
      const currentBest = state.bestTimeMp[lessonTitle];
      if (currentBest && time >= currentBest) return state;
      return {
        bestTimeMp: {
          ...state.bestTimeMp,
          [lessonTitle]: time,
        },
      };
    });
  },
  countCompletedLevels() {
    return levels.reduce((res, level) => {
      if (get().isCompleted(level.title)) return res + 1;
      return res;
    }, 0);
  },
  countSolvedQuestions() {
    return levels.reduce((res, level) => {
      const scoredQuestions = get().scoredMp[level.title] ?? [];
      return res + scoredQuestions.length;
    }, 0);
  },
  countLevelsSetRecords() {
    return Object.keys(get().bestTimeMp || {}).length;
  },
  reset: () => set({ ...mathChallengesFields }),
});

export const useMathChallengesStore = create(
  persist(
    baseStore,
    {
      name: 'math-challenges',
    }
  )
);

export const useMathChallengesStoreForTest = create(baseStore);
