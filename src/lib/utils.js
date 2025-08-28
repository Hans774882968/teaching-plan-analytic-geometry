import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SELECT_MODES } from '../common/consts';

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

export function addOrDeleteItem(a, v) {
  if (typeof v === 'number' && isNaN(v)) {
    const res = a.includes(v) ? a.filter((tmp) => !isNaN(tmp)) : [...a, v];
    return res;
  }
  const res = a.includes(v) ? a.filter((tmp) => tmp !== v) : [...a, v];
  return res;
}

export function filterBySelections(a, attr, selection, mode) {
  if (!isNonEmptyArray(selection)) return a;

  const res = a.filter((item) => {
    if (mode === SELECT_MODES.AND) {
      const isItemLegal = item && Array.isArray(item[attr]);
      return selection.every(s => isItemLegal && item[attr].includes(s));
    } else {
      const isItemLegal = item && Array.isArray(item[attr]);
      return selection.some(s => isItemLegal && item[attr].includes(s));
    }
  });
  return res;
}

export function filterBySelectionsSingle(a, attr, selection, mode) {
  if (!isNonEmptyArray(selection)) return a;

  const res = a.filter((item) => {
    if (mode === SELECT_MODES.AND) {
      return selection.every(s => item[attr] === s);
    } else {
      return selection.some(s => item[attr] === s);
    }
  });
  return res;
}

export function isSubSequence(long, short) {
  if (!short) return true;
  if (long.length < short.length) return false;
  const longStr = long.toLowerCase();
  const shortStr = short.toLowerCase();
  if (longStr.length === shortStr.length && longStr !== shortStr) return false;
  let j = 0;
  for (let i = 0; i < longStr.length; ++i) {
    if (longStr[i] !== shortStr[j]) continue;
    ++j;
    if (j === shortStr.length) return true;
  }
  return j === shortStr.length;
}

export function localDownloadFile({
  data,
  mimeType = 'text/plain',
  fileName,
  onSuccess,
}) {
  const blob = new Blob([data], { type: mimeType });
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(downloadUrl);
    onSuccess(fileName);
  }, 100);
}

/**
 * 按 UTF-8 字节长度裁剪长文本
 * @param {string} text      原始文本
 * @param {number} maxBytes  最大字节数（默认 10）
 * @param {string} suffix    后缀符号（默认 …）
 * @returns {string}
 */
export function longTextTrim(text, maxBytes = 10, suffix = '…') {
  if (typeof text !== 'string') return String(text);

  // 使用 Array.from 正确分割 Unicode 字符
  const chars = Array.from(text);
  if (!chars.length) return text;

  const encoder = new TextEncoder();

  // 构建字节长度前缀和数组
  const prefixSum = [0];
  for (let i = 0; i < chars.length; i++) {
    const byteLength = encoder.encode(chars[i]).length;
    prefixSum.push(prefixSum[i] + byteLength);
  }

  // 如果整个文本的字节长度不超过最大字节数，直接返回
  if (prefixSum[chars.length] <= maxBytes) return text;

  // 二分查找找到最大的索引，使得 prefixSum[index] <= maxBytes
  let left = 0;
  let right = chars.length;

  while (left < right) {
    const mid = (left + right + 1) >> 1;
    if (prefixSum[mid] <= maxBytes) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  // 如果截断后只剩空串，直接返回后缀
  return left ? chars.slice(0, left).join('') + suffix : suffix;
}
