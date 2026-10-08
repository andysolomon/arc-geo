import { useCallback, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Tex } from '../components/Math';
import { norm, type Pt } from '../lib/math';
import { Handle } from './Handle';
import { Labels } from './Label';
import { INSC_CX, INSC_CY, INSC_DEFAULT, INSC_R, INSC_SIZE, angleOfPoint, inscribedGeometry, type InscribedState } from './inscribed';
import { useDrag } from './useDrag';

const STEP = 3;
type Key = keyof InscribedState;

export function InscribedAngle() {
  const [st, setSt] = useState<InscribedState>(INSC_DEFAULT);
  const [showCentral, setShowCentral] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const checkId = useId();
  const g = useMemo(() => inscribedGeometry(st), [st]);

  const setAngle = useCallback((key: Key, deg: number) => setSt((s) => ({ ...s, [key]: norm(deg) })), []);
  const moveA = useCallback((p: Pt) => setAngle('a', angleOfPoint(p)), [setAngle]);
  const moveB = useCallback((p: Pt) => setAngle('b', angleOfPoint(p)), [setAngle]);
  const moveC = useCallback((p: Pt) => setAngle('c', angleOfPoint(p)), [setAngle]);
  const dragA = useDrag(svgRef, moveA), dragB = useDrag(svgRef, moveB), dragC = useDrag(svgRef, moveC);
  const key = (k: Key) => (e: KeyboardEvent<SVGElement>) => {
    const d = e.key === 'ArrowLeft' || e.key === 'ArrowDown' ? -STEP : e.key === 'ArrowRight' || e.key === 'ArrowUp' ? STEP : 0;
    if (d) {
      e.preventDefault();
      setAngle(k, st[k] + d);
    }
  };
  const handle = (k: Key, at: Pt, color: string, name: string) => ({
    at, color,
    label: `Point ${name}, drag or use arrow keys`,
    valueNow: Math.round(st[k]), valueMin: 0, valueMax: 360, valueText: `${Math.round(st[k])} degrees around the circle`,
  });
  const labels = showCentral ? [...g.labels, g.centralLabel] : g.labels;

  return (
    <div className="grid gap-5 items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div className="relative w-full max-w-[420px] mx-auto font-display italic">
        <Labels specs={labels} W={INSC_SIZE} H={INSC_SIZE} />
        <svg ref={svgRef} viewBox={`0 0 ${INSC_SIZE} ${INSC_SIZE}`} className="w-full block text-ink font-display italic" style={{ touchAction: 'none' }} role="img" aria-label={`Circle with inscribed angle ABC. The intercepted arc AC measures ${g.arcLabel}. The angle measures ${g.angleLabel}.`}>
          <circle cx={INSC_CX} cy={INSC_CY} r={INSC_R} fill="none" stroke="currentColor" strokeWidth={2} />
          <path d={g.arcPath} fill="none" stroke="var(--accent)" strokeWidth={7} strokeLinecap="round" />
          {showCentral && (
            <>
              <line x1={INSC_CX} y1={INSC_CY} x2={g.A[0]} y2={g.A[1]} stroke="var(--accent)" strokeWidth={2} strokeDasharray="5 5" />
              <line x1={INSC_CX} y1={INSC_CY} x2={g.C[0]} y2={g.C[1]} stroke="var(--accent)" strokeWidth={2} strokeDasharray="5 5" />
              <path d={g.centralMarker} fill="none" stroke="var(--accent)" strokeWidth={2} />
              <circle cx={INSC_CX} cy={INSC_CY} r={3} fill="currentColor" />
            </>
          )}
          <line x1={g.B[0]} y1={g.B[1]} x2={g.A[0]} y2={g.A[1]} stroke="var(--violet)" strokeWidth={2.5} />
          <line x1={g.B[0]} y1={g.B[1]} x2={g.C[0]} y2={g.C[1]} stroke="var(--violet)" strokeWidth={2.5} />
          <path d={g.angleMarker} fill="none" stroke="var(--violet)" strokeWidth={2.5} />
          <Handle {...handle('a', g.A, 'var(--accent)', 'A')} onKeyDown={key('a')} drag={dragA} />
          <Handle {...handle('c', g.C, 'var(--accent)', 'C')} onKeyDown={key('c')} drag={dragC} />
          <Handle {...handle('b', g.B, 'var(--violet)', 'B')} onKeyDown={key('b')} drag={dragB} />
          <text x={g.la[0]} y={g.la[1]} fill="currentColor" fontSize={17} textAnchor="middle" dominantBaseline="middle">A</text>
          <text x={g.lb[0]} y={g.lb[1]} fill="currentColor" fontSize={17} textAnchor="middle" dominantBaseline="middle">B</text>
          <text x={g.lc[0]} y={g.lc[1]} fill="currentColor" fontSize={17} textAnchor="middle" dominantBaseline="middle">C</text>
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
          <div className="tile bg-accent-soft"><div className="tile-label">Intercepted arc AC</div><div className="tile-value text-accent">{g.arcLabel}</div></div>
          <div className="tile bg-violet-soft"><div className="tile-label">Inscribed angle ABC</div><div className="tile-value text-violet">{g.angleLabel}</div></div>
        </div>
        <div className="text-[18px] tile bg-soft overflow-x-auto"><Tex tex={g.equationTex} /></div>
        <label htmlFor={checkId} className="flex items-center gap-2.5 text-[14px] cursor-pointer">
          <input id={checkId} type="checkbox" checked={showCentral} onChange={(e) => setShowCentral(e.target.checked)} />
          Show the central angle AOC. It equals the arc.
        </label>
        <p className="text-[13px] text-muted">Drag A, B, or C. Move B to the other side of the circle. The intercepted arc changes to the other arc.</p>
      </div>
    </div>
  );
}
