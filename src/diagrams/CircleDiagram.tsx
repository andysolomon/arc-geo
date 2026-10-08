import { useMemo, useState } from 'react';
import { fmt, type Pt } from '../lib/math';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Slider, Tile, toRad } from './controls';

const W = 360, H = 360, CX = 180, CY = 180, R = 130;
const piTex = (coef: number) => (coef === 1 ? '\\pi' : `${fmt(coef, 2)}\\pi`);

export function circleFacts(r: number, theta: number) {
  const C = 2 * Math.PI * r, A = Math.PI * r * r;
  const frac = theta / 360;
  return { C, A, arc: frac * C, sector: frac * A, chord: 2 * r * Math.sin(toRad(theta / 2)), cCoef: 2 * r, aCoef: r * r, arcCoef: frac * 2 * r, sectorCoef: frac * r * r };
}

export function CircleDiagram() {
  const [r, setR] = useState(5);
  const [theta, setTheta] = useState(90);
  const f = useMemo(() => circleFacts(r, theta), [r, theta]);
  const A: Pt = [CX + R, CY];
  const B: Pt = [CX + R * Math.cos(toRad(theta)), CY - R * Math.sin(toRad(theta))];
  const mid = toRad(theta / 2);
  const labels: LabelSpec[] = [
    { x: CX + 0.5 * R, y: CY + 14, text: `r = ${r}`, color: 'var(--accent)', size: 14 },
    { x: CX + (R + 18) * Math.cos(mid), y: CY - (R + 18) * Math.sin(mid), text: `${theta}°`, color: 'var(--accent)', size: 14 },
    { x: (A[0] + B[0]) / 2 - 12 * Math.cos(mid), y: (A[1] + B[1]) / 2 + 12 * Math.sin(mid), text: 'chord', color: 'var(--violet)', size: 12 },
    { x: CX - 10, y: CY + 14, text: 'O', color: 'var(--ink)', size: 13 },
  ];
  return (
    <DiagramLayout maxWidth={400} drawing={
      <>
        <Labels specs={labels} W={W} H={H} />
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" role="img" aria-label={`Circle of radius ${r} with a central angle of ${theta} degrees.`}>
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="currentColor" strokeWidth={2} />
          <path d={`M ${CX} ${CY} L ${A[0]} ${A[1]} A ${R} ${R} 0 ${theta > 180 ? 1 : 0} 0 ${B[0]} ${B[1]} Z`} fill="var(--accent)" fillOpacity={0.18} stroke="none" />
          <path d={`M ${A[0]} ${A[1]} A ${R} ${R} 0 ${theta > 180 ? 1 : 0} 0 ${B[0]} ${B[1]}`} fill="none" stroke="var(--accent)" strokeWidth={6} strokeLinecap="round" />
          <line x1={CX} y1={CY} x2={A[0]} y2={A[1]} stroke="var(--accent)" strokeWidth={2.5} />
          <line x1={CX} y1={CY} x2={B[0]} y2={B[1]} stroke="var(--accent)" strokeWidth={2} strokeDasharray="5 4" />
          <line x1={A[0]} y1={A[1]} x2={B[0]} y2={B[1]} stroke="var(--violet)" strokeWidth={2} />
          <path d={`M ${CX + 24} ${CY} A 24 24 0 ${theta > 180 ? 1 : 0} 0 ${CX + 24 * Math.cos(toRad(theta))} ${CY - 24 * Math.sin(toRad(theta))}`} fill="none" stroke="var(--accent)" strokeWidth={2} />
          <circle cx={CX} cy={CY} r={3.5} fill="currentColor" />
        </svg>
      </>
    }>
      <Slider label="Radius r" value={r} min={1} max={10} onChange={setR} />
      <Slider label="Central angle θ" value={theta} min={10} max={350} step={5} onChange={setTheta} display={`${theta}°`} />
      <div className="grid grid-cols-2 gap-2" aria-live="polite">
        <Tile label="Circumference C = 2πr" value={<><span className="text-[18px]">{piTex(f.cCoef).replace('\\pi', 'π')} ≈ </span>{fmt(f.C, 2)}</>} tone="accent" size={24} />
        <Tile label="Area A = πr²" value={<><span className="text-[18px]">{piTex(f.aCoef).replace('\\pi', 'π')} ≈ </span>{fmt(f.A, 2)}</>} tone="accent" size={24} />
        <Tile label="Arc length" value={fmt(f.arc, 2)} tone="violet" size={24} />
        <Tile label="Sector area" value={fmt(f.sector, 2)} tone="violet" size={24} />
        <Tile label="Chord AB" value={fmt(f.chord, 2)} size={24} />
        <Tile label="Fraction of the circle" value={`${theta}/360 = ${fmt(theta / 360, 3)}`} tone="orange" size={18} />
      </div>
      <Equation tex={`s = \\frac{${theta}}{360}\\cdot 2\\pi(${r}) = ${piTex(f.arcCoef)} \\approx ${fmt(f.arc, 2)},\\qquad A_{\\text{sector}} = \\frac{${theta}}{360}\\cdot \\pi(${r})^2 = ${piTex(f.sectorCoef)} \\approx ${fmt(f.sector, 2)}`} />
      <Note>Move the sliders. The arc and the sector are the same fraction of the circle. Double the radius: the circumference doubles, the area multiplies by 4.</Note>
    </DiagramLayout>
  );
}
