// Chapter 4: Polygons. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch4: ChapterContent = {
chapter: { id: 'ch4', number: 4, title: 'Polygons', sections: [
  { id: '4-1', title: 'Types of Polygons', kind: 'lesson', built: true, parts: ["Naming Polygons' Parts", 'Number of Sides and Angles', 'Regular Polygons'], summary: 'A polygon is a closed figure made of segments that meet only at their endpoints. We name polygons by their number of sides. A regular polygon has congruent sides and congruent angles.', formula: 'd = \\frac{n(n-3)}{2}' },
  { id: '4-2', title: 'Angle Sums', kind: 'lesson', built: true, summary: 'The interior angles of a polygon with n sides add to (n − 2)·180°. The exterior angles of any convex polygon add to 360°.', formula: 'S = (n - 2) \\cdot 180^\\circ' },
  { id: '4-3', title: 'Quadrilaterals', kind: 'lesson', built: true, parts: ['Trapezoids', 'Parallelograms'], summary: 'A trapezoid has exactly one pair of parallel sides. A parallelogram has two pairs. In a parallelogram the opposite sides and angles are congruent, and the diagonals bisect each other.', formula: 'm\\angle A + m\\angle B = 180^\\circ' },
  { id: '4-4', title: 'Proofs of Parallelograms', kind: 'lesson', built: true, summary: 'Five tests prove that a quadrilateral is a parallelogram. Each test is the converse of a parallelogram property.', formula: '\\overline{AB} \\parallel \\overline{DC},\\ \\overline{AB} \\cong \\overline{DC} \\implies \\text{parallelogram}' },
  { id: '4-5', title: 'Special Parallelograms', kind: 'lesson', built: true, parts: ['Rectangle', 'Rhombus', 'Square'], summary: 'A rectangle has four right angles and congruent diagonals. A rhombus has four congruent sides and perpendicular diagonals. A square is both.', formula: 'AC = BD \\ \\text{(rectangle)}, \\quad \\overline{AC} \\perp \\overline{BD} \\ \\text{(rhombus)}' },
  { id: '4-6', title: 'Special Trapezoids', kind: 'lesson', built: true, summary: 'An isosceles trapezoid has congruent legs, congruent base angles, and congruent diagonals. The median of a trapezoid is parallel to the bases and equals half their sum.', formula: 'm = \\frac{b_1 + b_2}{2}' },
  { id: '4-7', title: 'The Midpoint Theorem', kind: 'lesson', built: true, summary: 'The segment that joins the midpoints of two sides of a triangle is parallel to the third side and half as long.', formula: 'DE = \\tfrac{1}{2}\\, BC' },
  { id: '4-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '4-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'4-1': {
  diagram: 'polygon',
  intro: [
    'A polygon is a closed plane figure made of three or more segments. Each segment is a side. Each side meets exactly two other sides, one at each endpoint. The sides cross only at their endpoints. The point where two sides meet is a vertex. A polygon with $n$ sides has $n$ vertices and $n$ angles.',
    'A diagonal is a segment that joins two vertices that are not next to each other. A polygon is convex when every diagonal stays inside the figure. A polygon is concave when at least one diagonal goes outside the figure. We name a polygon by its number of sides. A triangle has 3 sides, a quadrilateral has 4, a pentagon has 5, and a hexagon has 6. A heptagon has 7 sides, an octagon has 8, a nonagon has 9, and a decagon has 10.',
    'A polygon with $n$ sides is an $n$-gon. A polygon is equilateral when all its sides are congruent. It is equiangular when all its angles are congruent. A regular polygon is both equilateral and equiangular. From one vertex you can draw $n - 3$ diagonals. The whole polygon has $\\frac{n(n-3)}{2}$ diagonals, because each diagonal has two endpoints.',
    'The diagram shows a regular polygon. Drag the sides slider from 3 to 12. Watch the name and the number of diagonals change. Drag the side length slider. The perimeter changes, but the name does not.',
  ],
  definitions: [
    { term: 'Polygon', text: 'A closed plane figure made of three or more segments that meet only at their endpoints.' },
    { term: 'Diagonal', text: 'A segment that joins two vertices of a polygon that are not next to each other.' },
    { term: 'Convex polygon', text: 'A polygon in which every diagonal lies inside the figure.' },
    { term: 'Concave polygon', text: 'A polygon in which at least one diagonal lies outside the figure.' },
    { term: 'Regular polygon', text: 'A polygon with all sides congruent and all angles congruent.' },
  ],
  formulas: [
    { label: 'Diagonals from one vertex', tex: 'n - 3' },
    { label: 'Total number of diagonals', tex: 'd = \\frac{n(n-3)}{2}' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Name the polygon', given: 'A polygon has 8 sides. Name it. Find its number of vertices and the number of diagonals from one vertex.', steps: [
      'A polygon with 8 sides is an octagon.',
      'A polygon has the same number of vertices as sides. It has $8$ vertices.',
      'From one vertex you can draw $n - 3 = 8 - 3 = 5$ diagonals.',
    ]},
    { title: 'Example 2 — Count the diagonals', given: 'Find the number of diagonals of a hexagon.', steps: [
      'A hexagon has $n = 6$ sides.',
      'Use the formula $d = \\frac{n(n-3)}{2}$.',
      '$d = \\frac{6 \\cdot 3}{2} = 9$',
    ]},
    { title: 'Example 3 — Find the number of sides', given: 'A polygon has 35 diagonals. Name the polygon.', steps: [
      'Set $\\frac{n(n-3)}{2} = 35$.',
      'Multiply both sides by 2: $n(n-3) = 70$.',
      'Test $n = 10$: $10 \\cdot 7 = 70$. So $n = 10$.',
      'The polygon is a decagon.',
    ]},
  ],
  checks: ['c4-1-1', 'c4-1-2', 'c4-1-3'],
},
'4-2': {
  diagram: 'polygon',
  intro: [
    'The interior angles of a polygon are the angles inside it, one at each vertex. Draw all the diagonals from one vertex. They cut a polygon with $n$ sides into $n - 2$ triangles. The angles of each triangle add to 180°. So the interior angles of the polygon add to $(n - 2) \\cdot 180^\\circ$.',
    'An exterior angle of a polygon is formed by one side and the extension of the next side. There is one exterior angle at each vertex. The exterior angles of any convex polygon add to 360°. The number of sides does not change this sum. An interior angle and its exterior angle at the same vertex are supplementary.',
    'In a regular polygon all interior angles are congruent. Divide the interior angle sum by $n$ to find each one. All exterior angles are congruent too. Each exterior angle is $360^\\circ \\div n$.',
    'Drag the sides slider in the diagram. Watch the interior angle sum grow by 180° each time you add a side. Watch each exterior angle get smaller. The exterior angles always add to 360°.',
  ],
  definitions: [
    { term: 'Interior angle of a polygon', text: 'An angle inside the polygon formed by two sides that meet at a vertex.' },
    { term: 'Exterior angle of a polygon', text: 'An angle formed by one side and the extension of the next side at a vertex.' },
  ],
  formulas: [
    { label: 'Interior angle sum', tex: 'S = (n - 2) \\cdot 180^\\circ' },
    { label: 'Each interior angle of a regular polygon', tex: '\\frac{(n - 2) \\cdot 180^\\circ}{n}' },
    { label: 'Exterior angle sum', tex: '360^\\circ' },
    { label: 'Each exterior angle of a regular polygon', tex: '\\frac{360^\\circ}{n}' },
  ],
  theorems: ['4.1', '4.2'],
  examples: [
    { title: 'Example 1 — Interior angle sum', given: 'Find the sum of the interior angles of a heptagon.', steps: [
      'A heptagon has $n = 7$ sides.',
      'Use Theorem 4.1: $S = (n - 2) \\cdot 180^\\circ$.',
      '$S = 5 \\cdot 180^\\circ = 900^\\circ$',
    ]},
    { title: 'Example 2 — Angles of a regular decagon', given: 'Find each interior angle and each exterior angle of a regular decagon.', steps: [
      'The interior angle sum is $(10 - 2) \\cdot 180^\\circ = 1440^\\circ$.',
      'Each interior angle is $1440^\\circ \\div 10 = 144^\\circ$.',
      'Each exterior angle is $360^\\circ \\div 10 = 36^\\circ$.',
      'Make sure the two angles are supplementary: $144^\\circ + 36^\\circ = 180^\\circ$.',
    ]},
    { title: 'Example 3 — Find the number of sides', given: 'Each exterior angle of a regular polygon measures $24^\\circ$. How many sides does it have?', steps: [
      'Use Theorem 4.2. The exterior angles add to $360^\\circ$.',
      'Each exterior angle is $360^\\circ \\div n$, so $n = 360^\\circ \\div 24^\\circ$.',
      '$n = 15$',
    ]},
  ],
  checks: ['c4-2-1', 'c4-2-2', 'c4-2-3'],
},
'4-3': {
  diagram: 'area',
  intro: [
    'A quadrilateral is a polygon with four sides. Its interior angles add to 360°. We sort quadrilaterals by their parallel sides. A trapezoid has exactly one pair of parallel sides. A parallelogram has two pairs of parallel sides.',
    'The parallel sides of a trapezoid are the bases. The other two sides are the legs. The legs are not parallel. A trapezoid has two pairs of base angles, one pair at each base.',
    'A parallelogram has four properties. The opposite sides are congruent. The opposite angles are congruent. Two consecutive angles are supplementary. The diagonals bisect each other. So each diagonal cuts the other into two congruent segments.',
    'Choose the parallelogram in the diagram. Drag the base and slant sliders. Watch the opposite sides stay equal in pairs. Then choose the trapezoid. Change the second base. The two bases stay parallel, but they are not equal.',
  ],
  definitions: [
    { term: 'Quadrilateral', text: 'A polygon with four sides.' },
    { term: 'Trapezoid', text: 'A quadrilateral with exactly one pair of parallel sides.' },
    { term: 'Bases and legs of a trapezoid', text: 'The parallel sides are the bases. The two non-parallel sides are the legs.' },
    { term: 'Parallelogram', text: 'A quadrilateral with two pairs of parallel sides.' },
    { term: 'Consecutive angles', text: 'Two angles of a polygon that share a side.' },
  ],
  formulas: [
    { label: 'Angle sum of a quadrilateral', tex: 'm\\angle A + m\\angle B + m\\angle C + m\\angle D = 360^\\circ' },
    { label: 'Consecutive angles of a parallelogram', tex: 'm\\angle A + m\\angle B = 180^\\circ' },
    { label: 'Diagonals of a parallelogram', tex: 'AE = EC, \\quad BE = ED' },
  ],
  theorems: ['4.3', '4.4', '4.5', '4.6'],
  examples: [
    { title: 'Example 1 — Perimeter of a parallelogram', given: 'In parallelogram $ABCD$, $AB = 12$ and $BC = 7$. Find the perimeter.', steps: [
      'Use Theorem 4.3. Opposite sides are congruent, so $CD = 12$ and $DA = 7$.',
      'Add the four sides: $12 + 7 + 12 + 7$.',
      'The perimeter is $38$.',
    ]},
    { title: 'Example 2 — Angles of a parallelogram', given: 'In parallelogram $ABCD$, $m\\angle A = 65^\\circ$. Find $m\\angle B$ and $m\\angle C$.', steps: [
      'Angles $A$ and $B$ are consecutive. Use Theorem 4.5.',
      '$m\\angle B = 180^\\circ - 65^\\circ = 115^\\circ$',
      'Angles $A$ and $C$ are opposite. Use Theorem 4.4.',
      '$m\\angle C = 65^\\circ$',
    ]},
    { title: 'Example 3 — Diagonals of a parallelogram', given: 'The diagonals of parallelogram $PQRS$ meet at $M$. $PM = 9$ and $QM = 5$. Find $PR$ and $QS$.', steps: [
      'Use Theorem 4.6. The diagonals bisect each other.',
      '$M$ is the midpoint of $\\overline{PR}$, so $PR = 2 \\cdot 9 = 18$.',
      '$M$ is the midpoint of $\\overline{QS}$, so $QS = 2 \\cdot 5 = 10$.',
    ]},
  ],
  checks: ['c4-3-1', 'c4-3-2', 'c4-3-3'],
},
'4-4': {
  intro: [
    'A proof of a parallelogram shows that a quadrilateral is a parallelogram. The definition is one way. Show that both pairs of opposite sides are parallel. The theorems of this lesson give four more ways.',
    'Here are the five ways. (1) Both pairs of opposite sides are parallel. (2) Both pairs of opposite sides are congruent. (3) Both pairs of opposite angles are congruent. (4) The diagonals bisect each other. (5) One pair of opposite sides is both parallel and congruent.',
    'Each way is the converse of a property from lesson 4-3. The property says: a parallelogram has congruent opposite sides. The test says: congruent opposite sides make a parallelogram. You need both pairs. A trapezoid can have one pair of congruent sides and one pair of parallel sides. It is not a parallelogram.',
  ],
  definitions: [
    { term: 'Converse', text: 'The statement you get when you swap the "if" part and the "then" part of a theorem.' },
    { term: 'Parallelogram test', text: 'A fact about a quadrilateral that proves the quadrilateral is a parallelogram.' },
  ],
  formulas: [
    { label: 'One-pair test', tex: '\\overline{AB} \\parallel \\overline{DC},\\ \\overline{AB} \\cong \\overline{DC} \\implies ABCD \\text{ is a parallelogram}' },
    { label: 'Diagonals test', tex: 'AE = EC,\\ BE = ED \\implies ABCD \\text{ is a parallelogram}' },
  ],
  theorems: ['4.7', '4.8', '4.9', '4.10'],
  examples: [
    { title: 'Example 1 — Opposite sides', given: 'In quadrilateral $ABCD$, $AB = 9$, $BC = 6$, $CD = 9$, and $DA = 6$. Is $ABCD$ a parallelogram?', steps: [
      '$AB = CD = 9$. One pair of opposite sides is congruent.',
      '$BC = DA = 6$. The other pair of opposite sides is congruent.',
      'Use Theorem 4.7. $ABCD$ is a parallelogram.',
    ]},
    { title: 'Example 2 — Opposite angles', given: 'The angles of quadrilateral $WXYZ$ measure $70^\\circ$, $110^\\circ$, $70^\\circ$, and $110^\\circ$ in order. Is $WXYZ$ a parallelogram?', steps: [
      '$m\\angle W = m\\angle Y = 70^\\circ$. One pair of opposite angles is congruent.',
      '$m\\angle X = m\\angle Z = 110^\\circ$. The other pair is congruent.',
      'Use Theorem 4.8. $WXYZ$ is a parallelogram.',
    ]},
    { title: 'Example 3 — Diagonals', given: 'The diagonals of $ABCD$ meet at $E$. $AE = 2x + 1$, $EC = 13$, $BE = 7$, and $ED = 7$. Find $x$ so that $ABCD$ is a parallelogram.', steps: [
      'Use Theorem 4.9. The diagonals must bisect each other.',
      '$BE = ED$ already. We need $AE = EC$.',
      '$2x + 1 = 13$, so $2x = 12$.',
      '$x = 6$',
    ]},
  ],
  checks: ['c4-4-1', 'c4-4-2', 'c4-4-3'],
},
'4-5': {
  diagram: 'area',
  intro: [
    'A rectangle is a parallelogram with four right angles. A rhombus is a parallelogram with four congruent sides. A square is a parallelogram with four right angles and four congruent sides. So a square is both a rectangle and a rhombus. All three have every property of a parallelogram.',
    'Each special parallelogram adds a fact about its diagonals. The diagonals of a rectangle are congruent. The diagonals of a rhombus are perpendicular. Each diagonal of a rhombus bisects two angles of the rhombus. The diagonals of a square have all of these properties.',
    'The diagonals of a rhombus cut it into four congruent right triangles. The four angles at the center are right angles. Each diagonal splits a vertex angle into two congruent halves. The diagonals of a rectangle cut it into four isosceles triangles, because the half-diagonals are all congruent.',
    'Choose the parallelogram in the diagram. Drag the slant slider until the sides stand straight up. The figure is now a rectangle. Watch the opposite sides stay congruent. Then make the base equal to the height. The figure is now a square.',
  ],
  definitions: [
    { term: 'Rectangle', text: 'A parallelogram with four right angles.' },
    { term: 'Rhombus', text: 'A parallelogram with four congruent sides.' },
    { term: 'Square', text: 'A parallelogram with four right angles and four congruent sides.' },
  ],
  formulas: [
    { label: 'Diagonals of a rectangle', tex: 'AC = BD' },
    { label: 'Diagonals of a rhombus', tex: '\\overline{AC} \\perp \\overline{BD}' },
    { label: 'Angle bisected by a rhombus diagonal', tex: 'm\\angle DAC = \\tfrac{1}{2}\\, m\\angle DAB' },
  ],
  theorems: ['4.11', '4.12', '4.13'],
  examples: [
    { title: 'Example 1 — Diagonals of a rectangle', given: 'The diagonals of rectangle $ABCD$ meet at $E$. $AC = 15$. Find $BD$ and $BE$.', steps: [
      'Use Theorem 4.11. The diagonals of a rectangle are congruent.',
      '$BD = AC = 15$',
      'A rectangle is a parallelogram, so the diagonals bisect each other.',
      '$BE = \\tfrac{1}{2} \\cdot 15 = 7.5$',
    ]},
    { title: 'Example 2 — Diagonal bisects an angle', given: 'In rhombus $ABCD$, $m\\angle ABC = 110^\\circ$. Find $m\\angle ABD$.', steps: [
      'Use Theorem 4.13. Diagonal $\\overline{BD}$ bisects $\\angle ABC$.',
      '$m\\angle ABD = \\tfrac{1}{2} \\cdot 110^\\circ = 55^\\circ$',
    ]},
    { title: 'Example 3 — Perimeter and center angle', given: 'In rhombus $ABCD$, $AB = 8$. The diagonals meet at $E$. Find the perimeter and $m\\angle AEB$.', steps: [
      'All four sides of a rhombus are congruent.',
      'The perimeter is $4 \\cdot 8 = 32$.',
      'Use Theorem 4.12. The diagonals are perpendicular.',
      '$m\\angle AEB = 90^\\circ$',
    ]},
  ],
  checks: ['c4-5-1', 'c4-5-2', 'c4-5-3'],
},
'4-6': {
  diagram: 'area',
  intro: [
    'An isosceles trapezoid is a trapezoid with congruent legs. Both pairs of base angles are congruent. Its diagonals are congruent. In any trapezoid, the two angles at one leg are supplementary, because the bases are parallel.',
    'The median of a trapezoid joins the midpoints of the two legs. Some books call it the midsegment. The median is parallel to both bases. Its length is half the sum of the bases. In other words, the median is the average of the two bases.',
    'Choose the trapezoid in the diagram. Change the second base and watch the two bases. Add the two bases and divide by 2. That number is the median. Change the slant and watch the legs. When the two legs are congruent, the trapezoid is isosceles.',
  ],
  definitions: [
    { term: 'Isosceles trapezoid', text: 'A trapezoid with congruent legs.' },
    { term: 'Base angles of a trapezoid', text: 'The two angles that share one base.' },
    { term: 'Median of a trapezoid', text: 'The segment that joins the midpoints of the two legs.' },
  ],
  formulas: [
    { label: 'Trapezoid Median Theorem', tex: 'm = \\frac{b_1 + b_2}{2}' },
    { label: 'Angles at one leg', tex: 'm\\angle A + m\\angle D = 180^\\circ' },
    { label: 'Diagonals of an isosceles trapezoid', tex: 'AC = BD' },
  ],
  theorems: ['4.14', '4.15', '4.16'],
  examples: [
    { title: 'Example 1 — Angles of an isosceles trapezoid', given: 'In isosceles trapezoid $ABCD$ with bases $\\overline{AB}$ and $\\overline{DC}$, $m\\angle A = 70^\\circ$. Find the other three angles.', steps: [
      'Use Theorem 4.14. The base angles at $\\overline{AB}$ are congruent, so $m\\angle B = 70^\\circ$.',
      'Angles $A$ and $D$ share leg $\\overline{AD}$. They are supplementary.',
      '$m\\angle D = 180^\\circ - 70^\\circ = 110^\\circ$',
      'The base angles at $\\overline{DC}$ are congruent, so $m\\angle C = 110^\\circ$.',
    ]},
    { title: 'Example 2 — Find the median', given: 'The bases of a trapezoid measure 10 and 16. Find the median.', steps: [
      'Use Theorem 4.16.',
      '$m = \\frac{10 + 16}{2} = \\frac{26}{2}$',
      '$m = 13$',
    ]},
    { title: 'Example 3 — Find a base', given: 'The median of a trapezoid is 14. One base is 9. Find the other base.', steps: [
      'Set $\\frac{9 + b_2}{2} = 14$.',
      'Multiply both sides by 2: $9 + b_2 = 28$.',
      '$b_2 = 28 - 9 = 19$',
    ]},
  ],
  checks: ['c4-6-1', 'c4-6-2', 'c4-6-3'],
},
'4-7': {
  intro: [
    'The midpoint of a segment divides it into two congruent segments. Take any triangle. Mark the midpoints of two sides. The segment that joins them is a midsegment of the triangle.',
    'The Midpoint Theorem gives two facts about a midsegment. It is parallel to the third side. Its length is half the length of the third side. A triangle has three midsegments. They cut the triangle into four congruent triangles.',
    'To use the theorem, first make sure the segment joins two midpoints. Then write the midsegment as half of the third side. Or write the third side as two times the midsegment. The theorem does not work for a segment that joins two other points.',
  ],
  definitions: [
    { term: 'Midpoint', text: 'The point that divides a segment into two congruent segments.' },
    { term: 'Midsegment of a triangle', text: 'A segment that joins the midpoints of two sides of a triangle.' },
  ],
  formulas: [
    { label: 'Midpoint Theorem (length)', tex: 'DE = \\tfrac{1}{2}\\, BC' },
    { label: 'Midpoint Theorem (direction)', tex: '\\overline{DE} \\parallel \\overline{BC}' },
  ],
  theorems: ['4.17'],
  examples: [
    { title: 'Example 1 — Find the midsegment', given: 'In triangle $ABC$, $D$ is the midpoint of $\\overline{AB}$ and $E$ is the midpoint of $\\overline{AC}$. $BC = 18$. Find $DE$.', steps: [
      '$\\overline{DE}$ joins two midpoints. Use Theorem 4.17.',
      '$DE = \\tfrac{1}{2} \\cdot 18 = 9$',
    ]},
    { title: 'Example 2 — Find the third side', given: 'In triangle $PQR$, $\\overline{MN}$ joins the midpoints of $\\overline{PQ}$ and $\\overline{PR}$. $MN = 7$. Find $QR$.', steps: [
      'The third side is two times the midsegment.',
      '$QR = 2 \\cdot 7 = 14$',
    ]},
    { title: 'Example 3 — The midsegment triangle', given: 'A triangle has sides 10, 12, and 16. Find the perimeter of the triangle formed by its three midsegments.', steps: [
      'Each midsegment is half of one side.',
      'The midsegments measure $5$, $6$, and $8$.',
      'The perimeter is $5 + 6 + 8 = 19$.',
    ]},
  ],
  checks: ['c4-7-1', 'c4-7-2', 'c4-7-3'],
},
},

questions: [
  // ---- 4-1 checks
  { id: 'c4-1-1', chapter: 'ch4', section: '4-1', set: 'check', type: 'mc', prompt: 'A polygon has 7 sides. What is its name?', choices: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'], answer: 1,
    solution: ['A hexagon has 6 sides, an octagon has 8, and a nonagon has 9.', 'A polygon with 7 sides is a heptagon.'] },
  { id: 'c4-1-2', chapter: 'ch4', section: '4-1', set: 'check', type: 'diagram', figure: { kind: 'polygon', n: 8 }, prompt: 'Find the number of diagonals of this regular octagon.', answer: 20, tolerance: 0.5,
    solution: ['Use $d = \\frac{n(n-3)}{2}$ with $n = 8$.', '$d = \\frac{8 \\cdot 5}{2} = 20$'] },
  { id: 'c4-1-3', chapter: 'ch4', section: '4-1', set: 'check', type: 'mc', prompt: 'Which statement describes a regular polygon?', choices: ['All sides are congruent.', 'All angles are congruent.', 'All sides and all angles are congruent.', 'All diagonals stay inside the figure.'], answer: 2,
    solution: ['A regular polygon is both equilateral and equiangular.', 'Congruent sides alone make an equilateral polygon. Congruent angles alone make an equiangular polygon.', 'Diagonals inside the figure make a convex polygon.'] },
  // ---- 4-2 checks
  { id: 'c4-2-1', chapter: 'ch4', section: '4-2', set: 'check', type: 'diagram', figure: { kind: 'polygon', n: 6 }, prompt: 'Find the sum of the interior angles of this hexagon.', answer: 720, tolerance: 0.5, unit: '°',
    solution: ['Use Theorem 4.1 with $n = 6$.', '$S = (6 - 2) \\cdot 180^\\circ = 4 \\cdot 180^\\circ = 720^\\circ$'] },
  { id: 'c4-2-2', chapter: 'ch4', section: '4-2', set: 'check', type: 'numeric', prompt: 'Find the measure of each interior angle of a regular octagon.', answer: 135, tolerance: 0.5, unit: '°',
    solution: ['The interior angle sum is $(8 - 2) \\cdot 180^\\circ = 1080^\\circ$.', 'Divide by 8: $1080^\\circ \\div 8 = 135^\\circ$.'] },
  { id: 'c4-2-3', chapter: 'ch4', section: '4-2', set: 'check', type: 'mc', prompt: 'Each exterior angle of a regular polygon measures $40^\\circ$. How many sides does the polygon have?', choices: ['8', '9', '10', '12'], answer: 1,
    solution: ['The exterior angles add to $360^\\circ$ (Theorem 4.2).', '$n = 360^\\circ \\div 40^\\circ = 9$'] },
  // ---- 4-3 checks
  { id: 'c4-3-1', chapter: 'ch4', section: '4-3', set: 'check', type: 'mc', prompt: 'A quadrilateral has exactly one pair of parallel sides. What is it?', choices: ['A parallelogram', 'A trapezoid', 'A rectangle', 'A rhombus'], answer: 1,
    solution: ['A trapezoid has exactly one pair of parallel sides.', 'A parallelogram, a rectangle, and a rhombus each have two pairs.'] },
  { id: 'c4-3-2', chapter: 'ch4', section: '4-3', set: 'check', type: 'numeric', prompt: 'One angle of a parallelogram measures $48^\\circ$. Find the measure of a consecutive angle.', answer: 132, tolerance: 0.5, unit: '°',
    solution: ['Consecutive angles of a parallelogram are supplementary (Theorem 4.5).', '$180^\\circ - 48^\\circ = 132^\\circ$'] },
  { id: 'c4-3-3', chapter: 'ch4', section: '4-3', set: 'check', type: 'numeric', prompt: 'The diagonals of parallelogram $ABCD$ meet at $E$. $AC = 22$. Find $AE$.', answer: 11, tolerance: 0.5,
    solution: ['The diagonals bisect each other (Theorem 4.6). $E$ is the midpoint of $\\overline{AC}$.', '$AE = \\tfrac{1}{2} \\cdot 22 = 11$'] },
  // ---- 4-4 checks
  { id: 'c4-4-1', chapter: 'ch4', section: '4-4', set: 'check', type: 'mc', prompt: 'Which fact alone proves that a quadrilateral is a parallelogram?', choices: ['One pair of opposite sides is congruent.', 'One pair of opposite sides is parallel.', 'The diagonals bisect each other.', 'The diagonals are congruent.'], answer: 2,
    solution: ['Theorem 4.9: if the diagonals bisect each other, the quadrilateral is a parallelogram.', 'One congruent pair or one parallel pair is not enough. A trapezoid can have either.', 'Congruent diagonals alone do not prove a parallelogram. An isosceles trapezoid has congruent diagonals.'] },
  { id: 'c4-4-2', chapter: 'ch4', section: '4-4', set: 'check', type: 'numeric', prompt: 'In quadrilateral $ABCD$, $\\overline{AB} \\parallel \\overline{DC}$, $AB = 3x - 2$, and $DC = 10$. Find $x$ so that $ABCD$ is a parallelogram by the one-pair test.', answer: 4, tolerance: 0.01,
    solution: ['Theorem 4.10 needs one pair of opposite sides both parallel and congruent.', 'Set $AB = DC$: $3x - 2 = 10$.', '$3x = 12$, so $x = 4$.'] },
  { id: 'c4-4-3', chapter: 'ch4', section: '4-4', set: 'check', type: 'mc', prompt: 'The angles of a quadrilateral measure $95^\\circ$, $85^\\circ$, $95^\\circ$, and $85^\\circ$ in order. Which test proves it is a parallelogram?', choices: ['Both pairs of opposite sides are congruent.', 'Both pairs of opposite angles are congruent.', 'The diagonals bisect each other.', 'No test applies. It is not a parallelogram.'], answer: 1,
    solution: ['The first and third angles are opposite and both measure $95^\\circ$.', 'The second and fourth angles are opposite and both measure $85^\\circ$.', 'Use Theorem 4.8. Both pairs of opposite angles are congruent.'] },
  // ---- 4-5 checks
  { id: 'c4-5-1', chapter: 'ch4', section: '4-5', set: 'check', type: 'diagram', figure: { kind: 'rect', w: 12, h: 5 }, prompt: 'The diagonals of this rectangle $ABCD$ meet at $E$. $AC = 13$. Find $BD$.', answer: 13, tolerance: 0.5,
    solution: ['The diagonals of a rectangle are congruent (Theorem 4.11).', '$BD = AC = 13$'] },
  { id: 'c4-5-2', chapter: 'ch4', section: '4-5', set: 'check', type: 'mc', prompt: 'Which parallelogram always has perpendicular diagonals?', choices: ['A rectangle', 'A rhombus', 'Every parallelogram', 'A trapezoid'], answer: 1,
    solution: ['Theorem 4.12: the diagonals of a rhombus are perpendicular.', 'The diagonals of a rectangle are congruent, but not always perpendicular.', 'A trapezoid is not a parallelogram.'] },
  { id: 'c4-5-3', chapter: 'ch4', section: '4-5', set: 'check', type: 'numeric', prompt: 'In rhombus $ABCD$, $m\\angle DAB = 70^\\circ$. Diagonal $\\overline{AC}$ is drawn. Find $m\\angle DAC$.', answer: 35, tolerance: 0.5, unit: '°',
    solution: ['Each diagonal of a rhombus bisects two angles (Theorem 4.13).', '$m\\angle DAC = \\tfrac{1}{2} \\cdot 70^\\circ = 35^\\circ$'] },
  // ---- 4-6 checks
  { id: 'c4-6-1', chapter: 'ch4', section: '4-6', set: 'check', type: 'numeric', prompt: 'The bases of a trapezoid measure 8 and 14. Find the length of the median.', answer: 11, tolerance: 0.05,
    solution: ['Use Theorem 4.16: $m = \\frac{b_1 + b_2}{2}$.', '$m = \\frac{8 + 14}{2} = 11$'] },
  { id: 'c4-6-2', chapter: 'ch4', section: '4-6', set: 'check', type: 'numeric', prompt: 'One base angle of an isosceles trapezoid measures $64^\\circ$. Find the measure of an angle at the other base.', answer: 116, tolerance: 0.5, unit: '°',
    solution: ['The two angles at one leg are supplementary, because the bases are parallel.', '$180^\\circ - 64^\\circ = 116^\\circ$'] },
  { id: 'c4-6-3', chapter: 'ch4', section: '4-6', set: 'check', type: 'mc', prompt: 'The median of a trapezoid is 20. One base is 12. Find the other base.', choices: ['8', '16', '28', '32'], answer: 2,
    solution: ['Set $\\frac{12 + b_2}{2} = 20$.', '$12 + b_2 = 40$, so $b_2 = 28$.'] },
  // ---- 4-7 checks
  { id: 'c4-7-1', chapter: 'ch4', section: '4-7', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 10, b: 8, c: 6 }, prompt: 'In this triangle, $D$ is the midpoint of $\\overline{AB}$ and $E$ is the midpoint of $\\overline{AC}$. $BC = 10$. Find $DE$.', answer: 5, tolerance: 0.05,
    solution: ['$\\overline{DE}$ joins two midpoints. Use the Midpoint Theorem (4.17).', '$DE = \\tfrac{1}{2} \\cdot 10 = 5$'] },
  { id: 'c4-7-2', chapter: 'ch4', section: '4-7', set: 'check', type: 'numeric', prompt: 'A midsegment of a triangle measures 4.5. Find the length of the side parallel to it.', answer: 9, tolerance: 0.05,
    solution: ['The third side is two times the midsegment.', '$2 \\cdot 4.5 = 9$'] },
  { id: 'c4-7-3', chapter: 'ch4', section: '4-7', set: 'check', type: 'mc', prompt: 'A segment joins the midpoints of two sides of a triangle. Which statement is true?', choices: ['It is perpendicular to the third side.', 'It is parallel to the third side and half as long.', 'It is congruent to the third side.', 'It bisects the third side.'], answer: 1,
    solution: ['This is the Midpoint Theorem (4.17).', 'The midsegment is parallel to the third side and half as long.'] },

  // ---- Chapter 4 problems (full solutions)
  { id: 'p4-1', chapter: 'ch4', section: '4-1', set: 'chapter', type: 'diagram', figure: { kind: 'polygon', n: 10 }, prompt: 'Find the number of diagonals of this regular decagon.', answer: 35, tolerance: 0.5,
    solution: ['A decagon has $n = 10$ sides.', 'Use $d = \\frac{n(n-3)}{2}$.', '$d = \\frac{10 \\cdot 7}{2} = 35$'] },
  { id: 'p4-2', chapter: 'ch4', section: '4-2', set: 'chapter', type: 'diagram', figure: { kind: 'polygon', n: 12 }, prompt: 'This regular polygon has 12 sides. Find the measure of each interior angle.', answer: 150, tolerance: 0.5, unit: '°',
    solution: ['Use Theorem 4.1. The interior angle sum is $(12 - 2) \\cdot 180^\\circ = 1800^\\circ$.', 'All 12 angles are congruent. Divide by 12.', '$1800^\\circ \\div 12 = 150^\\circ$'] },
  { id: 'p4-3', chapter: 'ch4', section: '4-3', set: 'chapter', type: 'mc', prompt: 'In parallelogram $ABCD$, $m\\angle A = 4x$ and $m\\angle B = x + 30$. Find $x$.', choices: ['10', '30', '36', '45'], answer: 1,
    solution: ['Angles $A$ and $B$ share side $\\overline{AB}$. They are consecutive angles.', 'Consecutive angles of a parallelogram are supplementary (Theorem 4.5).', '$4x + (x + 30) = 180$, so $5x = 150$.', '$x = 30$'] },
  { id: 'p4-4', chapter: 'ch4', section: '4-4', set: 'chapter', type: 'mc', prompt: 'The diagonals of quadrilateral $ABCD$ meet at $E$. $AE = 6$, $EC = 6$, $BE = 4$, and $ED = 5$. Is $ABCD$ a parallelogram?', choices: ['Yes. The diagonals bisect each other.', 'Yes. One diagonal is bisected.', 'No. The diagonals do not bisect each other.', 'No. The diagonals are not congruent.'], answer: 2,
    solution: ['Theorem 4.9 needs both diagonals to bisect each other.', '$AE = EC = 6$, so $\\overline{AC}$ is bisected.', '$BE = 4$ and $ED = 5$, so $\\overline{BD}$ is not bisected.', 'The test fails. $ABCD$ is not a parallelogram.'] },
  { id: 'p4-5', chapter: 'ch4', section: '4-5', set: 'chapter', type: 'numeric', prompt: 'The diagonals of rectangle $ABCD$ meet at $E$. $AE = 3x - 1$ and $BE = x + 7$. Find $AC$.', answer: 22, tolerance: 0.5,
    solution: ['The diagonals of a rectangle are congruent and bisect each other. So $AE = BE$.', '$3x - 1 = x + 7$, so $2x = 8$ and $x = 4$.', '$AE = 3 \\cdot 4 - 1 = 11$', '$AC = 2 \\cdot AE = 22$'] },
  { id: 'p4-6', chapter: 'ch4', section: '4-6', set: 'chapter', type: 'numeric', prompt: 'The bases of a trapezoid measure $2x$ and $3x + 4$. The median measures 17. Find the longer base.', answer: 22, tolerance: 0.5,
    solution: ['Use Theorem 4.16: $\\frac{2x + (3x + 4)}{2} = 17$.', '$5x + 4 = 34$, so $5x = 30$ and $x = 6$.', 'The bases are $2 \\cdot 6 = 12$ and $3 \\cdot 6 + 4 = 22$.', 'The longer base is $22$.'] },

  // ---- Chapter 4 supplemental (answers only)
  { id: 's4-1', chapter: 'ch4', section: '4-1', set: 'supplemental', type: 'numeric', prompt: 'Find the number of diagonals of a nonagon.', answer: 27, tolerance: 0.5 },
  { id: 's4-2', chapter: 'ch4', section: '4-2', set: 'supplemental', type: 'numeric', prompt: 'The interior angles of a polygon add to $1440^\\circ$. How many sides does the polygon have?', answer: 10, tolerance: 0.5 },
  { id: 's4-3', chapter: 'ch4', section: '4-3', set: 'supplemental', type: 'numeric', prompt: 'A parallelogram has a perimeter of 50. One side measures 14. Find the length of a consecutive side.', answer: 11, tolerance: 0.05 },
  { id: 's4-4', chapter: 'ch4', section: '4-5', set: 'supplemental', type: 'numeric', prompt: 'A rhombus has a perimeter of 52. Find the length of one side.', answer: 13, tolerance: 0.05 },
  { id: 's4-5', chapter: 'ch4', section: '4-6', set: 'supplemental', type: 'mc', prompt: 'One base angle of an isosceles trapezoid measures $75^\\circ$. Find the measure of an angle at the other base.', choices: ['$75^\\circ$', '$90^\\circ$', '$105^\\circ$', '$150^\\circ$'], answer: 2 },
  { id: 's4-6', chapter: 'ch4', section: '4-7', set: 'supplemental', type: 'numeric', prompt: 'A triangle has sides 8, 11, and 13. Find the perimeter of the triangle formed by its three midsegments.', answer: 16, tolerance: 0.05 },

  // ---- Chapter 4 exam bank
  { id: 'b4-1', chapter: 'ch4', section: '4-2', set: 'bank', type: 'diagram', figure: { kind: 'polygon', n: 6 }, prompt: 'Find the measure of each exterior angle of this regular hexagon.', answer: 60, tolerance: 0.5, unit: '°',
    solution: ['The exterior angles of a convex polygon add to $360^\\circ$ (Theorem 4.2).', 'A regular hexagon has 6 congruent exterior angles.', '$360^\\circ \\div 6 = 60^\\circ$'] },
  { id: 'b4-2', chapter: 'ch4', section: '4-3', set: 'bank', type: 'mc', prompt: 'In parallelogram $ABCD$, $m\\angle A = 112^\\circ$. Find $m\\angle C$.', choices: ['$68^\\circ$', '$112^\\circ$', '$136^\\circ$', '$248^\\circ$'], answer: 1,
    solution: ['Angles $A$ and $C$ are opposite angles.', 'Opposite angles of a parallelogram are congruent (Theorem 4.4).', '$m\\angle C = 112^\\circ$'] },
  { id: 'b4-3', chapter: 'ch4', section: '4-7', set: 'bank', type: 'numeric', prompt: 'In triangle $ABC$, $D$ and $E$ are the midpoints of $\\overline{AB}$ and $\\overline{AC}$. $DE = 6.5$. Find $BC$.', answer: 13, tolerance: 0.05,
    solution: ['Use the Midpoint Theorem (4.17). $DE = \\tfrac{1}{2} BC$.', '$BC = 2 \\cdot 6.5 = 13$'] },
],

