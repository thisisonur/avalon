// =============================================================
// Avalon — Shared components: Header, Footer, ScrollChrome, Reveal
// =============================================================

const { useEffect, useRef, useState, useLayoutEffect } = React;

// --- Reveal-on-scroll wrapper -----------------------------------------------
function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { setSeen(true); obs.disconnect(); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-in' : ''} ${className}`}
      data-delay={delay || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// --- Scroll rail thumb + sticky paper-fade ----------------------------------
function ScrollChrome() {
  const thumbRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      if (!thumbRef.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      thumbRef.current.style.width = (pct * 100) + '%';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <div className="scroll-rail"><div className="scroll-rail__thumb" ref={thumbRef} /></div>
      <div className="sticky-grad" />
    </>
  );
}

// --- Desktop Header pill ----------------------------------------------------
// CLEAN REBUILD per spec:
//  - JS-driven width tween on every route change (450ms ease-in-out)
//  - margin: 0 auto centering at all times — no left/right/translateX
//  - Forced reflow via offsetWidth between from/to width writes
//  - Inline width released after tween ends, CSS class takes over for resize
//  - Desktop only (mobile path returns early)
function Header({ route, navigate }) {
  const isWork = route.name === 'work' || route.name === 'showcase';
  const isHome = route.name === 'home';
  const isAbout = route.name === 'about';

  const navRef = useRef(null);
  const tweenRef = useRef(null);
  const prevIsWorkRef = useRef(isWork);
  // Cache last-known widths per variant. We need these because by the time
  // useLayoutEffect runs, React has already swapped the className — so
  // getBoundingClientRect() returns the NEW variant's width, not the OLD one.
  const cachedNarrowRef = useRef(null);
  const cachedWideRef = useRef(null);

  // Crossfade title swap on case-study/showcase pages
  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    if (!isWork) { setShowTitle(false); return; }
    const onScroll = () => { setShowTitle(window.scrollY > 220); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isWork, route.slug]);

  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;
    if (window.innerWidth <= 768) return; // mobile uses MobileHeader

    if (tweenRef.current) { cancelAnimationFrame(tweenRef.current); tweenRef.current = null; }

    // Pin centering inline — defends against any CSS rule trying to use
    // left/right/translate. position:fixed + left:0/right:0 + margin:0 auto
    // + an explicit width = symmetric horizontal centering, always.
    // Pin top:24px so the vertical position is identical between variants.
    el.style.position = 'fixed';
    el.style.top = '24px';
    el.style.left = '0';
    el.style.right = '0';
    el.style.transform = 'none';
    el.style.marginLeft = 'auto';
    el.style.marginRight = 'auto';
    el.style.justifyContent = isWork ? 'flex-start' : 'center';

    // Compute target widths fresh
    const wideTarget = Math.min(window.innerWidth - 128, 1400);

    // Measure the NEW variant's natural width using max-content
    // (max-content forces shrink-wrap even with l:0/r:0 stretch constraints)
    const measureNarrow = () => {
      const prevW = el.style.width;
      const prevMax = el.style.maxWidth;
      el.style.width = 'max-content';
      el.style.maxWidth = 'none';
      // eslint-disable-next-line no-unused-expressions
      el.offsetWidth;
      const w = Math.round(el.getBoundingClientRect().width);
      el.style.width = prevW;
      el.style.maxWidth = prevMax;
      return w;
    };

    // TO width: based on the NEW route variant. Compute FIRST because the
    // wide→narrow branch below references it.
    // BUG FIX (Fix 8): previously `toWidth` was declared AFTER the fromWidth
    // branch that reads it. Accessing a `let` binding before its declaration
    // throws a ReferenceError (Temporal Dead Zone) — that error was thrown
    // silently inside useLayoutEffect on every reverse navigation, aborting
    // the tween before it could start. The header then snapped to its new
    // CSS width with no animation. Declaring toWidth first removes the TDZ.
    let toWidth;
    if (isWork) {
      toWidth = wideTarget;
    } else {
      toWidth = measureNarrow();
    }

    // FROM width: by the time this effect runs React has already swapped
    // className, so getBoundingClientRect reads the NEW variant's natural
    // width, not what the user just saw. Pull the previous variant's
    // cached width instead.
    const prevIsWork = prevIsWorkRef.current;
    let fromWidth;
    if (prevIsWork === isWork) {
      // Same variant (home↔about, case-study↔showcase): use current rect
      fromWidth = Math.round(el.getBoundingClientRect().width);
    } else if (prevIsWork) {
      // wide→narrow reverse: prefer the live inline width if a tween is in-progress
      // (handles interrupted forward tweens), then fall back to the post-paint snapshot
      const liveW = parseFloat(el.style.width);
      fromWidth = (liveW > 0) ? Math.round(liveW) : (cachedWideRef.current ?? wideTarget);
      // Safety: fromWidth must be wider than toWidth or the reverse has nowhere to go
      if (fromWidth <= toWidth) fromWidth = cachedWideRef.current ?? wideTarget;
      if (fromWidth <= toWidth) fromWidth = wideTarget;
    } else {
      // Previous was narrow → use cached narrow width, or fall back to a
      // fresh measurement if we don't have one yet
      fromWidth = cachedNarrowRef.current ?? measureNarrow();
    }

    // Update caches with what we now know
    if (isWork) cachedWideRef.current = toWidth;
    else cachedNarrowRef.current = toWidth;

    // 3) Lock FROM width inline + force reflow so the browser commits it
    el.style.width = fromWidth + 'px';
    el.style.maxWidth = 'none';
    // eslint-disable-next-line no-unused-expressions
    el.offsetWidth;

    prevIsWorkRef.current = isWork;

    // No-op fast path: same widths → release inline sizing, done
    if (fromWidth === toWidth) {
      el.style.width = '';
      el.style.maxWidth = '';
      return;
    }

    // 4) Animate via rAF, 450ms ease-in-out
    const DURATION = 450;
    const startTime = performance.now();
    const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const tick = (now) => {
      const t = Math.min((now - startTime) / DURATION, 1);
      const eased = easeInOut(t);
      const w = fromWidth + (toWidth - fromWidth) * eased;
      el.style.width = w + 'px';
      if (t < 1) {
        tweenRef.current = requestAnimationFrame(tick);
      } else {
        // 5) Snap to exact target, then release inline width so CSS class
        //    takes over (lets the layout stay responsive on viewport resize)
        el.style.width = toWidth + 'px';
        requestAnimationFrame(() => {
          if (!navRef.current) return;
          navRef.current.style.width = '';
          navRef.current.style.maxWidth = '';
        });
        tweenRef.current = null;
      }
    };
    tweenRef.current = requestAnimationFrame(tick);

    return () => {
      if (tweenRef.current) { cancelAnimationFrame(tweenRef.current); tweenRef.current = null; }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.name, route.slug]);

  // Fix 8 (root cause):
  // The previous implementation had a useEffect here that snapshotted the
  // header's bounding-rect width on every route change and wrote it into
  // cachedWideRef / cachedNarrowRef. Because useEffect runs AFTER the
  // useLayoutEffect above has already locked `el.style.width = fromWidth`
  // (and 1-2 rAF ticks of the tween have run), that snapshot captured a
  // value close to `fromWidth` — i.e. the *start* of the forward tween,
  // not its target.
  //
  // So after navigating home→work, cachedWideRef ended up holding ~narrow
  // width instead of wideTarget. On the reverse work→home navigation,
  // `fromWidth = cachedWideRef.current` was nearly equal to `toWidth`,
  // hitting the `fromWidth === toWidth` fast-path early-return and
  // skipping the animation entirely. The reverse shrink never played.
  //
  // The cache is already written correctly inside useLayoutEffect (to the
  // target width, not an intermediate). The snapshot effect was redundant
  // and actively wrong. Removed.

  // Find current page title
  const { CASE_STUDIES, SHOWCASES } = window.AVALON_DATA;
  let pageTitle = '';
  if (route.name === 'work') {
    const cs = CASE_STUDIES.find(c => c.slug === route.slug);
    pageTitle = cs ? cs.name : '';
  } else if (route.name === 'showcase') {
    const sc = SHOWCASES.find(c => c.slug === route.slug);
    pageTitle = sc ? sc.name : '';
  }

  if (isWork) {
    return (
      <nav ref={navRef} className="header header--wide">
        <div className="pill pill--back">
          <a className="back-link" onClick={(e) => { e.preventDefault(); navigate({ name: 'home' }); }} href="#">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M9 4L5 8L9 12M5 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Index
          </a>
        </div>
        <div className="pill pill--main">
          <span
            className="logo-mark"
            onClick={() => navigate({ name: 'home' })}
            style={{ cursor: 'pointer' }}
            title="Home"
          >
            <span className="logo-swap">
              <span className={`logo-swap__layer ${showTitle ? 'logo-swap__layer--out' : 'logo-swap__layer--in'}`}>
                <span className="wm-first">Onur</span><span className="wm-second">Erdem</span>
              </span>
              <span className={`logo-swap__layer ${showTitle ? 'logo-swap__layer--in' : 'logo-swap__layer--out'}`}
                    style={{ color: 'var(--fg-1)', fontWeight: 500 }}>
                {pageTitle}
              </span>
            </span>
          </span>
          <span className="menu">
            <a href="https://www.dropbox.com/scl/fi/n286yerj9j2y96van4463/OnurErdem_Resume.pdf?rlkey=uhrs462psr810vhyui31aakq2&e=1&st=brisvxqj&dl=0" target="_blank" rel="noopener" className="mb">Download Resume</a>
            <a href="https://www.linkedin.com/in/thisisonur/" target="_blank" rel="noopener" className="mb">LinkedIn</a>
            <a href="mailto:thisisonur@gmail.com" className="mb">Get in Touch</a>
          </span>
        </div>
      </nav>
    );
  }

  return (
    <nav ref={navRef} className="header">
      <div className="pill">
        <span className="logo-mark"
              onClick={() => navigate({ name: 'home' })}
              style={{ cursor: 'pointer' }}>
          <span className="wm-first">Onur</span><span className="wm-second">Erdem</span>
        </span>
        <span className="menu">
          <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: 'home' }); }} className={`mb ${isHome ? 'is-selected' : ''}`}>Work</a>
          <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: 'about' }); }} className={`mb ${isAbout ? 'is-selected' : ''}`}>About</a>
        </span>
        <span className="sep" />
        <span className="menu">
          <a href="https://www.dropbox.com/scl/fi/n286yerj9j2y96van4463/OnurErdem_Resume.pdf?rlkey=uhrs462psr810vhyui31aakq2&e=1&st=brisvxqj&dl=0" target="_blank" rel="noopener" className="mb mb-extra">Download Resume</a>
          <a href="https://www.linkedin.com/in/thisisonur/" target="_blank" rel="noopener" className="mb mb-extra">LinkedIn</a>
          <a href="mailto:thisisonur@gmail.com" className="mb">Get in Touch</a>
        </span>
      </div>
    </nav>
  );
}

