import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useDailyQuestionStore = create(
  persist(
    (set, get) => ({
      todayQuestion: {},
      setTodayQuestion: (question) => set({ todayQuestion: question }),
      checkInDates: [],
      streakDays: 0,
      setCheckInDates: (dates) => set({ checkInDates: dates }),
      setStreakDays: (days) => set({ streakDays: days }),
      isTodayCheckedIn: () => {
        const today = new Date().toISOString().split('T')[0];
        return get().checkInDates.includes(today);
      },
      performCheckIn: () => set((state) => {
        const today = new Date().toISOString().split('T')[0];
        // 避免重复签到
        if (!state.checkInDates.includes(today)) {
          return {
            checkInDates: [...state.checkInDates, today],
            streakDays: state.streakDays + 1,
          };
        }
        // 如果已签到，则不改变状态
        return state;
      }),
    }),
    {
      name: 'daily-question',
    }
  )
);
