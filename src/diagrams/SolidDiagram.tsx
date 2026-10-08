import { useMemo, useState } from 'react';
import { fmt, pts, type Pt } from '../lib/math';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Seg, Slider, Tile } from './controls';

const W = 420, H = 340, U = 16, OX = 150, OY = 300;
type Solid = 'cylinder' | 'pyramid' | 'cone' | 'sphere';
const P = (x: number, y: number, z: number): Pt => [OX + (x + 0.5 * z) * U, OY - (y + 0.3 * z) * U];
const piTex = (coef: number) => (Math.abs(coef - 1) < 1e-9 ? '\\pi' : `${fmt(coef, 2)}\\pi`);

export function solidFacts(solid: Solid, r: number, h: number) {
  const pi = Math.PI;
  switch (solid) {
    case 'cylinder': return { slant: null, V: pi * r * r * h, LA: 2 * pi * r * h, SA: 2 * pi * r * h + 2 * pi * r * r, tex: `V = \\pi r^2 h = \\pi(${r})^2(${h}) = ${piTex(r * r * h)} \\approx ${fmt(pi * r * r * h, 2)},\\quad SA = 2\\pi r h + 2\\pi r^2 = ${piTex(2 * r * h + 2 * r * r)} \\approx ${fmt(2 * pi * r * h + 2 * pi * r * r, 2)}` };
    case 'pyramid': { const l = Math.hypot(h, r / 2), B = r * r, p = 4 * r; return { slant: l, V: B * h / 3, LA: 0.5 * p * l, SA: 0.5 * p * l + B, tex: `V = \\tfrac{1}{3} B h = \\tfrac{1}{3}(${B})(${h}) = ${fmt(B * h / 3, 2)},\\quad \\ell = \\sqrt{${h}^2 + ${fmt(r / 2, 1)}^2} = ${fmt(l, 2)},\\quad LA = \\tfrac{1}{2} P \\ell = \\tfrac{1}{2}(${p})(${fmt(l, 2)}) = ${fmt(0.5 * p * l, 2)}` }; }
    case 'cone': { const l = Math.hypot(h, r); return { slant: l, V: pi * r * r * h / 3, LA: pi * r * l, SA: pi * r * l + pi * r * r, tex: `V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{1}{3}\\pi(${r})^2(${h}) = ${piTex(r * r * h / 3)} \\approx ${fmt(pi * r * r * h / 3, 2)},\\quad \\ell = \\sqrt{${r}^2 + ${h}^2} = ${fmt(l, 2)},\\quad LA = \\pi r \\ell \\approx ${fmt(pi * r * l, 2)}` }; }
    case 'sphere': return { slant: null, V: 4 / 3 * pi * r ** 3, LA: null, SA: 4 * pi * r * r, tex: `V = \\tfrac{4}{3}\\pi r^3 = \\tfrac{4}{3}\\pi(${r})^3 = ${piTex(4 / 3 * r ** 3)} \\approx ${fmt(4 / 3 * pi * r ** 3, 2)},\\quad SA = 4\\pi r^2 = ${piTex(4 * r * r)} \\approx ${fmt(4 * pi * r * r, 2)}` };
  }
}

function Drawing({ solid, r, h }: { solid: Solid; r: number; h: number }) {
  const cx = OX + 4 * U, baseY = OY - 10, ry = Math.max(6, r * U * 0.35), rx = r * U, top = baseY - h * U;
  const stroke = { stroke: 'currentColor', strokeWidth: 2 };
  if (solid === 'cylinder') return (
    <>
      <path d={`M ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${baseY}`} fill="var(--face2)" {...stroke} />
      <rect x={cx - rx} y={top} width={2 * rx} height={baseY - top} fill="var(--face2)" stroke="none" />
      <line x1={cx - rx} y1={top} x2={cx - rx} y2={baseY} {...stroke} /><line x1={cx + rx} y1={top} x2={cx + rx} y2={baseY} {...stroke} />
      <path d={`M ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 1 ${cx + rx} ${baseY}`} fill="none" {...stroke} strokeDasharray="4 4" />
      <ellipse cx={cx} cy={top} rx={rx} ry={ry} fill="var(--face1)" {...stroke} />
      <line x1={cx} y1={top} x2={cx + rx} y2={top} stroke="var(--accent)" strokeWidth={2.5} />
      <line x1={cx + rx + 14} y1={top} x2={cx + rx + 14} y2={baseY} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
    </>
  );
  if (solid === 'cone') return (
    <>
      <path d={`M ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 0 ${cx + rx} ${baseY} L ${cx} ${top} Z`} fill="var(--face2)" {...stroke} strokeLinejoin="round" />
      <path d={`M ${cx - rx} ${baseY} A ${rx} ${ry} 0 0 1 ${cx + rx} ${baseY}`} fill="none" {...stroke} strokeDasharray="4 4" />
      <line x1={cx} y1={baseY} x2={cx + rx} y2={baseY} stroke="var(--accent)" strokeWidth={2.5} />
      <line x1={cx} y1={top} x2={cx} y2={baseY} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
      <line x1={cx} y1={top} x2={cx + rx} y2={baseY} stroke="var(--orange)" strokeWidth={2.5} />
      <circle cx={cx} cy={baseY} r={3} fill="currentColor" />
    </>
  );
  if (solid === 'sphere') return (
    <>
      <circle cx={cx} cy={(baseY + top) / 2 + 0} r={rx} fill="var(--face2)" {...stroke} />
      <ellipse cx={cx} cy={(baseY + top) / 2} rx={rx} ry={ry} fill="none" {...stroke} strokeDasharray="4 4" />
      <line x1={cx} y1={(baseY + top) / 2} x2={cx + rx} y2={(baseY + top) / 2} stroke="var(--accent)" strokeWidth={2.5} />
      <circle cx={cx} cy={(baseY + top) / 2} r={3} fill="currentColor" />
    </>
  );
  // square pyramid, base side r, height h, oblique projection
  const s = r, apex = P(s / 2, h, s / 2), b0 = P(0, 0, 0), b1 = P(s, 0, 0), b2 = P(s, 0, s), b3 = P(0, 0, s);
  const mid = P(s, 0, s / 2);
  return (
    <>
      <polygon points={pts([b0, b1, b2, b3])} fill="var(--face1)" {...stroke} strokeDasharray="4 4" />
      <polygon points={pts([b1, b2, apex])} fill="var(--face3)" {...stroke} strokeLinejoin="round" />
      <polygon points={pts([b0, b1, apex])} fill="var(--face2)" {...stroke} strokeLinejoin="round" />
      <line x1={P(s / 2, 0, s / 2)[0]} y1={P(s / 2, 0, s / 2)[1]} x2={apex[0]} y2={apex[1]} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
      <line x1={mid[0]} y1={mid[1]} x2={apex[0]} y2={apex[1]} stroke="var(--orange)" strokeWidth={2.5} />
      <line x1={b0[0]} y1={b0[1]} x2={b1[0]} y2={b1[1]} stroke="var(--accent)" strokeWidth={2.5} />
    </>
  );
}