// --- Mobile Header ----------------------------------------------------------
function MobileHeader({ route, navigate }) {
  const [open, setOpen] = useState(false);
  const isWork = route.name === 'work' || route.name === 'showcase';

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [route.name, route.slug]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const BurgerIcon = () => (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
      <rect y="0" width="18" height="1.5" rx="0.75" fill="currentColor"/>
      <rect y="5.25" width="18" height="1.5" rx="0.75" fill="currentColor"/>
      <rect y="10.5" width="18" height="1.5" rx="0.75" fill="currentColor"/>
    </svg>
  );

  const CloseIcon = () => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="mobile-header">
      {/* Bar always visible — burger/close toggle in same position */}
      <div className="mobile-bar">
        {isWork ? (
          <>
            <button
              className="mobile-bar__back"
              onClick={() => navigate({ name: 'home' })}
            >
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M9 4L5 8L9 12M5 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Index
            </button>
            <div className="mobile-bar__main">
              <div className="mobile-bar__logo"
                onClick={() => navigate({ name: 'home' })}
              >
                <span className="wm-first">Onur </span><span className="wm-second">Erdem</span>
              </div>
              <div className="mobile-toggle-wrap">
                {open ? (
                  <button className="mobile-burger" onClick={() => setOpen(false)} aria-label="Close menu">
                    <CloseIcon />
                  </button>
                ) : (
                  <button className="mobile-burger" onClick={() => setOpen(true)} aria-label="Open menu">
                    <BurgerIcon />
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="mobile-bar__main mobile-bar__main--full">
            <div className="mobile-bar__logo"
              onClick={() => navigate({ name: 'home' })}
            >
              <span className="wm-first">Onur </span><span className="wm-second">Erdem</span>
            </div>
            <div className="mobile-toggle-wrap">
              {open ? (
                <button className="mobile-burger" onClick={() => setOpen(false)} aria-label="Close menu">
                  <CloseIcon />
                </button>
              ) : (
                <button className="mobile-burger" onClick={() => setOpen(true)} aria-label="Open menu">
                  <BurgerIcon />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Expanded drawer — sits below the bar, no logo inside */}
      {open && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: 'home' }); setOpen(false); }}>Work</a>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate({ name: 'about' }); setOpen(false); }}>About</a>
          </nav>

          <div className="mobile-menu__divider" />

          <div className="mobile-menu__links">
            <a href="https://www.dropbox.com/scl/fi/n286yerj9j2y96van4463/OnurErdem_Resume.pdf?rlkey=uhrs462psr810vhyui31aakq2&e=1&st=brisvxqj&dl=0" target="_blank" rel="noopener">Download Resume</a>
            <a href="https://www.linkedin.com/in/thisisonur/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="mailto:thisisonur@gmail.com">Get in Touch</a>
          </div>

          <div className="mobile-menu__footer">
            <span>Imagery and brand assets © their respective clients. Everything else © Onur Erdem, 2026.</span>
            <span>Designed and built with AI assistance.</span>
          </div>
        </div>
      )}
    </div>
  );
}

// --- Footer -----------------------------------------------------------------
function Footer() {
  return (
    <footer className="site-footer">
      <div className="copy">
        <span>Designed and built with AI assistance. Imagery and brand assets © their respective clients. Everything else © Onur Erdem, 2026.</span>
      </div>
      <div className="links">
        <a href="https://www.dropbox.com/scl/fi/n286yerj9j2y96van4463/OnurErdem_Resume.pdf?rlkey=uhrs462psr810vhyui31aakq2&e=1&st=brisvxqj&dl=0" target="_blank" rel="noopener">Download Resume</a>
        <a href="https://www.linkedin.com/in/thisisonur/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="mailto:thisisonur@gmail.com">Get in Touch</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Reveal, ScrollChrome, Header, MobileHeader, Footer });
