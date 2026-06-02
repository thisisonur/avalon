// =============================================================
// Avalon — Case Study & Showcase pages
// SideNav and NextButton use ReactDOM.createPortal(el, document.body)
// so position:fixed is always viewport-relative, never scoped to the
// page-transition div which carries an inline transform.
// =============================================================

const { useEffect: useEffectWork, useRef: useRefWork, useState: useStateWork } = React;
const { createPortal } = ReactDOM;

function SideNav({ sections }) {
  const [active, setActive] = useStateWork(sections[0]?.id);
  const [visible, setVisible] = useStateWork(false);
  useEffectWork(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 200) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sections]);

  return createPortal(
    <nav className={`side-nav ${visible ? 'is-visible' : ''}`}>
      {sections.map(s => (
        <a key={s.id} className={active === s.id ? 'is-active' : ''}
           href={`#${s.id}`}
           onClick={(e) => {
             e.preventDefault();
             const el = document.getElementById(s.id);
             if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' });
           }}>
          <span className="dot" />
          {s.label}
        </a>
      ))}
    </nav>,
    document.body
  );
}

function NextButton({ label, name, onClick }) {
  const [show, setShow] = useStateWork(false);
  useEffectWork(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return createPortal(
    <button className={`next-btn ${show ? 'is-visible' : ''}`} onClick={() => {
      // The page transition for next case-study / next showcase clicks
      // is handled by App in index.html: it intercepts the hashchange,
      // runs a staggered exit on the current DOM (content → nav → button),
      // then swaps route and silently resets scroll. We flag the
      // navigation so App knows to use the staggered exit instead of
      // the default 280ms wrapper fade, then trigger the route change.
      window.__nextCSTransition = true;
      onClick();
    }}>
      <span className="next-line">
        <span className="lbl">{label}</span>
        <span>{name}</span>
      </span>
      <span className="next-arrow">
        <svg viewBox="0 0 16 16" fill="none">
          <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>,
    document.body
  );
}

// ─── Decision Card icons (Trier component 3) ──────────────
// Simple stroke glyphs at 32px. No decorative illustrations.
const DECISION_ICONS = {
  steps: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 26h6v-6h6v-6h6v-6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M3 16s4.5-8 13-8 13 8 13 8-4.5 8-13 8S3 16 3 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  thermometer: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M14 18.5V6a2.5 2.5 0 0 1 5 0v12.5a5 5 0 1 1-5 0Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="16.5" cy="23" r="2" fill="currentColor" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 9.5V16l4.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M9 23V14a7 7 0 0 1 14 0v9l2 3H7l2-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 26.5a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="12" width="24" height="8" rx="4" transform="rotate(-30 16 16)" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12.5 9.5l7 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // ─── TWE decision card glyphs ──────────────────
  colorSwatch: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 5a11 11 0 0 1 0 22V5Z" fill="currentColor" />
    </svg>
  ),
  letterform: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M8 24L16 8l8 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 18.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  rhythm: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 9h20M6 16h20M6 23h20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10 6.5v5M18 13.5v5M14 20.5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // ─── Relate decision card glyphs ───────────────────────────
  brandMark: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="12" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="20" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6L4 12l12 6 12-6-12-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 20l12 6 12-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  ),
  chatBubble: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-9l-5 4v-4H9a3 3 0 0 1-3-3V9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  webPage: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4.5" y="6.5" width="23" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.5 12h23M9 9.25h.01M12 9.25h.01M15 9.25h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  // ─── HASTE decision card glyphs ────────────────────────────
  book: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 7a2 2 0 0 1 2-2h7v22H8a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M26 7a2 2 0 0 0-2-2h-7v22h7a2 2 0 0 0 2-2V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 10h3M9 14h3M20 10h3M20 14h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  flowchart: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="11" y="4" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="22" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="19" y="22" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 10v6M16 16H8v6M16 16h8v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  playScreen: (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M14 11.5v5l5-2.5-5-2.5Z" fill="currentColor" />
      <path d="M11 26h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
};

