// Chapter 10: Coordinate Geometry. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch10: ChapterContent = {
chapter: { id: 'ch10', number: 10, title: 'Coordinate Geometry', sections: [
  { id: '10-1', title: 'Locating Points on Coordinate Axes', kind: 'lesson', built: true, summary: 'Two perpendicular number lines make a coordinate plane. Each point has an ordered pair $(x, y)$. The axes cut the plane into four quadrants.', formula: '(x, y)' },
  { id: '10-2', title: 'The Distance Formula', kind: 'lesson', built: true, summary: 'The distance between two points comes from the Pythagorean theorem.', formula: 'd = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}' },
  { id: '10-3', title: 'The Midpoint Formula', kind: 'lesson', built: true, summary: 'The midpoint of a segment is the average of the endpoints.', formula: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
  { id: '10-4', title: 'Slope of a Line', kind: 'lesson', built: true, summary: 'Slope is rise over run. A horizontal line has slope 0. A vertical line has no slope.', formula: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
  { id: '10-5', title: 'Slopes of Parallel and Perpendicular Lines', kind: 'lesson', built: true, summary: 'Parallel lines have equal slopes. Perpendicular lines have slopes whose product is $-1$.', formula: 'm_1 = m_2 \\quad\\text{or}\\quad m_1 \\cdot m_2 = -1' },
  { id: '10-6', title: 'Equations of Lines', kind: 'lesson', built: true, parts: ['Standard Form', 'Point-Slope Form', 'Slope-Intercept Form'], summary: 'One line has many equation forms. Each form shows different facts about the line.', formula: 'Ax + By = C, \\quad y - y_1 = m(x - x_1), \\quad y = mx + b' },
  { id: '10-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '10-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'10-1': {
  diagram: 'distance',
  intro: [
    'A coordinate plane has two perpendicular number lines. The horizontal line is the $x$-axis. The vertical line is the $y$-axis. The two axes meet at the origin, $(0, 0)$.',
    'Each point has an ordered pair $(x, y)$. The first number is the $x$-coordinate. It tells how far to move right or left from the origin. The second number is the $y$-coordinate. It tells how far to move up or down.',
    'The axes cut the plane into four quadrants. We number them I, II, III, and IV, counterclockwise from the upper right. In Quadrant I both coordinates are positive. In Quadrant II $x$ is negative and $y$ is positive. In Quadrant III both coordinates are negative. In Quadrant IV $x$ is positive and $y$ is negative.',
    'The diagram shows a grid from $-8$ to $8$ with two points, $A$ and $B$. Drag point $A$ into each quadrant. The points snap to whole numbers, and the arrow keys nudge a point one unit. Watch the signs of the coordinates of $A$. Then drag $A$ onto an axis and watch one coordinate become $0$.',
  ],
  definitions: [
    { term: 'x-axis', text: 'The horizontal number line in the coordinate plane.' },
    { term: 'y-axis', text: 'The vertical number line in the coordinate plane.' },
    { term: 'Ordered pair', text: 'Two numbers $(x, y)$ that locate one point. The order matters.' },
    { term: 'Quadrant', text: 'One of the four regions cut off by the axes. Points on an axis are not in any quadrant.' },
  ],
  formulas: [
    { label: 'Ordered pair', tex: '(x, y)' },
    { label: 'Points on the axes', tex: '(x, 0) \\text{ is on the } x\\text{-axis}, \\quad (0, y) \\text{ is on the } y\\text{-axis}' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Plot a point', given: 'Plot $P(3, -2)$ and name its quadrant.', steps: [
      'Start at the origin.',
      '$x = 3$ is positive. Move $3$ units right.',
      '$y = -2$ is negative. Move $2$ units down.',
      '$x$ is positive and $y$ is negative. $P$ is in Quadrant IV.',
    ]},
    { title: 'Example 2 — Read the signs', given: 'A point has coordinates $(-6, -1)$. Name its quadrant.', steps: [
      '$x = -6$ is negative. The point is left of the $y$-axis.',
      '$y = -1$ is negative. The point is below the $x$-axis.',
      'Both coordinates are negative. The point is in Quadrant III.',
    ]},
    { title: 'Example 3 — A point on an axis', given: 'Point $Q$ has coordinates $(0, -5)$. Where is $Q$?', steps: [
      '$x = 0$. Do not move left or right.',
      '$y = -5$. Move $5$ units down from the origin.',
      '$Q$ is on the $y$-axis. It is not in any quadrant.',
    ]},
  ],
  checks: ['c10-1-1', 'c10-1-2', 'c10-1-3'],
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
'10-3': {
  diagram: 'distance',
  intro: [
    'The midpoint of a segment is the point halfway between the two endpoints. Its $x$-coordinate is the average of the two $x$-coordinates. Its $y$-coordinate is the average of the two $y$-coordinates.',
    'The Midpoint Formula (Theorem 10.3) states this rule. Add the two coordinates and divide by $2$. The midpoint cuts the segment into two congruent parts.',
    'You can also work backward. If you know one endpoint and the midpoint, you can find the other endpoint. Double each midpoint coordinate. Then subtract the known endpoint coordinate.',
    'The diagram shows a grid from $-8$ to $8$ with two points, $A$ and $B$. Drag the points. They snap to whole numbers, and the arrow keys nudge a point one unit. Watch the midpoint readout. Check the box to show the right triangle with $\\Delta x$ and $\\Delta y$. The midpoint sits halfway along each leg.',
  ],
  definitions: [
    { term: 'Midpoint', text: 'The point on a segment that is the same distance from both endpoints.' },
    { term: 'Average', text: 'The sum of two numbers divided by $2$.' },
    { term: 'Endpoint', text: 'One of the two points at the ends of a segment.' },
  ],
  formulas: [
    { label: 'Midpoint Formula', tex: 'M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)' },
    { label: 'Find an endpoint from the midpoint', tex: 'x_2 = 2x_M - x_1, \\quad y_2 = 2y_M - y_1' },
  ],
  theorems: ['10.3'],
  examples: [
    { title: 'Example 1 — Whole-number midpoint', given: 'Find the midpoint of $\\overline{AB}$ with $A(-4, 2)$ and $B(6, 8)$.', steps: [
      'Average the $x$-coordinates. $\\frac{-4 + 6}{2} = \\frac{2}{2} = 1$',
      'Average the $y$-coordinates. $\\frac{2 + 8}{2} = \\frac{10}{2} = 5$',
      'The midpoint is $M(1, 5)$.',
    ]},
    { title: 'Example 2 — Fraction midpoint', given: 'Find the midpoint of $\\overline{PQ}$ with $P(1, -3)$ and $Q(4, 2)$.', steps: [
      '$x_M = \\frac{1 + 4}{2} = \\frac{5}{2} = 2.5$',
      '$y_M = \\frac{-3 + 2}{2} = \\frac{-1}{2} = -0.5$',
      'The midpoint is $M\\left(\\frac{5}{2}, -\\frac{1}{2}\\right)$. A midpoint does not have to be on a grid point.',
    ]},
    { title: 'Example 3 — Find an endpoint', given: '$M(2, -1)$ is the midpoint of $\\overline{AB}$. $A$ is $(-3, 4)$. Find $B$.', steps: [
      'Double the midpoint and subtract $A$.',
      '$x_B = 2(2) - (-3) = 4 + 3 = 7$',
      '$y_B = 2(-1) - 4 = -2 - 4 = -6$',
      '$B$ is $(7, -6)$. Test: $\\frac{-3 + 7}{2} = 2$ and $\\frac{4 + (-6)}{2} = -1$.',
    ]},
  ],
  checks: ['c10-3-1', 'c10-3-2', 'c10-3-3'],
},
'10-4': {
  diagram: 'distance',
  intro: [
    'The slope of a line measures how steep the line is. Slope is rise over run. The rise is the vertical change, $\\Delta y$. The run is the horizontal change, $\\Delta x$.',
    'Pick any two points on the line. The Slope Formula (Theorem 10.4) divides the change in $y$ by the change in $x$. Any two points on the same line give the same slope.',
    'The sign of the slope gives the direction. A line with positive slope rises from left to right. A line with negative slope falls from left to right. A horizontal line has slope $0$, because the rise is $0$. A vertical line has an undefined slope, because the run is $0$ and we cannot divide by $0$.',
    'The diagram shows a grid from $-8$ to $8$ with two points, $A$ and $B$. Drag the points. Check the box to show the right triangle with legs $\\Delta x$ and $\\Delta y$. Watch the slope readout. Make the segment horizontal and watch the slope become $0$. Make the segment vertical and watch the slope become undefined.',
  ],
  definitions: [
    { term: 'Rise', text: 'The vertical change between two points, $\\Delta y = y_2 - y_1$.' },
    { term: 'Run', text: 'The horizontal change between two points, $\\Delta x = x_2 - x_1$.' },
    { term: 'Zero slope', text: 'The slope of a horizontal line. The rise is $0$.' },
    { term: 'Undefined slope', text: 'A vertical line has no slope. The run is $0$, and division by $0$ is undefined.' },
  ],
  formulas: [
    { label: 'Slope Formula', tex: 'm = \\frac{y_2 - y_1}{x_2 - x_1}' },
    { label: 'Rise over run', tex: 'm = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\Delta y}{\\Delta x}' },
    { label: 'Horizontal and vertical lines', tex: 'y = k \\implies m = 0, \\qquad x = k \\implies m \\text{ is undefined}' },
  ],
  theorems: ['10.4'],
  examples: [
    { title: 'Example 1 — Positive slope', given: 'Find the slope of the line through $(-2, -1)$ and $(4, 3)$.', steps: [
      '$\\Delta y = 3 - (-1) = 4$ and $\\Delta x = 4 - (-2) = 6$',
      '$m = \\frac{4}{6} = \\frac{2}{3}$',
      'The slope is positive. The line rises from left to right.',
    ]},
    { title: 'Example 2 — Negative slope', given: 'Find the slope of the line through $(1, 5)$ and $(4, -1)$.', steps: [
      '$\\Delta y = -1 - 5 = -6$ and $\\Delta x = 4 - 1 = 3$',
      '$m = \\frac{-6}{3} = -2$',
      'The slope is negative. The line falls from left to right.',
    ]},
    { title: 'Example 3 — Horizontal and vertical', given: 'Find the slope of the line through $(2, 3)$ and $(7, 3)$. Then find the slope through $(4, -2)$ and $(4, 6)$.', steps: [
      'First line: $m = \\frac{3 - 3}{7 - 2} = \\frac{0}{5} = 0$. The line is horizontal.',
      'Second line: $\\Delta x = 4 - 4 = 0$.',
      'We cannot divide by $0$. The slope is undefined. The line is vertical.',
    ]},
  ],
  checks: ['c10-4-1', 'c10-4-2', 'c10-4-3'],
},
'10-5': {
  intro: [
    'Slope tells us when two lines are parallel or perpendicular. Two nonvertical lines are parallel if and only if their slopes are equal (Postulate 10.5). Parallel lines rise at the same rate, so they never meet.',
    'Two nonvertical lines are perpendicular if and only if the product of their slopes is $-1$ (Postulate 10.6). The two slopes are negative reciprocals. To find the negative reciprocal of a slope, flip the fraction and change the sign.',
    'Vertical lines need a separate rule (Theorem 10.7). All vertical lines are parallel to each other. Every vertical line is perpendicular to every horizontal line. A vertical line has no slope, so the product rule does not apply to it.',
  ],
  definitions: [
    { term: 'Parallel lines', text: 'Two lines in the same plane that never meet. Nonvertical parallel lines have equal slopes.' },
    { term: 'Perpendicular lines', text: 'Two lines that meet at a right angle. Nonvertical perpendicular lines have slopes with product $-1$.' },
    { term: 'Negative reciprocal', text: 'The number $-\\frac{1}{m}$. Flip the fraction and change the sign.' },
  ],
  formulas: [
    { label: 'Parallel lines', tex: 'm_1 = m_2' },
    { label: 'Perpendicular lines', tex: 'm_1 \\cdot m_2 = -1' },
    { label: 'Negative reciprocal', tex: 'm_2 = -\\frac{1}{m_1}' },
  ],
  theorems: ['10.5', '10.6', '10.7'],
  examples: [
    { title: 'Example 1 — Test for parallel lines', given: 'Line 1 passes through $(0, 1)$ and $(4, 3)$. Line 2 passes through $(-2, -3)$ and $(2, -1)$. Are the lines parallel?', steps: [
      'Line 1: $m_1 = \\frac{3 - 1}{4 - 0} = \\frac{2}{4} = \\frac{1}{2}$',
      'Line 2: $m_2 = \\frac{-1 - (-3)}{2 - (-2)} = \\frac{2}{4} = \\frac{1}{2}$',
      'The slopes are equal. By Postulate 10.5, the lines are parallel.',
    ]},
    { title: 'Example 2 — Test for perpendicular lines', given: 'Line 1 passes through $(1, 2)$ and $(4, 8)$. Line 2 passes through $(0, 5)$ and $(6, 2)$. Are the lines perpendicular?', steps: [
      'Line 1: $m_1 = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$',
      'Line 2: $m_2 = \\frac{2 - 5}{6 - 0} = \\frac{-3}{6} = -\\frac{1}{2}$',
      'Multiply. $m_1 \\cdot m_2 = 2 \\cdot \\left(-\\frac{1}{2}\\right) = -1$',
      'The product is $-1$. By Postulate 10.6, the lines are perpendicular.',
    ]},
    { title: 'Example 3 — Find a perpendicular slope', given: 'A line has slope $-\\frac{4}{5}$. Find the slope of a perpendicular line.', steps: [
      'Flip the fraction. $-\\frac{4}{5}$ becomes $-\\frac{5}{4}$.',
      'Change the sign. The perpendicular slope is $\\frac{5}{4}$.',
      'Test: $-\\frac{4}{5} \\cdot \\frac{5}{4} = -1$.',
    ]},
  ],
  checks: ['c10-5-1', 'c10-5-2', 'c10-5-3'],
},
'10-6': {
  intro: [
    'An equation of a line is a rule that every point on the line satisfies. One line has many equivalent equations. Three forms are common: standard form, point-slope form, and slope-intercept form.',
    'Standard form is $Ax + By = C$. $A$, $B$, and $C$ are integers, and $A$ is not negative. This form makes the intercepts easy to find. Set $y = 0$ to find the $x$-intercept. Set $x = 0$ to find the $y$-intercept.',
    'Point-slope form is $y - y_1 = m(x - x_1)$. Use it when you know the slope $m$ and one point $(x_1, y_1)$. Slope-intercept form is $y = mx + b$. Here $m$ is the slope and $b$ is the $y$-intercept.',
    'To write the equation from two points, first find the slope with Theorem 10.4. Then put the slope and one point into point-slope form. Solve for $y$ to change to slope-intercept form. Move the $x$-term to the left side and clear fractions to change to standard form.',
  ],
  definitions: [
    { term: 'Standard form', text: '$Ax + By = C$, with $A$, $B$, and $C$ integers and $A \\ge 0$.' },
    { term: 'Point-slope form', text: '$y - y_1 = m(x - x_1)$, where $m$ is the slope and $(x_1, y_1)$ is a point on the line.' },
    { term: 'Slope-intercept form', text: '$y = mx + b$, where $m$ is the slope and $b$ is the $y$-intercept.' },
    { term: 'x-intercept', text: 'The $x$-coordinate of the point where a line crosses the $x$-axis. There $y = 0$.' },
    { term: 'y-intercept', text: 'The $y$-coordinate of the point where a line crosses the $y$-axis. There $x = 0$.' },
  ],
  formulas: [
    { label: 'Standard form', tex: 'Ax + By = C' },
    { label: 'Point-slope form', tex: 'y - y_1 = m(x - x_1)' },
    { label: 'Slope-intercept form', tex: 'y = mx + b' },
    { label: 'Intercepts from standard form', tex: 'x\\text{-intercept} = \\frac{C}{A}, \\qquad y\\text{-intercept} = \\frac{C}{B}' },
  ],
  theorems: ['10.4', '10.5'],
  examples: [
    { title: 'Example 1 — Point-slope to slope-intercept', given: 'A line has slope $3$ and passes through $(2, -1)$. Write its equation in slope-intercept form.', steps: [
      'Use point-slope form. $y - (-1) = 3(x - 2)$',
      'Simplify the left side. $y + 1 = 3x - 6$',
      'Solve for $y$. $y = 3x - 7$',
    ]},
    { title: 'Example 2 — From two points to standard form', given: 'Write the equation of the line through $(1, 4)$ and $(3, 10)$ in standard form.', steps: [
      'Find the slope. $m = \\frac{10 - 4}{3 - 1} = \\frac{6}{2} = 3$',
      'Point-slope form with $(1, 4)$: $y - 4 = 3(x - 1)$',
      'Slope-intercept form: $y = 3x + 1$',
      'Move the $x$-term. $-3x + y = 1$. Multiply by $-1$ so $A$ is positive. $3x - y = -1$',
    ]},
    { title: 'Example 3 — Read a standard-form equation', given: 'A line has equation $2x + 3y = 12$. Find both intercepts and the slope.', steps: [
      '$x$-intercept: set $y = 0$. $2x = 12$, so $x = 6$.',
      '$y$-intercept: set $x = 0$. $3y = 12$, so $y = 4$.',
      'Solve for $y$. $3y = -2x + 12$, so $y = -\\frac{2}{3}x + 4$.',
      'The slope is $-\\frac{2}{3}$ and the $y$-intercept is $4$.',
    ]},
  ],
  checks: ['c10-6-1', 'c10-6-2', 'c10-6-3'],
},
},

questions: [
  { id: 'c10-2-1', chapter: 'ch10', section: '10-2', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-2, -1], b: [4, 7] }, prompt: 'Find the distance between $A(-2, -1)$ and $B(4, 7)$.', answer: 10, tolerance: 0.05,
    solution: ['$\\Delta x = 4 - (-2) = 6$, $\\Delta y = 7 - (-1) = 8$', '$d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$'] },
  { id: 'c10-2-2', chapter: 'ch10', section: '10-2', set: 'check', type: 'mc', prompt: 'Which expression gives the distance between $(2, 5)$ and $(7, 5)$?', choices: ['$\\sqrt{5^2 + 10^2}$', '$\\sqrt{5^2 + 0^2}$', '$\\sqrt{2^2 + 7^2}$', '$7 - 2 + 5$'], answer: 1,
    solution: ['The $y$-coordinates are equal, so $\\Delta y = 0$.', '$\\Delta x = 7 - 2 = 5$. The distance is $\\sqrt{25} = 5$.'] },
  { id: 'c10-2-3', chapter: 'ch10', section: '10-2', set: 'check', type: 'numeric', prompt: 'Find the distance between $(1, 1)$ and $(4, 5)$.', answer: 5, tolerance: 0.05,
    solution: ['$\\Delta x = 3$, $\\Delta y = 4$', '$d = \\sqrt{9 + 16} = 5$'] },
  { id: 'c10-1-1', chapter: 'ch10', section: '10-1', set: 'check', type: 'mc', prompt: 'In which quadrant is the point $(4, -6)$?', choices: ['I', 'II', 'III', 'IV'], answer: 3,
    solution: ['$x = 4$ is positive. The point is right of the $y$-axis.', '$y = -6$ is negative. The point is below the $x$-axis.', 'Positive $x$ and negative $y$ is Quadrant IV.'] },
  { id: 'c10-1-2', chapter: 'ch10', section: '10-1', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-5, 3], b: [2, -4] }, prompt: 'The grid shows $A(-5, 3)$ and $B(2, -4)$. Which statement is true?', choices: ['$A$ is in Quadrant II and $B$ is in Quadrant IV.', '$A$ is in Quadrant III and $B$ is in Quadrant I.', '$A$ is in Quadrant IV and $B$ is in Quadrant II.', '$A$ is in Quadrant I and $B$ is in Quadrant III.'], answer: 0,
    solution: ['$A$: $x$ is negative and $y$ is positive. That is Quadrant II.', '$B$: $x$ is positive and $y$ is negative. That is Quadrant IV.'] },
  { id: 'c10-1-3', chapter: 'ch10', section: '10-1', set: 'check', type: 'numeric', prompt: 'A point is on the $x$-axis, $6$ units to the left of the origin. Find its $x$-coordinate.', answer: -6, tolerance: 0.5,
    solution: ['On the $x$-axis, $y = 0$.', 'Left of the origin means $x$ is negative.', 'The point is $(-6, 0)$. Its $x$-coordinate is $-6$.'] },
  { id: 'c10-3-1', chapter: 'ch10', section: '10-3', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-6, 1], b: [4, 7] }, prompt: 'Find the midpoint of $\\overline{AB}$ with $A(-6, 1)$ and $B(4, 7)$.', choices: ['$(-1, 4)$', '$(-2, 8)$', '$(5, 3)$', '$(1, 4)$'], answer: 0,
    solution: ['$x_M = \\frac{-6 + 4}{2} = \\frac{-2}{2} = -1$', '$y_M = \\frac{1 + 7}{2} = \\frac{8}{2} = 4$', 'The midpoint is $(-1, 4)$.'] },
  { id: 'c10-3-2', chapter: 'ch10', section: '10-3', set: 'check', type: 'numeric', prompt: 'The midpoint of the segment from $(3, y)$ to $(9, 5)$ is $(6, 1)$. Find $y$.', answer: -3, tolerance: 0.5,
    solution: ['The $y$-coordinate of the midpoint is $\\frac{y + 5}{2} = 1$.', 'Multiply by $2$. $y + 5 = 2$', '$y = -3$'] },
  { id: 'c10-3-3', chapter: 'ch10', section: '10-3', set: 'check', type: 'mc', prompt: '$M(1, 2)$ is the midpoint of $\\overline{PQ}$. $P$ is $(-5, 6)$. Find $Q$.', choices: ['$(7, -2)$', '$(-2, 4)$', '$(3, 8)$', '$(-11, 10)$'], answer: 0,
    solution: ['Double the midpoint and subtract $P$.', '$x_Q = 2(1) - (-5) = 7$', '$y_Q = 2(2) - 6 = -2$', '$Q$ is $(7, -2)$. Test: $\\frac{-5 + 7}{2} = 1$ and $\\frac{6 + (-2)}{2} = 2$.'] },
  { id: 'c10-4-1', chapter: 'ch10', section: '10-4', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-3, -2], b: [5, 4] }, prompt: 'Find the slope of the line through $A(-3, -2)$ and $B(5, 4)$. Give a decimal.', answer: 0.75, tolerance: 0.01,
    solution: ['$\\Delta y = 4 - (-2) = 6$ and $\\Delta x = 5 - (-3) = 8$', '$m = \\frac{6}{8} = \\frac{3}{4} = 0.75$'] },
  { id: 'c10-4-2', chapter: 'ch10', section: '10-4', set: 'check', type: 'mc', prompt: 'Find the slope of the line through $(2, 7)$ and $(6, -1)$.', choices: ['$-2$', '$2$', '$-\\tfrac{1}{2}$', '$\\tfrac{1}{2}$'], answer: 0,
    solution: ['$\\Delta y = -1 - 7 = -8$ and $\\Delta x = 6 - 2 = 4$', '$m = \\frac{-8}{4} = -2$'] },
  { id: 'c10-4-3', chapter: 'ch10', section: '10-4', set: 'check', type: 'mc', prompt: 'Which line has an undefined slope?', choices: ['The line through $(3, 1)$ and $(3, 8)$', 'The line through $(1, 3)$ and $(8, 3)$', 'The line through $(0, 0)$ and $(5, 5)$', 'The line through $(-2, 4)$ and $(2, -4)$'], answer: 0,
    solution: ['A slope is undefined when the run is $0$.', 'For $(3, 1)$ and $(3, 8)$, $\\Delta x = 3 - 3 = 0$. The line is vertical.', 'The line through $(1, 3)$ and $(8, 3)$ is horizontal. Its slope is $0$, not undefined.'] },
  { id: 'c10-5-1', chapter: 'ch10', section: '10-5', set: 'check', type: 'mc', prompt: 'Line $\\ell$ has slope $\\tfrac{3}{4}$. Which slope makes a line parallel to $\\ell$?', choices: ['$\\tfrac{3}{4}$', '$-\\tfrac{3}{4}$', '$\\tfrac{4}{3}$', '$-\\tfrac{4}{3}$'], answer: 0,
    solution: ['By Postulate 10.5, parallel lines have equal slopes.', 'The parallel slope is $\\tfrac{3}{4}$.'] },
  { id: 'c10-5-2', chapter: 'ch10', section: '10-5', set: 'check', type: 'numeric', prompt: 'A line has slope $-\\tfrac{1}{5}$. Find the slope of a perpendicular line.', answer: 5, tolerance: 0.01,
    solution: ['By Postulate 10.6, the product of the slopes is $-1$.', 'Flip $-\\tfrac{1}{5}$ to get $-5$. Change the sign to get $5$.', 'Test: $-\\tfrac{1}{5} \\cdot 5 = -1$.'] },
  { id: 'c10-5-3', chapter: 'ch10', section: '10-5', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-4, -3], b: [2, 1] }, prompt: 'The grid shows $A(-4, -3)$ and $B(2, 1)$. Which pair of points lies on a line perpendicular to line $AB$?', choices: ['$(0, 5)$ and $(2, 2)$', '$(0, 5)$ and $(3, 7)$', '$(0, 5)$ and $(2, 8)$', '$(0, 5)$ and $(3, 3)$'], answer: 0,
    solution: ['Slope of line $AB$: $m = \\frac{1 - (-3)}{2 - (-4)} = \\frac{4}{6} = \\frac{2}{3}$', 'The perpendicular slope is the negative reciprocal, $-\\frac{3}{2}$.', 'For $(0, 5)$ and $(2, 2)$: $m = \\frac{2 - 5}{2 - 0} = -\\frac{3}{2}$. This line is perpendicular.'] },
  { id: 'c10-6-1', chapter: 'ch10', section: '10-6', set: 'check', type: 'mc', prompt: 'A line has slope $-3$ and passes through $(2, 5)$. Write its equation in slope-intercept form.', choices: ['$y = -3x + 11$', '$y = -3x - 1$', '$y = -3x + 5$', '$y = 3x - 1$'], answer: 0,
    solution: ['Point-slope form: $y - 5 = -3(x - 2)$', 'Distribute. $y - 5 = -3x + 6$', 'Add $5$ to both sides. $y = -3x + 11$'] },
  { id: 'c10-6-2', chapter: 'ch10', section: '10-6', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-2, -5], b: [4, 7] }, prompt: 'Find the $y$-intercept of the line through $A(-2, -5)$ and $B(4, 7)$.', answer: -1, tolerance: 0.05,
    solution: ['Find the slope. $m = \\frac{7 - (-5)}{4 - (-2)} = \\frac{12}{6} = 2$', 'Point-slope form with $B$: $y - 7 = 2(x - 4)$', 'Solve for $y$. $y = 2x - 1$', 'The $y$-intercept is $-1$. Test with $A$: $2(-2) - 1 = -5$.'] },
  { id: 'c10-6-3', chapter: 'ch10', section: '10-6', set: 'check', type: 'mc', prompt: 'Which line is parallel to $y = 2x - 5$ and passes through $(0, 4)$?', choices: ['$y = 2x + 4$', '$y = -\\tfrac{1}{2}x + 4$', '$y = 2x - 5$', '$y = 4x + 2$'], answer: 0,
    solution: ['By Postulate 10.5, a parallel line has the same slope, $m = 2$.', 'The point $(0, 4)$ is on the $y$-axis, so the $y$-intercept is $b = 4$.', 'Slope-intercept form: $y = 2x + 4$'] },

  // ---- Chapter 8 problems (full solutions)
  { id: 'p10-1', chapter: 'ch10', section: '10-2', set: 'chapter', type: 'diagram', figure: { kind: 'points', a: [-1, 2], b: [5, 10] }, prompt: 'Find the distance between $(-1, 2)$ and $(5, 10)$.', answer: 10, tolerance: 0.05,
    solution: ['$\\Delta x = 5 - (-1) = 6$', '$\\Delta y = 10 - 2 = 8$', '$d = \\sqrt{36 + 64} = \\sqrt{100} = 10$'] },
  { id: 'p10-2', chapter: 'ch10', section: '10-3', set: 'chapter', type: 'mc', prompt: 'Find the midpoint of the segment from $(2, -3)$ to $(8, 5)$.', choices: ['$(5, 1)$', '$(3, 4)$', '$(10, 2)$', '$(6, 8)$'], answer: 0,
    solution: ['Average the $x$-coordinates: $\\frac{2 + 8}{2} = 5$', 'Average the $y$-coordinates: $\\frac{-3 + 5}{2} = 1$', 'The midpoint is $(5, 1)$.'] },
  { id: 'p10-3', chapter: 'ch10', section: '10-4', set: 'chapter', type: 'numeric', prompt: 'Find the slope of the line through $(1, 4)$ and $(5, 12)$.', answer: 2, tolerance: 0.01,
    solution: ['$m = \\frac{y_2 - y_1}{x_2 - x_1}$', '$m = \\frac{12 - 4}{5 - 1} = \\frac{8}{4} = 2$'] },
  { id: 'p10-4', chapter: 'ch10', section: '10-5', set: 'chapter', type: 'mc', prompt: 'A line has slope $\\tfrac{2}{3}$. Find the slope of a perpendicular line.', choices: ['$\\tfrac{2}{3}$', '$-\\tfrac{2}{3}$', '$\\tfrac{3}{2}$', '$-\\tfrac{3}{2}$'], answer: 3,
    solution: ['Perpendicular slopes have a product of $-1$.', 'Flip the fraction and change the sign.', '$-\\tfrac{3}{2}$'] },
  // ---- Chapter 10 supplemental
  { id: 's10-1', chapter: 'ch10', section: '10-2', set: 'supplemental', type: 'numeric', prompt: 'Find the distance between $(0, 0)$ and $(5, 12)$.', answer: 13, tolerance: 0.05 },
  { id: 's10-2', chapter: 'ch10', section: '10-6', set: 'supplemental', type: 'mc', prompt: 'Write $y = 2x + 3$ in standard form.', choices: ['$2x - y = -3$', '$2x + y = 3$', '$x - 2y = 3$', '$y - 2x = -3$'], answer: 0 },
  { id: 's10-3', chapter: 'ch10', section: '10-3', set: 'supplemental', type: 'mc', prompt: 'Find the midpoint of $(-4, 6)$ and $(2, -2)$.', choices: ['$(-1, 2)$', '$(-2, 4)$', '$(1, -2)$', '$(-3, 2)$'], answer: 0 },
  { id: 's10-4', chapter: 'ch10', section: '10-4', set: 'supplemental', type: 'numeric', prompt: 'Find the slope of the line through $(3, 7)$ and $(9, 7)$.', answer: 0, tolerance: 0.01 },

  // ---- Exam-only bank
  { id: 'b10-1', chapter: 'ch10', section: '10-6', set: 'bank', type: 'mc', prompt: 'A line has slope 3 and passes through $(1, 2)$. Which is its point-slope form?', choices: ['$y - 2 = 3(x - 1)$', '$y + 2 = 3(x + 1)$', '$y = 3x + 2$', '$3x - y = 1$'], answer: 0, solution: ['Point-slope form: $y - y_1 = m(x - x_1)$', 'Substitute $m = 3$, $(x_1, y_1) = (1, 2)$.'] },
  { id: 'b10-2', chapter: 'ch10', section: '10-1', set: 'bank', type: 'mc', prompt: 'In which quadrant is the point $(-3, 5)$?', choices: ['I', 'II', 'III', 'IV'], answer: 1, solution: ['$x$ is negative and $y$ is positive. That is Quadrant II.'] },
],

