import { describe, it, expect } from 'vitest';
import { getFilteredBlogs } from '@/mathBlog/utils';

const mockBlogs = [
  {
    id: '1',
    title: 'React Hooks Guide',
    content: 'Learn about useState and useEffect',
    tags: ['react', 'frontend'],
    ctime: '2023-01-15T00:00:00Z',
    mtime: '2023-01-20T00:00:00Z',
  },
  {
    id: '2',
    title: 'Vite Optimization',
    content: 'Speeding up your development with Vite',
    tags: ['vite', 'build'],
    ctime: '2023-02-10T00:00:00Z',
    mtime: '2023-02-12T00:00:00Z',
  },
  {
    id: '3',
    title: 'Advanced React Patterns',
    content: 'HOC and Render Props explained',
    tags: ['react', 'patterns'],
    ctime: '2023-03-05T00:00:00Z',
    mtime: '2023-03-08T00:00:00Z',
  },
];

describe('getFilteredBlogs', () => {
  it('没有过滤条件时，应返回所有博客', () => {
    const result = getFilteredBlogs(mockBlogs, null, null, null, null, null, null);
    expect(result).toEqual(mockBlogs);
  });

  it('应通过AND模式标签过滤', () => {
    const result = getFilteredBlogs(mockBlogs, ['react'], 'AND', null, null, null, null);
    expect(result.map(b => b.id)).toEqual(['1', '3']);
  });

  it('应通过OR模式标签过滤', () => {
    const result = getFilteredBlogs(mockBlogs, ['vite', 'patterns'], 'OR', null, null, null, null);
    expect(result.map(b => b.id)).toEqual(['2', '3']);
  });

  it('应处理空标签过滤', () => {
    const result = getFilteredBlogs(mockBlogs, [], 'AND', null, null, null, null);
    expect(result).toEqual(mockBlogs);
  });

  it('应通过创建时间范围过滤', () => {
    const ctimeRange = {
      from: '2023-02-01T00:00:00Z',
      to: '2023-03-01T00:00:00Z',
    };
    const result = getFilteredBlogs(mockBlogs, null, null, ctimeRange, null, null, null);
    expect(result.map(b => b.id)).toEqual(['2']);
  });

  it('应通过修改时间范围过滤', () => {
    const mtimeRange = {
      from: '2023-01-18T00:00:00Z',
      to: '2023-03-01T00:00:00Z',
    };
    const result = getFilteredBlogs(mockBlogs, null, null, null, mtimeRange, null, null);
    expect(result.map(b => b.id)).toEqual(['1', '2']);
  });

  it('应处理部分时间范围', () => {
    const ctimeRangeOnlyFrom = { from: '2023-02-01T00:00:00Z' };
    const result1 = getFilteredBlogs(mockBlogs, null, null, ctimeRangeOnlyFrom, null, null, null);
    expect(result1.map(b => b.id)).toEqual(['2', '3']);

    const mtimeRangeOnlyTo = { to: '2023-02-15T00:00:00Z' };
    const result2 = getFilteredBlogs(mockBlogs, null, null, null, mtimeRangeOnlyTo, null, null);
    expect(result2.map(b => b.id)).toEqual(['1', '2']);
  });

  it('应通过标题子序列过滤', () => {
    const result = getFilteredBlogs(mockBlogs, null, null, null, null, 'react', null);
    expect(result.map(b => b.id)).toEqual(['1', '3']);
  });

  it('标题过滤应忽略大小写', () => {
    const result = getFilteredBlogs(mockBlogs, null, null, null, null, 'vItE', null);
    expect(result.map(b => b.id)).toEqual(['2']);
  });

  it('应通过内容子序列过滤', () => {
    const result = getFilteredBlogs(mockBlogs, null, null, null, null, null, 'use');
    expect(result.map(b => b.id)).toEqual(['1']);
  });

  it('应处理空字符串过滤条件', () => {
    const result = getFilteredBlogs(mockBlogs, null, null, null, null, '   ', '  ');
    expect(result).toEqual(mockBlogs);
  });

  it('应组合多个过滤条件', () => {
    const params = {
      tagFilter: ['react'],
      mode: 'AND',
      ctimeRange: { from: '2023-01-01T00:00:00Z' },
      titleFilter: 'advanced',
    };
    const result = getFilteredBlogs(
      mockBlogs,
      params.tagFilter,
      params.mode,
      params.ctimeRange,
      null,
      params.titleFilter,
      null
    );
    expect(result.map(b => b.id)).toEqual(['3']);
  });

  it('应处理无效博客条目', () => {
    const blogsWithInvalid = [
      ...mockBlogs,
      { id: '4', invalidField: 'test' }, // 缺少必要字段
    ];

    const result = getFilteredBlogs(
      blogsWithInvalid,
      ['react'],
      'AND',
      null,
      null,
      null,
      null
    );
    expect(result.map(b => b.id)).toEqual(['1', '3']);
  });

  it('应正确处理子序列匹配边界情况', () => {
    const blogs = [
      ...mockBlogs,
      {
        id: '4',
        title: 'abc',
        content: 'a b c',
        tags: [],
        ctime: '2023-01-01',
        mtime: '2023-01-01',
      },
    ];

    // 短字符串不是长字符串的子序列
    const result1 = getFilteredBlogs(blogs, null, null, null, null, 'abcd', null);
    expect(result1.map(b => b.id)).not.toContain('4');

    // 完全匹配
    const result2 = getFilteredBlogs(blogs, null, null, null, null, 'abc', null);
    expect(result2.map(b => b.id)).toContain('4');

    // 子序列匹配
    const result3 = getFilteredBlogs(blogs, null, null, null, null, 'ac', null);
    expect(result3.map(b => b.id)).toContain('4');

    // 子序列匹配 + 忽略大字母
    const result4 = getFilteredBlogs(blogs, null, null, null, null, 'aC', null);
    expect(result4.map(b => b.id)).toContain('4');
  });
});
