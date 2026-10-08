// Chapter 6: Similar Figures. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch6: ChapterContent = {
chapter: { id: 'ch6', number: 6, title: 'Similar Figures', sections: [
  { id: '6-1', title: 'Ratio and Proportion', kind: 'lesson', built: true, parts: ['Ratio', 'Proportions', 'Means and Extremes'], summary: 'A ratio compares two numbers by division. A proportion says two ratios are equal. The product of the means equals the product of the extremes.', formula: '\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc' },
  { id: '6-2', title: 'Properties of Proportions', kind: 'lesson', built: true, summary: 'A true proportion stays true when you swap the means, swap the extremes, or invert both ratios. You can also add each denominator to its numerator.', formula: '\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a+b}{b} = \\frac{c+d}{d}' },
  { id: '6-3', title: 'Similar Polygons', kind: 'lesson', built: true, summary: 'Similar polygons have the same shape. Corresponding angles are congruent and corresponding sides are proportional. The common ratio of the sides is the scale factor.', formula: 'k = \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC}' },
  { id: '6-4', title: 'Similar Triangles', kind: 'lesson', built: true, summary: 'Two triangles are similar if two angles match (AA), if all three sides are proportional (SSS), or if two sides are proportional and the included angles match (SAS).', formula: '\\angle A \\cong \\angle D,\\ \\angle B \\cong \\angle E \\implies \\triangle ABC \\sim \\triangle DEF' },
  { id: '6-5', title: 'Proportional Parts of Triangles', kind: 'lesson', built: true, summary: 'A line parallel to one side of a triangle divides the other two sides proportionally. Three parallel lines cut two transversals proportionally. An angle bisector divides the opposite side in the ratio of the other two sides.', formula: '\\frac{AD}{DB} = \\frac{AE}{EC}' },
  { id: '6-6', title: 'Proportional Parts of Similar Triangles', kind: 'lesson', built: true, summary: 'In similar triangles, corresponding altitudes, medians, and angle bisectors have the same ratio as corresponding sides.', formula: '\\frac{h_1}{h_2} = \\frac{AB}{DE}' },
  { id: '6-7', title: 'Perimeter and Areas of Similar Triangles', kind: 'lesson', built: true, summary: 'If the scale factor of two similar triangles is k, the ratio of their perimeters is k and the ratio of their areas is k².', formula: '\\frac{P_1}{P_2} = k, \\quad \\frac{A_1}{A_2} = k^2' },
  { id: '6-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '6-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'6-1': {
  intro: [
    'A ratio compares two numbers by division. The ratio of $a$ to $b$ is written $a:b$ or $\\frac{a}{b}$. Write a ratio in lowest terms, the same way you reduce a fraction.',
    'A proportion is an equation that says two ratios are equal. The proportion $\\frac{a}{b} = \\frac{c}{d}$ has four terms. The terms $a$ and $d$ are the extremes. The terms $b$ and $c$ are the means.',
    'Multiply across the equal sign to get the cross products $ad$ and $bc$. In a true proportion, the cross products are equal. This is the Means-Extremes Property. Use it to test a proportion or to find a missing term.',
  ],
  definitions: [
    { term: 'Ratio', text: 'A comparison of two numbers by division, written $a:b$ or $\\frac{a}{b}$.' },
    { term: 'Proportion', text: 'An equation that states two ratios are equal, such as $\\frac{a}{b} = \\frac{c}{d}$.' },
    { term: 'Extremes', text: 'The first and last terms of a proportion, $a$ and $d$ in $\\frac{a}{b} = \\frac{c}{d}$.' },
    { term: 'Means', text: 'The middle terms of a proportion, $b$ and $c$ in $\\frac{a}{b} = \\frac{c}{d}$.' },
    { term: 'Cross products', text: 'The products $ad$ and $bc$ formed from the proportion $\\frac{a}{b} = \\frac{c}{d}$.' },
  ],
  formulas: [
    { label: 'Means-Extremes Property', tex: '\\frac{a}{b} = \\frac{c}{d} \\iff ad = bc' },
  ],
  theorems: ['6.1'],
  examples: [
    { title: 'Example 1 — Simplify a ratio', given: 'Write the ratio $12:18$ in lowest terms.', steps: [
      'Find the greatest common factor of 12 and 18. It is 6.',
      'Divide both terms by 6.',
      '$12:18 = 2:3$',
    ]},
    { title: 'Example 2 — Test a proportion', given: 'Is $\\frac{3}{4} = \\frac{9}{12}$ a true proportion?', steps: [
      'Find the cross products.',
      '$3 \\cdot 12 = 36$ and $4 \\cdot 9 = 36$',
      'The cross products are equal. The proportion is true.',
    ]},
    { title: 'Example 3 — Means and extremes', given: 'Name the means and the extremes of $\\frac{2}{5} = \\frac{6}{15}$. Check that their products are equal.', steps: [
      'The extremes are the outer terms: 2 and 15.',
      'The means are the inner terms: 5 and 6.',
      '$2 \\cdot 15 = 30$ and $5 \\cdot 6 = 30$',
    ]},
  ],
  checks: ['c6-1-1', 'c6-1-2', 'c6-1-3'],
},
'6-2': {
  intro: [
    'A proportion can be rewritten in several equivalent forms. Each form is true when the first one is true. The cross products stay the same in every form.',
    'Start with $\\frac{a}{b} = \\frac{c}{d}$. Swap the means to get $\\frac{a}{c} = \\frac{b}{d}$. Swap the extremes to get $\\frac{d}{b} = \\frac{c}{a}$. Invert both ratios to get $\\frac{b}{a} = \\frac{d}{c}$.',
    'You can also add each denominator to its numerator. From $\\frac{a}{b} = \\frac{c}{d}$ you get $\\frac{a+b}{b} = \\frac{c+d}{d}$. This form is useful when a problem gives a whole side and one of its parts.',
    'To solve a proportion for an unknown, write the cross products and set them equal. Then solve the equation.',
  ],
  definitions: [
    { term: 'Equivalent proportions', text: 'Proportions that are true for the same values, such as $\\frac{a}{b} = \\frac{c}{d}$ and $\\frac{b}{a} = \\frac{d}{c}$.' },
    { term: 'Invert', text: 'To turn a ratio upside down, so $\\frac{a}{b}$ becomes $\\frac{b}{a}$.' },
    { term: 'Solve a proportion', text: 'To find the value of an unknown term that makes the proportion true.' },
  ],
  formulas: [
    { label: 'Swap the means', tex: '\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a}{c} = \\frac{b}{d}' },
    { label: 'Invert both ratios', tex: '\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{b}{a} = \\frac{d}{c}' },
    { label: 'Add the denominators', tex: '\\frac{a}{b} = \\frac{c}{d} \\implies \\frac{a+b}{b} = \\frac{c+d}{d}' },
  ],
  theorems: ['6.1', '6.2', '6.3'],
  examples: [
    { title: 'Example 1 — Add the denominators', given: '$\\frac{a}{b} = \\frac{3}{5}$. Find $\\frac{a+b}{b}$.', steps: [
      'Use the denominator addition property.',
      '$\\frac{a+b}{b} = \\frac{3+5}{5}$',
      '$\\frac{a+b}{b} = \\frac{8}{5}$',
    ]},
    { title: 'Example 2 — Solve a proportion', given: 'Solve $\\frac{x}{6} = \\frac{10}{15}$.', steps: [
      'Set the cross products equal.',
      '$15x = 60$',
      '$x = 4$',
    ]},
    { title: 'Example 3 — Unknown on both sides', given: 'Solve $\\frac{x+2}{3} = \\frac{x}{2}$.', steps: [
      'Set the cross products equal: $2(x+2) = 3x$.',
      '$2x + 4 = 3x$',
      '$x = 4$',
    ]},
  ],
  checks: ['c6-2-1', 'c6-2-2', 'c6-2-3'],
},
'6-3': {
  diagram: 'similar',
  intro: [
    'Two polygons are similar if they have the same shape. They do not need to have the same size. The symbol for similar is $\\sim$.',
    'Similar polygons have two properties. Their corresponding angles are congruent. Their corresponding sides are proportional. The common ratio of the corresponding sides is the scale factor.',
    'A similarity statement lists corresponding vertices in the same order. In $\\triangle ABC \\sim \\triangle DEF$, vertex $A$ corresponds to $D$, $B$ to $E$, and $C$ to $F$. Side $\\overline{AB}$ corresponds to side $\\overline{DE}$.',
    'The diagram shows two similar triangles $ABC$ and $DEF$. Move the slider to change the scale factor $k$ from 0.5 to 3. Drag the vertices of the small triangle to change its shape. Watch the readouts. The three side ratios are always equal to $k$. The three pairs of corresponding angles are always equal.',
  ],
  definitions: [
    { term: 'Similar polygons', text: 'Polygons with congruent corresponding angles and proportional corresponding sides.' },
    { term: 'Scale factor', text: 'The ratio of any two corresponding side lengths of similar polygons.' },
    { term: 'Similarity statement', text: 'A statement such as $\\triangle ABC \\sim \\triangle DEF$ that lists corresponding vertices in order.' },
    { term: 'Corresponding sides', text: 'Sides of two polygons that are in the same position in the similarity statement.' },
  ],
  formulas: [
    { label: 'Scale factor', tex: 'k = \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC}' },
  ],
  theorems: ['6.1'],
  examples: [
    { title: 'Example 1 — Find a missing side', given: 'Quadrilateral $ABCD \\sim$ quadrilateral $EFGH$. $AB = 6$, $EF = 9$, and $BC = 8$. Find $FG$.', steps: [
      'The scale factor from $ABCD$ to $EFGH$ is $\\frac{EF}{AB} = \\frac{9}{6} = 1.5$.',
      'Side $\\overline{FG}$ corresponds to side $\\overline{BC}$.',
      '$FG = 1.5 \\cdot 8 = 12$',
    ]},
    { title: 'Example 2 — Test two rectangles', given: 'One rectangle is 4 by 6. Another is 6 by 9. Are they similar?', steps: [
      'All angles of a rectangle are right angles, so corresponding angles are congruent.',
      'Compare the sides: $\\frac{4}{6} = \\frac{2}{3}$ and $\\frac{6}{9} = \\frac{2}{3}$.',
      'The sides are proportional. The rectangles are similar.',
    ]},
    { title: 'Example 3 — Find an angle', given: '$\\triangle ABC \\sim \\triangle DEF$. $m\\angle A = 50^\\circ$ and $m\\angle B = 60^\\circ$. Find $m\\angle F$.', steps: [
      'The angles of a triangle add to $180^\\circ$.',
      '$m\\angle C = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$',
      'Angle $F$ corresponds to angle $C$, so $m\\angle F = 70^\\circ$.',
    ]},
  ],
  checks: ['c6-3-1', 'c6-3-2', 'c6-3-3'],
},
'6-4': {
  diagram: 'similar',
  intro: [
    'You do not need to check every angle and every side to show that two triangles are similar. Three shortcuts do the job. Each one is a postulate or a theorem.',
    'AA Similarity: if two angles of one triangle are congruent to two angles of another, the triangles are similar. SSS Similarity: if all three pairs of corresponding sides are proportional, the triangles are similar. SAS Similarity: if two pairs of sides are proportional and the included angles are congruent, the triangles are similar.',
    'The diagram shows two similar triangles $ABC$ and $DEF$. Drag a vertex of the small triangle. Watch the angle readouts. Both triangles keep the same three angles, so AA holds. Move the slider to change $k$. Watch the three side ratios stay equal, so SSS holds.',
    'Once you know two triangles are similar, write a proportion with two pairs of corresponding sides. Use cross products to find the missing side.',
  ],
  definitions: [
    { term: 'AA Similarity', text: 'Two triangles are similar if two angles of one are congruent to two angles of the other.' },
    { term: 'SSS Similarity', text: 'Two triangles are similar if all three pairs of corresponding sides are proportional.' },
    { term: 'SAS Similarity', text: 'Two triangles are similar if two pairs of sides are proportional and the included angles are congruent.' },
    { term: 'Included angle', text: 'The angle formed by two sides of a triangle.' },
  ],
  formulas: [
    { label: 'AA Similarity', tex: '\\angle A \\cong \\angle D,\\ \\angle B \\cong \\angle E \\implies \\triangle ABC \\sim \\triangle DEF' },
    { label: 'SSS Similarity', tex: '\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF} \\implies \\triangle ABC \\sim \\triangle DEF' },
    { label: 'SAS Similarity', tex: '\\frac{AB}{DE} = \\frac{AC}{DF},\\ \\angle A \\cong \\angle D \\implies \\triangle ABC \\sim \\triangle DEF' },
  ],
  theorems: ['6.4', '6.5', '6.6'],
  examples: [
    { title: 'Example 1 — Use AA', given: 'In $\\triangle ABC$, $m\\angle A = 40^\\circ$ and $m\\angle B = 75^\\circ$. In $\\triangle DEF$, $m\\angle D = 40^\\circ$ and $m\\angle E = 75^\\circ$. Are the triangles similar?', steps: [
      '$\\angle A \\cong \\angle D$ because both measure $40^\\circ$.',
      '$\\angle B \\cong \\angle E$ because both measure $75^\\circ$.',
      'Two angles match. By AA Similarity, $\\triangle ABC \\sim \\triangle DEF$.',
    ]},
    { title: 'Example 2 — Use SSS', given: 'One triangle has sides 3, 4, and 5. Another has sides 6, 8, and 10. Are they similar?', steps: [
      'Match the shortest sides, then the middle sides, then the longest sides.',
      '$\\frac{3}{6} = \\frac{4}{8} = \\frac{5}{10} = \\frac{1}{2}$',
      'All three ratios are equal. By SSS Similarity, the triangles are similar.',
    ]},
    { title: 'Example 3 — Find a missing side', given: '$\\triangle ABC \\sim \\triangle XYZ$. $AB = 8$, $XY = 12$, and $BC = 10$. Find $YZ$.', steps: [
      'Write a proportion with corresponding sides: $\\frac{AB}{XY} = \\frac{BC}{YZ}$.',
      '$\\frac{8}{12} = \\frac{10}{YZ}$',
      'Cross products: $8 \\cdot YZ = 120$.',
      '$YZ = 15$',
    ]},
  ],
  checks: ['c6-4-1', 'c6-4-2', 'c6-4-3'],
},
'6-5': {
  diagram: 'similar',
  intro: [
    'A line parallel to one side of a triangle cuts the other two sides into proportional segments. This is the Triangle Proportionality Theorem. In $\\triangle ABC$, let $\\overline{DE} \\parallel \\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. Then $\\frac{AD}{DB} = \\frac{AE}{EC}$.',
    'The converse is also true. If a line divides two sides of a triangle proportionally, it is parallel to the third side. Use the converse to test whether two segments are parallel.',
    'Two related results follow. Three parallel lines cut two transversals into proportional segments. An angle bisector of a triangle divides the opposite side into segments proportional to the other two sides.',
    'The diagram shows two similar triangles $ABC$ and $DEF$. Think of the small triangle as the top part of the large one, cut off by a line parallel to the base. Move the slider to change $k$. Watch the side ratios. Each pair of corresponding sides has the ratio $k$, which is why the parallel line divides the sides proportionally.',
  ],
  definitions: [
    { term: 'Proportional segments', text: 'Segments whose lengths form a true proportion.' },
    { term: 'Transversal', text: 'A line that crosses two or more other lines.' },
    { term: 'Angle bisector of a triangle', text: 'A segment from a vertex that cuts the angle into two congruent angles and ends on the opposite side.' },
  ],
  formulas: [
    { label: 'Triangle Proportionality Theorem', tex: '\\overline{DE} \\parallel \\overline{BC} \\implies \\frac{AD}{DB} = \\frac{AE}{EC}' },
    { label: 'Triangle Angle Bisector Theorem', tex: '\\frac{BD}{DC} = \\frac{AB}{AC}' },
  ],
  theorems: ['6.7', '6.8', '6.9', '6.10'],
  examples: [
    { title: 'Example 1 — Parallel line in a triangle', given: 'In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$. $AD = 4$, $DB = 6$, and $AE = 6$. Find $EC$.', steps: [
      'Use the Triangle Proportionality Theorem: $\\frac{AD}{DB} = \\frac{AE}{EC}$.',
      '$\\frac{4}{6} = \\frac{6}{EC}$',
      'Cross products: $4 \\cdot EC = 36$.',
      '$EC = 9$',
    ]},
    { title: 'Example 2 — Three parallel lines', given: 'Three parallel lines cut two transversals. On the first transversal the segments are 3 and 5. On the second, the first segment is 6. Find the second segment $x$.', steps: [
      'The parallel lines divide the transversals proportionally.',
      '$\\frac{3}{5} = \\frac{6}{x}$',
      'Cross products: $3x = 30$.',
      '$x = 10$',
    ]},
    { title: 'Example 3 — Angle bisector', given: 'In $\\triangle ABC$, $\\overline{AD}$ bisects $\\angle A$ and $D$ is on $\\overline{BC}$. $AB = 8$, $AC = 12$, and $BD = 6$. Find $DC$.', steps: [
      'Use the Triangle Angle Bisector Theorem: $\\frac{BD}{DC} = \\frac{AB}{AC}$.',
      '$\\frac{6}{DC} = \\frac{8}{12}$',
      'Cross products: $8 \\cdot DC = 72$.',
      '$DC = 9$',
    ]},
  ],
  checks: ['c6-5-1', 'c6-5-2', 'c6-5-3'],
},
'6-6': {
  diagram: 'similar',
  intro: [
    'Similar triangles have more than proportional sides. Their other corresponding parts are proportional too. An altitude, a median, or an angle bisector in one triangle has a matching part in the other.',
    'The ratio of two corresponding altitudes equals the ratio of two corresponding sides. The same is true for corresponding medians and corresponding angle bisectors. Each ratio equals the scale factor $k$.',
    'The diagram shows two similar triangles $ABC$ and $DEF$. Move the slider to change $k$. Watch the side ratios, which all equal $k$. Drag a vertex of the small triangle. The large triangle follows, so every part of it, including each altitude, is $k$ times the matching part.',
  ],
  definitions: [
    { term: 'Altitude of a triangle', text: 'A segment from a vertex perpendicular to the line that contains the opposite side.' },
    { term: 'Median of a triangle', text: 'A segment from a vertex to the midpoint of the opposite side.' },
    { term: 'Corresponding parts', text: 'Segments in two similar triangles that start at corresponding vertices and play the same role.' },
  ],
  formulas: [
    { label: 'Corresponding altitudes', tex: '\\frac{h_1}{h_2} = \\frac{AB}{DE} = k' },
    { label: 'Corresponding medians', tex: '\\frac{m_1}{m_2} = \\frac{AB}{DE} = k' },
    { label: 'Corresponding angle bisectors', tex: '\\frac{t_1}{t_2} = \\frac{AB}{DE} = k' },
  ],
  theorems: ['6.11', '6.12', '6.13'],
  examples: [
    { title: 'Example 1 — Altitudes', given: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 6$ and $DE = 9$. The altitude from $C$ is 4. Find the altitude from $F$.', steps: [
      'Corresponding altitudes have the same ratio as corresponding sides.',
      '$\\frac{6}{9} = \\frac{4}{x}$',
      'Cross products: $6x = 36$.',
      '$x = 6$',
    ]},
    { title: 'Example 2 — Medians', given: 'Two similar triangles have corresponding medians of 5 and 8. A side of the first triangle is 10. Find the corresponding side of the second.', steps: [
      'Corresponding medians have the same ratio as corresponding sides.',
      '$\\frac{5}{8} = \\frac{10}{x}$',
      'Cross products: $5x = 80$.',
      '$x = 16$',
    ]},
    { title: 'Example 3 — Angle bisectors', given: 'Two similar triangles have corresponding sides of 9 and 15. An angle bisector of the large triangle is 10. Find the corresponding angle bisector of the small triangle.', steps: [
      'Corresponding angle bisectors have the same ratio as corresponding sides.',
      '$\\frac{9}{15} = \\frac{x}{10}$',
      'Cross products: $15x = 90$.',
      '$x = 6$',
    ]},
  ],
  checks: ['c6-6-1', 'c6-6-2', 'c6-6-3'],
},
'6-7': {
  diagram: 'similar',
  intro: [
    'Let two triangles be similar with scale factor $k$. Every side of the second triangle is $k$ times the matching side of the first. So the perimeter of the second is $k$ times the perimeter of the first.',
    'Area works differently. The base is multiplied by $k$ and the height is also multiplied by $k$. So the area is multiplied by $k \\cdot k = k^2$. The ratio of the areas is the square of the ratio of the sides.',
    'The diagram shows two similar triangles $ABC$ and $DEF$. Move the slider to change $k$. Watch the two bottom readouts. The ratio of perimeters is always $k$. The ratio of areas is always $k^2$. Set $k$ to 1, then double it to 2. Watch the area ratio become 4.',
  ],
  definitions: [
    { term: 'Ratio of perimeters', text: 'For similar triangles with scale factor $k$, the perimeters have the ratio $k$.' },
    { term: 'Ratio of areas', text: 'For similar triangles with scale factor $k$, the areas have the ratio $k^2$.' },
  ],
  formulas: [
    { label: 'Perimeters of Similar Triangles', tex: '\\frac{P_2}{P_1} = \\frac{DE}{AB} = k' },
    { label: 'Areas of Similar Triangles', tex: '\\frac{A_2}{A_1} = \\left(\\frac{DE}{AB}\\right)^2 = k^2' },
  ],
  theorems: ['6.14', '6.15'],
  examples: [
    { title: 'Example 1 — Perimeter', given: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 3$ and $DE = 4$. The perimeter of $\\triangle ABC$ is 15. Find the perimeter of $\\triangle DEF$.', steps: [
      'The scale factor is $k = \\frac{DE}{AB} = \\frac{4}{3}$.',
      'The ratio of perimeters is also $\\frac{4}{3}$.',
      '$P = \\frac{4}{3} \\cdot 15 = 20$',
    ]},
    { title: 'Example 2 — Area from the scale factor', given: 'Two similar triangles have corresponding sides in the ratio $2:5$. The area of the small triangle is 12. Find the area of the large triangle.', steps: [
      'The ratio of areas is the square of the ratio of sides.',
      '$\\frac{A_{small}}{A_{large}} = \\left(\\frac{2}{5}\\right)^2 = \\frac{4}{25}$',
      '$\\frac{12}{A_{large}} = \\frac{4}{25}$, so $4 \\cdot A_{large} = 300$.',
      '$A_{large} = 75$',
    ]},
    { title: 'Example 3 — Sides from the areas', given: 'Two similar triangles have areas 16 and 36. The perimeter of the small triangle is 14. Find the perimeter of the large triangle.', steps: [
      'The ratio of areas is $\\frac{16}{36} = \\frac{4}{9}$.',
      'The ratio of sides is the square root: $\\frac{2}{3}$.',
      'The ratio of perimeters is also $\\frac{2}{3}$: $\\frac{14}{P} = \\frac{2}{3}$.',
      'Cross products: $2P = 42$, so $P = 21$.',
    ]},
  ],
  checks: ['c6-7-1', 'c6-7-2', 'c6-7-3'],
},
},

