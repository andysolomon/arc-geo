export type Pt = [number, number];

export const norm = (d: number): number => ((d % 360) + 360) % 360;
export const rad = (d: number): number => (d * Math.PI) / 180;

/** Integer → "5"; otherwise round to p decimals and drop trailing zeros. */
export const fmt = (n: number, p = 2): string => (Number.isInteger(n) ? String(n) : String(+n.toFixed(p)));

/** √n = k√m with m square-free. simplifyRoot(50) → {k:5, m:2}; simplifyRoot(25) → {k:5, m:1}. */
export function simplifyRoot(n: number): { k: number; m: number } {
  let k = 1;
  let m = n;
  for (let i = 2; i * i <= m; i++) {
    while (m % (i * i) === 0) {
      m /= i * i;
      k *= i;
    }
  }
  return { k, m };
}

/** TeX for k√m in lowest terms. */
export function rootTex(d2: number): string {
  if (d2 === 0) return '0';
  const { k, m } = simplifyRoot(d2);
  if (m === 1) return String(k);
  if (k === 1) return `\\sqrt{${m}}`;
  return `${k}\\sqrt{${m}}`;
}

export function shuffle<T>(a: readonly T[], rand: () => number = Math.random): T[] {
  const out = a.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export const pts = (arr: Pt[]): string => arr.map((p) => p.join(',')).join(' ');

export const circlePt = (deg: number, r = 140, cx = 180, cy = 180): Pt => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];

export const clamp = (v: number, min: number, max: number): number => Math.max(min, Math.min(max, v));

/** Wrap a radian difference into (-π, π]. */
export function wrapPi(d: number): number {
  while (d > Math.PI) d -= 2 * Math.PI;
  while (d < -Math.PI) d += 2 * Math.PI;
  return d;
}
