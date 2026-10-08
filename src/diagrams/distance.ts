import { clamp, fmt, rootTex, simplifyRoot, type Pt } from '../lib/math';
import type { LabelSpec } from './Label';

export const GRID_SIZE = 400;
export const GRID_UNIT = 22;
export const GRID_MAX = 8;

export interface DistanceState { a: Pt; b: Pt; showLegs: boolean }
export const DIST_DEFAULT: DistanceState = { a: [-4, -2], b: [3, 4], showLegs: true };

export const X = (x: number): number => 200 + x * GRID_UNIT;
export const Y = (y: number): number => 200 - y * GRID_UNIT;

/** Snap a viewBox point to the nearest integer grid point within ±GRID_MAX. */
export const snap = (p: Pt): Pt => [clamp(Math.round((p[0] - 200) / GRID_UNIT), -GRID_MAX, GRID_MAX), clamp(Math.round((200 - p[1]) / GRID_UNIT), -GRID_MAX, GRID_MAX)];

export const nudge = (p: Pt, dx: number, dy: number): Pt => [clamp(p[0] + dx, -GRID_MAX, GRID_MAX), clamp(p[1] + dy, -GRID_MAX, GRID_MAX)];

export interface DistanceGeometry {
  ax: number; ay: number; bx: number; by: number;
  dx: number; dy: number; d2: number; dv: number;
  exact: string;
  rightAngle: string;
  slope: string;
  mid: string;
  labels: LabelSpec[];
  equationTex: string;
}

export function distanceGeometry({ a, b, showLegs }: DistanceState): DistanceGeometry {
  const dx = b[0] - a[0], dy = b[1] - a[1], d2 = dx * dx + dy * dy, dv = Math.sqrt(d2);
  const { m } = simplifyRoot(d2 || 1);
  const exact = rootTex(d2);
  const sx = Math.sign(dx) || 1, sy = Math.sign(dy) || 1;
  const corner: Pt = [X(b[0]), Y(a[1])];
  const rightAngle = dx && dy ? `M ${corner[0] - sx * 10} ${corner[1]} L ${corner[0] - sx * 10} ${corner[1] - sy * 10} L ${corner[0]} ${corner[1] - sy * 10}` : '';
  const slope = dx === 0 ? 'undefined (vertical)' : dy === 0 ? '0 (horizontal)' : fmt(dy / dx, 2);
  const labels: LabelSpec[] = [
    ...(showLegs && dx ? [{ x: X((a[0] + b[0]) / 2), y: Y(a[1]) + (sy > 0 ? 16 : -16), text: `Δx = ${dx}`, color: 'var(--orange)' }] : []),
    ...(showLegs && dy ? [{ x: X(b[0]) + (sx > 0 ? 10 : -10), y: Y((a[1] + b[1]) / 2), text: `Δy = ${dy}`, color: 'var(--violet)', anchor: (sx > 0 ? 'start' : 'end') as 'start' | 'end' }] : []),
    { x: X((a[0] + b[0]) / 2) + (sx * sy > 0 ? -36 : 36), y: Y((a[1] + b[1]) / 2) - 10, text: `d = ${fmt(dv, 2)}`, color: 'var(--accent)' },
    { x: X(a[0]), y: Y(a[1]) + (sy > 0 ? -20 : 22), text: `A(${a[0]}, ${a[1]})`, color: 'var(--ink)' },
    { x: X(b[0]), y: Y(b[1]) + (sy > 0 ? -20 : 22), text: `B(${b[0]}, ${b[1]})`, color: 'var(--ink)' },
  ];
  return {
    ax: X(a[0]), ay: Y(a[1]), bx: X(b[0]), by: Y(b[1]), dx, dy, d2, dv, exact, rightAngle, slope,
    mid: `(${fmt((a[0] + b[0]) / 2, 1)}, ${fmt((a[1] + b[1]) / 2, 1)})`,
    labels,
    equationTex: `d = \\sqrt{(${dx})^2 + (${dy})^2} = \\sqrt{${d2}} = ${exact}${m !== 1 && d2 ? ` \\approx ${fmt(dv, 2)}` : ''}`,
  };
}