questions: [
  // ---- 6-1 checks
  { id: 'c6-1-1', chapter: 'ch6', section: '6-1', set: 'check', type: 'mc', prompt: 'Write the ratio 15 to 25 in lowest terms.', choices: ['$3:5$', '$5:3$', '$1:10$', '$2:3$'], answer: 0,
    solution: ['The greatest common factor of 15 and 25 is 5.', 'Divide both terms by 5: $15:25 = 3:5$.'] },
  { id: 'c6-1-2', chapter: 'ch6', section: '6-1', set: 'check', type: 'numeric', prompt: 'Solve the proportion $\\frac{4}{7} = \\frac{12}{x}$.', answer: 21, tolerance: 0.5,
    solution: ['Set the cross products equal: $4x = 7 \\cdot 12$.', '$4x = 84$', '$x = 21$'] },
  { id: 'c6-1-3', chapter: 'ch6', section: '6-1', set: 'check', type: 'mc', prompt: 'In the proportion $\\frac{3}{8} = \\frac{9}{24}$, which numbers are the extremes?', choices: ['3 and 24', '8 and 9', '3 and 9', '8 and 24'], answer: 0,
    solution: ['The extremes are the first and last terms.', 'In $\\frac{3}{8} = \\frac{9}{24}$ the extremes are 3 and 24. The means are 8 and 9.'] },
  // ---- 6-2 checks
  { id: 'c6-2-1', chapter: 'ch6', section: '6-2', set: 'check', type: 'mc', prompt: 'Suppose $\\frac{a}{b} = \\frac{c}{d}$. Which statement is NOT always true?', choices: ['$\\frac{a}{c} = \\frac{b}{d}$', '$\\frac{b}{a} = \\frac{d}{c}$', '$\\frac{a}{d} = \\frac{c}{b}$', '$ad = bc$'], answer: 2,
    solution: ['Swapping the means, inverting, and cross products all give true forms.', '$\\frac{a}{d} = \\frac{c}{b}$ has cross products $ab$ and $cd$. These are not the same as $ad$ and $bc$.', 'Test with $\\frac{1}{2} = \\frac{3}{6}$: $\\frac{1}{6} \\neq \\frac{3}{2}$.'] },
  { id: 'c6-2-2', chapter: 'ch6', section: '6-2', set: 'check', type: 'numeric', prompt: 'Solve $\\frac{5}{x} = \\frac{20}{28}$.', answer: 7, tolerance: 0.5,
    solution: ['Set the cross products equal: $20x = 5 \\cdot 28$.', '$20x = 140$', '$x = 7$'] },
  { id: 'c6-2-3', chapter: 'ch6', section: '6-2', set: 'check', type: 'numeric', prompt: 'Suppose $\\frac{a}{b} = \\frac{4}{5}$. Find $\\frac{a+b}{b}$ as a decimal.', answer: 1.8, tolerance: 0.05,
    solution: ['Add each denominator to its numerator: $\\frac{a+b}{b} = \\frac{4+5}{5}$.', '$\\frac{9}{5} = 1.8$'] },
  // ---- 6-3 checks
  { id: 'c6-3-1', chapter: 'ch6', section: '6-3', set: 'check', type: 'numeric', prompt: 'Pentagon $ABCDE \\sim$ pentagon $PQRST$. $AB = 4$, $PQ = 10$, and $CD = 6$. Find $RS$.', answer: 15, tolerance: 0.5,
    solution: ['The scale factor from $ABCDE$ to $PQRST$ is $\\frac{PQ}{AB} = \\frac{10}{4} = 2.5$.', 'Side $\\overline{RS}$ corresponds to side $\\overline{CD}$.', '$RS = 2.5 \\cdot 6 = 15$'] },
  { id: 'c6-3-2', chapter: 'ch6', section: '6-3', set: 'check', type: 'mc', prompt: 'Two polygons are similar. Which statement must be true?', choices: ['Corresponding sides are congruent.', 'Corresponding angles are congruent.', 'The polygons have the same perimeter.', 'The polygons have the same area.'], answer: 1,
    solution: ['Similar polygons have congruent corresponding angles and proportional corresponding sides.', 'The sides, perimeters, and areas are equal only when the scale factor is 1.'] },
  { id: 'c6-3-3', chapter: 'ch6', section: '6-3', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 7, b: 9, c: 5 }, prompt: 'In the figure, $AB = 5$, $BC = 7$, and $AC = 9$. $\\triangle ABC \\sim \\triangle DEF$ with scale factor 3 from $ABC$ to $DEF$. Find $EF$.', answer: 21, tolerance: 0.5,
    solution: ['Side $\\overline{EF}$ corresponds to side $\\overline{BC}$.', 'Multiply by the scale factor: $EF = 3 \\cdot 7 = 21$.'] },
  // ---- 6-4 checks
  { id: 'c6-4-1', chapter: 'ch6', section: '6-4', set: 'check', type: 'mc', prompt: '$\\triangle PQR$ has angles of $35^\\circ$ and $65^\\circ$. $\\triangle STU$ has angles of $65^\\circ$ and $80^\\circ$. Are the triangles similar?', choices: ['Yes, by AA Similarity.', 'Yes, by SSS Similarity.', 'No, the angles are different.', 'There is not enough information.'], answer: 0,
    solution: ['The third angle of $\\triangle PQR$ is $180^\\circ - 35^\\circ - 65^\\circ = 80^\\circ$.', 'The third angle of $\\triangle STU$ is $180^\\circ - 65^\\circ - 80^\\circ = 35^\\circ$.', 'Both triangles have angles $35^\\circ$, $65^\\circ$, and $80^\\circ$. By AA Similarity they are similar.'] },
  { id: 'c6-4-2', chapter: 'ch6', section: '6-4', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 8, b: 10, c: 6 }, prompt: 'In the figure, $AB = 6$, $BC = 8$, and $AC = 10$. $\\triangle ABC \\sim \\triangle DEF$ and $DE = 9$. Find $DF$.', answer: 15, tolerance: 0.5,
    solution: ['Write a proportion with corresponding sides: $\\frac{AB}{DE} = \\frac{AC}{DF}$.', '$\\frac{6}{9} = \\frac{10}{DF}$', 'Cross products: $6 \\cdot DF = 90$, so $DF = 15$.'] },
  { id: 'c6-4-3', chapter: 'ch6', section: '6-4', set: 'check', type: 'mc', prompt: 'A triangle has sides 5, 12, and 13. Which set of side lengths makes a triangle similar to it?', choices: ['10, 24, 26', '7, 14, 15', '5, 12, 14', '10, 12, 13'], answer: 0,
    solution: ['Use SSS Similarity. Compare the sides in order.', '$\\frac{5}{10} = \\frac{12}{24} = \\frac{13}{26} = \\frac{1}{2}$', 'All three ratios are equal, so the triangles are similar.'] },
  // ---- 6-5 checks
  { id: 'c6-5-1', chapter: 'ch6', section: '6-5', set: 'check', type: 'numeric', prompt: 'In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. $AD = 5$, $DB = 10$, and $AE = 7$. Find $EC$.', answer: 14, tolerance: 0.5,
    solution: ['Use the Triangle Proportionality Theorem: $\\frac{AD}{DB} = \\frac{AE}{EC}$.', '$\\frac{5}{10} = \\frac{7}{EC}$', 'Cross products: $5 \\cdot EC = 70$, so $EC = 14$.'] },
  { id: 'c6-5-2', chapter: 'ch6', section: '6-5', set: 'check', type: 'mc', prompt: 'In $\\triangle ABC$, $D$ is on $\\overline{AB}$ and $E$ is on $\\overline{AC}$. $AD = 6$, $DB = 9$, $AE = 8$, and $EC = 12$. Is $\\overline{DE} \\parallel \\overline{BC}$?', choices: ['Yes, because $\\frac{6}{9} = \\frac{8}{12}$.', 'No, because $6 \\cdot 12 \\neq 9 \\cdot 8$.', 'No, because the segments are not equal.', 'There is not enough information.'], answer: 0,
    solution: ['Test the proportion $\\frac{AD}{DB} = \\frac{AE}{EC}$.', '$\\frac{6}{9} = \\frac{2}{3}$ and $\\frac{8}{12} = \\frac{2}{3}$. The sides are divided proportionally.', 'By the converse of the Triangle Proportionality Theorem, $\\overline{DE} \\parallel \\overline{BC}$.'] },
  { id: 'c6-5-3', chapter: 'ch6', section: '6-5', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 20, b: 15, c: 10 }, prompt: 'In the figure, $AB = 10$, $AC = 15$, and $BC = 20$. $\\overline{AD}$ bisects $\\angle A$ and $D$ is on $\\overline{BC}$. Find $BD$.', answer: 8, tolerance: 0.5,
    solution: ['By the Triangle Angle Bisector Theorem, $\\frac{BD}{DC} = \\frac{AB}{AC} = \\frac{10}{15} = \\frac{2}{3}$.', 'So $BD$ is 2 parts and $DC$ is 3 parts of $BC = 20$. Each part is $20 \\div 5 = 4$.', '$BD = 2 \\cdot 4 = 8$'] },
  // ---- 6-6 checks
  { id: 'c6-6-1', chapter: 'ch6', section: '6-6', set: 'check', type: 'numeric', prompt: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 4$ and $DE = 10$. An altitude of $\\triangle ABC$ is 3. Find the corresponding altitude of $\\triangle DEF$.', answer: 7.5, tolerance: 0.05,
    solution: ['Corresponding altitudes have the same ratio as corresponding sides.', '$\\frac{4}{10} = \\frac{3}{x}$', 'Cross products: $4x = 30$, so $x = 7.5$.'] },
  { id: 'c6-6-2', chapter: 'ch6', section: '6-6', set: 'check', type: 'mc', prompt: 'Two similar triangles have corresponding medians in the ratio $3:5$. What is the ratio of their corresponding sides?', choices: ['$3:5$', '$5:3$', '$9:25$', '$3:10$'], answer: 0,
    solution: ['Corresponding medians have the same ratio as corresponding sides.', 'The ratio of the sides is $3:5$.'] },
  { id: 'c6-6-3', chapter: 'ch6', section: '6-6', set: 'check', type: 'numeric', prompt: 'Two similar triangles have corresponding altitudes of 6 and 9. A side of the first triangle is 8. Find the corresponding side of the second triangle.', answer: 12, tolerance: 0.5,
    solution: ['Corresponding altitudes have the same ratio as corresponding sides.', '$\\frac{6}{9} = \\frac{8}{x}$', 'Cross products: $6x = 72$, so $x = 12$.'] },
  // ---- 6-7 checks
  { id: 'c6-7-1', chapter: 'ch6', section: '6-7', set: 'check', type: 'numeric', prompt: 'Two similar triangles have corresponding sides in the ratio $2:3$. The perimeter of the small triangle is 18. Find the perimeter of the large triangle.', answer: 27, tolerance: 0.5,
    solution: ['The ratio of perimeters equals the ratio of sides.', '$\\frac{18}{P} = \\frac{2}{3}$', 'Cross products: $2P = 54$, so $P = 27$.'] },
  { id: 'c6-7-2', chapter: 'ch6', section: '6-7', set: 'check', type: 'numeric', prompt: '$\\triangle ABC \\sim \\triangle DEF$ with scale factor 3 from $ABC$ to $DEF$. The area of $\\triangle ABC$ is 7. Find the area of $\\triangle DEF$.', answer: 63, tolerance: 0.5, unit: 'units²',
    solution: ['The ratio of areas is the square of the scale factor: $3^2 = 9$.', 'Area of $\\triangle DEF = 9 \\cdot 7 = 63$.'] },
  { id: 'c6-7-3', chapter: 'ch6', section: '6-7', set: 'check', type: 'mc', prompt: 'Two similar triangles have areas 25 and 100. What is the ratio of their corresponding sides?', choices: ['$1:4$', '$1:3$', '$1:2$', '$2:5$'], answer: 2,
    solution: ['The ratio of areas is $\\frac{25}{100} = \\frac{1}{4}$.', 'The ratio of sides is the square root: $\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$.', 'The sides are in the ratio $1:2$.'] },

  // ---- Chapter 6 problems (full solutions)
  { id: 'p6-1', chapter: 'ch6', section: '6-1', set: 'chapter', type: 'numeric', prompt: 'A map uses the scale 2 cm : 15 km. Two towns are 7 cm apart on the map. Find the real distance between them.', answer: 52.5, tolerance: 0.05, unit: 'km',
    solution: ['Write a proportion that compares map distance to real distance: $\\frac{2}{15} = \\frac{7}{x}$.', 'Set the cross products equal: $2x = 15 \\cdot 7$.', '$2x = 105$', '$x = 52.5$ km'] },
  { id: 'p6-2', chapter: 'ch6', section: '6-2', set: 'chapter', type: 'mc', prompt: 'Solve $\\frac{x-1}{4} = \\frac{x+3}{6}$.', choices: ['3', '6', '9', '12'], answer: 2,
    solution: ['Set the cross products equal: $6(x-1) = 4(x+3)$.', '$6x - 6 = 4x + 12$', '$2x = 18$', '$x = 9$. Check: $\\frac{8}{4} = 2$ and $\\frac{12}{6} = 2$.'] },
  { id: 'p6-3', chapter: 'ch6', section: '6-4', set: 'chapter', type: 'diagram', figure: { kind: 'triangle', a: 12, b: 15, c: 9 }, prompt: 'In the figure, $AB = 9$, $BC = 12$, and $AC = 15$. $\\triangle ABC \\sim \\triangle DEF$ and $EF = 20$. Find $DE$.', answer: 15, tolerance: 0.5,
    solution: ['Side $\\overline{EF}$ corresponds to side $\\overline{BC}$. Side $\\overline{DE}$ corresponds to side $\\overline{AB}$.', 'Write a proportion: $\\frac{DE}{AB} = \\frac{EF}{BC}$.', '$\\frac{DE}{9} = \\frac{20}{12}$', 'Cross products: $12 \\cdot DE = 180$, so $DE = 15$.'] },
  { id: 'p6-4', chapter: 'ch6', section: '6-5', set: 'chapter', type: 'numeric', prompt: 'In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$. $AD = 6$, $AB = 15$, and $AE = 8$. Find $AC$.', answer: 20, tolerance: 0.5,
    solution: ['First find $DB$: $DB = AB - AD = 15 - 6 = 9$.', 'Use the Triangle Proportionality Theorem: $\\frac{AD}{DB} = \\frac{AE}{EC}$.', '$\\frac{6}{9} = \\frac{8}{EC}$, so $6 \\cdot EC = 72$ and $EC = 12$.', '$AC = AE + EC = 8 + 12 = 20$'] },
  { id: 'p6-5', chapter: 'ch6', section: '6-6', set: 'chapter', type: 'numeric', prompt: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 10$ and $DE = 25$. The altitude from $C$ to $\\overline{AB}$ is 6. Find the altitude from $F$ to $\\overline{DE}$.', answer: 15, tolerance: 0.5,
    solution: ['Corresponding altitudes have the same ratio as corresponding sides.', '$\\frac{AB}{DE} = \\frac{6}{x}$, so $\\frac{10}{25} = \\frac{6}{x}$.', 'Cross products: $10x = 150$.', '$x = 15$'] },
  { id: 'p6-6', chapter: 'ch6', section: '6-7', set: 'chapter', type: 'numeric', prompt: '$\\triangle ABC \\sim \\triangle DEF$ with scale factor $\\frac{5}{2}$ from $ABC$ to $DEF$. The area of $\\triangle ABC$ is 8. Find the area of $\\triangle DEF$.', answer: 50, tolerance: 0.5, unit: 'units²',
    solution: ['The ratio of areas is the square of the scale factor.', '$k^2 = \\left(\\frac{5}{2}\\right)^2 = \\frac{25}{4}$', 'Area of $\\triangle DEF = \\frac{25}{4} \\cdot 8 = 50$.'] },

  // ---- Chapter 6 supplemental (answers only)
  { id: 's6-1', chapter: 'ch6', section: '6-1', set: 'supplemental', type: 'numeric', prompt: 'Solve $\\frac{9}{x} = \\frac{6}{10}$.', answer: 15, tolerance: 0.5 },
  { id: 's6-2', chapter: 'ch6', section: '6-3', set: 'supplemental', type: 'numeric', prompt: 'Quadrilateral $ABCD \\sim$ quadrilateral $WXYZ$. $AB = 8$, $WX = 12$, and $BC = 10$. Find $XY$.', answer: 15, tolerance: 0.5 },
  { id: 's6-3', chapter: 'ch6', section: '6-4', set: 'supplemental', type: 'mc', prompt: 'A triangle has angles of $40^\\circ$ and $60^\\circ$. Which triangle is similar to it?', choices: ['A triangle with angles of $40^\\circ$ and $70^\\circ$', 'A triangle with angles of $60^\\circ$ and $80^\\circ$', 'A triangle with two angles of $60^\\circ$', 'A triangle with two angles of $80^\\circ$'], answer: 1 },
  { id: 's6-4', chapter: 'ch6', section: '6-5', set: 'supplemental', type: 'diagram', figure: { kind: 'triangle', a: 10, b: 6, c: 9 }, prompt: 'In the figure, $AB = 9$, $AC = 6$, and $BC = 10$. $\\overline{AD}$ bisects $\\angle A$ and $D$ is on $\\overline{BC}$. Find $BD$.', answer: 6, tolerance: 0.5 },
  { id: 's6-5', chapter: 'ch6', section: '6-6', set: 'supplemental', type: 'numeric', prompt: 'Two similar triangles have corresponding medians of 4 and 6. A side of the first triangle is 10. Find the corresponding side of the second triangle.', answer: 15, tolerance: 0.5 },
  { id: 's6-6', chapter: 'ch6', section: '6-7', set: 'supplemental', type: 'numeric', prompt: 'Two similar triangles have perimeters 12 and 30. The area of the small triangle is 10. Find the area of the large triangle.', answer: 62.5, tolerance: 0.05, unit: 'units²' },

  // ---- Chapter 6 exam bank
  { id: 'b6-1', chapter: 'ch6', section: '6-2', set: 'bank', type: 'numeric', prompt: 'Solve $\\frac{3}{x+2} = \\frac{6}{16}$.', answer: 6, tolerance: 0.5,
    solution: ['Set the cross products equal: $3 \\cdot 16 = 6(x+2)$.', '$48 = 6x + 12$', '$6x = 36$, so $x = 6$.'] },
  { id: 'b6-2', chapter: 'ch6', section: '6-4', set: 'bank', type: 'mc', prompt: '$\\triangle ABC \\sim \\triangle DEF$. $AB = 4$, $BC = 6$, and $DE = 10$. Find $EF$.', choices: ['12', '15', '20', '24'], answer: 1,
    solution: ['Write a proportion with corresponding sides: $\\frac{AB}{DE} = \\frac{BC}{EF}$.', '$\\frac{4}{10} = \\frac{6}{EF}$', 'Cross products: $4 \\cdot EF = 60$, so $EF = 15$.'] },
  { id: 'b6-3', chapter: 'ch6', section: '6-7', set: 'bank', type: 'numeric', prompt: 'Two similar triangles have corresponding sides in the ratio $3:5$. The area of the large triangle is 75. Find the area of the small triangle.', answer: 27, tolerance: 0.5, unit: 'units²',
    solution: ['The ratio of areas is the square of the ratio of sides: $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.', '$\\frac{A}{75} = \\frac{9}{25}$', 'Cross products: $25A = 675$, so $A = 27$.'] },
],

