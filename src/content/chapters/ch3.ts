// Chapter 3: Triangles. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch3: ChapterContent = {
chapter: { id: 'ch3', number: 3, title: 'Triangles', sections: [
  { id: '3-1', title: 'Sum of Angle Measure', kind: 'lesson', built: true, summary: 'The three angles of a triangle add to 180°. Subtract the two known angles from 180° to find the third.', formula: 'm\\angle A + m\\angle B + m\\angle C = 180^\\circ' },
  { id: '3-2', title: 'Exterior Angles', kind: 'lesson', built: true, summary: 'An exterior angle of a triangle equals the sum of the two remote interior angles. The three exterior angles, one at each vertex, add to 360°.', formula: 'm\\angle ACD = m\\angle A + m\\angle B' },
  { id: '3-3', title: 'Classifying Triangles by Angles', kind: 'lesson', built: true, summary: 'A triangle is acute, right, or obtuse by its largest angle. An equiangular triangle has three 60° angles.' },
  { id: '3-4', title: 'Classifying Triangles by Sides', kind: 'lesson', built: true, summary: 'A triangle is scalene, isosceles, or equilateral by how many sides are congruent: none, at least two, or all three.', formula: 'P = a + b + c' },
  { id: '3-5', title: 'Specially Named Sides and Angles', kind: 'lesson', built: true, summary: 'An isosceles triangle has two legs, a base, two base angles, and a vertex angle. A right triangle has a hypotenuse and two legs. Each side is opposite one angle and adjacent to the other two.', formula: 'a = BC,\\quad b = AC,\\quad c = AB' },
  { id: '3-6', title: 'Segments Inside and Outside Triangles', kind: 'lesson', built: true, parts: ['Base and Altitude', 'Median', 'Angle Bisector'], summary: 'An altitude is perpendicular from a vertex to the opposite side. A median goes to the midpoint of the opposite side. An angle bisector cuts the vertex angle in half.', formula: 'BM = MC = \\tfrac{1}{2}\\, BC' },
  { id: '3-7', title: 'Congruent Triangles', kind: 'lesson', built: true, parts: ['Proofs of Congruence', 'Corresponding Parts (CPCTC)'], summary: 'Two triangles are congruent when all six corresponding parts match. SSS, SAS, ASA, AAS, and HL prove congruence from three parts. CPCTC then gives the other parts.', formula: '\\triangle ABC \\cong \\triangle DEF' },
  { id: '3-8', title: 'Isosceles Triangles', kind: 'lesson', built: true, summary: 'The base angles of an isosceles triangle are congruent, and the converse is true. An equilateral triangle is equiangular. The bisector of the vertex angle is the perpendicular bisector of the base.', formula: '\\overline{AB} \\cong \\overline{AC} \\iff \\angle B \\cong \\angle C' },
  { id: '3-9', title: 'Triangle Inequality Theorems', kind: 'lesson', built: true, summary: 'Any two sides of a triangle add to more than the third side. The largest angle is opposite the longest side. An exterior angle is greater than either remote interior angle.', formula: 'a + b > c,\\quad a + c > b,\\quad b + c > a' },
  { id: '3-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '3-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
'3-1': {
  diagram: 'triangle',
  intro: [
    'A triangle is a closed figure with three sides. The three corners are the vertices. At each vertex the two sides form an interior angle. The three interior angles of every triangle add to $180^\\circ$.',
    'Here is why. Draw a line through vertex $A$ parallel to side $\\overline{BC}$. The line makes three angles at $A$ that add to $180^\\circ$. Two of them are alternate interior angles with $\\angle B$ and $\\angle C$. The third is $\\angle A$ itself.',
    'Drag any vertex of triangle $ABC$ in the diagram. Arrow keys nudge a selected vertex. Watch the three angle readouts and their sum. The sum stays at $180^\\circ$ for every shape.',
  ],
  definitions: [
    { term: 'Triangle', text: 'A closed figure made of three segments that join three points not on one line.' },
    { term: 'Vertex of a triangle', text: 'A point where two sides of the triangle meet.' },
    { term: 'Interior angle', text: 'An angle inside the triangle formed by two sides at a vertex.' },
  ],
  formulas: [
    { label: 'Triangle Angle Sum Theorem', tex: 'm\\angle A + m\\angle B + m\\angle C = 180^\\circ' },
    { label: 'Third angle', tex: 'm\\angle C = 180^\\circ - m\\angle A - m\\angle B' },
  ],
  theorems: ['3.1'],
  examples: [
    { title: 'Example 1 — Find the third angle', given: 'Two angles of a triangle measure $48^\\circ$ and $67^\\circ$. Find the third angle.', steps: [
      'The angles add to $180^\\circ$.',
      '$180^\\circ - 48^\\circ - 67^\\circ = 65^\\circ$',
      'The third angle measures $65^\\circ$.',
    ]},
    { title: 'Example 2 — Right triangle', given: 'A right triangle has one acute angle of $37^\\circ$. Find the other acute angle.', steps: [
      'The right angle is $90^\\circ$.',
      '$180^\\circ - 90^\\circ - 37^\\circ = 53^\\circ$',
      'The two acute angles of a right triangle always add to $90^\\circ$.',
    ]},
    { title: 'Example 3 — Angles with a variable', given: 'The angles of a triangle measure $2x$, $3x$, and $4x$. Find each angle.', steps: [
      '$2x + 3x + 4x = 180^\\circ$',
      '$9x = 180^\\circ$, so $x = 20^\\circ$',
      'The angles are $40^\\circ$, $60^\\circ$, and $80^\\circ$.',
    ]},
  ],
  checks: ['c3-1-1', 'c3-1-2', 'c3-1-3'],
},

'3-2': {
  diagram: 'triangle',
  intro: [
    'Extend one side of a triangle past a vertex. The angle between the extension and the other side at that vertex is an exterior angle. It forms a linear pair with the interior angle at that vertex. So the two angles add to $180^\\circ$.',
    'The two interior angles not at that vertex are the remote interior angles. The Exterior Angle Theorem says the exterior angle equals their sum. Here is why. The interior angle plus the exterior angle is $180^\\circ$. The interior angle plus the two remote angles is also $180^\\circ$.',
    'Take one exterior angle at each vertex. Each one is $180^\\circ$ minus its interior angle. The three together are $540^\\circ - 180^\\circ = 360^\\circ$.',
    'Drag any vertex in the diagram. Watch the exterior angle readout at $C$ and the sum of the two remote interior angles $A$ and $B$. The two values are always equal.',
  ],
  definitions: [
    { term: 'Exterior angle', text: 'An angle formed by one side of a triangle and the extension of an adjacent side.' },
    { term: 'Remote interior angles', text: 'The two interior angles of a triangle that are not adjacent to a given exterior angle.' },
    { term: 'Linear pair', text: 'Two adjacent angles whose outer sides form a straight line. They add to $180^\\circ$.' },
  ],
  formulas: [
    { label: 'Exterior Angle Theorem', tex: 'm\\angle ACD = m\\angle A + m\\angle B' },
    { label: 'Linear pair at the vertex', tex: 'm\\angle ACB + m\\angle ACD = 180^\\circ' },
    { label: 'Sum of exterior angles', tex: '\\text{one at each vertex: } 360^\\circ' },
  ],
  theorems: ['3.1', '3.2'],
  examples: [
    { title: 'Example 1 — Find the exterior angle', given: 'In triangle $ABC$, $m\\angle A = 42^\\circ$ and $m\\angle B = 73^\\circ$. Find the exterior angle at $C$.', steps: [
      'Use the Exterior Angle Theorem.',
      '$m\\angle ACD = 42^\\circ + 73^\\circ = 115^\\circ$',
    ]},
    { title: 'Example 2 — Find a remote interior angle', given: 'The exterior angle at $C$ measures $130^\\circ$. $m\\angle A = 55^\\circ$. Find $m\\angle B$.', steps: [
      'The exterior angle is the sum of the two remote interior angles.',
      '$130^\\circ = 55^\\circ + m\\angle B$',
      '$m\\angle B = 130^\\circ - 55^\\circ = 75^\\circ$',
    ]},
    { title: 'Example 3 — Interior from exterior', given: 'An exterior angle at vertex $B$ measures $112^\\circ$. Find the interior angle at $B$.', steps: [
      'The exterior angle and the interior angle form a linear pair.',
      '$m\\angle B = 180^\\circ - 112^\\circ = 68^\\circ$',
    ]},
  ],
  checks: ['c3-2-1', 'c3-2-2', 'c3-2-3'],
},

'3-3': {
  diagram: 'triangle',
  intro: [
    'We classify a triangle by its largest angle. An acute triangle has three angles less than $90^\\circ$. A right triangle has one angle of exactly $90^\\circ$. An obtuse triangle has one angle greater than $90^\\circ$. An equiangular triangle has three congruent angles, each $60^\\circ$.',
    'A triangle can have at most one right angle or one obtuse angle. Two angles of $90^\\circ$ or more add to $180^\\circ$ or more. Then nothing is left for the third angle. So the other two angles of a right or obtuse triangle are always acute.',
    'Drag a vertex in the diagram. Watch the classification by angles readout. Move vertex $C$ until the angle at $C$ reads $90^\\circ$ to make a right triangle. Move it a little farther to make the triangle obtuse.',
  ],
  definitions: [
    { term: 'Acute triangle', text: 'A triangle with three acute angles.' },
    { term: 'Right triangle', text: 'A triangle with one right angle.' },
    { term: 'Obtuse triangle', text: 'A triangle with one obtuse angle.' },
    { term: 'Equiangular triangle', text: 'A triangle with three congruent angles. Each angle measures $60^\\circ$.' },
  ],
  formulas: [
    { label: 'Equiangular triangle', tex: 'm\\angle A = m\\angle B = m\\angle C = \\tfrac{180^\\circ}{3} = 60^\\circ' },
  ],
  theorems: ['3.1'],
  examples: [
    { title: 'Example 1 — Three known angles', given: 'A triangle has angles of $50^\\circ$, $60^\\circ$, and $70^\\circ$. Classify it by its angles.', steps: [
      'Find the largest angle: $70^\\circ$.',
      '$70^\\circ < 90^\\circ$, so every angle is acute.',
      'The triangle is acute.',
    ]},
    { title: 'Example 2 — Two known angles', given: 'Two angles of a triangle measure $35^\\circ$ and $55^\\circ$. Classify the triangle.', steps: [
      'Find the third angle: $180^\\circ - 35^\\circ - 55^\\circ = 90^\\circ$.',
      'One angle is a right angle.',
      'The triangle is right.',
    ]},
    { title: 'Example 3 — Hidden obtuse angle', given: 'Two angles of a triangle measure $20^\\circ$ and $40^\\circ$. Classify the triangle.', steps: [
      'Find the third angle: $180^\\circ - 20^\\circ - 40^\\circ = 120^\\circ$.',
      '$120^\\circ > 90^\\circ$, so the triangle is obtuse.',
    ]},
  ],
  checks: ['c3-3-1', 'c3-3-2', 'c3-3-3'],
},

'3-4': {
  diagram: 'triangle',
  intro: [
    'We also classify a triangle by its sides. A scalene triangle has no two congruent sides. An isosceles triangle has at least two congruent sides. An equilateral triangle has three congruent sides. Every equilateral triangle is also isosceles.',
    'A triangle gets one name from each list. A right isosceles triangle has a right angle and two congruent legs. An obtuse scalene triangle has an obtuse angle and three different sides.',
    'Drag a vertex in the diagram. Watch the three side lengths and the classification by sides readout. Move vertex $A$ until two side lengths match. The readout changes from scalene to isosceles.',
  ],
  definitions: [
    { term: 'Scalene triangle', text: 'A triangle with no congruent sides.' },
    { term: 'Isosceles triangle', text: 'A triangle with at least two congruent sides.' },
    { term: 'Equilateral triangle', text: 'A triangle with three congruent sides.' },
    { term: 'Perimeter of a triangle', text: 'The sum of the three side lengths.' },
  ],
  formulas: [
    { label: 'Perimeter', tex: 'P = a + b + c' },
    { label: 'Equilateral perimeter', tex: 'P = 3s' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Classify by sides', given: 'A triangle has sides of 7, 7, and 10. Classify it by its sides.', steps: [
      'Two sides are congruent: $7 = 7$.',
      'The third side is different.',
      'The triangle is isosceles.',
    ]},
    { title: 'Example 2 — Equilateral side', given: 'An equilateral triangle has a perimeter of 27 cm. Find the length of one side.', steps: [
      'All three sides are equal.',
      '$s = 27 \\div 3 = 9$',
      'Each side is 9 cm.',
    ]},
    { title: 'Example 3 — Isosceles base', given: 'An isosceles triangle has two congruent sides of 8 and a perimeter of 22. Find the third side.', steps: [
      'The two congruent sides add to $8 + 8 = 16$.',
      '$22 - 16 = 6$',
      'The third side is 6.',
    ]},
  ],
  checks: ['c3-4-1', 'c3-4-2', 'c3-4-3'],
},

'3-5': {
  diagram: 'triangle',
  intro: [
    'The parts of an isosceles triangle have special names. The two congruent sides are the legs. The third side is the base. The two angles at the ends of the base are the base angles. The angle between the legs is the vertex angle.',
    'The parts of a right triangle also have names. The side opposite the right angle is the hypotenuse. The two sides that form the right angle are the legs. The hypotenuse is always the longest side.',
    'A side is opposite an angle when it does not touch that angle. Side $a$ is opposite $\\angle A$, so $a = BC$. A side is adjacent to an angle when it is one of the two sides that form the angle. Sides $b$ and $c$ are adjacent to $\\angle A$.',
    'Drag vertex $C$ in the diagram until the angle at $C$ reads $90^\\circ$. Side $c$, which is $\\overline{AB}$, is now the hypotenuse. Watch the longest side readout. It names side $c$.',
  ],
  definitions: [
    { term: 'Legs of an isosceles triangle', text: 'The two congruent sides.' },
    { term: 'Base of an isosceles triangle', text: 'The side that is not a leg.' },
    { term: 'Base angles', text: 'The two angles at the ends of the base of an isosceles triangle.' },
    { term: 'Vertex angle', text: 'The angle between the two legs of an isosceles triangle.' },
    { term: 'Hypotenuse', text: 'The side of a right triangle opposite the right angle.' },
  ],
  formulas: [
    { label: 'Naming sides', tex: 'a = BC,\\quad b = AC,\\quad c = AB' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Parts of an isosceles triangle', given: 'In triangle $PQR$, $\\overline{PQ} \\cong \\overline{PR}$. Name the legs, the base, the vertex angle, and the base angles.', steps: [
      'The legs are the congruent sides: $\\overline{PQ}$ and $\\overline{PR}$.',
      'The base is the third side: $\\overline{QR}$.',
      'The vertex angle is between the legs: $\\angle P$.',
      'The base angles are $\\angle Q$ and $\\angle R$.',
    ]},
    { title: 'Example 2 — Parts of a right triangle', given: 'Triangle $ABC$ has a right angle at $B$. Name the hypotenuse and the legs.', steps: [
      'The hypotenuse is opposite the right angle: $\\overline{AC}$.',
      'The legs form the right angle: $\\overline{AB}$ and $\\overline{BC}$.',
    ]},
    { title: 'Example 3 — Opposite and adjacent', given: 'In triangle $ABC$, name the side opposite $\\angle B$ and the two sides adjacent to $\\angle B$.', steps: [
      'The opposite side does not touch $B$: $\\overline{AC}$, which is side $b$.',
      'The adjacent sides form $\\angle B$: $\\overline{AB}$ and $\\overline{BC}$.',
    ]},
  ],
  checks: ['c3-5-1', 'c3-5-2', 'c3-5-3'],
},

'3-6': {
  diagram: 'triangle',
  intro: [
    'Any side of a triangle can be the base. The altitude to that base is the perpendicular segment from the opposite vertex to the line that contains the base. In an acute triangle all three altitudes are inside. In a right triangle two altitudes are the legs. In an obtuse triangle two altitudes fall outside, and you must extend the base to reach them.',
    'A median is a segment from a vertex to the midpoint of the opposite side. It cuts that side into two congruent parts. An angle bisector of a triangle is a segment from a vertex to the opposite side that cuts the angle into two congruent angles. A perpendicular bisector of a side is a line through the midpoint of the side at a right angle. It does not need to pass through a vertex.',
    'Each kind of segment comes in threes, and the three always meet at one point. The three altitudes meet at the orthocenter. The three medians meet at the centroid. The three angle bisectors meet at the incenter. The three perpendicular bisectors meet at the circumcenter.',
    'Use the toggle in the diagram to show the altitude, the median, and the angle bisector from vertex $A$. Drag vertex $B$ until the angle at $B$ is obtuse. Watch the altitude from $A$ fall outside the triangle. Then make $AB = AC$. The three segments merge into one.',
  ],
  definitions: [
    { term: 'Altitude of a triangle', text: 'A perpendicular segment from a vertex to the line that contains the opposite side.' },
    { term: 'Median', text: 'A segment from a vertex to the midpoint of the opposite side.' },
    { term: 'Angle bisector of a triangle', text: 'A segment from a vertex to the opposite side that cuts the angle into two congruent angles.' },
    { term: 'Perpendicular bisector', text: 'A line through the midpoint of a segment that is perpendicular to the segment.' },
  ],
  formulas: [
    { label: 'Altitude from A', tex: '\\overline{AD} \\perp \\overline{BC}' },
    { label: 'Median from A', tex: 'BM = MC = \\tfrac{1}{2}\\, BC' },
    { label: 'Angle bisector from A', tex: 'm\\angle BAD = m\\angle DAC = \\tfrac{1}{2}\\, m\\angle BAC' },
  ],
  theorems: [],
  examples: [
    { title: 'Example 1 — Median', given: '$\\overline{AM}$ is a median of triangle $ABC$. $BC = 14$. Find $BM$.', steps: [
      'A median ends at the midpoint of the opposite side.',
      '$BM = \\tfrac{1}{2}(14) = 7$',
    ]},
    { title: 'Example 2 — Angle bisector', given: '$\\overline{AD}$ bisects $\\angle BAC$. $m\\angle BAC = 76^\\circ$. Find $m\\angle BAD$.', steps: [
      'An angle bisector makes two congruent angles.',
      '$m\\angle BAD = \\tfrac{1}{2}(76^\\circ) = 38^\\circ$',
    ]},
    { title: 'Example 3 — Altitude in a right triangle', given: 'Triangle $ABC$ has a right angle at $C$. Find the altitude from $A$ to side $\\overline{BC}$.', steps: [
      'The altitude from $A$ is perpendicular to $\\overline{BC}$.',
      '$\\overline{AC} \\perp \\overline{BC}$ because $\\angle C$ is a right angle.',
      'So the leg $\\overline{AC}$ is the altitude.',
    ]},
  ],
  checks: ['c3-6-1', 'c3-6-2', 'c3-6-3'],
},

'3-7': {
  intro: [
    'Two triangles are congruent when they have the same size and the same shape. The congruence statement $\\triangle ABC \\cong \\triangle DEF$ lists the vertices in matching order. So $A$ matches $D$, $B$ matches $E$, and $C$ matches $F$. The matching sides and angles are the corresponding parts.',
    'You do not need to check all six parts. Three parts in the right places are enough. SSS, SAS, and ASA are postulates. AAS and HL are theorems. In SAS the angle must be the included angle, between the two sides. In ASA the side must be the included side, between the two angles. SSA and AAA do not prove congruence.',
    'The Third Angles Theorem says two matching pairs of angles force the third pair to match. This is why AAS works. Two angles and a non-included side become two angles and the included side.',
    'Once you prove two triangles congruent, every pair of corresponding parts is congruent. We call this CPCTC. Use it to find a missing side or angle.',
  ],
  definitions: [
    { term: 'Congruent triangles', text: 'Triangles whose corresponding sides and corresponding angles are all congruent.' },
    { term: 'Corresponding parts', text: 'Sides or angles in matching positions in two triangles.' },
    { term: 'Included angle', text: 'The angle between two given sides of a triangle.' },
    { term: 'Included side', text: 'The side between two given angles of a triangle.' },
    { term: 'CPCTC', text: 'Corresponding Parts of Congruent Triangles are Congruent.' },
  ],
  formulas: [
    { label: 'Congruence statement', tex: '\\triangle ABC \\cong \\triangle DEF \\implies \\overline{AB} \\cong \\overline{DE},\\ \\angle A \\cong \\angle D' },
  ],
  theorems: ['3.3', '3.4', '3.5', '3.6', '3.7', '3.8'],
  examples: [
    { title: 'Example 1 — Name the postulate', given: '$\\overline{AB} \\cong \\overline{DE}$, $\\overline{BC} \\cong \\overline{EF}$, and $\\angle B \\cong \\angle E$. Which postulate proves $\\triangle ABC \\cong \\triangle DEF$?', steps: [
      '$\\angle B$ is between $\\overline{AB}$ and $\\overline{BC}$. It is the included angle.',
      '$\\angle E$ is between $\\overline{DE}$ and $\\overline{EF}$.',
      'Two sides and the included angle match. Use SAS.',
    ]},
    { title: 'Example 2 — Use CPCTC', given: '$\\triangle ABC \\cong \\triangle XYZ$. $AB = 7$ and $m\\angle C = 40^\\circ$. Find $XY$ and $m\\angle Z$.', steps: [
      'Match the vertices: $A \\to X$, $B \\to Y$, $C \\to Z$.',
      '$\\overline{AB}$ corresponds to $\\overline{XY}$, so $XY = 7$.',
      '$\\angle C$ corresponds to $\\angle Z$, so $m\\angle Z = 40^\\circ$.',
    ]},
    { title: 'Example 3 — Third Angles Theorem', given: 'In $\\triangle ABC$ and $\\triangle DEF$, $m\\angle A = m\\angle D = 50^\\circ$ and $m\\angle B = m\\angle E = 60^\\circ$. Find $m\\angle F$.', steps: [
      'The third angles are congruent, so $m\\angle F = m\\angle C$.',
      '$m\\angle C = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ$',
      '$m\\angle F = 70^\\circ$',
    ]},
  ],
  checks: ['c3-7-1', 'c3-7-2', 'c3-7-3'],
},

'3-8': {
  diagram: 'triangle',
  intro: [
    'The Isosceles Triangle Theorem says that if two sides of a triangle are congruent, the angles opposite them are congruent. In other words, the base angles of an isosceles triangle are congruent. The converse is also true. If two angles are congruent, the sides opposite them are congruent.',
    'Two corollaries follow for equilateral triangles. An equilateral triangle is equiangular, and each angle measures $60^\\circ$. An equiangular triangle is equilateral.',
    'The bisector of the vertex angle is a special segment. It is perpendicular to the base and it bisects the base. So in an isosceles triangle the angle bisector, the altitude, the median, and the perpendicular bisector from the vertex angle are all the same segment.',
    'Drag vertex $A$ in the diagram until the side readout shows $AB = AC$. Watch the angles at $B$ and $C$ become equal. Turn on the toggle. The altitude, the median, and the angle bisector from $A$ are one segment.',
  ],
  definitions: [
    { term: 'Converse', text: 'The statement you get when you swap the hypothesis and the conclusion of a theorem.' },
    { term: 'Corollary', text: 'A theorem that follows directly from another theorem.' },
    { term: 'Base angles of an isosceles triangle', text: 'The two angles opposite the congruent sides.' },
  ],
  formulas: [
    { label: 'Base angles from the vertex angle', tex: 'm\\angle B = m\\angle C = \\tfrac{1}{2}(180^\\circ - m\\angle A)' },
    { label: 'Vertex angle from a base angle', tex: 'm\\angle A = 180^\\circ - 2\\, m\\angle B' },
    { label: 'Equilateral triangle', tex: 'm\\angle A = m\\angle B = m\\angle C = 60^\\circ' },
  ],
  theorems: ['3.9', '3.10', '3.11', '3.12', '3.13'],
  examples: [
    { title: 'Example 1 — Find the base angles', given: 'An isosceles triangle has a vertex angle of $40^\\circ$. Find each base angle.', steps: [
      'The base angles are congruent.',
      'Together they measure $180^\\circ - 40^\\circ = 140^\\circ$.',
      'Each base angle is $140^\\circ \\div 2 = 70^\\circ$.',
    ]},
    { title: 'Example 2 — Find the vertex angle', given: 'One base angle of an isosceles triangle measures $35^\\circ$. Find the vertex angle.', steps: [
      'The other base angle is also $35^\\circ$.',
      '$180^\\circ - 35^\\circ - 35^\\circ = 110^\\circ$',
      'The vertex angle is $110^\\circ$.',
    ]},
    { title: 'Example 3 — Bisector of the vertex angle', given: 'In triangle $ABC$, $\\overline{AB} \\cong \\overline{AC}$ and $BC = 12$. $\\overline{AD}$ bisects $\\angle A$. Find $BD$ and $m\\angle ADB$.', steps: [
      'The bisector of the vertex angle is the perpendicular bisector of the base.',
      '$BD = \\tfrac{1}{2}(12) = 6$',
      '$m\\angle ADB = 90^\\circ$',
    ]},
  ],
  checks: ['c3-8-1', 'c3-8-2', 'c3-8-3'],
},

'3-9': {
  diagram: 'triangle',
  intro: [
    'The Triangle Inequality Theorem says the sum of any two sides of a triangle is greater than the third side. To test three lengths, add the two shorter ones. If the sum is greater than the longest length, the three lengths make a triangle. If not, the two short sides cannot reach each other.',
    'The theorem also limits the third side when you know two sides. The third side is greater than the difference of the two sides and less than their sum.',
    'Sides and angles are linked. The larger angle is opposite the longer side. The converse is also true. The longer side is opposite the larger angle. An exterior angle is greater than either remote interior angle, because it equals their sum.',
    'Drag a vertex in the diagram. Watch the longest side and largest angle readouts. The largest angle is always across from the longest side. Now drag vertex $C$ toward side $\\overline{AB}$. The two short sides add to almost the third side, and the triangle flattens.',
  ],
  definitions: [
    { term: 'Triangle inequality', text: 'The rule that any two sides of a triangle add to more than the third side.' },
    { term: 'Opposite side', text: 'The side of a triangle that does not touch a given angle.' },
    { term: 'Range of the third side', text: 'The set of lengths between the difference and the sum of two known sides.' },
  ],
  formulas: [
    { label: 'Triangle Inequality Theorem', tex: 'a + b > c,\\quad a + c > b,\\quad b + c > a' },
    { label: 'Range of the third side', tex: '|a - b| < c < a + b' },
    { label: 'Sides and angles', tex: 'a > b \\iff m\\angle A > m\\angle B' },
  ],
  theorems: ['3.14', '3.15', '3.16', '3.17'],
  examples: [
    { title: 'Example 1 — Test three lengths', given: 'Can segments of 4, 7, and 12 form a triangle?', steps: [
      'Add the two shorter sides: $4 + 7 = 11$.',
      'Compare with the longest side: $11 < 12$.',
      'The sum is not greater. No triangle is possible.',
    ]},
    { title: 'Example 2 — Range of the third side', given: 'Two sides of a triangle are 5 and 9. Find the range for the third side $x$.', steps: [
      'The third side is less than the sum: $x < 5 + 9 = 14$.',
      'The third side is greater than the difference: $x > 9 - 5 = 4$.',
      '$4 < x < 14$',
    ]},
    { title: 'Example 3 — Order the sides', given: 'In triangle $ABC$, $m\\angle A = 50^\\circ$, $m\\angle B = 60^\\circ$, and $m\\angle C = 70^\\circ$. List the sides from shortest to longest.', steps: [
      'The shortest side is opposite the smallest angle, $\\angle A$. That side is $a$.',
      'The longest side is opposite the largest angle, $\\angle C$. That side is $c$.',
      '$a < b < c$, so $BC < AC < AB$.',
    ]},
  ],
  checks: ['c3-9-1', 'c3-9-2', 'c3-9-3'],
},
},

