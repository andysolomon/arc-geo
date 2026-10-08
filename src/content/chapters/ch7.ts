// Chapter 7: Right Triangles. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch7: ChapterContent = {
chapter: { id: 'ch7', number: 7, title: 'Right Triangles', sections: [
  { id: '7-1', title: 'Geometric Mean', kind: 'lesson', built: true, summary: 'The geometric mean of two positive numbers a and b is the square root of their product. It solves the proportion a/x = x/b. Write the answer in simplest radical form.', formula: 'x = \\sqrt{ab}' },
  { id: '7-2', title: 'Altitude to the Hypotenuse', kind: 'lesson', built: true, summary: 'The altitude to the hypotenuse of a right triangle makes two triangles similar to the original and to each other. The altitude is the geometric mean of the two hypotenuse segments. Each leg is the geometric mean of the hypotenuse and the adjacent segment.', formula: 'CD^2 = AD \\cdot DB' },
  { id: '7-3', title: 'The Pythagorean Theorem', kind: 'lesson', built: true, summary: 'In a right triangle the squares of the legs add to the square of the hypotenuse. Use it to find a missing side. Its converse tests whether three sides make a right triangle.', formula: 'a^2 + b^2 = c^2' },
  { id: '7-4', title: 'Pythagorean Triples', kind: 'lesson', built: true, summary: 'A Pythagorean triple is three whole numbers that satisfy the Pythagorean Theorem. Learn 3-4-5, 5-12-13, 8-15-17, and 7-24-25. Any multiple of a triple is also a triple.', formula: '3\\text{-}4\\text{-}5,\\ 5\\text{-}12\\text{-}13,\\ 8\\text{-}15\\text{-}17,\\ 7\\text{-}24\\text{-}25' },
  { id: '7-5', title: 'Outgrowths of the Pythagorean Theorem', kind: 'lesson', built: true, summary: 'Compare the square of the longest side with the sum of the squares of the other two. Less means acute. Greater means obtuse. The theorem also gives the diagonal of a box.', formula: 'c^2 < a^2 + b^2 \\implies \\text{acute},\\quad c^2 > a^2 + b^2 \\implies \\text{obtuse}' },
  { id: '7-6', title: 'Special Right Triangles', kind: 'lesson', built: true, parts: ['Isosceles Right Triangle', '30-60-90 Right Triangle'], summary: 'A 45-45-90 triangle has sides x, x, and x√2. A 30-60-90 triangle has sides x, x√3, and 2x. Find the shorter leg first.', formula: 'x,\\ x,\\ x\\sqrt{2} \\qquad x,\\ x\\sqrt{3},\\ 2x' },
  { id: '7-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '7-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'7-1': {
  intro: [
    'The geometric mean of two positive numbers $a$ and $b$ is the positive number $x$ that makes $\\frac{a}{x} = \\frac{x}{b}$ true. Cross multiply to get $x^2 = ab$. So $x = \\sqrt{ab}$.',
    'The geometric mean is not the average. The average of 4 and 9 is 6.5. The geometric mean of 4 and 9 is $\\sqrt{4 \\cdot 9} = \\sqrt{36} = 6$.',
    'Many geometric means are square roots that are not whole numbers. Write them in simplest radical form. Take every perfect square factor out of the radical. For example, $\\sqrt{18} = \\sqrt{9 \\cdot 2} = 3\\sqrt{2}$.',
    'The next lesson uses geometric means inside right triangles. Learn to solve $\\frac{a}{x} = \\frac{x}{b}$ quickly.',
  ],
  definitions: [
    { term: 'Geometric mean', text: 'The positive number $x$ with $\\frac{a}{x} = \\frac{x}{b}$, which equals $\\sqrt{ab}$.' },
    { term: 'Proportion', text: 'An equation that says two ratios are equal.' },
    { term: 'Perfect square', text: 'A number that is the square of a whole number, such as 4, 9, 16, or 25.' },
    { term: 'Simplest radical form', text: 'A square root with no perfect square factor left under the radical sign.' },
  ],
  formulas: [
    { label: 'Geometric mean', tex: 'x = \\sqrt{ab}' },
    { label: 'Proportion form', tex: '\\frac{a}{x} = \\frac{x}{b} \\implies x^2 = ab' },
    { label: 'Product rule for radicals', tex: '\\sqrt{ab} = \\sqrt{a} \\cdot \\sqrt{b}' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — A whole number answer', given: 'Find the geometric mean of 4 and 25.', steps: [
      'Multiply the two numbers. $4 \\cdot 25 = 100$',
      'Take the square root. $x = \\sqrt{100} = 10$',
    ]},
    { title: 'Example 2 — A radical answer', given: 'Find the geometric mean of 6 and 12. Give the exact answer and a decimal to two places.', steps: [
      '$x = \\sqrt{6 \\cdot 12} = \\sqrt{72}$',
      'Take out the perfect square 36. $\\sqrt{72} = \\sqrt{36 \\cdot 2} = 6\\sqrt{2}$',
      '$6\\sqrt{2} \\approx 8.49$',
    ]},
    { title: 'Example 3 — Solve the proportion', given: 'Solve $\\frac{3}{x} = \\frac{x}{27}$ for the positive value of $x$.', steps: [
      'Cross multiply. $x^2 = 3 \\cdot 27 = 81$',
      'Take the positive square root. $x = 9$',
    ]},
  ],
  checks: ['c7-1-1', 'c7-1-2', 'c7-1-3'],
},

'7-2': {
  diagram: 'triangle',
  intro: [
    'Start with a right triangle. Draw the altitude from the right angle to the hypotenuse. The altitude is perpendicular to the hypotenuse. It cuts the hypotenuse into two segments.',
    'The altitude makes two smaller right triangles. Both are similar to the original triangle. They are also similar to each other. The three similar triangles give three geometric means.',
    'In right triangle $ACB$, the right angle is at $C$. The altitude $\\overline{CD}$ meets the hypotenuse $\\overline{AB}$ at $D$. The altitude $CD$ is the geometric mean of $AD$ and $DB$. Each leg is the geometric mean of the whole hypotenuse and the segment next to that leg.',
    'In the diagram, drag a vertex until angle $A$ reads 90°. Use the arrow keys to nudge a vertex. Turn on the altitude from $A$. The altitude now goes to the hypotenuse $\\overline{BC}$. Watch the two smaller right triangles it makes.',
  ],
  definitions: [
    { term: 'Altitude to the hypotenuse', text: 'The segment from the right angle perpendicular to the hypotenuse.' },
    { term: 'Segments of the hypotenuse', text: 'The two pieces of the hypotenuse that the altitude makes.' },
    { term: 'Adjacent segment', text: 'The segment of the hypotenuse that shares an endpoint with a given leg.' },
  ],
  formulas: [
    { label: 'Altitude rule', tex: 'CD^2 = AD \\cdot DB' },
    { label: 'Leg rule', tex: 'AC^2 = AB \\cdot AD, \\quad BC^2 = AB \\cdot DB' },
    { label: 'Proportion form', tex: '\\frac{AD}{CD} = \\frac{CD}{DB}' },
  ],
  theorems: ['7.1', '7.2', '7.3'],
  examples: [
    { title: 'Example 1 — Find the altitude', given: 'Right triangle $ACB$ has its right angle at $C$. The altitude $\\overline{CD}$ meets the hypotenuse at $D$. $AD = 4$ and $DB = 9$. Find $CD$.', steps: [
      'Use Theorem 7.2. The altitude is the geometric mean of the two segments.',
      '$CD^2 = AD \\cdot DB = 4 \\cdot 9 = 36$',
      '$CD = \\sqrt{36} = 6$',
    ]},
    { title: 'Example 2 — Find a leg', given: 'In the same setup, $AD = 3$ and $DB = 12$. Find $AC$ to two decimal places.', steps: [
      'The whole hypotenuse is $AB = 3 + 12 = 15$.',
      'Use Theorem 7.3. Leg $AC$ is next to segment $AD$.',
      '$AC^2 = AB \\cdot AD = 15 \\cdot 3 = 45$',
      '$AC = \\sqrt{45} = 3\\sqrt{5} \\approx 6.71$',
    ]},
    { title: 'Example 3 — Find a segment', given: 'In the same setup, $CD = 8$ and $AD = 4$. Find $DB$ and $AB$.', steps: [
      '$CD^2 = AD \\cdot DB$, so $64 = 4 \\cdot DB$.',
      'Divide by 4. $DB = 16$',
      '$AB = AD + DB = 4 + 16 = 20$',
    ]},
  ],
  checks: ['c7-2-1', 'c7-2-2', 'c7-2-3'],
},

'7-3': {
  diagram: 'triangle',
  intro: [
    'In a right triangle, the two sides that form the right angle are the legs. The side opposite the right angle is the hypotenuse. The hypotenuse is the longest side.',
    'The Pythagorean Theorem says $a^2 + b^2 = c^2$. Here $a$ and $b$ are the legs and $c$ is the hypotenuse. Use it to find any side when you know the other two.',
    'The converse is also true. If the three sides of a triangle satisfy $a^2 + b^2 = c^2$, the triangle is a right triangle. The right angle is opposite the longest side $c$.',
    'In the diagram, drag a vertex until angle $C$ reads 90°. Watch the Pythagorean check. It compares $a^2 + b^2$ with $c^2$ for the longest side $c$. When the angle is 90°, the two values are equal.',
  ],
  definitions: [
    { term: 'Legs', text: 'The two sides of a right triangle that form the right angle.' },
    { term: 'Hypotenuse', text: 'The side of a right triangle opposite the right angle. It is the longest side.' },
    { term: 'Converse', text: 'The statement you get when you swap the "if" part and the "then" part.' },
  ],
  formulas: [
    { label: 'Pythagorean Theorem', tex: 'a^2 + b^2 = c^2' },
    { label: 'Find the hypotenuse', tex: 'c = \\sqrt{a^2 + b^2}' },
    { label: 'Find a leg', tex: 'a = \\sqrt{c^2 - b^2}' },
  ],
  theorems: ['7.4', '7.5'],
  examples: [
    { title: 'Example 1 — Find the hypotenuse', given: 'A right triangle has legs 6 and 8. Find the hypotenuse.', steps: [
      'Use Theorem 7.4. $c^2 = 6^2 + 8^2 = 36 + 64 = 100$',
      '$c = \\sqrt{100} = 10$',
    ]},
    { title: 'Example 2 — Find a leg', given: 'A right triangle has hypotenuse 13 and one leg 5. Find the other leg.', steps: [
      '$a^2 = c^2 - b^2 = 13^2 - 5^2 = 169 - 25 = 144$',
      '$a = \\sqrt{144} = 12$',
    ]},
    { title: 'Example 3 — A radical answer', given: 'A right triangle has legs 4 and 7. Find the hypotenuse to two decimal places.', steps: [
      '$c^2 = 4^2 + 7^2 = 16 + 49 = 65$',
      '$c = \\sqrt{65} \\approx 8.06$',
    ]},
  ],
  checks: ['c7-3-1', 'c7-3-2', 'c7-3-3'],
},

'7-4': {
  diagram: 'triangle',
  intro: [
    'A Pythagorean triple is a set of three whole numbers $a$, $b$, and $c$ with $a^2 + b^2 = c^2$. The most common triples are 3-4-5, 5-12-13, 8-15-17, and 7-24-25.',
    'Multiply every number in a triple by the same whole number. The result is another triple. From 3-4-5 you get 6-8-10, 9-12-15, and 30-40-50.',
    'Learn the triples. They save time. If a right triangle has legs 15 and 20, see $5 \\times (3\\text{-}4\\text{-}5)$. The hypotenuse is 25. You do not need to square anything.',
    'In the diagram, drag the vertices until the three sides are in the ratio $3 : 4 : 5$. Watch angle $C$ go to 90°. Watch the Pythagorean check report equal.',
  ],
  definitions: [
    { term: 'Pythagorean triple', text: 'Three whole numbers $a$, $b$, $c$ with $a^2 + b^2 = c^2$.' },
    { term: 'Primitive triple', text: 'A triple whose three numbers share no common factor, such as 3-4-5.' },
    { term: 'Multiple of a triple', text: 'A triple made when you multiply each number of a triple by the same whole number.' },
  ],
  formulas: [
    { label: 'Common triples', tex: '3\\text{-}4\\text{-}5,\\quad 5\\text{-}12\\text{-}13,\\quad 8\\text{-}15\\text{-}17,\\quad 7\\text{-}24\\text{-}25' },
    { label: 'Multiples', tex: 'ka,\\ kb,\\ kc \\text{ is a triple for any whole number } k' },
  ],
  theorems: ['7.4', '7.5'],
  examples: [
    { title: 'Example 1 — Spot the multiple', given: 'A right triangle has legs 10 and 24. Find the hypotenuse.', steps: [
      'Divide both legs by 2. You get 5 and 12.',
      '5-12-13 is a triple. So 10-24-26 is a triple.',
      'The hypotenuse is 26.',
    ]},
    { title: 'Example 2 — Find a leg', given: 'A right triangle has hypotenuse 34 and one leg 16. Find the other leg.', steps: [
      'Divide by 2. You get 17 and 8.',
      '8-15-17 is a triple. The missing number is 15.',
      'Multiply back by 2. The other leg is 30.',
    ]},
    { title: 'Example 3 — Test for a right triangle', given: 'Is a triangle with sides 21, 28, and 35 a right triangle?', steps: [
      'Divide every side by 7. You get 3, 4, and 5.',
      '3-4-5 is a triple, so $21^2 + 28^2 = 35^2$.',
      'By Theorem 7.5, the triangle is a right triangle.',
    ]},
  ],
  checks: ['c7-4-1', 'c7-4-2', 'c7-4-3'],
},

'7-5': {
  diagram: 'triangle',
  intro: [
    'The Pythagorean Theorem also tells you about triangles that are not right. Let $c$ be the longest side. Compare $c^2$ with $a^2 + b^2$.',
    'If $c^2 = a^2 + b^2$, the triangle is right. If $c^2 < a^2 + b^2$, the triangle is acute. If $c^2 > a^2 + b^2$, the triangle is obtuse. First make sure that $a + b > c$, or there is no triangle.',
    'The theorem also works in three dimensions. The diagonal of a box goes from one corner to the opposite corner through the inside. Its length is $d = \\sqrt{l^2 + w^2 + h^2}$. Use the theorem twice: once on the base, then once on the standing right triangle.',
    'In the diagram, start with angle $C$ at 90°. The check reads equal. Drag vertex $C$ away from $\\overline{AB}$. The triangle becomes acute, and the check reads less: $c^2$ is less than $a^2 + b^2$. Drag $C$ toward $\\overline{AB}$. The triangle becomes obtuse, and the check reads greater.',
  ],
  definitions: [
    { term: 'Acute triangle', text: 'A triangle with three angles less than $90^\\circ$.' },
    { term: 'Obtuse triangle', text: 'A triangle with one angle greater than $90^\\circ$.' },
    { term: 'Longest side', text: 'The side opposite the largest angle. Call it $c$ in the tests.' },
    { term: 'Diagonal of a box', text: 'A segment that joins two opposite corners of a box through its inside.' },
  ],
  formulas: [
    { label: 'Acute test', tex: 'c^2 < a^2 + b^2 \\implies \\text{acute}' },
    { label: 'Obtuse test', tex: 'c^2 > a^2 + b^2 \\implies \\text{obtuse}' },
    { label: 'Diagonal of a box', tex: 'd = \\sqrt{l^2 + w^2 + h^2}' },
  ],
  theorems: ['7.5', '7.6', '7.7'],
  examples: [
    { title: 'Example 1 — Acute', given: 'Classify the triangle with sides 5, 6, and 7.', steps: [
      'The longest side is 7. $c^2 = 49$',
      '$a^2 + b^2 = 25 + 36 = 61$',
      '$49 < 61$, so by Theorem 7.6 the triangle is acute.',
    ]},
    { title: 'Example 2 — Obtuse', given: 'Classify the triangle with sides 4, 7, and 10.', steps: [
      'Check the triangle inequality. $4 + 7 = 11 > 10$, so it is a triangle.',
      'The longest side is 10. $c^2 = 100$',
      '$a^2 + b^2 = 16 + 49 = 65$',
      '$100 > 65$, so by Theorem 7.7 the triangle is obtuse.',
    ]},
    { title: 'Example 3 — Diagonal of a box', given: 'A box is 3 by 4 by 12. Find the length of its diagonal.', steps: [
      'The diagonal of the base is $\\sqrt{3^2 + 4^2} = 5$.',
      'That diagonal and the height 12 form a right triangle.',
      '$d = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$',
    ]},
  ],
  checks: ['c7-5-1', 'c7-5-2', 'c7-5-3'],
},

'7-6': {
  diagram: 'triangle',
  intro: [
    'Two right triangles appear so often that you should know their side ratios. The isosceles right triangle has angles 45°, 45°, and 90°. The 30-60-90 triangle has angles 30°, 60°, and 90°.',
    'In a 45-45-90 triangle, the legs are equal. If each leg is $x$, the hypotenuse is $x\\sqrt{2}$. To go from the hypotenuse back to a leg, divide by $\\sqrt{2}$.',
    'In a 30-60-90 triangle, the shorter leg is opposite the 30° angle. If the shorter leg is $x$, the longer leg is $x\\sqrt{3}$ and the hypotenuse is $2x$. Always find the shorter leg first.',
    'In the diagram, drag the vertices until the angles read 45°, 45°, and 90°. Compare the hypotenuse with a leg. It is about 1.41 times as long. Then make the angles 30°, 60°, and 90°. The hypotenuse is twice the shorter leg. The longer leg is about 1.73 times the shorter leg.',
  ],
  definitions: [
    { term: 'Isosceles right triangle', text: 'A right triangle with two equal legs. Its acute angles are both $45^\\circ$.' },
    { term: '30-60-90 triangle', text: 'A right triangle with acute angles of $30^\\circ$ and $60^\\circ$.' },
    { term: 'Shorter leg', text: 'The leg opposite the $30^\\circ$ angle in a 30-60-90 triangle.' },
    { term: 'Longer leg', text: 'The leg opposite the $60^\\circ$ angle in a 30-60-90 triangle.' },
  ],
  formulas: [
    { label: '45-45-90 sides', tex: 'x,\\ x,\\ x\\sqrt{2}' },
    { label: '30-60-90 sides', tex: 'x,\\ x\\sqrt{3},\\ 2x' },
    { label: 'Leg from hypotenuse (45-45-90)', tex: '\\text{leg} = \\frac{\\text{hyp}}{\\sqrt{2}} = \\frac{\\text{hyp}\\,\\sqrt{2}}{2}' },
  ],
  theorems: ['7.8', '7.9'],
  examples: [
    { title: 'Example 1 — 45-45-90, leg given', given: 'An isosceles right triangle has legs of 5. Find the hypotenuse exactly and to two decimal places.', steps: [
      'Use Theorem 7.8. The hypotenuse is $\\sqrt{2}$ times a leg.',
      '$c = 5\\sqrt{2} \\approx 7.07$',
    ]},
    { title: 'Example 2 — 45-45-90, hypotenuse given', given: 'An isosceles right triangle has hypotenuse 10. Find each leg.', steps: [
      'Divide the hypotenuse by $\\sqrt{2}$. $x = \\frac{10}{\\sqrt{2}}$',
      'Clear the radical from the bottom. $x = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$',
      '$5\\sqrt{2} \\approx 7.07$',
    ]},
    { title: 'Example 3 — 30-60-90, hypotenuse given', given: 'A 30-60-90 triangle has hypotenuse 12. Find both legs.', steps: [
      'Use Theorem 7.9. The hypotenuse is twice the shorter leg.',
      'Shorter leg: $x = 12 \\div 2 = 6$',
      'Longer leg: $x\\sqrt{3} = 6\\sqrt{3} \\approx 10.39$',
    ]},
  ],
  checks: ['c7-6-1', 'c7-6-2', 'c7-6-3'],
},
},

questions: [
  // ---- 7-1 checks
  { id: 'c7-1-1', chapter: 'ch7', section: '7-1', set: 'check', type: 'numeric', prompt: 'Find the geometric mean of 9 and 16.', answer: 12, tolerance: 0.05,
    solution: ['$x = \\sqrt{9 \\cdot 16} = \\sqrt{144}$', '$x = 12$'] },
  { id: 'c7-1-2', chapter: 'ch7', section: '7-1', set: 'check', type: 'mc', prompt: 'Write $\\sqrt{50}$ in simplest radical form.', choices: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$25\\sqrt{2}$', '$10\\sqrt{5}$'], answer: 0,
    solution: ['The largest perfect square factor of 50 is 25.', '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$'] },
  { id: 'c7-1-3', chapter: 'ch7', section: '7-1', set: 'check', type: 'numeric', prompt: 'Solve $\\frac{2}{x} = \\frac{x}{18}$ for the positive value of $x$.', answer: 6, tolerance: 0.05,
    solution: ['Cross multiply. $x^2 = 2 \\cdot 18 = 36$', '$x = \\sqrt{36} = 6$'] },

  // ---- 7-2 checks
  { id: 'c7-2-1', chapter: 'ch7', section: '7-2', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 8.94, b: 4.47, c: 10, hide: ['a', 'b'] }, prompt: 'Triangle $ACB$ has its right angle at $C$. The altitude from $C$ meets $\\overline{AB}$ at $D$. $AD = 2$ and $DB = 8$. Find the altitude $CD$.', answer: 4, tolerance: 0.05,
    solution: ['Use Theorem 7.2. The altitude is the geometric mean of $AD$ and $DB$.', '$CD^2 = 2 \\cdot 8 = 16$', '$CD = 4$'] },
  { id: 'c7-2-2', chapter: 'ch7', section: '7-2', set: 'check', type: 'numeric', prompt: 'Triangle $ACB$ has its right angle at $C$. The altitude from $C$ meets $\\overline{AB}$ at $D$. $AD = 4$ and $DB = 5$. Find the leg $AC$.', answer: 6, tolerance: 0.05,
    solution: ['The hypotenuse is $AB = 4 + 5 = 9$.', 'Use Theorem 7.3. Leg $AC$ is next to segment $AD$.', '$AC^2 = AB \\cdot AD = 9 \\cdot 4 = 36$', '$AC = 6$'] },
  { id: 'c7-2-3', chapter: 'ch7', section: '7-2', set: 'check', type: 'mc', prompt: 'The altitude to the hypotenuse of a right triangle is 6. One segment of the hypotenuse is 3. Find the other segment.', choices: ['2', '9', '12', '18'], answer: 2,
    solution: ['The altitude is the geometric mean of the two segments.', '$6^2 = 3 \\cdot y$, so $36 = 3y$.', '$y = 12$'] },

  // ---- 7-3 checks
  { id: 'c7-3-1', chapter: 'ch7', section: '7-3', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 9, b: 12, c: 15, hide: ['c'] }, prompt: 'A right triangle has legs 9 and 12. Find the hypotenuse.', answer: 15, tolerance: 0.5,
    solution: ['Use Theorem 7.4. $c^2 = 9^2 + 12^2 = 81 + 144 = 225$', '$c = \\sqrt{225} = 15$'] },
  { id: 'c7-3-2', chapter: 'ch7', section: '7-3', set: 'check', type: 'numeric', prompt: 'A right triangle has hypotenuse 25 and one leg 7. Find the other leg.', answer: 24, tolerance: 0.5,
    solution: ['$a^2 = 25^2 - 7^2 = 625 - 49 = 576$', '$a = \\sqrt{576} = 24$'] },
  { id: 'c7-3-3', chapter: 'ch7', section: '7-3', set: 'check', type: 'mc', prompt: 'Which set of side lengths makes a right triangle?', choices: ['6, 8, 11', '5, 12, 13', '4, 5, 6', '7, 8, 10'], answer: 1,
    solution: ['Test each set with the converse, Theorem 7.5.', '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. This set works.', 'The others fail: $36 + 64 \\ne 121$, $16 + 25 \\ne 36$, and $49 + 64 \\ne 100$.'] },

  // ---- 7-4 checks
  { id: 'c7-4-1', chapter: 'ch7', section: '7-4', set: 'check', type: 'numeric', prompt: 'A right triangle has legs 14 and 48. Use a Pythagorean triple to find the hypotenuse.', answer: 50, tolerance: 0.5,
    solution: ['Divide both legs by 2. You get 7 and 24.', '7-24-25 is a triple, so 14-48-50 is a triple.', 'The hypotenuse is 50.'] },
  { id: 'c7-4-2', chapter: 'ch7', section: '7-4', set: 'check', type: 'mc', prompt: 'Which set of numbers is NOT a Pythagorean triple?', choices: ['9, 12, 15', '10, 24, 26', '8, 15, 17', '6, 10, 12'], answer: 3,
    solution: ['9-12-15 is $3 \\times (3\\text{-}4\\text{-}5)$. 10-24-26 is $2 \\times (5\\text{-}12\\text{-}13)$. 8-15-17 is a common triple.', 'Test 6, 10, 12: $36 + 100 = 136$, but $12^2 = 144$.', 'The numbers do not match, so 6, 10, 12 is not a triple.'] },
  { id: 'c7-4-3', chapter: 'ch7', section: '7-4', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 15, b: 36, c: 39, hide: ['b'] }, prompt: 'A right triangle has hypotenuse 39 and one leg 15. Find the other leg.', answer: 36, tolerance: 0.5,
    solution: ['Divide by 3. You get 13 and 5.', '5-12-13 is a triple. The missing number is 12.', 'Multiply back by 3. The other leg is 36.'] },

  // ---- 7-5 checks
  { id: 'c7-5-1', chapter: 'ch7', section: '7-5', set: 'check', type: 'mc', prompt: 'Classify the triangle with sides 6, 7, and 9.', choices: ['Acute', 'Right', 'Obtuse', 'Not a triangle'], answer: 0,
    solution: ['The longest side is 9. $c^2 = 81$', '$a^2 + b^2 = 36 + 49 = 85$', '$81 < 85$, so by Theorem 7.6 the triangle is acute.'] },
  { id: 'c7-5-2', chapter: 'ch7', section: '7-5', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 5, b: 8, c: 11 }, prompt: 'Classify the triangle with sides 5, 8, and 11.', choices: ['Acute', 'Right', 'Obtuse', 'Not a triangle'], answer: 2,
    solution: ['$5 + 8 = 13 > 11$, so it is a triangle.', 'The longest side is 11. $c^2 = 121$', '$a^2 + b^2 = 25 + 64 = 89$', '$121 > 89$, so by Theorem 7.7 the triangle is obtuse.'] },
  { id: 'c7-5-3', chapter: 'ch7', section: '7-5', set: 'check', type: 'numeric', prompt: 'A box is 2 by 3 by 6. Find the length of its diagonal.', answer: 7, tolerance: 0.05,
    solution: ['$d = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36}$', '$d = \\sqrt{49} = 7$'] },

  // ---- 7-6 checks
  { id: 'c7-6-1', chapter: 'ch7', section: '7-6', set: 'check', type: 'mc', prompt: 'An isosceles right triangle has legs of 8. Find the hypotenuse.', choices: ['$8\\sqrt{2}$', '$4\\sqrt{2}$', '$8\\sqrt{3}$', '$16$'], answer: 0,
    solution: ['Use Theorem 7.8. The hypotenuse is $\\sqrt{2}$ times a leg.', '$c = 8\\sqrt{2}$'] },
  { id: 'c7-6-2', chapter: 'ch7', section: '7-6', set: 'check', type: 'numeric', prompt: 'A 30-60-90 triangle has a shorter leg of 5. Find the hypotenuse.', answer: 10, tolerance: 0.5,
    solution: ['Use Theorem 7.9. The hypotenuse is twice the shorter leg.', '$c = 2 \\cdot 5 = 10$'] },
  { id: 'c7-6-3', chapter: 'ch7', section: '7-6', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 7, b: 12.12, c: 14, hide: ['a', 'b'] }, prompt: 'A 30-60-90 triangle has hypotenuse 14. Find the longer leg to two decimal places.', answer: 12.12, tolerance: 0.05,
    solution: ['Shorter leg first: $x = 14 \\div 2 = 7$', 'Longer leg: $x\\sqrt{3} = 7\\sqrt{3}$', '$7\\sqrt{3} \\approx 12.12$'] },

  // ---- Chapter 7 problems (full solutions)
  { id: 'p7-1', chapter: 'ch7', section: '7-1', set: 'chapter', type: 'numeric', prompt: 'Find the geometric mean of 8 and 18.', answer: 12, tolerance: 0.05,
    solution: ['Write the proportion. $\\frac{8}{x} = \\frac{x}{18}$', 'Cross multiply. $x^2 = 8 \\cdot 18 = 144$', 'Take the positive square root. $x = 12$'] },
  { id: 'p7-2', chapter: 'ch7', section: '7-2', set: 'chapter', type: 'diagram', figure: { kind: 'triangle', a: 20, b: 15, c: 25, hide: ['a', 'b'] }, prompt: 'Triangle $ACB$ has its right angle at $C$. The altitude from $C$ meets $\\overline{AB}$ at $D$. $AD = 9$ and $DB = 16$. Find the altitude $CD$.', answer: 12, tolerance: 0.05,
    solution: ['The altitude to the hypotenuse is the geometric mean of the two segments (Theorem 7.2).', '$CD^2 = AD \\cdot DB = 9 \\cdot 16 = 144$', '$CD = \\sqrt{144} = 12$', 'Check with Theorem 7.3: $AC^2 = 25 \\cdot 9 = 225$, so $AC = 15$. $BC^2 = 25 \\cdot 16 = 400$, so $BC = 20$. And $15^2 + 20^2 = 25^2$.'] },
  { id: 'p7-3', chapter: 'ch7', section: '7-3', set: 'chapter', type: 'numeric', prompt: 'A 10-foot ladder leans against a wall. Its foot is 6 feet from the wall. How high up the wall does the ladder reach?', answer: 8, tolerance: 0.5, unit: 'ft',
    solution: ['The ladder, the wall, and the ground form a right triangle. The ladder is the hypotenuse.', 'Use Theorem 7.4. $h^2 = 10^2 - 6^2 = 100 - 36 = 64$', '$h = \\sqrt{64} = 8$ feet'] },
  { id: 'p7-4', chapter: 'ch7', section: '7-4', set: 'chapter', type: 'mc', prompt: 'A right triangle has legs 24 and 45. Find the hypotenuse.', choices: ['48', '51', '54', '69'], answer: 1,
    solution: ['Divide both legs by 3. You get 8 and 15.', '8-15-17 is a triple, so 24-45-51 is a triple.', 'Check: $24^2 + 45^2 = 576 + 2025 = 2601 = 51^2$.', 'The hypotenuse is 51.'] },
  { id: 'p7-5', chapter: 'ch7', section: '7-5', set: 'chapter', type: 'mc', prompt: 'Classify the triangle with sides 7, 9, and 12.', choices: ['Acute', 'Right', 'Obtuse', 'Not a triangle'], answer: 2,
    solution: ['$7 + 9 = 16 > 12$, so it is a triangle.', 'The longest side is 12. $c^2 = 144$', '$a^2 + b^2 = 49 + 81 = 130$', '$144 > 130$, so by Theorem 7.7 the triangle is obtuse.'] },
  { id: 'p7-6', chapter: 'ch7', section: '7-6', set: 'chapter', type: 'numeric', prompt: 'A square has sides of 6. Find the length of a diagonal to two decimal places.', answer: 8.49, tolerance: 0.05,
    solution: ['A diagonal cuts the square into two isosceles right triangles.', 'Each leg is 6. Use Theorem 7.8.', 'Diagonal $= 6\\sqrt{2} \\approx 8.49$'] },

  // ---- Chapter 7 supplemental (answers only)
  { id: 's7-1', chapter: 'ch7', section: '7-1', set: 'supplemental', type: 'numeric', prompt: 'Find the geometric mean of 5 and 20.', answer: 10, tolerance: 0.05 },
  { id: 's7-2', chapter: 'ch7', section: '7-2', set: 'supplemental', type: 'numeric', prompt: 'The altitude to the hypotenuse of a right triangle cuts the hypotenuse into segments of 6 and 24. Find the altitude.', answer: 12, tolerance: 0.05 },
  { id: 's7-3', chapter: 'ch7', section: '7-3', set: 'supplemental', type: 'numeric', prompt: 'A right triangle has legs 3 and 5. Find the hypotenuse to two decimal places.', answer: 5.83, tolerance: 0.05 },
  { id: 's7-4', chapter: 'ch7', section: '7-4', set: 'supplemental', type: 'numeric', prompt: 'A right triangle has legs 30 and 72. Use a Pythagorean triple to find the hypotenuse.', answer: 78, tolerance: 0.5 },
  { id: 's7-5', chapter: 'ch7', section: '7-5', set: 'supplemental', type: 'mc', prompt: 'Classify the triangle with sides 8, 9, and 12.', choices: ['Acute', 'Right', 'Obtuse', 'Not a triangle'], answer: 0 },
  { id: 's7-6', chapter: 'ch7', section: '7-6', set: 'supplemental', type: 'numeric', prompt: 'A 30-60-90 triangle has a longer leg of 9. Find the hypotenuse to two decimal places.', answer: 10.39, tolerance: 0.05 },

  // ---- Chapter 7 exam bank
  { id: 'b7-1', chapter: 'ch7', section: '7-3', set: 'bank', type: 'numeric', prompt: 'A right triangle has hypotenuse 26 and one leg 10. Find the other leg.', answer: 24, tolerance: 0.5,
    solution: ['$a^2 = 26^2 - 10^2 = 676 - 100 = 576$', '$a = \\sqrt{576} = 24$'] },
  { id: 'b7-2', chapter: 'ch7', section: '7-6', set: 'bank', type: 'mc', prompt: 'An isosceles right triangle has hypotenuse 12. Find each leg.', choices: ['$6\\sqrt{2}$', '$12\\sqrt{2}$', '$6$', '$6\\sqrt{3}$'], answer: 0,
    solution: ['Divide the hypotenuse by $\\sqrt{2}$. $x = \\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2}$', '$x = 6\\sqrt{2}$'] },
  { id: 'b7-3', chapter: 'ch7', section: '7-2', set: 'bank', type: 'numeric', prompt: 'Triangle $ACB$ has its right angle at $C$. The altitude from $C$ meets $\\overline{AB}$ at $D$. $AD = 4$ and $AB = 16$. Find the leg $AC$.', answer: 8, tolerance: 0.05,
    solution: ['Use Theorem 7.3. Leg $AC$ is the geometric mean of $AB$ and $AD$.', '$AC^2 = AB \\cdot AD = 16 \\cdot 4 = 64$', '$AC = 8$'] },
],

