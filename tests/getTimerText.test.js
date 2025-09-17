import { getTimerText } from '@/mathChallenges/utils';
import { expect, it, describe } from 'vitest';

describe('getTimerText', () => {
  it('秒数 < 1 小时 → mm:ss', () => {
    expect(getTimerText(0)).toBe('00:00');
    expect(getTimerText(5)).toBe('00:05');
    expect(getTimerText(59)).toBe('00:59');
    expect(getTimerText(60)).toBe('01:00');
    expect(getTimerText(65)).toBe('01:05');
    expect(getTimerText(3599)).toBe('59:59');
  });

  it('刚好 1 小时', () => {
    expect(getTimerText(3599)).toBe('59:59');
    expect(getTimerText(3600)).toBe('01:00:00');
  });

  it('秒数 > 1 小时 → HH:mm:ss', () => {
    expect(getTimerText(3661)).toBe('01:01:01');
    expect(getTimerText(7322)).toBe('02:02:02');
    expect(getTimerText(86399)).toBe('23:59:59');
  });

  it('超过 24 小时', () => {
    expect(getTimerText(86400)).toBe('24:00:00');
    expect(getTimerText(86401)).toBe('24:00:01');
    expect(getTimerText(114514)).toBe('31:48:34');
    expect(getTimerText(186401)).toBe('51:46:41');
    expect(getTimerText(11186401)).toBe('3107:20:01');
  });

  it('异常输入：负数', () => {
    expect(getTimerText(-1)).toBe('00:00');
    expect(getTimerText(-114514)).toBe('00:00');
  });

  it('异常输入：非数字', () => {
    expect(() => getTimerText(NaN)).toThrowError('seconds must be a number, but got "NaN"');
    expect(() => getTimerText('abc')).toThrowError('seconds must be a number, but got "abc"');
    expect(() => getTimerText('114514')).toThrowError('seconds must be a number, but got "114514"');
  });

  it('异常输入：nil', () => {
    expect(getTimerText(null)).toBe('无');
    expect(getTimerText(undefined)).toBe('无');
    expect(getTimerText()).toBe('无');
  });
});
