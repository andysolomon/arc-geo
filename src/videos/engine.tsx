// A small clock with the same authoring API as animations-v3:
// useComposition() → { T, CUES, authoredTotal, playing }, Captions, Easing, animate, interpolate.
import { createContext, useContext, type CSSProperties } from 'react';

export interface Scene { name: string; dur: number; desc?: string }

export type Cues = Record<string, number>;

/** CUES.Name = that section's authored start (running sum of durations, in literal order). */
export function deriveCues(scenes: readonly Scene[]): { CUES: Cues; authoredTotal: number } {
  const CUES: Cues = {};
  let t = 0;
  for (const s of scenes) {
    if (!(s.name in CUES)) CUES[s.name] = Math.round(t * 1000) / 1000;
    t += s.dur;
  }
  return { CUES, authoredTotal: Math.round(t * 1000) / 1000 };
}

export type EaseFn = (t: number) => number;

export const Easing = {
  linear: ((t) => t) as EaseFn,
  easeInQuad: ((t) => t * t) as EaseFn,
  easeOutQuad: ((t) => t * (2 - t)) as EaseFn,
  easeInOutQuad: ((t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)) as EaseFn,
  easeInCubic: ((t) => t * t * t) as EaseFn,
  easeOutCubic: ((t) => --t * t * t + 1) as EaseFn,
  easeInOutCubic: ((t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)) as EaseFn,
  easeInOutSine: ((t) => -(Math.cos(Math.PI * t) - 1) / 2) as EaseFn,
  easeOutBack: ((t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  }) as EaseFn,
};

/** Map t across input keyframes to output values, with optional easing per segment. */
export function interpolate(input: readonly number[], output: readonly number[], ease: EaseFn | EaseFn[] = Easing.linear): (t: number) => number {
  return (t) => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const fn = Array.isArray(ease) ? ease[i] ?? Easing.linear : ease;
        return output[i] + (output[i + 1] - output[i]) * fn(local);
      }
    }
    return output[output.length - 1];
  };
}

interface AnimateOpts { from?: number; to?: number; start?: number; end?: number; ease?: EaseFn }

/** Single-segment tween: `from` before `start`, `to` after `end`. */
export function animate({ from = 0, to = 1, start = 0, end = 1, ease = Easing.easeInOutCubic }: AnimateOpts): (t: number) => number {
  return (t) => {
    if (t <= start) return from;
    if (t >= end) return to;
    return from + (to - from) * ease((t - start) / (end - start));
  };
}

export interface Composition {
  /** Authored seconds. Key all choreography to T. */
  T: number;
  CUES: Cues;
  authoredTotal: number;
  playing: boolean;
}

export const CompositionContext = createContext<Composition | null>(null);

export function useComposition(): Composition {
  const ctx = useContext(CompositionContext);
  if (!ctx) throw new Error('useComposition() must be called inside <Explainer>');
  return ctx;
}

export interface CaptionItem { at: number; until?: number; text: string }

const CAPTION_FADE = 0.18;

/** One caption element, at most one visible at a time, keyed to T. */
export function Captions({ items, style }: { items: CaptionItem[]; style?: CSSProperties }) {
  const { T } = useComposition();
  const sorted = items.filter((it) => Number.isFinite(it.at)).sort((a, b) => a.at - b.at);
  let active: CaptionItem | null = null;
  let end = Infinity;
  for (let i = 0; i < sorted.length; i++) {
    if (T < sorted[i].at) break;
    active = sorted[i];
    end = typeof active.until === 'number' ? active.until : i + 1 < sorted.length ? sorted[i + 1].at : Infinity;
  }
  if (!active || T >= end) return null;
  let o = Math.min(1, (T - active.at) / CAPTION_FADE);
  if (Number.isFinite(end)) o = Math.min(o, (end - T) / CAPTION_FADE);
  o = Math.max(0, Math.min(1, o));
  return (
    <div
      style={{ position: 'absolute', left: '8%', right: '8%', bottom: '7%', textAlign: 'center', opacity: o, pointerEvents: 'none', textShadow: '0 1px 14px rgba(0,0,0,0.45)', ...style }}
    >
      {active.text}
    </div>
  );
}

/** The three motion helpers every piece uses. */
export const MOTION = {
  enter: (T: number, at: number, dur = 0.6) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutCubic })(T),
  draw: (T: number, at: number, dur = 1) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeInOutCubic })(T),
  pop: (T: number, at: number, dur = 0.5) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutBack })(T),
};
