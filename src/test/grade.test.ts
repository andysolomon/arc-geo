import { describe, expect, it } from 'vitest';
import { grade, parseNumeric } from '../lib/grade';
import type { Question } from '../content/types';

const mc: Question = { id: 'mc', chapter: 'ch8', section: '8-4', set: 'check', type: 'mc', prompt: 'p', choices: ['a', 'b', 'c', 'd'], answer: 1 };
const num: Question = { id: 'num', chapter: 'ch8', section: '8-4', set: 'check', type: 'numeric', prompt: 'p', answer: 6.28, tolerance: 0.05 };
const noTol: Question = { ...num, id: 'noTol', tolerance: undefined };

describe('grade', () => {
  it('multiple choice compares the index', () => {
    expect(grade(mc, 1)).toBe(true);
    expect(grade(mc, 0)).toBe(false);
    expect(grade(mc, '1')).toBe(false);
  });
  it('numeric uses the tolerance', () => {
    expect(grade(num, '6.28')).toBe(true);
    expect(grade(num, '6.3')).toBe(true);
    expect(grade(num, 6.24)).toBe(true);
    expect(grade(num, '6.34')).toBe(false);
    expect(grade(num, '7')).toBe(false);
  });
  it('numeric defaults to a 0.01 tolerance', () => {
    expect(grade(noTol, '6.285')).toBe(true);
    expect(grade(noTol, '6.3')).toBe(false);
  });
  it('accepts units and spaces around the number', () => {
    expect(grade(num, ' 6.28 cm ')).toBe(true);
    expect(grade({ ...num, answer: -3, tolerance: 0.01 }, '-3')).toBe(true);
  });
  it('rejects junk and empty input', () => {
    expect(grade(num, '')).toBe(false);
    expect(grade(num, null)).toBe(false);
    expect(grade(num, undefined)).toBe(false);
    expect(grade(num, 'abc')).toBe(false);
    expect(grade(num, '...')).toBe(false);
    expect(parseNumeric('abc')).toBeNull();
  });
});
