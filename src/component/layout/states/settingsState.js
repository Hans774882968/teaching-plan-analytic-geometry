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

export const DEFAULT_EDITOR_FONT_SIZE = 16;

export const settingsFields = {
  filterStyle: FILTER_STYLE.SELECT,
  hljsTheme: HLJS_DEFAULT_THEME.value,
  expandCode: false,
  lightEditorTheme: EDITOR_DEFAULT_THEME,
  editorFontSize: DEFAULT_EDITOR_FONT_SIZE,
};

export const useSettingsStore = create(
  persist(
    (set) => ({
      ...settingsFields,
      setFilterStyle: (filterStyle) => set({ filterStyle }),
      setHljsTheme: (hljsTheme) => set({ hljsTheme }),
      setExpandCode: (expandCode) => set({ expandCode }),
      setLightEditorTheme: (lightEditorTheme) => set({ lightEditorTheme }),
      setEditorFontSize: (editorFontSize) => set({ editorFontSize }),
      reset: () => set({
        ...settingsFields,
      }),
    }),
    {
      name: 'tpm-settings',
    }
  )
);
