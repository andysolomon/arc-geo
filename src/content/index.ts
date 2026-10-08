import type { Chapter, ChapterContent, GlossaryEntry, Lesson, Question, SectionRef, Theorem } from './types';
import { ch1 } from './chapters/ch1';
import { ch2 } from './chapters/ch2';
import { ch3 } from './chapters/ch3';
import { ch4 } from './chapters/ch4';
import { ch5 } from './chapters/ch5';
import { ch6 } from './chapters/ch6';
import { ch7 } from './chapters/ch7';
import { ch8 } from './chapters/ch8';
import { ch9 } from './chapters/ch9';
import { ch10 } from './chapters/ch10';

/** All chapter modules in reading order. Add a chapter here and nothing else changes. */
export const chapterContents: ChapterContent[] = [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10];

export const chapters: Chapter[] = chapterContents.map((c) => c.chapter);
export const lessons: Record<string, Lesson> = Object.assign({}, ...chapterContents.map((c) => c.lessons));
export const questions: Question[] = chapterContents.flatMap((c) => c.questions);
export const theorems: Theorem[] = chapterContents.flatMap((c) => c.theorems);
export const glossary: GlossaryEntry[] = chapterContents.flatMap((c) => c.glossary);

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