questions: [
  // ---- 3-1 checks
  { id: 'c3-1-1', chapter: 'ch3', section: '3-1', set: 'check', type: 'numeric', prompt: 'Two angles of a triangle measure $52^\\circ$ and $71^\\circ$. Find the third angle.', answer: 57, tolerance: 0.5, unit: '°',
    solution: ['The angles of a triangle add to $180^\\circ$.', '$180^\\circ - 52^\\circ - 71^\\circ = 57^\\circ$'] },
  { id: 'c3-1-2', chapter: 'ch3', section: '3-1', set: 'check', type: 'mc', prompt: 'The angles of a triangle measure $x$, $x + 10^\\circ$, and $x + 20^\\circ$. Find the largest angle.', choices: ['$50^\\circ$', '$60^\\circ$', '$70^\\circ$', '$80^\\circ$'], answer: 2,
    solution: ['$x + (x + 10^\\circ) + (x + 20^\\circ) = 180^\\circ$', '$3x + 30^\\circ = 180^\\circ$, so $x = 50^\\circ$.', 'The largest angle is $x + 20^\\circ = 70^\\circ$.'] },
  { id: 'c3-1-3', chapter: 'ch3', section: '3-1', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 10, b: 4.2, c: 9.1 }, prompt: 'In triangle $ABC$, $m\\angle A = 90^\\circ$ and $m\\angle B = 25^\\circ$. Find $m\\angle C$.', answer: 65, tolerance: 0.5, unit: '°',
    solution: ['Use the Triangle Angle Sum Theorem.', '$m\\angle C = 180^\\circ - 90^\\circ - 25^\\circ = 65^\\circ$'] },
  // ---- 3-2 checks
  { id: 'c3-2-1', chapter: 'ch3', section: '3-2', set: 'check', type: 'numeric', prompt: 'The two remote interior angles of an exterior angle measure $38^\\circ$ and $64^\\circ$. Find the exterior angle.', answer: 102, tolerance: 0.5, unit: '°',
    solution: ['An exterior angle equals the sum of its two remote interior angles.', '$38^\\circ + 64^\\circ = 102^\\circ$'] },
  { id: 'c3-2-2', chapter: 'ch3', section: '3-2', set: 'check', type: 'numeric', prompt: 'In triangle $ABC$ the exterior angle at $C$ measures $125^\\circ$. $m\\angle B = 40^\\circ$. Find $m\\angle A$.', answer: 85, tolerance: 0.5, unit: '°',
    solution: ['The exterior angle at $C$ equals $m\\angle A + m\\angle B$.', '$125^\\circ = m\\angle A + 40^\\circ$', '$m\\angle A = 85^\\circ$'] },
  { id: 'c3-2-3', chapter: 'ch3', section: '3-2', set: 'check', type: 'mc', prompt: 'Take one exterior angle at each vertex of a triangle. What is the sum of the three exterior angles?', choices: ['$180^\\circ$', '$270^\\circ$', '$360^\\circ$', '$540^\\circ$'], answer: 2,
    solution: ['Each exterior angle is $180^\\circ$ minus its interior angle.', 'The three interior angles add to $180^\\circ$.', '$3(180^\\circ) - 180^\\circ = 360^\\circ$'] },
  // ---- 3-3 checks
  { id: 'c3-3-1', chapter: 'ch3', section: '3-3', set: 'check', type: 'mc', prompt: 'Two angles of a triangle measure $30^\\circ$ and $45^\\circ$. Classify the triangle by its angles.', choices: ['Acute', 'Right', 'Obtuse', 'Equiangular'], answer: 2,
    solution: ['Find the third angle: $180^\\circ - 30^\\circ - 45^\\circ = 105^\\circ$.', '$105^\\circ > 90^\\circ$, so the triangle is obtuse.'] },
  { id: 'c3-3-2', chapter: 'ch3', section: '3-3', set: 'check', type: 'mc', prompt: 'Why can a triangle not have two obtuse angles?', choices: ['An obtuse angle must be opposite the shortest side.', 'Two obtuse angles would add to more than $180^\\circ$.', 'A triangle has only one vertex.', 'Obtuse angles are always congruent.'], answer: 1,
    solution: ['Each obtuse angle is greater than $90^\\circ$.', 'Two of them add to more than $180^\\circ$.', 'The three angles must add to exactly $180^\\circ$, so this is impossible.'] },
  { id: 'c3-3-3', chapter: 'ch3', section: '3-3', set: 'check', type: 'numeric', prompt: 'Find the measure of each angle of an equiangular triangle.', answer: 60, tolerance: 0.5, unit: '°',
    solution: ['The three angles are congruent and add to $180^\\circ$.', '$180^\\circ \\div 3 = 60^\\circ$'] },
  // ---- 3-4 checks
  { id: 'c3-4-1', chapter: 'ch3', section: '3-4', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 6, b: 8, c: 10 }, prompt: 'The sides of triangle $ABC$ measure 6, 8, and 10. Classify the triangle by its sides.', choices: ['Scalene', 'Isosceles', 'Equilateral', 'Equiangular'], answer: 0,
    solution: ['Compare the sides: $6$, $8$, and $10$ are all different.', 'No two sides are congruent, so the triangle is scalene.'] },
  { id: 'c3-4-2', chapter: 'ch3', section: '3-4', set: 'check', type: 'numeric', prompt: 'An equilateral triangle has a perimeter of 36 cm. Find the length of one side.', answer: 12, tolerance: 0.5, unit: 'cm',
    solution: ['All three sides are equal.', '$36 \\div 3 = 12$ cm'] },
  { id: 'c3-4-3', chapter: 'ch3', section: '3-4', set: 'check', type: 'mc', prompt: 'Which statement is always true?', choices: ['Every isosceles triangle is equilateral.', 'Every equilateral triangle is isosceles.', 'A scalene triangle has two congruent sides.', 'An isosceles triangle has no congruent sides.'], answer: 1,
    solution: ['An isosceles triangle has at least two congruent sides.', 'An equilateral triangle has three congruent sides, so it has at least two.', 'So every equilateral triangle is isosceles.'] },
  // ---- 3-5 checks
  { id: 'c3-5-1', chapter: 'ch3', section: '3-5', set: 'check', type: 'mc', prompt: 'Triangle $DEF$ has a right angle at $E$. Which side is the hypotenuse?', choices: ['$\\overline{DE}$', '$\\overline{EF}$', '$\\overline{DF}$', 'There is no hypotenuse.'], answer: 2,
    solution: ['The hypotenuse is opposite the right angle.', 'The side that does not touch $E$ is $\\overline{DF}$.'] },
  { id: 'c3-5-2', chapter: 'ch3', section: '3-5', set: 'check', type: 'mc', prompt: 'In triangle $XYZ$, $\\overline{XY} \\cong \\overline{XZ}$. Which angle is the vertex angle?', choices: ['$\\angle X$', '$\\angle Y$', '$\\angle Z$', '$\\angle XZY$'], answer: 0,
    solution: ['The legs are $\\overline{XY}$ and $\\overline{XZ}$.', 'The vertex angle is between the legs. Both legs meet at $X$.', 'The vertex angle is $\\angle X$.'] },
  { id: 'c3-5-3', chapter: 'ch3', section: '3-5', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 3, b: 4, c: 5 }, prompt: 'Triangle $ABC$ has a right angle at $C$. Which side is the hypotenuse?', choices: ['$\\overline{BC}$', '$\\overline{AC}$', '$\\overline{AB}$', 'The longer leg'], answer: 2,
    solution: ['The hypotenuse is opposite the right angle at $C$.', 'Side $c$ is opposite $C$, and $c = AB$.', 'The hypotenuse is $\\overline{AB}$, the longest side.'] },
  // ---- 3-6 checks
  { id: 'c3-6-1', chapter: 'ch3', section: '3-6', set: 'check', type: 'numeric', prompt: '$\\overline{AM}$ is a median of triangle $ABC$. $BC = 18$. Find $BM$.', answer: 9, tolerance: 0.5,
    solution: ['A median ends at the midpoint of the opposite side.', '$BM = \\tfrac{1}{2}(18) = 9$'] },
  { id: 'c3-6-2', chapter: 'ch3', section: '3-6', set: 'check', type: 'numeric', prompt: '$\\overline{AD}$ is an angle bisector of triangle $ABC$. $m\\angle BAD = 24^\\circ$. Find $m\\angle BAC$.', answer: 48, tolerance: 0.5, unit: '°',
    solution: ['The bisector makes two congruent angles.', '$m\\angle BAC = 2(24^\\circ) = 48^\\circ$'] },
  { id: 'c3-6-3', chapter: 'ch3', section: '3-6', set: 'check', type: 'mc', prompt: 'How many altitudes of an obtuse triangle lie outside the triangle?', choices: ['0', '1', '2', '3'], answer: 2,
    solution: ['The altitude from the obtuse vertex falls inside the triangle.', 'The altitudes from the two acute vertices fall outside.', 'So 2 altitudes are outside.'] },
  // ---- 3-7 checks
  { id: 'c3-7-1', chapter: 'ch3', section: '3-7', set: 'check', type: 'mc', prompt: '$\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $\\overline{AB} \\cong \\overline{DE}$. Which postulate proves $\\triangle ABC \\cong \\triangle DEF$?', choices: ['SSS', 'SAS', 'ASA', 'AAS'], answer: 2,
    solution: ['$\\overline{AB}$ is between $\\angle A$ and $\\angle B$. It is the included side.', 'Two angles and the included side match.', 'Use ASA.'] },
  { id: 'c3-7-2', chapter: 'ch3', section: '3-7', set: 'check', type: 'numeric', prompt: '$\\triangle PQR \\cong \\triangle STU$. $m\\angle Q = 63^\\circ$. Find $m\\angle T$.', answer: 63, tolerance: 0.5, unit: '°',
    solution: ['Match the vertices: $Q$ is second, and $T$ is second.', 'By CPCTC, $\\angle Q \\cong \\angle T$.', '$m\\angle T = 63^\\circ$'] },
  { id: 'c3-7-3', chapter: 'ch3', section: '3-7', set: 'check', type: 'mc', prompt: 'Two right triangles have congruent hypotenuses and one pair of congruent legs. Which theorem proves them congruent?', choices: ['SSS', 'HL', 'ASA', 'AAA'], answer: 1,
    solution: ['The triangles are right triangles.', 'The hypotenuse and one leg of each are congruent.', 'This is the Hypotenuse-Leg Theorem, HL.'] },
  // ---- 3-8 checks
  { id: 'c3-8-1', chapter: 'ch3', section: '3-8', set: 'check', type: 'numeric', prompt: 'The vertex angle of an isosceles triangle measures $52^\\circ$. Find one base angle.', answer: 64, tolerance: 0.5, unit: '°',
    solution: ['The base angles are congruent.', 'Together they measure $180^\\circ - 52^\\circ = 128^\\circ$.', 'Each base angle is $128^\\circ \\div 2 = 64^\\circ$.'] },
  { id: 'c3-8-2', chapter: 'ch3', section: '3-8', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 6.8, b: 10, c: 10 }, prompt: 'In triangle $ABC$, $AB = AC = 10$ and $BC = 6.8$. $m\\angle A = 40^\\circ$. Find $m\\angle B$.', answer: 70, tolerance: 0.5, unit: '°',
    solution: ['$\\overline{AB} \\cong \\overline{AC}$, so $\\angle B \\cong \\angle C$ by the Isosceles Triangle Theorem.', '$m\\angle B + m\\angle C = 180^\\circ - 40^\\circ = 140^\\circ$', '$m\\angle B = 70^\\circ$'] },
  { id: 'c3-8-3', chapter: 'ch3', section: '3-8', set: 'check', type: 'mc', prompt: 'An equiangular triangle has one side of length 11. Find its perimeter.', choices: ['11', '22', '33', '44'], answer: 2,
    solution: ['An equiangular triangle is equilateral.', 'All three sides are 11.', '$P = 3(11) = 33$'] },
  // ---- 3-9 checks
  { id: 'c3-9-1', chapter: 'ch3', section: '3-9', set: 'check', type: 'mc', prompt: 'Which set of lengths can be the sides of a triangle?', choices: ['2, 3, 5', '3, 4, 8', '5, 6, 10', '1, 2, 4'], answer: 2,
    solution: ['Add the two shorter sides and compare with the longest.', '$2 + 3 = 5$, not greater. $3 + 4 = 7 < 8$. $1 + 2 = 3 < 4$.', '$5 + 6 = 11 > 10$. Only 5, 6, 10 works.'] },
  { id: 'c3-9-2', chapter: 'ch3', section: '3-9', set: 'check', type: 'numeric', prompt: 'Two sides of a triangle are 6 and 10. Find the largest whole number the third side can be.', answer: 15, tolerance: 0.5,
    solution: ['The third side must be less than $6 + 10 = 16$.', 'The largest whole number less than 16 is 15.'] },
  { id: 'c3-9-3', chapter: 'ch3', section: '3-9', set: 'check', type: 'diagram', figure: { kind: 'triangle', a: 5, b: 7, c: 9 }, prompt: 'Triangle $ABC$ has sides $a = 5$, $b = 7$, and $c = 9$. Which angle is the largest?', choices: ['$\\angle A$', '$\\angle B$', '$\\angle C$', 'They are equal.'], answer: 2,
    solution: ['The largest angle is opposite the longest side.', 'The longest side is $c = 9$, which is opposite $\\angle C$.'] },

  // ---- Chapter 3 problems
  { id: 'p3-1', chapter: 'ch3', section: '3-1', set: 'chapter', type: 'diagram', figure: { kind: 'triangle', a: 5.7, b: 10, c: 8.7 }, prompt: 'In triangle $ABC$, $m\\angle A = 35^\\circ$ and $m\\angle B = 85^\\circ$. Find $m\\angle C$.', answer: 60, tolerance: 0.5, unit: '°',
    solution: ['State Theorem 3.1: the three angles add to $180^\\circ$.', '$m\\angle C = 180^\\circ - m\\angle A - m\\angle B$', '$m\\angle C = 180^\\circ - 35^\\circ - 85^\\circ = 60^\\circ$'] },
  { id: 'p3-2', chapter: 'ch3', section: '3-2', set: 'chapter', type: 'numeric', prompt: 'In triangle $ABC$, the exterior angle at $C$ measures $118^\\circ$. $m\\angle A = 47^\\circ$. Find $m\\angle B$.', answer: 71, tolerance: 0.5, unit: '°',
    solution: ['Use the Exterior Angle Theorem. The exterior angle at $C$ equals $m\\angle A + m\\angle B$.', '$118^\\circ = 47^\\circ + m\\angle B$', '$m\\angle B = 118^\\circ - 47^\\circ = 71^\\circ$'] },
  { id: 'p3-3', chapter: 'ch3', section: '3-8', set: 'chapter', type: 'numeric', prompt: 'One base angle of an isosceles triangle measures $48^\\circ$. Find the vertex angle.', answer: 84, tolerance: 0.5, unit: '°',
    solution: ['By the Isosceles Triangle Theorem the base angles are congruent.', 'The two base angles add to $2(48^\\circ) = 96^\\circ$.', 'The vertex angle is $180^\\circ - 96^\\circ = 84^\\circ$.'] },
  { id: 'p3-4', chapter: 'ch3', section: '3-9', set: 'chapter', type: 'mc', prompt: 'Two sides of a triangle measure 8 and 13. Which length cannot be the third side?', choices: ['6', '12', '20', '21'], answer: 3,
    solution: ['The third side $x$ must satisfy $13 - 8 < x < 13 + 8$.', 'So $5 < x < 21$.', '21 is not less than 21. It cannot be the third side.'] },
  { id: 'p3-5', chapter: 'ch3', section: '3-7', set: 'chapter', type: 'mc', prompt: '$\\triangle ABC \\cong \\triangle DEF$. Which statement is not always true?', choices: ['$\\overline{AB} \\cong \\overline{DE}$', '$\\angle B \\cong \\angle E$', '$\\overline{BC} \\cong \\overline{DF}$', '$\\angle C \\cong \\angle F$'], answer: 2,
    solution: ['Match the vertices in order: $A \\to D$, $B \\to E$, $C \\to F$.', '$\\overline{BC}$ corresponds to $\\overline{EF}$, not $\\overline{DF}$.', 'So $\\overline{BC} \\cong \\overline{DF}$ is not given by CPCTC.'] },
  { id: 'p3-6', chapter: 'ch3', section: '3-1', set: 'chapter', type: 'numeric', prompt: 'The angles of a triangle are in the ratio $1 : 2 : 3$. Find the largest angle.', answer: 90, tolerance: 0.5, unit: '°',
    solution: ['Write the angles as $x$, $2x$, and $3x$.', '$x + 2x + 3x = 180^\\circ$, so $6x = 180^\\circ$ and $x = 30^\\circ$.', 'The largest angle is $3x = 90^\\circ$.'] },

  // ---- Chapter 3 supplemental (answers only)
  { id: 's3-1', chapter: 'ch3', section: '3-1', set: 'supplemental', type: 'numeric', prompt: 'Two angles of a triangle measure $29^\\circ$ and $102^\\circ$. Find the third angle.', answer: 49, tolerance: 0.5, unit: '°' },
  { id: 's3-2', chapter: 'ch3', section: '3-2', set: 'supplemental', type: 'numeric', prompt: 'An interior angle of a triangle measures $57^\\circ$. Find the exterior angle at the same vertex.', answer: 123, tolerance: 0.5, unit: '°' },
  { id: 's3-3', chapter: 'ch3', section: '3-3', set: 'supplemental', type: 'mc', prompt: 'Each angle of a triangle measures $60^\\circ$. Which name describes the triangle by its angles most exactly?', choices: ['Acute only', 'Right', 'Obtuse', 'Equiangular'], answer: 3 },
  { id: 's3-4', chapter: 'ch3', section: '3-6', set: 'supplemental', type: 'numeric', prompt: '$\\overline{AM}$ is a median of triangle $ABC$. $BC = 23$. Find $MC$.', answer: 11.5, tolerance: 0.05 },
  { id: 's3-5', chapter: 'ch3', section: '3-8', set: 'supplemental', type: 'numeric', prompt: 'The vertex angle of an isosceles triangle measures $96^\\circ$. Find one base angle.', answer: 42, tolerance: 0.5, unit: '°' },
  { id: 's3-6', chapter: 'ch3', section: '3-9', set: 'supplemental', type: 'diagram', figure: { kind: 'triangle', a: 4, b: 6, c: 7 }, prompt: 'Triangle $ABC$ has sides $a = 4$, $b = 6$, and $c = 7$. Which angle is the smallest?', choices: ['$\\angle A$', '$\\angle B$', '$\\angle C$', 'They are equal.'], answer: 0 },

  // ---- Chapter 3 exam bank
  { id: 'b3-1', chapter: 'ch3', section: '3-2', set: 'bank', type: 'numeric', prompt: 'In triangle $ABC$, the exterior angle at $C$ measures $134^\\circ$. $m\\angle B = 59^\\circ$. Find $m\\angle A$.', answer: 75, tolerance: 0.5, unit: '°',
    solution: ['The exterior angle equals the sum of the two remote interior angles.', '$134^\\circ = m\\angle A + 59^\\circ$', '$m\\angle A = 75^\\circ$'] },
  { id: 'b3-2', chapter: 'ch3', section: '3-9', set: 'bank', type: 'mc', prompt: 'Two sides of a triangle measure 7 and 11. Which inequality gives all possible lengths $x$ of the third side?', choices: ['$4 < x < 18$', '$4 \\le x \\le 18$', '$7 < x < 11$', '$x > 18$'], answer: 0,
    solution: ['The third side is less than the sum: $x < 7 + 11 = 18$.', 'The third side is greater than the difference: $x > 11 - 7 = 4$.', '$4 < x < 18$'] },
  { id: 'b3-3', chapter: 'ch3', section: '3-8', set: 'bank', type: 'numeric', prompt: 'One base angle of an isosceles triangle measures $74^\\circ$. Find the vertex angle.', answer: 32, tolerance: 0.5, unit: '°',
    solution: ['The base angles are congruent, so both measure $74^\\circ$.', '$180^\\circ - 74^\\circ - 74^\\circ = 32^\\circ$'] },
],

