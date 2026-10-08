import { useMemo, useState } from 'react';
import { fmt, type Pt } from '../lib/math';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Slider, Tile } from './controls';

const W = 360, H = 360, CX = 180, CY = 180;
const NAMES: Record<number, string> = { 3: 'triangle', 4: 'quadrilateral', 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon', 11: '11-gon', 12: 'dodecagon' };

export function polygonFacts(n: number, s: number) {
  const interiorSum = (n - 2) * 180;
  const interior = interiorSum / n;
  const exterior = 360 / n;
  const diagonals = (n * (n - 3)) / 2;
  const perimeter = n * s;
  const apothem = s / (2 * Math.tan(Math.PI / n));
  const area = 0.5 * apothem * perimeter;
  return { name: NAMES[n] ?? `${n}-gon`, interiorSum, interior, exterior, diagonals, perimeter, apothem, area, central: 360 / n };
}

export function PolygonDiagram() {
  const [n, setN] = useState(6);
  const [s, setS] = useState(4);
  const f = useMemo(() => polygonFacts(n, s), [n, s]);
  const R = 130;
  const pts = useMemo(() => Array.from({ length: n }, (_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [CX + R * Math.cos(a), CY + R * Math.sin(a)] as Pt; }), [n]);
  const mid: Pt = [(pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2];
  const a1 = -Math.PI / 2, a2 = -Math.PI / 2 + (2 * Math.PI) / n, am = (a1 + a2) / 2;
  const labels: LabelSpec[] = [
    { x: CX + 0.72 * (mid[0] - CX) + 8, y: CY + 0.72 * (mid[1] - CY) + 4, text: `a = ${fmt(f.apothem, 2)}`, color: 'var(--violet)', anchor: 'start', size: 13 },
    { x: CX + 0.55 * (pts[0][0] - CX) - 10, y: CY + 0.55 * (pts[0][1] - CY), text: 'r', color: 'var(--accent)', anchor: 'end', size: 13 },
    { x: mid[0] + 14 * Math.cos(am), y: mid[1] + 14 * Math.sin(am) - 8, text: `s = ${s}`, color: 'var(--ink)', size: 13 },
    { x: CX + 40 * Math.cos(am) - 22, y: CY + 40 * Math.sin(am) + 6, text: `${fmt(f.central, 1)}°`, color: 'var(--accent)', size: 12, anchor: 'end' },
    { x: pts[2 % n][0], y: pts[2 % n][1] + (pts[2 % n][1] > CY ? 18 : -18), text: `${fmt(f.interior, 1)}°`, color: 'var(--orange)', size: 12 },
  ];
  return (
    <DiagramLayout maxWidth={400} drawing={
      <>
        <Labels specs={labels} W={W} H={H} />
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" role="img" aria-label={`Regular ${f.name} with side ${s}. Each interior angle is ${fmt(f.interior, 1)} degrees.`}>
          <polygon points={pts.map((p) => p.join(',')).join(' ')} fill="var(--accent)" fillOpacity={0.1} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
          <line x1={CX} y1={CY} x2={pts[0][0]} y2={pts[0][1]} stroke="var(--accent)" strokeWidth={2} />
          <line x1={CX} y1={CY} x2={pts[1][0]} y2={pts[1][1]} stroke="var(--accent)" strokeWidth={2} />
          <line x1={CX} y1={CY} x2={mid[0]} y2={mid[1]} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
          <path d={`M ${CX + 26 * Math.cos(a1)} ${CY + 26 * Math.sin(a1)} A 26 26 0 0 1 ${CX + 26 * Math.cos(a2)} ${CY + 26 * Math.sin(a2)}`} fill="none" stroke="var(--accent)" strokeWidth={2} />
          <circle cx={CX} cy={CY} r={3} fill="currentColor" />
        </svg>
      </>
    }>
      <Slider label="Number of sides n" value={n} min={3} max={12} onChange={setN} />
      <Slider label="Side length s" value={s} min={1} max={10} onChange={setS} />
      <div className="grid grid-cols-2 gap-2" aria-live="polite">
        <Tile label="Name" value={`regular ${f.name}`} size={20} />
        <Tile label="Diagonals" value={f.diagonals} size={24} />
        <Tile label="Interior angle sum" value={`${f.interiorSum}°`} tone="orange" size={24} />
        <Tile label="Each interior angle" value={`${fmt(f.interior, 1)}°`} tone="orange" size={24} />
        <Tile label="Each exterior angle" value={`${fmt(f.exterior, 1)}°`} tone="accent" size={24} />
        <Tile label="Central angle" value={`${fmt(f.central, 1)}°`} tone="accent" size={24} />
        <Tile label="Perimeter P = ns" value={f.perimeter} size={24} />
        <Tile label="Apothem a" value={fmt(f.apothem, 2)} tone="violet" size={24} />
      </div>
      <Equation tex={`(n-2)\\cdot 180^\\circ = (${n}-2)\\cdot 180^\\circ = ${f.interiorSum}^\\circ,\\qquad A = \\tfrac{1}{2} a P = \\tfrac{1}{2}(${fmt(f.apothem, 2)})(${f.perimeter}) = ${fmt(f.area, 1)}`} />
      <Note>Move the sliders. The interior angle sum grows by 180° for each new side. The exterior angles always add to 360°.</Note>
    </DiagramLayout>
  );
}