theorems: [
  { id: '6.1', chapter: 'ch6', kind: 'Theorem', name: 'Means-Extremes Property', statement: 'In a proportion, the product of the means equals the product of the extremes: if $\\frac{a}{b} = \\frac{c}{d}$, then $ad = bc$.', section: '6-1' },
  { id: '6.2', chapter: 'ch6', kind: 'Theorem', name: 'Exchange Properties of Proportions', statement: 'If $\\frac{a}{b} = \\frac{c}{d}$, then $\\frac{b}{a} = \\frac{d}{c}$, $\\frac{a}{c} = \\frac{b}{d}$, and $\\frac{d}{b} = \\frac{c}{a}$.', section: '6-2' },
  { id: '6.3', chapter: 'ch6', kind: 'Theorem', name: 'Denominator Addition Property', statement: 'If $\\frac{a}{b} = \\frac{c}{d}$, then $\\frac{a+b}{b} = \\frac{c+d}{d}$.', section: '6-2' },
  { id: '6.4', chapter: 'ch6', kind: 'Postulate', name: 'AA Similarity Postulate', statement: 'If two angles of one triangle are congruent to two angles of another triangle, then the triangles are similar.', section: '6-4' },
  { id: '6.5', chapter: 'ch6', kind: 'Theorem', name: 'SSS Similarity Theorem', statement: 'If the three sides of one triangle are proportional to the three sides of another triangle, then the triangles are similar.', section: '6-4' },
  { id: '6.6', chapter: 'ch6', kind: 'Theorem', name: 'SAS Similarity Theorem', statement: 'If an angle of one triangle is congruent to an angle of another, and the sides that include these angles are proportional, then the triangles are similar.', section: '6-4' },
  { id: '6.7', chapter: 'ch6', kind: 'Theorem', name: 'Triangle Proportionality Theorem', statement: 'If a line is parallel to one side of a triangle and intersects the other two sides, then it divides those sides proportionally.', section: '6-5' },
  { id: '6.8', chapter: 'ch6', kind: 'Theorem', name: 'Converse of the Triangle Proportionality Theorem', statement: 'If a line divides two sides of a triangle proportionally, then it is parallel to the third side.', section: '6-5' },
  { id: '6.9', chapter: 'ch6', kind: 'Theorem', name: 'Parallel Lines Proportionality Corollary', statement: 'If three parallel lines intersect two transversals, then they divide the transversals proportionally.', section: '6-5' },
  { id: '6.10', chapter: 'ch6', kind: 'Theorem', name: 'Triangle Angle Bisector Theorem', statement: 'An angle bisector of a triangle divides the opposite side into segments proportional to the other two sides.', section: '6-5' },
  { id: '6.11', chapter: 'ch6', kind: 'Theorem', name: 'Proportional Altitudes', statement: 'If two triangles are similar, then corresponding altitudes have the same ratio as corresponding sides.', section: '6-6' },
  { id: '6.12', chapter: 'ch6', kind: 'Theorem', name: 'Proportional Medians', statement: 'If two triangles are similar, then corresponding medians have the same ratio as corresponding sides.', section: '6-6' },
  { id: '6.13', chapter: 'ch6', kind: 'Theorem', name: 'Proportional Angle Bisectors', statement: 'If two triangles are similar, then corresponding angle bisectors have the same ratio as corresponding sides.', section: '6-6' },
  { id: '6.14', chapter: 'ch6', kind: 'Theorem', name: 'Perimeters of Similar Triangles', statement: 'If two triangles are similar, then the ratio of their perimeters equals the ratio of any two corresponding sides.', section: '6-7' },
  { id: '6.15', chapter: 'ch6', kind: 'Theorem', name: 'Areas of Similar Triangles', statement: 'If two triangles are similar with scale factor $k$, then the ratio of their areas is $k^2$.', section: '6-7' },
],

