import type { Figure as FigureSpec } from '../content/types';
import { circlePt, pts, type Pt } from '../lib/math';

const svgProps = {
  width: 200,
  height: 200,
  viewBox: '0 0 200 200',
  className: 'max-w-full text-ink font-display italic',
  role: 'img' as const,
};

/** Small static figures for questions (data-driven). */
export function Figure({ spec }: { spec: FigureSpec }) {
  if (spec.kind === 'inscribed') {
    const cx = 100, cy = 100, r = 70;
    const A = circlePt(270 - spec.arc / 2, r, cx, cy), C = circlePt(270 + spec.arc / 2, r, cx, cy), B = circlePt(105, r, cx, cy);
    const la = circlePt(270 - spec.arc / 2, r + 14, cx, cy), lc = circlePt(270 + spec.arc / 2, r + 14, cx, cy), lb = circlePt(105, r + 14, cx, cy);
    return (
      <svg {...svgProps} aria-label={`Circle with inscribed angle ABC intercepting an arc of ${spec.arc} degrees`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1.8} />
        <path d={`M ${A[0]} ${A[1]} A ${r} ${r} 0 ${spec.arc > 180 ? 1 : 0} 0 ${C[0]} ${C[1]}`} fill="none" stroke="var(--accent)" strokeWidth={5} strokeLinecap="round" />
        <line x1={B[0]} y1={B[1]} x2={A[0]} y2={A[1]} stroke="var(--violet)" strokeWidth={2} />
        <line x1={B[0]} y1={B[1]} x2={C[0]} y2={C[1]} stroke="var(--violet)" strokeWidth={2} />
        <text x={cx} y={cy + r - 8} fontSize={13} fill="var(--accent)" textAnchor="middle">{spec.arc}°</text>
        <text x={la[0]} y={la[1] + 4} fontSize={13} fill="currentColor" textAnchor="middle">A</text>
        <text x={lb[0]} y={lb[1] + 4} fontSize={13} fill="currentColor" textAnchor="middle">B</text>
        <text x={lc[0]} y={lc[1] + 4} fontSize={13} fill="currentColor" textAnchor="middle">C</text>
      </svg>
    );
  }
  if (spec.kind === 'prism') {
    const u = 14, ox = 40, oy = 160;
    const P = (x: number, y: number, z: number): Pt => [ox + (x + 0.5 * z) * u, oy - (y + 0.3 * z) * u];
    const { w, d, h } = spec;
    return (
      <svg {...svgProps} aria-label={`Right rectangular prism ${w} by ${d} by ${h}`}>
        <polygon points={pts([P(0, h, 0), P(w, h, 0), P(w, h, d), P(0, h, d)])} fill="var(--face1)" stroke="currentColor" strokeWidth={1.5} />
        <polygon points={pts([P(w, 0, 0), P(w, 0, d), P(w, h, d), P(w, h, 0)])} fill="var(--face3)" stroke="currentColor" strokeWidth={1.5} />
        <polygon points={pts([P(0, 0, 0), P(w, 0, 0), P(w, h, 0), P(0, h, 0)])} fill="var(--face2)" stroke="currentColor" strokeWidth={1.5} />
        <text x={P(w / 2, 0, 0)[0]} y={oy + 16} fontSize={13} fill="currentColor" textAnchor="middle">{w}</text>
        <text x={P(w, 0, d / 2)[0] + 6} y={P(w, 0, d / 2)[1] + 4} fontSize={13} fill="currentColor">{d}</text>
        <text x={ox - 8} y={P(0, h / 2, 0)[1] + 4} fontSize={13} fill="var(--violet)" textAnchor="end">{h}</text>
      </svg>
    );
  }
  if (spec.kind === 'points') {
    const [ax, ay] = spec.a, [bx, by] = spec.b;
    const minX = Math.min(ax, bx, 0) - 1, maxX = Math.max(ax, bx, 0) + 1, minY = Math.min(ay, by, 0) - 1, maxY = Math.max(ay, by, 0) + 1;
    const span = Math.max(maxX - minX, maxY - minY), u = 170 / span;
    const X = (x: number) => 15 + (x - minX) * u, Y = (y: number) => 185 - (y - minY) * u;
    const lines = [];
    for (let x = minX; x <= maxX; x++) lines.push(<line key={'x' + x} x1={X(x)} y1={Y(minY)} x2={X(x)} y2={Y(maxY)} stroke="var(--line)" />);
    for (let y = minY; y <= maxY; y++) lines.push(<line key={'y' + y} x1={X(minX)} y1={Y(y)} x2={X(maxX)} y2={Y(y)} stroke="var(--line)" />);
    return (
      <svg {...svgProps} aria-label={`Grid with points A(${ax}, ${ay}) and B(${bx}, ${by})`}>
        {lines}
        <line x1={X(minX)} y1={Y(0)} x2={X(maxX)} y2={Y(0)} stroke="currentColor" strokeWidth={1.2} />
        <line x1={X(0)} y1={Y(minY)} x2={X(0)} y2={Y(maxY)} stroke="currentColor" strokeWidth={1.2} />
        <line x1={X(ax)} y1={Y(ay)} x2={X(bx)} y2={Y(ay)} stroke="var(--orange)" strokeWidth={1.5} strokeDasharray="4 3" />
        <line x1={X(bx)} y1={Y(ay)} x2={X(bx)} y2={Y(by)} stroke="var(--violet)" strokeWidth={1.5} strokeDasharray="4 3" />
        <line x1={X(ax)} y1={Y(ay)} x2={X(bx)} y2={Y(by)} stroke="var(--accent)" strokeWidth={2.5} />
        <circle cx={X(ax)} cy={Y(ay)} r={5} fill="var(--accent)" />
        <circle cx={X(bx)} cy={Y(by)} r={5} fill="var(--accent)" />
        <text x={X(ax) - 8} y={Y(ay) + 16} fontSize={12} fill="currentColor">A({ax}, {ay})</text>
        <text x={X(bx) + 8} y={Y(by) - 6} fontSize={12} fill="currentColor" textAnchor="end">B({bx}, {by})</text>
      </svg>
    );
  }
  if (spec.kind === 'sector') {
    const cx = 100, cy = 100, r = 70, A = circlePt(0, r, cx, cy), C = circlePt(spec.angle, r, cx, cy);
    return (
      <svg {...svgProps} aria-label={`Circle of radius ${spec.r} with a sector of ${spec.angle} degrees`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1.8} />
        <path d={`M ${cx} ${cy} L ${A[0]} ${A[1]} A ${r} ${r} 0 ${spec.angle > 180 ? 1 : 0} 0 ${C[0]} ${C[1]} Z`} fill="var(--accent)" fillOpacity={0.3} stroke="var(--accent)" strokeWidth={2} />
        <text x={cx + 22} y={cy - 8} fontSize={13} fill="var(--accent)">{spec.angle}°</text>
        <text x={cx + r / 2} y={cy + 16} fontSize={13} fill="currentColor">r = {spec.r}</text>
      </svg>
    );
  }
  return null;
}
