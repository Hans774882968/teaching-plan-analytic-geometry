import { describe, it, expect } from 'vitest';
import {
  calcReadTime,
  isNonEmptyArray,
  addOrDeleteItem,
  filterBySelections,
  longTextTrim,
} from '@/lib/utils';
import { SELECT_MODES } from '@/common/consts';

describe('utils', () => {
  describe('calcReadTime', () => {
    it('calculates read time for various content lengths', () => {
      expect(calcReadTime(200)).toBe(1);   // 少于 400 字
      expect(calcReadTime(400)).toBe(1);   // 正好 400 字
      expect(calcReadTime(600)).toBe(2);   // 600/400=1.5 → 2
      expect(calcReadTime(1200)).toBe(3);  // 1200/400=3
      expect(calcReadTime(0)).toBe(1);     // 最小值为 1
      expect(calcReadTime(-100)).toBe(1);  // 处理负值
    });

    it('rounds read time correctly', () => {
      expect(calcReadTime(399)).toBe(1);   // 向下取整
      expect(calcReadTime(401)).toBe(1);   // 向上取整
      expect(calcReadTime(799)).toBe(2);   // 799/400=1.9975 → 2
    });
  });

  describe('isNonEmptyArray', () => {
    it('returns true for non-empty arrays', () => {
      expect(isNonEmptyArray([1])).toBe(true);
      expect(isNonEmptyArray(['a', 'b'])).toBe(true);
      expect(isNonEmptyArray([{}])).toBe(true);
    });

    it('returns false for empty or non-array values', () => {
      expect(isNonEmptyArray([])).toBe(false);
      expect(isNonEmptyArray(null)).toBe(false);
      expect(isNonEmptyArray(undefined)).toBe(false);
      expect(isNonEmptyArray('array')).toBe(false);
      expect(isNonEmptyArray({ length: 0 })).toBe(false);
      expect(isNonEmptyArray(123)).toBe(false);
    });
  });

  describe('addOrDeleteItem', () => {
    it('adds item when not in array', () => {
      const arr = ['a', 'b'];
      expect(addOrDeleteItem(arr, 'c')).toEqual(['a', 'b', 'c']);
    });

    it('removes item when in array', () => {
      const arr = ['a', 'b', 'c'];
      expect(addOrDeleteItem(arr, 'b')).toEqual(['a', 'c']);
    });

    it('handles empty arrays', () => {
      expect(addOrDeleteItem([], 'x')).toEqual(['x']);
    });

    it('handles multiple occurrences', () => {
      const arr = ['a', 'b', 'a', 'c'];
      expect(addOrDeleteItem(arr, 'a')).toEqual(['b', 'c']); // 移除所有 'a'
    });

    it('handles objects and special values', () => {
      const obj = { id: 1 };
      const arr = [obj, 'b'];
      expect(addOrDeleteItem(arr, obj)).toEqual(['b']);
      expect(addOrDeleteItem(arr, { id: 1 })).toEqual([obj, 'b', { id: 1 }]); // 不同引用

      // 处理 NaN
      const nanArr = [1, NaN, 2];
      expect(addOrDeleteItem(nanArr, NaN)).toEqual([1, 2]);
    });
  });

  describe('filterBySelections', () => {
    const items = [
      { id: 1, tags: ['js', 'react'] },
      { id: 2, tags: ['js', 'vue'] },
      { id: 3, tags: ['python', 'django'] },
      { id: 4, tags: ['react'] },
    ];

    it('filters with AND mode (all tags must match)', () => {
      const result = filterBySelections(items, 'tags', ['js'], SELECT_MODES.AND);
      expect(result.map(i => i.id)).toEqual([1, 2]);

      const result2 = filterBySelections(items, 'tags', ['js', 'react'], SELECT_MODES.AND);
      expect(result2.map(i => i.id)).toEqual([1]);
    });

    it('filters with OR mode (any tag matches)', () => {
      const result = filterBySelections(items, 'tags', ['vue', 'django'], SELECT_MODES.OR);
      expect(result.map(i => i.id)).toEqual([2, 3]);

      const result2 = filterBySelections(items, 'tags', ['react'], SELECT_MODES.OR);
      expect(result2.map(i => i.id)).toEqual([1, 4]);
    });

    it('returns all items when no tags selected', () => {
      const result = filterBySelections(items, 'tags', [], SELECT_MODES.AND);
      expect(result).toEqual(items);

      const result2 = filterBySelections(items, 'tags', [], SELECT_MODES.OR);
      expect(result2).toEqual(items);
    });

    it('returns empty array when no matches', () => {
      const result = filterBySelections(items, 'tags', ['angular'], SELECT_MODES.AND);
      expect(result).toEqual([]);

      const result2 = filterBySelections(items, 'tags', ['java'], SELECT_MODES.OR);
      expect(result2).toEqual([]);
    });

    it('handles invalid inputs safely', () => {
      // 无效的属性名
      expect(filterBySelections(items, 'invalid', ['js'], SELECT_MODES.OR)).toEqual([]);

      // 空数组
      expect(filterBySelections([], 'tags', ['js'], SELECT_MODES.OR)).toEqual([]);

      // 包含无效项目的数组
      const mixedItems = [...items, null, undefined, { tags: null }];
      const result = filterBySelections(mixedItems, 'tags', ['react'], SELECT_MODES.OR);
      expect(result.map(i => i.id)).toEqual([1, 4]);
    });
  });

  describe('longTextTrim', () => {
    // 测试1: 基本功能 - 英文字符
    it('应该正确截断英文字符串', () => {
      const result = longTextTrim('hello world', 5);
      expect(result).toBe('hello…');
    });

    // 测试2: 基本功能 - 中文字符
    it('应该正确截断中文字符串', () => {
      const result = longTextTrim('你好世界', 6); // 每个中文占3字节
      expect(result).toBe('你好…');
    });

    // 测试3: 边界情况 - 刚好不需要截断
    it('当字节长度不超过限制时应返回原字符串', () => {
      const input = 'hello';
      const result = longTextTrim(input, 5);
      expect(result).toBe(input);
    });

    // 测试4: 边界情况 - 空字符串
    it('应该正确处理空字符串', () => {
      expect(longTextTrim('', 5)).toBe('');
    });

    // 测试5: 边界情况 - 最大字节数为0
    it('当maxBytes为0时应返回后缀', () => {
      expect(longTextTrim('hello', 0)).toBe('…');
    });

    // 测试6: 自定义后缀
    it('应该使用自定义后缀', () => {
      const result = longTextTrim('hello world', 5, '...');
      expect(result).toBe('hello...');
    });

    // 测试7: 混合字符
    it('应该正确处理混合字符(英文+中文)', () => {
      const input = 'hello你好';
      // "hello" = 5字节, "你" = 3字节，总共8字节
      const result = longTextTrim(input, 7); // 只能保留"hello" + 部分中文字节
      expect(result).toBe('hello…');
    });

    // 测试8-1: 特殊字符和emoji
    it('应该正确处理特殊字符和emoji-1', () => {
      const input = 'hi👍'; // "hi"=2字节, "👍"=4字节
      const result = longTextTrim(input, 5);
      expect(result).toBe('hi…'); // 只能保留"hi" + 后缀
    });

    // 测试8-2: 特殊字符和emoji
    it('应该正确处理特殊字符和emoji-2', () => {
      const input = 'hi👍';
      const result = longTextTrim(input, 3);
      expect(result).toBe('hi…');
    });

    // 测试8-3: 特殊字符和emoji
    it('应该正确处理特殊字符和emoji-3', () => {
      const input = 'hi👍';
      const result = longTextTrim(input, 4);
      expect(result).toBe('hi…');
    });

    // 测试8-4: 特殊字符和emoji
    it('应该正确处理特殊字符和emoji-4', () => {
      const input = 'hi👍';
      const result = longTextTrim(input, 6);
      expect(result).toBe('hi👍');
    });

    // 测试9: 默认参数
    it('应该使用默认参数', () => {
      const longText = '这是一个很长的文本';
      const result = longTextTrim(longText);
      expect(result).toBe('这是一…'); // 默认maxBytes=10，前3个中文字符(9字节)+后缀
    });

    // 测试10: 非字符串输入
    it('应该将非字符串输入转换为字符串', () => {
      expect(longTextTrim(null)).toBe('null');
      expect(longTextTrim(undefined)).toBe('undefined');
      expect(longTextTrim(123)).toBe('123');
      expect(longTextTrim(true)).toBe('true');
    });

    // 测试11: 精确边界测试
    it('应该在精确的字节边界处截断', () => {
      // 测试刚好能容纳完整字符的情况
      const input = 'abc'; // 3字节
      expect(longTextTrim(input, 3)).toBe('abc');

      // 测试刚好需要截断的情况
      expect(longTextTrim(input, 2)).toBe('ab…');
    });

    // 测试12: 多字节字符的部分字节情况
    it('应该避免截断多字节字符的中间字节', () => {
      const input = '你好'; // 每个字3字节，共6字节

      // 尝试截断到4字节，应该只保留第一个汉字
      const result = longTextTrim(input, 4);
      expect(result).toBe('你…');
    });
  });
});
