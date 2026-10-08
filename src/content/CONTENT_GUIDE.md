# Content guide

Each chapter is one file in `src/content/chapters/chN.ts` that exports a `ChapterContent` object (see `types.ts`). The sidebar, exam pool, appendix, and glossary derive from these files. Adding a chapter needs only a new file plus one line in `index.ts`.

Use `src/content/chapters/ch8.ts` as the model for format and voice. Lesson `8-4` is the reference lesson.

## Sections

`chapter.sections` lists every lesson in order, then the two problem pages from `problems(N)`. Each lesson section needs:

- `id`: `N-k` (chapter N, k-th lesson), `title` from the table of contents, `kind: 'lesson'`, `built: true`
- `parts`: the sub-headings from the table of contents, if any
- `summary`: one to three short sentences. The home page and search use it.
- `formula`: optional TeX (no `$`), the one formula a student must remember

## Lessons (`lessons[sectionId]`)

- `diagram`: only the kind assigned to that section in the chapter brief. Omit the field when none is assigned.
- `video` / `videoTitle`: only for the three existing explainers. Omit otherwise.
- `intro`: 2–4 paragraphs. The first paragraph defines the idea. If the lesson has a diagram, one paragraph tells the student what to drag or change and what to watch.
- `definitions`: 2–5 terms.
- `formulas`: 0–4 entries, `{ label, tex }`. `tex` has no `$`.
- `theorems`: ids of this chapter's postulates and theorems that the lesson uses. May be empty, but most lessons cite one or more.
- `examples`: 2–3 worked examples. `given` states the problem. `steps` are 2–5 short steps, each one line. Put the computation in `$...$`.
- `checks`: ids of exactly 3 questions with `set: 'check'` and `section` equal to this lesson.

## Questions

Ids: checks `cN-k-m` (lesson `N-k`, m = 1..3); chapter problems `pN-m`; supplemental `sN-m`; exam bank `bN-m`. Per chapter: 4–6 chapter problems (full `solution`), 4–6 supplemental (no `solution` field at all), 2–3 bank (with `solution`). Spread problems across the chapter's sections and set `section` to the lesson they belong to.

- `type: 'mc'` with 4 `choices` and `answer` = index. Make the distractors plausible errors.
- `type: 'numeric'` with a numeric `answer`, a `tolerance` (0.5 for integers and degrees, 0.05 for decimals, 0.01 for exact small numbers), and a `unit` when there is one (`'°'`, `'cm'`, `'units²'`).
- `type: 'diagram'` is either of the above plus a `figure`. Use a figure when the question is about a drawn object.
- Check every answer by computing it yourself. Write the solution steps that produce exactly that answer.

### Figures

`figure` is one of:

- `{ kind: 'angle', degrees }`: one angle ABC of that measure
- `{ kind: 'triangle', a, b, c, labels? }`: a triangle drawn to scale from three side lengths; side a is opposite vertex A, and so on; the sides must satisfy the triangle inequality
- `{ kind: 'parallel', angle }`: two parallel lines and a transversal, angles numbered 1–8 (1–4 at the top intersection, 5–8 at the bottom; 1 and 5 are the top-left angles, numbering goes clockwise); angle 1 has the given measure
- `{ kind: 'rect', w, h }`: a rectangle with its dimensions labelled
- `{ kind: 'polygon', n }`: a regular n-gon
- `{ kind: 'circle', r }`: a circle with a labelled radius
- `{ kind: 'points', a: [x, y], b: [x, y] }`: a grid with points A and B and the right triangle between them
- `{ kind: 'inscribed', arc }`, `{ kind: 'sector', r, angle }`, `{ kind: 'prism', w, d, h }`: as in chapters 8–9

## Theorems and glossary

- Theorem ids are `N.m`, numbered in the order the lessons use them. `kind` is `'Postulate'` or `'Theorem'`. `name` is the textbook name (for example `'Angle Addition Postulate'`). `statement` is one sentence. `section` is the lesson that introduces it. Write 4–10 per chapter.
- Glossary: 4–12 entries per chapter, `{ term, def, section }`. One short sentence each. Terms must be unique across the whole book; do not define a term that chapters 8–10 already define (arc, chord, radius, diameter, circumference, sector, prism, pyramid, cone, cylinder, sphere, volume, slope, midpoint, ordered pair, origin, quadrant, coordinate plane).

## Writing style (ASD-STE100)

- Short sentences, at most 20 words for an instruction and 25 for a statement. Active voice. Simple present tense.
- One instruction per sentence. One topic per paragraph, at most 6 sentences.
- Use the same word for the same thing every time. Keep articles ("the", "a").
- Approved verbs: use, find, make sure, start, test, drag, move, change, watch, add, multiply, divide, draw. Not: utilize, ensure, commence, prior to, in order to, replenish, approximately (write "about").
- Define a term before you use it. State a theorem before you apply it.
- Degrees in prose: `45°`. Degrees in math: `$45^\\circ$`. Angle names in math: `$m\\angle ABC$`. Segments: `$\\overline{AB}$`. Arcs: `$\\widehat{AB}$`.

## TeX in TypeScript strings

Every backslash is doubled in the source: write `'$\\frac{1}{2}bh$'` to get `\frac{1}{2}bh`. Keep `$` balanced. Do not put `$` inside `formula` or `tex` fields.

## Checking your work

```bash
npx tsc --noEmit -p tsconfig.app.json
npx vitest run src/test/content.test.ts
```

The content test checks ids, cross-references, answer indexes, sentence length, and banned words.