theorems: [
  { id: '4.1', chapter: 'ch4', kind: 'Theorem', name: 'Polygon Interior Angle Sum Theorem', statement: 'The interior angles of a convex polygon with $n$ sides add to $(n - 2) \\cdot 180^\\circ$.', section: '4-2' },
  { id: '4.2', chapter: 'ch4', kind: 'Theorem', name: 'Polygon Exterior Angle Sum Theorem', statement: 'The exterior angles of a convex polygon, one at each vertex, add to $360^\\circ$.', section: '4-2' },
  { id: '4.3', chapter: 'ch4', kind: 'Theorem', name: 'Opposite Sides of a Parallelogram', statement: 'The opposite sides of a parallelogram are congruent.', section: '4-3' },
  { id: '4.4', chapter: 'ch4', kind: 'Theorem', name: 'Opposite Angles of a Parallelogram', statement: 'The opposite angles of a parallelogram are congruent.', section: '4-3' },
  { id: '4.5', chapter: 'ch4', kind: 'Theorem', name: 'Consecutive Angles of a Parallelogram', statement: 'Two consecutive angles of a parallelogram are supplementary.', section: '4-3' },
  { id: '4.6', chapter: 'ch4', kind: 'Theorem', name: 'Diagonals of a Parallelogram', statement: 'The diagonals of a parallelogram bisect each other.', section: '4-3' },
  { id: '4.7', chapter: 'ch4', kind: 'Theorem', name: 'Opposite Sides Test', statement: 'If both pairs of opposite sides of a quadrilateral are congruent, then the quadrilateral is a parallelogram.', section: '4-4' },
  { id: '4.8', chapter: 'ch4', kind: 'Theorem', name: 'Opposite Angles Test', statement: 'If both pairs of opposite angles of a quadrilateral are congruent, then the quadrilateral is a parallelogram.', section: '4-4' },
  { id: '4.9', chapter: 'ch4', kind: 'Theorem', name: 'Diagonals Test', statement: 'If the diagonals of a quadrilateral bisect each other, then the quadrilateral is a parallelogram.', section: '4-4' },
  { id: '4.10', chapter: 'ch4', kind: 'Theorem', name: 'One-Pair Test', statement: 'If one pair of opposite sides of a quadrilateral is both parallel and congruent, then the quadrilateral is a parallelogram.', section: '4-4' },
  { id: '4.11', chapter: 'ch4', kind: 'Theorem', name: 'Diagonals of a Rectangle', statement: 'The diagonals of a rectangle are congruent.', section: '4-5' },
  { id: '4.12', chapter: 'ch4', kind: 'Theorem', name: 'Diagonals of a Rhombus', statement: 'The diagonals of a rhombus are perpendicular.', section: '4-5' },
  { id: '4.13', chapter: 'ch4', kind: 'Theorem', name: 'Rhombus Diagonals Bisect Angles', statement: 'Each diagonal of a rhombus bisects the two angles of the rhombus at its endpoints.', section: '4-5' },
  { id: '4.14', chapter: 'ch4', kind: 'Theorem', name: 'Isosceles Trapezoid Base Angles', statement: 'Each pair of base angles of an isosceles trapezoid is congruent.', section: '4-6' },
  { id: '4.15', chapter: 'ch4', kind: 'Theorem', name: 'Isosceles Trapezoid Diagonals', statement: 'The diagonals of an isosceles trapezoid are congruent.', section: '4-6' },
  { id: '4.16', chapter: 'ch4', kind: 'Theorem', name: 'Trapezoid Median Theorem', statement: 'The median of a trapezoid is parallel to the bases, and its length is half the sum of the bases.', section: '4-6' },
  { id: '4.17', chapter: 'ch4', kind: 'Theorem', name: 'Midpoint Theorem', statement: 'The segment that joins the midpoints of two sides of a triangle is parallel to the third side and half as long.', section: '4-7' },
],

