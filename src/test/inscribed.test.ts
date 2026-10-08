import { describe, expect, it } from 'vitest';
import { angleText, inscribedGeometry, interceptedArc } from '../diagrams/inscribed';

describe('inscribed angle arc selection', () => {
  it('B on the near (upper) side intercepts the lower arc', () => {
    // A at 205°, C at 335°: ccw from A to C is 130°. B at 80° is on the other arc, so the intercepted arc is 130°.
    const { arc, bOnCCW } = interceptedArc(205, 80, 335);
    expect(bOnCCW).toBe(false);
    expect(arc).toBe(130);
  });
  it('B on the far side intercepts the other arc', () => {
    // B at 270° lies on the ccw arc from A to C, so the angle intercepts the 230° arc.
    const { arc, bOnCCW } = interceptedArc(205, 270, 335);
    expect(bOnCCW).toBe(true);
    expect(arc).toBe(230);
  });
  it('the angle is half the arc on both sides', () => {
    expect(inscribedGeometry({ a: 205, b: 80, c: 335 }).angle).toBe(65);
    expect(inscribedGeometry({ a: 205, b: 270, c: 335 }).angle).toBe(115);
  });
  it('a diameter gives a right angle', () => {
    expect(interceptedArc(0, 90, 180).arc).toBe(180);
    expect(inscribedGeometry({ a: 0, b: 90, c: 180 }).angle).toBe(90);
  });
  it('handles wrap-around when A is past C', () => {
    const { arc } = interceptedArc(350, 180, 20); // ccw from 350 to 20 is 30°
    expect(arc).toBe(30);
  });
  it('labels round to a quarter degree', () => {
    expect(angleText(130)).toBe('65°');
    expect(angleText(131)).toBe('65.5°');
  });
});
