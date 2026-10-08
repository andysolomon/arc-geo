import { describe, expect, it } from 'vitest';
import { isValidTriangle, triangleGeometry, UNIT } from '../diagrams/triangle';
import { TV_H, TV_W, transversalGeometry } from '../diagrams/transversal';
import type { Pt } from '../lib/math';

const tri = (A: Pt, B: Pt, C: Pt) => triangleGeometry({ A, B, C });

describe('triangle diagram', () => {
  it('classifies a 3-4-5 triangle as right with an equal Pythagorean check', () => {
    const g = tri([0, 0], [4 * UNIT, 0], [0, 3 * UNIT]);
    expect(g.byAngles).toBe('right');
    expect(g.pyth.relation).toBe('equal');
  });
  it('acute means c² < a² + b²', () => {
    const g = tri([0, 0], [4 * UNIT, 0], [2 * UNIT, 4 * UNIT]);
    expect(g.byAngles).toBe('acute');
    expect(g.pyth.relation).toBe('less');
  });
  it('obtuse means c² > a² + b²', () => {
    const g = tri([0, 0], [4 * UNIT, 0], [5 * UNIT, 1 * UNIT]);
    expect(g.byAngles).toBe('obtuse');
    expect(g.pyth.relation).toBe('greater');
  });
  it('the default triangle is acute and reports acute', () => {
    const g = tri([80, 300], [340, 300], [200, 90]);
    expect(g.byAngles).toBe('acute');
    expect(g.pyth.relation).toBe('less');
  });
  it('rejects degenerate positions', () => {
    expect(isValidTriangle([0, 0], [100, 0], [100, 0])).toBe(false); // C on B
    expect(isValidTriangle([0, 0], [100, 0], [200, 0])).toBe(false); // collinear
    expect(isValidTriangle([0, 0], [100, 0], [50, 2])).toBe(false); // nearly flat
    expect(isValidTriangle([0, 0], [100, 0], [50, 60])).toBe(true);
  });
});

describe('transversal diagram', () => {
  it('keeps both intersections inside the drawing for every slider value', () => {
    for (const parallel of [true, false]) {
      for (let theta = 20; theta <= 160; theta += 5) {
        const g = transversalGeometry(theta, parallel);
        for (const p of [g.P, g.Q]) {
          expect(p[0], `theta ${theta} parallel ${parallel}`).toBeGreaterThan(20);
          expect(p[0]).toBeLessThan(TV_W - 20);
          expect(p[1]).toBeGreaterThan(0);
          expect(p[1]).toBeLessThan(TV_H);
        }
      }
    }
  });
  it('angle 1 is the supplement of the transversal angle and pairs match when parallel', () => {
    const g = transversalGeometry(60, true);
    expect(g.angles).toEqual([120, 60, 120, 60, 120, 60, 120, 60]);
    const h = transversalGeometry(60, false);
    expect(h.angles[0]).not.toBe(h.angles[4]);
  });
});
