// Distance Formula — 3b1b-style explainer on the animations-v3 engine.
const V3 = (() => {
  const { CompositionStage, useComposition, Captions, Easing, animate, interpolate, useTweaks, TweaksPanel, TweakToggle, TweakSection } = window;
  const BG = '#0f1218', INK = '#ECEFF4', BLUE = '#58C4DD', YEL = '#F5D548', GRN = '#83C167', RED = '#FC6255', ORG = '#F2A65A', MUTED = '#8a93a6';
  const SANS = "Manrope, system-ui, sans-serif", MATH = "Georgia, 'Times New Roman', serif";
  const MOTION = {
    enter: (T, at, dur = 0.6) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutCubic })(T),
    draw: (T, at, dur = 1) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeInOutCubic })(T),
    pop: (T, at, dur = 0.5) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutBack })(T),
  };
  const U = 56, OX = 330, OY = 600;
  const X = x => OX + x * U, Y = y => OY - y * U;
  const Line = ({ a, b, p = 1, color, w = 4, dash, o = 1 }) => <line x1={X(a[0])} y1={Y(a[1])} x2={X(b[0])} y2={Y(b[1])} stroke={color} strokeWidth={w} strokeLinecap="round" pathLength={1} strokeDasharray={dash || '1'} strokeDashoffset={dash ? 0 : 1 - p} opacity={dash ? o * p : o} />;
  const Txt = ({ at, o = 1, color = INK, size = 24, math, anchor = 'middle', children }) => <text x={at[0]} y={at[1] + 8} fill={color} opacity={o} fontSize={size} textAnchor={anchor} fontFamily={math ? MATH : SANS} fontStyle={math ? 'italic' : 'normal'} fontWeight={math ? 400 : 600}>{children}</text>;
  const Row = ({ o, color = INK, y, children, box, size = 34 }) => <div style={{ position: 'absolute', left: 830, top: y, opacity: o, transform: `translateY(${(1 - o) * 10}px)`, color, fontFamily: MATH, fontStyle: 'italic', fontSize: size, lineHeight: 1.25, padding: box ? '10px 18px' : 0, border: box ? `2px solid ${color}` : 0, borderRadius: 12, whiteSpace: 'nowrap' }}>{children}</div>;
  const Sub = ({ children }) => <sub style={{ fontSize: '0.6em' }}>{children}</sub>;
  const Sq = ({ a, b, n, color, o }) => { // square on segment a→b with outward normal n (unit, in grid units) and side length |ab|
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]); const c = [b[0] + n[0] * L, b[1] + n[1] * L], d = [a[0] + n[0] * L, a[1] + n[1] * L];
    return <polygon points={`${X(a[0])},${Y(a[1])} ${X(b[0])},${Y(b[1])} ${X(c[0])},${Y(c[1])} ${X(d[0])},${Y(d[1])}`} fill={color} fillOpacity={0.22 * o} stroke={color} strokeWidth={2.5} opacity={o} />;
  };

  function Piece() {
    const { T, CUES, authoredTotal } = useComposition();
    const C = CUES, end = authoredTotal;
    const fadeOut = 1 - animate({ from: 0, to: 1, start: end - 0.8, end: end - 0.05, ease: Easing.easeInOutCubic })(T);
    const gridO = MOTION.enter(T, 0.3, 1.2);
    const titleO = MOTION.enter(T, 1.4) * (1 - MOTION.enter(T, C.Points + 0.3, 0.5));
    const A = [1, 2];
    const bx = interpolate([C.Move + 0.6, C.Move + 4], [4, -2], Easing.easeInOutCubic)(T);
    const B = [Math.abs(bx - Math.round(bx)) < 0.02 ? Math.round(bx) : bx, 6];
    const dx = B[0] - A[0], dy = B[1] - A[1], d2 = dx * dx + dy * dy, d = Math.sqrt(d2);
    const live = T >= C.Move + 0.6;
    const fmt = v => (Number.isInteger(+v.toFixed(2)) ? String(Math.round(v)) : v.toFixed(1)).replace('-', '−');
        const aS = MOTION.pop(T, C.Points + 0.4), bS = MOTION.pop(T, C.Points + 1);
    const segP = MOTION.draw(T, C.Points + 1.8, 1);
    const legX = MOTION.draw(T, C.Legs + 0.4, 0.9), legY = MOTION.draw(T, C.Legs + 2.4, 0.9);
    const raO = MOTION.enter(T, C.Legs + 3.6);
    const sqO = (at) => MOTION.enter(T, at, 0.8) * (1 - MOTION.enter(T, C.Generalize + 3.5, 0.8));
    const sq1 = sqO(C.Pythagoras + 0.4), sq2 = sqO(C.Pythagoras + 1.6), sq3 = sqO(C.Pythagoras + 3.2);
    const sqVis = Math.max(sq1, sq2, sq3), legLbl = 1 - sqVis;
    const numO = 1 - MOTION.enter(T, C.Generalize + 0.4, 0.6);  // numeric labels → symbolic
    const symO = MOTION.enter(T, C.Generalize + 0.6, 0.6) * (1 - MOTION.enter(T, C.Move + 0.2, 0.5));
    const liveO = MOTION.enter(T, C.Move + 0.4, 0.5);
    const corner = [B[0], A[1]], sx = Math.sign(dx) || 1;
    const nLeg = [sx * -dx / Math.abs(dx || 1) * 0 , -1]; // square on Δx hangs below the leg
    const lines = [];
    for (let i = -5; i <= 16; i++) lines.push(<line key={'v' + i} x1={X(i)} y1={0} x2={X(i)} y2={720} stroke={INK} strokeOpacity={0.09} />);
    for (let j = -2; j <= 12; j++) lines.push(<line key={'h' + j} x1={0} y1={Y(j)} x2={1280} y2={Y(j)} stroke={INK} strokeOpacity={0.09} />);
    const hypN = [-dy / d, dx / d]; // outward (up-left for B up-right of A)
    const pythO = MOTION.enter(T, C.Pythagoras + 0.6) * numO;
    return (
      <div data-screen-label={`t=${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, background: BG, opacity: fadeOut, overflow: 'hidden' }}>
        <svg width={1280} height={720} viewBox="0 0 1280 720" style={{ position: 'absolute', inset: 0 }}>
          <g opacity={gridO}>{lines}
            <line x1={0} y1={Y(0)} x2={1280} y2={Y(0)} stroke={INK} strokeOpacity={0.6} strokeWidth={2} />
            <line x1={X(0)} y1={0} x2={X(0)} y2={720} stroke={INK} strokeOpacity={0.6} strokeWidth={2} />
          </g>
          <Sq a={A} b={corner} n={[0, -1]} color={ORG} o={sq1} />
          <Sq a={corner} b={B} n={[sx, 0]} color={BLUE} o={sq2} />
          <Sq a={A} b={B} n={hypN} color={GRN} o={sq3} />
          <Txt at={[X((A[0] + corner[0]) / 2), Y(A[1] - Math.abs(dx) / 2)]} o={sq1} color={ORG} size={30} math>{Math.abs(dx) ** 2}</Txt>
          <Txt at={[X(corner[0] + sx * Math.abs(dy) / 2), Y((A[1] + B[1]) / 2)]} o={sq2} color={BLUE} size={30} math>{dy * dy}</Txt>
          <Txt at={[X((A[0] + B[0]) / 2 + hypN[0] * d / 2), Y((A[1] + B[1]) / 2 + hypN[1] * d / 2)]} o={sq3} color={GRN} size={30} math>{d2}</Txt>
          <Line a={A} b={corner} p={legX} color={ORG} w={4} dash="10 7" />
          <Line a={corner} b={B} p={legY} color={BLUE} w={4} dash="10 7" />
          <path d={`M ${X(corner[0]) - sx * 16} ${Y(corner[1])} L ${X(corner[0]) - sx * 16} ${Y(corner[1]) - 16} L ${X(corner[0])} ${Y(corner[1]) - 16}`} fill="none" stroke={INK} strokeWidth={2} opacity={raO} />
          <Line a={A} b={B} p={segP} color={GRN} w={5} />
          <circle cx={X(A[0])} cy={Y(A[1])} r={10 * aS} fill={INK} stroke={BG} strokeWidth={3} />
          <circle cx={X(B[0])} cy={Y(B[1])} r={10 * bS} fill={INK} stroke={BG} strokeWidth={3} />
          <Txt at={[X(A[0]) + (sx > 0 ? -14 : 40), Y(A[1]) + 34]} o={aS * numO} math size={26}>A(1, 2)</Txt>
          <Txt at={[X(B[0]) + 6, Y(B[1]) - 26]} o={bS * numO} math size={26}>B(4, 6)</Txt>
          <Txt at={[X(A[0]) + (sx > 0 ? -14 : 40), Y(A[1]) + 34]} o={symO} math size={26}>A(x₁, y₁)</Txt>
          <Txt at={[X(B[0]) + 6, Y(B[1]) - 26]} o={symO} math size={26}>B(x₂, y₂)</Txt>
          <Txt at={[X(A[0]) + (sx > 0 ? -14 : 40), Y(A[1]) + 34]} o={liveO} math size={26}>A(1, 2)</Txt>
          <Txt at={[X(B[0]) + 6, Y(B[1]) - 26]} o={liveO} math size={26}>B({fmt(B[0])}, 6)</Txt>
          <Txt at={[X((A[0] + corner[0]) / 2), Y(A[1]) + 30]} o={legX * numO * legLbl} color={ORG} math size={26}>Δx = 3</Txt>
          <Txt at={[X(corner[0]) + sx * 30, Y((A[1] + B[1]) / 2)]} o={legY * numO * legLbl} color={BLUE} math size={26} anchor={sx > 0 ? 'start' : 'end'}>Δy = 4</Txt>
          <Txt at={[X((A[0] + corner[0]) / 2), Y(A[1]) + 30]} o={symO} color={ORG} math size={26}>x₂ − x₁</Txt>
          <Txt at={[X(corner[0]) + sx * 30, Y((A[1] + B[1]) / 2)]} o={symO} color={BLUE} math size={26} anchor={sx > 0 ? 'start' : 'end'}>y₂ − y₁</Txt>
          <Txt at={[X((A[0] + corner[0]) / 2), Y(A[1]) + 30]} o={liveO} color={ORG} math size={26}>Δx = {fmt(dx)}</Txt>
          <Txt at={[X(corner[0]) + sx * 30, Y((A[1] + B[1]) / 2)]} o={liveO} color={BLUE} math size={26} anchor={sx > 0 ? 'start' : 'end'}>Δy = 4</Txt>
          <Txt at={[X((A[0] + B[0]) / 2) - sx * 34, Y((A[1] + B[1]) / 2) - 18]} o={segP * (1 - liveO)} color={GRN} math size={28}>d</Txt>
          <Txt at={[X((A[0] + B[0]) / 2) - sx * 60, Y((A[1] + B[1]) / 2) - 26]} o={liveO} color={GRN} math size={28}>d = {fmt(d)}</Txt>
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 54, textAlign: 'center', opacity: titleO, color: INK, fontFamily: SANS, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em' }}>The distance formula is the Pythagorean theorem</div>
        <Row y={140} o={MOTION.enter(T, C.Legs + 1) * numO} color={ORG}>Δx = 4 − 1 = 3</Row>
        <Row y={200} o={MOTION.enter(T, C.Legs + 3) * numO} color={BLUE}>Δy = 6 − 2 = 4</Row>
        <Row y={290} o={pythO} color={INK}>d² = 3² + 4²</Row>
        <Row y={350} o={MOTION.enter(T, C.Pythagoras + 2.6) * numO} color={INK}>d² = 9 + 16 = 25</Row>
        <Row y={430} o={MOTION.enter(T, C.Pythagoras + 4.4) * numO} color={GRN} box>d = 5</Row>
        <Row y={140} o={symO} color={ORG}>Δx = x<Sub>2</Sub> − x<Sub>1</Sub></Row>
        <Row y={200} o={symO} color={BLUE}>Δy = y<Sub>2</Sub> − y<Sub>1</Sub></Row>
        <Row y={290} o={symO * MOTION.enter(T, C.Generalize + 2)} color={INK}>d² = (x<Sub>2</Sub> − x<Sub>1</Sub>)² + (y<Sub>2</Sub> − y<Sub>1</Sub>)²</Row>
        <Row y={390} o={symO * MOTION.enter(T, C.Generalize + 4.5)} color={GRN} box size={32}>d = √<span style={{ borderTop: `2px solid ${GRN}`, paddingTop: 2 }}>(x<Sub>2</Sub> − x<Sub>1</Sub>)² + (y<Sub>2</Sub> − y<Sub>1</Sub>)²</span></Row>
        <Row y={140} o={liveO} color={INK} size={32}>d = √<span style={{ borderTop: `2px solid ${INK}`, paddingTop: 2 }}>({fmt(dx)})² + 4²</span></Row>
        <Row y={210} o={liveO} color={INK} size={32}>d = √<span style={{ borderTop: `2px solid ${INK}`, paddingTop: 2 }}>{fmt(dx * dx)} + 16</span> = {fmt(d)}</Row>
        <Row y={300} o={liveO * MOTION.enter(T, C.Move + 4.5)} color={GRN} size={28}>(−3)² = 9. The sign does not matter.</Row>
        <Captions style={{ font: `500 28px ${SANS}`, color: INK, bottom: '5%' }} items={[
          { at: C.Points + 0.4, text: 'Two points on a grid. How far apart are they?' },
          { at: C.Legs + 0.3, text: 'Go across first. The horizontal change is 4 − 1 = 3.' },
          { at: C.Legs + 2.3, text: 'Then go up. The vertical change is 6 − 2 = 4.' },
          { at: C.Legs + 3.8, text: 'The two legs meet at a right angle. The distance is the hypotenuse.' },
          { at: C.Pythagoras + 0.3, text: 'Pythagoras: the squares on the legs add up to the square on the hypotenuse.' },
          { at: C.Pythagoras + 3.4, text: '9 + 16 = 25, so d = 5.' },
          { at: C.Generalize + 0.3, text: 'Replace the numbers with coordinates. The legs become x₂ − x₁ and y₂ − y₁.' },
          { at: C.Generalize + 4.5, text: 'Take the square root. This is the distance formula.' },
          { at: C.Move + 0.3, text: 'Move B to the left. Δx becomes negative, but its square is still positive.' },
          { at: end - 1, until: end, text: '' },
        ]} />
      </div>
    );
  }
  function Video() {
    const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS || { motionEditor: true });
    return (
      <div style={{ position: 'absolute', inset: 0, background: BG }}>
        <CompositionStage width={1280} height={720} bg={BG} scenes={window.OM_SCENES} playback={window.OM_PLAYBACK}><Piece /></CompositionStage>
        <TweaksPanel><TweakSection label="Editor" /><TweakToggle label="Motion editor" value={t.motionEditor} onChange={v => setTweak('motionEditor', v)} /></TweaksPanel>
      </div>
    );
  }
  return Video;
})();
window.DistanceFormulaVideo = V3;
