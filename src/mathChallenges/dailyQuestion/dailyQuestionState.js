import dayjs from 'dayjs';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { calculateStreakDays } from './utils';

export const useDailyQuestionStore = create(
  persist(
    (set, get) => ({
      todayQuestion: {},
      setTodayQuestion: (question) => set({ todayQuestion: question }),
      checkInDates: [],
      getStreakDays: () => calculateStreakDays(get().checkInDates),
      isTodayCheckedIn: () => {
        const today = dayjs().format('YYYY-MM-DD');
        return get().checkInDates.includes(today);
      },
      performCheckIn: () => set((state) => {
        const today = dayjs().format('YYYY-MM-DD');
        // 避免重复签到
        if (state.checkInDates.includes(today)) {
          // 如果已签到，则不改变状态
          return state;
        }
        return {
          checkInDates: [...state.checkInDates, today],
        };
      }),
    }),
    {
      name: 'daily-question',
    }
  )
);
