import { chapters, lessons } from './chapters';
import { questions } from './questions';
import { theorems, glossary } from './theorems';
import type { Chapter, Question, SectionRef, Theorem } from './types';

export { chapters, lessons, questions, theorems, glossary };

/** Every section in reading order, with its chapter attached. */
export const allSections: SectionRef[] = chapters.flatMap((ch) => ch.sections.map((s) => ({ ...s, chapter: ch })));

export const lessonSections: SectionRef[] = allSections.filter((s) => s.kind === 'lesson');

const sectionById = new Map(allSections.map((s) => [s.id, s]));
const questionById = new Map(questions.map((q) => [q.id, q]));
const theoremById = new Map(theorems.map((t) => [t.id, t]));
const chapterById = new Map(chapters.map((c) => [c.id, c]));

export const findSection = (id: string | undefined): SectionRef | undefined => (id ? sectionById.get(id) : undefined);
export const findQuestion = (id: string): Question | undefined => questionById.get(id);
export const findTheorem = (id: string): Theorem | undefined => theoremById.get(id);
export const findChapter = (id: string): Chapter | undefined => chapterById.get(id);

/** Index of a lesson inside its chapter, 1-based. Problems pages return 0. */
export function lessonIndex(sec: SectionRef): number {
  return sec.chapter.sections.filter((s) => s.kind === 'lesson').findIndex((s) => s.id === sec.id) + 1;
}

export function neighbours(id: string): { prev?: SectionRef; next?: SectionRef } {
  const i = allSections.findIndex((s) => s.id === id);
  if (i < 0) return {};
  return { prev: allSections[i - 1], next: allSections[i + 1] };
}

export function chapterProgress(ch: Chapter, completed: readonly string[]) {
  const lessonsIn = ch.sections.filter((s) => s.kind === 'lesson');
  const done = lessonsIn.filter((s) => completed.includes(s.id)).length;
  return { total: lessonsIn.length, done, lessons: lessonsIn };
}

export function overallProgressPct(completed: readonly string[]): number {
  const n = lessonSections.length;
  if (!n) return 0;
  return Math.round((100 * lessonSections.filter((s) => completed.includes(s.id)).length) / n);
}

/** Chapters that have at least one question in the bank (for exam setup). */
export const chaptersWithQuestions: Chapter[] = chapters.filter((ch) => questions.some((q) => q.chapter === ch.id));
/** Chapters that have at least one theorem (for appendix filter). */
export const chaptersWithTheorems: Chapter[] = chapters.filter((ch) => theorems.some((t) => t.chapter === ch.id));
