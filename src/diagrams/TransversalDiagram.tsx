import { useMemo, useState } from 'react';
import { Labels, type LabelSpec } from './Label';
import { Check, DiagramLayout, Equation, Note, Slider } from './controls';
import { PAIRS, TV_H, TV_W, transversalGeometry } from './transversal';

export function TransversalDiagram() {
  const [theta, setTheta] = useState(60);
  const [parallel, setParallel] = useState(true);
  const g = useMemo(() => transversalGeometry(theta, parallel), [theta, parallel]);
  const interior = new Set([3, 4, 5, 6]);
  const labels: LabelSpec[] = [
    ...g.labelAt.map((p, i) => ({ x: p[0], y: p[1], text: String(i + 1), color: interior.has(i + 1) ? 'var(--violet)' : 'var(--accent)', size: 13 })),
    { x: g.m[1][0] - 6, y: g.m[1][1] - 12, text: 'm', color: 'var(--ink)', anchor: 'end' },
    { x: g.n[1][0] - 6, y: g.n[1][1] - 12, text: 'n', color: 'var(--ink)', anchor: 'end' },
    { x: g.t[1][0] + 8, y: g.t[1][1] + 4, text: 't', color: 'var(--orange)', anchor: 'start' },
  ];
  const pairText = (p: [number, number]) => `∠${p[0]} = ${g.angles[p[0] - 1]}°, ∠${p[1]} = ${g.angles[p[1] - 1]}°`;
  return (
    <DiagramLayout maxWidth={460} drawing={
      <>
        <Labels specs={labels} W={TV_W} H={TV_H} />
        <svg viewBox={`0 0 ${TV_W} ${TV_H}`} className="w-full block text-ink" role="img" aria-label={`Lines m and n ${parallel ? 'are parallel' : 'are not parallel'}, cut by transversal t at ${theta} degrees. Angle 1 measures ${g.angles[0]} degrees.`}>
          <line x1={g.m[0][0]} y1={g.m[0][1]} x2={g.m[1][0]} y2={g.m[1][1]} stroke="currentColor" strokeWidth={2} />
          <line x1={g.n[0][0]} y1={g.n[0][1]} x2={g.n[1][0]} y2={g.n[1][1]} stroke="currentColor" strokeWidth={2} />
          <line x1={g.t[0][0]} y1={g.t[0][1]} x2={g.t[1][0]} y2={g.t[1][1]} stroke="var(--orange)" strokeWidth={2.5} />
          {parallel && [g.m, g.n].map((ln, i) => <path key={i} d={`M ${ln[1][0] - 60} ${ln[1][1] - 6} l 10 6 l -10 6`} fill="none" stroke="currentColor" strokeWidth={1.5} />)}
          {g.perpendicular && <path d={`M ${g.P[0] + 14} ${g.P[1]} l 0 -14 l -14 0`} fill="none" stroke="var(--orange)" strokeWidth={2} />}
          <circle cx={g.P[0]} cy={g.P[1]} r={3.5} fill="currentColor" />
          <circle cx={g.Q[0]} cy={g.Q[1]} r={3.5} fill="currentColor" />
        </svg>
      </>
    }>
      <Slider label="Transversal angle" value={theta} min={20} max={160} onChange={setTheta} display={`${theta}°`} />
      <Check label="Lines m and n are parallel" checked={parallel} onChange={setParallel} />
      <div className="grid grid-cols-4 gap-1.5 text-center" aria-live="polite">
        {g.angles.map((a, i) => (
          <div key={i} className="tile p-[8px_6px]" style={{ background: interior.has(i + 1) ? 'var(--violet-soft)' : 'var(--accent-soft)' }}>
            <div className="text-[12px] text-muted">∠{i + 1}</div>
            <div className="font-display font-medium text-[20px]" style={{ color: interior.has(i + 1) ? 'var(--violet)' : 'var(--accent)' }}>{a}°</div>
          </div>
        ))}
      </div>
      <dl className="text-[13px] flex flex-col gap-1">
        {PAIRS.map((p) => (
          <div key={p.name} className="flex gap-2 flex-wrap">
            <dt className="font-bold min-w-[140px]">{p.name}</dt>
            <dd className="text-muted">{p.pairs.map(pairText).join(' · ')}{' '}
              <b className="text-ink">{parallel ? (p.relation === 'equal' ? 'equal' : 'add to 180°') : 'not ' + (p.relation === 'equal' ? 'equal' : 'supplementary')}</b>
            </dd>
          </div>
        ))}
      </dl>
      <Equation tex={parallel ? `m \\parallel n \\implies \\angle 1 = \\angle 5 = ${g.angles[0]}^\\circ,\\ \\angle 3 + \\angle 6 = ${g.angles[2]}^\\circ + ${g.angles[5]}^\\circ = 180^\\circ` : `m \\nparallel n \\implies \\angle 1 = ${g.angles[0]}^\\circ \\ne \\angle 5 = ${g.angles[4]}^\\circ`} />
      <Note>Interior angles (3, 4, 5, 6) are violet. Exterior angles are green. Turn off parallel to see the pairs stop matching. Set the angle to 90° to make t perpendicular.</Note>
    </DiagramLayout>
  );
}
