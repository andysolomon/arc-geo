import { describe, expect, it } from 'vitest';
import { chapters, questions } from '../content';
import { buildExam, examPool, scoreExam } from '../lib/exam';

describe('exam', () => {
  it('the pool respects the chapter filter', () => {
    const pool = examPool(questions, { ch8: true, ch9: false, ch10: false });
    expect(pool.length).toBeGreaterThan(0);
    expect(pool.every((q) => q.chapter === 'ch8')).toBe(true);
    expect(examPool(questions, { ch8: false, ch9: false, ch10: false })).toHaveLength(0);
    const all = examPool(questions, Object.fromEntries(chapters.map((c) => [c.id, true])));
    expect(all.length).toBe(questions.length);
  });
  it('takes N questions, clamped to the pool size, with no duplicates', () => {
    const ten = buildExam(questions, { ch8: true, ch9: true, ch10: true }, 10, () => 0.3);
    expect(ten).toHaveLength(10);
    expect(new Set(ten).size).toBe(10);
    const ch8Size = examPool(questions, { ch8: true }).length;
    const clamped = buildExam(questions, { ch8: true }, 1000);
    expect(clamped).toHaveLength(ch8Size);
    expect(buildExam(questions, { ch8: true }, 20)).toHaveLength(Math.min(20, ch8Size));
    expect(buildExam(questions, {}, 5)).toHaveLength(0);
  });
  it('per-chapter totals are correct', () => {
    const items = ['c8-4-1', 'c8-4-2', 'c9-1-1', 'c10-2-3'];
    const answers = { 'c8-4-1': { value: '48' }, 'c8-4-2': { value: 0 }, 'c9-1-1': { value: '126' }, 'c10-2-3': { value: '' } };
    const r = scoreExam(questions, items, answers, { ch8: true, ch9: true, ch10: true }, new Date('2026-10-07T00:00:00Z'));
    expect(r.total).toBe(4);
    expect(r.correct).toBe(2);
    expect(r.per).toEqual({ ch8: { total: 2, correct: 1 }, ch9: { total: 1, correct: 1 }, ch10: { total: 1, correct: 0 } });
    expect(r.chapters).toEqual(['ch8', 'ch9', 'ch10']);
    expect(r.date).toBe('2026-10-07T00:00:00.000Z');
  });
});
