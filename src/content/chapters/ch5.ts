// Chapter 5: Perimeter and Area. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch5: ChapterContent = {
chapter: { id: 'ch5', number: 5, title: 'Perimeter and Area', sections: [
  { id: '5-1', title: 'Squares and Rectangles', kind: 'lesson', built: true, parts: ['Finding the Perimeter', 'Finding the Area'], summary: 'The perimeter of a rectangle is twice the length plus twice the width. The area is length times width. A square is a rectangle with four equal sides.', formula: 'P = 2l + 2w, \\quad A = lw' },
  { id: '5-2', title: 'Triangles', kind: 'lesson', built: true, parts: ['Finding the Perimeter', 'Finding the Area'], summary: 'The perimeter of a triangle is the sum of its three sides. The area is half the base times the height. The height is perpendicular to the base.', formula: 'A = \\tfrac{1}{2}bh' },
  { id: '5-3', title: 'Parallelograms', kind: 'lesson', built: true, parts: ['Finding the Perimeter', 'Finding the Area'], summary: 'The perimeter of a parallelogram is twice one side plus twice the other. The area is base times height. The height is not the slant side.', formula: 'A = bh' },
  { id: '5-4', title: 'Trapezoids', kind: 'lesson', built: true, parts: ['Finding the Perimeter', 'Finding the Area'], summary: 'The perimeter of a trapezoid is the sum of its four sides. The area is half the height times the sum of the two bases. This equals the median times the height.', formula: 'A = \\tfrac{1}{2}h(b_1 + b_2)' },
  { id: '5-5', title: 'Regular Polygons', kind: 'lesson', built: true, parts: ['Special Parts of Regular Polygons', 'Finding the Perimeter', 'Finding the Area'], summary: 'A regular polygon has a center, a radius, and an apothem. Its perimeter is the number of sides times one side. Its area is half the apothem times the perimeter.', formula: 'A = \\tfrac{1}{2}aP' },
  { id: '5-6', title: 'Circles', kind: 'lesson', built: true, parts: ['Finding Circumference', 'Finding the Area'], summary: 'The circumference of a circle is $2\\pi r$. The area is $\\pi r^2$. Use $\\pi \\approx 3.14$ for numeric answers.', formula: 'C = 2\\pi r, \\quad A = \\pi r^2' },
  { id: '5-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '5-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'5-1': {
  diagram: 'area',
  intro: [
    'The perimeter of a figure is the distance around it. The area of a figure is the number of square units inside it. A square unit is a square with sides of length 1.',
    'A rectangle has a length $l$ and a width $w$. Its perimeter is $P = 2l + 2w$. Its area is $A = lw$. A square is a rectangle with four equal sides $s$. Its perimeter is $P = 4s$. Its area is $A = s^2$.',
    'Choose the rectangle in the diagram. Drag the base slider and the height slider. Watch the side lengths, the perimeter, and the area. The area readout shows the formula with the numbers filled in.',
    'Make the base and the height equal. The rectangle is now a square. Watch the area become the side squared.',
  ],
  definitions: [
    { term: 'Perimeter', text: 'The distance around a closed figure. Add the lengths of all the sides.' },
    { term: 'Area', text: 'The number of square units that cover the inside of a figure.' },
    { term: 'Square unit', text: 'A square with sides of length 1. Area is measured in square units, such as $\\text{cm}^2$.' },
    { term: 'Square', text: 'A rectangle with four congruent sides.' },
  ],
  formulas: [
    { label: 'Perimeter of a rectangle', tex: 'P = 2l + 2w' },
    { label: 'Area of a rectangle', tex: 'A = lw' },
    { label: 'Perimeter of a square', tex: 'P = 4s' },
    { label: 'Area of a square', tex: 'A = s^2' },
  ],
  theorems: ['5.1', '5.2', '5.3', '5.4'],
  examples: [
    { title: 'Example 1 — Rectangle', given: 'A rectangle has length 8 and width 5. Find the perimeter and the area.', steps: [
      'Use $P = 2l + 2w$.',
      '$P = 2(8) + 2(5) = 16 + 10 = 26$',
      'Use $A = lw$.',
      '$A = 8 \\cdot 5 = 40$ square units',
    ]},
    { title: 'Example 2 — Square', given: 'A square has side 7 cm. Find the perimeter and the area.', steps: [
      '$P = 4s = 4(7) = 28$ cm',
      '$A = s^2 = 7^2 = 49$ $\\text{cm}^2$',
    ]},
    { title: 'Example 3 — Work backward', given: 'A rectangle has area 54 and width 6. Find the length and the perimeter.', steps: [
      'Use $A = lw$ and solve for $l$.',
      '$54 = l \\cdot 6$, so $l = 9$',
      '$P = 2(9) + 2(6) = 18 + 12 = 30$',
    ]},
  ],
  checks: ['c5-1-1', 'c5-1-2', 'c5-1-3'],
},

'5-2': {
  diagram: 'area',
  intro: [
    'The perimeter of a triangle is the sum of its three sides. The area of a triangle is half the base times the height. Any side can be the base. The height is the perpendicular distance from the base to the opposite vertex.',
    'A triangle is half of a rectangle with the same base and height. That is why the formula has the factor $\\tfrac{1}{2}$. In a right triangle, the two legs are a base and a height.',
    'An equilateral triangle has three equal sides $s$. Its height is $\\frac{s\\sqrt{3}}{2}$. So its area is $A = \\frac{s^2\\sqrt{3}}{4}$.',
    'Choose the triangle in the diagram. Drag the base slider and the height slider. Watch the area readout. The area is always half the base times the height.',
  ],
  definitions: [
    { term: 'Base of a triangle', text: 'Any one side of the triangle that you choose for the area formula.' },
    { term: 'Height of a triangle', text: 'The perpendicular distance from the base to the opposite vertex. It is also called the altitude.' },
    { term: 'Equilateral triangle', text: 'A triangle with three congruent sides.' },
  ],
  formulas: [
    { label: 'Perimeter of a triangle', tex: 'P = a + b + c' },
    { label: 'Area of a triangle', tex: 'A = \\tfrac{1}{2}bh' },
    { label: 'Area of an equilateral triangle', tex: 'A = \\frac{s^2\\sqrt{3}}{4}' },
  ],
  theorems: ['5.5'],
  examples: [
    { title: 'Example 1 — Perimeter', given: 'A triangle has sides 7, 8, and 11. Find the perimeter.', steps: [
      'Add the three sides.',
      '$P = 7 + 8 + 11 = 26$',
    ]},
    { title: 'Example 2 — Area', given: 'A triangle has base 10 and height 6. Find the area.', steps: [
      'Use $A = \\tfrac{1}{2}bh$.',
      '$A = \\tfrac{1}{2}(10)(6) = 30$ square units',
    ]},
    { title: 'Example 3 — Equilateral triangle', given: 'An equilateral triangle has side 6. Find the area.', steps: [
      'Use $A = \\frac{s^2\\sqrt{3}}{4}$.',
      '$A = \\frac{6^2\\sqrt{3}}{4} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3}$',
      '$9\\sqrt{3} \\approx 15.59$ square units',
    ]},
  ],
  checks: ['c5-2-1', 'c5-2-2', 'c5-2-3'],
},

'5-3': {
  diagram: 'area',
  intro: [
    'A parallelogram has two pairs of parallel sides. Opposite sides are congruent. If the sides are $a$ and $b$, the perimeter is $P = 2a + 2b$.',
    'The area of a parallelogram is base times height, $A = bh$. The height is the perpendicular distance between the base and the opposite side. The height is not the slant side. Cut a right triangle off one end and move it to the other end. You get a rectangle with the same base and height.',
    'Choose the parallelogram in the diagram. Drag the slant slider. Watch the side lengths and the perimeter change. Watch the area stay the same. Only the base and the height change the area.',
  ],
  definitions: [
    { term: 'Parallelogram', text: 'A quadrilateral with two pairs of parallel sides.' },
    { term: 'Base of a parallelogram', text: 'Any one side of the parallelogram that you choose for the area formula.' },
    { term: 'Height of a parallelogram', text: 'The perpendicular distance from the base to the opposite side.' },
    { term: 'Slant side', text: 'A side of the parallelogram that is not the base. Its length is not the height.' },
  ],
  formulas: [
    { label: 'Perimeter of a parallelogram', tex: 'P = 2a + 2b' },
    { label: 'Area of a parallelogram', tex: 'A = bh' },
  ],
  theorems: ['5.6'],
  examples: [
    { title: 'Example 1 — Perimeter', given: 'A parallelogram has sides 9 and 6. Find the perimeter.', steps: [
      'Use $P = 2a + 2b$.',
      '$P = 2(9) + 2(6) = 18 + 12 = 30$',
    ]},
    { title: 'Example 2 — Area', given: 'A parallelogram has base 12, slant side 7, and height 5. Find the area.', steps: [
      'Use the height, not the slant side.',
      '$A = bh = 12 \\cdot 5 = 60$ square units',
    ]},
    { title: 'Example 3 — Find the height', given: 'A parallelogram has area 96 and base 12. Find the height.', steps: [
      'Use $A = bh$ and solve for $h$.',
      '$96 = 12h$, so $h = 8$',
    ]},
  ],
  checks: ['c5-3-1', 'c5-3-2', 'c5-3-3'],
},

'5-4': {
  diagram: 'area',
  intro: [
    'A trapezoid has exactly one pair of parallel sides. The parallel sides are the bases $b_1$ and $b_2$. The other two sides are the legs. The perimeter is the sum of the four sides.',
    'The area of a trapezoid is $A = \\tfrac{1}{2}h(b_1 + b_2)$. The height $h$ is the perpendicular distance between the bases. Two copies of the trapezoid make a parallelogram with base $b_1 + b_2$ and height $h$. The trapezoid is half of that parallelogram.',
    'The median of a trapezoid joins the midpoints of the legs. Its length is the average of the bases, $\\tfrac{1}{2}(b_1 + b_2)$. So the area is also the median times the height.',
    'Choose the trapezoid in the diagram. Drag the base slider, the second base slider, and the height slider. Watch the area readout. Drag the slant slider and watch the perimeter change while the area stays the same.',
  ],
  definitions: [
    { term: 'Trapezoid', text: 'A quadrilateral with exactly one pair of parallel sides.' },
    { term: 'Bases of a trapezoid', text: 'The two parallel sides.' },
    { term: 'Legs of a trapezoid', text: 'The two sides that are not parallel.' },
    { term: 'Height of a trapezoid', text: 'The perpendicular distance between the bases.' },
    { term: 'Median of a trapezoid', text: 'The segment that joins the midpoints of the legs. Its length is the average of the bases.' },
  ],
  formulas: [
    { label: 'Area of a trapezoid', tex: 'A = \\tfrac{1}{2}h(b_1 + b_2)' },
    { label: 'Median of a trapezoid', tex: 'm = \\tfrac{1}{2}(b_1 + b_2)' },
    { label: 'Area with the median', tex: 'A = mh' },
  ],
  theorems: ['5.7'],
  examples: [
    { title: 'Example 1 — Perimeter', given: 'A trapezoid has bases 10 and 16 and legs 5 and 5. Find the perimeter.', steps: [
      'Add the four sides.',
      '$P = 10 + 16 + 5 + 5 = 36$',
    ]},
    { title: 'Example 2 — Area', given: 'A trapezoid has bases 8 and 14 and height 6. Find the area.', steps: [
      'Use $A = \\tfrac{1}{2}h(b_1 + b_2)$.',
      '$A = \\tfrac{1}{2}(6)(8 + 14)$',
      '$A = 3 \\cdot 22 = 66$ square units',
    ]},
    { title: 'Example 3 — Use the median', given: 'A trapezoid has median 9 and height 4. Find the area.', steps: [
      'The area is the median times the height.',
      '$A = mh = 9 \\cdot 4 = 36$ square units',
    ]},
  ],
  checks: ['c5-4-1', 'c5-4-2', 'c5-4-3'],
},

'5-5': {
  diagram: 'polygon',
  intro: [
    'A regular polygon has all sides congruent and all angles congruent. It has a center. The center is the same distance from every vertex. A radius goes from the center to a vertex. The apothem goes from the center to the midpoint of a side. The apothem is perpendicular to the side.',
    'A central angle has its vertex at the center. Its sides are two radii to adjacent vertices. A regular polygon with $n$ sides has $n$ equal central angles. Each one measures $\\frac{360^\\circ}{n}$.',
    'The perimeter of a regular polygon with $n$ sides of length $s$ is $P = ns$. The radii cut the polygon into $n$ congruent triangles. Each triangle has base $s$ and height $a$. So the area is $A = \\tfrac{1}{2}aP$.',
    'Drag the slider for $n$ from 3 to 12. Watch the name, the central angle, and the apothem change. Drag the side length slider. Watch the perimeter and the area. The area readout shows $\\tfrac{1}{2}aP$ with the numbers filled in.',
  ],
  definitions: [
    { term: 'Regular polygon', text: 'A polygon with all sides congruent and all angles congruent.' },
    { term: 'Center of a regular polygon', text: 'The point that is the same distance from every vertex.' },
    { term: 'Radius of a regular polygon', text: 'A segment from the center to a vertex.' },
    { term: 'Apothem', text: 'The perpendicular segment from the center to a side. It meets the side at its midpoint.' },
    { term: 'Central angle of a regular polygon', text: 'An angle at the center with sides that are radii to two adjacent vertices.' },
  ],
  formulas: [
    { label: 'Central angle', tex: '\\frac{360^\\circ}{n}' },
    { label: 'Perimeter of a regular polygon', tex: 'P = ns' },
    { label: 'Area of a regular polygon', tex: 'A = \\tfrac{1}{2}aP' },
  ],
  theorems: ['5.8'],
  examples: [
    { title: 'Example 1 — Central angle', given: 'Find the central angle of a regular octagon.', steps: [
      'An octagon has $n = 8$ sides.',
      'Central angle $= \\frac{360^\\circ}{8} = 45^\\circ$',
    ]},
    { title: 'Example 2 — Hexagon', given: 'A regular hexagon has side 8 and apothem $4\\sqrt{3}$. Find the perimeter and the area.', steps: [
      '$P = ns = 6 \\cdot 8 = 48$',
      'Use $A = \\tfrac{1}{2}aP$.',
      '$A = \\tfrac{1}{2}(4\\sqrt{3})(48) = 96\\sqrt{3}$',
      '$96\\sqrt{3} \\approx 166.3$ square units',
    ]},
    { title: 'Example 3 — Square as a regular polygon', given: 'A square has side 10. Use the regular polygon formula to find the area.', steps: [
      'The apothem is half the side, so $a = 5$.',
      '$P = 4 \\cdot 10 = 40$',
      '$A = \\tfrac{1}{2}(5)(40) = 100$',
      'This matches $s^2 = 10^2 = 100$.',
    ]},
  ],
  checks: ['c5-5-1', 'c5-5-2', 'c5-5-3'],
},

'5-6': {
  diagram: 'circle',
  intro: [
    'The circumference of a circle is the distance around it. For every circle, the circumference divided by the diameter is the same number. We call this number pi, written $\\pi$. Its value is about 3.14. So $C = \\pi d = 2\\pi r$.',
    'The area of a circle with radius $r$ is $A = \\pi r^2$. Think of the circle as a regular polygon with very many sides. The apothem becomes $r$ and the perimeter becomes $2\\pi r$. Then $\\tfrac{1}{2}aP = \\tfrac{1}{2}(r)(2\\pi r) = \\pi r^2$.',
    'Drag the radius slider in the diagram. Watch the circumference and the area readouts. Each one shows the formula with the radius filled in. The central angle slider changes the arc length, the sector area, and the chord length. Chapter 8 covers those parts.',
    'In this chapter, use $\\pi \\approx 3.14$ for numeric answers. Keep $\\pi$ in the answer when a problem asks for an exact value.',
  ],
  definitions: [
    { term: 'Pi', text: 'The ratio of the circumference of a circle to its diameter, written $\\pi$. Its value is about 3.14.' },
    { term: 'Circumference', text: 'The distance around a circle.' },
    { term: 'Area of a circle', text: 'The number of square units inside the circle, $\\pi r^2$.' },
  ],
  formulas: [
    { label: 'Circumference', tex: 'C = 2\\pi r = \\pi d' },
    { label: 'Area of a circle', tex: 'A = \\pi r^2' },
  ],
  theorems: ['5.9', '5.10'],
  examples: [
    { title: 'Example 1 — Circumference', given: 'A circle has radius 5. Find the circumference. Use $\\pi \\approx 3.14$.', steps: [
      'Use $C = 2\\pi r$.',
      '$C = 2\\pi(5) = 10\\pi$',
      '$10\\pi \\approx 10(3.14) = 31.4$',
    ]},
    { title: 'Example 2 — Area from the diameter', given: 'A circle has diameter 12. Find the area. Use $\\pi \\approx 3.14$.', steps: [
      'The radius is half the diameter, so $r = 6$.',
      '$A = \\pi r^2 = \\pi(6^2) = 36\\pi$',
      '$36\\pi \\approx 36(3.14) = 113.04$ square units',
    ]},
    { title: 'Example 3 — Circumference to area', given: 'A circle has circumference 18.84. Find the area. Use $\\pi \\approx 3.14$.', steps: [
      'Use $C = 2\\pi r$ to find $r$.',
      '$18.84 = 2(3.14)r = 6.28r$, so $r = 3$',
      '$A = \\pi r^2 = 3.14(3^2) = 3.14(9) = 28.26$ square units',
    ]},
  ],
  checks: ['c5-6-1', 'c5-6-2', 'c5-6-3'],
},
},

questions: [
  // ---- 5-1 checks
  { id: 'c5-1-1', chapter: 'ch5', section: '5-1', set: 'check', type: 'diagram', figure: { kind: 'rect', w: 12, h: 5 }, prompt: 'The rectangle has length 12 and width 5. Find the perimeter.', answer: 34, tolerance: 0.5,
    solution: ['Use $P = 2l + 2w$.', '$P = 2(12) + 2(5) = 24 + 10 = 34$'] },
  { id: 'c5-1-2', chapter: 'ch5', section: '5-1', set: 'check', type: 'numeric', prompt: 'A square has perimeter 36. Find the area.', answer: 81, tolerance: 0.5, unit: 'units²',
    solution: ['Use $P = 4s$ to find the side.', '$36 = 4s$, so $s = 9$', '$A = s^2 = 9^2 = 81$ square units'] },
  { id: 'c5-1-3', chapter: 'ch5', section: '5-1', set: 'check', type: 'mc', prompt: 'A rectangle has area $72\\ \\text{cm}^2$ and length 9 cm. Find the width.', choices: ['4 cm', '8 cm', '27 cm', '63 cm'], answer: 1,
    solution: ['Use $A = lw$ and solve for $w$.', '$72 = 9w$, so $w = 8$ cm'] },
  // ---- 5-2 checks
  { id: 'c5-2-1', chapter: 'ch5', section: '5-2', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 9, b: 12, c: 15 }, prompt: 'The triangle has sides 9, 12, and 15. The angle at $C$ is a right angle. Find the area.', answer: 54, tolerance: 0.5, unit: 'units²',
    solution: ['The legs 9 and 12 are a base and a height.', '$A = \\tfrac{1}{2}bh = \\tfrac{1}{2}(9)(12) = 54$ square units'] },
  { id: 'c5-2-2', chapter: 'ch5', section: '5-2', set: 'check', type: 'numeric', prompt: 'A triangle has base 14 and height 5. Find the area.', answer: 35, tolerance: 0.5, unit: 'units²',
    solution: ['Use $A = \\tfrac{1}{2}bh$.', '$A = \\tfrac{1}{2}(14)(5) = 35$ square units'] },
  { id: 'c5-2-3', chapter: 'ch5', section: '5-2', set: 'check', type: 'mc', prompt: 'An equilateral triangle has side 4. Find the exact area.', choices: ['$4\\sqrt{3}$', '$8\\sqrt{3}$', '$16\\sqrt{3}$', '$2\\sqrt{3}$'], answer: 0,
    solution: ['Use $A = \\frac{s^2\\sqrt{3}}{4}$.', '$A = \\frac{4^2\\sqrt{3}}{4} = \\frac{16\\sqrt{3}}{4} = 4\\sqrt{3}$'] },
  // ---- 5-3 checks
  { id: 'c5-3-1', chapter: 'ch5', section: '5-3', set: 'check', type: 'numeric', prompt: 'A parallelogram has base 10, slant side 6, and height 4. Find the area.', answer: 40, tolerance: 0.5, unit: 'units²',
    solution: ['Use the height, not the slant side.', '$A = bh = 10 \\cdot 4 = 40$ square units'] },
  { id: 'c5-3-2', chapter: 'ch5', section: '5-3', set: 'check', type: 'mc', prompt: 'A parallelogram has base 8, slant side 5, and height 3. Find the area.', choices: ['40', '24', '26', '15'], answer: 1,
    solution: ['The area is base times height.', '$A = 8 \\cdot 3 = 24$', 'The slant side 5 is not used for the area.'] },
  { id: 'c5-3-3', chapter: 'ch5', section: '5-3', set: 'check', type: 'numeric', prompt: 'A parallelogram has sides 11 and 7. Find the perimeter.', answer: 36, tolerance: 0.5,
    solution: ['Use $P = 2a + 2b$.', '$P = 2(11) + 2(7) = 22 + 14 = 36$'] },
  // ---- 5-4 checks
  { id: 'c5-4-1', chapter: 'ch5', section: '5-4', set: 'check', type: 'numeric', prompt: 'A trapezoid has bases 7 and 13 and height 4. Find the area.', answer: 40, tolerance: 0.5, unit: 'units²',
    solution: ['Use $A = \\tfrac{1}{2}h(b_1 + b_2)$.', '$A = \\tfrac{1}{2}(4)(7 + 13) = 2 \\cdot 20 = 40$ square units'] },
  { id: 'c5-4-2', chapter: 'ch5', section: '5-4', set: 'check', type: 'mc', prompt: 'A trapezoid has median 11 and height 6. Find the area.', choices: ['33', '66', '132', '17'], answer: 1,
    solution: ['The area is the median times the height.', '$A = mh = 11 \\cdot 6 = 66$'] },
  { id: 'c5-4-3', chapter: 'ch5', section: '5-4', set: 'check', type: 'numeric', prompt: 'A trapezoid has area 54 and height 6. One base is 7. Find the other base.', answer: 11, tolerance: 0.5,
    solution: ['Use $A = \\tfrac{1}{2}h(b_1 + b_2)$.', '$54 = \\tfrac{1}{2}(6)(7 + b_2) = 3(7 + b_2)$', '$7 + b_2 = 18$, so $b_2 = 11$'] },
  // ---- 5-5 checks
  { id: 'c5-5-1', chapter: 'ch5', section: '5-5', set: 'check', type: 'diagram', figure: { kind: 'polygon', n: 5 }, prompt: 'Find the central angle of a regular pentagon.', answer: 72, tolerance: 0.5, unit: '°',
    solution: ['A pentagon has $n = 5$ sides.', 'Central angle $= \\frac{360^\\circ}{5} = 72^\\circ$'] },
  { id: 'c5-5-2', chapter: 'ch5', section: '5-5', set: 'check', type: 'numeric', prompt: 'A regular hexagon has side 7. Find the perimeter.', answer: 42, tolerance: 0.5,
    solution: ['Use $P = ns$.', '$P = 6 \\cdot 7 = 42$'] },
  { id: 'c5-5-3', chapter: 'ch5', section: '5-5', set: 'check', type: 'numeric', prompt: 'A regular pentagon has side 10 and apothem about 6.9. Find the area.', answer: 172.5, tolerance: 0.5, unit: 'units²',
    solution: ['$P = ns = 5 \\cdot 10 = 50$', 'Use $A = \\tfrac{1}{2}aP$.', '$A = \\tfrac{1}{2}(6.9)(50) = 172.5$ square units'] },
  // ---- 5-6 checks
  { id: 'c5-6-1', chapter: 'ch5', section: '5-6', set: 'check', type: 'diagram', figure: { kind: 'circle', r: 4 }, prompt: 'The circle has radius 4. Find the circumference. Use $\\pi \\approx 3.14$.', answer: 25.12, tolerance: 0.05,
    solution: ['Use $C = 2\\pi r$.', '$C = 2(3.14)(4) = 25.12$'] },
  { id: 'c5-6-2', chapter: 'ch5', section: '5-6', set: 'check', type: 'numeric', prompt: 'A circle has diameter 10. Find the area. Use $\\pi \\approx 3.14$.', answer: 78.5, tolerance: 0.1, unit: 'units²',
    solution: ['The radius is half the diameter, so $r = 5$.', '$A = \\pi r^2 = 3.14(5^2) = 3.14(25) = 78.5$ square units'] },
  { id: 'c5-6-3', chapter: 'ch5', section: '5-6', set: 'check', type: 'mc', prompt: 'A circle has circumference $12\\pi$. Find the exact area.', choices: ['$6\\pi$', '$12\\pi$', '$36\\pi$', '$144\\pi$'], answer: 2,
    solution: ['Use $C = 2\\pi r$ to find $r$.', '$12\\pi = 2\\pi r$, so $r = 6$', '$A = \\pi r^2 = \\pi(6^2) = 36\\pi$'] },

  // ---- Chapter 5 problems
  { id: 'p5-1', chapter: 'ch5', section: '5-1', set: 'chapter', type: 'diagram', figure: { kind: 'rect', w: 15, h: 8 }, prompt: 'The rectangle has length 15 and width 8. Find the area.', answer: 120, tolerance: 0.5, unit: 'units²',
    solution: ['Use Theorem 5.4: $A = lw$.', '$A = 15 \\cdot 8 = 120$ square units'] },
  { id: 'p5-2', chapter: 'ch5', section: '5-2', set: 'chapter', type: 'numeric', prompt: 'A triangle has base 16 and height 7. Find the area.', answer: 56, tolerance: 0.5, unit: 'units²',
    solution: ['Use Theorem 5.5: $A = \\tfrac{1}{2}bh$.', '$A = \\tfrac{1}{2}(16)(7)$', '$A = 8 \\cdot 7 = 56$ square units'] },
  { id: 'p5-3', chapter: 'ch5', section: '5-3', set: 'chapter', type: 'mc', prompt: 'A parallelogram has base 14, slant side 9, and height 6. Find the area.', choices: ['126', '84', '46', '54'], answer: 1,
    solution: ['Use Theorem 5.6: $A = bh$.', 'The height is 6. The slant side 9 is not the height.', '$A = 14 \\cdot 6 = 84$', 'The choice 126 uses the slant side by mistake.'] },
  { id: 'p5-4', chapter: 'ch5', section: '5-4', set: 'chapter', type: 'numeric', prompt: 'A trapezoid has bases 9 and 15 and height 8. Find the area.', answer: 96, tolerance: 0.5, unit: 'units²',
    solution: ['Use Theorem 5.7: $A = \\tfrac{1}{2}h(b_1 + b_2)$.', '$A = \\tfrac{1}{2}(8)(9 + 15)$', '$A = 4 \\cdot 24 = 96$ square units'] },
  { id: 'p5-5', chapter: 'ch5', section: '5-5', set: 'chapter', type: 'diagram', figure: { kind: 'polygon', n: 6 }, prompt: 'A regular hexagon has side 12. Its apothem is about 10.39. Find the area.', answer: 374.1, tolerance: 0.5, unit: 'units²',
    solution: ['Find the perimeter: $P = ns = 6 \\cdot 12 = 72$.', 'Use Theorem 5.8: $A = \\tfrac{1}{2}aP$.', '$A = \\tfrac{1}{2}(10.39)(72) = 374.04$', 'The area is about 374.1 square units.'] },
  { id: 'p5-6', chapter: 'ch5', section: '5-6', set: 'chapter', type: 'diagram', figure: { kind: 'circle', r: 7 }, prompt: 'The circle has radius 7. Find the area. Use $\\pi \\approx 3.14$.', answer: 153.86, tolerance: 0.1, unit: 'units²',
    solution: ['Use Theorem 5.10: $A = \\pi r^2$.', '$A = 3.14(7^2) = 3.14(49)$', '$A = 153.86$ square units'] },

  // ---- Chapter 5 supplemental (answers only)
  { id: 's5-1', chapter: 'ch5', section: '5-1', set: 'supplemental', type: 'numeric', prompt: 'A square has area 144. Find the perimeter.', answer: 48, tolerance: 0.5 },
  { id: 's5-2', chapter: 'ch5', section: '5-2', set: 'supplemental', type: 'numeric', prompt: 'An equilateral triangle has side 10. Find the area. Round to the nearest hundredth.', answer: 43.3, tolerance: 0.05, unit: 'units²' },
  { id: 's5-3', chapter: 'ch5', section: '5-3', set: 'supplemental', type: 'numeric', prompt: 'A parallelogram has area 91 and height 7. Find the base.', answer: 13, tolerance: 0.5 },
  { id: 's5-4', chapter: 'ch5', section: '5-4', set: 'supplemental', type: 'numeric', prompt: 'A trapezoid has median 12 and height 5. Find the area.', answer: 60, tolerance: 0.5, unit: 'units²' },
  { id: 's5-5', chapter: 'ch5', section: '5-5', set: 'supplemental', type: 'mc', prompt: 'Find the central angle of a regular decagon.', choices: ['$36^\\circ$', '$40^\\circ$', '$45^\\circ$', '$144^\\circ$'], answer: 0 },
  { id: 's5-6', chapter: 'ch5', section: '5-6', set: 'supplemental', type: 'numeric', prompt: 'A circle has circumference 31.4. Find the radius. Use $\\pi \\approx 3.14$.', answer: 5, tolerance: 0.05 },

  // ---- Chapter 5 exam bank
  { id: 'b5-1', chapter: 'ch5', section: '5-1', set: 'bank', type: 'mc', prompt: 'A rectangle has perimeter 40 and length 12. Find the area.', choices: ['80', '112', '96', '160'], answer: 2,
    solution: ['Use $P = 2l + 2w$ to find the width.', '$40 = 2(12) + 2w = 24 + 2w$, so $w = 8$', '$A = lw = 12 \\cdot 8 = 96$'] },
  { id: 'b5-2', chapter: 'ch5', section: '5-4', set: 'bank', type: 'numeric', prompt: 'A trapezoid has bases 6 and 10 and height 5. Find the area.', answer: 40, tolerance: 0.5, unit: 'units²',
    solution: ['Use $A = \\tfrac{1}{2}h(b_1 + b_2)$.', '$A = \\tfrac{1}{2}(5)(6 + 10) = \\tfrac{1}{2}(5)(16) = 40$ square units'] },
  { id: 'b5-3', chapter: 'ch5', section: '5-6', set: 'bank', type: 'numeric', prompt: 'A circle has diameter 20. Find the area. Use $\\pi \\approx 3.14$.', answer: 314, tolerance: 0.5, unit: 'units²',
    solution: ['The radius is half the diameter, so $r = 10$.', '$A = \\pi r^2 = 3.14(10^2) = 3.14(100) = 314$ square units'] },
],

theorems: [
  { id: '5.1', chapter: 'ch5', kind: 'Postulate', name: 'Area of a Square Postulate', statement: 'The area of a square is the square of the length of a side, $A = s^2$.', section: '5-1' },
  { id: '5.2', chapter: 'ch5', kind: 'Postulate', name: 'Area Congruence Postulate', statement: 'If two figures are congruent, then they have the same area.', section: '5-1' },
  { id: '5.3', chapter: 'ch5', kind: 'Postulate', name: 'Area Addition Postulate', statement: 'The area of a region is the sum of the areas of its non-overlapping parts.', section: '5-1' },
  { id: '5.4', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Rectangle', statement: 'The area of a rectangle is the product of its length and its width, $A = lw$.', section: '5-1' },
  { id: '5.5', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Triangle', statement: 'The area of a triangle is half the product of a base and the height to that base, $A = \\tfrac{1}{2}bh$.', section: '5-2' },
  { id: '5.6', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Parallelogram', statement: 'The area of a parallelogram is the product of a base and the height to that base, $A = bh$.', section: '5-3' },
  { id: '5.7', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Trapezoid', statement: 'The area of a trapezoid is half the product of the height and the sum of the bases, $A = \\tfrac{1}{2}h(b_1 + b_2)$.', section: '5-4' },
  { id: '5.8', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Regular Polygon', statement: 'The area of a regular polygon is half the product of the apothem and the perimeter, $A = \\tfrac{1}{2}aP$.', section: '5-5' },
  { id: '5.9', chapter: 'ch5', kind: 'Theorem', name: 'Circumference of a Circle', statement: 'The circumference of a circle is $\\pi$ times the diameter, $C = \\pi d = 2\\pi r$.', section: '5-6' },
  { id: '5.10', chapter: 'ch5', kind: 'Theorem', name: 'Area of a Circle', statement: 'The area of a circle is $\\pi$ times the square of the radius, $A = \\pi r^2$.', section: '5-6' },
],

glossary: [
  { term: 'Perimeter', def: 'The distance around a closed figure.', section: '5-1' },
  { term: 'Area', def: 'The number of square units that cover the inside of a figure.', section: '5-1' },
  { term: 'Square unit', def: 'A square with sides of length 1, used to measure area.', section: '5-1' },
  { term: 'Height of a parallelogram', def: 'The perpendicular distance from a base to the opposite side.', section: '5-3' },
  { term: 'Height of a trapezoid', def: 'The perpendicular distance between the two bases.', section: '5-4' },
  { term: 'Center of a regular polygon', def: 'The point that is the same distance from every vertex.', section: '5-5' },
  { term: 'Radius of a regular polygon', def: 'A segment from the center to a vertex.', section: '5-5' },
  { term: 'Apothem', def: 'The perpendicular segment from the center of a regular polygon to a side.', section: '5-5' },
  { term: 'Central angle of a regular polygon', def: 'An angle at the center whose sides are radii to two adjacent vertices.', section: '5-5' },
  { term: 'Pi', def: 'The ratio of the circumference of a circle to its diameter, about 3.14.', section: '5-6' },
],
};