theorems: [
  { id: '7.1', chapter: 'ch7', kind: 'Theorem', name: 'Right Triangle Altitude Theorem', statement: 'The altitude to the hypotenuse of a right triangle forms two triangles that are similar to the original triangle and to each other.', section: '7-2' },
  { id: '7.2', chapter: 'ch7', kind: 'Theorem', name: 'Geometric Mean (Altitude) Theorem', statement: 'The altitude to the hypotenuse is the geometric mean of the two segments of the hypotenuse: $CD^2 = AD \\cdot DB$.', section: '7-2' },
  { id: '7.3', chapter: 'ch7', kind: 'Theorem', name: 'Geometric Mean (Leg) Theorem', statement: 'Each leg of a right triangle is the geometric mean of the hypotenuse and the segment of the hypotenuse adjacent to that leg.', section: '7-2' },
  { id: '7.4', chapter: 'ch7', kind: 'Theorem', name: 'Pythagorean Theorem', statement: 'In a right triangle with legs $a$ and $b$ and hypotenuse $c$, $a^2 + b^2 = c^2$.', section: '7-3' },
  { id: '7.5', chapter: 'ch7', kind: 'Theorem', name: 'Converse of the Pythagorean Theorem', statement: 'If the sides of a triangle satisfy $a^2 + b^2 = c^2$, the triangle is a right triangle with the right angle opposite $c$.', section: '7-3' },
  { id: '7.6', chapter: 'ch7', kind: 'Theorem', name: 'Acute Triangle Theorem', statement: 'If $c$ is the longest side and $c^2 < a^2 + b^2$, the triangle is acute.', section: '7-5' },
  { id: '7.7', chapter: 'ch7', kind: 'Theorem', name: 'Obtuse Triangle Theorem', statement: 'If $c$ is the longest side and $c^2 > a^2 + b^2$, the triangle is obtuse.', section: '7-5' },
  { id: '7.8', chapter: 'ch7', kind: 'Theorem', name: '45-45-90 Triangle Theorem', statement: 'In a 45-45-90 triangle, the hypotenuse is $\\sqrt{2}$ times the length of a leg.', section: '7-6' },
  { id: '7.9', chapter: 'ch7', kind: 'Theorem', name: '30-60-90 Triangle Theorem', statement: 'In a 30-60-90 triangle, the hypotenuse is twice the shorter leg, and the longer leg is $\\sqrt{3}$ times the shorter leg.', section: '7-6' },
],

