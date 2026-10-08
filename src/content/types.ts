export type SectionKind = 'lesson' | 'problems' | 'supplemental';

export interface Section {
  id: string;
  title: string;
  kind: SectionKind;
  parts?: string[];
  summary?: string;
  formula?: string;
  built?: boolean;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  sections: Section[];
}

/** Add one per new interactive diagram. */
export type DiagramKind = 'inscribed' | 'prism' | 'distance';

/** Add one per new animated explainer. */
export type VideoId = 'inscribed-angles' | 'prisms' | 'distance-formula';

export interface Lesson {
  diagram: DiagramKind;
  video: VideoId;
  videoTitle: string;
  /** Paragraphs. Inline math uses $...$ */
  intro: string[];
  definitions: { term: string; text: string }[];
  formulas: { label: string; tex: string }[];
  /** Theorem ids */
  theorems: string[];
  examples: { title: string; given: string; steps: string[] }[];
  /** Question ids */
  checks: string[];
}

export type QuestionSet = 'check' | 'chapter' | 'supplemental' | 'bank';

export type Figure =
  | { kind: 'inscribed'; arc: number }
  | { kind: 'prism'; w: number; d: number; h: number }
  | { kind: 'points'; a: [number, number]; b: [number, number] }
  | { kind: 'sector'; r: number; angle: number };

export interface Question {
  id: string;
  chapter: string;
  section: string;
  set: QuestionSet;
  type: 'mc' | 'numeric' | 'diagram';
  prompt: string;
  choices?: string[];
  /** Index for mc, value for numeric. */
  answer: number;
  tolerance?: number;
  unit?: string;
  figure?: Figure;
  /** Omitted for supplemental (answer only). */
  solution?: string[];
}

export interface Theorem {
  id: string;
  chapter: string;
  kind: 'Theorem' | 'Postulate';
  name: string;
  statement: string;
  section: string;
}

export interface GlossaryEntry {
  term: string;
  def: string;
  section: string;
}

/** A section with its parent chapter attached. */
export interface SectionRef extends Section {
  chapter: Chapter;
}
