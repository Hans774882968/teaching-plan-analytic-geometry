import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const FILTER_STYLE = {
  FLAT: 'flat',
  SELECT: 'select',
};

export const HLJS_DEFAULT_THEME = {
  label: 'Docco',
  value: 'docco.css',
};

export const useSettingsStore = create(
  persist(
    (set) => ({
      filterStyle: FILTER_STYLE.SELECT,
      hljsTheme: HLJS_DEFAULT_THEME.value,
      setFilterStyle: (filterStyle) => set({ filterStyle }),
      setHljsTheme: (hljsTheme) => set({ hljsTheme }),
      reset: () => set({ filterStyle: FILTER_STYLE.SELECT, hljsTheme: HLJS_DEFAULT_THEME.value }),
    }),
    {
      name: 'tpm-settings',
    }
  )
);
