import { create } from 'zustand';
import {
  SELECT_MODES,
} from '@/common/consts';

export const useLessonFilterStore = create((set) => ({
  mode: SELECT_MODES.OR,
  categoryFilter: [],
  difficultyFilter: 'all',
  setMode: (mode) => set({ mode }),
  setCategoryFilter: (categoryFilter) => set({ categoryFilter }),
  setDifficultyFilter: (difficultyFilter) => set({ difficultyFilter }),
}));