theorems: [
  { id: '3.1', chapter: 'ch3', kind: 'Theorem', name: 'Triangle Angle Sum Theorem', statement: 'The three interior angles of a triangle add to $180^\\circ$.', section: '3-1' },
  { id: '3.2', chapter: 'ch3', kind: 'Theorem', name: 'Exterior Angle Theorem', statement: 'The measure of an exterior angle of a triangle equals the sum of the measures of its two remote interior angles.', section: '3-2' },
  { id: '3.3', chapter: 'ch3', kind: 'Theorem', name: 'Third Angles Theorem', statement: 'If two angles of one triangle are congruent to two angles of another triangle, then the third angles are congruent.', section: '3-7' },
  { id: '3.4', chapter: 'ch3', kind: 'Postulate', name: 'SSS Postulate', statement: 'If three sides of one triangle are congruent to three sides of another triangle, then the triangles are congruent.', section: '3-7' },
  { id: '3.5', chapter: 'ch3', kind: 'Postulate', name: 'SAS Postulate', statement: 'If two sides and the included angle of one triangle are congruent to two sides and the included angle of another, then the triangles are congruent.', section: '3-7' },
  { id: '3.6', chapter: 'ch3', kind: 'Postulate', name: 'ASA Postulate', statement: 'If two angles and the included side of one triangle are congruent to two angles and the included side of another, then the triangles are congruent.', section: '3-7' },
  { id: '3.7', chapter: 'ch3', kind: 'Theorem', name: 'AAS Theorem', statement: 'If two angles and a non-included side of one triangle are congruent to the corresponding parts of another, then the triangles are congruent.', section: '3-7' },
  { id: '3.8', chapter: 'ch3', kind: 'Theorem', name: 'HL Theorem', statement: 'If the hypotenuse and a leg of one right triangle are congruent to the hypotenuse and a leg of another, then the triangles are congruent.', section: '3-7' },
  { id: '3.9', chapter: 'ch3', kind: 'Theorem', name: 'Isosceles Triangle Theorem', statement: 'If two sides of a triangle are congruent, then the angles opposite those sides are congruent.', section: '3-8' },
  { id: '3.10', chapter: 'ch3', kind: 'Theorem', name: 'Converse of the Isosceles Triangle Theorem', statement: 'If two angles of a triangle are congruent, then the sides opposite those angles are congruent.', section: '3-8' },
  { id: '3.11', chapter: 'ch3', kind: 'Theorem', name: 'Equilateral Triangle Corollary', statement: 'An equilateral triangle is equiangular, and each angle measures $60^\\circ$.', section: '3-8' },
  { id: '3.12', chapter: 'ch3', kind: 'Theorem', name: 'Equiangular Triangle Corollary', statement: 'An equiangular triangle is equilateral.', section: '3-8' },
  { id: '3.13', chapter: 'ch3', kind: 'Theorem', name: 'Vertex Angle Bisector Theorem', statement: 'The bisector of the vertex angle of an isosceles triangle is the perpendicular bisector of the base.', section: '3-8' },
  { id: '3.14', chapter: 'ch3', kind: 'Theorem', name: 'Triangle Inequality Theorem', statement: 'The sum of the lengths of any two sides of a triangle is greater than the length of the third side.', section: '3-9' },
  { id: '3.15', chapter: 'ch3', kind: 'Theorem', name: 'Side-Angle Inequality Theorem', statement: 'If two sides of a triangle are not congruent, then the larger angle is opposite the longer side.', section: '3-9' },
  { id: '3.16', chapter: 'ch3', kind: 'Theorem', name: 'Angle-Side Inequality Theorem', statement: 'If two angles of a triangle are not congruent, then the longer side is opposite the larger angle.', section: '3-9' },
  { id: '3.17', chapter: 'ch3', kind: 'Theorem', name: 'Exterior Angle Inequality Theorem', statement: 'An exterior angle of a triangle is greater than either of its remote interior angles.', section: '3-9' },
],

