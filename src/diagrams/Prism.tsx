import { useId, useMemo, useState } from 'react';
import { Tex } from '../components/Math';
import { fmt } from '../lib/math';
import { Labels } from './Label';
import { PRISM_DEFAULT, PRISM_H, PRISM_W, prismGeometry, type PrismState } from './prism';

function Slider({ label, value, min, max, step, onChange, display }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void; display?: string }) {
  const id = useId();
  return (
    <div className="slider-label">
      <div className="flex justify-between"><label htmlFor={id}>{label}</label><b aria-hidden="true">{display ?? value}</b></div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} aria-valuetext={display ?? String(value)} />
    </div>
  );
}

export function Prism() {
  const [p, setP] = useState<PrismState>(PRISM_DEFAULT);
  const slicesId = useId();
  const g = useMemo(() => prismGeometry(p), [p]);
  const patch = (x: Partial<PrismState>) => setP((s) => ({ ...s, ...x }));
  const showSlices = g.slices.length > 0;
  const faces = (f: { top: string; right: string; front: string }, sw: number) => (
    <>
      <polygon points={f.top} fill="var(--face1)" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
      <polygon points={f.right} fill="var(--face3)" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
      <polygon points={f.front} fill="var(--face2)" stroke="currentColor" strokeWidth={sw} strokeLinejoin="round" />
    </>
  );

  return (
    <div className="grid gap-5 items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div className="relative w-full max-w-[460px] mx-auto font-display italic">
        <Labels specs={g.labels} W={PRISM_W} H={PRISM_H} />
        <svg viewBox={`0 0 ${PRISM_W} ${PRISM_H}`} className="w-full block text-ink" role="img" aria-label={`${p.oblique ? 'Oblique' : 'Right'} rectangular prism with base ${p.w} by ${p.d} and height ${p.h}. Volume ${g.V}.`}>
          {showSlices ? g.slices.map((s, i) => <g key={i}>{faces(s, 1.2)}</g>) : faces(g.whole, 2)}
          <polygon points={g.base} fill="var(--accent)" fillOpacity={0.25} stroke="var(--accent)" strokeWidth={2} strokeDasharray="4 4" />
          <line {...g.heightLine} stroke="var(--violet)" strokeWidth={2.5} strokeDasharray="6 4" />
          {p.oblique && <line {...g.edgeLine} stroke="var(--orange)" strokeWidth={2.5} />}
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <div className="seg" role="radiogroup" aria-label="Prism type">
          <button type="button" role="radio" aria-checked={!p.oblique} onClick={() => patch({ oblique: false })}>Right prism</button>
          <button type="button" role="radio" aria-checked={p.oblique} onClick={() => patch({ oblique: true })}>Oblique prism</button>
        </div>
        <Slider label="Base width" value={p.w} min={2} max={8} step={1} onChange={(w) => patch({ w })} />
        <Slider label="Base depth" value={p.d} min={1} max={5} step={1} onChange={(d) => patch({ d })} />
        <Slider label="Height" value={p.h} min={1} max={7} step={1} onChange={(h) => patch({ h })} />
        {p.oblique && (
          <>
            <Slider label="Lean" value={p.lean} min={0.5} max={3} step={0.5} display={fmt(p.lean, 1)} onChange={(lean) => patch({ lean })} />
            <label htmlFor={slicesId} className="flex items-center gap-2.5 text-[14px] cursor-pointer">
              <input id={slicesId} type="checkbox" checked={p.slices} onChange={(e) => patch({ slices: e.target.checked })} />
              Show slices (Cavalieri's principle)
            </label>
          </>
        )}
        <div className="grid grid-cols-2 gap-2.5" aria-live="polite">
          <div className="tile bg-accent-soft"><div className="tile-label">Volume V = Bh</div><div className="tile-value text-[28px] text-accent">{g.V}</div></div>
          <div className="tile bg-soft"><div className="tile-label">{g.areaLabel}</div><div className="tile-value text-[28px]">{g.areaValue}</div></div>
        </div>
        <div className="text-[17px] tile bg-soft overflow-x-auto"><Tex tex={g.equationTex} /></div>
        <p className="text-[13px] text-muted">{g.note}</p>
      </div>
    </div>
  );
}
