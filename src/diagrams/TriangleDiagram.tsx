import { useCallback, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { clamp, fmt, type Pt } from '../lib/math';
import { Handle } from './Handle';
import { Labels, type LabelSpec } from './Label';
import { Check, DiagramLayout, Equation, Note, Tile } from './controls';
import { TRI_DEFAULT, TRI_H, TRI_W, triangleGeometry, type TriangleState } from './triangle';
import { useDrag } from './useDrag';

type V = keyof TriangleState;
const clampPt = (p: Pt): Pt => [clamp(Math.round(p[0]), 20, TRI_W - 20), clamp(Math.round(p[1]), 20, TRI_H - 20)];

export function TriangleDiagram() {
  const [st, setSt] = useState<TriangleState>(TRI_DEFAULT);
  const [showLines, setShowLines] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const g = useMemo(() => triangleGeometry(st), [st]);
  const mover = (k: V) => (p: Pt) => setSt((s) => ({ ...s, [k]: clampPt(p) }));
  const moveA = useCallback(mover('A'), []), moveB = useCallback(mover('B'), []), moveC = useCallback(mover('C'), []);
  const dragA = useDrag(svgRef, moveA), dragB = useDrag(svgRef, moveB), dragC = useDrag(svgRef, moveC);
  const key = (k: V) => (e: KeyboardEvent<SVGElement>) => {
    const dx = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0;
    const dy = e.key === 'ArrowDown' ? 5 : e.key === 'ArrowUp' ? -5 : 0;
    if (dx || dy) { e.preventDefault(); setSt((s) => ({ ...s, [k]: clampPt([s[k][0] + dx, s[k][1] + dy]) })); }
  };
  const { A, B, C } = st;
  const out = (P: Pt, Q: Pt, R: Pt): Pt => {
    const cx = (P[0] + Q[0] + R[0]) / 3, cy = (P[1] + Q[1] + R[1]) / 3;
    const dx = P[0] - cx, dy = P[1] - cy, L = Math.hypot(dx, dy) || 1;
    return [P[0] + (dx / L) * 20, P[1] + (dy / L) * 20];
  };
  const midOut = (P: Pt, Q: Pt, R: Pt): Pt => {
    const mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2;
    const cx = (P[0] + Q[0] + R[0]) / 3, cy = (P[1] + Q[1] + R[1]) / 3;
    const dx = mx - cx, dy = my - cy, L = Math.hypot(dx, dy) || 1;
    return [mx + (dx / L) * 16, my + (dy / L) * 16];
  };
  const la = out(A, B, C), lb = out(B, A, C), lc = out(C, A, B);
  const sa = midOut(B, C, A), sb = midOut(A, C, B), sc = midOut(A, B, C);
  const labels: LabelSpec[] = [
    { x: la[0], y: la[1], text: 'A', color: 'var(--ink)' }, { x: lb[0], y: lb[1], text: 'B', color: 'var(--ink)' }, { x: lc[0], y: lc[1], text: 'C', color: 'var(--ink)' },
    { x: sa[0], y: sa[1], text: `a = ${fmt(g.sides.a, 1)}`, color: 'var(--accent)', size: 13 },
    { x: sb[0], y: sb[1], text: `b = ${fmt(g.sides.b, 1)}`, color: 'var(--accent)', size: 13 },
    { x: sc[0], y: sc[1], text: `c = ${fmt(g.sides.c, 1)}`, color: 'var(--accent)', size: 13 },
  ];
  const handle = (k: V, name: string) => ({ at: st[k], color: 'var(--violet)', label: `Vertex ${name}, drag or use arrow keys`, valueNow: st[k][0], valueMin: 20, valueMax: TRI_W - 20, valueText: `${name} at (${st[k][0]}, ${st[k][1]})` });
  const ext = (() => { const dx = C[0] - B[0], dy = C[1] - B[1], L = Math.hypot(dx, dy) || 1; return [C[0] + (dx / L) * 60, C[1] + (dy / L) * 60] as Pt; })();
  return (
    <DiagramLayout drawing={
      <>
        <Labels specs={labels} W={TRI_W} H={TRI_H} />
        <svg ref={svgRef} viewBox={`0 0 ${TRI_W} ${TRI_H}`} className="w-full block text-ink" style={{ touchAction: 'none' }} role="img" aria-label={`Triangle ABC with angles ${Math.round(g.angles.A)}, ${Math.round(g.angles.B)}, ${Math.round(g.angles.C)} degrees. It is ${g.byAngles} and ${g.bySides}.`}>
          <polygon points={`${A} ${B} ${C}`} fill="var(--violet)" fillOpacity={0.08} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
          <line x1={B[0]} y1={B[1]} x2={ext[0]} y2={ext[1]} stroke="var(--line)" strokeWidth={1.5} strokeDasharray="4 4" />
          {g.markers.map((d, i) => <path key={i} d={d} fill="none" stroke="var(--violet)" strokeWidth={2} />)}
          {showLines && (
            <>
              {g.footOutside && <line x1={B[0]} y1={B[1]} x2={g.foot[0]} y2={g.foot[1]} stroke="var(--line)" strokeWidth={1.5} strokeDasharray="4 4" />}
              {g.footOutside && <line x1={C[0]} y1={C[1]} x2={g.foot[0]} y2={g.foot[1]} stroke="var(--line)" strokeWidth={1.5} strokeDasharray="4 4" />}
              <line x1={A[0]} y1={A[1]} x2={g.foot[0]} y2={g.foot[1]} stroke="var(--violet)" strokeWidth={2} strokeDasharray="6 4" />
              <line x1={A[0]} y1={A[1]} x2={g.mid[0]} y2={g.mid[1]} stroke="var(--accent)" strokeWidth={2} />
              <line x1={A[0]} y1={A[1]} x2={g.bis[0]} y2={g.bis[1]} stroke="var(--orange)" strokeWidth={2} strokeDasharray="2 4" />
              <circle cx={g.mid[0]} cy={g.mid[1]} r={3} fill="var(--accent)" />
            </>
          )}
          <Handle {...handle('A', 'A')} onKeyDown={key('A')} drag={dragA} />
          <Handle {...handle('B', 'B')} onKeyDown={key('B')} drag={dragB} />
          <Handle {...handle('C', 'C')} onKeyDown={key('C')} drag={dragC} />
        </svg>
      </>
    }>
      <div className="grid grid-cols-3 gap-2" aria-live="polite">
        <Tile label="∠A" value={`${fmt(g.angles.A, 0)}°`} tone="violet" size={24} />
        <Tile label="∠B" value={`${fmt(g.angles.B, 0)}°`} tone="violet" size={24} />
        <Tile label="∠C" value={`${fmt(g.angles.C, 0)}°`} tone="violet" size={24} />
      </div>
      <Equation tex={`${fmt(g.angles.A, 0)}^\\circ + ${fmt(g.angles.B, 0)}^\\circ + ${fmt(g.angles.C, 0)}^\\circ = 180^\\circ`} />
      <div className="grid grid-cols-2 gap-2">
        <Tile label="By angles" value={g.byAngles} size={22} />
        <Tile label="By sides" value={g.bySides} size={22} />
        <Tile label="Exterior angle at C" value={`${fmt(g.exterior, 0)}° = ${fmt(g.angles.A, 0)}° + ${fmt(g.angles.B, 0)}°`} tone="orange" size={16} />
        <Tile label="Longest side · largest angle" value={`${g.longest} · ∠${g.largest}`} tone="accent" size={20} />
      </div>
      <div className="tile bg-soft text-[15px]"><div className="tile-label">Pythagorean check (c = longest side)</div><div className="overflow-x-auto"><Equation tex={g.pyth.expr} /></div><div className="text-[13px] text-muted mt-1">{g.pyth.relation === 'equal' ? 'Equal: the triangle is right.' : g.pyth.relation === 'less' ? 'Less: the triangle is acute.' : 'Greater: the triangle is obtuse.'}</div></div>
      <Check label="Show the altitude (violet), median (green), and angle bisector (orange) from A" checked={showLines} onChange={setShowLines} />
      <Note>Drag A, B, or C. Side lengths are in grid units. The angles always add to 180°.</Note>
    </DiagramLayout>
  );
}