theorems: [
  { id: '10.1', chapter: 'ch10', kind: 'Theorem', name: 'Pythagorean Theorem', statement: 'In a right triangle, $a^2 + b^2 = c^2$.', section: '10-2' },
  { id: '10.2', chapter: 'ch10', kind: 'Theorem', name: 'Distance Formula', statement: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.', section: '10-2' },
  { id: '10.3', chapter: 'ch10', kind: 'Theorem', name: 'Midpoint Formula', statement: '$M = \\left(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2}\\right)$.', section: '10-3' },
  { id: '10.4', chapter: 'ch10', kind: 'Theorem', name: 'Slope Formula', statement: '$m = \\frac{y_2 - y_1}{x_2 - x_1}$, with $x_1 \\ne x_2$.', section: '10-4' },
  { id: '10.5', chapter: 'ch10', kind: 'Postulate', name: 'Parallel Slopes', statement: 'Two nonvertical lines are parallel if and only if they have equal slopes.', section: '10-5' },
  { id: '10.6', chapter: 'ch10', kind: 'Postulate', name: 'Perpendicular Slopes', statement: 'Two nonvertical lines are perpendicular if and only if the product of their slopes is $-1$.', section: '10-5' },
  { id: '10.7', chapter: 'ch10', kind: 'Theorem', name: 'Vertical and Horizontal Lines', statement: 'All vertical lines are parallel to each other, and every vertical line is perpendicular to every horizontal line.', section: '10-5' },
],

glossary: [
  { term: 'Coordinate plane', def: 'A plane with two perpendicular number lines.', section: '10-1' },
  { term: 'Distance formula', def: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.', section: '10-2' },
  { term: 'Midpoint', def: 'The point halfway between two points.', section: '10-3' },
  { term: 'Ordered pair', def: 'Two numbers $(x, y)$ that locate a point.', section: '10-1' },
  { term: 'Origin', def: 'The point $(0, 0)$.', section: '10-1' },
  { term: 'Quadrant', def: 'One of the four regions of the coordinate plane.', section: '10-1' },
  { term: 'Slope', def: 'Rise over run, $\\frac{\\Delta y}{\\Delta x}$.', section: '10-4' },
  { term: 'Slope-intercept form', def: '$y = mx + b$.', section: '10-6' },
  { term: 'Standard form', def: '$Ax + By = C$.', section: '10-6' },
  { term: 'Point-slope form', def: '$y - y_1 = m(x - x_1)$.', section: '10-6' },
  { term: 'y-intercept', def: 'The point where a line crosses the $y$-axis.', section: '10-6' },
  { term: 'x-axis', def: 'The horizontal number line in the coordinate plane.', section: '10-1' },
  { term: 'y-axis', def: 'The vertical number line in the coordinate plane.', section: '10-1' },
  { term: 'Rise', def: 'The vertical change between two points, $\\Delta y$.', section: '10-4' },
  { term: 'Run', def: 'The horizontal change between two points, $\\Delta x$.', section: '10-4' },
  { term: 'Negative reciprocal', def: 'The number $-\\frac{1}{m}$; the slope of a line perpendicular to a line with slope $m$.', section: '10-5' },
  { term: 'x-intercept', def: 'The $x$-coordinate of the point where a line crosses the $x$-axis.', section: '10-6' },
],
};
