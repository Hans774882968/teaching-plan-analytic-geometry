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

export const EDITOR_DEFAULT_THEME = 'vscode-light';

export const useSettingsStore = create(
  persist(
    (set) => ({
      filterStyle: FILTER_STYLE.SELECT,
      hljsTheme: HLJS_DEFAULT_THEME.value,
      lightEditorTheme: EDITOR_DEFAULT_THEME,
      setFilterStyle: (filterStyle) => set({ filterStyle }),
      setHljsTheme: (hljsTheme) => set({ hljsTheme }),
      setLightEditorTheme: (lightEditorTheme) => set({ lightEditorTheme }),
      reset: () => set({
        filterStyle: FILTER_STYLE.SELECT,
        hljsTheme: HLJS_DEFAULT_THEME.value,
        lightEditorTheme: EDITOR_DEFAULT_THEME,
      }),
    }),
    {
      name: 'tpm-settings',
    }
  )
);
