import { describe, expect, it } from 'vitest';
import { chapterContents, chapters, glossary, lessons, questions, theorems } from '../content';
import type { Figure } from '../content/types';

const DIAGRAMS = new Set(['inscribed', 'prism', 'distance', 'angle', 'transversal', 'triangle', 'polygon', 'area', 'circle', 'similar', 'solid']);
const VIDEOS = new Set(['inscribed-angles', 'prisms', 'distance-formula']);
const FIGURES = new Set(['inscribed', 'prism', 'points', 'sector', 'angle', 'triangle', 'parallel', 'rect', 'polygon', 'circle']);
const sectionIds = new Set(chapters.flatMap((c) => c.sections.map((s) => s.id)));
const questionIds = new Set(questions.map((q) => q.id));
const theoremIds = new Set(theorems.map((t) => t.id));
const STE_MAX_WORDS = 30;
const BANNED = /\b(utilize|utilise|ensure|commence|prior to|in order to|replenish|approximately)\b/i;
const wordCount = (s: string) => s.replace(/\$[^$]*\$/g, 'x').split(/\s+/).filter(Boolean).length;

describe('content integrity', () => {
  it('ids are unique', () => {
    expect(questions.length).toBe(questionIds.size);
    expect(theorems.length).toBe(theoremIds.size);
    expect(chapters.flatMap((c) => c.sections).length).toBe(sectionIds.size);
    const terms = glossary.map((g) => g.term.toLowerCase());
    expect(terms.length).toBe(new Set(terms).size);
  });
  it('every question, theorem, and glossary entry points at a real section and chapter', () => {
    for (const q of questions) {
      expect(sectionIds.has(q.section), `${q.id} section ${q.section}`).toBe(true);
      expect(q.section.startsWith(q.chapter.replace('ch', '') + '-'), `${q.id} chapter/section mismatch`).toBe(true);
    }
    for (const t of theorems) {
      expect(sectionIds.has(t.section), `${t.id} section ${t.section}`).toBe(true);
      expect(t.id.startsWith(t.chapter.replace('ch', '') + '.'), `${t.id} chapter mismatch`).toBe(true);
    }
    for (const g of glossary) expect(sectionIds.has(g.section), `${g.term} section ${g.section}`).toBe(true);
  });
  it('questions are well formed', () => {
    for (const q of questions) {
      if (q.choices) {
        expect(q.choices.length, q.id).toBeGreaterThanOrEqual(2);
        expect(q.choices.length, q.id).toBeLessThanOrEqual(4);
        expect(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length, `${q.id} answer index`).toBe(true);
        expect(q.type === 'mc' || q.type === 'diagram', q.id).toBe(true);
      } else {
        expect(q.type === 'numeric' || q.type === 'diagram', q.id).toBe(true);
        expect(Number.isFinite(q.answer), q.id).toBe(true);
      }
      if (q.type === 'diagram') expect(q.figure, `${q.id} diagram needs a figure`).toBeDefined();
      if (q.figure) expect(FIGURES.has((q.figure as Figure).kind), `${q.id} figure kind`).toBe(true);
      if (q.set === 'supplemental') expect(q.solution, `${q.id} supplemental has no solution`).toBeUndefined();
      else expect((q.solution?.length ?? 0) > 0, `${q.id} needs a solution`).toBe(true);
      expect(q.prompt.split('$').length % 2, `${q.id} unbalanced $ in prompt`).toBe(1);
    }
  });
  it('every lesson section has a lesson that references real questions and theorems', () => {
    for (const c of chapterContents) {
      for (const s of c.chapter.sections.filter((s) => s.kind === 'lesson')) {
        const l = c.lessons[s.id];
        expect(l, `${s.id} has no lesson`).toBeDefined();
        if (!l) continue;
        expect(l.intro.length, `${s.id} intro`).toBeGreaterThanOrEqual(2);
        expect(l.definitions.length, `${s.id} definitions`).toBeGreaterThanOrEqual(1);
        expect(l.examples.length, `${s.id} examples`).toBeGreaterThanOrEqual(2);
        expect(l.checks.length, `${s.id} checks`).toBeGreaterThanOrEqual(3);
        for (const id of l.checks) {
          expect(questionIds.has(id), `${s.id} check ${id}`).toBe(true);
          const q = questions.find((q) => q.id === id)!;
          expect(q.set, `${id} should be a check`).toBe('check');
          expect(q.section, `${id} belongs to ${s.id}`).toBe(s.id);
        }
        for (const id of l.theorems) expect(theoremIds.has(id), `${s.id} theorem ${id}`).toBe(true);
        if (l.diagram) expect(DIAGRAMS.has(l.diagram), `${s.id} diagram ${l.diagram}`).toBe(true);
        if (l.video) expect(VIDEOS.has(l.video), `${s.id} video ${l.video}`).toBe(true);
        for (const ex of l.examples) expect(ex.steps.length, `${s.id} ${ex.title} steps`).toBeGreaterThanOrEqual(1);
        expect(s.summary, `${s.id} summary`).toBeTruthy();
        for (const f of l.formulas) expect(f.label.includes('$'), `${s.id} formula label has TeX: ${f.label}`).toBe(false);
        for (const d of l.definitions) expect(d.term.includes('$'), `${s.id} term has TeX: ${d.term}`).toBe(false);
      }
      expect(Object.keys(c.lessons).every((k) => sectionIds.has(k)), `${c.chapter.id} lesson keys`).toBe(true);
      // Each chapter has problems and supplemental problems.
      expect(c.questions.filter((q) => q.set === 'chapter').length, `${c.chapter.id} chapter problems`).toBeGreaterThanOrEqual(4);
      expect(c.questions.filter((q) => q.set === 'supplemental').length, `${c.chapter.id} supplemental`).toBeGreaterThanOrEqual(4);
      expect(c.questions.filter((q) => q.set === 'bank').length, `${c.chapter.id} bank`).toBeGreaterThanOrEqual(2);
      expect(c.theorems.length, `${c.chapter.id} theorems`).toBeGreaterThanOrEqual(3);
      expect(c.glossary.length, `${c.chapter.id} glossary`).toBeGreaterThanOrEqual(4);
    }
  });
  it('lesson copy follows the ASD-STE100 limits', () => {
    const bad: string[] = [];
    for (const [id, l] of Object.entries(lessons)) {
      const texts = [...l.intro, ...l.definitions.map((d) => d.text), ...l.examples.flatMap((e) => [e.given, ...e.steps])];
      for (const t of texts) {
        for (const sentence of t.split(/(?<=[.!?])\s+/)) {
          if (wordCount(sentence) > STE_MAX_WORDS) bad.push(`${id}: ${sentence.slice(0, 60)}…`);
        }
        if (BANNED.test(t)) bad.push(`${id} banned word: ${t.slice(0, 60)}`);
        expect(t.split('$').length % 2, `${id} unbalanced $: ${t.slice(0, 50)}`).toBe(1);
      }
    }
    expect(bad, bad.join('\n')).toEqual([]);
  });
});
