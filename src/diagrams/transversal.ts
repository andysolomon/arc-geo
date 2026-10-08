import type { Pt } from '../lib/math';
import { toRad } from './controls';

export const TV_W = 420, TV_H = 320;
const CX = 210, CY = 160, GAP = 60;

/** Line through p with direction angle a (degrees, counterclockwise, screen y down). */
const dir = (a: number): Pt => [Math.cos(toRad(a)), -Math.sin(toRad(a))];

function intersect(p: Pt, d: Pt, q: Pt, e: Pt): Pt {
  const det = d[0] * e[1] - d[1] * e[0];
  const t = ((q[0] - p[0]) * e[1] - (q[1] - p[1]) * e[0]) / det;
  return [p[0] + t * d[0], p[1] + t * d[1]];
}

export interface TransversalGeometry {
  P: Pt; Q: Pt;
  /** Endpoints of lines m, n and transversal t for drawing. */
  m: [Pt, Pt]; n: [Pt, Pt]; t: [Pt, Pt];
  /** Measures of angles 1–8. */
  angles: number[];
  /** Label positions for angles 1–8. */
  labelAt: Pt[];
  parallel: boolean;
  perpendicular: boolean;
}

/** theta: transversal angle in degrees (20–160). phi: direction of line n (0 when parallel to m). */
export function transversalGeometry(theta: number, parallel: boolean): TransversalGeometry {
  const phi = parallel ? 0 : -14;
  const dm = dir(0), dn = dir(phi), dt = dir(theta);
  const pm: Pt = [CX, CY - GAP], pn: Pt = [CX, CY + GAP], pt: Pt = [CX, CY];
  const P = intersect(pt, dt, pm, dm);
  // Q is where the transversal crosses y = CY + GAP, whatever the tilt of n; n is then drawn through Q.
  // This keeps both intersections inside the drawing for every slider value.
  const Q = intersect(pt, dt, pn, dm);
  const ext = (p: Pt, d: Pt, len: number): [Pt, Pt] => [[p[0] - d[0] * len, p[1] - d[1] * len], [p[0] + d[0] * len, p[1] + d[1] * len]];
  const a = Math.round(theta);
  const psi = Math.round(theta - phi);
  const angles = [180 - a, a, 180 - a, a, 180 - psi, psi, 180 - psi, psi];
  const place = (V: Pt, u: Pt, v: Pt): Pt => {
    const sx = u[0] + v[0], sy = u[1] + v[1];
    const L = Math.hypot(sx, sy) || 1;
    return [V[0] + (sx / L) * 26, V[1] + (sy / L) * 26];
  };
  const neg = (d: Pt): Pt => [-d[0], -d[1]];
  const labelAt: Pt[] = [
    place(P, neg(dm), dt), place(P, dm, dt), place(P, dm, neg(dt)), place(P, neg(dm), neg(dt)),
    place(Q, neg(dn), dt), place(Q, dn, dt), place(Q, dn, neg(dt)), place(Q, neg(dn), neg(dt)),
  ];
  return { P, Q, m: ext(pm, dm, 210), n: ext(Q, dn, 210), t: ext(pt, dt, 170), angles, labelAt, parallel, perpendicular: a === 90 };
}

export const PAIRS: { name: string; pairs: [number, number][]; relation: 'equal' | 'supplementary' }[] = [
  { name: 'Corresponding', pairs: [[1, 5], [2, 6], [3, 7], [4, 8]], relation: 'equal' },
  { name: 'Alternate interior', pairs: [[3, 5], [4, 6]], relation: 'equal' },
  { name: 'Alternate exterior', pairs: [[1, 7], [2, 8]], relation: 'equal' },
  { name: 'Same-side interior', pairs: [[3, 6], [4, 5]], relation: 'supplementary' },
];
