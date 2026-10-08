import { useMemo, useState } from 'react';
import { fmt, type Pt } from '../lib/math';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Seg, Slider, Tile } from './controls';

const W = 420, H = 300, U = 22, OX = 40, OY = 250;
type Shape = 'rectangle' | 'triangle' | 'parallelogram' | 'trapezoid';
const X = (x: number) => OX + x * U, Y = (y: number) => OY - y * U;

export function areaFacts(shape: Shape, b: number, h: number, b2: number, k: number) {
  const slant = Math.hypot(h, k);
  switch (shape) {
    case 'rectangle': return { pts: [[0, 0], [b, 0], [b, h], [0, h]] as Pt[], perimeter: 2 * b + 2 * h, area: b * h, tex: `A = bh = ${b} \\cdot ${h} = ${b * h},\\quad P = 2b + 2h = ${2 * b + 2 * h}`, sides: `${b}, ${h}, ${b}, ${h}` };
    case 'triangle': { const s1 = Math.hypot(h, k), s2 = Math.hypot(h, b - k); return { pts: [[0, 0], [b, 0], [k, h]] as Pt[], perimeter: b + s1 + s2, area: 0.5 * b * h, tex: `A = \\tfrac{1}{2} b h = \\tfrac{1}{2}(${b})(${h}) = ${fmt(0.5 * b * h, 1)}`, sides: `${b}, ${fmt(s1, 2)}, ${fmt(s2, 2)}` }; }
    case 'parallelogram': return { pts: [[0, 0], [b, 0], [b + k, h], [k, h]] as Pt[], perimeter: 2 * b + 2 * slant, area: b * h, tex: `A = bh = ${b} \\cdot ${h} = ${b * h}\\quad(\\text{not } ${b} \\cdot ${fmt(slant, 2)}),\\quad P = 2(${b}) + 2(${fmt(slant, 2)}) = ${fmt(2 * b + 2 * slant, 2)}`, sides: `${b}, ${fmt(slant, 2)}, ${b}, ${fmt(slant, 2)}` };
    case 'trapezoid': { const l1 = Math.hypot(h, k), l2 = Math.hypot(h, b - k - b2); return { pts: [[0, 0], [b, 0], [k + b2, h], [k, h]] as Pt[], perimeter: b + b2 + l1 + l2, area: 0.5 * h * (b + b2), tex: `A = \\tfrac{1}{2} h (b_1 + b_2) = \\tfrac{1}{2}(${h})(${b} + ${b2}) = ${fmt(0.5 * h * (b + b2), 1)}`, sides: `${b}, ${fmt(l2, 2)}, ${b2}, ${fmt(l1, 2)}` }; }
  }
}

/** Lessons open on the shape they teach. */
const INITIAL: Record<string, Shape> = { '4-3': 'parallelogram', '4-5': 'rectangle', '4-6': 'trapezoid', '5-1': 'rectangle', '5-2': 'triangle', '5-3': 'parallelogram', '5-4': 'trapezoid' };

export function AreaDiagram({ sectionId = '' }: { sectionId?: string }) {
  const [shape, setShape] = useState<Shape>(INITIAL[sectionId] ?? 'rectangle');
  const [b, setB] = useState(8);
  const [h, setH] = useState(5);
  const [b2, setB2] = useState(4);
  const [k, setK] = useState(2);
  const f = useMemo(() => areaFacts(shape, b, h, b2, Math.min(k, shape === 'trapezoid' ? Math.max(0, b - b2) : k)), [shape, b, h, b2, k]);
  const kk = shape === 'trapezoid' ? Math.min(k, Math.max(0, b - b2)) : k;
  const hx = shape === 'rectangle' ? b : shape === 'triangle' ? kk : Math.min(b, kk + (shape === 'trapezoid' ? b2 : b)) - 0.0001;
  const heightX = shape === 'rectangle' ? X(b) + 14 : X(Math.max(0.5, Math.min(hx, b - 0.5)));
  const labels: LabelSpec[] = [
    { x: X(b / 2), y: Y(0) + 16, text: shape === 'trapezoid' ? `b₁ = ${b}` : `b = ${b}`, color: 'var(--accent)' },
    { x: heightX + 8, y: Y(h / 2), text: `h = ${h}`, color: 'var(--violet)', anchor: 'start' },
    ...(shape === 'trapezoid' ? [{ x: X(kk + b2 / 2), y: Y(h) - 14, text: `b₂ = ${b2}`, color: 'var(--accent)' }] : []),
    ...(shape === 'parallelogram' || shape === 'trapezoid' ? [{ x: X(kk / 2) - 10, y: Y(h / 2), text: `${fmt(Math.hypot(h, kk), 2)}`, color: 'var(--orange)', anchor: 'end' as const, size: 13 }] : []),
  ];
  const poly = f.pts.map((p) => `${X(p[0])},${Y(p[1])}`).join(' ');
  return (
    <DiagramLayout maxWidth={480} drawing={
      <>
        <Labels specs={labels} W={W} H={H} />
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" role="img" aria-label={`${shape} with base ${b} and height ${h}. Area ${fmt(f.area, 1)}.`}>
          {Array.from({ length: 17 }, (_, i) => <line key={'v' + i} x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(10)} stroke="var(--line)" strokeWidth={1} />)}
          {Array.from({ length: 11 }, (_, i) => <line key={'h' + i} x1={X(0)} y1={Y(i)} x2={X(16)} y2={Y(i)} stroke="var(--line)" strokeWidth={1} />)}
          <polygon points={poly} fill="var(--accent)" fillOpacity={0.15} stroke="currentColor" strokeWidth={2} strokeLinejoin="round" />
          <line x1={X(0)} y1={Y(0)} x2={X(b)} y2={Y(0)} stroke="var(--accent)" strokeWidth={3} />
          <line x1={heightX} y1={Y(0)} x2={heightX} y2={Y(h)} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
          <path d={`M ${heightX - 8} ${Y(0)} l 0 -8 l 8 0`} fill="none" stroke="var(--violet)" strokeWidth={1.5} />
          {(shape === 'parallelogram' || shape === 'trapezoid') && <line x1={X(0)} y1={Y(0)} x2={X(kk)} y2={Y(h)} stroke="var(--orange)" strokeWidth={2.5} />}
        </svg>
      </>
    }>
      <Seg label="Shape" value={shape} onChange={setShape} options={[{ id: 'rectangle', label: 'Rectangle' }, { id: 'triangle', label: 'Triangle' }, { id: 'parallelogram', label: 'Parallelogram' }, { id: 'trapezoid', label: 'Trapezoid' }]} />
      <Slider label={shape === 'trapezoid' ? 'Base b₁' : 'Base b'} value={b} min={1} max={14} onChange={setB} />
      <Slider label="Height h" value={h} min={1} max={9} onChange={setH} />
      {shape === 'trapezoid' && <Slider label="Base b₂" value={b2} min={1} max={12} onChange={setB2} />}
      {shape !== 'rectangle' && <Slider label={shape === 'triangle' ? 'Apex offset' : 'Lean'} value={k} min={0} max={6} onChange={setK} />}
      <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
        <Tile label="Area" value={fmt(f.area, 1)} tone="accent" />
        <Tile label="Perimeter" value={fmt(f.perimeter, 2)} tone="orange" />
      </div>
      <div className="text-[13px] text-muted">Sides: <b className="text-ink">{f.sides}</b></div>
      <Equation tex={f.tex} />
      <Note>The height is the perpendicular distance between the base and the opposite side or vertex. Change the lean. The slant side changes. The area does not.</Note>
    </DiagramLayout>
  );
}
