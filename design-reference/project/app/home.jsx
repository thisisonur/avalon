// =============================================================
// Avalon — Homepage  v51
// Hero · Case study cards (new design from Figma) · no ShowcaseGrid
// =============================================================

const { useEffect: useEffectHome, useRef: useRefHome, useState: useStateHome } = React;
const { createPortal: createPortalHome } = ReactDOM;

function HomeHero() {
  const [headingIn, setHeadingIn] = useStateHome(false);
  const [subIn, setSubIn] = useStateHome(false);

  useEffectHome(() => {
    const t1 = setTimeout(() => setHeadingIn(true), 80);
    const t2 = setTimeout(() => setSubIn(true), 280);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const headingStyle = {
    opacity: headingIn ? 1 : 0,
    transform: headingIn ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 600ms ease-out 150ms, transform 600ms ease-out 150ms',
  };
  const subStyle = {
    opacity: subIn ? 1 : 0,
    transform: subIn ? 'translateY(0)' : 'translateY(16px)',
    transition: 'opacity 600ms ease-out 150ms, transform 600ms ease-out 150ms',
  };

  return (
    <section className="home-hero">
      <h1 style={headingStyle}>Design systems that think in brand. Built to hold their identity at scale.</h1>
      <p style={subStyle}>I'm Onur. Twenty years across brand, product, and interaction design. I design the layer where brand becomes architecture.</p>
    </section>
  );
}

// Icon mask — renders a coloured SVG mask from assets/icons/cs-icon-{n}.svg
function CSIcon({ n, className }) {
  return (
    <span
      className={className}
      style={{
        display: 'block',
        width: '56px',
        height: '56px',
        WebkitMaskImage: `url(assets/icons/cs-icon-${n}.svg)`,
        maskImage: `url(assets/icons/cs-icon-${n}.svg)`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}

function CaseStudyCards({ navigate }) {
  const { CASE_STUDIES } = window.AVALON_DATA;

  // Display order: TWE → HASTE → Relate → Trier
  const ordered = [
    CASE_STUDIES.find((c) => c.slug === 'treasury-wine-estates'),
    CASE_STUDIES.find((c) => c.slug === 'haste'),
    CASE_STUDIES.find((c) => c.slug === 'relate'),
    CASE_STUDIES.find((c) => c.slug === 'trier'),
  ];

  // Cursor pill: global mousemove so clientX/clientY are always viewport-relative.
  // Disabled entirely on touch devices — on a trackpad-equipped iPad the pill
  // would otherwise trail the pointer (and sit off-centre), which is unwanted.
  const pillRef = useRefHome(null);
  const [cursor, setCursor] = useStateHome({ x: 0, y: 0, theme: null, visible: false });
  const activeCardTheme = useRefHome(null);

  useEffectHome(() => {
    const isTouchDevice =
      (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && (
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(any-pointer: coarse)').matches
      ));
    if (isTouchDevice) return; // no pill on touch devices
    const onMove = (e) => {
      if (activeCardTheme.current) {
        setCursor({ x: e.clientX, y: e.clientY, theme: activeCardTheme.current, visible: true });
      }
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  const onCardEnter = (theme) => { activeCardTheme.current = theme; setCursor(c => ({ ...c, theme, visible: true })); };
  const onCardLeave = () => { activeCardTheme.current = null; setCursor(c => ({ ...c, visible: false })); };

  // Staggered entrance animation on page load — 4 cards
  const [cardsIn, setCardsIn] = useStateHome([false, false, false, false]);
  useEffectHome(() => {
    ordered.forEach((_, i) => {
      setTimeout(() => {
        setCardsIn((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 100);
    });
  }, []);

  const slots = ['cs-card--slot1', 'cs-card--slot2', 'cs-card--slot3', 'cs-card--slot4'];

  // -------------------------------------------------------------
  // Magnetic cursor effect (Cuberto-style)
  // - Attaches mouseenter/mousemove/mouseleave to each .cs-card
  // - On move, writes inline `transform: translate(magX, slotBaseY + magY)`
  //   so the magnetic delta COMPOSES with the slot-stagger Y offset.
  // - Sets --mag-x / --mag-y CSS vars on the card so child elements can
  //   apply a 40% parallax shift in CSS.
  // - On leave, clears everything; CSS spring transition handles the
  //   ease back to the slot baseline.
  // - Disabled entirely on touch devices via `(hover: none)`.
  // - In the tablet-portrait grid breakpoint, slot offsets are nullified
  //   by CSS, so we use 0 as the baseline there to match.
  // -------------------------------------------------------------
  const cardsContainerRef = useRefHome(null);
  useEffectHome(() => {
    // Reliable touch-device detection. iPadOS Safari with a Magic Keyboard /
    // trackpad reports (hover: hover) AND (pointer: fine), and its
    // (any-pointer: coarse) reporting is inconsistent — so media queries alone
    // miss it. navigator.maxTouchPoints is the definitive signal: every iPad
    // reports >= 1 (typically 5); a mouse-only desktop reports 0.
    const isTouchDevice =
      (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) ||
      (window.matchMedia && (
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(any-pointer: coarse)').matches
      ));
    // Stamp a class so the static-stagger CSS can key off it directly,
    // independent of any (flaky) pointer/hover media query.
    if (isTouchDevice) {
      document.documentElement.classList.add('is-touch-device');
    } else {
      document.documentElement.classList.remove('is-touch-device');
    }

    const container = cardsContainerRef.current;
    if (!container) return;
    // Disable the magnetic cursor effect entirely on touch devices. Without
    // this, the magnetic handler writes an inline `transform` with `!important`
    // that overrides the static-stagger CSS, making cards drift on rollover.
    if (isTouchDevice) return;


    const cards = container.querySelectorAll('.cs-card');
    const SLOT_BASE_Y = [-40, 48, -104, 16]; // px, must match CSS slot offsets on desktop
    const STRENGTH_DESKTOP = 14; // max pixel shift along each axis on desktop

    // The magnetic flourish is a DESKTOP-ONLY feature: it should fire only in
    // the genuine 4-in-a-row layout (>=1280px) driven by a real fine pointer
    // with hover. This is re-checked live on every event, so resizing the
    // window down to a tablet width (or a tablet device that slipped past the
    // touch gate above) disables the movement entirely — the cards stay static.
    // >=1441px: a TRUE desktop monitor. We deliberately exclude the
    // 1280–1440 band because that's where tablet-class landscape viewports
    // live (iPad Pro 12.9" = 1366px) — there the cards render statically and
    // the magnetic movement is unwanted. This is the robust, width-based gate
    // that doesn't depend on (unreliable on iPadOS) touch/pointer detection.
    const desktopMagneticMQ = window.matchMedia
      ? window.matchMedia('(min-width: 1441px) and (hover: hover) and (pointer: fine)')
      : null;
    const magneticAllowed = () => !!desktopMagneticMQ && desktopMagneticMQ.matches;

    // baseY: composes magnetic with the per-slot Y offset (desktop only — the
    // magnetic effect doesn't run anywhere else).
    const getBaseY = (i) => (SLOT_BASE_Y[i] != null ? SLOT_BASE_Y[i] : 0);
    const getStrength = () => STRENGTH_DESKTOP;

    const handlers = [];
    cards.forEach((card, i) => {
      const onEnter = () => {
        if (!magneticAllowed()) return;
        card.classList.add('is-magnetic-active');
      };
      const onMove = (e) => {
        if (!magneticAllowed()) {
          // Below desktop width / non-fine pointer: ensure no residual inline
          // transform keeps the card off its static baseline.
          card.classList.remove('is-magnetic-active');
          card.style.removeProperty('transform');
          card.style.removeProperty('--mag-x');
          card.style.removeProperty('--mag-y');
          return;
        }
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const nx = (e.clientX - cx) / rect.width;   // -0.5 … 0.5
        const ny = (e.clientY - cy) / rect.height;  // -0.5 … 0.5
        const strength = getStrength();             // recomputed each event
        const magX = nx * strength;
        const magY = ny * strength;
        const baseY = getBaseY(i);
        // Compose with slot baseline so the stagger is preserved.
        //
        // Each card has a `cardEnterSlotN` keyframe animation with
        // `animation-fill-mode: both` whose end state hard-codes a
        // translateY back to the slot baseline. Per CSS cascade, a
        // filled animation value beats an inline style.transform UNLESS
        // the inline property has `!important`. We pass priority
        // 'important' through setProperty so our magnetic transform
        // actually wins against the filled animation.
        card.style.setProperty(
          'transform',
          `translate(${magX}px, ${baseY + magY}px)`,
          'important'
        );
        // Vars consumed by inner-content parallax in CSS (0.4x strength).
        // Children don't have a competing animation so plain vars are fine.
        card.style.setProperty('--mag-x', `${magX}px`);
        card.style.setProperty('--mag-y', `${magY}px`);
      };
      const onLeave = () => {
        card.classList.remove('is-magnetic-active');
        // Clear inline transform so the slot-baseline CSS rule reasserts
        // and the 600ms spring transition eases the card back to rest.
        // removeProperty also clears the !important flag we set above.
        card.style.removeProperty('transform');
        card.style.removeProperty('--mag-x');
        card.style.removeProperty('--mag-y');
      };
      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mousemove', onMove, { passive: true });
      card.addEventListener('mouseleave', onLeave);
      handlers.push({ card, onEnter, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ card, onEnter, onMove, onLeave }) => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="section-divider" />
      <Reveal as="div" className="section-label">
        <span>CASE&nbsp;&nbsp;STUDIES</span>
      </Reveal>
      <div className="cs-section">
        <div className="cs-cards" ref={cardsContainerRef}>
          {ordered.map((cs, i) => (
            <a
              key={cs.slug}
              className={`cs-card cs-card--${cs.theme} ${slots[i]} ${cardsIn[i] ? 'cs-card--entered' : 'cs-card--entering'}`}
              onMouseEnter={() => onCardEnter(cs.theme)}
              onMouseLeave={onCardLeave}
              onClick={(e) => { e.preventDefault(); navigate({ name: 'work', slug: cs.slug }); }}
              href="#"
            >
              {/* Icon */}
              <div className="cs-card__icon-wrap">
                <CSIcon n={cs.icon} className="cs-card__icon" />
              </div>

              {/* Content */}
              <div className="cs-card__content">
                <div className="cs-card__title-group">
                  <h3 className="cs-card__title">{cs.cardName}</h3>
                  <span className="cs-card__year">{cs.year}</span>
                  <div className="cs-card__rule" />
                  <p className="cs-card__desc">{cs.short}</p>
                </div>
                <span className="cs-card__readtime">{cs.readTime}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Pill rendered at fixed position, centred on cursor via transform */}
      <CursorPill cursor={cursor} pillRef={pillRef} />
    </>
  );
}

function CursorPill({ cursor, pillRef }) {
  return createPortalHome(
    <div
      ref={pillRef}
      className={`cursor-pill ${cursor.visible ? 'is-visible' : ''} ${cursor.theme ? `cursor-pill--${cursor.theme}` : ''}`}
      style={{
        left: `${cursor.x}px`,
        top: `${cursor.y}px`,
        transform: cursor.visible
          ? 'translate(-50%, -50%) scale(1)'
          : 'translate(-50%, -50%) scale(0.6)',
      }}
    >
      View case study
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>,
    document.body
  );
}

function HomePage({ navigate }) {
  return (
    <div className="page" data-screen-label="01 Home">
      <HomeHero />
      <CaseStudyCards navigate={navigate} />
      <Footer />
    </div>
  );
}

Object.assign(window, { HomePage });
