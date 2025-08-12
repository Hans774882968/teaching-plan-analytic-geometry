import { SELECT_MODES } from '@/common/consts';
import { getFilteredLessons } from '@/teachingPlanList/utils';
import { describe, it, expect } from 'vitest';

describe('getFilteredLessons', () => {
  const mockLessons = [
    {
      id: 1,
      title: 'Geometry Basics',
      category: ['math', 'geometry'],
      difficulty: 'beginner',
      lpName: 'SchoolA',
    },
    {
      id: 2,
      title: 'Advanced Algebra',
      category: ['math', 'algebra'],
      difficulty: 'advanced',
      lpName: 'SchoolA',
    },
    {
      id: 3,
      title: 'Trigonometry',
      category: ['math', 'trigonometry'],
      difficulty: 'intermediate',
      lpName: 'SchoolA',
    },
    {
      id: 4,
      title: 'Physics Intro',
      category: ['science', 'physics'],
      difficulty: 'beginner',
      lpName: 'SchoolB',
    },
    {
      id: 5,
      title: 'Quantum Physics',
      category: ['science', 'physics'],
      difficulty: 'advanced',
      lpName: 'SchoolB',
    },
    {
      id: 6,
      title: 'Foo 6',
      category: ['foo', 'bar'],
      difficulty: 'beginner',
      lpName: 'SchoolC',
    },
    {
      id: 7,
      title: 'Foo 7',
      category: ['foo', 'bar'],
      difficulty: 'beginner',
      lpName: 'SchoolC',
    },
  ];

  it('returns all lessons when no filters applied in OR mode', () => {
    const result = getFilteredLessons(mockLessons, [], 'all', [], '', SELECT_MODES.OR);
    expect(result).toEqual(mockLessons);
  });

  it('returns all lessons when no filters applied in AND mode', () => {
    const result = getFilteredLessons(mockLessons, [], 'all', [], '', SELECT_MODES.AND);
    expect(result).toEqual(mockLessons);
  });

  it('filters by difficulty only', () => {
    const result = getFilteredLessons(mockLessons, [], 'beginner', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[0],
      mockLessons[3],
      mockLessons[5],
      mockLessons[6],
    ]);
  });

  it('filters by category only (OR mode)', () => {
    const result = getFilteredLessons(mockLessons, ['algebra', 'physics'], 'all', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[1],
      mockLessons[3],
      mockLessons[4],
    ]);
  });

  it('filters by category only (AND mode)', () => {
    const result = getFilteredLessons(mockLessons, ['science', 'physics'], 'all', [], '', SELECT_MODES.AND);
    expect(result).toEqual([
      mockLessons[3],
      mockLessons[4],
    ]);
  });

  it('filters by both category and difficulty in OR mode 1', () => {
    const result = getFilteredLessons(mockLessons, ['math'], 'intermediate', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[2],
    ]);
  });

  it('filters by both category and difficulty in OR mode 2', () => {
    const result = getFilteredLessons(mockLessons, ['math', 'foo'], 'beginner', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[0],
      mockLessons[5],
      mockLessons[6],
    ]);
  });

  it('filters by both category and difficulty in AND mode 1', () => {
    const result = getFilteredLessons(mockLessons, ['math'], 'intermediate', [], '', SELECT_MODES.AND);
    expect(result).toEqual([
      mockLessons[2],
    ]);
  });

  it('filters by both category and difficulty in AND mode 2', () => {
    const result = getFilteredLessons(mockLessons, ['foo', 'bar'], 'beginner', [], '', SELECT_MODES.AND);
    expect(result).toEqual([
      mockLessons[5],
      mockLessons[6],
    ]);
  });

  it('returns empty array when no matches found 1', () => {
    const result = getFilteredLessons(mockLessons, ['biology'], 'expert', [], '', SELECT_MODES.OR);
    expect(result).toEqual([]);
  });

  it('returns empty array when no matches found 2', () => {
    const result = getFilteredLessons(mockLessons, ['math'], 'expert', [], '', SELECT_MODES.OR);
    expect(result).toEqual([]);
  });

  it('handles empty category filter with difficulty', () => {
    const result = getFilteredLessons(mockLessons, [], 'advanced', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[1],
      mockLessons[4],
    ]);
  });

  it('handles "all" difficulty with category filter', () => {
    const result = getFilteredLessons(mockLessons, ['physics'], 'all', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[3],
      mockLessons[4],
    ]);
  });

  it('handles multiple category tags in AND mode', () => {
    const result = getFilteredLessons(mockLessons, ['math', 'trigonometry'], 'all', [], '', SELECT_MODES.AND);
    expect(result).toEqual([
      mockLessons[2],
    ]);
  });

  it('handles multiple category tags in OR mode', () => {
    const result = getFilteredLessons(mockLessons, ['geometry', 'algebra'], 'all', [], '', SELECT_MODES.OR);
    expect(result).toEqual([
      mockLessons[0],
      mockLessons[1],
    ]);
  });

  it('handles empty lessons array in OR mode', () => {
    const result = getFilteredLessons([], ['math'], 'beginner', [], '', SELECT_MODES.OR);
    expect(result).toEqual([]);
  });

  it('handles empty lessons array in AND mode', () => {
    const result = getFilteredLessons([], ['math'], 'beginner', [], '', SELECT_MODES.AND);
    expect(result).toEqual([]);
  });

  it('filters by learning partner only (OR mode)', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      ['SchoolA', 'SchoolB'],
      '',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([1, 2, 3, 4, 5]);
  });

  it('filters by learning partner only (AND mode)', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      ['SchoolA', 'SchoolC'],
      '',
      SELECT_MODES.AND
    );
    expect(result).toEqual([]); // 单个值字段不可能同时满足多个值
  });

  it('filters by title only', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      [],
      'physics',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([4, 5]); // 匹配"Physics Intro"和"Quantum Physics"
  });

  it('filters by learning partner and title combination', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      ['SchoolB'],
      'physics',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([4, 5]);
  });

  it('filters by all criteria in combination', () => {
    const result = getFilteredLessons(
      mockLessons,
      ['math', 'science'],
      'beginner',
      ['SchoolA', 'SchoolB'],
      'ics', // 匹配Physics和Basics
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([1, 4]);
  });

  it('handles empty learning partner filter', () => {
    const mockLessonsWithLP = mockLessons.map((lesson, index) => ({
      ...lesson,
      lpName: `School${index}`,
    }));

    const result = getFilteredLessons(
      mockLessonsWithLP,
      ['science'],
      'all',
      [],
      '',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([4, 5]);
  });

  it('handles case-insensitive title filtering', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      [],
      'GeOmEtRy',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([1]);
  });

  it('handles partial title matches with sub-sequence logic', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      [],
      'trgo',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([3]); // 匹配"Trigonometry"
  });

  it('returns empty when title filter matches nothing', () => {
    const result = getFilteredLessons(
      mockLessons,
      [],
      'all',
      [],
      'xyzabc',
      SELECT_MODES.OR
    );
    expect(result).toEqual([]);
  });

  it('ignores whitespace-only title filter', () => {
    const result = getFilteredLessons(
      mockLessons,
      ['math'],
      'all',
      ['SchoolA'],
      '   ',
      SELECT_MODES.OR
    );
    expect(result.map(l => l.id)).toEqual([1, 2, 3]);
  });
});
