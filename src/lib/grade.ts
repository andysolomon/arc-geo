import type { Question } from '../content/types';

export type AnswerValue = number | string | null | undefined;

export interface AnswerState {
  value?: AnswerValue;
  checked?: boolean;
  correct?: boolean;
  revealed?: boolean;
}

export const isMultipleChoice = (q: Question): boolean => Array.isArray(q.choices);

export const hasValue = (v: AnswerValue): boolean => v != null && v !== '';

/** Parse a free-text numeric answer. Keeps digits, dot and minus; rejects junk. */
export function parseNumeric(val: AnswerValue): number | null {
  if (!hasValue(val)) return null;
  const n = parseFloat(String(val).replace(/[^0-9.\-]/g, ''));
  return Number.isNaN(n) ? null : n;
}

/** mc → value === answer; numeric → |parse(value) − answer| ≤ tolerance (default 0.01). */
export function grade(q: Question, val: AnswerValue): boolean {
  if (!hasValue(val)) return false;
  if (isMultipleChoice(q)) return val === q.answer;
  const n = parseNumeric(val);
  return n !== null && Math.abs(n - q.answer) <= (q.tolerance ?? 0.01);
}
