// Chapter 1: Basic Geometric Ideas. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch1: ChapterContent = {
chapter: { id: 'ch1', number: 1, title: 'Basic Geometric Ideas', sections: [
  { id: '1-1', title: 'Naming Basic Forms', kind: 'lesson', built: true, parts: ['Points', 'Lines', 'Planes'], summary: 'Point, line, and plane are the undefined terms of geometry. A point is named by a capital letter. A line is named by two points or a lowercase letter. A plane is named by three noncollinear points or a capital letter.', formula: '\\overleftrightarrow{AB}' },
  { id: '1-2', title: 'Postulates and Theorems', kind: 'lesson', built: true, summary: 'A postulate is accepted without proof. A theorem is proved. Two points determine one line, and three noncollinear points determine one plane.' },
  { id: '1-3', title: 'Finding Segments, Midpoints, and Rays', kind: 'lesson', built: true, parts: ['Line Segments', 'Segment Addition and Midpoint', 'Rays'], summary: 'A segment has two endpoints. Its length is the distance between them. If B is between A and C, then AB + BC = AC. A midpoint cuts a segment into two congruent parts. A ray has one endpoint.', formula: 'AB + BC = AC' },
  { id: '1-4', title: 'Angles and Angle Pairs', kind: 'lesson', built: true, parts: ['Forming and Naming Angles', 'The Protractor Postulate and Addition of Angles', 'Angle Bisector', 'Right Angles', 'Acute Angles', 'Obtuse Angles', 'Straight Angles', 'Reflex Angles'], summary: 'An angle is two rays with a common endpoint. Angle measures add like segment lengths. Angles are acute, right, obtuse, straight, or reflex by their measure.', formula: 'm\\angle ABD + m\\angle DBC = m\\angle ABC' },
  { id: '1-5', title: 'Special Angle Pairs', kind: 'lesson', built: true, parts: ['Adjacent Angles', 'Vertical Angles', 'Complementary Angles', 'Supplementary Angles'], summary: 'Vertical angles are congruent. Complementary angles add to 90°. Supplementary angles add to 180°. A linear pair is always supplementary.', formula: 'm\\angle 1 + m\\angle 2 = 180^\\circ' },
  { id: '1-6', title: 'Special Lines and Segments', kind: 'lesson', built: true, parts: ['Intersecting Lines and Segments', 'Perpendicular Lines and Segments', 'Parallel Lines and Segments'], summary: 'Intersecting lines share one point. Perpendicular lines form four right angles. Parallel lines are coplanar and never meet. Skew lines are not coplanar.', formula: 'm \\perp n, \\quad m \\parallel n' },
  { id: '1-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '1-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'1-1': {
  intro: [
    'Geometry starts with three undefined terms: point, line, and plane. We do not define them with other words. We describe them and agree on how to name them.',
    'A point has no size. It marks a position. We draw a point as a dot and name it with a capital letter, such as point $A$. A line has no thickness and no ends. We name a line by any two points on it, as $\\overleftrightarrow{AB}$, or by one lowercase letter, as line $l$.',
    'A plane is a flat surface with no edges. It goes on forever in every direction. We name a plane by three noncollinear points, as plane $ABC$, or by one capital letter, as plane $P$. Points on the same line are collinear. Points in the same plane are coplanar.',
    'Two figures intersect when they share points. Two lines intersect in one point. A line and a plane intersect in one point, unless the line lies in the plane. Two planes intersect in a line.',
  ],
  definitions: [
    { term: 'Point', text: 'A position with no size. Name it with a capital letter.' },
    { term: 'Line', text: 'A straight set of points with no ends. Name it with two of its points or with one lowercase letter.' },
    { term: 'Plane', text: 'A flat surface with no edges. Name it with three noncollinear points or with one capital letter.' },
    { term: 'Collinear points', text: 'Points that lie on the same line.' },
    { term: 'Coplanar points', text: 'Points that lie in the same plane.' },
  ],
  formulas: [
    { label: 'Line through A and B', tex: '\\overleftrightarrow{AB}' },
    { label: 'Plane through A, B, and C', tex: '\\text{plane } ABC' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Name a line', given: 'Points $P$, $Q$, and $R$ lie on line $m$. Give three names for the line.', steps: [
      'Use any two points on the line.',
      '$\\overleftrightarrow{PQ}$, $\\overleftrightarrow{QR}$, and $\\overleftrightarrow{PR}$ all name the line.',
      'The lowercase letter $m$ also names it.',
    ]},
    { title: 'Example 2 — Name a plane', given: 'Points $A$, $B$, $C$, and $D$ lie in one plane. No three of them are collinear. Give two names for the plane.', steps: [
      'Use any three noncollinear points.',
      'Plane $ABC$ and plane $BCD$ both name the plane.',
      'Plane $ABD$ and plane $ACD$ also work.',
    ]},
    { title: 'Example 3 — Collinear or not', given: 'Points $X$, $Y$, and $Z$ lie on line $k$. Point $W$ is not on line $k$. Which points are collinear?', steps: [
      'Collinear points lie on one line.',
      '$X$, $Y$, and $Z$ are collinear.',
      '$W$ is not collinear with them, because $W$ is not on line $k$.',
      'All four points are coplanar. One plane holds line $k$ and point $W$.',
    ]},
  ],
  checks: ['c1-1-1', 'c1-1-2', 'c1-1-3'],
},

'1-2': {
  intro: [
    'A postulate is a statement we accept as true without proof. A theorem is a statement we prove from postulates, definitions, and earlier theorems. Geometry builds on a small set of postulates.',
    'The first postulates describe points, lines, and planes. Two points determine exactly one line. Three noncollinear points determine exactly one plane. If two points lie in a plane, the line through them lies in that plane.',
    'Other postulates describe how figures meet. Two lines intersect in exactly one point. Two planes intersect in exactly one line.',
  ],
  definitions: [
    { term: 'Postulate', text: 'A statement accepted as true without proof.' },
    { term: 'Theorem', text: 'A statement proved true from postulates, definitions, and other theorems.' },
    { term: 'Determine', text: 'To fix exactly one figure. Two points determine one line.' },
    { term: 'Intersection', text: 'The set of points that two figures share.' },
  ],
  formulas: [],
  theorems: ['1.1', '1.2', '1.3', '1.4', '1.5'],
  examples: [
    { title: 'Example 1 — Lines through points', given: 'Points $A$, $B$, and $C$ are noncollinear. How many lines pass through pairs of these points?', steps: [
      'Two points determine exactly one line (Postulate 1.1).',
      'The pairs are $AB$, $BC$, and $AC$.',
      'There are 3 lines.',
    ]},
    { title: 'Example 2 — Planes through points', given: 'Points $A$, $B$, $C$, and $D$ are in space. No three are collinear, and the four are not coplanar. How many planes do they determine?', steps: [
      'Three noncollinear points determine exactly one plane (Postulate 1.2).',
      'Choose three of the four points: $ABC$, $ABD$, $ACD$, and $BCD$.',
      'There are 4 planes.',
    ]},
    { title: 'Example 3 — Where planes meet', given: 'Plane $P$ and plane $Q$ are different planes. They share point $X$. Describe their intersection.', steps: [
      'Two planes that share a point intersect (Postulate 1.5).',
      'Their intersection is exactly one line.',
      'That line passes through $X$.',
    ]},
  ],
  checks: ['c1-2-1', 'c1-2-2', 'c1-2-3'],
},

'1-3': {
  intro: [
    'A line segment is part of a line. It has two endpoints and all the points between them. We write segment $AB$ as $\\overline{AB}$. Its length is $AB$, a number with no bar.',
    'The Ruler Postulate lets us measure. Match the points of a line with the real numbers. The distance between two points is the absolute value of the difference of their numbers.',
    'If point $B$ is between $A$ and $C$, the Segment Addition Postulate says $AB + BC = AC$. The midpoint of a segment divides it into two congruent segments. A segment bisector is any line, segment, ray, or plane that passes through the midpoint.',
    'A ray is part of a line. It has one endpoint and goes on forever in one direction. We write ray $AB$ as $\\overrightarrow{AB}$, with the endpoint first. Two rays with the same endpoint that form a line are opposite rays.',
  ],
  definitions: [
    { term: 'Line segment', text: 'Two points on a line and all the points between them.' },
    { term: 'Congruent segments', text: 'Segments that have the same length. Write $\\overline{AB} \\cong \\overline{CD}$.' },
    { term: 'Segment bisector', text: 'A line, ray, segment, or plane that passes through the midpoint of a segment.' },
    { term: 'Ray', text: 'Part of a line with one endpoint. It goes on forever in one direction.' },
    { term: 'Opposite rays', text: 'Two rays with the same endpoint that together form a line.' },
  ],
  formulas: [
    { label: 'Ruler Postulate', tex: 'AB = |a - b|' },
    { label: 'Segment Addition Postulate', tex: 'AB + BC = AC' },
    { label: 'Midpoint M of segment AB', tex: 'AM = MB = \\tfrac{1}{2}\\, AB' },
  ],
  theorems: ['1.6', '1.7'],
  examples: [
    { title: 'Example 1 — Length on a number line', given: 'Point $A$ is at $-3$ and point $B$ is at $5$ on a number line. Find $AB$.', steps: [
      'Use the Ruler Postulate.',
      '$AB = |-3 - 5| = |-8| = 8$',
    ]},
    { title: 'Example 2 — Segment addition', given: '$B$ is between $A$ and $C$. $AB = 7$ and $AC = 19$. Find $BC$.', steps: [
      'Use the Segment Addition Postulate: $AB + BC = AC$.',
      '$7 + BC = 19$',
      '$BC = 19 - 7 = 12$',
    ]},
    { title: 'Example 3 — Midpoint with algebra', given: '$M$ is the midpoint of $\\overline{PQ}$. $PM = 2x + 1$ and $MQ = 3x - 4$. Find $PQ$.', steps: [
      'The midpoint makes two congruent segments: $PM = MQ$.',
      '$2x + 1 = 3x - 4$, so $x = 5$.',
      '$PM = 2(5) + 1 = 11$',
      '$PQ = 2 \\cdot 11 = 22$',
    ]},
  ],
  checks: ['c1-3-1', 'c1-3-2', 'c1-3-3'],
},

'1-4': {
  diagram: 'angle',
  intro: [
    'An angle is formed by two rays with the same endpoint. The rays are the sides. The common endpoint is the vertex. We name an angle by three points with the vertex in the middle, as $\\angle ABC$. We can also use the vertex alone, $\\angle B$, or a number, $\\angle 1$.',
    'The Protractor Postulate gives every angle a measure from $0^\\circ$ to $180^\\circ$. The Angle Addition Postulate works like segment addition. If $D$ is inside $\\angle ABC$, then $m\\angle ABD + m\\angle DBC = m\\angle ABC$. An angle bisector is a ray that divides an angle into two congruent angles.',
    'We classify angles by measure. An acute angle is less than 90°. A right angle is exactly 90°. An obtuse angle is between 90° and 180°. A straight angle is exactly 180°. A reflex angle is more than 180° and less than 360°.',
    'In the diagram, ray $BA$ is fixed. Drag point $C$ around the vertex $B$. Watch the measure of $\\angle ABC$ and its type change. The readouts also show the complement while the angle is acute, and the supplement while it is less than 180°. Use the arrow keys to nudge the point.',
  ],
  definitions: [
    { term: 'Angle', text: 'Two rays with a common endpoint. The rays are the sides, and the endpoint is the vertex.' },
    { term: 'Angle bisector', text: 'A ray from the vertex that divides an angle into two congruent angles.' },
    { term: 'Acute angle', text: 'An angle that measures less than $90^\\circ$.' },
    { term: 'Right angle', text: 'An angle that measures exactly $90^\\circ$.' },
    { term: 'Obtuse angle', text: 'An angle that measures more than $90^\\circ$ and less than $180^\\circ$.' },
  ],
  formulas: [
    { label: 'Angle Addition Postulate', tex: 'm\\angle ABD + m\\angle DBC = m\\angle ABC' },
    { label: 'Angle bisector BD', tex: 'm\\angle ABD = m\\angle DBC = \\tfrac{1}{2}\\, m\\angle ABC' },
  ],
  theorems: ['1.8', '1.9'],
  examples: [
    { title: 'Example 1 — Angle addition', given: 'Point $D$ is in the interior of $\\angle ABC$. $m\\angle ABD = 34^\\circ$ and $m\\angle DBC = 51^\\circ$. Find $m\\angle ABC$.', steps: [
      'Use the Angle Addition Postulate.',
      '$m\\angle ABC = 34^\\circ + 51^\\circ = 85^\\circ$',
      'The angle is acute, because $85^\\circ < 90^\\circ$.',
    ]},
    { title: 'Example 2 — Angle bisector', given: '$\\overrightarrow{QS}$ bisects $\\angle PQR$. $m\\angle PQS = 3x + 5$ and $m\\angle SQR = 5x - 17$. Find $m\\angle PQR$.', steps: [
      'A bisector makes two congruent angles: $m\\angle PQS = m\\angle SQR$.',
      '$3x + 5 = 5x - 17$, so $2x = 22$ and $x = 11$.',
      '$m\\angle PQS = 3(11) + 5 = 38^\\circ$',
      '$m\\angle PQR = 2 \\cdot 38^\\circ = 76^\\circ$',
    ]},
    { title: 'Example 3 — Classify by measure', given: 'Classify angles with measures $90^\\circ$, $112^\\circ$, $47^\\circ$, and $180^\\circ$.', steps: [
      '$90^\\circ$ is a right angle.',
      '$112^\\circ$ is obtuse, because it is between $90^\\circ$ and $180^\\circ$.',
      '$47^\\circ$ is acute, because it is less than $90^\\circ$.',
      '$180^\\circ$ is a straight angle.',
    ]},
  ],
  checks: ['c1-4-1', 'c1-4-2', 'c1-4-3'],
},

'1-5': {
  diagram: 'angle',
  intro: [
    'Some pairs of angles have special names. Adjacent angles share a vertex and a side but have no interior points in common. Vertical angles are the opposite angles formed by two intersecting lines. Vertical angles are congruent.',
    'Two angles are complementary when their measures add to 90°. Two angles are supplementary when their measures add to 180°. The angles do not have to be adjacent. A linear pair is two adjacent angles whose outer sides form a line. A linear pair is always supplementary.',
    'In the diagram, drag point $C$ to change $\\angle ABC$. Watch the complement readout. It appears only while the angle is acute, and it equals $90^\\circ$ minus the measure. Watch the supplement readout. It equals $180^\\circ$ minus the measure while the angle is less than 180°.',
  ],
  definitions: [
    { term: 'Adjacent angles', text: 'Two angles with a common vertex and a common side, and no common interior points.' },
    { term: 'Vertical angles', text: 'Two nonadjacent angles formed by two intersecting lines. They are congruent.' },
    { term: 'Complementary angles', text: 'Two angles whose measures add to $90^\\circ$.' },
    { term: 'Supplementary angles', text: 'Two angles whose measures add to $180^\\circ$.' },
    { term: 'Linear pair', text: 'Two adjacent angles whose noncommon sides are opposite rays.' },
  ],
  formulas: [
    { label: 'Complementary angles', tex: 'm\\angle 1 + m\\angle 2 = 90^\\circ' },
    { label: 'Supplementary angles', tex: 'm\\angle 1 + m\\angle 2 = 180^\\circ' },
    { label: 'Vertical angles', tex: '\\angle 1 \\cong \\angle 3, \\quad \\angle 2 \\cong \\angle 4' },
  ],
  theorems: ['1.10', '1.11', '1.12', '1.13'],
  examples: [
    { title: 'Example 1 — Complement and supplement', given: 'An angle measures $37^\\circ$. Find its complement and its supplement.', steps: [
      'Complement: $90^\\circ - 37^\\circ = 53^\\circ$',
      'Supplement: $180^\\circ - 37^\\circ = 143^\\circ$',
    ]},
    { title: 'Example 2 — Vertical angles', given: 'Lines $\\overleftrightarrow{AC}$ and $\\overleftrightarrow{BD}$ intersect at $E$. $m\\angle AEB = 2x + 10$ and $m\\angle CED = 4x - 30$. Find $m\\angle AEB$.', steps: [
      '$\\angle AEB$ and $\\angle CED$ are vertical angles, so they are congruent (Theorem 1.11).',
      '$2x + 10 = 4x - 30$, so $2x = 40$ and $x = 20$.',
      '$m\\angle AEB = 2(20) + 10 = 50^\\circ$',
    ]},
    { title: 'Example 3 — Linear pair', given: '$\\angle 1$ and $\\angle 2$ form a linear pair. $m\\angle 1 = 3x$ and $m\\angle 2 = x + 20$. Find both measures.', steps: [
      'A linear pair is supplementary (Postulate 1.10).',
      '$3x + (x + 20) = 180$, so $4x = 160$ and $x = 40$.',
      '$m\\angle 1 = 120^\\circ$ and $m\\angle 2 = 60^\\circ$',
    ]},
  ],
  checks: ['c1-5-1', 'c1-5-2', 'c1-5-3'],
},

'1-6': {
  diagram: 'transversal',
  intro: [
    'Two lines in the same plane either intersect or they are parallel. Intersecting lines share exactly one point. Perpendicular lines intersect to form right angles. Parallel lines never meet, no matter how far they go. The same words apply to segments and rays that lie on such lines.',
    'We write $m \\perp n$ for perpendicular lines and $m \\parallel n$ for parallel lines. When two lines are perpendicular, all four angles at the intersection are right angles. A perpendicular bisector of a segment is a line perpendicular to the segment at its midpoint.',
    'Parallel lines must be coplanar. Two lines that are not coplanar are skew lines. Skew lines never meet, but they are not parallel. Think of one edge on the floor and one edge on the ceiling that run in different directions.',
    'In the diagram, lines $m$ and $n$ are cut by a third line $t$, called a transversal. Move the slider to change the angle of the transversal. Use the toggle to make $m$ and $n$ parallel or not parallel. The eight angles are numbered 1 to 8 with their measures. When $t$ is perpendicular to a line, the readout says so and the four angles there show 90°. The other readouts name angle pairs that chapter 2 studies.',
  ],
  definitions: [
    { term: 'Intersecting lines', text: 'Lines that share exactly one point.' },
    { term: 'Perpendicular lines', text: 'Lines that intersect to form right angles. Write $m \\perp n$.' },
    { term: 'Perpendicular bisector', text: 'A line, segment, or ray that is perpendicular to a segment at its midpoint.' },
    { term: 'Parallel lines', text: 'Coplanar lines that never intersect. Write $m \\parallel n$.' },
    { term: 'Skew lines', text: 'Lines that are not coplanar. They never intersect, and they are not parallel.' },
  ],
  formulas: [
    { label: 'Perpendicular', tex: 'm \\perp n' },
    { label: 'Parallel', tex: 'm \\parallel n' },
    { label: 'Perpendicular lines', tex: 'm \\perp n \\implies \\text{four } 90^\\circ \\text{ angles}' },
  ],
  theorems: ['1.4', '1.10', '1.14'],
  examples: [
    { title: 'Example 1 — Perpendicular lines', given: '$\\overleftrightarrow{AB} \\perp \\overleftrightarrow{CD}$ at point $E$. Find $m\\angle AEC$.', steps: [
      'Perpendicular lines form four right angles (Theorem 1.14).',
      '$m\\angle AEC = 90^\\circ$',
    ]},
    { title: 'Example 2 — Perpendicular bisector', given: 'Line $l$ is the perpendicular bisector of $\\overline{PQ}$. It meets $\\overline{PQ}$ at $M$. $PQ = 18$. Find $PM$ and the angle between $l$ and $\\overline{PQ}$.', steps: [
      'A bisector passes through the midpoint, so $PM = \\tfrac{1}{2}(18) = 9$.',
      'Perpendicular means the lines form right angles.',
      'The angle between $l$ and $\\overline{PQ}$ is $90^\\circ$.',
    ]},
    { title: 'Example 3 — Parallel or skew', given: 'In a box, edge $\\overline{AB}$ is on the floor and edge $\\overline{GH}$ is on the ceiling. The edges run in different directions and never meet. Are they parallel or skew?', steps: [
      'Parallel lines must be coplanar.',
      'Two lines in different directions on the floor and the ceiling do not lie in one plane.',
      'The edges are skew.',
    ]},
  ],
  checks: ['c1-6-1', 'c1-6-2', 'c1-6-3'],
},
},

questions: [
  // ---- 1-1 checks
  { id: 'c1-1-1', chapter: 'ch1', section: '1-1', set: 'check', type: 'mc', prompt: 'Points $A$ and $B$ are two different points. Which name is correct for the line through them?', choices: ['Point $AB$', 'Line $AB$, written $\\overleftrightarrow{AB}$', 'Plane $AB$', 'Line $A$'], answer: 1,
    solution: ['A line is named by two points on it.', 'A plane needs three noncollinear points. A point needs one capital letter.'] },
  { id: 'c1-1-2', chapter: 'ch1', section: '1-1', set: 'check', type: 'mc', prompt: 'How many noncollinear points do you need to name a plane?', choices: ['One', 'Two', 'Three', 'Four'], answer: 2,
    solution: ['Three noncollinear points name a plane, as plane $ABC$.', 'Two points name only a line. One point names a point.'] },
  { id: 'c1-1-3', chapter: 'ch1', section: '1-1', set: 'check', type: 'mc', prompt: 'Points $R$, $S$, and $T$ all lie on line $n$. Which word describes them?', choices: ['Noncollinear', 'Collinear', 'Intersecting', 'Noncoplanar'], answer: 1,
    solution: ['Points on the same line are collinear.', 'They are also coplanar, but collinear is the specific word.'] },
  // ---- 1-2 checks
  { id: 'c1-2-1', chapter: 'ch1', section: '1-2', set: 'check', type: 'mc', prompt: 'Which statement describes a postulate?', choices: ['A statement that we prove from other statements.', 'A statement that we accept as true without proof.', 'A statement that is sometimes true.', 'A definition of a new word.'], answer: 1,
    solution: ['A postulate is accepted without proof.', 'A theorem must be proved.'] },
  { id: 'c1-2-2', chapter: 'ch1', section: '1-2', set: 'check', type: 'numeric', prompt: 'Two different lines intersect. How many points do they share?', answer: 1, tolerance: 0.5,
    solution: ['Postulate 1.4: two lines intersect in exactly one point.', 'The lines share 1 point.'] },
  { id: 'c1-2-3', chapter: 'ch1', section: '1-2', set: 'check', type: 'mc', prompt: 'Two different planes intersect. What is their intersection?', choices: ['Exactly one point', 'Exactly one line', 'Exactly one plane', 'Two points'], answer: 1,
    solution: ['Postulate 1.5: two planes intersect in exactly one line.'] },
  // ---- 1-3 checks
  { id: 'c1-3-1', chapter: 'ch1', section: '1-3', set: 'check', type: 'numeric', prompt: 'On a number line, $C$ is at $-6$ and $D$ is at $9$. Find $CD$.', answer: 15, tolerance: 0.5,
    solution: ['Use the Ruler Postulate.', '$CD = |-6 - 9| = |-15| = 15$'] },
  { id: 'c1-3-2', chapter: 'ch1', section: '1-3', set: 'check', type: 'mc', prompt: 'Which figure has exactly one endpoint?', choices: ['A line', 'A line segment', 'A ray', 'A plane'], answer: 2,
    solution: ['A ray has one endpoint and goes on forever in one direction.', 'A segment has two endpoints. A line and a plane have none.'] },
  { id: 'c1-3-3', chapter: 'ch1', section: '1-3', set: 'check', type: 'numeric', prompt: '$M$ is the midpoint of $\\overline{AB}$. $AB = 26$. Find $AM$.', answer: 13, tolerance: 0.5,
    solution: ['The midpoint cuts the segment into two congruent parts.', '$AM = \\tfrac{1}{2}(26) = 13$'] },
  // ---- 1-4 checks
  { id: 'c1-4-1', chapter: 'ch1', section: '1-4', set: 'check', type: 'diagram', figure: { kind: 'angle', degrees: 125 }, prompt: '$\\angle ABC$ measures $125^\\circ$. Classify the angle.', choices: ['Acute', 'Right', 'Obtuse', 'Straight'], answer: 2,
    solution: ['$125^\\circ$ is between $90^\\circ$ and $180^\\circ$.', 'The angle is obtuse.'] },
  { id: 'c1-4-2', chapter: 'ch1', section: '1-4', set: 'check', type: 'numeric', prompt: '$D$ is in the interior of $\\angle ABC$. $m\\angle ABC = 140^\\circ$ and $m\\angle ABD = 65^\\circ$. Find $m\\angle DBC$.', answer: 75, tolerance: 0.5, unit: '°',
    solution: ['Angle Addition Postulate: $m\\angle ABD + m\\angle DBC = m\\angle ABC$.', '$65^\\circ + m\\angle DBC = 140^\\circ$', '$m\\angle DBC = 140^\\circ - 65^\\circ = 75^\\circ$'] },
  { id: 'c1-4-3', chapter: 'ch1', section: '1-4', set: 'check', type: 'diagram', figure: { kind: 'angle', degrees: 64 }, prompt: '$\\overrightarrow{BD}$ bisects $\\angle ABC$. $m\\angle ABC = 64^\\circ$. Find $m\\angle ABD$.', answer: 32, tolerance: 0.5, unit: '°',
    solution: ['A bisector cuts the angle into two congruent angles.', '$m\\angle ABD = \\tfrac{1}{2}(64^\\circ) = 32^\\circ$'] },
  // ---- 1-5 checks
  { id: 'c1-5-1', chapter: 'ch1', section: '1-5', set: 'check', type: 'diagram', figure: { kind: 'angle', degrees: 58 }, prompt: '$\\angle ABC$ measures $58^\\circ$. Find the measure of its complement.', answer: 32, tolerance: 0.5, unit: '°',
    solution: ['Complementary angles add to $90^\\circ$.', '$90^\\circ - 58^\\circ = 32^\\circ$'] },
  { id: 'c1-5-2', chapter: 'ch1', section: '1-5', set: 'check', type: 'numeric', prompt: 'An angle measures $113^\\circ$. Find the measure of its supplement.', answer: 67, tolerance: 0.5, unit: '°',
    solution: ['Supplementary angles add to $180^\\circ$.', '$180^\\circ - 113^\\circ = 67^\\circ$'] },
  { id: 'c1-5-3', chapter: 'ch1', section: '1-5', set: 'check', type: 'mc', prompt: 'Two lines intersect. One angle measures $72^\\circ$. Find the measure of its vertical angle.', choices: ['$18^\\circ$', '$72^\\circ$', '$108^\\circ$', '$144^\\circ$'], answer: 1,
    solution: ['Vertical angles are congruent (Theorem 1.11).', 'The vertical angle also measures $72^\\circ$. The two angles next to it measure $108^\\circ$.'] },
  // ---- 1-6 checks
  { id: 'c1-6-1', chapter: 'ch1', section: '1-6', set: 'check', type: 'numeric', prompt: '$\\overleftrightarrow{PQ} \\perp \\overleftrightarrow{RS}$ at point $T$. $m\\angle PTR = 3x$. Find $x$.', answer: 30, tolerance: 0.5,
    solution: ['Perpendicular lines form right angles (Theorem 1.14).', '$3x = 90$', '$x = 30$'] },
  { id: 'c1-6-2', chapter: 'ch1', section: '1-6', set: 'check', type: 'mc', prompt: 'Which symbol means that two lines are parallel?', choices: ['$\\perp$', '$\\parallel$', '$\\cong$', '$\\angle$'], answer: 1,
    solution: ['$\\parallel$ means parallel. $\\perp$ means perpendicular.', '$\\cong$ means congruent. $\\angle$ means angle.'] },
  { id: 'c1-6-3', chapter: 'ch1', section: '1-6', set: 'check', type: 'mc', prompt: 'Two lines never meet and are not coplanar. What are they?', choices: ['Parallel lines', 'Perpendicular lines', 'Intersecting lines', 'Skew lines'], answer: 3,
    solution: ['Parallel lines must be coplanar.', 'Lines that are not coplanar and never meet are skew.'] },

  // ---- Chapter 1 problems
  { id: 'p1-1', chapter: 'ch1', section: '1-3', set: 'chapter', type: 'numeric', prompt: '$B$ is between $A$ and $C$. $AB = 3x + 2$, $BC = 2x - 1$, and $AC = 26$. Find $AB$.', answer: 17, tolerance: 0.5,
    solution: ['Segment Addition Postulate: $AB + BC = AC$.', '$(3x + 2) + (2x - 1) = 26$', '$5x + 1 = 26$, so $x = 5$.', '$AB = 3(5) + 2 = 17$'] },
  { id: 'p1-2', chapter: 'ch1', section: '1-4', set: 'chapter', type: 'diagram', figure: { kind: 'angle', degrees: 138 }, prompt: '$\\overrightarrow{BD}$ bisects $\\angle ABC$. $m\\angle ABC = 138^\\circ$. Find $m\\angle DBC$.', answer: 69, tolerance: 0.5, unit: '°',
    solution: ['A bisector makes two congruent angles.', '$m\\angle DBC = \\tfrac{1}{2}\\, m\\angle ABC$', '$m\\angle DBC = \\tfrac{1}{2}(138^\\circ) = 69^\\circ$'] },
  { id: 'p1-3', chapter: 'ch1', section: '1-5', set: 'chapter', type: 'numeric', prompt: 'Two angles are complementary. One angle is $14^\\circ$ larger than the other. Find the larger angle.', answer: 52, tolerance: 0.5, unit: '°',
    solution: ['Let the smaller angle be $x$. The larger angle is $x + 14$.', 'Complementary angles add to $90^\\circ$: $x + (x + 14) = 90$.', '$2x = 76$, so $x = 38$.', 'The larger angle is $38^\\circ + 14^\\circ = 52^\\circ$.'] },
  { id: 'p1-4', chapter: 'ch1', section: '1-5', set: 'chapter', type: 'mc', prompt: '$\\angle 1$ and $\\angle 2$ form a linear pair. $m\\angle 1 = 2x + 15$ and $m\\angle 2 = 3x - 10$. Find $m\\angle 2$.', choices: ['$35^\\circ$', '$85^\\circ$', '$95^\\circ$', '$105^\\circ$'], answer: 2,
    solution: ['A linear pair is supplementary (Postulate 1.10).', '$(2x + 15) + (3x - 10) = 180$', '$5x + 5 = 180$, so $x = 35$.', '$m\\angle 2 = 3(35) - 10 = 95^\\circ$'] },
  { id: 'p1-5', chapter: 'ch1', section: '1-2', set: 'chapter', type: 'mc', prompt: 'Four points are in space. No three are collinear. How many lines do pairs of these points determine?', choices: ['3', '4', '6', '8'], answer: 2,
    solution: ['Two points determine exactly one line (Postulate 1.1).', 'Count the pairs: $AB$, $AC$, $AD$, $BC$, $BD$, $CD$.', 'There are 6 lines.'] },
  { id: 'p1-6', chapter: 'ch1', section: '1-6', set: 'chapter', type: 'diagram', figure: { kind: 'parallel', angle: 118 }, prompt: 'Transversal $t$ cuts lines $m$ and $n$. $m\\angle 1 = 118^\\circ$. Find $m\\angle 2$, the angle next to $\\angle 1$ on the same line.', answer: 62, tolerance: 0.5, unit: '°',
    solution: ['$\\angle 1$ and $\\angle 2$ are adjacent, and their outer sides lie on line $m$.', 'They form a linear pair, so they are supplementary (Postulate 1.10).', '$m\\angle 2 = 180^\\circ - 118^\\circ = 62^\\circ$'] },

  // ---- Chapter 1 supplemental (answers only)
  { id: 's1-1', chapter: 'ch1', section: '1-3', set: 'supplemental', type: 'numeric', prompt: 'On a number line, $P$ is at $-11$ and $Q$ is at $4$. Find $PQ$.', answer: 15, tolerance: 0.5 },
  { id: 's1-2', chapter: 'ch1', section: '1-3', set: 'supplemental', type: 'numeric', prompt: '$M$ is the midpoint of $\\overline{RS}$. $RM = 4x - 3$ and $MS = 2x + 9$. Find $RS$.', answer: 42, tolerance: 0.5 },
  { id: 's1-3', chapter: 'ch1', section: '1-4', set: 'supplemental', type: 'numeric', prompt: '$D$ is in the interior of $\\angle ABC$. $m\\angle ABD = 48^\\circ$ and $m\\angle DBC = 57^\\circ$. Find $m\\angle ABC$.', answer: 105, tolerance: 0.5, unit: '°' },
  { id: 's1-4', chapter: 'ch1', section: '1-5', set: 'supplemental', type: 'numeric', prompt: 'Two angles are supplementary. One angle is four times the other. Find the smaller angle.', answer: 36, tolerance: 0.5, unit: '°' },
  { id: 's1-5', chapter: 'ch1', section: '1-2', set: 'supplemental', type: 'mc', prompt: 'Which set of points always lies in exactly one plane?', choices: ['Any two points', 'Any three points', 'Any three noncollinear points', 'Any four points'], answer: 2 },
  { id: 's1-6', chapter: 'ch1', section: '1-6', set: 'supplemental', type: 'mc', prompt: 'Which statement about two perpendicular lines is true?', choices: ['They never meet.', 'They form four right angles.', 'They are not coplanar.', 'They form two acute angles.'], answer: 1 },

  // ---- Chapter 1 exam bank
  { id: 'b1-1', chapter: 'ch1', section: '1-5', set: 'bank', type: 'numeric', prompt: 'An angle measures $x^\\circ$. Its supplement is three times its complement. Find $x$.', answer: 45, tolerance: 0.5,
    solution: ['Supplement: $180 - x$. Complement: $90 - x$.', '$180 - x = 3(90 - x)$', '$180 - x = 270 - 3x$, so $2x = 90$.', '$x = 45$'] },
  { id: 'b1-2', chapter: 'ch1', section: '1-4', set: 'bank', type: 'mc', prompt: '$\\overrightarrow{BD}$ bisects $\\angle ABC$. $m\\angle ABD = 4x - 6$ and $m\\angle DBC = 2x + 18$. Find $m\\angle ABC$.', choices: ['$12^\\circ$', '$42^\\circ$', '$84^\\circ$', '$168^\\circ$'], answer: 2,
    solution: ['A bisector makes two congruent angles: $4x - 6 = 2x + 18$.', '$2x = 24$, so $x = 12$.', '$m\\angle ABD = 4(12) - 6 = 42^\\circ$', '$m\\angle ABC = 2 \\cdot 42^\\circ = 84^\\circ$'] },
  { id: 'b1-3', chapter: 'ch1', section: '1-3', set: 'bank', type: 'numeric', prompt: '$B$ is between $A$ and $C$. $AC = 40$ and $BC = 3 \\cdot AB$. Find $AB$.', answer: 10, tolerance: 0.5,
    solution: ['Segment Addition Postulate: $AB + BC = AC$.', '$AB + 3 \\cdot AB = 40$', '$4 \\cdot AB = 40$, so $AB = 10$.'] },
],

theorems: [
  { id: '1.1', chapter: 'ch1', kind: 'Postulate', name: 'Two Points Determine a Line', statement: 'Through any two points there is exactly one line.', section: '1-2' },
  { id: '1.2', chapter: 'ch1', kind: 'Postulate', name: 'Three Points Determine a Plane', statement: 'Through any three noncollinear points there is exactly one plane.', section: '1-2' },
  { id: '1.3', chapter: 'ch1', kind: 'Postulate', name: 'Line in a Plane', statement: 'If two points lie in a plane, then the line through them lies in that plane.', section: '1-2' },
  { id: '1.4', chapter: 'ch1', kind: 'Postulate', name: 'Intersection of Two Lines', statement: 'If two lines intersect, then they intersect in exactly one point.', section: '1-2' },
  { id: '1.5', chapter: 'ch1', kind: 'Postulate', name: 'Intersection of Two Planes', statement: 'If two planes intersect, then they intersect in exactly one line.', section: '1-2' },
  { id: '1.6', chapter: 'ch1', kind: 'Postulate', name: 'Ruler Postulate', statement: 'The points of a line match the real numbers so that the distance between points $A$ and $B$ is $|a - b|$.', section: '1-3' },
  { id: '1.7', chapter: 'ch1', kind: 'Postulate', name: 'Segment Addition Postulate', statement: 'If $B$ is between $A$ and $C$, then $AB + BC = AC$.', section: '1-3' },
  { id: '1.8', chapter: 'ch1', kind: 'Postulate', name: 'Protractor Postulate', statement: 'The rays from a point on a line match the numbers from $0$ to $180$, so every angle has exactly one measure.', section: '1-4' },
  { id: '1.9', chapter: 'ch1', kind: 'Postulate', name: 'Angle Addition Postulate', statement: 'If $D$ is in the interior of $\\angle ABC$, then $m\\angle ABD + m\\angle DBC = m\\angle ABC$.', section: '1-4' },
  { id: '1.10', chapter: 'ch1', kind: 'Postulate', name: 'Linear Pair Postulate', statement: 'If two angles form a linear pair, then they are supplementary.', section: '1-5' },
  { id: '1.11', chapter: 'ch1', kind: 'Theorem', name: 'Vertical Angle Theorem', statement: 'Vertical angles are congruent.', section: '1-5' },
  { id: '1.12', chapter: 'ch1', kind: 'Theorem', name: 'Congruent Supplements Theorem', statement: 'If two angles are supplementary to the same angle or to congruent angles, then they are congruent.', section: '1-5' },
  { id: '1.13', chapter: 'ch1', kind: 'Theorem', name: 'Congruent Complements Theorem', statement: 'If two angles are complementary to the same angle or to congruent angles, then they are congruent.', section: '1-5' },
  { id: '1.14', chapter: 'ch1', kind: 'Theorem', name: 'Perpendicular Lines Theorem', statement: 'If two lines are perpendicular, then they form four right angles.', section: '1-6' },
],

glossary: [
  { term: 'Collinear points', def: 'Points that lie on the same line.', section: '1-1' },
  { term: 'Coplanar points', def: 'Points that lie in the same plane.', section: '1-1' },
  { term: 'Postulate', def: 'A statement accepted as true without proof.', section: '1-2' },
  { term: 'Theorem', def: 'A statement proved from postulates, definitions, and other theorems.', section: '1-2' },
  { term: 'Line segment', def: 'Two points on a line and all the points between them.', section: '1-3' },
  { term: 'Ray', def: 'Part of a line with one endpoint that goes on forever in one direction.', section: '1-3' },
  { term: 'Angle', def: 'Two rays with a common endpoint, called the vertex.', section: '1-4' },
  { term: 'Angle bisector', def: 'A ray that divides an angle into two congruent angles.', section: '1-4' },
  { term: 'Vertical angles', def: 'The two nonadjacent angles formed by two intersecting lines.', section: '1-5' },
  { term: 'Linear pair', def: 'Two adjacent angles whose noncommon sides are opposite rays.', section: '1-5' },
  { term: 'Complementary angles', def: 'Two angles whose measures add to $90^\\circ$.', section: '1-5' },
  { term: 'Skew lines', def: 'Lines that are not coplanar and never intersect.', section: '1-6' },
],
};
