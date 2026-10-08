// Table of contents + lesson content. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). A section with `built: true` has a full lesson in `lessons`.
import type { Chapter, Lesson, Section } from './types';

// Helper for chapters whose lessons are not written yet: title + optional parts only.
type TocEntry = string | [title: string, ...parts: string[]];
const toc = (ch: number, list: TocEntry[]): Section[] =>
  list.map((t, i) =>
    Array.isArray(t)
      ? { id: `${ch}-${i + 1}`, title: t[0], kind: 'lesson', parts: t.slice(1) }
      : { id: `${ch}-${i + 1}`, title: t, kind: 'lesson' },
  );
const problems = (ch: number): Section[] => [
  { id: `${ch}-p`, title: 'Chapter Problems', kind: 'problems' },
  { id: `${ch}-s`, title: 'Supplemental Chapter Problems', kind: 'supplemental' },
];

export const chapters: Chapter[] = [
  { id: 'ch1', number: 1, title: 'Basic Geometric Ideas', sections: [...toc(1, [
    ['Naming Basic Forms', 'Points', 'Lines', 'Planes'], 'Postulates and Theorems',
    ['Finding Segments, Midpoints, and Rays', 'Line Segments', 'Segment Addition and Midpoint', 'Rays'],
    ['Angles and Angle Pairs', 'Forming and Naming Angles', 'The Protractor Postulate and Addition of Angles', 'Angle Bisector', 'Right Angles', 'Acute Angles', 'Obtuse Angles', 'Straight Angles', 'Reflex Angles'],
    ['Special Angle Pairs', 'Adjacent Angles', 'Vertical Angles', 'Complementary Angles', 'Supplementary Angles'],
    ['Special Lines and Segments', 'Intersecting Lines and Segments', 'Perpendicular Lines and Segments', 'Parallel Lines and Segments'],
  ]), ...problems(1)] },
  { id: 'ch2', number: 2, title: 'Parallel Lines', sections: [...toc(2, [
    ['Angles Created by Lines and a Transversal', 'Angles Created by Parallel Lines and a Transversal'], 'Proving Lines Parallel',
  ]), ...problems(2)] },
  { id: 'ch3', number: 3, title: 'Triangles', sections: [...toc(3, [
    'Sum of Angle Measure', 'Exterior Angles', 'Classifying Triangles by Angles', 'Classifying Triangles by Sides', 'Specially Named Sides and Angles',
    ['Segments Inside and Outside Triangles', 'Base and Altitude', 'Median', 'Angle Bisector'],
    ['Congruent Triangles', 'Proofs of Congruence', 'Corresponding Parts (CPCTC)'], 'Isosceles Triangles', 'Triangle Inequality Theorems',
  ]), ...problems(3)] },
  { id: 'ch4', number: 4, title: 'Polygons', sections: [...toc(4, [
    ['Types of Polygons', "Naming Polygons' Parts", 'Number of Sides and Angles', 'Regular Polygons'], 'Angle Sums',
    ['Quadrilaterals', 'Trapezoids', 'Parallelograms'], 'Proofs of Parallelograms',
    ['Special Parallelograms', 'Rectangle', 'Rhombus', 'Square'], 'Special Trapezoids', 'The Midpoint Theorem',
  ]), ...problems(4)] },
  { id: 'ch5', number: 5, title: 'Perimeter and Area', sections: [...toc(5, [
    ['Squares and Rectangles', 'Finding the Perimeter', 'Finding the Area'], ['Triangles', 'Finding the Perimeter', 'Finding the Area'],
    ['Parallelograms', 'Finding the Perimeter', 'Finding the Area'], ['Trapezoids', 'Finding the Perimeter', 'Finding the Area'],
    ['Regular Polygons', 'Special Parts of Regular Polygons', 'Finding the Perimeter', 'Finding the Area'],
    ['Circles', 'Finding Circumference', 'Finding the Area'],
  ]), ...problems(5)] },
  { id: 'ch6', number: 6, title: 'Similar Figures', sections: [...toc(6, [
    ['Ratio and Proportion', 'Ratio', 'Proportions', 'Means and Extremes'], 'Properties of Proportions', 'Similar Polygons', 'Similar Triangles',
    'Proportional Parts of Triangles', 'Proportional Parts of Similar Triangles', 'Perimeter and Areas of Similar Triangles',
  ]), ...problems(6)] },
  { id: 'ch7', number: 7, title: 'Right Triangles', sections: [...toc(7, [
    'Geometric Mean', 'Altitude to the Hypotenuse', 'The Pythagorean Theorem', 'Pythagorean Triples', 'Outgrowths of the Pythagorean Theorem',
    ['Special Right Triangles', 'Isosceles Right Triangle', '30-60-90 Right Triangle'],
  ]), ...problems(7)] },
  { id: 'ch8', number: 8, title: 'Circles', sections: [
    { id: '8-1', title: 'Parts of a Circle', kind: 'lesson', summary: 'A circle is the set of all points at one distance from a center. A radius goes from the center to the circle. A chord connects two points on the circle. A diameter is a chord through the center.', formula: 'd = 2r' },
    { id: '8-2', title: 'Central Angles and Arcs', kind: 'lesson', parts: ['Central Angles', 'Arcs'], summary: 'A central angle has its vertex at the center. The arc it cuts off has the same measure as the angle. A minor arc is less than 180°. A major arc is more than 180°.', formula: 'm\\widehat{AB} = m\\angle AOB' },
    { id: '8-3', title: 'Some Common Sense Stuff', kind: 'lesson', summary: 'The arcs of a full circle add to 360°. A diameter cuts a circle into two semicircles of 180° each. Equal central angles cut off equal arcs in the same circle.', formula: 'm\\widehat{AB} + m\\widehat{BC} = m\\widehat{ABC}' },
    { id: '8-4', title: 'Arcs and Inscribed Angles', kind: 'lesson', built: true, summary: 'An inscribed angle has its vertex on the circle. Its measure is half the arc it intercepts.', formula: 'm\\angle ABC = \\tfrac{1}{2}\\, m\\widehat{AC}' },
    { id: '8-5', title: 'Angles Formed by Chords, Secants, and Tangents', kind: 'lesson', summary: 'Two chords that cross inside a circle make angles equal to half the sum of the two intercepted arcs. Two secants from an outside point make an angle equal to half the difference of the arcs.', formula: 'm\\angle 1 = \\tfrac{1}{2}(m\\widehat{AB} + m\\widehat{CD})' },
    { id: '8-6', title: 'Arcs and Chords', kind: 'lesson', summary: 'Equal chords cut off equal arcs. A diameter that is perpendicular to a chord bisects the chord and its arc.', formula: '\\overline{AB} \\cong \\overline{CD} \\iff \\widehat{AB} \\cong \\widehat{CD}' },
    { id: '8-7', title: 'Segments of Chords, Secants, and Tangents', kind: 'lesson', summary: 'When two chords cross, the products of their segments are equal. A tangent squared equals the external secant segment times the whole secant.', formula: 'a \\cdot b = c \\cdot d' },
    { id: '8-8', title: 'Arc Lengths and Sectors', kind: 'lesson', parts: ['Arc Length', 'Sectors of a Circle'], summary: 'Arc length is a fraction of the circumference. Sector area is the same fraction of the circle area. The fraction is the central angle over 360°.', formula: 's = \\frac{\\theta}{360^\\circ} \\cdot 2\\pi r, \\quad A = \\frac{\\theta}{360^\\circ} \\cdot \\pi r^2' },
    { id: '8-p', title: 'Chapter Problems', kind: 'problems' },
    { id: '8-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
  ]},
  { id: 'ch9', number: 9, title: 'Solid Geometry', sections: [
    { id: '9-1', title: 'Prisms', kind: 'lesson', built: true, parts: ['Oblique vs. Right Prisms', 'Volume of a Prism'], summary: 'A prism has two parallel, congruent bases. Its volume is the base area times the height.', formula: 'V = Bh' },
    { id: '9-2', title: 'Right Circular Cylinders', kind: 'lesson', summary: 'A cylinder is a prism with circular bases. Its lateral surface unrolls into a rectangle.', formula: 'V = \\pi r^2 h, \\quad LA = 2\\pi r h' },
    { id: '9-3', title: 'Pyramids', kind: 'lesson', summary: 'A pyramid has one base and a point called the apex. Its volume is one third of the matching prism.', formula: 'V = \\tfrac{1}{3} B h' },
    { id: '9-4', title: 'Right Circular Cones', kind: 'lesson', summary: 'A cone is a pyramid with a circular base. The slant height goes from the apex to the edge of the base.', formula: 'V = \\tfrac{1}{3}\\pi r^2 h, \\quad LA = \\pi r \\ell' },
    { id: '9-5', title: 'Spheres', kind: 'lesson', summary: 'A sphere is the set of all points in space at one distance from a center.', formula: 'V = \\tfrac{4}{3}\\pi r^3, \\quad SA = 4\\pi r^2' },
    { id: '9-p', title: 'Chapter Problems', kind: 'problems' },
    { id: '9-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
  ]},
  { id: 'ch10', number: 10, title: 'Coordinate Geometry', sections: [
    { id: '10-1', title: 'Locating Points on Coordinate Axes', kind: 'lesson', summary: 'Two perpendicular number lines make a coordinate plane. Each point has an ordered pair $(x, y)$. The axes cut the plane into four quadrants.', formula: '(x, y)' },
    { id: '10-2', title: 'The Distance Formula', kind: 'lesson', built: true, summary: 'The distance between two points comes from the Pythagorean theorem.', formula: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
    { id: '10-3', title: 'The Midpoint Formula', kind: 'lesson', summary: 'The midpoint of a segment is the average of the endpoints.', formula: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
    { id: '10-4', title: 'Slope of a Line', kind: 'lesson', summary: 'Slope is rise over run. A horizontal line has slope 0. A vertical line has no slope.', formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { id: '10-5', title: 'Slopes of Parallel and Perpendicular Lines', kind: 'lesson', summary: 'Parallel lines have equal slopes. Perpendicular lines have slopes whose product is $-1$.', formula: 'm_1 = m_2 \\quad\\text{or}\\quad m_1 \\cdot m_2 = -1' },
    { id: '10-6', title: 'Equations of Lines', kind: 'lesson', parts: ['Standard Form', 'Point-Slope Form', 'Slope-Intercept Form'], summary: 'One line has many equation forms. Each form shows different facts about the line.', formula: 'Ax + By = C, \\quad y - y_1 = m(x - x_1), \\quad y = mx + b' },
    { id: '10-p', title: 'Chapter Problems', kind: 'problems' },
    { id: '10-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
  ]},
];

export const lessons: Record<string, Lesson> = {
  '8-4': {
    diagram: 'inscribed',
    video: 'inscribed-angles',
    videoTitle: 'Why an inscribed angle is half its arc',
    intro: [
      'An inscribed angle has its vertex on the circle. Its two sides are chords.',
      'The angle cuts off an arc. We call this arc the intercepted arc. The arc is on the far side of the vertex.',
      'Drag the three points in the diagram. Watch the angle and the arc. The angle is always half the arc.',
    ],
    definitions: [
      { term: 'Inscribed angle', text: 'An angle with its vertex on the circle and with chords as sides.' },
      { term: 'Intercepted arc', text: 'The arc that lies in the interior of an inscribed angle.' },
    ],
    formulas: [
      { label: 'Inscribed Angle Theorem', tex: 'm\\angle ABC = \\tfrac{1}{2}\\, m\\widehat{AC}' },
      { label: 'Angle in a semicircle', tex: 'm\\widehat{AC} = 180^\\circ \\implies m\\angle ABC = 90^\\circ' },
    ],
    theorems: ['8.5', '8.6', '8.7', '8.8'],
    examples: [
      { title: 'Example 1 — Find the angle', given: 'Arc $AC$ measures $110^\\circ$. Find $m\\angle ABC$.', steps: [
        'Use the Inscribed Angle Theorem.',
        '$m\\angle ABC = \\tfrac{1}{2} \\cdot 110^\\circ$',
        '$m\\angle ABC = 55^\\circ$',
      ]},
      { title: 'Example 2 — Find the arc', given: 'Inscribed angle $\\angle PQR$ measures $38^\\circ$. Find $m\\widehat{PR}$.', steps: [
        'The arc is two times the angle.',
        '$m\\widehat{PR} = 2 \\cdot 38^\\circ = 76^\\circ$',
      ]},
      { title: 'Example 3 — Diameter as a side', given: '$\\overline{AC}$ is a diameter. $m\\angle A = 32^\\circ$. Find $m\\angle C$.', steps: [
        'Arc $AC$ is a semicircle, so $m\\widehat{AC} = 180^\\circ$.',
        'Angle $B$ intercepts this arc. $m\\angle B = 90^\\circ$.',
        'The angles of a triangle add to $180^\\circ$.',
        '$m\\angle C = 180^\\circ - 90^\\circ - 32^\\circ = 58^\\circ$',
      ]},
    ],
    checks: ['c8-4-1', 'c8-4-2', 'c8-4-3'],
  },
  '9-1': {
    diagram: 'prism',
    video: 'prisms',
    videoTitle: 'Why a slanted prism holds the same volume',
    intro: [
      'A prism is a solid with two congruent bases. The bases lie in parallel planes. The other faces are parallelograms. We call them lateral faces.',
      'In a right prism, the lateral edges are perpendicular to the bases. The lateral faces are rectangles. In an oblique prism, the lateral edges lean. The lateral faces are not rectangles.',
      'The height $h$ is the perpendicular distance between the bases. In an oblique prism, the height is shorter than the lateral edge.',
      'Use the sliders in the diagram. Change the base, the height, and the lean. Watch the volume. The lean does not change the volume.',
    ],
    definitions: [
      { term: 'Base', text: 'One of the two congruent, parallel faces of a prism.' },
      { term: 'Height (altitude)', text: 'The perpendicular distance between the two bases.' },
      { term: 'Right prism', text: 'A prism in which the lateral edges are perpendicular to the bases.' },
      { term: 'Oblique prism', text: 'A prism in which the lateral edges are not perpendicular to the bases.' },
    ],
    formulas: [
      { label: 'Volume of any prism', tex: 'V = B h' },
      { label: 'Lateral area of a right prism', tex: 'LA = p h' },
      { label: 'Total area of a right prism', tex: 'TA = LA + 2B' },
    ],
    theorems: ['9.1', '9.2', '9.3'],
    examples: [
      { title: 'Example 1 — Rectangular prism', given: 'A right rectangular prism is 4 cm by 3 cm by 5 cm tall. Find the volume.', steps: [
        'Find the base area. $B = 4 \\cdot 3 = 12\\ \\text{cm}^2$',
        'Multiply by the height. $V = Bh = 12 \\cdot 5 = 60\\ \\text{cm}^3$',
      ]},
      { title: 'Example 2 — Triangular prism', given: 'The base is a right triangle with legs 3 in and 4 in. The height of the prism is 10 in. Find the volume and total area.', steps: [
        'Base area: $B = \\tfrac{1}{2}(3)(4) = 6\\ \\text{in}^2$',
        'Volume: $V = Bh = 6 \\cdot 10 = 60\\ \\text{in}^3$',
        'The hypotenuse is 5 in. The base perimeter is $p = 3 + 4 + 5 = 12$ in.',
        'Lateral area: $LA = ph = 12 \\cdot 10 = 120\\ \\text{in}^2$',
        'Total area: $TA = 120 + 2(6) = 132\\ \\text{in}^2$',
      ]},
      { title: 'Example 3 — Oblique prism', given: 'An oblique prism has a base area of 20 m². Its lateral edge is 8 m. Its height is 6 m. Find the volume.', steps: [
        'Use the height, not the lateral edge.',
        '$V = Bh = 20 \\cdot 6 = 120\\ \\text{m}^3$',
      ]},
    ],
    checks: ['c9-1-1', 'c9-1-2', 'c9-1-3'],
  },
  '10-2': {
    diagram: 'distance',
    video: 'distance-formula',
    videoTitle: 'The distance formula is the Pythagorean theorem',
    intro: [
      'Two points on a grid make a right triangle. The horizontal leg is the change in $x$. The vertical leg is the change in $y$. The distance is the hypotenuse.',
      'The Pythagorean theorem gives the length of the hypotenuse. This gives the distance formula.',
      'Drag points $A$ and $B$ in the diagram. Watch the legs and the distance change.',
    ],
    definitions: [
      { term: 'Distance', text: 'The length of the segment between two points.' },
      { term: 'Horizontal change', text: 'The difference of the $x$-coordinates, $x_2 - x_1$.' },
      { term: 'Vertical change', text: 'The difference of the $y$-coordinates, $y_2 - y_1$.' },
    ],
    formulas: [
      { label: 'Distance Formula', tex: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
      { label: 'From the Pythagorean theorem', tex: 'd^2 = (\\Delta x)^2 + (\\Delta y)^2' },
    ],
    theorems: ['10.1', '10.2'],
    examples: [
      { title: 'Example 1 — Whole-number answer', given: 'Find the distance between $A(1, 2)$ and $B(4, 6)$.', steps: [
        '$\\Delta x = 4 - 1 = 3$ and $\\Delta y = 6 - 2 = 4$',
        '$d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25}$',
        '$d = 5$',
      ]},
      { title: 'Example 2 — Radical answer', given: 'Find the distance between $P(-3, 1)$ and $Q(2, -4)$.', steps: [
        '$\\Delta x = 2 - (-3) = 5$ and $\\Delta y = -4 - 1 = -5$',
        '$d = \\sqrt{5^2 + (-5)^2} = \\sqrt{50}$',
        'Simplify. $\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2} \\approx 7.07$',
      ]},
      { title: 'Example 3 — Test a triangle', given: 'Is the triangle with vertices $(0,0)$, $(6,0)$, $(3,4)$ isosceles?', steps: [
        'Side 1: from $(0,0)$ to $(3,4)$. $d = \\sqrt{9 + 16} = 5$',
        'Side 2: from $(6,0)$ to $(3,4)$. $d = \\sqrt{9 + 16} = 5$',
        'Two sides are equal. The triangle is isosceles.',
      ]},
    ],
    checks: ['c10-2-1', 'c10-2-2', 'c10-2-3'],
  },
};
