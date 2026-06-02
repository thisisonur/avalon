// =============================================================
// Avalon — Data  v51
// All site content. Updated per Revisions.md.
// =============================================================

export const CASE_STUDIES = [
  // ── TWE ───────────────────────────────────────────────────
  // Restructured per uploads/treasury-wine-estates-structured-content
  // (v57). Same component library as Trier: factsPanel + quickContext
  // replace the meta-row, with decisionGrid (3 cards / 3 cols),
  // pullQuote, and outcomeCallout used in their respective sections.
  // Backup of the prior TWE content lives in app/data.twe-backup.js.
  {
    slug: 'treasury-wine-estates',
    name: 'Treasury Wine Estates',
    cardName: 'Treasury Wine Estates',
    short: 'A multi-brand design system for ten wine brands and one global parent on a shared architecture.',
    cardSub: 'Design Systems Designer',
    readTime: '5 min read',
    year: '2023',
    duration: '6 months',
    role: 'Design System Designer',
    client: 'Treasury Wine Estates',
    clientUrl: 'https://www.tweglobal.com/',
    clientLabel: 'TWE Global',
    theme: 'treasury',
    icon: 1,
    title: 'Treasury Wine Estates',
    subtitle: 'A multi-brand design system for ten wine brands and one global parent, built to let each brand stay itself inside a shared architecture.',
    heroImage: '/assets/case-studies/twe-hero.png',
    heroImageMobile: '/assets/case-studies/twe-hero-mobile.png',
    // Project Facts Panel — replaces the default meta-row
    factsPanel: [
      { label: 'Role', value: 'Design System Designer' },
      { label: 'Year', value: '2023' },
      { label: 'Client', valueHtml: '<a href="https://www.tweglobal.com/" target="_blank" rel="noopener">Treasury Wine Estates</a>' },
      { label: 'Brands', value: 'Treasury Wine Estates Global, Matua, Coastal Reserve, Lindeman\u2019s, Pepperjack, St Hubert\u2019s The Stag, Squealing Pig, Blossom Hill, Devil\u2019s Lair, Yellowglen' },
      { label: 'Scope', value: '10 brand sites + 1 global parent, 6-month delivery' },
      { label: 'Reading time', value: '~5 min' }
    ],
    // Quick Context Callout — body only (label intentionally omitted)
    quickContext: {
      body: '<strong>Eleven websites, ten brand sites and one global parent, built within six months on a shared foundation.</strong> The brands ranged from bright and geometric to dark and classical, monochrome to maximalist. The system had to absorb that range without flattening it.'
    },
    sections: [
      {
        id: 'central-question',
        label: 'The central question',
        title: 'The central question',
        body: [
          { type: 'p', text: 'Treasury Wine Estates needed eleven websites, ten brand sites and one global parent, built within six months on a shared foundation. The brief sounded like a typical multi-brand DS project, but the real problem was harder than it looked. How do you build one system that lets eleven brands stay genuinely themselves, when their visual identities have almost nothing in common?' },
          { type: 'p', text: 'This wasn\u2019t eleven variations on a theme. The brands ranged from bright and geometric to dark and classical. Some leaned ocean-serif elegant; others were quirky, illustrated, and maximalist. One was monochrome with handwriting fonts; another was pastel with restrained sans-serifs. They weren\u2019t different colorways. They were different design languages.' },
          { type: 'p', text: 'The system had to absorb that range without flattening it. That tension shaped every decision in the project.' },
          { type: 'figure', src: '/assets/case-studies/twe-fig-1.png', srcMobile: '/assets/case-studies/twe-fig-1-mobile.png', caption: 'Brand identity range across the eleven Treasury Wine Estates sites — from geometric to classical, monochrome to maximalist.' }
        ]
      },
      {
        id: 'role-and-architecture',
        label: 'My role and the architecture',
        title: 'My role and the architecture',
        body: [
          { type: 'p', text: 'The headless, atomic foundation was set by the team lead before my work began. We aligned on the structural approach in early workshops, and from there I owned the brand-token architecture across all eleven sites, the layer where each brand\u2019s identity was encoded into the system.' },
          { type: 'h3', text: 'What I owned' },
          { type: 'ul', items: [
            'Brand-token architecture across all eleven sites',
            'All components and layouts built in Figma',
            'Interaction design on a subset of brand sites, giving me a direct feedback loop on how the brand-token layer performed in real design work'
          ]},
          { type: 'h3', text: 'What the team contributed' },
          { type: 'ul', items: [
            'Team lead \u2014 set the headless, atomic foundation',
            'Interaction designers \u2014 carried brand-specific surface treatments (photography, parallax, custom imagery) where the system\u2019s structural skeleton couldn\u2019t',
            'Engineering \u2014 built and maintained the pipeline'
          ]},
          { type: 'p', text: 'The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook into a Storybook CMS that was delivered to all eleven brand marketing teams.' }
        ]
      },
      {
        id: 'encoding-identity',
        label: 'Encoding identity through tokens',
        title: 'Encoding identity through tokens',
        body: [
          { type: 'p', text: 'Each brand got its own set of tokens for color, typography, border radii, spacing, sizing, and line-height. The hardest decisions came from brands whose identities pushed against system constraints.' },
          { type: 'decisionGrid', cols: 3, cards: [
            {
              icon: 'colorSwatch',
              title: 'Color, when brand identity meets accessibility',
              body: 'Some brands carried colors that failed contrast on white surfaces. Rather than accept the accessibility failure or override the brand, I introduced parallel color ramps in the primitives, accessibility-safe variants close to the original brand colors. Interactive and text-bearing semantic tokens resolved to the accessibility-safe variants by default. Surface-level semantic tokens could still consume the original brand color, since contrast risk was managed by the foreground tokens that sat on top. Accessibility was enforced architecturally, not by convention.',
              figure: {
                src: '/assets/case-studies/twe-fig-2.png',
                srcMobile: '/assets/case-studies/twe-fig-2-mobile.png',
                caption: 'Dual-ramp token architecture. Where a brand color failed contrast, an accessibility-safe primitive sat alongside it, and semantic tokens resolved to the safe variant by default. The same pattern applied across every brand on the project.'
              }
            },
            {
              icon: 'letterform',
              title: 'Typography, when ornate display fonts break the system',
              body: 'Several brands provided distinctive display fonts that defined their identity but couldn\u2019t carry the full type system. I extended each brand\u2019s type system with secondary and tertiary fonts \u2014 Google Fonts equivalents that resonated with the brand\u2019s character but worked safely across components. The signature font was preserved for headings; the system-safe alternatives carried body, captions, and UI labels.'
            },
            {
              icon: 'rhythm',
              title: 'Vertical rhythm as a brand-customizable layer',
              body: 'For brands whose display fonts broke spacing assumptions, I added line-height tokens at the brand-semantic level \u2014 not as per-component patches but as proper semantic overrides. Vertical rhythm became a brand-customizable layer, recognizing that typography identity lives in spacing relationships as much as in the font itself.'
            }
          ]}
        ]
      },
      {
        id: 'governance',
        label: 'Governance',
        title: 'Governance: what the system should and shouldn\u2019t absorb',
        body: [
          { type: 'p', text: 'A multi-brand system survives or fails based on what the team chooses to put inside it. The project started with explicit scoping. Before kickoff, I built a detailed inventory of every component, variation, state, pattern, and layout the system would support, and got client approval. That document became the basis for every later conversation about what was and wasn\u2019t in the system.' },
          { type: 'p', text: 'As work progressed, new ideas surfaced naturally. Most fit within the system. Some could be solved cleanly by extending or creatively reusing what was already there. Others were structurally different enough that absorbing them would have introduced ambiguity into components that needed to stay clear; those were built as bespoke work for the brand that needed them, kept outside the shared system. The boundary was visible and intentional. The system stayed clean, the brand got what it needed, and the architecture didn\u2019t carry the cost of single-use exceptions.' }
        ]
      },
      {
        id: 'scope-expanded',
        label: 'When scope expanded',
        title: 'When scope expanded during the work',
        body: [
          { type: 'p', text: 'The scope expanded during the project. New page types, layout variations, and component needs surfaced as the work progressed, particularly for the Global site, which grew in complexity beyond what the original scope anticipated. The architecture was built to absorb that kind of growth.' },
          { type: 'p', text: 'I added the new components within the existing system, using the same primitives and architectural conventions. No primitive-level changes were needed. A small number of new semantic tokens were added. Once the components existed, they were available to any brand, and some were later adopted by brand sites that hadn\u2019t originally needed them. The architecture absorbed the additions without breaking, and the new work strengthened the shared foundation rather than fragmenting it.' },
          { type: 'figure', src: '/assets/case-studies/twe-fig-3.png', srcMobile: '/assets/case-studies/twe-fig-3-mobile.png', caption: 'Global site — late-stage layout and component additions that grew out of the same primitive layer.' }
        ]
      },
      {
        id: 'tradeoff',
        label: 'The trade-off',
        title: 'The trade-off the system couldn\u2019t solve on its own',
        body: [
          { type: 'p', text: 'The system shipped on time, on scope, and architecturally sound. It also had a real limit, one worth naming honestly.' },
          { type: 'p', text: 'Customization at the token level (color, type, spacing, line-height) enabled rich surface-level brand differentiation. What it couldn\u2019t enable on its own was form-level expression. Every brand site shared the same underlying component shapes and layout vocabularies, so the structural skeleton across brands was similar.' },
          { type: 'p', text: 'In practice, the gap was filled by close collaboration with the interaction designers on the project. Distinctive photography, expressive background imagery, and bespoke surface treatments like parallax effects were layered on top of the system to carry each brand\u2019s look and feel where the structure couldn\u2019t. The DS handled the structural and accessible foundation; the surface treatments brought the personality forward. The result was that brands felt genuinely different even though the underlying layouts were related.' },
          { type: 'pullQuote', text: 'Tokens got us far, but they couldn’t solve everything. The moment brands wanted distinct component shapes, the limits of the architecture became obvious.' },
          { type: 'figure', src: '/assets/case-studies/twe-fig-4.png', srcMobile: '/assets/case-studies/twe-fig-4-mobile.png', caption: 'Surface treatments — photography, parallax, and brand imagery layered on top of the shared structural skeleton.' }
        ]
      },
      {
        id: 'forking-vs-theming',
        label: 'Architectural choice',
        title: 'Architectural choice: forking, not theming',
        body: [
          { type: 'p', text: 'Rather than building a runtime theming architecture, with one source of truth and brand layers that switch dynamically, we shipped a fork-per-brand approach. The headless system was duplicated for each brand, and the primitive and semantic layers were modified within each fork.' },
          { type: 'p', text: 'This was the right shape for the project. Eleven brand sites, six-month delivery, no requirement for runtime brand-switching. A theming architecture is a different operational model: it requires shared tooling, shared maintenance, and longer maintenance horizons than this project was scoped for. The cost of forking is governance over time, since future system-level changes have to propagate across multiple libraries, and that cost was understood and accepted at the project level.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'outcomeCallout',
            headline: 'Eleven sites launched within the six-month window. Still in production today.',
            body: [
              'Maintained by the client\u2019s brand teams in the Storybook CMS. The team\u2019s velocity increased across the project, not because the system grew significantly, but because the workflow, tooling, and conventions became second nature as we went.',
              'The architecture absorbed late-stage scope expansions without breaking, and the trade-offs were known, named, and chosen deliberately.'
            ]
          }
        ]
      },
      {
        id: 'reflection',
        label: 'What I\u2019d do differently',
        title: 'What I\u2019d do differently on the next multi-brand system',
        body: [
          { type: 'p', text: 'Looking back, the architecture succeeded because it matched the project. Eleven sites, six months, and no requirement for runtime brand switching. A different context would have justified a different system. This one worked because it matched the operational reality rather than an idealized future state. I now scope the architecture to fit the operational reality from the start, including how teams will work with it, not just how it works in theory.' },
          { type: 'p', text: 'The second is that brand identity at scale is a problem of how much of a brand the system can carry, not just how cleanly the system can be themed. Surface-level tokens are necessary but not sufficient. The next version of multi-brand DS work I\u2019d architect would expose form-level variants too, letting brands express identity through component shape. That\u2019s where multi-brand systems have the most room to grow, and it\u2019s the direction I want to take this kind of work next.' }
        ]
      }
    ],
    keyTakeaway: 'Architecture has to match its operational context. The most elegant system is the wrong one if it doesn\u2019t fit the project\u2019s timeline, ownership model, and maintenance horizon.'
  },

  // ── RELATE ────────────────────────────────────────────────
  // Restructured per uploads/relate-structured-content.md (v58).
  // Same component library as Trier and TWE: factsPanel + quickContext
  // replace the meta-row, decisionGrid (4 cards / 2 cols) carries the
  // four surfaces of work, pullQuote sits before the outcome, and the
  // outcomeCallout closes the body. Backup in data.relate-haste-backup.js.
  {
    slug: 'relate',
    name: 'Relate',
    cardName: 'Relate',
    short: 'Rebrand and redesign of an enterprise AI product across identity, system, product, and site.',
    cardSub: 'Brand & Design Systems',
    readTime: '3 min read',
    year: '2025',
    duration: '6 months',
    role: 'Brand Designer · Design System Designer · Product Designer',
    client: 'Relate / Hide and Seek Digital',
    clientUrl: 'https://relate.us',
    clientLabel: 'relate.us',
    theme: 'relate',
    icon: 2,
    title: 'Relate',
    subtitle: 'Rebranding and redesigning an enterprise AI product for the modern AI era, across identity, system, product, and marketing site.',
    heroImage: '/assets/case-studies/relate-hero.png',
    heroImageMobile: '/assets/case-studies/relate-hero-mobile.png',
    factsPanel: [
      { label: 'Role', value: 'Brand Designer · Design System Designer · Product Designer' },
      { label: 'Year', value: '2025' },
      { label: 'Duration', value: '6 months' },
      { label: 'Client', valueHtml: '<a href="https://relate.us/" target="_blank" rel="noopener">Relate</a>' },
      { label: 'Engagement', value: 'Contract via Hide and Seek' },
      { label: 'Scope', value: 'Brand identity, design system, product UI, marketing site' },
      { label: 'Reading time', value: '~3 min' }
    ],
    quickContext: {
      body: '<strong>A full-spectrum engagement covering brand identity, design system, product interactions, and marketing site for an enterprise AI product.</strong> Six months, five-timezone distributed team. The product launched and is in active use, with the client now in funding rounds to scale.'
    },
    sections: [
      {
        id: 'brief',
        label: 'The brief',
        title: 'The brief',
        body: [
          { type: 'p', text: 'Relate is an AI agent that joins online meetings on Teams, Google Meet, and Zoom, summarizes what people say and how they say it, and produces a trust-factor analysis teams can act on. The model is trained on the principles of <em>The Trusted Advisor</em>.' },
          { type: 'p', text: 'Relate had a brand and an interface that predated the modern AI era. The existing identity was a detailed mesh-network mark in a visual language that read as generic tech. The product had real enterprise customers but felt visually fractured, with patterns that looked like several designers had worked on different parts of it without speaking to each other.' },
          { type: 'p', text: 'The brief was to bring Relate into the present across the full surface, identity, design system, product, and marketing site, without flattening into the generic AI aesthetic that had become the category default.' }
        ]
      },
      {
        id: 'role-and-team',
        label: 'Role and team',
        title: 'Role and team',
        body: [
          { type: 'p', text: 'The team spanned five timezones. Hide and Seek led the engagement with a design lead and dev lead in Australia. I joined as a contractor in the US, owning brand identity, interaction design, the design system, and the marketing site. Real-time overlap was at most three hours a day, so video updates and written documentation became the operational backbone.' },
          { type: 'h3', text: 'What I owned' },
          { type: 'ul', items: [
            'Brand identity (rebrand from existing brand)',
            'Interaction design across the product',
            'The design system, layered on HASTE',
            'The marketing site (relate.us)'
          ]},
          { type: 'h3', text: 'What the team contributed' },
          { type: 'ul', items: [
            'Hide and Seek design lead \u2014 led the brand workshop, oversaw the engagement',
            'Hide and Seek dev lead \u2014 partnered on architecture and pipeline decisions',
            'UX designer (Malaysia, contractor) \u2014 UX deliverables under the design lead\u2019s supervision',
            'Product dev team (Taiwan, contracted by Relate) \u2014 built the product',
            'Marketing site dev team (Australia) \u2014 built relate.us'
          ]}
        ]
      },
      {
        id: 'four-surfaces',
        label: 'The work across four surfaces',
        title: 'The work across four surfaces',
        body: [
          { type: 'decisionGrid', stacked: true, cards: [
            {
              icon: 'brandMark',
              title: 'Brand identity rebrand',
              body: 'A brand workshop run by the Hide and Seek design lead surfaced statements, keywords, and intent. From that material I derived two archetypes: Creator at 70% (originality, deliberate construction, business-level trustworthiness) and Magician at 30% (transformation, possibility, the catalytic moment). I presented three identity directions grounded in the archetype split with typography, color, and brand applications. The team selected the direction anchored in an abstract handshake mark with a blue-to-pink gradient.',
              src: '/assets/case-studies/relate-fig-1.png',
              srcMobile: '/assets/case-studies/relate-fig-1-mobile.png',
              imageCaption: 'Brand identity, from idea to mark to system.'
            },
            {
              icon: 'layers',
              title: 'Design system layered on HASTE',
              body: 'The product DS was layered on HASTE, the tokenized design system I had built earlier at Hide and Seek. HASTE provided the headless foundation: base components and foundation tokens. On top, I added Relate\u2019s brand-token layer (colors, font families, sizing, spacing, elevation, border radius), fully tokenized. The new Relate-specific components, including the Sandi chat surface, were not fully tokenized \u2014 a deliberate trade-off given the timeline.'
            },
            {
              icon: 'chatBubble',
              title: 'Product redesign and Sandi\u2019s surface',
              body: 'The new product reads calm. Soft ivory rather than sterile white. Hints of gradient appear across the UI to carry the Magician layer of the brand. Relate\u2019s AI agent has a name: Sandi. I designed a dedicated mark for Sandi (gradient-touched, with an infinity symbol at the core) and built the chat surface that handles a complete state machine: idle, processing, error, usage limit, AI model selection.',
              src: '/assets/case-studies/relate-fig-3.png',
              srcMobile: '/assets/case-studies/relate-fig-3-mobile.png',
              imageCaption: 'Product redesign'
            },
            {
              icon: 'webPage',
              title: 'Marketing site (relate.us)',
              body: 'The marketing site had to capture multiple B2B audiences: HR leads, sales teams, project teams, and customer success teams. The site\u2019s posture is intentionally calm. No flashy hero animations, no kinetic typography, no unexpected interactions. Trust products don\u2019t earn credibility through visual excess; they earn it through restraint, clarity, and consistency with the product itself.',
              src: '/assets/case-studies/relate-fig-4.png',
              srcMobile: '/assets/case-studies/relate-fig-4-mobile.png',
              imageCaption: 'Marketing site — relate.us'
            }
          ]}
        ]
      },
      {
        id: 'revisit',
        label: 'What I\u2019d revisit',
        title: 'What I\u2019d revisit',
        body: [
          { type: 'p', text: 'Working across five time zones shaped how the work moved. Decisions ran across days rather than within single conversations, which suited a team this distributed, and the rhythm became its own thing to design for. That kind of constraint asks the system to do more documentation work, since async teams rely on what\u2019s written down more than on what\u2019s said in the room. Something I\u2019d carry into how I scope documentation on future distributed engagements.' },
          { type: 'pullQuote', text: 'We put most of the personality into the brand system and kept the product deliberately restrained. People came to Relate to understand conversations, not admire the interface.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'outcomeCallout',
            headline: 'Relate launched and is in active use. The client is now in funding rounds to scale the product.',
            body: [
              'The brand, the product, the design system, and the marketing site all shipped from the same source: a brand workshop, two archetypes, and a coherent set of decisions that traced from intent to interface across every surface a user encounters.'
            ]
          }
        ]
      },
      {
        id: 'reflection',
        label: 'Designing for trust in AI products',
        title: 'Designing for trust in AI products',
        body: [
          { type: 'p', text: 'Working on Relate changed how I think about trust-focused products. Throughout the project, we repeatedly found that adding more visual expression didn\u2019t make the product feel stronger. The stronger direction was usually the quieter one.' },
          { type: 'p', text: 'Clear hierarchy, restrained motion, and content that stayed focused on the conversation itself consistently felt more credible than more visually expressive alternatives. We put most of the personality into the brand and let the product focus on helping people interpret what was being said in meetings.' }
        ]
      }
    ],
    keyTakeaway: 'The AI category pulls toward visual excess. Trust products need the opposite. Calm surfaces, clear hierarchy, restrained motion. The brand can carry the energy. The interface should carry the work.'
  },

  // ── HASTE ─────────────────────────────────────────────────
  // Restructured per uploads/haste-structured-content.md (v58).
  // factsPanel + quickContext + decisionGrid (3 cards) + pullQuote +
  // outcomeCallout, matching the rest of the library. Decision grid
  // uses cols:3 markup but stacks at the case-study content width.
  // Backup in data.relate-haste-backup.js.
  {
    slug: 'haste',
    name: 'HASTE',
    cardName: 'HASTE',
    short: 'A tokenized design system and methodology for igniting new client projects from a shared start.',
    cardSub: 'Design Systems Designer',
    readTime: '4 min read',
    year: '2024',
    duration: '12 months',
    role: 'Design System Designer',
    client: 'Hide and Seek Digital',
    clientUrl: '#',
    clientLabel: 'HASTE overview',
    theme: 'haste',
    icon: 3,
    title: 'HASTE',
    subtitle: 'A headless, tokenized design system and methodology for starting every client design system from the same place.',
    heroImage: '/assets/case-studies/haste-hero.png',
    heroImageMobile: '/assets/case-studies/haste-hero-mobile.png',
    factsPanel: [
      { label: 'Role', value: 'Design System Designer' },
      { label: 'Year', value: '2024' },
      { label: 'Duration', value: '12 months' },
      { label: 'Client', valueHtml: 'Internal system for <a href="https://hideandseek.digital/" target="_blank" rel="noopener">Hide and Seek Digital</a>' },
      { label: 'Used on', value: 'Australian Federal Police, Relate' },
      { label: 'Reading time', value: '~4 min' }
    ],
    quickContext: {
      body: '<strong>A tokenized design system and a documented methodology, built as an R&amp;D initiative to give the agency a shared starting point for every client engagement.</strong> Used as the foundation for client work during my time at Hide and Seek Digital, including projects for the Australian Federal Police and Relate. Presented externally at a Storyblok webinar attended by around a hundred people.'
    },
    sections: [
      {
        id: 'what-haste-was-for',
        label: 'What HASTE was for',
        title: 'What HASTE was for',
        body: [
          { type: 'p', text: 'Every new client engagement at the agency started from zero. Designers reinvented foundations from scratch, or stitched together components borrowed from past projects and adapted them by hand. The output was inconsistent, the kickoffs were slow, and the same architectural problems were being solved over and over again by different people.' },
          { type: 'p', text: 'HASTE was scoped as an R&D initiative to change that. The goal wasn\u2019t just a component library. It was a tokenized foundation, a documented methodology, and a workflow for igniting new client design systems from a shared starting point. The brief I owned was both to build the system and to make it adoptable.' }
        ]
      },
      {
        id: 'the-system',
        label: 'The system',
        title: 'The system',
        body: [
          { type: 'p', text: 'HASTE is a tokenized component and pattern library built in Figma with Tokens Studio. The token architecture covers color, typography, border radii, spacing, sizing, and line-height, structured in primitive and semantic layers from day one. Components and patterns cover the foundations of typical client engagements: buttons, forms, navigation, content layouts, and the structural elements that appear on most projects.' },
          { type: 'p', text: 'The library was architected to support web, mobile, and web-app projects through shared primitives. Coverage was deliberately partial. Most components were single-platform; a smaller subset had multi-platform variants. The architecture made room for the system to grow as new client work demanded it, rather than locking HASTE into web-only assumptions before that breadth was needed.' },
          { type: 'p', text: 'The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook. The same operational shape every client engagement would inherit when they spun up a system on top of HASTE.' },
          { type: 'figure', src: '/assets/case-studies/haste-fig-1.png', srcMobile: '/assets/case-studies/haste-fig-1-mobile.png', caption: 'HASTE — tokenized foundations and pattern library built in Figma with Tokens Studio.' }
        ]
      },
      {
        id: 'the-methodology',
        label: 'The methodology',
        title: 'The methodology',
        body: [
          { type: 'p', text: 'The library was the smaller half of the deliverable. The bigger half was making sure HASTE could actually be used. Three artifacts carried that work.' },
          { type: 'decisionGrid', cols: 3, cards: [
            {
              icon: 'book',
              title: 'The HASTE Handbook',
              body: 'A detailed reference that documented the architecture, naming conventions, token logic, and component usage. The handbook included video tutorials so anyone learning the system could see Tokens Studio in motion, not just read about it.'
            },
            {
              icon: 'flowchart',
              title: 'Workflow diagrams',
              body: 'Diagrams showed exactly how to ignite a new client design system based on HASTE. They covered the steps from forking the foundation to establishing client-specific tokens, plus troubleshooting paths for the situations teams ran into most often.'
            },
            {
              icon: 'playScreen',
              title: 'A training program for designers',
              body: 'Two-hour sessions every week for two months, working from a shared Tokens Studio repo, with hands-on practice on real component scenarios. Sessions were recorded so they could be referenced after the fact, and the same material was woven into the handbook for self-serve learning.'
            }
          ]},
          { type: 'figure', src: '/assets/case-studies/haste-fig-2.png', srcMobile: '/assets/case-studies/haste-fig-2-mobile.png', caption: 'Methodology artifacts — the HASTE Handbook and workflow diagrams.' },
          { type: 'p', text: 'Together, the system and the methodology were designed to outlast any single person on the team. The handbook, the recorded sessions, and the workflow diagrams gave the agency a complete starting kit that could be picked up by new designers without requiring a live walkthrough.' },
          { type: 'p', text: 'The methodology also traveled outside the agency. I co-presented HASTE with the dev lead at a Storyblok webinar attended by around a hundred people, walking through the token pipeline live and showing how a tokenized foundation flows from Tokens Studio into Storybook in practice.' },
          { type: 'figure', src: '/assets/case-studies/haste-fig-3.png', srcMobile: '/assets/case-studies/haste-fig-3-mobile.png', caption: 'Storyblok webinar — co-presenting the token pipeline live, walking through Tokens Studio into Storybook in practice.' }
        ]
      },
      {
        id: 'adoption',
        label: 'What I learned about adoption',
        title: 'What I learned about adoption',
        body: [
          { type: 'p', text: 'Designing the system was the smaller half of the work. Getting it adopted was the harder half, and HASTE taught me that adoption is a tooling problem and a communication problem at the same time.' },
          { type: 'p', text: 'Some designers picked up Tokens Studio quickly. Others struggled with it. That difference had a bigger impact on adoption than any architectural decision I made. The more friction people felt in the tooling, the faster they fell back to old habits. The training program was structured around both: hands-on tooling practice, and documentation written to be read under pressure.' },
          { type: 'p', text: 'Even after the training program, people used HASTE differently. Some followed the workflow closely. Others adapted it to fit how they already worked. That never really stopped. The system evolved, the team evolved, and adoption remained something that needed attention rather than something that could be checked off as complete.' },
          { type: 'pullQuote', text: 'Designing the system was the smaller half of the work. Getting it adopted was the harder half.' }
        ]
      },
      {
        id: 'architectural-cost',
        label: 'Where the architecture had a cost',
        title: 'Where the architecture had a cost',
        body: [
          { type: 'p', text: 'HASTE shipped as a fork-per-brand system, the same architecture that had worked on the agency\u2019s earlier multi-brand projects. Each new client engagement forked the headless foundation and customized the primitive and semantic layers for that client.' },
          { type: 'p', text: 'The architecture worked, but it had an adoption cost I didn\u2019t fully anticipate. Every new client engagement required the team to internalize the full fork-and-retokenize flow, which made onboarding slower than it needed to be. The training program absorbed that cost, but the cost was real.' },
          { type: 'p', text: 'If I were starting HASTE today, I\u2019d architect it around theming from day one. Not because theming is universally better, but because the operational model is conceptually simpler: the foundation stays put and brand layers swap on top. That simplicity translates directly to faster team adoption, which is the part of system work that determines whether the rest of it succeeds.' },
          { type: 'figure', src: '/assets/case-studies/haste-fig-4.png', srcMobile: '/assets/case-studies/haste-fig-4-mobile.png', caption: 'Fork-per-brand vs. theming — two operational shapes for a tokenized foundation, each with its own adoption cost.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'outcomeCallout',
            headline: 'HASTE became the foundation for new client engagements during my time at the agency.',
            body: [
              'Used on projects including the Australian Federal Police and Relate. The system, the handbook, the recorded training, and the workflow diagrams remained as the agency\u2019s starting kit when I transitioned out. Day-to-day stewardship moved to the team.',
              'Working on Relate as an interaction designer, I experienced HASTE from the consumer side: the foundation made room for brand-specific components rather than basic ones, which is exactly the value the system was designed to deliver.'
            ]
          }
        ]
      },
      {
        id: 'reflection',
        label: 'What HASTE taught me',
        title: 'What HASTE taught me about systems work',
        body: [
          { type: 'p', text: 'Two lessons I carry forward from this project.' },
          { type: 'p', text: 'The first is that documentation is part of the system, not a wrapper around it. The HASTE Handbook and the workflow diagrams weren\u2019t supplementary. They were the difference between a system that lives only in the architect\u2019s head and a system other people can pick up and use. And as AI agents increasingly work inside design systems, the quality of that documentation determines what they can do too. Thorough documentation is no longer just for humans; it\u2019s the interface the AI consumes as well. I now scope documentation as a deliverable from the start, not as a thing that gets written at the end.' },
          { type: 'p', text: 'The second is that adoption is its own design problem. A great system that no one uses is worth less than a simpler system that the team can confidently work with. Architecting for adoption, choosing the operational model that matches the team\u2019s tooling fluency, pacing the training, and writing documentation people actually want to read, is as much of the work as architecting the system itself.' }
        ]
      }
    ],
    keyTakeaway: 'A great system that no one uses is worth less than a simpler system the team can confidently work with. Adoption is its own design problem.'
  },

  // ── TRIER ─────────────────────────────────────────────────
  // Restructured per uploads/trier-structured.md (v52).
  // Introduces five new components: Quick Context Callout,
  // Project Facts Panel, Decision Card Grid, Pull Quote, Outcome
  // Callout. The factsPanel array, when present, REPLACES the
  // default meta-row at the top of the case study. The
  // quickContext object renders directly below it. New body block
  // types: decisionGrid, pullQuote, outcomeCallout.
  // Backup of the previous Trier content lives in app/data.trier-backup.js.
  {
    slug: 'trier',
    name: 'Trier',
    cardName: 'Trier',
    short: 'A digital triage platform that cut ambulance ramping by 50% in the pilot hospital.',
    cardSub: 'Product Designer',
    readTime: '4 min read',
    year: '2023',
    duration: '12 months',
    role: 'Product Designer · Design System Designer',
    client: 'Trier Medical Solutions, in collaboration with Imminently',
    clientUrl: '#',
    clientLabel: 'Project overview',
    theme: 'trier',
    icon: 4,
    title: 'Trier: My Emergency Visit',
    subtitle: 'A digital triage platform for Sir Charles Gairdner Hospital, designed to take pressure off the emergency department by moving data capture off the front lines.',
    heroImage: '/assets/case-studies/trier-hero.png',
    heroImageMobile: '/assets/case-studies/trier-hero-mobile.png',
    // Project Facts Panel — replaces the default meta-row
    factsPanel: [
      { label: 'Role', value: 'Product Designer · Design System Designer' },
      { label: 'Year', value: '2023' },
      { label: 'Client', valueHtml: '<a href="https://www.triersolutions.com/" target="_blank" rel="noopener">Trier Medical Solutions</a>, in collaboration with <a href="https://imminently.co/" target="_blank" rel="noopener">Imminently</a>' },
      { label: 'Pilot site', value: 'Sir Charles Gairdner Hospital, Perth, Australia' },
      { label: 'Outcome', value: '50% reduction in ambulance ramping at pilot' },
      { label: 'Reading time', value: '~4 min' }
    ],
    // Quick Context Callout — sits below the facts panel, above the body.
    // Label intentionally omitted per v53; gradient treatment matches Outcome.
    quickContext: {
      body: 'The pilot at Sir Charles Gairdner Hospital reported a <strong>50% reduction in ambulance ramping</strong>, the metric used to measure ER congestion when ambulances queue outside because there\u2019s no capacity inside. The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital.'
    },
    sections: [
      {
        id: 'the-problem',
        label: 'The problem',
        title: 'The problem',
        body: [
          { type: 'p', text: 'Emergency departments were drowning. The pandemic had pushed already-stretched ER workflows past their limits, and the operational bottleneck was getting worse: patients arrived, queued in shared waiting areas, talked to a nurse to share sensitive information out loud, filled out paper forms with no privacy, and the same data then got re-entered manually into multiple clinical systems before triage could even begin.' },
          { type: 'p', text: 'Trier\u2019s brief was to take that load off. Move the data capture earlier in the process, give patients privacy, give clinicians a single screen, and reduce the manual work that compounded under peak demand.' },
          { type: 'p', text: 'The project shipped two products that worked together:' },
          { type: 'ul', items: [
            'A patient-facing mobile app, used before and during the ER visit',
            'A clinician-facing web app, used by nurses and doctors during triage'
          ]}
        ]
      },
      {
        id: 'role-and-team',
        label: 'Role and team',
        title: 'Role and team',
        body: [
          { type: 'p', text: 'I worked under the design director, who captained the project. We co-ran discovery workshops to understand current ER workflows, with her in charge and me supporting. From there, the design work was mine to drive.' },
          { type: 'h3', text: 'What I owned' },
          { type: 'ul', items: [
            'Every screen on the patient mobile app',
            'Every screen on the clinician web app',
            'The supporting design system (project-specific, non-tokenized)',
            'Usability validation that fed back into the design'
          ]},
          { type: 'h3', text: 'What the team contributed' },
          { type: 'ul', items: [
            'Design director \u2014 project captain, discovery workshop lead',
            'Illustrator \u2014 visuals for the patient app\u2019s symptom screens',
            'Developers from Imminently \u2014 built the products',
            'Clinicians at Sir Charles Gairdner Hospital \u2014 interview subjects, usability testing participants'
          ]},
          { type: 'p', text: 'I participated in five clinician interviews during discovery, asking questions and synthesizing in Dovetail. I ran the usability testing sessions myself, my first time leading that part of the work, with the design lead attending as a silent observer for support.' }
        ]
      },
      {
        id: 'designing-for-stressed-users',
        label: 'Designing for stressed users',
        title: 'Designing for stressed users',
        body: [
          { type: 'p', text: 'The patient mobile app is the harder half of the project, and it\u2019s where most of the design work lived. Patients using it are stressed, often in pain, often elderly, and trying to enter sensitive medical information either on their way to the ER or while sitting in a waiting room. Almost every design decision in the app started from that user state.' },
          { type: 'decisionGrid', cards: [
            {
              icon: 'steps',
              title: 'Step-heavy onboarding, paced to feel manageable',
              body: 'Long-form input in one screen would have been unmanageable for someone in distress. The flow was chunked into clear steps with visual progress and a persistent view of triage wait time on every screen.'
            },
            {
              icon: 'eye',
              title: 'Symptom selection through illustrations',
              body: 'The team replaced text and buttons with illustrations covering symptoms like cough, nausea, and injury. Patients in stress states have reduced reading comprehension. A visual interface is more accessible across language proficiency, age, and cognitive load.'
            },
            {
              icon: 'thermometer',
              title: 'A heat-map-style severity slider',
              body: 'Self-reporting how you feel in numeric or descriptive terms is genuinely hard, especially when you\u2019re not feeling well. A high-visual slider let patients indicate severity through a heat-map gradient, removing the cognitive work of mapping a feeling to a number.'
            },
            {
              icon: 'clock',
              title: 'Wait time visibility, hierarchy-shifted over time',
              body: 'During onboarding, triage wait time was visible but didn\u2019t dominate. Once onboarding completed, wait time was promoted to a hero card on the home screen, because at that point it was the main thing the patient was sitting with. The information hierarchy shifted to match the patient\u2019s state.'
            },
            {
              icon: 'alert',
              title: 'A condition deterioration alert',
              body: 'ER conditions can worsen in the waiting room, and patients can\u2019t always advocate for themselves through normal channels. The app gave patients a direct alert button to notify a nurse if their condition deteriorated. The most clinically critical feature in the app and one of the decisions I\u2019m most proud of.'
            },
            {
              icon: 'pill',
              title: 'Optional medication details, designed for older users',
              body: 'Patients could optionally enter their current medications: drug names with autocomplete, dosages, frequencies, and multi-medication entry with edit and delete. Building dense, detailed input flows that remained legible and usable for older patients on small phone screens was a genuine design challenge. My favorite work on the project.'
            }
          ]},
          { type: 'figure', src: '/assets/case-studies/trier-fig-1.png', srcMobile: '/assets/case-studies/trier-fig-1-mobile.png', caption: 'Patient mobile app — six accessibility-led design decisions translated into screens.' }
        ]
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        title: 'Accessibility shaped every screen',
        body: [
          { type: 'p', text: 'Older patients are the dominant ER demographic, which meant the accessibility constraints weren\u2019t a feature of the app, they were the architecture of every screen.' },
          { type: 'p', text: 'Specific decisions:' },
          { type: 'ul', items: [
            'Tap targets at ~60 pixels, well above standard mobile minimums',
            'Form elements (radio buttons, etc.) sized larger than typical defaults',
            'Type sizes, contrast ratios, and hit areas all calibrated for users who might be in pain, on small-screen phones, with reduced visual acuity'
          ]},
          { type: 'p', text: 'The trade-off was honest: the app couldn\u2019t be visually compact or sleek in the conventional sense. Every accessibility decision took up real estate. The aesthetic ended up sterile and clinical, which was the right answer for the domain.' },
          { type: 'pullQuote', text: 'The app prioritized legibility and clinical clarity over consumer polish, and that was the right call.' }
        ]
      },
      {
        id: 'clinician-web-app',
        label: 'The clinician web app',
        title: 'The clinician web app',
        body: [
          { type: 'p', text: 'On the clinician-facing side, the web app was the operational backbone. Before Trier, nurses and doctors collected triage data manually and re-entered it across multiple systems. The web app consolidated all of that into a single screen where clinicians could see incoming patient data in real time, track observations, and prioritize triage without the duplicate-entry overhead.' },
          { type: 'p', text: 'The design work was less visually rich than the patient app but no less critical. Clinical environments demand clarity over personality, and the web app was built to support fast scanning, dense information density, and zero ambiguity at decision points.' },
          { type: 'figure', src: '/assets/case-studies/trier-fig-2.png', srcMobile: '/assets/case-studies/trier-fig-2-mobile.png', caption: 'Clinician web app — a single-screen triage view consolidating patient data, observations, and prioritization.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'outcomeCallout',
            headline: '50% reduction in ambulance ramping at the pilot hospital.',
            body: [
              'The metric measures ER congestion when ambulances queue outside because there\u2019s no capacity inside. Halving it isn\u2019t a marginal efficiency gain. It\u2019s a measurable shift in how the hospital absorbed peak demand, with direct implications for patient outcomes during the worst operational periods.',
              'The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital, who described how the new triage approach had changed their workflow.'
            ]
          },
          // 9News Perth case study segment — embedded from Vimeo.
          // Autoplays muted when scrolled into view (handled in work.jsx).
          { type: 'video', src: 'https://player.vimeo.com/video/1196349188', aspect: 56.24, caption: '9News Perth segment — clinicians from Sir Charles Gairdner Hospital discuss the new triage workflow.' }
        ]
      },
      {
        id: 'reflection',
        label: 'What Trier taught me',
        title: 'What Trier taught me',
        body: [
          { type: 'p', text: 'The biggest lesson I take from this project is about trading off design values when the cause warrants it.' },
          { type: 'p', text: 'I came into Trier believing good design meant clean, beautiful, easy-on-the-eyes interfaces. The accessibility constraints pushed me to a different conclusion. In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It\u2019s the right answer.' },
          { type: 'p', text: 'That distinction now shapes how I approach any project where users are stressed, vulnerable, or operating outside ideal conditions. Trier forced me to stop judging interfaces by the standards I used on marketing sites or SaaS products. An ER waiting room isn\u2019t a normal product environment. Once I accepted that, many of the design decisions became obvious. The interface needed to be clear, accessible, and dependable long before it needed to be visually refined.' },
          { type: 'p', text: 'If I worked on a future version of Trier, I\u2019d refine the visual hierarchy within the same accessibility constraints. I wouldn\u2019t change the philosophy. Some projects don\u2019t need to be reinvented in retrospect. They need to be defended.' }
        ]
      }
    ],
    keyTakeaway: 'In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It\u2019s the right answer.'
  }
];