/** Lessons open on the solid they teach. */
const INITIAL: Record<string, Solid> = { '9-2': 'cylinder', '9-3': 'pyramid', '9-4': 'cone', '9-5': 'sphere' };

export function SolidDiagram({ sectionId = '' }: { sectionId?: string }) {
  const [solid, setSolid] = useState<Solid>(INITIAL[sectionId] ?? 'cylinder');
  const [r, setR] = useState(3);
  const [h, setH] = useState(6);
  const f = useMemo(() => solidFacts(solid, r, h), [solid, r, h]);
  const cx = OX + 4 * U, baseY = OY - 10, top = baseY - h * U, rx = r * U;
  const labels: LabelSpec[] = solid === 'pyramid'
    ? [{ x: P(r / 2, 0, 0)[0], y: P(r / 2, 0, 0)[1] + 14, text: `s = ${r}`, color: 'var(--accent)', size: 13 }, { x: P(r / 2, h / 2, r / 2)[0] - 10, y: P(r / 2, h / 2, r / 2)[1], text: `h = ${h}`, color: 'var(--violet)', anchor: 'end', size: 13 }, { x: P(r, h / 2, r / 2)[0] + 8, y: P(r, h / 2, r / 2)[1], text: `ℓ = ${fmt(f.slant ?? 0, 2)}`, color: 'var(--orange)', anchor: 'start', size: 13 }]
    : solid === 'sphere'
      ? [{ x: cx + rx / 2, y: (baseY + top) / 2 - 12, text: `r = ${r}`, color: 'var(--accent)', size: 13 }]
      : [{ x: cx + rx / 2, y: (solid === 'cylinder' ? top : baseY) + 14, text: `r = ${r}`, color: 'var(--accent)', size: 13 }, { x: solid === 'cylinder' ? cx + rx + 22 : cx - 8, y: (top + baseY) / 2, text: `h = ${h}`, color: 'var(--violet)', anchor: solid === 'cylinder' ? 'start' : 'end', size: 13 }, ...(solid === 'cone' ? [{ x: cx + rx / 2 + 8, y: (top + baseY) / 2, text: `ℓ = ${fmt(f.slant ?? 0, 2)}`, color: 'var(--orange)', anchor: 'start' as const, size: 13 }] : [])];
  return (
    <DiagramLayout maxWidth={460} drawing={
      <>
        <Labels specs={labels} W={W} H={H} />
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" role="img" aria-label={`${solid} with ${solid === 'pyramid' ? 'base side' : 'radius'} ${r}${solid === 'sphere' ? '' : ` and height ${h}`}. Volume ${fmt(f.V, 2)}.`}>
          <Drawing solid={solid} r={r} h={h} />
        </svg>
      </>
    }>
      <Seg label="Solid" value={solid} onChange={setSolid} options={[{ id: 'cylinder', label: 'Cylinder' }, { id: 'pyramid', label: 'Pyramid' }, { id: 'cone', label: 'Cone' }, { id: 'sphere', label: 'Sphere' }]} />
      <Slider label={solid === 'pyramid' ? 'Base side s' : 'Radius r'} value={r} min={1} max={7} onChange={setR} />
      {solid !== 'sphere' && <Slider label="Height h" value={h} min={1} max={12} onChange={setH} />}
      <div className="grid grid-cols-2 gap-2" aria-live="polite">
        <Tile label="Volume" value={fmt(f.V, 2)} tone="accent" size={24} />
        <Tile label="Surface area" value={fmt(f.SA, 2)} tone="violet" size={24} />
        {f.LA !== null && <Tile label="Lateral area" value={fmt(f.LA, 2)} size={24} />}
        {f.slant !== null && <Tile label="Slant height ℓ" value={fmt(f.slant, 2)} tone="orange" size={24} />}
      </div>
      <Equation tex={f.tex} />
      <Note>Choose a solid. Move the sliders. Double the radius of a sphere and the volume multiplies by 8.</Note>
    </DiagramLayout>
  );
}