// ─── InlineVideo — autoplay (muted) when scrolled into view ──
// Wraps the iframe so we can attach the autoplay+muted params only
// once it intersects the viewport. Vimeo (and most browsers) only
// honour autoplay when the player is muted, so we set both.
function InlineVideo({ embedUrl, caption }) {
  const wrapRef = useRefWork(null);
  const [active, setActive] = useStateWork(false);
  useEffectWork(() => {
    if (active) return;
    const node = wrapRef.current;
    if (!node) return;

    // Activate as soon as the frame is sufficiently in view.
    // Uses bounding-rect math so it works in every environment —
    // IntersectionObserver is unreliable in some sandboxed iframes.
    const check = () => {
      const n = wrapRef.current;
      if (!n) return false;
      const r = n.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Trigger when the frame's top has scrolled into the bottom 80%
      // of the viewport (matches a threshold-0.2-ish feel).
      if (r.top < vh * 0.85 && r.bottom > 0) {
        setActive(true);
        return true;
      }
      return false;
    };

    if (check()) return;

    let io = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            if (io) io.disconnect();
            break;
          }
        }
      }, { threshold: 0.2 });
      io.observe(node);
    }

    const onScroll = () => { if (check()) cleanup(); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    function cleanup() {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (io) io.disconnect();
    }
    return cleanup;
  }, [active]);

  // Append autoplay+muted only once the player has scrolled into view
  // so we don't fire a network request for the video until it's needed.
  const finalUrl = active
    ? `${embedUrl}${embedUrl.includes('?') ? '&' : '?'}autoplay=1&muted=1&badge=0&autopause=0&player_id=0&app_id=58479`
    : null;

  return (
    <figure className="inline-video">
      <div ref={wrapRef} className="inline-video__frame">
        {finalUrl ? (
          <iframe
            src={finalUrl}
            title={caption || 'Embedded video'}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="inline-video__placeholder" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.4" />
              <path d="M13 11.5v9l8-4.5-8-4.5Z" fill="currentColor" />
            </svg>
          </div>
        )}
      </div>
      {caption ? <figcaption className="img-caption inline-figure__caption">{caption}</figcaption> : null}
    </figure>
  );
}

