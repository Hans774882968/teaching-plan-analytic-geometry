import { useEffect } from 'react';
import { HLJS_DEFAULT_THEME, useSettingsStore } from '@/component/layout/states/settingsState';
import { DATA_HLJS_THEME } from '@/common/consts';
import { hljsThemeCssText } from '@/common/hljsThemeCssText';
import { getWebsiteBasePath } from '@/lib/getWebsiteBasePath';

function getThemeCssContent(actualHljsTheme) {
  const cssContent = hljsThemeCssText[actualHljsTheme] || '';
  const basePath = getWebsiteBasePath().slice(0, -1);
  return cssContent.replaceAll('__VITE_BASE_PATH__', basePath);
}

/**
 * 动态加载 highlight.js 主题的 Hook
 */
export function useHljsTheme() {
  const { hljsTheme } = useSettingsStore();

  useEffect(() => {
    const actualHljsTheme = hljsTheme || HLJS_DEFAULT_THEME.value;

    const hljsThemeInfo = `tpm-hljs-${actualHljsTheme}`;
    document.documentElement.setAttribute(DATA_HLJS_THEME, hljsThemeInfo);

    let styleEl = document.getElementById(hljsThemeInfo);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = hljsThemeInfo;
      styleEl.textContent = getThemeCssContent(actualHljsTheme);
      document.head.appendChild(styleEl);
    }

    return () => {
      if (styleEl.parentNode) {
        styleEl.parentNode.removeChild(styleEl);
      }
    };
  }, [hljsTheme]);
}
