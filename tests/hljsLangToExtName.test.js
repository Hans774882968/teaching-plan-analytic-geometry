import hljsLangToExtName from '@/lib/hljsLangToExtName';
import { describe, it, expect } from 'vitest';
// import mimeTypes from 'mime-types';

describe('hljsLangToExtName', () => {
  it('返回默认 txt 扩展名当语言不存在于 highlight.js', () => {
    const language = 'non-existent-language';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });

  it('为 JavaScript 返回 js 扩展名', () => {
    const language = 'javascript';
    const result = hljsLangToExtName(language);
    expect(result).toBe('js');
  });

  it('为 TypeScript 返回 ts 扩展名', () => {
    const language = 'typescript';
    const result = hljsLangToExtName(language);
    expect(result).toBe('ts');
  });

  it('为 Python 返回 py 扩展名', () => {
    const language = 'python';
    const result = hljsLangToExtName(language);
    expect(result).toBe('py');
  });

  it('为 HTML 返回 html 扩展名', () => {
    const language = 'html';
    const result = hljsLangToExtName(language);
    expect(result).toBe('html');
  });

  it('为 CSS 返回 css 扩展名', () => {
    const language = 'css';
    const result = hljsLangToExtName(language);
    expect(result).toBe('css');
  });

  it('处理 mime-types 返回未知类型的情况', () => {
    const language = 'customlang';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });

  it('处理 mime-types 查找返回空字符串的情况', () => {
    const language = 'empty-mime';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });

  it('处理 mime-types 查找返回 null 的情况', () => {
    const language = 'null-mime';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });

  it('处理 mime-types 查找返回 undefined 的情况', () => {
    const language = 'undefined-mime';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });

  it('处理空语言输入', () => {
    const language = '';
    const result = hljsLangToExtName(language);
    expect(result).toBe('txt');
  });
});
