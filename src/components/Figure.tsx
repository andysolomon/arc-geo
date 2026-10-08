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
  if (spec.kind === 'angle') {
    const d = spec.degrees, bx = 60, by = 130, r = 110;
    const C: Pt = [bx + r * Math.cos((d * Math.PI) / 180), by - r * Math.sin((d * Math.PI) / 180)];
    const m = 30, lm = (d / 2) * (Math.PI / 180);
    const reflex = d > 180;
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Angle ABC of ${d} degrees`}>
        <line x1={bx} y1={by} x2={bx + r} y2={by} stroke="currentColor" strokeWidth={2} />
        <line x1={bx} y1={by} x2={C[0]} y2={C[1]} stroke="var(--violet)" strokeWidth={2} />
        {d === 90 ? <path d={`M ${bx + 14} ${by} L ${bx + 14} ${by - 14} L ${bx} ${by - 14}`} fill="none" stroke="var(--violet)" strokeWidth={1.5} />
          : <path d={`M ${bx + m} ${by} A ${m} ${m} 0 ${reflex ? 1 : 0} 0 ${bx + m * Math.cos((d * Math.PI) / 180)} ${by - m * Math.sin((d * Math.PI) / 180)}`} fill="none" stroke="var(--violet)" strokeWidth={2} />}
        <text x={bx + 48 * Math.cos(lm)} y={by - 48 * Math.sin(lm) + 4} fontSize={13} fill="var(--violet)" textAnchor="middle">{d}°</text>
        <text x={bx + r + 4} y={by + 4} fontSize={13} fill="currentColor">A</text>
        <text x={bx - 12} y={by + 14} fontSize={13} fill="currentColor">B</text>
        <text x={C[0] + 10 * Math.cos((d * Math.PI) / 180)} y={C[1] - 10 * Math.sin((d * Math.PI) / 180) + 4} fontSize={13} fill="currentColor" textAnchor="middle">C</text>
      </svg>
    );
  }
  if (spec.kind === 'triangle') {
    const { a, b, c } = spec;
    const [la, lb, lc] = spec.labels ?? ['A', 'B', 'C'];
    const hide = new Set(spec.hide ?? []);
    const side = (k: 'a' | 'b' | 'c', v: number) => (hide.has(k) ? '?' : String(v));
    // Place A at origin, B along the base at distance c, C from the law of cosines.
    const cx = (b * b + c * c - a * a) / (2 * c), cy = Math.sqrt(Math.max(0, b * b - cx * cx));
    const minX = Math.min(0, cx), maxX = Math.max(c, cx), span = Math.max(maxX - minX, cy), u = 150 / span;
    const X = (x: number) => 25 + (x - minX) * u, Y = (y: number) => 170 - y * u;
    const A: Pt = [X(0), Y(0)], B: Pt = [X(c), Y(0)], C: Pt = [X(cx), Y(cy)];
    const mid = (p: Pt, q: Pt, off: Pt): Pt => [(p[0] + q[0]) / 2 + off[0], (p[1] + q[1]) / 2 + off[1]];
    const nrm = (p: Pt, q: Pt, k: number): Pt => { const dx = q[0] - p[0], dy = q[1] - p[1], L = Math.hypot(dx, dy) || 1; return [(dy / L) * k, (-dx / L) * k]; };
    const sa = mid(B, C, nrm(B, C, -12)), sb = mid(A, C, nrm(A, C, 12)), sc = mid(A, B, [0, 14]);
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Triangle ${la}${lb}${lc} with sides ${side('a', a)}, ${side('b', b)}, ${side('c', c)}`}>
        <polygon points={`${A} ${B} ${C}`} fill="var(--violet)" fillOpacity={0.1} stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
        <text x={A[0] - 10} y={A[1] + 12} fontSize={13} fill="currentColor">{la}</text>
        <text x={B[0] + 4} y={B[1] + 12} fontSize={13} fill="currentColor">{lb}</text>
        <text x={C[0]} y={C[1] - 6} fontSize={13} fill="currentColor" textAnchor="middle">{lc}</text>
        <text x={sa[0]} y={sa[1] + 4} fontSize={12} fill="var(--accent)" textAnchor="middle">{side('a', a)}</text>
        <text x={sb[0]} y={sb[1] + 4} fontSize={12} fill="var(--accent)" textAnchor="middle">{side('b', b)}</text>
        <text x={sc[0]} y={sc[1] + 4} fontSize={12} fill="var(--accent)" textAnchor="middle">{side('c', c)}</text>
      </svg>
    );
  }
  if (spec.kind === 'parallel') {
    // Angle 1 is the top-left angle at the upper intersection; the transversal's direction angle is its supplement.
    const th = ((180 - spec.angle) * Math.PI) / 180, y1 = 70, y2 = 140, cx = 100;
    const P: Pt = [cx + (105 - y1) / Math.tan(th), y1], Q: Pt = [cx + (105 - y2) / Math.tan(th), y2];
    const d: Pt = [Math.cos(th), -Math.sin(th)];
    const t0: Pt = [cx + 90 * d[0], 105 + 90 * d[1]], t1: Pt = [cx - 90 * d[0], 105 - 90 * d[1]];
    const lab = (V: Pt, u: Pt, v: Pt, n: number) => { const sx = u[0] + v[0], sy = u[1] + v[1], L = Math.hypot(sx, sy) || 1; return <text key={n} x={V[0] + (sx / L) * 16} y={V[1] + (sy / L) * 16 + 4} fontSize={11} fill={n >= 3 && n <= 6 ? 'var(--violet)' : 'var(--accent)'} textAnchor="middle">{n}</text>; };
    const m: Pt = [1, 0], nm: Pt = [-1, 0], nd: Pt = [-d[0], -d[1]];
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Two parallel lines cut by a transversal. Angle 1 measures ${spec.angle} degrees.`}>
        <line x1={10} y1={y1} x2={190} y2={y1} stroke="currentColor" strokeWidth={1.8} />
        <line x1={10} y1={y2} x2={190} y2={y2} stroke="currentColor" strokeWidth={1.8} />
        <path d={`M 150 ${y1 - 5} l 8 5 l -8 5 M 150 ${y2 - 5} l 8 5 l -8 5`} fill="none" stroke="currentColor" strokeWidth={1.2} />
        <line x1={t0[0]} y1={t0[1]} x2={t1[0]} y2={t1[1]} stroke="var(--orange)" strokeWidth={2} />
        {lab(P, nm, d, 1)}{lab(P, m, d, 2)}{lab(P, m, nd, 3)}{lab(P, nm, nd, 4)}
        {lab(Q, nm, d, 5)}{lab(Q, m, d, 6)}{lab(Q, m, nd, 7)}{lab(Q, nm, nd, 8)}
        <text x={P[0] - 30} y={P[1] - 22} fontSize={12} fill="var(--accent)">{spec.angle}°</text>
      </svg>
    );
  }
  if (spec.kind === 'rect') {
    const { w, h } = spec, span = Math.max(w, h), u = 140 / span, W2 = w * u, H2 = h * u, x0 = (200 - W2) / 2, y0 = (190 - H2) / 2;
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Rectangle ${w} by ${h}`}>
        <rect x={x0} y={y0} width={W2} height={H2} fill="var(--accent)" fillOpacity={0.12} stroke="currentColor" strokeWidth={1.8} />
        <text x={100} y={y0 + H2 + 16} fontSize={13} fill="currentColor" textAnchor="middle">{w}</text>
        <text x={x0 + W2 + 6} y={y0 + H2 / 2 + 4} fontSize={13} fill="var(--violet)">{h}</text>
      </svg>
    );
  }
  if (spec.kind === 'polygon') {
    const n = spec.n, R = 72, p = Array.from({ length: n }, (_, i) => { const a = -Math.PI / 2 + (2 * Math.PI * i) / n; return [100 + R * Math.cos(a), 100 + R * Math.sin(a)]; });
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Regular polygon with ${n} sides`}>
        <polygon points={p.map((q) => q.join(',')).join(' ')} fill="var(--accent)" fillOpacity={0.12} stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round" />
        <text x={100} y={104} fontSize={13} fill="currentColor" textAnchor="middle">n = {n}</text>
      </svg>
    );
  }
  if (spec.kind === 'circle') {
    const cx = 100, cy = 100, r = 70, P = circlePt(35, r, cx, cy);
    return (
      <svg {...svgProps} viewBox="0 0 200 200" aria-label={`Circle with radius ${spec.r}`}>
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1.8} />
        <line x1={cx} y1={cy} x2={P[0]} y2={P[1]} stroke="var(--accent)" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={2.5} fill="currentColor" />
        <text x={(cx + P[0]) / 2 + 6} y={(cy + P[1]) / 2 + 12} fontSize={13} fill="var(--accent)">r = {spec.r}</text>
      </svg>
    );
  }
  return null;
}
