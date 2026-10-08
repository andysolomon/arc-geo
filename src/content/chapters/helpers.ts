import type { Section } from '../types';

/** Outline-only sections: title plus optional parts. Use for chapters whose lessons are not written yet. */
export type TocEntry = string | [title: string, ...parts: string[]];
export const toc = (ch: number, list: TocEntry[]): Section[] =>
  list.map((t, i) =>
    Array.isArray(t)
      ? { id: `${ch}-${i + 1}`, title: t[0], kind: 'lesson', parts: t.slice(1) }
      : { id: `${ch}-${i + 1}`, title: t, kind: 'lesson' },
  );

/** The two problem pages every chapter ends with. */
export const problems = (ch: number): Section[] => [
  { id: `${ch}-p`, title: 'Chapter Problems', kind: 'problems' },
  { id: `${ch}-s`, title: 'Supplemental Chapter Problems', kind: 'supplemental' },
];