glossary: [
  { term: 'Triangle', def: 'A closed figure made of three segments that join three points not on one line.', section: '3-1' },
  { term: 'Exterior angle of a triangle', def: 'An angle formed by one side of a triangle and the extension of an adjacent side.', section: '3-2' },
  { term: 'Remote interior angles', def: 'The two interior angles not adjacent to a given exterior angle.', section: '3-2' },
  { term: 'Acute triangle', def: 'A triangle with three acute angles.', section: '3-3' },
  { term: 'Obtuse triangle', def: 'A triangle with one obtuse angle.', section: '3-3' },
  { term: 'Scalene triangle', def: 'A triangle with no congruent sides.', section: '3-4' },
  { term: 'Isosceles triangle', def: 'A triangle with at least two congruent sides.', section: '3-4' },
  { term: 'Equilateral triangle', def: 'A triangle with three congruent sides.', section: '3-4' },
  { term: 'Base angles', def: 'The two angles at the ends of the base of an isosceles triangle.', section: '3-5' },
  { term: 'Altitude of a triangle', def: 'A perpendicular segment from a vertex to the line that contains the opposite side.', section: '3-6' },
  { term: 'Median', def: 'A segment from a vertex of a triangle to the midpoint of the opposite side.', section: '3-6' },
  { term: 'CPCTC', def: 'Corresponding Parts of Congruent Triangles are Congruent.', section: '3-7' },
],
};