glossary: [
  { term: 'Geometric mean', def: 'The positive number $x$ with $\\frac{a}{x} = \\frac{x}{b}$, so $x = \\sqrt{ab}$.', section: '7-1' },
  { term: 'Simplest radical form', def: 'A square root with no perfect square factor left under the radical sign.', section: '7-1' },
  { term: 'Altitude to the hypotenuse', def: 'The segment from the right angle of a right triangle perpendicular to the hypotenuse.', section: '7-2' },
  { term: 'Segments of the hypotenuse', def: 'The two pieces of the hypotenuse that the altitude from the right angle makes.', section: '7-2' },
  { term: 'Pythagorean Theorem', def: 'In a right triangle, $a^2 + b^2 = c^2$, where $c$ is the hypotenuse.', section: '7-3' },
  { term: 'Converse of the Pythagorean Theorem', def: 'If $a^2 + b^2 = c^2$ for the sides of a triangle, the triangle is right.', section: '7-3' },
  { term: 'Pythagorean triple', def: 'Three whole numbers $a$, $b$, $c$ with $a^2 + b^2 = c^2$, such as 3-4-5.', section: '7-4' },
  { term: 'Diagonal of a box', def: 'A segment that joins two opposite corners of a box through its inside, $d = \\sqrt{l^2 + w^2 + h^2}$.', section: '7-5' },
  { term: 'Isosceles right triangle', def: 'A right triangle with two equal legs and two $45^\\circ$ angles; sides $x$, $x$, $x\\sqrt{2}$.', section: '7-6' },
  { term: '30-60-90 triangle', def: 'A right triangle with acute angles of $30^\\circ$ and $60^\\circ$; sides $x$, $x\\sqrt{3}$, $2x$.', section: '7-6' },
],
};
