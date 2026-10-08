import type { KeyboardEvent, PointerEvent } from 'react';
import type { Pt } from '../lib/math';

export interface HandleProps {
  at: Pt;
  color: string;
  label: string;
  valueNow: number;
  valueMin: number;
  valueMax: number;
  valueText: string;
  onKeyDown: (e: KeyboardEvent<SVGElement>) => void;
  drag: {
    onPointerDown: (e: PointerEvent<SVGElement>) => void;
    onPointerMove: (e: PointerEvent<SVGElement>) => void;
    onPointerUp: (e: PointerEvent<SVGElement>) => void;
    onPointerCancel: (e: PointerEvent<SVGElement>) => void;
  };
}

/**
 * A draggable point: a 9-unit dot with a panel ring. The interactive circle
 * on top is a 22-unit transparent disc plus a non-scaling 14px stroke, so the
 * hit area is at least 44px on screen at any diagram size.
 */
export function Handle({ at, color, label, valueNow, valueMin, valueMax, valueText, onKeyDown, drag }: HandleProps) {
  return (
    <g>
      <circle cx={at[0]} cy={at[1]} r={9} fill={color} stroke="var(--panel)" strokeWidth={2} pointerEvents="none" />
      <circle
        cx={at[0]}
        cy={at[1]}
        r={22}
        fill="transparent"
        stroke="transparent"
        strokeWidth={14}
        pointerEvents="all"
        style={{ vectorEffect: 'non-scaling-stroke' }}
        className="handle"
        tabIndex={0}
        role="slider"
        aria-label={label}
        aria-valuenow={valueNow}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        aria-valuetext={valueText}
        onKeyDown={onKeyDown}
        {...drag}
      />
    </g>
  );
}
