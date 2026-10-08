import { circlePt, fmt, norm, wrapPi, type Pt } from '../lib/math';
import type { LabelSpec } from './Label';

export const INSC_SIZE = 360;
export const INSC_CX = 180;
export const INSC_CY = 180;
export const INSC_R = 140;

export interface InscribedState { a: number; b: number; c: number }
export const INSC_DEFAULT: InscribedState = { a: 205, b: 80, c: 335 };

/**
 * Intercepted arc of inscribed angle ABC for points at angles a, b, c (degrees, ccw).
 * dAC = (c−a) mod 360, dAB = (b−a) mod 360. If dAB < dAC, B lies on the ccw arc
 * from A to C, so the intercepted arc is the other one: 360 − dAC (drawn from C to A).
 */
export function interceptedArc(a: number, b: number, c: number): { arc: number; bOnCCW: boolean } {
  const dAC = norm(c - a), dAB = norm(b - a);
  const bOnCCW = dAB < dAC;
  return { arc: bOnCCW ? 360 - dAC : dAC, bOnCCW };
}

export const inscribedAngle = (arc: number): number => arc / 2;

/** Angle label as the prototype rounds it: nearest quarter degree, one decimal. */
export const angleText = (arc: number): string => `${fmt(Math.round(arc * 2) / 4, 1)}°`;

export interface InscribedGeometry {
  A: Pt; B: Pt; C: Pt;
  arc: number;
  angle: number;
  arcPath: string;
  angleMarker: string;
  centralMarker: string;
  /** Letter positions (SVG text). */
  la: Pt; lb: Pt; lc: Pt;
  labels: LabelSpec[];
  centralLabel: LabelSpec;
  arcLabel: string;
  angleLabel: string;
  equationTex: string;
}

export function inscribedGeometry({ a, b, c }: InscribedState): InscribedGeometry {
  const A = circlePt(a), B = circlePt(b), C = circlePt(c);
  const { arc, bOnCCW } = interceptedArc(a, b, c);
  const [P, Q] = bOnCCW ? [C, A] : [A, C];
  const arcPath = `M ${P[0]} ${P[1]} A ${INSC_R} ${INSC_R} 0 ${arc > 180 ? 1 : 0} 0 ${Q[0]} ${Q[1]}`;
  const angle = inscribedAngle(arc);
  const phi1 = Math.atan2(A[1] - B[1], A[0] - B[0]), phi2 = Math.atan2(C[1] - B[1], C[0] - B[0]);
  const diff = wrapPi(phi2 - phi1);
  const m1: Pt = [B[0] + 24 * Math.cos(phi1), B[1] + 24 * Math.sin(phi1)], m2: Pt = [B[0] + 24 * Math.cos(phi2), B[1] + 24 * Math.sin(phi2)];
  const angleMarker = `M ${m1[0]} ${m1[1]} A 24 24 0 0 ${diff > 0 ? 1 : 0} ${m2[0]} ${m2[1]}`;
  const mid = phi1 + diff / 2;
  const angleLabelAt: Pt = [B[0] + 44 * Math.cos(mid), B[1] + 44 * Math.sin(mid)];
  const arcMidDeg = bOnCCW ? c + arc / 2 : a + arc / 2;
  const arcText = circlePt(arcMidDeg, 112);
  const oa = Math.atan2(A[1] - INSC_CY, A[0] - INSC_CX), oc = Math.atan2(C[1] - INSC_CY, C[0] - INSC_CX);
  let od = wrapPi(oc - oa);
  if (arc > 180) od = od > 0 ? od - 2 * Math.PI : od + 2 * Math.PI;
  const c1: Pt = [INSC_CX + 28 * Math.cos(oa), INSC_CY + 28 * Math.sin(oa)], c2: Pt = [INSC_CX + 28 * Math.cos(oc), INSC_CY + 28 * Math.sin(oc)];
  const centralMarker = `M ${c1[0]} ${c1[1]} A 28 28 0 ${arc > 180 ? 1 : 0} ${od > 0 ? 1 : 0} ${c2[0]} ${c2[1]}`;
  const cm = oa + od / 2;
  const centralAt: Pt = [INSC_CX + 46 * Math.cos(cm), INSC_CY + 46 * Math.sin(cm)];
  const arcLabel = `${Math.round(arc)}°`;
  const angleLabel = angleText(arc);
  return {
    A, B, C, arc, angle, arcPath, angleMarker, centralMarker,
    la: circlePt(a, 162), lb: circlePt(b, 162), lc: circlePt(c, 162),
    labels: [
      { x: angleLabelAt[0], y: angleLabelAt[1], text: angleLabel, color: 'var(--violet)' },
      { x: arcText[0], y: arcText[1] + 5, text: arcLabel, color: 'var(--accent)' },
    ],
    centralLabel: { x: centralAt[0], y: centralAt[1], text: arcLabel, color: 'var(--accent)' },
    arcLabel, angleLabel,
    equationTex: `m\\angle ABC = \\tfrac{1}{2}(${Math.round(arc)}^\\circ) = ${fmt(Math.round(arc * 2) / 4, 1)}^\\circ`,
  };
}

/** Angle (degrees, ccw) of a viewBox point relative to the circle centre. */
export const angleOfPoint = (p: Pt): number => (Math.atan2(INSC_CY - p[1], p[0] - INSC_CX) * 180) / Math.PI;
