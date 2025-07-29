import { getPaginationItems } from '../src/lib/pagination';
import { describe, it, expect } from 'vitest';

describe('getPaginationItems', () => {
  it('should throw error when neither items nor total provided', () => {
    expect(() => getPaginationItems({ itemsPerPage: 10, currentPage: 1 })).toThrowError(
      'Either items[] or total must be provided!'
    );
  });

  it('should handle items array input', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = getPaginationItems({
      items,
      itemsPerPage: 3,
      currentPage: 2,
    });

    expect(result).toEqual({
      itemStart: 4,
      itemEnd: 6,
      pageItems: [4, 5, 6],
      totalPages: 4,
    });
  });

  it('should handle total count input', () => {
    const result = getPaginationItems({
      total: 25,
      itemsPerPage: 10,
      currentPage: 3,
    });

    expect(result).toEqual({
      itemStart: 21,
      itemEnd: 25,
      pageItems: [],
      totalPages: 3,
    });
  });

  it('should handle last page with partial items', () => {
    const items = [1, 2, 3, 4, 5];
    const result = getPaginationItems({
      items,
      itemsPerPage: 2,
      currentPage: 3,
    });

    expect(result).toEqual({
      itemStart: 5,
      itemEnd: 5,
      pageItems: [5],
      totalPages: 3,
    });
  });

  it('should handle currentPage beyond total pages', () => {
    const result = getPaginationItems({
      total: 15,
      itemsPerPage: 5,
      currentPage: 5,
    });

    expect(result).toEqual({
      itemStart: 11,
      itemEnd: 15,
      pageItems: [],
      totalPages: 3,
    });
  });

  it('should handle currentPage less than 1', () => {
    const items = [1, 2, 3];
    const result = getPaginationItems({
      items,
      itemsPerPage: 5,
      currentPage: 0,
    });

    expect(result).toEqual({
      itemStart: 1,
      itemEnd: 3,
      pageItems: [1, 2, 3],
      totalPages: 1,
    });
  });

  it('should handle zero items', () => {
    const result = getPaginationItems({
      items: [],
      itemsPerPage: 10,
      currentPage: 1,
    });

    expect(result).toEqual({
      itemStart: 0,
      itemEnd: 0,
      pageItems: [],
      totalPages: 1,
    });
  });

  it('should handle zero total count', () => {
    const result = getPaginationItems({
      total: 0,
      itemsPerPage: 10,
      currentPage: 1,
    });

    expect(result).toEqual({
      itemStart: 0,
      itemEnd: 0,
      pageItems: [],
      totalPages: 1,
    });
  });

  it('should handle single page', () => {
    const items = [1, 2, 3];
    const result = getPaginationItems({
      items,
      itemsPerPage: 10,
      currentPage: 1,
    });

    expect(result).toEqual({
      itemStart: 1,
      itemEnd: 3,
      pageItems: [1, 2, 3],
      totalPages: 1,
    });
  });

  it('should handle itemsPerPage zero (fallback to 1)', () => {
    const items = [1, 2, 3];
    const result = getPaginationItems({
      items,
      itemsPerPage: 0,
      currentPage: 2,
    });

    expect(result).toEqual({
      itemStart: 2,
      itemEnd: 2,
      pageItems: [2],
      totalPages: 3,
    });
  });

  it('should handle negative currentPage', () => {
    const items = [1, 2, 3];
    const result = getPaginationItems({
      items,
      itemsPerPage: 2,
      currentPage: -1,
    });

    expect(result).toEqual({
      itemStart: 1,
      itemEnd: 2,
      pageItems: [1, 2],
      totalPages: 2,
    });
  });

  it('should handle large numbers', () => {
    const result = getPaginationItems({
      total: 1000000,
      itemsPerPage: 100,
      currentPage: 5000,
    });

    expect(result).toEqual({
      itemStart: 499901,
      itemEnd: 500000,
      pageItems: [],
      totalPages: 10000,
    });
  });
});
