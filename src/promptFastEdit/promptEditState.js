import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  DEFAULT_LP_VALUE,
  tpPromptDefaultValueMp,
} from '@/common/teachingPlanPromptData';

export const usePromptEditStore = create()(
  persist(
    (set) => ({
      values: tpPromptDefaultValueMp,
      learningPartner: DEFAULT_LP_VALUE,
      setValues: (payload) =>
        set((state) => ({ values: { ...state.values, ...payload } })),
      setLearningPartner: (partner) => set({ learningPartner: partner }),
      reset: () => set({
        values: tpPromptDefaultValueMp,
        learningPartner: DEFAULT_LP_VALUE,
      }),
    }),
    {
      name: 'prompt-edit',
    }
  )
);
