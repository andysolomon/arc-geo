// Chapter 2: Parallel Lines. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
// Angle numbering: 1–4 at the top intersection, 5–8 at the bottom. 1 and 5 are the top-left angles. The numbers go clockwise.
// So angles 1, 3, 5, 7 are one measure and angles 2, 4, 6, 8 are its supplement when the lines are parallel.
import type { ChapterContent } from '../types';

export const ch2: ChapterContent = {
chapter: { id: 'ch2', number: 2, title: 'Parallel Lines', sections: [
  { id: '2-1', title: 'Angles Created by Lines and a Transversal', kind: 'lesson', built: true, parts: ['Angles Created by Parallel Lines and a Transversal'], summary: 'A transversal cuts two lines and makes eight angles. The angle pairs have names: corresponding, alternate interior, alternate exterior, and same-side interior. When the two lines are parallel, the first three pairs are congruent and same-side interior angles are supplementary.', formula: 'm \\parallel n \\implies \\angle 1 \\cong \\angle 5' },
  { id: '2-2', title: 'Proving Lines Parallel', kind: 'lesson', built: true, summary: 'The converses of the parallel-line theorems prove that two lines are parallel. Show one pair of corresponding, alternate interior, or alternate exterior angles is congruent. Or show one pair of same-side interior angles is supplementary.', formula: '\\angle 1 \\cong \\angle 5 \\implies m \\parallel n' },
  { id: '2-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '2-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'2-1': {
  diagram: 'transversal',
  intro: [
    'A transversal is a line that cuts two or more other lines at different points. In the diagram, line $t$ is a transversal. It cuts lines $m$ and $n$. The cuts make eight angles, four at each intersection. The four angles between $m$ and $n$ are interior angles. The other four angles are exterior angles.',
    'The eight angles are numbered 1 to 8. Angles 1 to 4 are at the top intersection with line $m$. Angles 5 to 8 are at the bottom intersection with line $n$. Angles 1 and 5 are the top-left angles, and the numbers go clockwise from there. Angles 3, 4, 5, and 6 are the interior angles. Angles 1, 2, 7, and 8 are the exterior angles.',
    'Move the slider to change the angle of the transversal. Use the toggle to make $m$ and $n$ parallel or not parallel. The readouts name each angle pair and show which pairs are equal or supplementary. Make the lines parallel and watch the readouts. Then make the lines not parallel. The pairs are no longer equal.',
    'The names of the pairs do not depend on the lines. Angles 1 and 5 are corresponding angles even when $m$ and $n$ are not parallel. The lines must be parallel for the pairs to be congruent or supplementary. The next postulate and three theorems state what is true when $m \\parallel n$.',
  ],
  definitions: [
    { term: 'Transversal', text: 'A line that cuts two or more lines at different points.' },
    { term: 'Interior and exterior angles', text: 'Interior angles lie between the two lines (3, 4, 5, 6). Exterior angles lie outside them (1, 2, 7, 8).' },
    { term: 'Corresponding angles', text: 'Two angles in the same position at each intersection, one interior and one exterior. The pairs are 1 and 5, 2 and 6, 3 and 7, 4 and 8.' },
    { term: 'Alternate angles', text: 'Two angles on opposite sides of the transversal and not adjacent. Alternate interior pairs are 3 and 5, 4 and 6. Alternate exterior pairs are 1 and 7, 2 and 8.' },
    { term: 'Same-side interior angles', text: 'Two interior angles on the same side of the transversal, 4 and 5 or 3 and 6. Some books call them consecutive interior angles.' },
  ],
  formulas: [
    { label: 'Corresponding angles (m ∥ n)', tex: '\\angle 1 \\cong \\angle 5,\\ \\angle 2 \\cong \\angle 6,\\ \\angle 3 \\cong \\angle 7,\\ \\angle 4 \\cong \\angle 8' },
    { label: 'Alternate interior angles', tex: '\\angle 3 \\cong \\angle 5,\\ \\angle 4 \\cong \\angle 6' },
    { label: 'Alternate exterior angles', tex: '\\angle 1 \\cong \\angle 7,\\ \\angle 2 \\cong \\angle 8' },
    { label: 'Same-side interior angles', tex: 'm\\angle 3 + m\\angle 6 = 180^\\circ,\\ m\\angle 4 + m\\angle 5 = 180^\\circ' },
  ],
  theorems: ['2.1', '2.2', '2.3', '2.4', '2.5'],
  examples: [
    { title: 'Example 1 — Corresponding angles', given: '$m \\parallel n$ and $m\\angle 1 = 62^\\circ$. Find $m\\angle 5$ and $m\\angle 8$.', steps: [
      'Angles 1 and 5 are corresponding angles. Use the Corresponding Angles Postulate.',
      '$m\\angle 5 = m\\angle 1 = 62^\\circ$',
      'Angles 5 and 8 make a straight line, so they are supplementary.',
      '$m\\angle 8 = 180^\\circ - 62^\\circ = 118^\\circ$',
    ]},
    { title: 'Example 2 — Interior angles', given: '$m \\parallel n$ and $m\\angle 3 = 115^\\circ$. Find $m\\angle 5$ and $m\\angle 6$.', steps: [
      'Angles 3 and 5 are alternate interior angles. They are congruent.',
      '$m\\angle 5 = 115^\\circ$',
      'Angles 3 and 6 are same-side interior angles. They are supplementary.',
      '$m\\angle 6 = 180^\\circ - 115^\\circ = 65^\\circ$',
    ]},
    { title: 'Example 3 — Solve for $x$', given: '$m \\parallel n$, $m\\angle 2 = (3x + 10)^\\circ$, and $m\\angle 8 = (5x - 40)^\\circ$. Find $x$ and $m\\angle 2$.', steps: [
      'Angles 2 and 8 are alternate exterior angles. They are congruent.',
      '$3x + 10 = 5x - 40$',
      '$50 = 2x$, so $x = 25$',
      '$m\\angle 2 = 3(25) + 10 = 85^\\circ$',
    ]},
  ],
  checks: ['c2-1-1', 'c2-1-2', 'c2-1-3'],
},
'2-2': {
  diagram: 'transversal',
  intro: [
    'A converse swaps the two parts of an if-then statement. The Corresponding Angles Postulate says: if two lines are parallel, then corresponding angles are congruent. Its converse says: if corresponding angles are congruent, then the two lines are parallel. A converse is not always true. In this lesson, every converse is true. Each one gives a way to prove that two lines are parallel.',
    'The diagram is the same one from lesson 2-1. Lines $m$ and $n$ are cut by transversal $t$, and the angles are numbered 1 to 8. Use the toggle to make the lines not parallel. Move the slider and watch the readouts. No pair of corresponding angles is equal. Use the toggle to make the lines parallel, and every pair becomes equal again.',
    'To prove that $m \\parallel n$, you need only one pair of angles. Show that one pair of corresponding, alternate interior, or alternate exterior angles is congruent. Or show that one pair of same-side interior angles is supplementary. Then the converse tells you the lines are parallel.',
    'Two more theorems use a third line. Two lines perpendicular to the same line are parallel. Two lines parallel to the same line are parallel to each other. In this book, all lines are in one plane.',
  ],
  definitions: [
    { term: 'Converse', text: 'The statement you get when you swap the hypothesis and the conclusion of an if-then statement.' },
    { term: 'Hypothesis', text: 'The "if" part of an if-then statement.' },
    { term: 'Conclusion', text: 'The "then" part of an if-then statement.' },
  ],
  formulas: [
    { label: 'Corresponding angles congruent', tex: '\\angle 1 \\cong \\angle 5 \\implies m \\parallel n' },
    { label: 'Alternate interior angles congruent', tex: '\\angle 3 \\cong \\angle 5 \\implies m \\parallel n' },
    { label: 'Same-side interior angles supplementary', tex: 'm\\angle 3 + m\\angle 6 = 180^\\circ \\implies m \\parallel n' },
    { label: 'Two perpendiculars', tex: 'm \\perp t \\text{ and } n \\perp t \\implies m \\parallel n' },
  ],
  theorems: ['2.6', '2.7', '2.8', '2.9', '2.10', '2.11'],
  examples: [
    { title: 'Example 1 — Corresponding angles', given: '$m\\angle 2 = 112^\\circ$ and $m\\angle 6 = 112^\\circ$. Is $m \\parallel n$?', steps: [
      'Angles 2 and 6 are corresponding angles.',
      'They are congruent, because $112^\\circ = 112^\\circ$.',
      'By the Converse of the Corresponding Angles Postulate, $m \\parallel n$.',
    ]},
    { title: 'Example 2 — Same-side interior angles', given: '$m\\angle 4 = 75^\\circ$ and $m\\angle 5 = 105^\\circ$. Is $m \\parallel n$?', steps: [
      'Angles 4 and 5 are same-side interior angles.',
      '$75^\\circ + 105^\\circ = 180^\\circ$, so they are supplementary.',
      'By the Converse of the Same-Side Interior Angles Theorem, $m \\parallel n$.',
    ]},
    { title: 'Example 3 — Find the $x$ that makes the lines parallel', given: '$m\\angle 1 = (2x + 14)^\\circ$ and $m\\angle 7 = (3x - 6)^\\circ$. Find $x$ so that $m \\parallel n$.', steps: [
      'Angles 1 and 7 are alternate exterior angles.',
      'The lines are parallel when these angles are congruent. Set the measures equal.',
      '$2x + 14 = 3x - 6$, so $x = 20$',
      'Test: $2(20) + 14 = 54$ and $3(20) - 6 = 54$. The angles are congruent.',
    ]},
  ],
  checks: ['c2-2-1', 'c2-2-2', 'c2-2-3'],
},
},

questions: [
  // ---- 2-1 checks
  { id: 'c2-1-1', chapter: 'ch2', section: '2-1', set: 'check', type: 'diagram', figure: { kind: 'parallel', angle: 70 }, prompt: '$m \\parallel n$ and $m\\angle 1 = 70^\\circ$. Find $m\\angle 6$.', answer: 110, tolerance: 0.5, unit: '°',
    solution: ['Angles 1 and 5 are corresponding angles, so $m\\angle 5 = 70^\\circ$.', 'Angles 5 and 6 make a straight line. They are supplementary.', '$m\\angle 6 = 180^\\circ - 70^\\circ = 110^\\circ$'] },
  { id: 'c2-1-2', chapter: 'ch2', section: '2-1', set: 'check', type: 'mc', prompt: 'Which pair are alternate interior angles?', choices: ['$\\angle 1$ and $\\angle 5$', '$\\angle 3$ and $\\angle 5$', '$\\angle 4$ and $\\angle 5$', '$\\angle 2$ and $\\angle 8$'], answer: 1,
    solution: ['Alternate interior angles are interior angles on opposite sides of the transversal.', 'Angle 3 is on the right of $t$ at the top. Angle 5 is on the left of $t$ at the bottom. Both are interior.', 'Angles 1 and 5 are corresponding. Angles 4 and 5 are same-side interior. Angles 2 and 8 are alternate exterior.'] },
  { id: 'c2-1-3', chapter: 'ch2', section: '2-1', set: 'check', type: 'numeric', prompt: '$m \\parallel n$ and $m\\angle 2 = 125^\\circ$. Find $m\\angle 7$.', answer: 55, tolerance: 0.5, unit: '°',
    solution: ['Angles 2 and 6 are corresponding angles, so $m\\angle 6 = 125^\\circ$.', 'Angles 6 and 7 make a straight line. They are supplementary.', '$m\\angle 7 = 180^\\circ - 125^\\circ = 55^\\circ$'] },
  // ---- 2-2 checks
  { id: 'c2-2-1', chapter: 'ch2', section: '2-2', set: 'check', type: 'mc', prompt: '$m\\angle 3 = 70^\\circ$ and $m\\angle 7 = 70^\\circ$. Which reason proves $m \\parallel n$?', choices: ['Corresponding angles are congruent.', 'Alternate interior angles are congruent.', 'Same-side interior angles are supplementary.', 'Vertical angles are congruent.'], answer: 0,
    solution: ['Angles 3 and 7 are in the same position at each intersection. They are corresponding angles.', 'They are congruent, so the Converse of the Corresponding Angles Postulate gives $m \\parallel n$.'] },
  { id: 'c2-2-2', chapter: 'ch2', section: '2-2', set: 'check', type: 'numeric', prompt: '$m\\angle 4 = (4x + 8)^\\circ$ and $m\\angle 5 = (6x - 18)^\\circ$. Find the value of $x$ that makes $m \\parallel n$.', answer: 19, tolerance: 0.01,
    solution: ['Angles 4 and 5 are same-side interior angles. The lines are parallel when the angles are supplementary.', '$(4x + 8) + (6x - 18) = 180$', '$10x - 10 = 180$, so $x = 19$', 'Test: $4(19) + 8 = 84$ and $6(19) - 18 = 96$. The sum is $180$.'] },
  { id: 'c2-2-3', chapter: 'ch2', section: '2-2', set: 'check', type: 'mc', prompt: 'Lines $a$, $b$, and $c$ are in one plane. $a \\perp c$ and $b \\perp c$. What is true about $a$ and $b$?', choices: ['$a \\parallel b$', '$a \\perp b$', '$a$ and $b$ meet at $45^\\circ$', 'Not enough information'], answer: 0,
    solution: ['Both $a$ and $b$ are perpendicular to the same line $c$.', 'Two lines perpendicular to the same line are parallel, so $a \\parallel b$.'] },

  // ---- Chapter 2 problems
  { id: 'p2-1', chapter: 'ch2', section: '2-1', set: 'chapter', type: 'diagram', figure: { kind: 'parallel', angle: 55 }, prompt: '$m \\parallel n$ and $m\\angle 1 = 55^\\circ$. Find $m\\angle 8$.', answer: 125, tolerance: 0.5, unit: '°',
    solution: ['Angles 1 and 5 are corresponding angles. By the Corresponding Angles Postulate, $m\\angle 5 = 55^\\circ$.', 'Angles 5 and 8 make a straight line, so they are supplementary.', '$m\\angle 8 = 180^\\circ - 55^\\circ = 125^\\circ$'] },
  { id: 'p2-2', chapter: 'ch2', section: '2-1', set: 'chapter', type: 'numeric', prompt: '$m \\parallel n$, $m\\angle 3 = (2x + 30)^\\circ$, and $m\\angle 5 = (4x - 10)^\\circ$. Find $x$.', answer: 20, tolerance: 0.01,
    solution: ['Angles 3 and 5 are alternate interior angles. By the Alternate Interior Angles Theorem, they are congruent.', '$2x + 30 = 4x - 10$', '$40 = 2x$, so $x = 20$', 'Test: $2(20) + 30 = 70$ and $4(20) - 10 = 70$.'] },
  { id: 'p2-3', chapter: 'ch2', section: '2-1', set: 'chapter', type: 'mc', prompt: '$m \\parallel n$ and $m\\angle 4 = 48^\\circ$. Find $m\\angle 6$.', choices: ['$42^\\circ$', '$48^\\circ$', '$132^\\circ$', '$138^\\circ$'], answer: 1,
    solution: ['Angle 4 is the bottom-left angle at the top intersection. Angle 6 is the top-right angle at the bottom intersection.', 'Both are interior and they are on opposite sides of $t$. They are alternate interior angles.', 'By the Alternate Interior Angles Theorem, $m\\angle 6 = m\\angle 4 = 48^\\circ$.'] },
  { id: 'p2-4', chapter: 'ch2', section: '2-2', set: 'chapter', type: 'mc', prompt: '$m\\angle 1 = 118^\\circ$ and $m\\angle 7 = 118^\\circ$. Which conclusion is correct?', choices: ['$m \\parallel n$ by the Converse of the Alternate Exterior Angles Theorem', '$m \\parallel n$ by the Converse of the Corresponding Angles Postulate', '$m \\parallel n$ by the Converse of the Alternate Interior Angles Theorem', '$m$ and $n$ are not parallel'], answer: 0,
    solution: ['Angle 1 is exterior at the top left. Angle 7 is exterior at the bottom right.', 'They are on opposite sides of $t$, so they are alternate exterior angles.', 'They are congruent. The Converse of the Alternate Exterior Angles Theorem gives $m \\parallel n$.'] },
  { id: 'p2-5', chapter: 'ch2', section: '2-2', set: 'chapter', type: 'numeric', prompt: '$m\\angle 3 = (5x - 5)^\\circ$ and $m\\angle 6 = (3x + 25)^\\circ$. Find the value of $x$ that makes $m \\parallel n$.', answer: 20, tolerance: 0.01,
    solution: ['Angles 3 and 6 are same-side interior angles.', 'By the Converse of the Same-Side Interior Angles Theorem, the lines are parallel when the angles are supplementary.', '$(5x - 5) + (3x + 25) = 180$', '$8x + 20 = 180$, so $x = 20$', 'Test: $5(20) - 5 = 95$ and $3(20) + 25 = 85$. The sum is $180$.'] },
  { id: 'p2-6', chapter: 'ch2', section: '2-1', set: 'chapter', type: 'diagram', figure: { kind: 'parallel', angle: 90 }, prompt: '$m \\parallel n$ and $t \\perp m$. Find $m\\angle 7$.', answer: 90, tolerance: 0.5, unit: '°',
    solution: ['The transversal $t$ is perpendicular to one of two parallel lines.', 'By the Perpendicular Transversal Theorem, $t \\perp n$.', 'Perpendicular lines make right angles, so $m\\angle 7 = 90^\\circ$.'] },

  // ---- Chapter 2 supplemental (answers only)
  { id: 's2-1', chapter: 'ch2', section: '2-1', set: 'supplemental', type: 'diagram', figure: { kind: 'parallel', angle: 64 }, prompt: '$m \\parallel n$ and $m\\angle 1 = 64^\\circ$. Find $m\\angle 6$.', answer: 116, tolerance: 0.5, unit: '°' },
  { id: 's2-2', chapter: 'ch2', section: '2-1', set: 'supplemental', type: 'numeric', prompt: '$m \\parallel n$ and $m\\angle 4 = 101^\\circ$. Find $m\\angle 6$.', answer: 101, tolerance: 0.5, unit: '°' },
  { id: 's2-3', chapter: 'ch2', section: '2-1', set: 'supplemental', type: 'numeric', prompt: '$m \\parallel n$, $m\\angle 3 = (7x - 4)^\\circ$, and $m\\angle 7 = (5x + 20)^\\circ$. Find $x$.', answer: 12, tolerance: 0.01 },
  { id: 's2-4', chapter: 'ch2', section: '2-2', set: 'supplemental', type: 'mc', prompt: '$m\\angle 2 = 95^\\circ$ and $m\\angle 6 = 85^\\circ$. Are lines $m$ and $n$ parallel?', choices: ['Yes. Corresponding angles are congruent.', 'Yes. Same-side interior angles are supplementary.', 'No. Corresponding angles are not congruent.', 'Not enough information.'], answer: 2 },
  { id: 's2-5', chapter: 'ch2', section: '2-2', set: 'supplemental', type: 'numeric', prompt: '$m\\angle 4 = (3x + 12)^\\circ$ and $m\\angle 6 = (5x - 20)^\\circ$. Find the value of $x$ that makes $m \\parallel n$.', answer: 16, tolerance: 0.01 },
  { id: 's2-6', chapter: 'ch2', section: '2-2', set: 'supplemental', type: 'mc', prompt: 'Lines $p$, $q$, and $r$ are in one plane. $p \\parallel q$ and $q \\parallel r$. What is true about $p$ and $r$?', choices: ['$p \\parallel r$', '$p \\perp r$', '$p$ and $r$ intersect', 'Not enough information'], answer: 0 },

  // ---- Chapter 2 exam bank
  { id: 'b2-1', chapter: 'ch2', section: '2-1', set: 'bank', type: 'diagram', figure: { kind: 'parallel', angle: 37 }, prompt: '$m \\parallel n$ and $m\\angle 1 = 37^\\circ$. Find $m\\angle 8$.', answer: 143, tolerance: 0.5, unit: '°',
    solution: ['Angles 1 and 5 are corresponding angles, so $m\\angle 5 = 37^\\circ$.', 'Angles 5 and 8 make a straight line. They are supplementary.', '$m\\angle 8 = 180^\\circ - 37^\\circ = 143^\\circ$'] },
  { id: 'b2-2', chapter: 'ch2', section: '2-2', set: 'bank', type: 'numeric', prompt: '$m\\angle 3 = (2x + 40)^\\circ$ and $m\\angle 6 = (x + 20)^\\circ$. Find the value of $x$ that makes $m \\parallel n$.', answer: 40, tolerance: 0.01,
    solution: ['Angles 3 and 6 are same-side interior angles. The lines are parallel when the angles are supplementary.', '$(2x + 40) + (x + 20) = 180$', '$3x + 60 = 180$, so $x = 40$', 'Test: $2(40) + 40 = 120$ and $40 + 20 = 60$. The sum is $180$.'] },
  { id: 'b2-3', chapter: 'ch2', section: '2-1', set: 'bank', type: 'mc', prompt: '$m \\parallel n$ and $m\\angle 5 = 132^\\circ$. Find $m\\angle 2$.', choices: ['$48^\\circ$', '$58^\\circ$', '$132^\\circ$', '$142^\\circ$'], answer: 0,
    solution: ['Angles 1 and 5 are corresponding angles, so $m\\angle 1 = 132^\\circ$.', 'Angles 1 and 2 make a straight line. They are supplementary.', '$m\\angle 2 = 180^\\circ - 132^\\circ = 48^\\circ$'] },
],

theorems: [
  { id: '2.1', chapter: 'ch2', kind: 'Postulate', name: 'Corresponding Angles Postulate', statement: 'If two parallel lines are cut by a transversal, then corresponding angles are congruent.', section: '2-1' },
  { id: '2.2', chapter: 'ch2', kind: 'Theorem', name: 'Alternate Interior Angles Theorem', statement: 'If two parallel lines are cut by a transversal, then alternate interior angles are congruent.', section: '2-1' },
  { id: '2.3', chapter: 'ch2', kind: 'Theorem', name: 'Alternate Exterior Angles Theorem', statement: 'If two parallel lines are cut by a transversal, then alternate exterior angles are congruent.', section: '2-1' },
  { id: '2.4', chapter: 'ch2', kind: 'Theorem', name: 'Same-Side Interior Angles Theorem', statement: 'If two parallel lines are cut by a transversal, then same-side interior angles are supplementary.', section: '2-1' },
  { id: '2.5', chapter: 'ch2', kind: 'Theorem', name: 'Perpendicular Transversal Theorem', statement: 'If a transversal is perpendicular to one of two parallel lines, then it is perpendicular to the other.', section: '2-1' },
  { id: '2.6', chapter: 'ch2', kind: 'Postulate', name: 'Converse of the Corresponding Angles Postulate', statement: 'If two lines are cut by a transversal so that corresponding angles are congruent, then the lines are parallel.', section: '2-2' },
  { id: '2.7', chapter: 'ch2', kind: 'Theorem', name: 'Converse of the Alternate Interior Angles Theorem', statement: 'If two lines are cut by a transversal so that alternate interior angles are congruent, then the lines are parallel.', section: '2-2' },
  { id: '2.8', chapter: 'ch2', kind: 'Theorem', name: 'Converse of the Alternate Exterior Angles Theorem', statement: 'If two lines are cut by a transversal so that alternate exterior angles are congruent, then the lines are parallel.', section: '2-2' },
  { id: '2.9', chapter: 'ch2', kind: 'Theorem', name: 'Converse of the Same-Side Interior Angles Theorem', statement: 'If two lines are cut by a transversal so that same-side interior angles are supplementary, then the lines are parallel.', section: '2-2' },
  { id: '2.10', chapter: 'ch2', kind: 'Theorem', name: 'Two Perpendiculars Theorem', statement: 'In a plane, if two lines are perpendicular to the same line, then they are parallel to each other.', section: '2-2' },
  { id: '2.11', chapter: 'ch2', kind: 'Theorem', name: 'Parallel Transitivity Theorem', statement: 'If two lines are parallel to the same line, then they are parallel to each other.', section: '2-2' },
],

glossary: [
  { term: 'Transversal', def: 'A line that cuts two or more lines at different points.', section: '2-1' },
  { term: 'Interior angles', def: 'The four angles between two lines cut by a transversal.', section: '2-1' },
  { term: 'Exterior angles', def: 'The four angles outside two lines cut by a transversal.', section: '2-1' },
  { term: 'Corresponding angles', def: 'Two angles in the same position at each intersection of a transversal with two lines.', section: '2-1' },
  { term: 'Alternate interior angles', def: 'Two interior angles on opposite sides of the transversal that are not adjacent.', section: '2-1' },
  { term: 'Alternate exterior angles', def: 'Two exterior angles on opposite sides of the transversal that are not adjacent.', section: '2-1' },
  { term: 'Same-side interior angles', def: 'Two interior angles on the same side of the transversal; also called consecutive interior angles.', section: '2-1' },
  { term: 'Converse', def: 'The statement made by swapping the hypothesis and conclusion of an if-then statement.', section: '2-2' },
  { term: 'Hypothesis', def: 'The "if" part of an if-then statement.', section: '2-2' },
  { term: 'Conclusion', def: 'The "then" part of an if-then statement.', section: '2-2' },
],
};
