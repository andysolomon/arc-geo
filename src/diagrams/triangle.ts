import { fmt, type Pt } from '../lib/math';
import { deg } from './controls';

export const TRI_W = 400, TRI_H = 360, UNIT = 20;

export interface TriangleState { A: Pt; B: Pt; C: Pt }
export const TRI_DEFAULT: TriangleState = { A: [80, 300], B: [340, 300], C: [200, 90] };

const dist = (p: Pt, q: Pt) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const angleAt = (V: Pt, P: Pt, Q: Pt) => {
  const a = dist(P, Q), b = dist(V, Q), c = dist(V, P);
  return deg(Math.acos(Math.max(-1, Math.min(1, (b * b + c * c - a * a) / (2 * b * c)))));
};

/** Minimum side (px) and area (px²) for a triangle to count as a triangle in the diagrams. */
export const MIN_SIDE_PX = 12, MIN_AREA_PX = 150;
export function isValidTriangle(A: Pt, B: Pt, C: Pt): boolean {
  const area = Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])) / 2;
  return dist(A, B) >= MIN_SIDE_PX && dist(B, C) >= MIN_SIDE_PX && dist(A, C) >= MIN_SIDE_PX && area >= MIN_AREA_PX;
}

export function classifyByAngles(angles: number[]): 'acute' | 'right' | 'obtuse' {
  const max = Math.max(...angles);
  if (Math.abs(max - 90) < 0.5) return 'right';
  return max > 90 ? 'obtuse' : 'acute';
}
export function classifyBySides(sides: number[]): 'scalene' | 'isosceles' | 'equilateral' {
  const [a, b, c] = sides;
  const eq = (x: number, y: number) => Math.abs(x - y) < 0.06;
  if (eq(a, b) && eq(b, c)) return 'equilateral';
  if (eq(a, b) || eq(b, c) || eq(a, c)) return 'isosceles';
  return 'scalene';
}

export interface TriangleGeometry {
  angles: { A: number; B: number; C: number };
  sides: { a: number; b: number; c: number };
  byAngles: string; bySides: string;
  exterior: number;
  pyth: { expr: string; relation: 'equal' | 'less' | 'greater' };
  longest: string; largest: string;
  foot: Pt; mid: Pt; bis: Pt; footOutside: boolean;
  markers: string[];
}

export function triangleGeometry({ A, B, C }: TriangleState): TriangleGeometry {
  const a = dist(B, C) / UNIT, b = dist(A, C) / UNIT, c = dist(A, B) / UNIT;
  const angA = angleAt(A, B, C), angB = angleAt(B, A, C), angC = angleAt(C, A, B);
  const sides = [a, b, c];
  const sorted = [...sides].sort((x, y) => x - y);
  // Compare c² with a² + b² for the longest side c: equal → right, less → acute, greater → obtuse.
  const sum = sorted[0] ** 2 + sorted[1] ** 2, csq = sorted[2] ** 2;
  const relation = Math.abs(csq - sum) < 0.25 ? 'equal' : csq < sum ? 'less' : 'greater';
  const names = ['a', 'b', 'c'];
  const longest = names[sides.indexOf(Math.max(...sides))];
  const angs = [angA, angB, angC];
  const largest = ['A', 'B', 'C'][angs.indexOf(Math.max(...angs))];
  // Altitude foot from A onto line BC.
  const dx = C[0] - B[0], dy = C[1] - B[1];
  const t = ((A[0] - B[0]) * dx + (A[1] - B[1]) * dy) / (dx * dx + dy * dy);
  const foot: Pt = [B[0] + t * dx, B[1] + t * dy];
  const mid: Pt = [(B[0] + C[0]) / 2, (B[1] + C[1]) / 2];
  // Angle bisector from A meets BC at D with BD/DC = c/b.
  const s = c / (b + c);
  const bis: Pt = [B[0] + s * dx, B[1] + s * dy];
  const marker = (V: Pt, P: Pt, Q: Pt, r: number) => {
    const a1 = Math.atan2(P[1] - V[1], P[0] - V[0]), a2 = Math.atan2(Q[1] - V[1], Q[0] - V[0]);
    let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    return `M ${V[0] + r * Math.cos(a1)} ${V[1] + r * Math.sin(a1)} A ${r} ${r} 0 0 ${d > 0 ? 1 : 0} ${V[0] + r * Math.cos(a2)} ${V[1] + r * Math.sin(a2)}`;
  };
  return {
    angles: { A: angA, B: angB, C: angC },
    sides: { a, b, c },
    byAngles: classifyByAngles(angs), bySides: classifyBySides(sides),
    exterior: 180 - angC,
    pyth: { expr: `c^2 = ${fmt(sorted[2], 1)}^2 = ${fmt(csq, 1)}\\ ${relation === 'equal' ? '=' : relation === 'less' ? '<' : '>'}\\ ${fmt(sorted[0], 1)}^2 + ${fmt(sorted[1], 1)}^2 = ${fmt(sum, 1)}`, relation },
    longest, largest,
    foot, mid, bis, footOutside: t < 0 || t > 1,
    markers: [marker(A, B, C, 22), marker(B, C, A, 22), marker(C, A, B, 22)],
  };
}