// ─── Video URL → embed URL ──────────────────────────────────
// Accepts the canonical share URL formats for YouTube and Vimeo
// and returns an embeddable iframe URL. Returns null for empty/
// unrecognised input so the renderer can fall back to the
// placeholder. Onur drops his Vimeo or YouTube link straight into
// the data.js `src` field; this handles the rewrite.
function toEmbedUrl(src) {
  if (!src || typeof src !== 'string') return null;
  const url = src.trim();
  if (!url) return null;
  // YouTube — youtu.be/<id> or youtube.com/watch?v=<id> or already-embed
  let m = url.match(/youtu\.be\/([\w-]{6,})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  m = url.match(/youtube\.com\/watch\?[^#]*v=([\w-]{6,})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  m = url.match(/youtube\.com\/embed\/([\w-]{6,})/i);
  if (m) return `https://www.youtube.com/embed/${m[1]}`;
  // Vimeo — vimeo.com/<id> or player.vimeo.com/video/<id>
  m = url.match(/player\.vimeo\.com\/video\/(\d+)/i);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  m = url.match(/vimeo\.com\/(\d+)/i);
  if (m) return `https://player.vimeo.com/video/${m[1]}`;
  return null;
}

function renderBody(blocks) {
  return blocks.map((b, i) => {
    if (b.type === 'p')  return <p key={i} dangerouslySetInnerHTML={{ __html: b.text }} />;
    if (b.type === 'ul') return <ul key={i}>{b.items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: it }} />)}</ul>;
    if (b.type === 'h3') return <h3 key={i} className="work-section-h3">{b.text}</h3>;
    if (b.type === 'decisionGrid') {
      const stacked = !!b.stacked;
      const colClass = stacked
        ? ' decision-grid--stacked'
        : (b.cols === 3 ? ' decision-grid--3col' : '');
      return (
        <div key={i} className={`decision-grid${colClass}`} role="list">
          {b.cards.map((c, j) => (
            stacked ? (
              <div key={j} className="decision-stack-item">
                <div className="decision-card" role="listitem">
                  <div className="decision-card__icon">{DECISION_ICONS[c.icon] || DECISION_ICONS.steps}</div>
                  <h4 className="decision-card__title">{c.title}</h4>
                  <p className="decision-card__body">{c.body}</p>
                </div>
                {c.imageCaption !== undefined ? (
                  <figure className={`inline-figure decision-stack-figure${c.src ? ' inline-figure--image' : ''}`}>
                    {c.src ? (
                      c.srcMobile ? (
                        <picture>
                          <source media="(max-width: 720px)" srcSet={c.srcMobile} />
                          <img src={c.src} alt={c.imageAlt || ''} className="inline-figure__img" />
                        </picture>
                      ) : (
                        <img src={c.src} alt={c.imageAlt || ''} className="inline-figure__img" />
                      )
                    ) : (
                      <div className="img-placeholder inline-figure__img" aria-hidden="true"></div>
                    )}
                    {c.imageCaption ? (
                      <figcaption className="img-caption inline-figure__caption">{c.imageCaption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </div>
            ) : (
              <React.Fragment key={j}>
                <div className="decision-card" role="listitem">
                  <div className="decision-card__icon">{DECISION_ICONS[c.icon] || DECISION_ICONS.steps}</div>
                  <h4 className="decision-card__title">{c.title}</h4>
                  <p className="decision-card__body">{c.body}</p>
                </div>
                {c.figure ? (
                  <figure className="inline-figure inline-figure--image decision-card__figure" role="listitem" aria-label={c.figure.caption || ''}>
                    {c.figure.srcMobile ? (
                      <picture>
                        <source media="(max-width: 720px)" srcSet={c.figure.srcMobile} />
                        <img src={c.figure.src} alt={c.figure.alt || ''} className="inline-figure__img" />
                      </picture>
                    ) : (
                      <img src={c.figure.src} alt={c.figure.alt || ''} className="inline-figure__img" />
                    )}
                    {c.figure.caption ? (
                      <figcaption className="img-caption inline-figure__caption">{c.figure.caption}</figcaption>
                    ) : null}
                  </figure>
                ) : null}
              </React.Fragment>
            )
          ))}
        </div>
      );
    }
    if (b.type === 'figure') {
      const hasImg = !!b.src;
      return (
        <figure key={i} className={`inline-figure${hasImg ? ' inline-figure--image' : ''}`}>
          {hasImg ? (
            b.srcMobile ? (
              <picture>
                <source media="(max-width: 720px)" srcSet={b.srcMobile} />
                <img src={b.src} alt={b.alt || ''} className="inline-figure__img" />
              </picture>
            ) : (
              <img src={b.src} alt={b.alt || ''} className="inline-figure__img" />
            )
          ) : (
            <div className="img-placeholder inline-figure__img" aria-hidden="true"></div>
          )}
          {b.caption ? <figcaption className="img-caption inline-figure__caption">{b.caption}</figcaption> : null}
        </figure>
      );
    }
    if (b.type === 'video') {
      // Accepts a YouTube or Vimeo share URL in b.src and rewrites it
      // to an embed URL. While b.src is null/empty, render a 16:9
      // placeholder labelled "Video" so it's clear the slot is reserved.
      const embedUrl = toEmbedUrl(b.src);
      if (!embedUrl) {
        return (
          <figure key={i} className="inline-video">
            <div className="inline-video__frame">
              <div className="inline-video__placeholder" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M13 11.5v9l8-4.5-8-4.5Z" fill="currentColor" />
                </svg>
                <span className="inline-video__placeholder-label">Video</span>
              </div>
            </div>
            {b.caption ? <figcaption className="img-caption inline-figure__caption">{b.caption}</figcaption> : null}
          </figure>
        );
      }
      return <InlineVideo key={i} embedUrl={embedUrl} caption={b.caption} />;
    }
    if (b.type === 'pullQuote') {
      return (
        <figure key={i} className="pull-quote">
          <span className="pull-quote__mark" aria-hidden="true" />
          <blockquote className="pull-quote__text">{b.text}</blockquote>
        </figure>
      );
    }
    if (b.type === 'outcomeCallout') {
      const bodyArr = Array.isArray(b.body) ? b.body : (b.body ? [b.body] : []);
      // The "Outcome" label always lives inside the callout component as
      // nano text matching the About-page mono labels. Default to
      // "Outcome" so case-study data doesn't have to repeat it.
      const label = b.label === undefined ? 'Outcome' : b.label;
      return (
        <div key={i} className="outcome-callout">
          {label ? <div className="outcome-callout__label">{label}</div> : null}
          <div className="outcome-callout__headline">{b.headline}</div>
          {bodyArr.map((para, j) => (
            <p key={j} className="outcome-callout__body" dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      );
    }
    return null;
  });
}

// ─── Facts panel + quick context (Trier components 1 & 2) ─
function FactsPanel({ rows }) {
  return (
    <div className="facts-panel">
      {rows.map((row, i) => (
        <div key={i} className="facts-panel__row">
          <div className="facts-panel__label">{row.label}</div>
          {row.valueHtml ? (
            <div
              className="facts-panel__value"
              dangerouslySetInnerHTML={{ __html: row.valueHtml }}
            />
          ) : (
            <div className="facts-panel__value">{row.value}</div>
          )}
        </div>
      ))}
    </div>
  );
}

function QuickContext({ label, body }) {
  return (
    <aside className="quick-context" aria-label={label}>
      {label ? <div className="quick-context__label">{label}</div> : null}
      <p className="quick-context__body" dangerouslySetInnerHTML={{ __html: body }} />
    </aside>
  );
}

function CaseStudyPage({ slug, navigate }) {
  const { CASE_STUDIES } = window.AVALON_DATA;
  const cs = CASE_STUDIES.find(c => c.slug === slug);
  if (!cs) return null;

  const idx = CASE_STUDIES.findIndex(c => c.slug === slug);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  const showLaunchBtn = slug === 'treasury-wine-estates' || slug === 'relate';

  return (
    <>
      {/* SideNav outside .page — position:fixed unaffected by containing blocks */}
      <SideNav sections={cs.sections} />
      <div className="page work-page" data-slug={cs.slug} data-screen-label={`Case study — ${cs.name}`}>
        <main className="work-main">
          <Reveal as="h1" className="work-title">{cs.title}</Reveal>
          {cs.subtitle ? <Reveal delay={1} as="p" className="work-subtitle">{cs.subtitle}</Reveal> : null}

          {/* Hero image */}
          <Reveal delay={2} as="div" className={`work-hero-img${cs.heroImageMobile ? ' work-hero-img--responsive' : ''}`}>
            {cs.heroImage ? (
              cs.heroImageMobile ? (
                <picture>
                  <source media="(max-width: 768px)" srcSet={cs.heroImageMobile} />
                  <img src={cs.heroImage} alt="" className="work-hero-img__img" />
                </picture>
              ) : (
                <img src={cs.heroImage} alt="" className="work-hero-img__img" />
              )
            ) : (
              <div className="img-placeholder" aria-hidden="true"></div>
            )}
          </Reveal>

          {cs.factsPanel ? (
            <Reveal delay={3} as="div" className="facts-panel-wrap">
              <FactsPanel rows={cs.factsPanel} />
              {showLaunchBtn && (
                <a className="pill-link facts-panel__launch" href={cs.clientUrl} target="_blank" rel="noopener">
                  {cs.clientLabel}
                  <svg viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              )}
            </Reveal>
          ) : (
            <Reveal delay={3} as="div" className="meta-row">
              <div className="col">
                <span className="k">Client</span>
                <span className="v">{cs.client}</span>
              </div>
              <div className="col">
                <span className="k">Role</span>
                <span className="v">{cs.role}</span>
              </div>
              <div className="col">
                <span className="k">Year</span>
                <span className="v">{cs.year}{cs.duration ? ` · ${cs.duration}` : ''}</span>
              </div>
              {showLaunchBtn && (
                <a className="pill-link" href={cs.clientUrl} target="_blank" rel="noopener">
                  {cs.clientLabel}
                  <svg viewBox="0 0 16 16" fill="none"><path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              )}
            </Reveal>
          )}

          {cs.quickContext ? (
            <Reveal delay={4} as="div" className="quick-context-wrap">
              <QuickContext label={cs.quickContext.label} body={cs.quickContext.body} />
            </Reveal>
          ) : null}

          {cs.sections.map((s) => {
            // Outcome section: the visual label now lives inside the
            // outcome-callout (nano text). Suppress the section h2 to
            // avoid a duplicate heading above the component.
            const hideHeading = s.id === 'outcome';
            return (
              <section key={s.id} id={s.id} className="work-section">
                {hideHeading ? null : <Reveal as="h2">{s.title}</Reveal>}
                <Reveal delay={1}>{renderBody(s.body)}</Reveal>
                {s.image ? (
                  <Reveal delay={2}>
                    <div className="img-placeholder" aria-hidden="true"></div>
                    <p className="img-caption">{s.image.caption}</p>
                  </Reveal>
                ) : null}
              </section>
            );
          })}

        </main>
        <Footer />
      </div>
      {/* NextButton outside .page — position:fixed unaffected by containing blocks */}
      <NextButton label="Next case study" name={next.name} onClick={() => {
        navigate({ name: 'work', slug: next.slug });
      }} />
    </>
  );
}

function ShowcasePage({ slug, navigate }) {
  const { SHOWCASES } = window.AVALON_DATA;
  const sc = SHOWCASES.find(c => c.slug === slug);
  if (!sc) return null;

  const idx = SHOWCASES.findIndex(c => c.slug === slug);
  const next = SHOWCASES[(idx + 1) % SHOWCASES.length];

  return (
    <>
      <div className="page work-page" data-screen-label={`Showcase — ${sc.name}`}>
        <main className="work-main">
          <Reveal as="h1" className="work-title">{sc.title}</Reveal>
          <Reveal delay={1} as="p" className="work-tag">{sc.subtitle}</Reveal>
          <Reveal delay={2} as="p" className="work-lead">{sc.lead}</Reveal>
          <Reveal delay={3} as="div" className="meta-row">
            <div className="col">
              <span className="k">Client</span>
              <span className="v">{sc.client}</span>
            </div>
            <div className="col">
              <span className="k">Role</span>
              <span className="v">{sc.role}</span>
            </div>
            <div className="col">
              <span className="k">Year</span>
              <span className="v">{sc.year}</span>
            </div>
          </Reveal>

          {/* Exactly 4 image placeholders with captions */}
          <section className="work-section">
            {[
              { label: 'Image Placeholder', caption: 'Caption 01' },
              { label: 'Image Placeholder', caption: 'Caption 02' },
              { label: 'Image Placeholder', caption: 'Caption 03' },
              { label: 'Image Placeholder', caption: 'Caption 04' },
            ].map((item, i) => (
              <Reveal key={i} delay={i}>
                <div className="img-placeholder" aria-hidden="true"></div>
                <p className="img-caption">{item.caption}</p>
              </Reveal>
            ))}
          </section>
        </main>
        <Footer />
      </div>
      {/* NextButton outside .page */}
      <NextButton label="Next showcase" name={next.name} onClick={() => navigate({ name: 'showcase', slug: next.slug })} />
    </>
  );
}

Object.assign(window, { CaseStudyPage, ShowcasePage });
