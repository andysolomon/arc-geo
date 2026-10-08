import { useId, type ReactNode } from 'react';
import { Tex } from '../components/Math';

export function Slider({ label, value, min, max, step = 1, onChange, display }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; display?: string }) {
  const id = useId();
  return (
    <div className="slider-label">
      <div className="flex justify-between"><label htmlFor={id}>{label}</label><b aria-hidden="true">{display ?? value}</b></div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} aria-valuetext={display ?? String(value)} />
    </div>
  );
}

export function Seg<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: { id: T; label: string }[]; onChange: (v: T) => void }) {
  return (
    <div className="seg" role="radiogroup" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" role="radio" aria-checked={value === o.id} onClick={() => onChange(o.id)}>{o.label}</button>
      ))}
    </div>
  );
}

export function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  const id = useId();
  return (
    <label htmlFor={id} className="flex items-center gap-2.5 text-[14px] cursor-pointer">
      <input id={id} type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  );
}

export function Tile({ label, value, tone = 'soft', size = 28 }: { label: string; value: ReactNode; tone?: 'accent' | 'violet' | 'orange' | 'red' | 'soft'; size?: number }) {
  const bg = tone === 'soft' ? 'var(--soft)' : `var(--${tone}-soft)`;
  const color = tone === 'soft' ? 'var(--ink)' : `var(--${tone})`;
  return (
    <div className="tile" style={{ background: bg }}>
      <div className="tile-label">{label}</div>
      <div className="tile-value" style={{ color, fontSize: size }}>{value}</div>
    </div>
  );
}

export function Equation({ tex }: { tex: string }) {
  return <div className="text-[17px] tile bg-soft overflow-x-auto"><Tex tex={tex} /></div>;
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="text-[13px] text-muted">{children}</p>;
}

/** Two-column layout: drawing on the left, controls and readouts on the right. */
export function DiagramLayout({ drawing, maxWidth = 440, children }: { drawing: ReactNode; maxWidth?: number; children: ReactNode }) {
  return (
    <div className="grid gap-5 items-start grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      <div className="relative w-full mx-auto font-display italic" style={{ maxWidth }}>{drawing}</div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

export const deg = (rad: number): number => (rad * 180) / Math.PI;
export const toRad = (d: number): number => (d * Math.PI) / 180;
