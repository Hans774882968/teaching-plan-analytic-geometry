import { create } from 'zustand';
import {
  SELECT_MODES,
} from '@/common/consts';

export const useFilterStore = create((set) => ({
  mode: SELECT_MODES.AND,
  tagFilter: [],
  setMode: (mode) => set({ mode }),
  setTagFilter: (tagFilter) => set({ tagFilter }),
}));
