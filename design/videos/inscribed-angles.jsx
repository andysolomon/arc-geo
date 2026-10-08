// Inscribed Angles — 3b1b-style explainer on the animations-v3 engine.
const V1 = (() => {
  const { CompositionStage, useComposition, Captions, Easing, animate, interpolate, useTweaks, TweaksPanel, TweakToggle, TweakSection } = window;
  const BG = '#0f1218', INK = '#ECEFF4', BLUE = '#58C4DD', YEL = '#F5D548', GRN = '#83C167', RED = '#FC6255', MUTED = '#8a93a6';
  const SANS = "Manrope, system-ui, sans-serif", MATH = "Georgia, 'Times New Roman', serif";
  const MOTION = {
    enter: (T, at, dur = 0.6) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutCubic })(T),
    draw: (T, at, dur = 1) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeInOutCubic })(T),
    pop: (T, at, dur = 0.5) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutBack })(T),
  };
  const CX = 430, CY = 390, R = 250;
  const pt = (deg, r = R) => [CX + r * Math.cos(deg * Math.PI / 180), CY - r * Math.sin(deg * Math.PI / 180)];
  const norm = d => ((d % 360) + 360) % 360;
  function marker(V, P, Q, m) {
    const a1 = Math.atan2(P[1] - V[1], P[0] - V[0]), a2 = Math.atan2(Q[1] - V[1], Q[0] - V[0]);
    let d = a2 - a1; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
    const s = [V[0] + m * Math.cos(a1), V[1] + m * Math.sin(a1)], e = [V[0] + m * Math.cos(a2), V[1] + m * Math.sin(a2)], mid = a1 + d / 2;
    return { d: `M ${s[0]} ${s[1]} A ${m} ${m} 0 0 ${d > 0 ? 1 : 0} ${e[0]} ${e[1]}`, label: [V[0] + (m + 26) * Math.cos(mid), V[1] + (m + 26) * Math.sin(mid)] };
  }
  const Line = ({ a, b, p = 1, color, w = 4, dash, o = 1 }) => <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={color} strokeWidth={w} strokeLinecap="round" pathLength={1} strokeDasharray={dash || '1'} strokeDashoffset={dash ? 0 : 1 - p} opacity={dash ? o * p : o} />;
  const Dot = ({ at, s = 1, color = INK, r = 9 }) => <circle cx={at[0]} cy={at[1]} r={r * Math.max(0, s)} fill={color} stroke={BG} strokeWidth={3} />;
  const Txt = ({ at, o = 1, color = INK, size = 26, math, anchor = 'middle', dy = 9, children }) => <text x={at[0]} y={at[1] + dy} fill={color} opacity={o} fontSize={size} textAnchor={anchor} fontFamily={math ? MATH : SANS} fontStyle={math ? 'italic' : 'normal'} fontWeight={math ? 400 : 600}>{children}</text>;
  const Row = ({ o, color = INK, y, children, box }) => <div style={{ position: 'absolute', left: 800, top: y, opacity: o, transform: `translateY(${(1 - o) * 10}px)`, color, fontFamily: MATH, fontStyle: 'italic', fontSize: 34, lineHeight: 1.2, padding: box ? '10px 18px' : 0, border: box ? `2px solid ${color}` : 0, borderRadius: 12, whiteSpace: 'nowrap' }}>{children}</div>;

  function Piece() {
    const { T, CUES, authoredTotal } = useComposition();
    const C = CUES;
    const end = authoredTotal;
    const fadeOut = 1 - animate({ from: 0, to: 1, start: end - 0.8, end: end - 0.05, ease: Easing.easeInOutCubic })(T);
    const aDeg = 220, cDeg = 320, arc = norm(cDeg - aDeg);
    const bDeg = interpolate([0, C.Diameter + 0.5, C.Diameter + 2.5, C.General + 0.5, C.General + 4, C.General + 7.5], [100, 100, 140, 140, 60, 100], Easing.easeInOutCubic)(T);
    const A = pt(aDeg), Cc = pt(cDeg), B = pt(bDeg), O = [CX, CY];
    const circleP = MOTION.draw(T, 0.4, 1.6);
    const titleO = MOTION.enter(T, 1.4) * (1 - MOTION.enter(T, C.Setup + 0.3, 0.5));
    const ptsS = MOTION.pop(T, C.Setup + 0.4);
    const arcP = MOTION.draw(T, C.Setup + 1, 1.2);
    const arcLabelO = MOTION.enter(T, C.Setup + 2.2);
    const bS = MOTION.pop(T, C.Setup + 3);
    const chordP = MOTION.draw(T, C.Setup + 3.6, 1);
    const bMark = marker(B, A, Cc, 42);
    const bMarkO = MOTION.enter(T, C.Setup + 4.8);
    const oS = MOTION.pop(T, C.Central + 0.3);
    const radP = MOTION.draw(T, C.Central + 0.7, 1);
    const oMark = marker(O, A, Cc, 48);
    const oMarkO = MOTION.enter(T, C.Central + 1.9);
    const gone = 1 - MOTION.enter(T, C.General + 0.2, 0.5);
    const obP = MOTION.draw(T, C.Diameter + 2.8, 0.8) * gone;
    const tickO = MOTION.enter(T, C.Diameter + 3.8) * gone;
    const aMark = marker(A, O, B, 40);
    const aMarkO = MOTION.enter(T, C.Diameter + 4.8) * gone;
    const triO = MOTION.enter(T, C.Exterior + 0.3) * 0.18 * (1 - MOTION.enter(T, C.Conclusion + 0.5, 0.8));
    const extPulse = 1 + 0.08 * Math.sin(Math.max(0, T - C.Exterior) * 4) * (T > C.Exterior && T < C.Conclusion ? 1 : 0);
    const half = Math.round(arc / 2);
    // B label: '?' → 'x' → '50°'
    const qO = bMarkO * (1 - MOTION.enter(T, C.Diameter + 4.8, 0.4));
    const xO = MOTION.enter(T, C.Diameter + 4.8, 0.4) * (1 - MOTION.enter(T, C.Conclusion + 2.6, 0.4));
    const vO = MOTION.enter(T, C.Conclusion + 2.6, 0.4);
    const oLabelArc = oMarkO * Math.max(1 - MOTION.enter(T, C.Exterior + 1.8, 0.4), 1 - gone);
    const oLabel2x = MOTION.enter(T, C.Exterior + 1.8, 0.4) * gone;
    const tick = (P, Q) => { const mx = (P[0] + Q[0]) / 2, my = (P[1] + Q[1]) / 2, dx = Q[0] - P[0], dy = Q[1] - P[1], L = Math.hypot(dx, dy), nx = -dy / L * 9, ny = dx / L * 9; return <line x1={mx - nx} y1={my - ny} x2={mx + nx} y2={my + ny} stroke={INK} strokeWidth={3} opacity={tickO} />; };
    const bLabelMath = T >= C.Diameter + 4.8 && T < C.Conclusion + 2.6;
    return (
      <div data-screen-label={`t=${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, background: BG, opacity: fadeOut, overflow: 'hidden' }}>
        <svg width={1280} height={720} viewBox="0 0 1280 720" style={{ position: 'absolute', inset: 0 }}>
          <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>
          <polygon points={`${O} ${A} ${B}`} fill={BLUE} opacity={triO} />
          <circle cx={CX} cy={CY} r={R} fill="none" stroke={INK} strokeWidth={3} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - circleP} transform={`rotate(-90 ${CX} ${CY})`} opacity={0.9} />
          <path d={`M ${A[0]} ${A[1]} A ${R} ${R} 0 0 0 ${Cc[0]} ${Cc[1]}`} fill="none" stroke={YEL} strokeWidth={9} strokeLinecap="round" pathLength={1} strokeDasharray="1" strokeDashoffset={1 - arcP} filter="url(#glow)" />
          <Line a={O} b={A} p={radP} color={YEL} w={3} />
          <Line a={O} b={Cc} p={radP} color={YEL} w={3} />
          <Line a={O} b={B} p={obP} color={BLUE} w={3} />
          <Line a={B} b={A} p={chordP} color={BLUE} w={4} />
          <Line a={B} b={Cc} p={chordP} color={BLUE} w={4} />
          {tick(O, A)}{tick(O, B)}
          <path d={bMark.d} fill="none" stroke={BLUE} strokeWidth={3} opacity={bMarkO} />
          <g transform={`translate(${O[0]} ${O[1]}) scale(${extPulse}) translate(${-O[0]} ${-O[1]})`}><path d={oMark.d} fill="none" stroke={YEL} strokeWidth={3} opacity={oMarkO} /></g>
          <path d={aMark.d} fill="none" stroke={BLUE} strokeWidth={3} opacity={aMarkO} />
          <Dot at={A} s={ptsS} color={YEL} /><Dot at={Cc} s={ptsS} color={YEL} /><Dot at={B} s={bS} color={BLUE} /><Dot at={O} s={oS} r={6} />
          <Txt at={pt(aDeg, R + 34)} o={ptsS} math size={30}>A</Txt>
          <Txt at={pt(cDeg, R + 34)} o={ptsS} math size={30}>C</Txt>
          <Txt at={pt(bDeg, R + 34)} o={bS} math size={30}>B</Txt>
          <Txt at={[O[0] - 18, O[1] + 14]} o={oS} math size={26}>O</Txt>
          <Txt at={pt(270, R - 38)} o={arcLabelO} color={YEL}>{arc}°</Txt>
          <Txt at={bMark.label} o={qO} color={BLUE} size={28}>?</Txt>
          <Txt at={bMark.label} o={xO} color={BLUE} math size={30}>x</Txt>
          <Txt at={bMark.label} o={vO} color={GRN} size={26}>{half}°</Txt>
          <Txt at={aMark.label} o={aMarkO} color={BLUE} math size={30}>x</Txt>
          <Txt at={oMark.label} o={oLabelArc} color={YEL} size={24}>{arc}°</Txt>
          <Txt at={oMark.label} o={oLabel2x} color={YEL} math size={30}>2x</Txt>
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 54, textAlign: 'center', opacity: titleO, color: INK, fontFamily: SANS, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em' }}>Why is an inscribed angle half its arc?</div>
        <Row y={170} o={MOTION.enter(T, C.Central + 2.2)} color={YEL}>arc <span style={{ fontStyle: 'normal' }}>AC</span> = ∠AOC = {arc}°</Row>
        <Row y={240} o={MOTION.enter(T, C.Diameter + 5.4)} color={BLUE}>OA = OB  ⇒  ∠OAB = ∠OBA = x</Row>
        <Row y={310} o={MOTION.enter(T, C.Exterior + 2.2)} color={INK}>∠AOC = x + x = 2x</Row>
        <Row y={380} o={MOTION.enter(T, C.Conclusion + 0.6)} color={INK}>2x = {arc}°  ⇒  x = {half}°</Row>
        <Row y={470} o={MOTION.enter(T, C.Conclusion + 3)} color={GRN} box>∠ABC = ½ · arc AC</Row>
        <Captions style={{ font: `500 28px ${SANS}`, color: INK, bottom: '5%' }} items={[
          { at: C.Setup + 0.5, text: 'An inscribed angle has its vertex on the circle. Its sides are chords.' },
          { at: C.Setup + 4.6, text: 'The angle cuts off arc AC. How big is the angle?' },
          { at: C.Central + 0.3, text: 'Start with the central angle AOC. It equals the arc: 100°.' },
          { at: C.Diameter + 0.3, text: 'Move B so that BC is a diameter. Now O lies on side BC.' },
          { at: C.Diameter + 3.6, text: 'OA and OB are radii. Triangle OAB is isosceles, so its base angles are equal: x and x.' },
          { at: C.Exterior + 0.3, text: 'Angle AOC is an exterior angle of triangle OAB. It equals the two far angles: x + x.' },
          { at: C.Conclusion + 0.3, text: 'So 2x = 100°, and x = 50°. The inscribed angle is half the arc.' },
          { at: C.General + 0.3, text: 'Move B anywhere on the far arc. The arc stays 100°, so the angle stays 50°.' },
          { at: end - 1.2, until: end, text: '' },
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
window.InscribedAnglesVideo = V1;
