import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
/**
 * 尝试使用浏览器命令添加收藏（仅支持旧版IE） TODO: 改为写入 localStorage 实现业务意义的“收藏”
 * @param {string} url - 收藏的URL
 * @param {string} title - 收藏的标题
 */
export function addToFavorite(url, title) {
  try {
    // IE专属方法
    if (window.external && 'AddFavorite' in window.external) {
      window.external.AddFavorite(url, title);
      return true;
    }
  } catch (e) {
    console.error('[tpm] 添加收藏失败:', e);
  }

  // 现代浏览器显示提示
  alert(`请进入教案网页后按 ${navigator.userAgent.includes('Mac') ? 'Cmd + D' : 'Ctrl + D'} 手动收藏`);
  return false;
}

export function calcReadTime(contentLength) {
  const wordsPerMinute = 400;
  const readTime = Math.max(1, Math.round(contentLength / wordsPerMinute));
  return readTime;
}

export function isNonEmptyArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}
