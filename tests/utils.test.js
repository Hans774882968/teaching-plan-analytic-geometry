import { describe, it, expect } from 'vitest';
import {
  calcReadTime,
  isNonEmptyArray,
  addOrDeleteItem,
  filterBySelections,
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
});
