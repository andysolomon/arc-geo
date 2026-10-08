import { useCallback, useEffect, useId, useMemo, useRef, useState, type ComponentType } from 'react';
import { CompositionContext, deriveCues, type Scene } from './engine';
import { BG, STAGE_H, STAGE_W } from './palette';

export interface ExplainerProps {
  title: string;
  scenes: readonly Scene[];
  piece: ComponentType;
}

const REDUCED = '(prefers-reduced-motion: reduce)';
const prefersReducedMotion = () => typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia(REDUCED).matches;

const clock = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

/**
 * 16:9 player for a Piece: scaled to fit, play/pause, scrubber, loop.
 * Pauses when off-screen. Starts paused when the user prefers reduced motion.
 */
export function Explainer({ title, scenes, piece: Piece }: ExplainerProps) {
  const { CUES, authoredTotal } = useMemo(() => deriveCues(scenes), [scenes]);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [scale, setScale] = useState(0.5);
  const [visible, setVisible] = useState(true);
  const frameRef = useRef<HTMLDivElement>(null);
  const tRef = useRef(0);
  const id = useId();

  // Scale the 1280×720 stage to the frame width.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / STAGE_W);
    update();
    if (typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Pause when off-screen; resume when back if we were playing.
  useEffect(() => {
    const el = frameRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = playing && visible;

  // The clock.
  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      let next = tRef.current + dt;
      if (next >= authoredTotal) next = 0; // loop
      tRef.current = next;
      setT(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [running, authoredTotal]);

  const seek = useCallback((v: number) => {
    tRef.current = v;
    setT(v);
  }, []);

  const value = useMemo(() => ({ T: t, CUES, authoredTotal, playing: running }), [t, CUES, authoredTotal, running]);

  const fullscreen = () => {
    const el = frameRef.current?.parentElement;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  return (
    <section className="rounded-2xl overflow-hidden mb-6 bg-video-bg text-video-ink" aria-labelledby={`${id}-title`}>
      <div className="flex items-center gap-3 px-[18px] py-3.5 flex-wrap">
        <div className="font-text [font-variant:small-caps] tracking-[.1em] text-video-accent text-[14px] font-semibold">Video explainer</div>
        <h3 id={`${id}-title`} className="font-bold text-[17px]">{title}</h3>
      </div>
      <div className="relative" style={{ aspectRatio: '16 / 9', background: BG }}>
        <div ref={frameRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})`, transformOrigin: 'top left', position: 'absolute', top: 0, left: 0 }}>
            <CompositionContext.Provider value={value}>
              <Piece />
            </CompositionContext.Provider>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 px-[14px] py-2.5 flex-wrap">
        <button type="button" onClick={() => setPlaying((p) => !p)} aria-pressed={playing} aria-label={playing ? 'Pause video' : 'Play video'} className="w-10 h-10 rounded-[10px] border border-video-muted/40 bg-transparent text-video-ink grid place-items-center hover:bg-video-ink/10">
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" rx="1" /><rect x="8.5" y="1" width="3.5" height="12" rx="1" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true"><path d="M3 1.5v11l9-5.5z" /></svg>
          )}
        </button>
        <span className="font-mono text-[12px] text-video-muted tabular-nums" aria-hidden="true">{clock(t)} / {clock(authoredTotal)}</span>
        <label htmlFor={`${id}-scrub`} className="sr-only">Video position</label>
        <input
          id={`${id}-scrub`}
          type="range"
          min={0}
          max={authoredTotal}
          step={0.05}
          value={t}
          onChange={(e) => seek(+e.target.value)}
          aria-valuetext={`${clock(t)} of ${clock(authoredTotal)}`}
          className="flex-1 min-w-[120px]"
          style={{ accentColor: 'var(--video-accent)' }}
        />
        <button type="button" onClick={fullscreen} className="text-[13px] text-video-muted bg-transparent border-0 underline underline-offset-[3px] hover:text-video-ink px-2 py-2">Full screen</button>
      </div>
    </section>
  );
}
