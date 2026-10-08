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

/** Reusable interactive diagrams in src/diagrams. Add one per new interactive. */
export type DiagramKind =
  | 'inscribed'   // circle with draggable inscribed angle, central-angle toggle
  | 'prism'       // rectangular prism, right/oblique, Cavalieri slices
  | 'distance'    // coordinate grid with two draggable points; distance, midpoint, slope
  | 'angle'       // one draggable ray; angle measure, classification, complement and supplement
  | 'transversal' // two lines cut by a transversal; eight angles and their pair names
  | 'triangle'    // three draggable vertices; angles, sides, classification, exterior angle, Pythagorean check
  | 'polygon'     // regular n-gon with a slider for n; angle sums, apothem, area
  | 'area'        // rectangle, triangle, parallelogram, or trapezoid with sliders; perimeter and area
  | 'circle'      // circle with radius and central-angle sliders; circumference, area, arc length, sector
  | 'similar'     // two similar triangles with a scale-factor slider; ratios of sides, perimeters, areas
  | 'solid';      // cylinder, pyramid, cone, or sphere with sliders; volume and surface area

/** Animated explainers in src/videos. Add one per new explainer. */
export type VideoId = 'inscribed-angles' | 'prisms' | 'distance-formula';

export interface Lesson {
  /** Interactive diagram shown under the intro. Omit for lessons without one. */
  diagram?: DiagramKind;
  /** Animated explainer. Omit for lessons without one. */
  video?: VideoId;
  videoTitle?: string;
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
  | { kind: 'sector'; r: number; angle: number }
  /** One angle of the given measure in degrees, vertex B, rays BA and BC. */
  | { kind: 'angle'; degrees: number }
  /** Triangle drawn to scale from three side lengths (must satisfy the triangle inequality). Optional vertex labels, default A B C. */
  | { kind: 'triangle'; a: number; b: number; c: number; labels?: [string, string, string] }
  /** Two parallel lines cut by a transversal; the marked angle (top left, between the transversal and the upper line) has the given measure. Angles are numbered 1–8. */
  | { kind: 'parallel'; angle: number }
  /** Rectangle w by h (not to scale beyond 1:3 aspect). */
  | { kind: 'rect'; w: number; h: number }
  /** Regular polygon with n sides. */
  | { kind: 'polygon'; n: number }
  /** Circle of radius r, optionally with a chord of the given half-length drawn and a radius shown. */
  | { kind: 'circle'; r: number };

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

/** Everything one chapter contributes. One file per chapter in src/content/chapters/. */
export interface ChapterContent {
  chapter: Chapter;
  /** Keyed by section id, one entry per lesson section. */
  lessons: Record<string, Lesson>;
  questions: Question[];
  theorems: Theorem[];
  glossary: GlossaryEntry[];
}

/** A section with its parent chapter attached. */
export interface SectionRef extends Section {
  chapter: Chapter;
}
