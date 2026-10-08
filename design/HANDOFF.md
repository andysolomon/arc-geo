# Interactive Geometry Study Guide — Developer Handoff

Working prototype: `Interactive Geometry Study Guide.dc.html` (plus three video pages). This document describes how to rebuild it as a React + TypeScript + Tailwind app. All lesson content, questions, and theorems already live in `data/*.js` and port to `.ts` with no changes.

## 1. Run locally

```bash
npm create vite@latest geometry-guide -- --template react-ts
cd geometry-guide
npm i katex react-katex zustand
npm i -D tailwindcss @tailwindcss/vite
# copy src/ from the structure below, then
npm run dev
```

Tailwind: add `@import "tailwindcss";` to `src/index.css` and the `@tailwindcss/vite` plugin to `vite.config.ts`. Dark mode uses the `class` strategy (`<html class="dark">`).

## 2. Project structure

```
src/
  main.tsx
  App.tsx                      # shell: Sidebar + TopBar + <Outlet/>
  router.tsx                   # hash routes: /, /s/:sectionId, /exam, /appendix, /glossary
  content/
    chapters.ts                # TOC + lessons (from data/chapters.js)
    questions.ts               # question bank (from data/questions.js)
    theorems.ts                # postulates/theorems + glossary (from data/theorems.js)
    types.ts                   # Chapter, Section, Lesson, Question, Theorem, GlossaryEntry
  store/
    progress.ts                # zustand + persist: completed, bookmarks, scores, theme, lastRoute
  components/
    Sidebar.tsx                # collapsible TOC with ✓ per completed section
    TopBar.tsx                 # menu, breadcrumb, progress, bookmark, theme toggle
    Math.tsx                   # <Tex> inline/display via katex; <Rich> splits $...$ runs
    QuestionCard.tsx           # mc / numeric / diagram; modes: check | chapter | supplemental | exam | review
    Figure.tsx                 # static SVG figures from Question.figure specs
  diagrams/
    InscribedAngle.tsx         # draggable A/B/C, arc + angle readouts, central-angle toggle
    Prism.tsx                  # sliders w/d/h/lean, right/oblique toggle, Cavalieri slices
    DistanceGrid.tsx           # draggable snapped points, legs, exact + decimal distance
    useDrag.ts                 # pointer → viewBox coords, window move/up listeners
  pages/
    Home.tsx  Lesson.tsx  Problems.tsx  Exam.tsx  Appendix.tsx  Glossary.tsx
  videos/                      # the three explainer pages, embedded in Lesson via <iframe>
```

## 3. Data model (`content/types.ts`)

```ts
export type SectionKind = 'lesson' | 'problems' | 'supplemental';
export interface Section { id: string; title: string; kind: SectionKind; parts?: string[]; summary?: string; formula?: string; built?: boolean; }
export interface Chapter { id: string; number: number; title: string; sections: Section[]; }

export type DiagramKind = 'inscribed' | 'prism' | 'distance';   // add one per new interactive
export interface Lesson {
  diagram: DiagramKind; video: string; videoTitle: string;
  intro: string[];                                   // paragraphs, $...$ inline math
  definitions: { term: string; text: string }[];
  formulas: { label: string; tex: string }[];
  theorems: string[];                                // Theorem ids
  examples: { title: string; given: string; steps: string[] }[];
  checks: string[];                                  // Question ids
}

export type QuestionSet = 'check' | 'chapter' | 'supplemental' | 'bank';
export type Figure =
  | { kind: 'inscribed'; arc: number }
  | { kind: 'prism'; w: number; d: number; h: number }
  | { kind: 'points'; a: [number, number]; b: [number, number] }
  | { kind: 'sector'; r: number; angle: number };
export interface Question {
  id: string; chapter: string; section: string; set: QuestionSet;
  type: 'mc' | 'numeric' | 'diagram'; prompt: string;
  choices?: string[]; answer: number;                // index for mc, value for numeric
  tolerance?: number; unit?: string; figure?: Figure;
  solution?: string[];                               // omitted for supplemental (answer only)
}
export interface Theorem { id: string; chapter: string; kind: 'Theorem' | 'Postulate'; name: string; statement: string; section: string; }
export interface GlossaryEntry { term: string; def: string; section: string; }
```

Adding chapters 1–7: append a `Chapter` to `chapters`, add `Lesson` entries keyed by section id, questions tagged with the chapter id, theorems with `section` back-links. Nothing else changes; the sidebar, exam pool, appendix and glossary derive from the data.

## 4. Key behaviors

- **Grading**: mc → `value === answer`; numeric → `|parse(value) − answer| ≤ tolerance`.
- **QuestionCard modes**: `check`/`chapter` show Check → feedback → solution + Try again; `supplemental` shows Check + Reveal answer (no solution); `exam` collects answers only; `review` is locked and shows user answer, correct answer, solution.
- **Exam**: pool = all questions whose chapter is selected (any set). Shuffle, take N (5/10/15/20). Optional timer auto-submits at 0. Result = {correct,total,per[chapter],date}; keep last 10 in store.
- **Progress**: `completed: string[]` of section ids; sidebar ✓ and header % derive from it. Bookmarks are section ids.
- **Keyboard**: `[` / `]` previous/next section; Esc closes mobile sidebar; diagram handles are `role="slider"` with arrow-key nudging; all controls are native buttons/inputs.
- **Design system**: see `Design System.dc.html` (tokens, type scale, color roles, components, writing rules). Tokens are CSS variables on `:root` / `[data-theme="dark"]`; copy the two blocks from the prototype's helmet `<style>` into `index.css` and map them in Tailwind (`colors: { bg: 'var(--bg)', … }`).
- **Type**: Newsreader 500 (display: titles, readouts, diagram labels in italic), Source Serif 4 (text/UI, 17px on 1.6), JetBrains Mono (counts, timers, kbd). Small-caps Source Serif for eyebrows and tile captions. KaTeX for math.
- **Color roles**: accent green = arcs, primary action, correct, progress; violet = angles, heights, selection; orange = horizontal change, lateral edges, bookmarks; red = incorrect, low timer.
- **Writing style**: lesson copy follows ASD-STE100 (short active sentences, one instruction each, ≤ 25 words). Keep that when adding content.

## 5. Diagram math (reuse directly)

- Inscribed angle: points at angles a,b,c on the circle. `dAC = (c−a) mod 360`, `dAB = (b−a) mod 360`. If `dAB < dAC` the intercepted arc is `360 − dAC` (drawn from C to A), else `dAC`. Angle = arc / 2.
- Prism projection: `P(x,y,z) = (ox + (x + 0.5z)·u, oy − (y + 0.3z)·u)`; oblique shear offsets top vertices by `k`; lateral edge = `√(h² + k²)`; slices split `[0,h]` into n bands each sheared by `k·y/h`.
- Distance: snap to integers; `exact = k√m` via largest-square-factor reduction of `Δx² + Δy²`.

## 6. Videos

`Video - *.dc.html` pages are self-contained 1280×720 animations (scene list in `window.OM_SCENES`). Embed with `<iframe>` as the prototype does, or export each to MP4 from the host and swap in `<video>` tags.
