import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
/**
 * 尝试使用浏览器命令添加收藏（仅支持旧版IE）
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
    console.error('添加收藏失败:', e);
  }

  // 现代浏览器显示提示
  alert(`请按 ${navigator.userAgent.includes('Mac') ? 'Cmd + D' : 'Ctrl + D'} 手动收藏此页面`);
  return false;
}
