import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { levels, levelsMp } from './levels';

export const useMathChallengesStore = create(
  persist(
    (set, get) => ({
      score: 0,
      scoredMp: {},
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
      countCompletedLevels() {
        return levels.reduce((res, level) => {
          if (get().isCompleted(level.title)) return res + 1;
          return res;
        }, 0);
      },
      reset: () => set({ score: 0, scoredMp: {} }),
    }),
    {
      name: 'math-challenges',
    }
  )
);