glossary: [
  { term: 'Polygon', def: 'A closed plane figure made of three or more segments that meet only at their endpoints.', section: '4-1' },
  { term: 'Diagonal', def: 'A segment that joins two vertices of a polygon that are not next to each other.', section: '4-1' },
  { term: 'Regular polygon', def: 'A polygon with all sides congruent and all angles congruent.', section: '4-1' },
  { term: 'Quadrilateral', def: 'A polygon with four sides.', section: '4-3' },
  { term: 'Trapezoid', def: 'A quadrilateral with exactly one pair of parallel sides.', section: '4-3' },
  { term: 'Parallelogram', def: 'A quadrilateral with two pairs of parallel sides.', section: '4-3' },
  { term: 'Rectangle', def: 'A parallelogram with four right angles.', section: '4-5' },
  { term: 'Rhombus', def: 'A parallelogram with four congruent sides.', section: '4-5' },
  { term: 'Square', def: 'A parallelogram with four right angles and four congruent sides.', section: '4-5' },
  { term: 'Isosceles trapezoid', def: 'A trapezoid with congruent legs.', section: '4-6' },
  { term: 'Median of a trapezoid', def: 'The segment that joins the midpoints of the legs of a trapezoid.', section: '4-6' },
  { term: 'Midsegment of a triangle', def: 'A segment that joins the midpoints of two sides of a triangle.', section: '4-7' },
],
};
