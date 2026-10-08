# Build prompt: Interactive Geometry Study Guide → React + TypeScript + Tailwind on Vercel

Paste everything below the line into your coding agent. Put the downloaded project folder in the repo as `design/` first.

---

You are building a production web app from a working HTML prototype. The prototype and its specs are in `design/`. Match the prototype's behavior and visual design closely. Do not redesign.

## Source material (read all of these before you write code)

- `design/HANDOFF.md`: project structure, TypeScript types, behaviors, diagram math. This is the spec.
- `design/Interactive Geometry Study Guide.dc.html`: the working prototype. Its `<script data-dc-script>` logic class has the reference implementation of grading, the exam, progress, and the three diagrams. Its `<helmet><style>` block has the CSS tokens.
- `design/Design System.dc.html`: tokens, type scale, color roles, spacing, radius, stroke widths, and component states in light and dark themes.
- `design/data/chapters.js`, `questions.js`, `theorems.js`: all content. Port these to TypeScript without changing the content.
- `design/videos/inscribed-angles.jsx`, `prisms.jsx`, `distance-formula.jsx`: three animated explainers (React). `design/Video - *.dc.html` holds each scene list (`window.OM_SCENES`).
- `design/videos/animations-v3.jsx`: the animation engine the explainers use. Read it only for the API: `useComposition()`, `Captions`, `Easing`, `animate`, `interpolate`.

## Stack

- Vite + React 18 + TypeScript (strict)
- Tailwind CSS v4 (`@tailwindcss/vite`). Map the CSS variables into the theme. Do not hard-code hex values in components.
- KaTeX (`katex`) for math. Render `$...$` runs inline, formulas in display mode.
- zustand with `persist` for progress, bookmarks, scores, theme, and last route (key `geo-guide-v1`).
- Hash routing (`react-router-dom` with `createHashRouter`): `/`, `/s/:sectionId`, `/exam`, `/appendix`, `/glossary`.
- Fonts: Newsreader, Source Serif 4, JetBrains Mono from Google Fonts (same weights as the prototype `<link>`).
- Vitest + Testing Library for tests.

## Steps

1. Scaffold the app with `npm create vite@latest . -- --template react-ts`. Add the dependencies above.
2. Create `src/content/types.ts` from HANDOFF.md section 3. Port the three data files to `src/content/*.ts` with those types. Keep the `toc()` and `problems()` helpers for chapters 1–7.
3. Copy the `:root` and `[data-theme="dark"]` token blocks into `src/index.css`. Set `data-theme` on `<html>`. Add the body reset, the `a` / `a:hover` colors, and the `fadeUp` keyframe.
4. Build the shell: `Sidebar` (collapsible, 300px; a drawer with backdrop below 900px; ✓ per completed section; ★ for bookmarks; chapters 1–7 collapsed by default) and `TopBar` (menu, breadcrumb, progress %, bookmark, theme toggle).
5. Build `Math.tsx` (`<Tex>`, `<Rich>`), `Figure.tsx` (the four static question figures), and `QuestionCard.tsx` with the five modes in HANDOFF.md section 4.
6. Build the three diagrams in `src/diagrams/`. Port the math from the prototype logic class exactly. Draw lines, shapes, and handles in SVG. Put text labels in an HTML overlay positioned in % of the viewBox (the prototype does this with `lbl()`). Each handle needs `role="slider"`, `tabIndex=0`, an `aria-label`, and arrow-key nudging. Use pointer events with `touch-action: none`.
7. Build the pages: Home, Lesson (intro, diagram, definitions, formulas, video, worked examples, checks, theorems used, complete/prev/next), Problems (chapter = full solutions, supplemental = answer only with reveal), Exam (setup → running with optional timer that auto-submits → results with per-chapter breakdown and missed-item review; keep the last 10 scores), Appendix (search plus chapter filter, grouped by chapter, links to lessons), Glossary (search, links to lessons). Unwritten lessons show the summary and formula if present, plus a note.
8. Videos: build `src/videos/engine.ts`, a small clock that gives the same API as animations-v3 (`T` in authored seconds, `CUES` derived from the scene list, `authoredTotal`, `Captions`, `Easing`, `animate`, `interpolate`). Port each `Piece` component and its scene list. Wrap each video in an `<Explainer>` player: 16:9, scaled to fit, with play/pause, a scrubber, and loop. Pause when off-screen (IntersectionObserver). Respect `prefers-reduced-motion`: start paused.
9. Keyboard: `[` previous section, `]` next section, Esc closes the mobile drawer. Ignore these keys while an input has focus.
10. Write tests:
    - Grading: multiple choice, numeric with tolerance, junk input.
    - Inscribed-angle arc selection: B on each side of the circle.
    - `simplifyRoot` (50 → 5√2, 25 → 5).
    - Exam: the pool respects the chapter filter, the count is clamped, the per-chapter totals are correct.
    - Persistence: a reload keeps completed sections and the theme.
11. Run `npm run build`. Fix all type errors and warnings.
12. Deploy to Vercel (see below).

## Acceptance criteria

- Every route renders in light and dark themes. No console errors.
- Three lessons are fully built (8-4, 9-1, 10-2). They match the prototype: diagram, readouts, live KaTeX equation, video, examples, checks.
- All of chapters 1–10 show in the sidebar. Chapter Problems and Supplemental pages work for chapters 8–10.
- Progress, bookmarks, scores, and theme persist across reloads.
- Usable at 360px wide. Hit targets are at least 44px on touch.
- Lighthouse accessibility score of 95 or higher. All controls work from the keyboard. Focus rings are visible.
- Text contrast is at least 4.5:1 in both themes.
- Lesson copy stays in ASD-STE100 style. Do not rewrite the content.
- Adding a chapter needs only data edits.

## Deploy to Vercel

- Add `vercel.json`:
  ```json
  { "buildCommand": "npm run build", "outputDirectory": "dist", "framework": "vite" }
  ```
  Hash routing needs no rewrites. If you switch to browser routing, add `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`.
- Run `npx vercel --yes` for a preview deploy. Run `npx vercel --prod` for production. If the CLI is not logged in, stop and ask me to run `npx vercel login`.
- Alternative: push to GitHub and import the repo in the Vercel dashboard. The defaults (Vite, `dist`) are correct.
- Report the production URL. Report any acceptance criteria that fail.

## Do not

- Do not ship the `.dc.html` prototype files or `support.js`. They are reference only.
- Do not add analytics, auth, or a backend.
- Do not change the question bank, theorem numbers, or lesson text.
