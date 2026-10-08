import { useCallback, useId, useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { Tex } from '../components/Math';
import type { Pt } from '../lib/math';
import { Handle } from './Handle';
import { Labels } from './Label';
import { DIST_DEFAULT, GRID_MAX, GRID_SIZE, X, Y, distanceGeometry, nudge, snap, type DistanceState } from './distance';
import { useDrag } from './useDrag';

type Key = 'a' | 'b';

const gridLines = (() => {
  const out = [];
  for (let i = -GRID_MAX; i <= GRID_MAX; i++) {
    out.push(<line key={'v' + i} x1={X(i)} y1={0} x2={X(i)} y2={GRID_SIZE} stroke="var(--line)" strokeWidth={1} />);
    out.push(<line key={'h' + i} x1={0} y1={Y(i)} x2={GRID_SIZE} y2={Y(i)} stroke="var(--line)" strokeWidth={1} />);
  }
  return out;
})();

export function DistanceGrid() {
  const [st, setSt] = useState<DistanceState>(DIST_DEFAULT);
  const svgRef = useRef<SVGSVGElement>(null);
  const legsId = useId();
  const g = useMemo(() => distanceGeometry(st), [st]);

  const moveA = useCallback((p: Pt) => setSt((s) => ({ ...s, a: snap(p) })), []);
  const moveB = useCallback((p: Pt) => setSt((s) => ({ ...s, b: snap(p) })), []);
  const dragA = useDrag(svgRef, moveA), dragB = useDrag(svgRef, moveB);
  const key = (k: Key) => (e: KeyboardEvent<SVGElement>) => {
    const dx = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    const dy = e.key === 'ArrowUp' ? 1 : e.key === 'ArrowDown' ? -1 : 0;
    if (dx || dy) {
      e.preventDefault();
      setSt((s) => ({ ...s, [k]: nudge(s[k], dx, dy) }));
    }
  };
  const handle = (k: Key, at: Pt, name: string) => ({
    at, color: 'var(--accent)',
    label: `Point ${name}, drag or use arrow keys`,
    valueNow: st[k][0], valueMin: -GRID_MAX, valueMax: GRID_MAX, valueText: `${name} at (${st[k][0]}, ${st[k][1]})`,
  });

  return (
    <div className="grid gap-5 items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div className="relative w-full max-w-[440px] mx-auto font-display italic">
        <Labels specs={g.labels} W={GRID_SIZE} H={GRID_SIZE} />
        <svg ref={svgRef} viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE}`} className="w-full block text-ink font-display italic" style={{ touchAction: 'none' }} role="img" aria-label={`Coordinate grid with A(${st.a[0]}, ${st.a[1]}) and B(${st.b[0]}, ${st.b[1]}). Distance ${g.dv.toFixed(2)}.`}>
          {gridLines}
          <line x1={0} y1={200} x2={GRID_SIZE} y2={200} stroke="currentColor" strokeWidth={1.5} />
          <line x1={200} y1={0} x2={200} y2={GRID_SIZE} stroke="currentColor" strokeWidth={1.5} />
          <text x={392} y={194} fontSize={13} fill="currentColor" textAnchor="end">x</text>
          <text x={207} y={12} fontSize={13} fill="currentColor">y</text>
          {st.showLegs && (
            <>
              <line x1={g.ax} y1={g.ay} x2={g.bx} y2={g.ay} stroke="var(--orange)" strokeWidth={2.5} strokeDasharray="6 4" />
              <line x1={g.bx} y1={g.ay} x2={g.bx} y2={g.by} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
              {g.rightAngle && <path d={g.rightAngle} fill="none" stroke="currentColor" strokeWidth={1.5} />}
            </>
          )}
          <line x1={g.ax} y1={g.ay} x2={g.bx} y2={g.by} stroke="var(--accent)" strokeWidth={3} />
          <Handle {...handle('a', [g.ax, g.ay], 'A')} onKeyDown={key('a')} drag={dragA} />
          <Handle {...handle('b', [g.bx, g.by], 'B')} onKeyDown={key('b')} drag={dragB} />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
          <div className="tile bg-orange-soft"><div className="tile-label">Δx = x₂ − x₁</div><div className="tile-value text-[28px] text-orange">{g.dx}</div></div>
          <div className="tile bg-violet-soft"><div className="tile-label">Δy = y₂ − y₁</div><div className="tile-value text-[28px] text-violet">{g.dy}</div></div>
        </div>
        <div className="tile bg-accent-soft"><div className="tile-label">Distance</div><div className="text-[18px] overflow-x-auto"><Tex tex={g.equationTex} /></div></div>
        <label htmlFor={legsId} className="flex items-center gap-2.5 text-[14px] cursor-pointer">
          <input id={legsId} type="checkbox" checked={st.showLegs} onChange={(e) => setSt((s) => ({ ...s, showLegs: e.target.checked }))} />
          Show the right triangle
        </label>
        <div className="text-[13px] text-muted flex flex-col gap-1">
          <div>Midpoint: <b className="text-ink">{g.mid}</b></div>
          <div>Slope: <b className="text-ink">{g.slope}</b></div>
        </div>
        <p className="text-[13px] text-muted">Drag A or B. Points snap to whole numbers.</p>
      </div>
    </div>
  );
}
