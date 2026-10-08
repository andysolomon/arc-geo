// Question bank. set: 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
// type: 'mc' (answer = index), 'numeric' (answer = number, tolerance), 'diagram' (numeric or mc + figure).
// figure: { kind: 'inscribed'|'prism'|'points'|'sector', ...params } rendered by the app.
import type { Question } from './types';

export const questions: Question[] = [
  // ---- 8-4 checks
  { id: 'c8-4-1', chapter: 'ch8', section: '8-4', set: 'check', type: 'diagram', figure: { kind: 'inscribed', arc: 96 }, prompt: 'Arc $AC$ measures $96^\\circ$. Find $m\\angle ABC$.', answer: 48, tolerance: 0.5, unit: '°',
    solution: ['An inscribed angle is half its intercepted arc.', '$m\\angle ABC = \\tfrac{1}{2}(96^\\circ) = 48^\\circ$'] },
  { id: 'c8-4-2', chapter: 'ch8', section: '8-4', set: 'check', type: 'mc', prompt: 'Two inscribed angles intercept the same arc. Which statement is true?', choices: ['They are supplementary.', 'They are congruent.', 'They add to $90^\\circ$.', 'The larger one is twice the smaller one.'], answer: 1,
    solution: ['Each angle is half the same arc.', 'Half of one number is one value. So the angles are equal.'] },
  { id: 'c8-4-3', chapter: 'ch8', section: '8-4', set: 'check', type: 'numeric', prompt: '$\\overline{XZ}$ is a diameter. Point $Y$ is on the circle. Find $m\\angle XYZ$.', answer: 90, tolerance: 0.5, unit: '°',
    solution: ['A diameter cuts off a semicircle of $180^\\circ$.', 'The inscribed angle is half of $180^\\circ$, which is $90^\\circ$.'] },
  // ---- 9-1 checks
  { id: 'c9-1-1', chapter: 'ch9', section: '9-1', set: 'check', type: 'numeric', prompt: 'A right prism has a base area of 18 cm² and a height of 7 cm. Find the volume.', answer: 126, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = Bh$', '$V = 18 \\cdot 7 = 126\\ \\text{cm}^3$'] },
  { id: 'c9-1-2', chapter: 'ch9', section: '9-1', set: 'check', type: 'mc', prompt: 'An oblique prism and a right prism have equal bases and equal heights. Compare the volumes.', choices: ['The right prism has more volume.', 'The oblique prism has more volume.', 'The volumes are equal.', 'You need the lateral edge to decide.'], answer: 2,
    solution: ['Volume is $Bh$ for every prism.', 'Both prisms have the same $B$ and the same $h$. So the volumes are equal.'] },
  { id: 'c9-1-3', chapter: 'ch9', section: '9-1', set: 'check', type: 'diagram', figure: { kind: 'prism', w: 6, d: 2, h: 5 }, prompt: 'Find the total surface area of this right rectangular prism (6 by 2 by 5).', answer: 104, tolerance: 0.5, unit: 'units²',
    solution: ['Base area: $B = 6 \\cdot 2 = 12$', 'Perimeter: $p = 2(6) + 2(2) = 16$', 'Lateral area: $LA = ph = 16 \\cdot 5 = 80$', 'Total: $TA = 80 + 2(12) = 104$'] },
  // ---- 10-2 checks
  { id: 'c10-2-1', chapter: 'ch10', section: '10-2', set: 'check', type: 'diagram', figure: { kind: 'points', a: [-2, -1], b: [4, 7] }, prompt: 'Find the distance between $A(-2, -1)$ and $B(4, 7)$.', answer: 10, tolerance: 0.05,
    solution: ['$\\Delta x = 4 - (-2) = 6$, $\\Delta y = 7 - (-1) = 8$', '$d = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$'] },
  { id: 'c10-2-2', chapter: 'ch10', section: '10-2', set: 'check', type: 'mc', prompt: 'Which expression gives the distance between $(2, 5)$ and $(7, 5)$?', choices: ['$\\sqrt{5^2 + 10^2}$', '$\\sqrt{5^2 + 0^2}$', '$\\sqrt{2^2 + 7^2}$', '$7 - 2 + 5$'], answer: 1,
    solution: ['The $y$-coordinates are equal, so $\\Delta y = 0$.', '$\\Delta x = 7 - 2 = 5$. The distance is $\\sqrt{25} = 5$.'] },
  { id: 'c10-2-3', chapter: 'ch10', section: '10-2', set: 'check', type: 'numeric', prompt: 'Find the distance between $(1, 1)$ and $(4, 5)$.', answer: 5, tolerance: 0.05,
    solution: ['$\\Delta x = 3$, $\\Delta y = 4$', '$d = \\sqrt{9 + 16} = 5$'] },

  // ---- Chapter 8 problems (full solutions)
  { id: 'p8-1', chapter: 'ch8', section: '8-4', set: 'chapter', type: 'diagram', figure: { kind: 'inscribed', arc: 140 }, prompt: 'Arc $AC$ measures $140^\\circ$. Find $m\\angle ABC$.', answer: 70, tolerance: 0.5, unit: '°',
    solution: ['Identify the inscribed angle. The vertex $B$ is on the circle.', 'Apply Theorem 8.5: $m\\angle ABC = \\tfrac{1}{2} m\\widehat{AC}$.', '$m\\angle ABC = \\tfrac{1}{2}(140^\\circ) = 70^\\circ$'] },
  { id: 'p8-2', chapter: 'ch8', section: '8-2', set: 'chapter', type: 'numeric', prompt: 'A central angle measures $72^\\circ$. Find the measure of its major arc.', answer: 288, tolerance: 0.5, unit: '°',
    solution: ['The minor arc equals the central angle: $72^\\circ$.', 'The full circle is $360^\\circ$.', 'Major arc $= 360^\\circ - 72^\\circ = 288^\\circ$'] },
  { id: 'p8-3', chapter: 'ch8', section: '8-8', set: 'chapter', type: 'diagram', figure: { kind: 'sector', r: 6, angle: 60 }, prompt: 'A circle has radius 6. A sector has a central angle of $60^\\circ$. Find the arc length. Use $\\pi \\approx 3.14$.', answer: 6.28, tolerance: 0.05,
    solution: ['The fraction of the circle is $\\frac{60}{360} = \\frac{1}{6}$.', 'The circumference is $2\\pi r = 12\\pi$.', 'Arc length $= \\tfrac{1}{6}(12\\pi) = 2\\pi \\approx 6.28$'] },
  { id: 'p8-4', chapter: 'ch8', section: '8-5', set: 'chapter', type: 'mc', prompt: 'Two chords cross inside a circle. The intercepted arcs measure $80^\\circ$ and $40^\\circ$. Find the angle between the chords.', choices: ['$20^\\circ$', '$40^\\circ$', '$60^\\circ$', '$120^\\circ$'], answer: 2,
    solution: ['Use the chord-chord angle theorem.', 'The angle is half the sum of the arcs.', '$\\tfrac{1}{2}(80^\\circ + 40^\\circ) = 60^\\circ$'] },
  // ---- Chapter 8 supplemental (answers only)
  { id: 's8-1', chapter: 'ch8', section: '8-4', set: 'supplemental', type: 'numeric', prompt: 'An inscribed angle measures $41^\\circ$. Find its intercepted arc.', answer: 82, tolerance: 0.5, unit: '°' },
  { id: 's8-2', chapter: 'ch8', section: '8-7', set: 'supplemental', type: 'numeric', prompt: 'Two chords cross. One chord has segments 3 and 8. The other has a segment of 4. Find the other segment.', answer: 6, tolerance: 0.05 },
  { id: 's8-3', chapter: 'ch8', section: '8-8', set: 'supplemental', type: 'numeric', prompt: 'A sector of a circle with radius 10 has a central angle of $90^\\circ$. Find its area. Use $\\pi \\approx 3.14$.', answer: 78.5, tolerance: 0.3 },
  { id: 's8-4', chapter: 'ch8', section: '8-6', set: 'supplemental', type: 'mc', prompt: 'A diameter is perpendicular to a chord of length 16. How long is each half of the chord?', choices: ['4', '8', '16', '32'], answer: 1 },

  // ---- Chapter 9 problems
  { id: 'p9-1', chapter: 'ch9', section: '9-1', set: 'chapter', type: 'diagram', figure: { kind: 'prism', w: 5, d: 3, h: 4 }, prompt: 'Find the volume of this right rectangular prism (5 by 3 by 4).', answer: 60, tolerance: 0.5, unit: 'units³',
    solution: ['Base area: $B = 5 \\cdot 3 = 15$', 'Volume: $V = Bh = 15 \\cdot 4 = 60$'] },
  { id: 'p9-2', chapter: 'ch9', section: '9-2', set: 'chapter', type: 'numeric', prompt: 'A cylinder has radius 3 and height 10. Find the volume. Use $\\pi \\approx 3.14$.', answer: 282.6, tolerance: 0.5,
    solution: ['$V = \\pi r^2 h$', '$V = \\pi (3^2)(10) = 90\\pi$', '$90 \\cdot 3.14 = 282.6$'] },
  { id: 'p9-3', chapter: 'ch9', section: '9-3', set: 'chapter', type: 'mc', prompt: 'A pyramid and a prism have the same base and height. The prism has volume 90. Find the pyramid volume.', choices: ['30', '45', '90', '270'], answer: 0,
    solution: ['A pyramid is one third of the matching prism.', '$V = \\tfrac{1}{3}(90) = 30$'] },
  { id: 'p9-4', chapter: 'ch9', section: '9-5', set: 'chapter', type: 'numeric', prompt: 'Find the surface area of a sphere with radius 2. Use $\\pi \\approx 3.14$.', answer: 50.24, tolerance: 0.2,
    solution: ['$SA = 4\\pi r^2$', '$SA = 4\\pi(4) = 16\\pi$', '$16 \\cdot 3.14 = 50.24$'] },
  // ---- Chapter 9 supplemental
  { id: 's9-1', chapter: 'ch9', section: '9-1', set: 'supplemental', type: 'numeric', prompt: 'An oblique prism has base area 24 and height 5. Find the volume.', answer: 120, tolerance: 0.5 },
  { id: 's9-2', chapter: 'ch9', section: '9-4', set: 'supplemental', type: 'numeric', prompt: 'A cone has radius 3 and height 4. Find the volume. Use $\\pi \\approx 3.14$.', answer: 37.68, tolerance: 0.2 },
  { id: 's9-3', chapter: 'ch9', section: '9-2', set: 'supplemental', type: 'numeric', prompt: 'A cylinder has radius 2 and height 7. Find the lateral area. Use $\\pi \\approx 3.14$.', answer: 87.92, tolerance: 0.3 },
  { id: 's9-4', chapter: 'ch9', section: '9-5', set: 'supplemental', type: 'mc', prompt: 'A sphere has radius 3. Find its volume.', choices: ['$12\\pi$', '$27\\pi$', '$36\\pi$', '$108\\pi$'], answer: 2 },

  // ---- Chapter 10 problems
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
  { id: 'b8-1', chapter: 'ch8', section: '8-4', set: 'bank', type: 'numeric', prompt: 'A quadrilateral is inscribed in a circle. One angle is $115^\\circ$. Find the opposite angle.', answer: 65, tolerance: 0.5, unit: '°', solution: ['Opposite angles of an inscribed quadrilateral are supplementary.', '$180^\\circ - 115^\\circ = 65^\\circ$'] },
  { id: 'b8-2', chapter: 'ch8', section: '8-1', set: 'bank', type: 'mc', prompt: 'A circle has diameter 14. Find the radius.', choices: ['28', '14', '7', '3.5'], answer: 2, solution: ['$r = d \\div 2 = 7$'] },
  { id: 'b9-1', chapter: 'ch9', section: '9-3', set: 'bank', type: 'numeric', prompt: 'A square pyramid has base side 6 and height 5. Find the volume.', answer: 60, tolerance: 0.5, solution: ['$B = 36$', '$V = \\tfrac{1}{3}(36)(5) = 60$'] },
  { id: 'b9-2', chapter: 'ch9', section: '9-1', set: 'bank', type: 'mc', prompt: 'Which solid has two congruent, parallel bases and rectangular lateral faces?', choices: ['Pyramid', 'Right prism', 'Cone', 'Sphere'], answer: 1, solution: ['A right prism has parallel bases and rectangular lateral faces.'] },
  { id: 'b10-1', chapter: 'ch10', section: '10-6', set: 'bank', type: 'mc', prompt: 'A line has slope 3 and passes through $(1, 2)$. Which is its point-slope form?', choices: ['$y - 2 = 3(x - 1)$', '$y + 2 = 3(x + 1)$', '$y = 3x + 2$', '$3x - y = 1$'], answer: 0, solution: ['Point-slope form: $y - y_1 = m(x - x_1)$', 'Substitute $m = 3$, $(x_1, y_1) = (1, 2)$.'] },
  { id: 'b10-2', chapter: 'ch10', section: '10-1', set: 'bank', type: 'mc', prompt: 'In which quadrant is the point $(-3, 5)$?', choices: ['I', 'II', 'III', 'IV'], answer: 1, solution: ['$x$ is negative and $y$ is positive. That is Quadrant II.'] },
];
