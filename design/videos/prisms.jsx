// Prisms & Cavalieri — 3b1b-style explainer on the animations-v3 engine.
const V2 = (() => {
  const { CompositionStage, useComposition, Captions, Easing, animate, interpolate, useTweaks, TweaksPanel, TweakToggle, TweakSection } = window;
  const BG = '#0f1218', INK = '#ECEFF4', BLUE = '#58C4DD', YEL = '#F5D548', GRN = '#83C167', RED = '#FC6255', MUTED = '#8a93a6';
  const SANS = "Manrope, system-ui, sans-serif", MATH = "Georgia, 'Times New Roman', serif";
  const MOTION = {
    enter: (T, at, dur = 0.6) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutCubic })(T),
    draw: (T, at, dur = 1) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeInOutCubic })(T),
    pop: (T, at, dur = 0.5) => animate({ from: 0, to: 1, start: at, end: at + dur, ease: Easing.easeOutBack })(T),
  };
  const U = 46, OX = 300, OY = 560, W = 6, D = 3, H = 5, N = 10, SHEAR = 2.4;
  const P = (x, y, z) => [OX + (x + 0.5 * z) * U, OY - (y + 0.3 * z) * U];
  const pts = a => a.map(p => p.join(',')).join(' ');
  const face = (y0, y1, k0, k1, g) => ({
    front: pts([P(k0, y0 + g, 0), P(W + k0, y0 + g, 0), P(W + k1, y1 + g, 0), P(k1, y1 + g, 0)]),
    right: pts([P(W + k0, y0 + g, 0), P(W + k0, y0 + g, D), P(W + k1, y1 + g, D), P(W + k1, y1 + g, 0)]),
    top: pts([P(k1, y1 + g, 0), P(W + k1, y1 + g, 0), P(W + k1, y1 + g, D), P(k1, y1 + g, D)]),
  });
  const Row = ({ o, color = INK, y, children, box, size = 34 }) => <div style={{ position: 'absolute', left: 760, top: y, opacity: o, transform: `translateY(${(1 - o) * 10}px)`, color, fontFamily: MATH, fontStyle: 'italic', fontSize: size, lineHeight: 1.2, padding: box ? '10px 18px' : 0, border: box ? `2px solid ${color}` : 0, borderRadius: 12, whiteSpace: 'nowrap' }}>{children}</div>;
  const Txt = ({ at, o = 1, color = INK, size = 26, math, anchor = 'middle', children }) => <text x={at[0]} y={at[1] + 9} fill={color} opacity={o} fontSize={size} textAnchor={anchor} fontFamily={math ? MATH : SANS} fontStyle={math ? 'italic' : 'normal'} fontWeight={math ? 400 : 600}>{children}</text>;

  function Piece() {
    const { T, CUES, authoredTotal } = useComposition();
    const C = CUES, end = authoredTotal;
    const fadeOut = 1 - animate({ from: 0, to: 1, start: end - 0.8, end: end - 0.05, ease: Easing.easeInOutCubic })(T);
    const build = MOTION.draw(T, 0.4, 1.6);                 // prism draws in (opacity + rise)
    const titleO = MOTION.enter(T, 1.4) * (1 - MOTION.enter(T, C.RightPrism + 0.3, 0.5));
    const baseO = MOTION.enter(T, C.RightPrism + 0.4) * 0.45;
    const hO = MOTION.enter(T, C.RightPrism + 2.2);
    const sliced = MOTION.enter(T, C.Slice + 0.6, 0.4);     // switch from whole prism to slices
    const gap = interpolate([C.Slice + 0.8, C.Slice + 2.6, C.Compare + 0.4, C.Compare + 1.6], [0, 0.28, 0.28, 0], Easing.easeInOutCubic)(T);
    const shear = interpolate([C.Shear + 0.6, C.Shear + 4.5, C.Close + 0.2, C.Close + 2.4], [0, 1, 1, 0], Easing.easeInOutCubic)(T) * SHEAR;
    const edgeO = MOTION.enter(T, C.Compare + 2) * (1 - MOTION.enter(T, C.Close + 0.2, 0.5));
    const totalGap = gap * (N - 1);
    const slices = Array.from({ length: N }, (_, i) => { const y0 = i * H / N, y1 = (i + 1) * H / N; return face(y0, y1, shear * y0 / H, shear * y1 / H, gap * i); });
    const whole = face(0, H, 0, 0, 0);
    const topY = H + totalGap;
    const hTop = P(0, topY, 0), hBot = P(0, 0, 0), e0 = P(0, 0, 0), e1 = P(shear, topY, 0);
    const edgeLen = Math.sqrt(H * H + shear * shear);
    const rise = (1 - build) * 40;
    const stroke = { stroke: INK, strokeWidth: 2, strokeLinejoin: 'round' };
    const FACE = ['#242b33', '#2f3842', '#1b2128'];
    return (
      <div data-screen-label={`t=${Math.floor(T)}s`} style={{ position: 'absolute', inset: 0, background: BG, opacity: fadeOut, overflow: 'hidden' }}>
        <svg width={1280} height={720} viewBox="0 0 1280 720" style={{ position: 'absolute', inset: 0 }}>
          <g opacity={build} transform={`translate(0 ${rise})`}>
            <g opacity={1 - sliced}>
              <polygon points={whole.top} fill={FACE[0]} {...stroke} /><polygon points={whole.right} fill={FACE[2]} {...stroke} /><polygon points={whole.front} fill={FACE[1]} {...stroke} />
            </g>
            <g opacity={sliced}>
              {slices.map((s, i) => <g key={i}><polygon points={s.top} fill={FACE[0]} {...stroke} /><polygon points={s.right} fill={FACE[2]} {...stroke} /><polygon points={s.front} fill={FACE[1]} {...stroke} /></g>)}
            </g>
            <polygon points={pts([P(0, 0, 0), P(W, 0, 0), P(W, 0, D), P(0, 0, D)])} fill={YEL} opacity={baseO} stroke={YEL} strokeWidth={2} />
            <Txt at={P(W / 2, 0, D / 2)} o={baseO * 2.2} color={YEL} math size={28}>B</Txt>
            <line x1={hBot[0] - 26} y1={hBot[1]} x2={hTop[0] - 26} y2={hTop[1]} stroke={BLUE} strokeWidth={3} strokeDasharray="8 6" opacity={hO} />
            <line x1={hBot[0] - 34} y1={hBot[1]} x2={hBot[0] - 18} y2={hBot[1]} stroke={BLUE} strokeWidth={3} opacity={hO} />
            <line x1={hTop[0] - 34} y1={hTop[1]} x2={hTop[0] - 18} y2={hTop[1]} stroke={BLUE} strokeWidth={3} opacity={hO} />
            <Txt at={[hBot[0] - 56, (hBot[1] + hTop[1]) / 2]} o={hO} color={BLUE} math size={30}>h</Txt>
            <line x1={e0[0]} y1={e0[1]} x2={e1[0]} y2={e1[1]} stroke={RED} strokeWidth={4} opacity={edgeO} strokeLinecap="round" />
            <Txt at={[e0[0] + 30, e0[1] + 40]} o={edgeO} color={RED} size={22} anchor="start">edge = {edgeLen.toFixed(2)}</Txt>
          </g>
        </svg>
        <div style={{ position: 'absolute', left: 0, right: 0, top: 54, textAlign: 'center', opacity: titleO, color: INK, fontFamily: SANS, fontWeight: 700, fontSize: 44, letterSpacing: '-0.01em' }}>Why does a slanted prism hold the same volume?</div>
        <Row y={150} o={MOTION.enter(T, C.RightPrism + 1)} color={YEL}>B = base area</Row>
        <Row y={210} o={MOTION.enter(T, C.RightPrism + 2.6)} color={BLUE}>h = height (perpendicular)</Row>
        <Row y={290} o={MOTION.enter(T, C.RightPrism + 4.2)} color={GRN} box>V = B · h</Row>
        <Row y={390} o={MOTION.enter(T, C.Slice + 3)} color={INK} size={28}>{N} slices · base B · height h / {N}</Row>
        <Row y={450} o={MOTION.enter(T, C.Shear + 5)} color={INK} size={28}>Same slices, same B, same h</Row>
        <Row y={510} o={MOTION.enter(T, C.Compare + 2.6)} color={RED} size={28}>edge ≠ h  —  use h</Row>
        <Row y={580} o={MOTION.enter(T, C.Cavalieri + 0.8)} color={GRN} size={28}><span style={{ fontStyle: 'normal', fontFamily: SANS, fontWeight: 700 }}>Cavalieri:</span> equal slices ⇒ equal volume</Row>
        <Captions style={{ font: `500 28px ${SANS}`, color: INK, bottom: '5%' }} items={[
          { at: C.RightPrism + 0.4, text: 'A right prism. Its volume is the base area times the height.' },
          { at: C.Slice + 0.4, text: 'Cut the prism into thin slices, like a stack of cards.' },
          { at: C.Slice + 4, text: 'Each slice has the same base. The slices add up to the same volume.' },
          { at: C.Shear + 0.4, text: 'Now slide the slices sideways. Nothing is added. Nothing is removed.' },
          { at: C.Shear + 5.5, text: 'The stack leans, but every slice is still the same slice.' },
          { at: C.Compare + 0.4, text: 'Push the slices back together. This is an oblique prism.' },
          { at: C.Compare + 2.6, text: 'The height did not change. The lateral edge got longer. Always use the height.' },
          { at: C.Cavalieri + 0.4, text: 'This is Cavalieri\'s principle. Equal cross-sections at every level give equal volume.' },
          { at: C.Close + 0.3, text: 'V = B · h for every prism, right or oblique.' },
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
window.PrismsVideo = V2;
