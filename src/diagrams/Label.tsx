import type { CSSProperties } from 'react';

export interface LabelSpec {
  x: number;
  y: number;
  text: string;
  /** CSS color, normally a token such as var(--accent). */
  color: string;
  anchor?: 'middle' | 'start' | 'end';
  size?: number;
}

/**
 * HTML label overlaid on an SVG (viewBox W×H); x, y in viewBox units and
 * positioned in percent so it tracks the SVG at any size.
 */
export function Label({ spec, W, H }: { spec: LabelSpec; W: number; H: number }) {
  const style: CSSProperties = { left: (spec.x / W) * 100 + '%', top: (spec.y / H) * 100 + '%', color: spec.color, fontSize: (spec.size ?? 15) + 2 };
  return (
    <div className="diagram-label" data-anchor={spec.anchor ?? 'middle'} style={style} aria-hidden="true">
      {spec.text}
    </div>
  );
}

export function Labels({ specs, W, H }: { specs: LabelSpec[]; W: number; H: number }) {
  return (
    <>
      {specs.map((s, i) => <Label key={i} spec={s} W={W} H={H} />)}
    </>
  );
}
