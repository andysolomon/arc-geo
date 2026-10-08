import { useCallback, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { clamp, fmt, type Pt } from '../lib/math';
import { Handle } from './Handle';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Slider, Tile, deg } from './controls';
import { isValidTriangle } from './triangle';
import { useDrag } from './useDrag';

const W = 480, H = 300, U = 20;
type Tri = { A: Pt; B: Pt; C: Pt };
const DEFAULT: Tri = { A: [30, 250], B: [130, 250], C: [70, 170] };
const dist = (p: Pt, q: Pt) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const ang = (V: Pt, P: Pt, Q: Pt) => { const a = dist(P, Q), b = dist(V, Q), c = dist(V, P); return deg(Math.acos(clamp((b * b + c * c - a * a) / (2 * b * c), -1, 1))); };
const clampPt = (p: Pt): Pt => [clamp(Math.round(p[0]), 20, 150), clamp(Math.round(p[1]), 20, 280)];

export function SimilarDiagram() {
  const [t, setT] = useState<Tri>(DEFAULT);
  const [k, setK] = useState(2);
  const svgRef = useRef<SVGSVGElement>(null);
  const tryMove = (s: Tri, key: keyof Tri, p: Pt): Tri => {
    const next = { ...s, [key]: clampPt(p) };
    return isValidTriangle(next.A, next.B, next.C) ? next : s;
  };
  const mover = (key: keyof Tri) => (p: Pt) => setT((s) => tryMove(s, key, p));
  const mA = useCallback(mover('A'), []), mB = useCallback(mover('B'), []), mC = useCallback(mover('C'), []);
  const dA = useDrag(svgRef, mA), dB = useDrag(svgRef, mB), dC = useDrag(svgRef, mC);
  const key = (kk: keyof Tri) => (e: KeyboardEvent<SVGElement>) => {
    const dx = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0, dy = e.key === 'ArrowDown' ? 5 : e.key === 'ArrowUp' ? -5 : 0;
    if (dx || dy) { e.preventDefault(); setT((s) => tryMove(s, kk, [s[kk][0] + dx, s[kk][1] + dy])); }
  };
  const g = useMemo(() => {
    const { A, B, C } = t;
    const a = dist(B, C) / U, b = dist(A, C) / U, c = dist(A, B) / U;
    const per = a + b + c, area = Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])) / 2 / (U * U);
    // Big triangle: scale about A, then shift right so the two never overlap.
    const minX = Math.min(A[0], B[0], C[0]), maxY = Math.max(A[1], B[1], C[1]);
    const S = (p: Pt): Pt => [180 + (p[0] - minX) * k, maxY - (maxY - p[1]) * k];
    const D = S(A), E = S(B), F = S(C);
    return { a, b, c, per, area, D, E, F, angles: [ang(A, B, C), ang(B, A, C), ang(C, A, B)] };
  }, [t, k]);
  const { A, B, C } = t;
  const lab = (p: Pt, text: string, P: Pt, Q: Pt): LabelSpec => { const cx = (P[0] + Q[0] + p[0]) / 3, cy = (P[1] + Q[1] + p[1]) / 3; const dx = p[0] - cx, dy = p[1] - cy, L = Math.hypot(dx, dy) || 1; return { x: p[0] + (dx / L) * 16, y: p[1] + (dy / L) * 16, text, color: 'var(--ink)', size: 13 }; };
  const labels: LabelSpec[] = [lab(A, 'A', B, C), lab(B, 'B', A, C), lab(C, 'C', A, B), lab(g.D, 'D', g.E, g.F), lab(g.E, 'E', g.D, g.F), lab(g.F, 'F', g.D, g.E)];
  const handle = (kk: keyof Tri) => ({ at: t[kk], color: 'var(--violet)', label: `Vertex ${kk}, drag or use arrow keys`, valueNow: t[kk][0], valueMin: 20, valueMax: 150, valueText: `${kk} at (${t[kk][0]}, ${t[kk][1]})` });
  const row = (name: string, small: number) => <tr key={name}><td className="pr-3 font-bold">{name}</td><td className="pr-3">{fmt(small, 2)}</td><td className="pr-3">{fmt(small * k, 2)}</td><td className="text-accent font-bold">{fmt(k, 2)}</td></tr>;
  return (
    <DiagramLayout maxWidth={520} drawing={
      <>
        <Labels specs={labels} W={W} H={H} />
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" style={{ touchAction: 'none' }} role="img" aria-label={`Triangle ABC and similar triangle DEF with scale factor ${k}.`}>
          <polygon points={`${A} ${B} ${C}`} fill="var(--violet)" fillOpacity={0.12} stroke="var(--violet)" strokeWidth={2} strokeLinejoin="round" />
          <polygon points={`${g.D} ${g.E} ${g.F}`} fill="var(--accent)" fillOpacity={0.12} stroke="var(--accent)" strokeWidth={2} strokeLinejoin="round" />
          <Handle {...handle('A')} onKeyDown={key('A')} drag={dA} />
          <Handle {...handle('B')} onKeyDown={key('B')} drag={dB} />
          <Handle {...handle('C')} onKeyDown={key('C')} drag={dC} />
        </svg>
      </>
    }>
      <Slider label="Scale factor k" value={k} min={0.5} max={3} step={0.25} onChange={setK} display={fmt(k, 2)} />
      <table className="text-[14px]" aria-live="polite"><thead><tr className="text-muted text-[12px] text-left"><th className="pr-3">Sides</th><th className="pr-3">ABC</th><th className="pr-3">DEF</th><th>Ratio</th></tr></thead><tbody>
        {row('BC : EF', g.a)}{row('AC : DF', g.b)}{row('AB : DE', g.c)}
      </tbody></table>
      <div className="text-[13px] text-muted">Angles: <b className="text-ink">∠A = ∠D = {fmt(g.angles[0], 0)}°, ∠B = ∠E = {fmt(g.angles[1], 0)}°, ∠C = ∠F = {fmt(g.angles[2], 0)}°</b></div>
      <div className="grid grid-cols-2 gap-2.5">
        <Tile label="Perimeter ratio" value={`${fmt(g.per * k, 1)} / ${fmt(g.per, 1)} = ${fmt(k, 2)}`} tone="accent" size={18} />
        <Tile label="Area ratio" value={`${fmt(g.area * k * k, 1)} / ${fmt(g.area, 1)} = ${fmt(k * k, 2)}`} tone="orange" size={18} />
      </div>
      <Equation tex={`\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = ${fmt(k, 2)},\\qquad \\frac{P_{DEF}}{P_{ABC}} = ${fmt(k, 2)},\\qquad \\frac{A_{DEF}}{A_{ABC}} = ${fmt(k, 2)}^2 = ${fmt(k * k, 2)}`} />
      <Note>Drag A, B, or C to change the small triangle. Move the slider to change k. The angles never change. The area ratio is k squared.</Note>
    </DiagramLayout>
  );
}