glossary: [
  { term: 'Ratio', def: 'A comparison of two numbers by division, written $a:b$ or $\\frac{a}{b}$.', section: '6-1' },
  { term: 'Proportion', def: 'An equation that states two ratios are equal.', section: '6-1' },
  { term: 'Extremes', def: 'The first and last terms of a proportion, $a$ and $d$ in $\\frac{a}{b} = \\frac{c}{d}$.', section: '6-1' },
  { term: 'Means', def: 'The middle terms of a proportion, $b$ and $c$ in $\\frac{a}{b} = \\frac{c}{d}$.', section: '6-1' },
  { term: 'Cross products', def: 'The products $ad$ and $bc$ of the proportion $\\frac{a}{b} = \\frac{c}{d}$.', section: '6-1' },
  { term: 'Equivalent proportions', def: 'Proportions that are true for the same values, such as $\\frac{a}{b} = \\frac{c}{d}$ and $\\frac{b}{a} = \\frac{d}{c}$.', section: '6-2' },
  { term: 'Similar polygons', def: 'Polygons with congruent corresponding angles and proportional corresponding sides.', section: '6-3' },
  { term: 'Scale factor', def: 'The ratio of any two corresponding side lengths of similar polygons.', section: '6-3' },
  { term: 'Similarity statement', def: 'A statement such as $\\triangle ABC \\sim \\triangle DEF$ that lists corresponding vertices in order.', section: '6-3' },
  { term: 'Proportional segments', def: 'Segments whose lengths form a true proportion.', section: '6-5' },
  { term: 'Ratio of areas', def: 'For similar triangles with scale factor $k$, the areas are in the ratio $k^2$.', section: '6-7' },
],
};
