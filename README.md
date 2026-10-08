<img src="assets/icon.svg" width="64" height="64" alt="">

# Interactive Geometry Study Guide

A self-paced geometry textbook on screen: lessons with interactive diagrams, animated explainers, worked examples, practice problems, a customized exam, an appendix of postulates and theorems, and a glossary. Progress, bookmarks, scores, and theme are saved on the device.

Built with Vite, React 18, TypeScript (strict), Tailwind CSS v4, KaTeX, zustand, and react-router (hash routes).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # vitest
npm run build      # type-check + production build to dist/
```

## Routes

| Route | Page |
| --- | --- |
| `#/` | Overview |
| `#/s/:sectionId` | Lesson, Chapter Problems, or Supplemental problems |
| `#/exam` | Customized Full-Length Exam |
| `#/appendix` | Postulates and Theorems (search, chapter filter) |
| `#/glossary` | Glossary / Index |

Keyboard: `[` previous section, `]` next section, `Esc` closes the mobile drawer. Diagram handles are sliders; use the arrow keys to nudge them.

## Adding content

Only data edits are needed. See `src/content/`:

- `chapters.ts`: table of contents (`chapters`) and full lessons (`lessons`, keyed by section id). Use the `toc()` and `problems()` helpers for outline-only chapters.
- `questions.ts`: question bank. `set` is `check` (in-lesson), `chapter` (full solutions), `supplemental` (answer only), or `bank` (exam only).
- `theorems.ts`: postulates, theorems, and glossary entries with `section` back-links.

The sidebar, exam pool, appendix, and glossary derive from these files. A lesson references one of the diagrams in `src/diagrams/` and one of the videos in `src/videos/`.

## Design

Tokens live as CSS variables on `:root` and `[data-theme="dark"]` in `src/index.css` and are mapped into the Tailwind theme. Components use only those tokens. The `design/` folder holds the original prototype and specification for reference only; it is not part of the build.

## Deploy

`vercel.json` sets the Vite build and `dist` output. Hash routing needs no rewrites.

```bash
npx vercel          # preview
npx vercel --prod   # production
```
