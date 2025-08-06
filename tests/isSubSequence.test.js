import { isSubSequence } from '@/lib/utils';
import { describe, expect, it } from 'vitest';

describe('isSubSequence', () => {
  it('longStr longer than shortStr', () => {
    expect(isSubSequence('ABC', 'ac')).toBeTruthy();
    expect(isSubSequence('abc123', 'B1')).toBeTruthy();
    expect(isSubSequence('abc123', 'B4')).toBeFalsy();
  });

  it('longStr.length === shortStr.length', () => {
    expect(isSubSequence('a123cm', 'A123cM')).toBeTruthy();
    expect(isSubSequence('A123cM', 'a123Cm')).toBeTruthy();
    expect(isSubSequence('a123cm', 'A124cM')).toBeFalsy();
  });

  it('longStr shorter than shortStr', () => {
    expect(isSubSequence('acm', 'acmer')).toBeFalsy();
    expect(isSubSequence('', 'acmer')).toBeFalsy();
  });

  it('shortStr is empty string', () => {
    expect(isSubSequence('acmer', '')).toBeTruthy();
  });
});
