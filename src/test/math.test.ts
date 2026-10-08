import { describe, expect, it } from 'vitest';
import { fmt, norm, rootTex, shuffle, simplifyRoot } from '../lib/math';

describe('simplifyRoot', () => {
  it('50 → 5√2', () => expect(simplifyRoot(50)).toEqual({ k: 5, m: 2 }));
  it('25 → 5', () => expect(simplifyRoot(25)).toEqual({ k: 5, m: 1 }));
  it('2 stays √2', () => expect(simplifyRoot(2)).toEqual({ k: 1, m: 2 }));
  it('72 → 6√2', () => expect(simplifyRoot(72)).toEqual({ k: 6, m: 2 }));
  it('renders TeX', () => {
    expect(rootTex(50)).toBe('5\\sqrt{2}');
    expect(rootTex(25)).toBe('5');
    expect(rootTex(2)).toBe('\\sqrt{2}');
    expect(rootTex(0)).toBe('0');
  });
});

describe('helpers', () => {
  it('norm wraps degrees', () => {
    expect(norm(-10)).toBe(350);
    expect(norm(370)).toBe(10);
    expect(norm(360)).toBe(0);
  });
  it('fmt trims decimals', () => {
    expect(fmt(5)).toBe('5');
    expect(fmt(7.0710678)).toBe('7.07');
    expect(fmt(2.5, 1)).toBe('2.5');
  });
  it('shuffle keeps the elements', () => {
    const a = [1, 2, 3, 4, 5];
    expect(shuffle(a, () => 0.5).sort()).toEqual(a);
    expect(a).toEqual([1, 2, 3, 4, 5]);
  });
});
