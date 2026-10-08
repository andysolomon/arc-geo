import { useCallback, useRef, type PointerEvent as ReactPointerEvent, type RefObject } from 'react';
import type { Pt } from '../lib/math';

/** Convert a pointer event to viewBox coordinates of the given SVG. */
export function svgPoint(svg: SVGSVGElement | null, e: { clientX: number; clientY: number }): Pt | null {
  if (!svg) return null;
  const r = svg.getBoundingClientRect();
  const vb = svg.viewBox.baseVal;
  if (!r.width || !r.height) return null;
  return [((e.clientX - r.left) / r.width) * vb.width, ((e.clientY - r.top) / r.height) * vb.height];
}

/**
 * Returns pointer handlers for a draggable handle inside an SVG. The handle
 * captures the pointer so moves keep arriving when the pointer leaves it.
 */
export function useDrag(svgRef: RefObject<SVGSVGElement | null>, onMove: (p: Pt) => void) {
  const active = useRef(false);
  const onPointerDown = useCallback(
    (e: ReactPointerEvent<SVGElement>) => {
      if (e.button !== 0 && e.pointerType === 'mouse') return;
      e.preventDefault();
      active.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      const p = svgPoint(svgRef.current, e);
      if (p) onMove(p);
    },
    [svgRef, onMove],
  );
  const onPointerMove = useCallback(
    (e: ReactPointerEvent<SVGElement>) => {
      if (!active.current) return;
      const p = svgPoint(svgRef.current, e);
      if (p) onMove(p);
    },
    [svgRef, onMove],
  );
  const onPointerUp = useCallback((e: ReactPointerEvent<SVGElement>) => {
    active.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);
  return { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp };
}
