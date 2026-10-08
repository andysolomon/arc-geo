import { useCallback, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { fmt, norm, type Pt } from '../lib/math';
import { Handle } from './Handle';
import { Labels, type LabelSpec } from './Label';
import { DiagramLayout, Equation, Note, Tile, toRad } from './controls';
import { useDrag } from './useDrag';

const W = 360, H = 360, BX = 180, BY = 190, R = 140;

export function classifyAngle(d: number): string {
  if (d === 0) return 'zero angle';
  if (d < 90) return 'acute';
  if (d === 90) return 'right';
  if (d < 180) return 'obtuse';
  if (d === 180) return 'straight';
  return 'reflex';
}

/** One angle ABC. Ray BA is fixed to the right; C drags around B. Measured counterclockwise 0–360. */
export function AngleDiagram() {
  const [angle, setAngle] = useState(50);
  const svgRef = useRef<SVGSVGElement>(null);
  const move = useCallback((p: Pt) => setAngle(Math.round(norm((Math.atan2(BY - p[1], p[0] - BX) * 180) / Math.PI))), []);
  const drag = useDrag(svgRef, move);
  const onKey = (e: KeyboardEvent<SVGElement>) => {
    const d = e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -1 : e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 1 : 0;
    if (d) { e.preventDefault(); setAngle((a) => norm(a + d)); }
  };
  const g = useMemo(() => {
    const A: Pt = [BX + R, BY];
    const C: Pt = [BX + R * Math.cos(toRad(angle)), BY - R * Math.sin(toRad(angle))];
    const m = 34;
    const arc = `M ${BX + m} ${BY} A ${m} ${m} 0 ${angle > 180 ? 1 : 0} 0 ${BX + m * Math.cos(toRad(angle))} ${BY - m * Math.sin(toRad(angle))}`;
    const mid = toRad(angle / 2);
    const labels: LabelSpec[] = [
      { x: BX + 58 * Math.cos(mid), y: BY - 58 * Math.sin(mid), text: `${angle}°`, color: 'var(--violet)' },
      { x: A[0] + 16, y: A[1], text: 'A', color: 'var(--ink)', anchor: 'start' },
      { x: C[0] + 30 * Math.cos(toRad(angle)), y: C[1] - 30 * Math.sin(toRad(angle)), text: 'C', color: 'var(--ink)' },
      { x: BX - 14, y: BY + 16, text: 'B', color: 'var(--ink)' },
    ];
    const type = classifyAngle(angle);
    const complement = angle < 90 ? 90 - angle : null;
    const supplement = angle < 180 ? 180 - angle : null;
    const right = angle === 90 ? `M ${BX + 18} ${BY} L ${BX + 18} ${BY - 18} L ${BX} ${BY - 18}` : '';
    return { A, C, arc, labels, type, complement, supplement, right };
  }, [angle]);

  return (
    <DiagramLayout maxWidth={400} drawing={
      <>
        <Labels specs={g.labels} W={W} H={H} />
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} className="w-full block text-ink" style={{ touchAction: 'none' }} role="img" aria-label={`Angle ABC measures ${angle} degrees. It is ${g.type}.`}>
          <circle cx={BX} cy={BY} r={R} fill="none" stroke="var(--line)" strokeWidth={1} strokeDasharray="3 5" />
          <line x1={BX} y1={BY} x2={g.A[0] + 20} y2={g.A[1]} stroke="currentColor" strokeWidth={2} />
          <line x1={BX} y1={BY} x2={BX + (R + 20) * Math.cos(toRad(angle))} y2={BY - (R + 20) * Math.sin(toRad(angle))} stroke="var(--violet)" strokeWidth={2.5} />
          {g.right ? <path d={g.right} fill="none" stroke="var(--violet)" strokeWidth={2} /> : <path d={g.arc} fill="var(--violet)" fillOpacity={0.12} stroke="var(--violet)" strokeWidth={2.5} />}
          <circle cx={BX} cy={BY} r={4} fill="currentColor" />
          <circle cx={g.A[0]} cy={g.A[1]} r={5} fill="currentColor" />
          <Handle at={g.C} color="var(--violet)" label="Point C, drag or use arrow keys" valueNow={angle} valueMin={0} valueMax={359} valueText={`${angle} degrees`} onKeyDown={onKey} drag={drag} />
        </svg>
      </>
    }>
      <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
        <Tile label="m∠ABC" value={`${angle}°`} tone="violet" size={30} />
        <Tile label="Type" value={g.type} size={22} />
        <Tile label="Complement" value={g.complement === null ? '—' : `${g.complement}°`} tone="accent" />
        <Tile label="Supplement" value={g.supplement === null ? '—' : `${g.supplement}°`} tone="orange" />
      </div>
      <Equation tex={`m\\angle ABC = ${angle}^\\circ${g.complement !== null ? `,\\quad 90^\\circ - ${angle}^\\circ = ${g.complement}^\\circ` : ''}${g.supplement !== null ? `,\\quad 180^\\circ - ${angle}^\\circ = ${fmt(g.supplement)}^\\circ` : ''}`} />
      <Note>Drag C around B. Watch the measure pass 90° and 180°. The complement exists only below 90°. The supplement exists only below 180°.</Note>
    </DiagramLayout>
  );
}
