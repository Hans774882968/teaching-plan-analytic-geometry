import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const FILTER_STYLE = {
  FLAT: 'flat',
  SELECT: 'select',
};

export const useSettingsStore = create(
  persist(
    (set) => ({
      filterStyle: FILTER_STYLE.FLAT,
      setFilterStyle: (filterStyle) => set({ filterStyle }),
      reset: () => set({ filterStyle: FILTER_STYLE.FLAT }),
    }),
    {
      name: 'tpm-settings',
    }
  )
);
