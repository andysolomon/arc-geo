import type { Question } from '../content/types';
import { grade, type AnswerState } from './grade';
import { shuffle } from './math';

export const EXAM_COUNTS = [5, 10, 15, 20] as const;
export type ExamCount = (typeof EXAM_COUNTS)[number];

export interface ChapterTally { total: number; correct: number }

export interface ExamResult {
  correct: number;
  total: number;
  per: Record<string, ChapterTally>;
  /** ISO date */
  date: string;
  /** Chapter ids that were selected */
  chapters: string[];
}

/** Pool = all questions whose chapter is selected (any set). */
export function examPool(questions: readonly Question[], selected: Record<string, boolean>): Question[] {
  return questions.filter((q) => selected[q.chapter]);
}

/** Shuffle the pool and take N (clamped to the pool size). Returns question ids. */
export function buildExam(questions: readonly Question[], selected: Record<string, boolean>, count: number, rand?: () => number): string[] {
  const pool = examPool(questions, selected);
  const n = Math.max(0, Math.min(count, pool.length));
  return shuffle(pool, rand).slice(0, n).map((q) => q.id);
}

export function scoreExam(questions: readonly Question[], items: readonly string[], answers: Record<string, AnswerState>, selected: Record<string, boolean>, now = new Date()): ExamResult {
  const byId = new Map(questions.map((q) => [q.id, q]));
  const per: Record<string, ChapterTally> = {};
  let correct = 0;
  for (const id of items) {
    const q = byId.get(id);
    if (!q) continue;
    const ok = grade(q, answers[id]?.value);
    const tally = (per[q.chapter] ??= { total: 0, correct: 0 });
    tally.total++;
    if (ok) {
      tally.correct++;
      correct++;
    }
  }
  return { correct, total: items.length, per, date: now.toISOString(), chapters: Object.keys(selected).filter((k) => selected[k]) };
}

export const formatClock = (seconds: number): string => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
