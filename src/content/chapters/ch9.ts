// Chapter 9: Solid Geometry. Text follows ASD-STE100: short sentences, active voice, one idea each.
// Inline math uses $...$ (KaTeX). Questions: set 'check' (in-lesson), 'chapter' (full solutions), 'supplemental' (answer only), 'bank' (exam only).
import type { ChapterContent } from '../types';

export const ch9: ChapterContent = {
chapter: { id: 'ch9', number: 9, title: 'Solid Geometry', sections: [
  { id: '9-1', title: 'Prisms', kind: 'lesson', built: true, parts: ['Oblique vs. Right Prisms', 'Volume of a Prism'], summary: 'A prism has two parallel, congruent bases. Its volume is the base area times the height.', formula: 'V = Bh' },
  { id: '9-2', title: 'Right Circular Cylinders', kind: 'lesson', built: true, summary: 'A cylinder is a prism with circular bases. Its lateral surface unrolls into a rectangle.', formula: 'V = \\pi r^2 h, \\quad LA = 2\\pi r h' },
  { id: '9-3', title: 'Pyramids', kind: 'lesson', built: true, summary: 'A pyramid has one base and a point called the apex. Its volume is one third of the matching prism.', formula: 'V = \\tfrac{1}{3} B h' },
  { id: '9-4', title: 'Right Circular Cones', kind: 'lesson', built: true, summary: 'A cone is a pyramid with a circular base. The slant height goes from the apex to the edge of the base.', formula: 'V = \\tfrac{1}{3}\\pi r^2 h, \\quad LA = \\pi r \\ell' },
  { id: '9-5', title: 'Spheres', kind: 'lesson', built: true, summary: 'A sphere is the set of all points in space at one distance from a center.', formula: 'V = \\tfrac{4}{3}\\pi r^3, \\quad SA = 4\\pi r^2' },
  { id: '9-p', title: 'Chapter Problems', kind: 'problems' },
  { id: '9-s', title: 'Supplemental Chapter Problems', kind: 'supplemental' },
]},

lessons: {
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
'9-2': {
  diagram: 'solid',
  intro: [
    'A right circular cylinder is a solid with two congruent circular bases. The bases lie in parallel planes. The axis joins the two centers. In a right cylinder, the axis is perpendicular to the bases.',
    'The radius $r$ is the radius of a base. The height $h$ is the distance between the bases. In a right cylinder, the height equals the length of the axis.',
    'The volume follows the prism rule, $V = Bh$. The base is a circle, so $B = \\pi r^2$. Cut the lateral surface along one line and unroll it. You get a rectangle. Its width is the circumference $2\\pi r$. Its height is $h$. So the lateral area is $LA = 2\\pi r h$.',
    'In the diagram, use the segmented control to choose Cylinder. Use the sliders to change the radius and the height. Watch the readouts for the volume, the lateral area, and the surface area. Double the height. The volume doubles. Double the radius. The volume grows four times. The radius changes the volume faster than the height.',
  ],
  definitions: [
    { term: 'Right circular cylinder', text: 'A solid with two congruent circular bases and an axis perpendicular to the bases.' },
    { term: 'Axis of a cylinder', text: 'The segment that joins the centers of the two bases.' },
    { term: 'Radius of a cylinder', text: 'The radius of one of the circular bases.' },
    { term: 'Height of a cylinder', text: 'The perpendicular distance between the two bases.' },
  ],
  formulas: [
    { label: 'Volume of a cylinder', tex: 'V = \\pi r^2 h' },
    { label: 'Lateral area of a right cylinder', tex: 'LA = 2\\pi r h' },
    { label: 'Surface area of a right cylinder', tex: 'SA = 2\\pi r h + 2\\pi r^2' },
  ],
  theorems: ['9.1', '9.3', '9.4'],
  examples: [
    { title: 'Example 1 — Volume', given: 'A right cylinder has radius 4 cm and height 10 cm. Find the volume. Use $\\pi \\approx 3.14$.', steps: [
      'Find the base area. $B = \\pi r^2 = \\pi (4^2) = 16\\pi\\ \\text{cm}^2$',
      'Multiply by the height. $V = Bh = 16\\pi \\cdot 10 = 160\\pi\\ \\text{cm}^3$',
      'Use 3.14 for $\\pi$. $V \\approx 160 \\cdot 3.14 = 502.4\\ \\text{cm}^3$',
    ]},
    { title: 'Example 2 — Lateral area and surface area', given: 'A right cylinder has radius 3 in and height 8 in. Find the lateral area and the surface area. Use $\\pi \\approx 3.14$.', steps: [
      'Unroll the lateral surface. The rectangle is $2\\pi r$ by $h$.',
      'Lateral area: $LA = 2\\pi r h = 2\\pi (3)(8) = 48\\pi \\approx 150.72\\ \\text{in}^2$',
      'Two bases: $2B = 2\\pi r^2 = 2\\pi (9) = 18\\pi$',
      'Surface area: $SA = 48\\pi + 18\\pi = 66\\pi \\approx 207.24\\ \\text{in}^2$',
    ]},
    { title: 'Example 3 — Find the height', given: 'A right cylinder has radius 5 m. Its volume is $200\\pi\\ \\text{m}^3$. Find the height.', steps: [
      'Start with the volume formula. $V = \\pi r^2 h$',
      'Put in the known values. $200\\pi = \\pi (5^2) h = 25\\pi h$',
      'Divide both sides by $25\\pi$. $h = 8$ m',
    ]},
  ],
  checks: ['c9-2-1', 'c9-2-2', 'c9-2-3'],
},
'9-3': {
  diagram: 'solid',
  intro: [
    'A pyramid is a solid with one base and one point called the apex. The apex is not in the plane of the base. Each lateral face is a triangle. The lateral faces meet at the apex.',
    'The height $h$ is the perpendicular distance from the apex to the base. In a regular pyramid, the base is a regular polygon. The apex is directly above the center of the base. All lateral faces are congruent isosceles triangles.',
    'The slant height $\\ell$ is the height of one lateral face. It runs from the apex to the midpoint of a base edge. Do not confuse it with the height $h$. The height, the slant height, and half a base side make a right triangle. So $\\ell^2 = h^2 + (\\tfrac{s}{2})^2$ for a square base of side $s$.',
    'A pyramid holds one third of the prism with the same base and height. So $V = \\tfrac{1}{3}Bh$. Each lateral face of a regular pyramid has area $\\tfrac{1}{2} s \\ell$. Add all the faces. The sides add up to the base perimeter $P$. So $LA = \\tfrac{1}{2}P\\ell$.',
    'In the diagram, use the segmented control to choose Pyramid. The base is a square. Use the sliders to change the base side and the height. Watch the slant height, the volume, the lateral area, and the surface area. Double the base side. The volume grows four times. Double the height. The volume only doubles.',
  ],
  definitions: [
    { term: 'Apex', text: 'The point where the lateral faces of a pyramid or cone meet.' },
    { term: 'Regular pyramid', text: 'A pyramid with a regular polygon base and an apex above the center of the base.' },
    { term: 'Height of a pyramid', text: 'The perpendicular distance from the apex to the base.' },
    { term: 'Slant height of a pyramid', text: 'The height of one lateral face, from the apex to the midpoint of a base edge.' },
  ],
  formulas: [
    { label: 'Volume of a pyramid', tex: 'V = \\tfrac{1}{3} B h' },
    { label: 'Lateral area of a regular pyramid', tex: 'LA = \\tfrac{1}{2} P \\ell' },
    { label: 'Surface area of a regular pyramid', tex: 'SA = LA + B' },
    { label: 'Slant height, square base', tex: '\\ell^2 = h^2 + \\left(\\tfrac{s}{2}\\right)^2' },
  ],
  theorems: ['9.1', '9.5', '9.8'],
  examples: [
    { title: 'Example 1 — Volume', given: 'A square pyramid has base side 6 cm and height 4 cm. Find the volume.', steps: [
      'Find the base area. $B = 6^2 = 36\\ \\text{cm}^2$',
      'Use one third of the base area times the height. $V = \\tfrac{1}{3}(36)(4) = 48\\ \\text{cm}^3$',
    ]},
    { title: 'Example 2 — Lateral area and surface area', given: 'A regular square pyramid has base side 10 in and slant height 13 in. Find the lateral area and the surface area.', steps: [
      'Find the base perimeter. $P = 4 \\cdot 10 = 40$ in',
      'Lateral area: $LA = \\tfrac{1}{2} P \\ell = \\tfrac{1}{2}(40)(13) = 260\\ \\text{in}^2$',
      'Base area: $B = 10^2 = 100\\ \\text{in}^2$',
      'Surface area: $SA = LA + B = 260 + 100 = 360\\ \\text{in}^2$',
    ]},
    { title: 'Example 3 — Height to slant height', given: 'A regular square pyramid has base side 16 m and height 6 m. Find the slant height and the lateral area.', steps: [
      'Half the base side is 8 m. The height, half the side, and the slant height make a right triangle.',
      '$\\ell^2 = 6^2 + 8^2 = 36 + 64 = 100$, so $\\ell = 10$ m',
      'Base perimeter: $P = 4 \\cdot 16 = 64$ m',
      'Lateral area: $LA = \\tfrac{1}{2}(64)(10) = 320\\ \\text{m}^2$',
    ]},
  ],
  checks: ['c9-3-1', 'c9-3-2', 'c9-3-3'],
},
'9-4': {
  diagram: 'solid',
  intro: [
    'A right circular cone is a solid with one circular base and one apex. The axis joins the apex to the center of the base. In a right cone, the axis is perpendicular to the base. The height $h$ is the length of the axis.',
    'The slant height $\\ell$ is the distance from the apex to any point on the edge of the base. The radius, the height, and the slant height make a right triangle. So $\\ell = \\sqrt{r^2 + h^2}$.',
    'A cone is a pyramid with a circular base. So its volume is one third of the matching cylinder, $V = \\tfrac{1}{3}\\pi r^2 h$. Its lateral area follows the pyramid rule $\\tfrac{1}{2}P\\ell$ with $P = 2\\pi r$. So $LA = \\pi r \\ell$. Add the one base for the surface area.',
    'In the diagram, use the segmented control to choose Cone. Use the sliders to change the radius and the height. Watch the slant height, the volume, the lateral area, and the surface area. Double the radius. The volume grows four times. Double the height. The volume only doubles. The slant height changes with both sliders.',
  ],
  definitions: [
    { term: 'Right circular cone', text: 'A solid with one circular base and an apex directly above the center of the base.' },
    { term: 'Axis of a cone', text: 'The segment from the apex to the center of the base.' },
    { term: 'Height of a cone', text: 'The perpendicular distance from the apex to the base.' },
    { term: 'Slant height of a cone', text: 'The distance from the apex to a point on the edge of the base.' },
  ],
  formulas: [
    { label: 'Volume of a cone', tex: 'V = \\tfrac{1}{3}\\pi r^2 h' },
    { label: 'Slant height of a right cone', tex: '\\ell = \\sqrt{r^2 + h^2}' },
    { label: 'Lateral area of a right cone', tex: 'LA = \\pi r \\ell' },
    { label: 'Surface area of a right cone', tex: 'SA = \\pi r \\ell + \\pi r^2' },
  ],
  theorems: ['9.4', '9.5', '9.6'],
  examples: [
    { title: 'Example 1 — Volume and surface area', given: 'A right cone has radius 6 cm and height 8 cm. Find the volume and the surface area. Use $\\pi \\approx 3.14$.', steps: [
      'Volume: $V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi (36)(8) = 96\\pi \\approx 301.44\\ \\text{cm}^3$',
      'Slant height: $\\ell = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$ cm',
      'Lateral area: $LA = \\pi r \\ell = \\pi (6)(10) = 60\\pi$',
      'Surface area: $SA = 60\\pi + \\pi (6^2) = 96\\pi \\approx 301.44\\ \\text{cm}^2$',
    ]},
    { title: 'Example 2 — Slant height first', given: 'A right cone has radius 5 in and height 12 in. Find the lateral area and the surface area. Use $\\pi \\approx 3.14$.', steps: [
      'Find the slant height. $\\ell = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$ in',
      'Lateral area: $LA = \\pi (5)(13) = 65\\pi \\approx 204.1\\ \\text{in}^2$',
      'Base area: $B = \\pi (5^2) = 25\\pi$',
      'Surface area: $SA = 65\\pi + 25\\pi = 90\\pi \\approx 282.6\\ \\text{in}^2$',
    ]},
    { title: 'Example 3 — Cone inside a cylinder', given: 'A cone and a cylinder have the same radius and the same height. The cylinder has volume $150\\pi$. Find the cone volume.', steps: [
      'A cone is one third of the matching cylinder.',
      '$V = \\tfrac{1}{3}(150\\pi) = 50\\pi$',
    ]},
  ],
  checks: ['c9-4-1', 'c9-4-2', 'c9-4-3'],
},
'9-5': {
  diagram: 'solid',
  intro: [
    'A sphere is the set of all points in space at one distance from a center. That distance is the radius $r$. A sphere has no base, no faces, and no height. The radius sets everything.',
    'A plane through the center cuts the sphere in a great circle. A great circle is the largest circle on the sphere. Its radius is $r$, so its area is $\\pi r^2$. The plane also cuts the sphere into two hemispheres. A hemisphere is half of a sphere.',
    'The surface area of a sphere is four great circles, $SA = 4\\pi r^2$. The volume is $V = \\tfrac{4}{3}\\pi r^3$. Note the powers. The surface area uses $r^2$. The volume uses $r^3$.',
    'In the diagram, use the segmented control to choose Sphere. For a sphere, only the radius matters. Use the radius slider. Watch the volume and the surface area. Double the radius. The surface area grows four times. The volume grows eight times. The volume changes much faster than the surface area.',
  ],
  definitions: [
    { term: 'Center of a sphere', text: 'The point at the same distance from every point of the sphere.' },
    { term: 'Radius of a sphere', text: 'The distance from the center to any point on the sphere.' },
    { term: 'Great circle', text: 'The circle made by a plane that passes through the center of the sphere.' },
    { term: 'Hemisphere', text: 'One of the two halves of a sphere cut by a great circle.' },
  ],
  formulas: [
    { label: 'Volume of a sphere', tex: 'V = \\tfrac{4}{3}\\pi r^3' },
    { label: 'Surface area of a sphere', tex: 'SA = 4\\pi r^2' },
    { label: 'Area of a great circle', tex: 'A = \\pi r^2' },
  ],
  theorems: ['9.7'],
  examples: [
    { title: 'Example 1 — Volume', given: 'A sphere has radius 3 cm. Find the volume. Use $\\pi \\approx 3.14$.', steps: [
      'Cube the radius. $r^3 = 3^3 = 27$',
      '$V = \\tfrac{4}{3}\\pi r^3 = \\tfrac{4}{3}\\pi (27) = 36\\pi$',
      '$V \\approx 36 \\cdot 3.14 = 113.04\\ \\text{cm}^3$',
    ]},
    { title: 'Example 2 — Surface area', given: 'A sphere has radius 6 in. Find the surface area. Use $\\pi \\approx 3.14$.', steps: [
      'Square the radius. $r^2 = 6^2 = 36$',
      '$SA = 4\\pi r^2 = 4\\pi (36) = 144\\pi$',
      '$SA \\approx 144 \\cdot 3.14 = 452.16\\ \\text{in}^2$',
    ]},
    { title: 'Example 3 — Hemisphere', given: 'A hemisphere has radius 2 m. Find its volume. Use $\\pi \\approx 3.14$.', steps: [
      'Find the volume of the whole sphere. $V = \\tfrac{4}{3}\\pi (2^3) = \\tfrac{32}{3}\\pi$',
      'A hemisphere is half of the sphere. $V = \\tfrac{16}{3}\\pi$',
      '$V \\approx \\tfrac{16}{3}(3.14) \\approx 16.75\\ \\text{m}^3$',
    ]},
  ],
  checks: ['c9-5-1', 'c9-5-2', 'c9-5-3'],
},
},

questions: [
  { id: 'c9-1-1', chapter: 'ch9', section: '9-1', set: 'check', type: 'numeric', prompt: 'A right prism has a base area of 18 cm² and a height of 7 cm. Find the volume.', answer: 126, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = Bh$', '$V = 18 \\cdot 7 = 126\\ \\text{cm}^3$'] },
  { id: 'c9-1-2', chapter: 'ch9', section: '9-1', set: 'check', type: 'mc', prompt: 'An oblique prism and a right prism have equal bases and equal heights. Compare the volumes.', choices: ['The right prism has more volume.', 'The oblique prism has more volume.', 'The volumes are equal.', 'You need the lateral edge to decide.'], answer: 2,
    solution: ['Volume is $Bh$ for every prism.', 'Both prisms have the same $B$ and the same $h$. So the volumes are equal.'] },
  { id: 'c9-1-3', chapter: 'ch9', section: '9-1', set: 'check', type: 'diagram', figure: { kind: 'prism', w: 6, d: 2, h: 5 }, prompt: 'Find the total surface area of this right rectangular prism (6 by 2 by 5).', answer: 104, tolerance: 0.5, unit: 'units²',
    solution: ['Base area: $B = 6 \\cdot 2 = 12$', 'Perimeter: $p = 2(6) + 2(2) = 16$', 'Lateral area: $LA = ph = 16 \\cdot 5 = 80$', 'Total: $TA = 80 + 2(12) = 104$'] },
  // ---- 10-2 checks
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
  { id: 'b9-1', chapter: 'ch9', section: '9-3', set: 'bank', type: 'numeric', prompt: 'A square pyramid has base side 6 and height 5. Find the volume.', answer: 60, tolerance: 0.5, solution: ['$B = 36$', '$V = \\tfrac{1}{3}(36)(5) = 60$'] },
  { id: 'b9-2', chapter: 'ch9', section: '9-1', set: 'bank', type: 'mc', prompt: 'Which solid has two congruent, parallel bases and rectangular lateral faces?', choices: ['Pyramid', 'Right prism', 'Cone', 'Sphere'], answer: 1, solution: ['A right prism has parallel bases and rectangular lateral faces.'] },

  // ---- 9-2 checks
  { id: 'c9-2-1', chapter: 'ch9', section: '9-2', set: 'check', type: 'numeric', prompt: 'A right cylinder has radius 2 cm and height 5 cm. Find the volume. Use $\\pi \\approx 3.14$.', answer: 62.8, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = \\pi r^2 h$', '$V = \\pi (2^2)(5) = 20\\pi$', '$20 \\cdot 3.14 = 62.8\\ \\text{cm}^3$'] },
  { id: 'c9-2-2', chapter: 'ch9', section: '9-2', set: 'check', type: 'mc', prompt: 'A right cylinder has radius 3 and height 7. Unroll its lateral surface into a rectangle. What are the dimensions of the rectangle?', choices: ['$6\\pi$ by 7', '$3\\pi$ by 7', '$9\\pi$ by 7', '6 by 7'], answer: 0,
    solution: ['The width of the rectangle is the circumference of the base. $2\\pi r = 2\\pi (3) = 6\\pi$', 'The height of the rectangle is the height of the cylinder, 7.', 'The rectangle is $6\\pi$ by 7.'] },
  { id: 'c9-2-3', chapter: 'ch9', section: '9-2', set: 'check', type: 'numeric', prompt: 'A right cylinder has radius 5 in and height 6 in. Find the surface area. Use $\\pi \\approx 3.14$.', answer: 345.4, tolerance: 0.5, unit: 'in²',
    solution: ['Lateral area: $LA = 2\\pi r h = 2\\pi (5)(6) = 60\\pi$', 'Two bases: $2\\pi r^2 = 2\\pi (25) = 50\\pi$', '$SA = 60\\pi + 50\\pi = 110\\pi$', '$110 \\cdot 3.14 = 345.4\\ \\text{in}^2$'] },
  // ---- 9-3 checks
  { id: 'c9-3-1', chapter: 'ch9', section: '9-3', set: 'check', type: 'numeric', prompt: 'A pyramid has a base area of 30 cm² and a height of 9 cm. Find the volume.', answer: 90, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = \\tfrac{1}{3} B h$', '$V = \\tfrac{1}{3}(30)(9) = 90\\ \\text{cm}^3$'] },
  { id: 'c9-3-2', chapter: 'ch9', section: '9-3', set: 'check', type: 'mc', prompt: 'A regular square pyramid has base side 8 and height 3. Find the slant height.', choices: ['3', '4', '5', '$\\sqrt{73}$'], answer: 2,
    solution: ['Half the base side is 4.', 'The height, half the side, and the slant height make a right triangle.', '$\\ell = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$'] },
  { id: 'c9-3-3', chapter: 'ch9', section: '9-3', set: 'check', type: 'numeric', prompt: 'A regular square pyramid has base side 12 m and slant height 10 m. Find the surface area.', answer: 384, tolerance: 0.5, unit: 'm²',
    solution: ['Base perimeter: $P = 4 \\cdot 12 = 48$ m', 'Lateral area: $LA = \\tfrac{1}{2} P \\ell = \\tfrac{1}{2}(48)(10) = 240\\ \\text{m}^2$', 'Base area: $B = 12^2 = 144\\ \\text{m}^2$', '$SA = LA + B = 240 + 144 = 384\\ \\text{m}^2$'] },
  // ---- 9-4 checks
  { id: 'c9-4-1', chapter: 'ch9', section: '9-4', set: 'check', type: 'numeric', prompt: 'A right cone has radius 3 cm and height 5 cm. Find the volume. Use $\\pi \\approx 3.14$.', answer: 47.1, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = \\tfrac{1}{3}\\pi r^2 h$', '$V = \\tfrac{1}{3}\\pi (9)(5) = 15\\pi$', '$15 \\cdot 3.14 = 47.1\\ \\text{cm}^3$'] },
  { id: 'c9-4-2', chapter: 'ch9', section: '9-4', set: 'check', type: 'mc', prompt: 'A right cone has radius 8 and height 15. Find the slant height.', choices: ['15', '17', '23', '$\\sqrt{161}$'], answer: 1,
    solution: ['The radius, the height, and the slant height make a right triangle.', '$\\ell = \\sqrt{r^2 + h^2} = \\sqrt{64 + 225} = \\sqrt{289}$', '$\\ell = 17$'] },
  { id: 'c9-4-3', chapter: 'ch9', section: '9-4', set: 'check', type: 'numeric', prompt: 'A right cone has radius 4 in and slant height 9 in. Find the surface area. Use $\\pi \\approx 3.14$.', answer: 163.28, tolerance: 0.5, unit: 'in²',
    solution: ['Lateral area: $LA = \\pi r \\ell = \\pi (4)(9) = 36\\pi$', 'Base area: $B = \\pi r^2 = \\pi (16) = 16\\pi$', '$SA = 36\\pi + 16\\pi = 52\\pi$', '$52 \\cdot 3.14 = 163.28\\ \\text{in}^2$'] },
  // ---- 9-5 checks
  { id: 'c9-5-1', chapter: 'ch9', section: '9-5', set: 'check', type: 'numeric', prompt: 'A sphere has radius 2 cm. Find the volume. Use $\\pi \\approx 3.14$.', answer: 33.49, tolerance: 0.5, unit: 'cm³',
    solution: ['$V = \\tfrac{4}{3}\\pi r^3$', '$V = \\tfrac{4}{3}\\pi (8) = \\tfrac{32}{3}\\pi$', '$\\tfrac{32}{3}(3.14) \\approx 33.49\\ \\text{cm}^3$'] },
  { id: 'c9-5-2', chapter: 'ch9', section: '9-5', set: 'check', type: 'mc', prompt: 'You double the radius of a sphere. How many times larger is the new volume?', choices: ['2', '4', '6', '8'], answer: 3,
    solution: ['The volume uses $r^3$.', 'Double the radius: $(2r)^3 = 8r^3$', 'The volume is 8 times larger.'] },
  { id: 'c9-5-3', chapter: 'ch9', section: '9-5', set: 'check', type: 'numeric', prompt: 'A sphere has radius 5 m. Find the surface area. Use $\\pi \\approx 3.14$.', answer: 314, tolerance: 0.5, unit: 'm²',
    solution: ['$SA = 4\\pi r^2$', '$SA = 4\\pi (25) = 100\\pi$', '$100 \\cdot 3.14 = 314\\ \\text{m}^2$'] },
],

theorems: [
  { id: '9.1', chapter: 'ch9', kind: 'Theorem', name: 'Volume of a Prism', statement: 'The volume of a prism is the base area times the height: $V = Bh$.', section: '9-1' },
  { id: '9.2', chapter: 'ch9', kind: 'Theorem', name: 'Lateral Area of a Right Prism', statement: 'The lateral area of a right prism is the base perimeter times the height: $LA = ph$.', section: '9-1' },
  { id: '9.3', chapter: 'ch9', kind: 'Postulate', name: "Cavalieri's Principle", statement: 'Two solids with equal heights and equal cross-sectional areas at every level have equal volumes.', section: '9-1' },
  { id: '9.4', chapter: 'ch9', kind: 'Theorem', name: 'Volume of a Cylinder', statement: '$V = \\pi r^2 h$ and $LA = 2\\pi r h$.', section: '9-2' },
  { id: '9.5', chapter: 'ch9', kind: 'Theorem', name: 'Volume of a Pyramid', statement: '$V = \\tfrac{1}{3} B h$.', section: '9-3' },
  { id: '9.6', chapter: 'ch9', kind: 'Theorem', name: 'Volume of a Cone', statement: '$V = \\tfrac{1}{3}\\pi r^2 h$ and $LA = \\pi r \\ell$.', section: '9-4' },
  { id: '9.7', chapter: 'ch9', kind: 'Theorem', name: 'Sphere', statement: '$V = \\tfrac{4}{3}\\pi r^3$ and $SA = 4\\pi r^2$.', section: '9-5' },
  { id: '9.8', chapter: 'ch9', kind: 'Theorem', name: 'Lateral Area of a Regular Pyramid', statement: 'The lateral area of a regular pyramid is half the base perimeter times the slant height: $LA = \\tfrac{1}{2} P \\ell$.', section: '9-3' },
],

glossary: [
  { term: 'Altitude (of a solid)', def: 'The perpendicular distance between the bases.', section: '9-1' },
  { term: 'Base', def: 'A face that defines the shape of a solid.', section: '9-1' },
  { term: 'Cone', def: 'A solid with a circular base and one apex.', section: '9-4' },
  { term: 'Cylinder', def: 'A solid with two congruent circular bases.', section: '9-2' },
  { term: 'Lateral area', def: 'The area of all faces that are not bases.', section: '9-1' },
  { term: 'Oblique prism', def: 'A prism whose lateral edges are not perpendicular to the bases.', section: '9-1' },
  { term: 'Prism', def: 'A solid with two congruent parallel bases and parallelogram lateral faces.', section: '9-1' },
  { term: 'Pyramid', def: 'A solid with one base and triangular lateral faces that meet at an apex.', section: '9-3' },
  { term: 'Right prism', def: 'A prism whose lateral edges are perpendicular to the bases.', section: '9-1' },
  { term: 'Slant height', def: 'The distance from the apex to the edge of the base along a face.', section: '9-4' },
  { term: 'Sphere', def: 'All points in space at one distance from a center.', section: '9-5' },
  { term: 'Volume', def: 'The amount of space inside a solid.', section: '9-1' },
  { term: 'Axis of a cylinder', def: 'The segment that joins the centers of the two bases of a cylinder.', section: '9-2' },
  { term: 'Apex', def: 'The point where the lateral faces of a pyramid or cone meet.', section: '9-3' },
  { term: 'Regular pyramid', def: 'A pyramid with a regular polygon base and an apex above the center of the base.', section: '9-3' },
  { term: 'Great circle', def: 'The circle made by a plane that passes through the center of a sphere.', section: '9-5' },
  { term: 'Hemisphere', def: 'One of the two halves of a sphere cut by a great circle.', section: '9-5' },
],
};
