// The original chapter 8–10 content must stay byte-for-byte identical to the prototype data.
import { describe, expect, it } from 'vitest';
import { chapters, glossary, lessons, questions, theorems } from '../content';
// @ts-expect-error prototype data has no types
import { chapters as protoChapters, lessons as protoLessons } from '../../design/data/chapters.js';
// @ts-expect-error prototype data has no types
import { questions as protoQuestions } from '../../design/data/questions.js';
// @ts-expect-error prototype data has no types
import { theorems as protoTheorems, glossary as protoGlossary } from '../../design/data/theorems.js';

describe('prototype content is unchanged', () => {
  it('questions', () => {
    for (const p of protoQuestions as typeof questions) expect(questions.find((q) => q.id === p.id), p.id).toEqual(p);
  });
  it('theorems and glossary', () => {
    for (const p of protoTheorems as typeof theorems) expect(theorems.find((t) => t.id === p.id), p.id).toEqual(p);
    for (const p of protoGlossary as typeof glossary) expect(glossary.find((g) => g.term === p.term), p.term).toEqual(p);
  });
  it('lesson text', () => {
    for (const [id, p] of Object.entries(protoLessons as Record<string, Record<string, unknown>>)) {
      const { video: _v, videoTitle: _t, ...rest } = p;
      const { video: _v2, videoTitle: _t2, ...mine } = lessons[id] as unknown as Record<string, unknown>;
      expect(mine, id).toEqual(rest);
    }
  });
  it('chapter 8–10 outlines', () => {
    for (const pc of (protoChapters as { id: string; number: number; sections: { id: string; title: string; kind: string; summary?: string; formula?: string; parts?: string[] }[] }[]).filter((c) => c.number >= 8)) {
      const mine = chapters.find((c) => c.id === pc.id)!;
      for (const ps of pc.sections) {
        const ms = mine.sections.find((s) => s.id === ps.id)!;
        expect({ title: ms.title, kind: ms.kind, summary: ms.summary, formula: ms.formula, parts: ms.parts }, ps.id).toEqual({ title: ps.title, kind: ps.kind, summary: ps.summary, formula: ps.formula, parts: ps.parts });
      }
    }
  });
});
