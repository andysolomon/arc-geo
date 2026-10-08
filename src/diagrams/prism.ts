import { fmt, pts, type Pt } from '../lib/math';
import type { LabelSpec } from './Label';

export const PRISM_W = 420;
export const PRISM_H = 340;
const U = 24, OX = 60, OY = 300;
export const SLICE_COUNT = 8;

export interface PrismState { w: number; d: number; h: number; lean: number; oblique: boolean; slices: boolean }
export const PRISM_DEFAULT: PrismState = { w: 5, d: 3, h: 4, lean: 1.5, oblique: false, slices: false };

/** Oblique projection: P(x,y,z) = (ox + (x + 0.5z)·u, oy − (y + 0.3z)·u). */
export const project = (x: number, y: number, z: number): Pt => [OX + (x + 0.5 * z) * U, OY - (y + 0.3 * z) * U];

export interface Faces { front: string; right: string; top: string }

/** Faces of the band between heights y0 and y1, sheared by k·y/h. */
export function band(w: number, d: number, h: number, k: number, y0: number, y1: number): Faces {
  const k0 = (k * y0) / h, k1 = (k * y1) / h;
  const P = project;
  return {
    front: pts([P(k0, y0, 0), P(w + k0, y0, 0), P(w + k1, y1, 0), P(k1, y1, 0)]),
    right: pts([P(w + k0, y0, 0), P(w + k0, y0, d), P(w + k1, y1, d), P(w + k1, y1, 0)]),
    top: pts([P(k1, y1, 0), P(w + k1, y1, 0), P(w + k1, y1, d), P(k1, y1, d)]),
  };
}

export const lateralEdge = (h: number, k: number): number => Math.sqrt(h * h + k * k);

export interface PrismGeometry {
  k: number;
  whole: Faces;
  slices: Faces[];
  base: string;
  heightLine: { x1: number; y1: number; x2: number; y2: number };
  edgeLine: { x1: number; y1: number; x2: number; y2: number };
  B: number; V: number; LA: number; TA: number; edge: number;
  labels: LabelSpec[];
  areaLabel: string;
  areaValue: string;
  equationTex: string;
  note: string;
}

export function prismGeometry(p: PrismState): PrismGeometry {
  const k = p.oblique ? p.lean : 0;
  const { w, d, h } = p;
  const B = w * d, V = B * h, per = 2 * w + 2 * d, LA = per * h, TA = LA + 2 * B;
  const edge = lateralEdge(h, k);
  const whole = band(w, d, h, k, 0, h);
  const slices = p.oblique && p.slices ? Array.from({ length: SLICE_COUNT }, (_, i) => band(w, d, h, k, (i * h) / SLICE_COUNT, ((i + 1) * h) / SLICE_COUNT)) : [];
  const P = project;
  const hb = P(k, h, 0), e0 = P(0, 0, 0), e1 = P(k, h, 0), wl = P(w / 2, 0, 0), dl = P(w, 0, d / 2), bl = P(w / 2, 0, d / 2);
  const labels: LabelSpec[] = [
    { x: hb[0] + (k ? -8 : 8), y: (hb[1] + OY) / 2, text: `h = ${h}`, color: 'var(--violet)', anchor: k ? 'end' : 'start', size: 16 },
    ...(k ? [{ x: e0[0] - 6, y: (e0[1] + e1[1]) / 2 - 14, text: `edge = ${fmt(edge, 2)}`, color: 'var(--orange)', anchor: 'end' as const, size: 16 }] : []),
    { x: wl[0], y: wl[1] + 14, text: String(w), color: 'var(--ink)' },
    { x: dl[0] + 10, y: dl[1], text: String(d), color: 'var(--ink)', anchor: 'start' },
    { x: bl[0], y: bl[1], text: `B = ${B}`, color: 'var(--accent)' },
  ];
  return {
    k, whole, slices,
    base: pts([P(0, 0, 0), P(w, 0, 0), P(w, 0, d), P(0, 0, d)]),
    heightLine: { x1: hb[0], y1: hb[1], x2: hb[0], y2: OY },
    edgeLine: { x1: e0[0], y1: e0[1], x2: e1[0], y2: e1[1] },
    B, V, LA, TA, edge, labels,
    areaLabel: p.oblique ? 'Lateral edge length' : 'Total area = ph + 2B',
    areaValue: p.oblique ? fmt(edge, 2) : String(TA),
    equationTex: p.oblique ? `V = Bh = ${B} \\cdot ${h} = ${V}\\quad(\\text{not } B \\cdot ${fmt(edge, 2)})` : `V = Bh = (${w} \\cdot ${d}) \\cdot ${h} = ${V}`,
    note: p.oblique
      ? 'The lean changes the lateral edge. It does not change the height or the volume. Turn on slices to see why: each slice is the same as in the right prism, only shifted.'
      : 'In a right prism the lateral edge equals the height. The lateral faces are rectangles, so LA = ph.',
  };
}
