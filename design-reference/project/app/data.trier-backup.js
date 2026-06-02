// =============================================================
// Avalon — Data  v51
// All site content. Updated per Revisions.md.
// =============================================================

const CASE_STUDIES = [
  // ── TWE ───────────────────────────────────────────────────
  {
    slug: 'treasury-wine-estates',
    name: 'Treasury Wine Estates',
    cardName: 'Treasury Wine Estates',
    short: 'A multi-brand design system for ten wine brands and one global parent on a shared architecture.',
    cardSub: 'Design Systems Designer',
    readTime: '6 min read',
    year: '2023',
    duration: '6 months',
    role: 'Design Systems Designer',
    client: 'Treasury Wine Estates',
    clientUrl: 'https://www.tweglobal.com/',
    clientLabel: 'TWE Global',
    theme: 'treasury',
    icon: 1,
    title: 'Treasury Wine Estates',
    subtitle: 'A multi-brand design system for ten wine brands and one global parent, built to let each brand stay itself inside a shared architecture.',
    heroImage: 'assets/case-studies/twe-hero.png',
    sections: [
      {
        id: 'central-question',
        label: 'The central question',
        title: 'The central question',
        body: [
          { type: 'p', text: 'Treasury Wine Estates needed eleven websites, ten brand sites and one global parent, built within six months on a shared foundation. The brief sounded like a typical multi-brand DS project, but the real problem was harder than it looked. How do you build one system that lets eleven brands stay genuinely themselves, when their visual identities have almost nothing in common?' },
          { type: 'p', text: 'This wasn\'t eleven variations on a theme. The brands ranged from bright and geometric to dark and classical. Some leaned ocean-serif elegant; others were quirky, illustrated, and maximalist. One was monochrome with handwriting fonts; another was pastel with restrained sans-serifs. They weren\'t different colorways. They were different design languages.' },
          { type: 'p', text: 'The system had to absorb that range without flattening it. That tension shaped every decision in the project.' }
        ]
      },
      {
        id: 'role-architecture',
        label: 'My role',
        title: 'My role and the architecture I worked within',
        body: [
          { type: 'p', text: 'The headless, atomic foundation was set by the team lead before my work began. We aligned on the structural approach in early workshops, and from there I owned the brand-token architecture across all eleven sites, the layer where each brand\'s identity was encoded into the system. I also built all the components and layouts in Figma, and designed the interfaces on a subset of the brand sites, which gave me a direct feedback loop on how the brand-token layer performed in real design work.' },
          { type: 'p', text: 'The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook into a Storybook CMS that was delivered to all eleven brand marketing teams.' }
        ]
      },
      {
        id: 'encoding-identity',
        label: 'Encoding identity',
        title: 'Encoding identity through tokens',
        body: [
          { type: 'p', text: 'Each brand got its own set of tokens for color, typography, border radii, spacing, sizing, and line-height. The hardest decisions came from brands whose identities pushed against system constraints.' },
          { type: 'h3', text: 'Color, when brand identity meets accessibility.' },
          { type: 'p', text: 'Some brands carried colors that failed contrast on white surfaces, and the naive options were both bad: accept the accessibility failure, or override the brand. Instead, I introduced parallel color ramps in the primitives, accessibility-safe variants close to the original brand colors. The semantic tokens resolved to the accessible variants, while the original brand colors remained available for decorative use. Accessibility was enforced architecturally, not by convention.' },
          { type: 'h3', text: 'Typography, when ornate display fonts break the system.' },
          { type: 'p', text: 'Several brands provided distinctive display fonts that defined their identity but couldn\'t carry the full type system. I extended each brand\'s type system with secondary and tertiary fonts, Google Fonts equivalents that resonated with the brand\'s character but worked safely across components. The signature font was preserved for headings and display use; body, captions, and UI labels were carried by the system-safe alternatives. Each substitution was approved by the client.' },
          { type: 'p', text: 'For brands whose display fonts still broke spacing assumptions, I added line-height tokens at the brand-semantic level, not as per-component patches but as proper semantic overrides. Vertical rhythm became a brand-customizable layer, recognizing that typography identity lives in spacing relationships as much as in the font itself.' }
        ]
      },
      {
        id: 'governance',
        label: 'Governance',
        title: 'Governance: knowing what the system should and shouldn\'t absorb',
        body: [
          { type: 'p', text: 'A multi-brand system survives or fails based on what the team chooses to put inside it. The project started with explicit scoping. Before kickoff, I built a detailed inventory of every component, variation, state, pattern, and layout the system would support, and got client approval. That document became the basis for every later conversation about what was and wasn\'t in the system.' },
          { type: 'p', text: 'As work progressed, new ideas surfaced naturally. Most fit within the system. Some could be solved cleanly by extending or creatively reusing what was already there. Others were structurally different enough that absorbing them would have introduced ambiguity into components that needed to stay clear; those were built as bespoke work for the brand that needed them, kept outside the shared system. The boundary was visible and intentional. The system stayed clean, the brand got what it needed, and the architecture didn\'t carry the cost of single-use exceptions.' }
        ]
      },
      {
        id: 'scope-expands',
        label: 'When scope expands',
        title: 'When scope expands during the work',
        body: [
          { type: 'p', text: 'The scope expanded during the project. New page types, layout variations, and component needs surfaced as the work progressed, particularly for the Global site, which grew in complexity beyond what the original scope anticipated. The architecture was built to absorb that kind of growth.' },
          { type: 'p', text: 'I added the new components within the existing system, using the same primitives and architectural conventions. No primitive-level changes were needed. A small number of new semantic tokens were added. Once the components existed, they were available to any brand, and some were later adopted by brand sites that hadn\'t originally needed them. The architecture absorbed the additions without breaking, and the new work strengthened the shared foundation rather than fragmenting it.' }
        ]
      },
      {
        id: 'trade-off',
        label: 'The trade-off',
        title: 'The trade-off the system couldn\'t solve on its own',
        body: [
          { type: 'p', text: 'The system shipped on time, on scope, and architecturally sound. It also had a real limit, one worth naming honestly.' },
          { type: 'p', text: 'Customization at the token level (color, type, spacing, line-height) enabled rich surface-level brand differentiation. What it couldn\'t enable on its own was form-level expression. Every brand site shared the same underlying component shapes and layout vocabularies, so the structural skeleton across brands was similar.' },
          { type: 'p', text: 'In practice, the gap was filled by close collaboration with the UI designers on the project. Distinctive photography, expressive background imagery, and bespoke surface treatments like parallax effects were layered on top of the system to carry each brand\'s look and feel where the structure couldn\'t. The DS handled the structural and accessible foundation; the surface treatments brought the personality forward. The result was that brands felt genuinely different even though the underlying layouts were related.' },
          { type: 'p', text: 'This is a known trade-off in multi-brand DS work. The architecture we shipped was the right shape for the project\'s brief and timeline, but it\'s also where multi-brand systems always have more room to grow.' }
        ]
      },
      {
        id: 'forking',
        label: 'Forking vs. theming',
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
          { type: 'p', text: 'All eleven sites launched within the six-month window. They remain in production today, maintained by the client\'s brand teams in the Storybook CMS. The team\'s velocity increased across the project, not because the system grew significantly, but because the workflow, tooling, and conventions became second nature as we went.' }
        ]
      },
      {
        id: 'takeaways',
        label: 'What I take forward',
        title: 'What I take into multi-brand work now',
        body: [
          { type: 'p', text: 'Two lessons shape how I approach multi-brand DS work today.' },
          { type: 'p', text: 'The first is that architecture has to match its operational context. The most elegant system is the wrong one if it doesn\'t fit the project\'s timeline, ownership model, and maintenance horizon. I now scope the architecture to fit the operational reality from the start, including how teams will work with it, not just how it works in theory.' },
          { type: 'p', text: 'The second is that brand identity at scale is a problem of how much of a brand the system can carry, not just how cleanly the system can be themed. Surface-level tokens are necessary but not sufficient. The next version of multi-brand DS work I\'d architect would expose form-level variants too, letting brands express identity through component shape. That\'s where multi-brand systems have the most room to grow, and it\'s the direction I want to take this kind of work next.' }
        ]
      }
    ],
    keyTakeaway: 'Architecture has to match its operational context. The most elegant system is the wrong one if it doesn\'t fit the project\'s timeline, ownership model, and maintenance horizon.'
  },

  // ── RELATE ────────────────────────────────────────────────
  {
    slug: 'relate',
    name: 'Relate',
    cardName: 'Relate',
    short: 'Rebrand and redesign of an enterprise AI product across identity, system, product, and site.',
    cardSub: 'Brand & Design Systems',
    readTime: '5 min read',
    year: '2025',
    duration: '6 months',
    role: 'Brand Designer, Design System Designer, Product Designer',
    client: 'Relate / Hide and Seek Digital',
    clientUrl: 'https://relate.us',
    clientLabel: 'relate.us',
    theme: 'relate',
    icon: 2,
    title: 'Relate',
    subtitle: 'Rebranding and redesigning an enterprise AI product for the modern AI era, across identity, system, product, and marketing site.',
    sections: [
      {
        id: 'brief',
        label: 'The brief',
        title: 'The brief',
        body: [
          { type: 'p', text: 'Relate is an AI agent that joins online meetings on Teams, Google Meet, and Zoom, summarizes what people say and how they say it, and produces a trust-factor analysis teams can act on. The model is trained on the principles of The Trusted Advisor.' },
          { type: 'p', text: 'Both the brand and the product predated the modern AI era. The existing identity was a detailed mesh-network mark in a visual language that read as generic tech. The product had real enterprise customers but felt visually fractured, with patterns that looked like several designers had worked on different parts of it without speaking to each other. The brief was to bring Relate into the present across the full surface, identity, design system, product, and marketing site, without flattening into the generic AI aesthetic that had become the category default.' }
        ]
      },
      {
        id: 'role-team',
        label: 'My role',
        title: 'My role and the team',
        body: [
          { type: 'p', text: 'The team spanned five timezones. Hide and Seek led the engagement with a design lead and dev lead in Australia. I joined as a contractor in the US, owning brand identity, interaction design, the design system, and the marketing site. A UX designer in Malaysia owned UX deliverables under the design lead. A product dev team in Taiwan built the product; a separate dev team in Australia built the marketing site; Relate\'s marketing director in New York owned content and copy. Real-time overlap was at most three hours a day, so video updates and written documentation became the operational backbone.' }
        ]
      },
      {
        id: 'brand-work',
        label: 'The brand work',
        title: 'The brand work',
        body: [
          { type: 'p', text: 'The rebrand started with a brand workshop run by the Hide and Seek design lead. From the statements, keywords, and intent we captured, I derived two archetypes: Creator at 70% and Magician at 30%. Creator carried the brand\'s posture: originality, deliberate construction, and the clarity required to build business-level trustworthiness. Magician carried the brand\'s vision: transformation, possibility, the catalytic moment when an ordinary connection becomes something more reliable.' },
          { type: 'p', text: 'I presented three identity directions, each grounded in the archetype split, with typography, color, and brand applications across mediums so Relate could feel how the system would live across the surfaces it would inhabit. The team selected the direction anchored in an abstract handshake mark with a blue-to-pink gradient.' },
          { type: 'p', text: 'The archetypes shaped every layer. The gradient carries Magician energy, the visual moment of transformation. The dark blue and soft ivory palette carries Creator clarity, deliberate and quiet enough to support the gravity of business decisions. The brand voice was shaped to match: mature, confident, thoughtful, expert, with moments of joy on success states and milestones, and never cocky.' }
        ]
      },
      {
        id: 'product-redesign',
        label: 'The product redesign',
        title: 'The product redesign',
        body: [
          { type: 'p', text: 'The existing product was hard to read. Spacing was inconsistent, charts and tables were visually broken, and different parts of the interface looked like they came from different design systems. The redesign had to modernize the surface and unify what had drifted apart, in one move.' },
          { type: 'p', text: 'The new product reads calm. Soft ivory rather than sterile white. Hints of gradient appear across the UI to carry the Magician layer of the brand into product surfaces, never as decoration, always as a quiet signal.' },
          { type: 'p', text: 'The product covers a Dashboard, Meeting Reports, Analytics, Account and Team Management, and Settings. The Dashboard and Meeting Reports are where the analysis lives, and they got the most design attention.' },
          { type: 'h3', text: 'Designing for Sandi.' },
          { type: 'p', text: 'Relate\'s AI agent has a name: Sandi. She joins meetings, observes the conversation, and produces the trust analysis. On the Dashboard, she lives in a chat interface where users can interrogate any part of the report.' },
          { type: 'p', text: 'I designed a dedicated mark for Sandi: gradient-touched, with an infinity symbol at the core to represent continuous communication. Her icon appears in the corner of every chat surface, and the chat modal itself is branded around her. The chat had to handle a complete state machine (idle, processing, error, usage limit, AI model selection), surfaces that don\'t exist in most products and don\'t yet have established system patterns. Designing them meant building those patterns from scratch, anchored in the brand and the product\'s tone.' }
        ]
      },
      {
        id: 'design-system',
        label: 'The design system',
        title: 'The design system',
        body: [
          { type: 'p', text: 'The product DS was layered on HASTE, the tokenized design system I had built earlier at Hide and Seek. HASTE provided the headless foundation: base components and foundation tokens. On top of it, I added Relate\'s brand-token layer (colors, font families, sizing, spacing, elevation, border radius), fully tokenized.' },
          { type: 'p', text: 'The new Relate-specific components, including the Sandi chat surface and its states, were not fully tokenized. That was a deliberate trade-off given the timeline. Tokenization is a scoping decision, not an absolute, and the brand-token layer was the architecturally critical part. I also built a lightweight design system for the marketing site, derived from the product DS.' }
        ]
      },
      {
        id: 'marketing-site',
        label: 'The marketing site',
        title: 'The marketing site',
        body: [
          { type: 'p', text: 'The marketing site (relate.us) had to capture multiple B2B audiences: HR leads, sales teams, project teams, and customer success teams. Copy was written by Relate\'s marketing director and anchored in the brand voice. We co-built the IA and presented the final site to the board for approval together.' },
          { type: 'p', text: 'The site\'s posture is intentionally calm. No flashy hero animations, no kinetic typography, no unexpected interactions. Trust products don\'t earn credibility through visual excess; they earn it through restraint, clarity, and consistency with the product itself.' }
        ]
      },
      {
        id: 'constraints',
        label: 'What I\'d revisit',
        title: 'What I\'d revisit',
        body: [
          { type: 'p', text: 'Two things are honest to name. Working across five timezones meant some decisions happened in windows when I wasn\'t online, particularly during faster revision rounds. The outcomes were good, and async work was the right operational shape for a team this distributed, but the moments where I could have shaped a conversation in real time would have added something. The marketing site is the other piece I\'d revisit. The current restraint is right for the brand, and I\'d hold to that direction in any future version, but there\'s room for subtle motion to bring the brand\'s transformation quality forward more clearly.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'p', text: 'Relate launched and is in active use, and the client is now in funding rounds to scale the product. The brand, the product, the design system, and the marketing site all shipped from the same source: a brand workshop, two archetypes, and a coherent set of decisions that traced from intent to interface across every surface a user encounters.' }
        ]
      },
      {
        id: 'takeaways',
        label: 'What I take forward',
        title: 'What I take into AI product work now',
        body: [
          { type: 'p', text: 'The reflection from Relate is one I now treat as a working principle: express intent with less.' },
          { type: 'p', text: 'The AI category pulls toward visual excess, all the dramatic visual signals of "we are doing something with AI." Trust products in particular need the opposite. Calm surfaces, clear hierarchy, restrained motion, content as the focus. The brand can carry the energy. The interface should carry the work.' }
        ]
      }
    ],
    keyTakeaway: 'The AI category pulls toward visual excess. Trust products need the opposite. Calm surfaces, clear hierarchy, restrained motion. The brand can carry the energy. The interface should carry the work.'
  },

  // ── HASTE ─────────────────────────────────────────────────
  {
    slug: 'haste',
    name: 'HASTE',
    cardName: 'HASTE',
    short: 'A tokenized design system and methodology for igniting new client projects from a shared start.',
    cardSub: 'Design Systems Designer',
    readTime: '5 min read',
    year: '2023',
    duration: '18 months',
    role: 'Design System Designer & System Advocate',
    client: 'Hide and Seek Digital',
    clientUrl: '#',
    clientLabel: 'HASTE overview',
    theme: 'haste',
    icon: 3,
    title: 'HASTE',
    subtitle: 'A headless, tokenized design system built to be the agency\'s first internal foundation, and a methodology for starting every client design system from the same place.',
    sections: [
      {
        id: 'what-haste-was-for',
        label: 'What HASTE was for',
        title: 'What HASTE was for',
        body: [
          { type: 'p', text: 'Every new client engagement at the agency started from zero. Designers reinvented foundations from scratch, or stitched together components borrowed from past projects and adapted them by hand. The output was inconsistent, the kickoffs were slow, and the same architectural problems were being solved over and over again by different people.' },
          { type: 'p', text: 'HASTE was scoped as an R&D initiative to change that. The goal wasn\'t just a component library. It was a tokenized foundation, a documented methodology, and a workflow for igniting new client design systems from a shared starting point. The brief I owned was both: build the system, and make it adoptable.' }
        ]
      },
      {
        id: 'the-system',
        label: 'The system',
        title: 'The system',
        body: [
          { type: 'p', text: 'HASTE is a tokenized component and pattern library built in Figma with Tokens Studio. The token architecture covers color, typography, border radii, spacing, sizing, and line-height, structured in primitive and semantic layers from day one. Components and patterns cover the foundations of typical client engagements: buttons, forms, navigation, content layouts, and the structural pieces that show up on most projects.' },
          { type: 'p', text: 'The library was architected to support web, mobile, and web-app projects through shared primitives. Coverage was deliberately partial. Most components were single-platform; a smaller subset had multi-platform variants. The architecture made room for the system to grow as new client work demanded it, rather than locking HASTE into web-only assumptions before that breadth was needed.' },
          { type: 'p', text: 'The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook. The same operational shape every client engagement would inherit when they spun up a system on top of HASTE.' }
        ]
      },
      {
        id: 'methodology',
        label: 'The methodology',
        title: 'The methodology',
        body: [
          { type: 'p', text: 'The library was the smaller half of the deliverable. The bigger half was making sure HASTE could actually be used.' },
          { type: 'p', text: 'I built three pieces around the system. A detailed HASTE Handbook that documented the architecture, naming conventions, token logic, and component usage. The handbook included video tutorials so anyone learning the system could see Tokens Studio in motion, not just read about it.' },
          { type: 'p', text: 'A set of workflow diagrams that showed exactly how to ignite a new client design system based on HASTE. The diagrams covered the steps from forking the foundation to establishing client-specific tokens, plus troubleshooting paths for the situations teams ran into most often.' },
          { type: 'p', text: 'A training program for designers on the team. Two-hour sessions every week for two months, working from a shared Tokens Studio repo, with hands-on practice on real component scenarios. The sessions were recorded so they could be referenced after the fact, and the same material was woven into the handbook for self-serve learning.' },
          { type: 'p', text: 'Together, the system and the methodology were designed to outlast any single person on the team. The handbook, the recorded sessions, and the workflow diagrams gave the agency a complete starting kit that could be picked up by new designers without requiring a live walkthrough.' },
          { type: 'p', text: 'The methodology also traveled outside the agency. I co-presented HASTE with the dev lead at a Storyblok webinar attended by around a hundred people, walking through the token pipeline live and showing how a tokenized foundation flows from Tokens Studio into Storybook in practice.' }
        ]
      },
      {
        id: 'adoption',
        label: 'What I learned about adoption',
        title: 'What I learned about adoption',
        body: [
          { type: 'p', text: 'Designing the system was the smaller half of the work. Getting it adopted was the harder half, and HASTE taught me that adoption is a tooling problem and a communication problem at the same time.' },
          { type: 'p', text: 'Tooling fluency across the team determines whether the system can actually be used. Theoretical elegance doesn\'t survive contact with delivery deadlines, and information that isn\'t clean, direct, and easy to digest gets bypassed. The training program was structured around both: hands-on tooling practice, and documentation written to be read under pressure.' },
          { type: 'p', text: 'Adoption is also never fully won. Introducing a new methodology mid-stride means some of the team takes to it quickly and others work with it on their own terms. That\'s the reality of changing how an agency operates, and it\'s why I\'ve come to think of adoption work as continuous, not as a phase that ends.' }
        ]
      },
      {
        id: 'architecture-cost',
        label: 'Where architecture had a cost',
        title: 'Where the architecture had a cost',
        body: [
          { type: 'p', text: 'HASTE shipped as a fork-per-brand system, the same architecture that had worked on the agency\'s earlier multi-brand projects. Each new client engagement forked the headless foundation and customized the primitive and semantic layers for that client.' },
          { type: 'p', text: 'The architecture worked, but it had an adoption cost I didn\'t fully anticipate. Every new client engagement required the team to internalize the full fork-and-retokenize flow, which made onboarding slower than it needed to be. The training program absorbed that cost, but the cost was real.' },
          { type: 'p', text: 'If I were starting HASTE today, I\'d architect it around theming from day one. Not because theming is universally better, but because the operational model is conceptually simpler: the foundation stays put and brand layers swap on top. That simplicity translates directly to faster team adoption, which is the part of system work that determines whether the rest of it succeeds.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'p', text: 'HASTE was used as the foundation for client engagements during my time at the agency, including projects for the Australian Federal Police and Relate. Working on Relate as an interaction designer, I experienced HASTE from the consumer side: the foundation made room for brand-specific components rather than basic ones, which is exactly the value the system was designed to deliver.' },
          { type: 'p', text: 'The system, the handbook, the recorded training, and the workflow diagrams remained as the agency\'s starting kit when I transitioned out. Day-to-day stewardship moved to the team.' }
        ]
      },
      {
        id: 'takeaways',
        label: 'What I take forward',
        title: 'What HASTE taught me about systems work',
        body: [
          { type: 'p', text: 'Two lessons I carry forward from this project.' },
          { type: 'p', text: 'The first is that documentation is part of the system, not a wrapper around it. The HASTE Handbook and the workflow diagrams weren\'t supplementary. They were the difference between a system that lives only in the architect\'s head and a system other people can pick up and use. And as AI agents increasingly work inside design systems, the quality of that documentation determines what they can do too. Thorough documentation is no longer just for humans; it\'s the interface the AI consumes as well. I now scope documentation as a deliverable from the start, not as a thing that gets written at the end.' },
          { type: 'p', text: 'The second is that adoption is its own design problem. A great system that no one uses is worth less than a simpler system that the team can confidently work with. Architecting for adoption, choosing the operational model that matches the team\'s tooling fluency, pacing the training, and writing documentation people actually want to read, is as much of the work as architecting the system itself.' }
        ]
      }
    ],
    keyTakeaway: 'A great system that no one uses is worth less than a simpler system the team can confidently work with. Adoption is its own design problem.'
  },

  // ── TRIER ─────────────────────────────────────────────────
  {
    slug: 'trier',
    name: 'Trier',
    cardName: 'Trier',
    short: 'A digital triage platform that cut ambulance ramping by 50% in the pilot hospital.',
    cardSub: 'Product Designer',
    readTime: '5.5 min read',
    year: '2023–2024',
    duration: '12 months',
    role: 'Product Designer and Design System Designer',
    client: 'Trier Medical Solutions / Sir Charles Gairdner Hospital',
    clientUrl: '#',
    clientLabel: 'Project overview',
    theme: 'trier',
    icon: 4,
    title: 'Trier: My Emergency Visit',
    subtitle: 'A digital triage platform for Sir Charles Gairdner Hospital, designed to take pressure off the emergency department by moving data capture off the front lines.',
    sections: [
      {
        id: 'problem',
        label: 'The problem',
        title: 'The problem the project was trying to solve',
        body: [
          { type: 'p', text: 'Emergency departments were drowning. The pandemic had pushed already-stretched ER workflows past their limits, and the operational bottleneck was getting worse: patients arrived, queued in shared waiting areas, talked to a nurse to share sensitive information out loud, filled out paper forms with no privacy, and the same data then got re-entered manually into multiple clinical systems before triage could even begin.' },
          { type: 'p', text: 'Trier\'s brief was to take that load off. Move the data capture earlier in the process, give patients privacy, give clinicians a single screen, and reduce the manual work that compounded under peak demand.' },
          { type: 'p', text: 'The project shipped two products that worked together: a patient-facing mobile app and a clinician-facing web app.' }
        ]
      },
      {
        id: 'role-team',
        label: 'My role',
        title: 'My role and the team',
        body: [
          { type: 'p', text: 'I worked under the design director, who captained the project. We co-ran discovery workshops to understand current ER workflows, with her in charge and me supporting. From there, I drove the design across both apps: every screen on the patient mobile app and the clinician web app, the supporting design system, and the usability validation that fed back into the design.' },
          { type: 'p', text: 'The team also included an illustrator who created visuals for the patient app\'s symptom screens, plus developers from Imminently who built the products. I participated in five clinician interviews during discovery, asking questions and synthesizing in Dovetail. I ran the usability testing sessions myself, my first time leading that part of the work, with the design lead attending as a silent observer for support.' }
        ]
      },
      {
        id: 'stressed-users',
        label: 'Designing for stressed users',
        title: 'Designing for stressed users in a high-stakes domain',
        body: [
          { type: 'p', text: 'The patient mobile app is the harder half of the project, and it\'s where most of the design work lived. Patients using it are stressed, often in pain, often elderly, and trying to enter sensitive medical information either on their way to the ER or while sitting in a waiting room. Almost every design decision in the app started from that user state.' },
          { type: 'h3', text: 'Step-heavy onboarding, paced to feel manageable.' },
          { type: 'p', text: 'Once a patient entered the virtual queue, they were stepped through the data the ER needed: symptoms, condition severity, optional details. Long-form input in one screen would have been unmanageable for someone in distress, so the flow was chunked into clear steps with visual progress and a constant, persistent view of triage wait time on every screen.' },
          { type: 'h3', text: 'Symptom selection through illustrations, not text or buttons.' },
          { type: 'p', text: 'For the symptom screens, the team made an accessibility-driven decision to replace text and buttons with illustrations covering symptoms like cough, nausea, and injury. Patients in stress states have reduced reading comprehension, and a visual interface is more accessible across language proficiency, age, and cognitive load. The illustrator I worked with created visuals specifically for these screens.' },
          { type: 'h3', text: 'A heat-map-style severity slider.' },
          { type: 'p', text: 'Self-reporting how you feel in numeric or descriptive terms is genuinely hard, especially when you\'re not feeling well. We designed a high-visual slider that let patients indicate severity through a heat-map gradient, removing the cognitive work of mapping a feeling to a number.' },
          { type: 'h3', text: 'Wait time visibility, hierarchy-shifted over time.' },
          { type: 'p', text: 'During onboarding, triage wait time was visible on every step but didn\'t dominate; the patient had a task in front of them. Once onboarding was complete, the wait time was promoted to a hero card on the home screen, because at that point it was the main thing the patient was sitting with. The information hierarchy shifted to match the patient\'s mental state.' },
          { type: 'h3', text: 'A condition deterioration alert.' },
          { type: 'p', text: 'ER conditions can worsen in the waiting room, and patients can\'t always advocate for themselves through normal channels. The app gave patients a direct alert button to notify a nurse if their condition deteriorated. This was the most clinically critical feature in the app and one of the design decisions I\'m most proud of.' },
          { type: 'h3', text: 'Optional medication details, designed for older users on small screens.' },
          { type: 'p', text: 'Patients in the queue could optionally enter their current medications: drug names with autocomplete, dosages, frequencies, and multi-medication entry with edit and delete. The form complexity was real, and the accessibility constraints made it harder. These screens were my favorite work on the project. Building dense, detailed input flows that remained legible and usable for older patients on small phone screens was a genuine design challenge, and getting it to work was deeply satisfying.' }
        ]
      },
      {
        id: 'accessibility',
        label: 'Accessibility',
        title: 'Accessibility shaped every screen',
        body: [
          { type: 'p', text: 'Older patients are the dominant ER demographic, which meant the accessibility constraints weren\'t a feature of the app, they were the architecture of every screen.' },
          { type: 'p', text: 'Tap targets ran around 60 pixels, well above standard mobile minimums. Form elements like radio buttons were sized larger than typical defaults. Type sizes, contrast ratios, and hit areas were all calibrated for users who might be in pain, on small-screen phones, with reduced visual acuity.' },
          { type: 'p', text: 'The trade-off was honest: the app couldn\'t be visually compact or sleek in the conventional sense. Every accessibility decision took up real estate. The aesthetic ended up sterile and clinical, which was the right answer for the domain. Patients seeing a clinical interface are reminded of where they are and what\'s happening. The app prioritized legibility and clinical clarity over consumer polish, and that was the right call.' }
        ]
      },
      {
        id: 'clinician-app',
        label: 'The clinician web app',
        title: 'The clinician web app',
        body: [
          { type: 'p', text: 'On the clinician-facing side, the web app was the operational backbone. Before Trier, nurses and doctors collected triage data manually and re-entered it across multiple systems. The web app consolidated all of that into a single screen where clinicians could see incoming patient data in real time, track observations, and prioritize triage without the duplicate-entry overhead.' },
          { type: 'p', text: 'The design work was less visually rich than the patient app but no less critical. Clinical environments demand clarity over personality, and the web app was built to support fast scanning, dense information density, and zero ambiguity at decision points.' }
        ]
      },
      {
        id: 'outcome',
        label: 'Outcome',
        title: 'Outcome',
        body: [
          { type: 'p', text: 'The pilot at Sir Charles Gairdner Hospital reported a 50% reduction in ambulance ramping, the metric used to measure ER congestion when ambulances queue outside because there\'s no capacity inside. The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital, who described how the new triage approach had changed their workflow.' },
          { type: 'p', text: 'Halving ambulance ramping isn\'t a marginal efficiency gain. It\'s a measurable shift in how the hospital absorbed peak demand, with direct implications for patient outcomes during the worst operational periods.' }
        ]
      },
      {
        id: 'takeaways',
        label: 'What I take forward',
        title: 'What Trier taught me',
        body: [
          { type: 'p', text: 'The biggest lesson I take from this project is about trading off design values when the cause warrants it.' },
          { type: 'p', text: 'I came into Trier believing good design meant clean, beautiful, easy-on-the-eyes interfaces. The accessibility constraints pushed me to a different conclusion. In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It\'s the right answer.' },
          { type: 'p', text: 'That distinction now shapes how I approach any project where users are stressed, vulnerable, or operating outside ideal conditions. The aesthetic standard isn\'t universal. The right design depends on who is using the product and under what conditions, and a sterile, functional, accessible interface can be the most respectful design choice when the user is sitting in an ER waiting room hoping to be seen.' },
          { type: 'p', text: 'If I worked on a future version of Trier, I\'d refine the visual hierarchy within the same accessibility constraints. I wouldn\'t change the philosophy. Some projects don\'t need to be reinvented in retrospect. They need to be defended.' }
        ]
      }
    ],
    keyTakeaway: 'In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It\'s the right answer.'
  }
];

const SHOWCASES = [
  {
    slug: 'livetiles-reach',
    name: 'LiveTiles Reach',
    short: 'Product redesign for an employee communications platform.',
    year: '2022',
    tags: 'Product Design, Design Systems',
    iconId: 2,
    role: 'Product Designer',
    client: 'LiveTiles',
    clientUrl: '#',
    clientLabel: 'livetiles.com',
    title: 'LiveTiles Reach',
    subtitle: 'Employee communications, redesigned.',
    lead: 'A product redesign of LiveTiles Reach, focused on improving onboarding, daily engagement, and content discovery for distributed workforces.',
    groups: [
      { label: 'Product redesign', images: [
        { label: 'Reach — Home feed', caption: 'A clearer entry point for daily use.' },
        { label: 'Reach — Authoring', caption: 'Content authoring made faster.' }
      ]}
    ]
  },
  {
    slug: 'highlabs',
    name: 'HighLabs',
    short: 'Brand identity for a medical cannabis provider in Sydney.',
    year: '2023',
    tags: 'Brand Design',
    iconId: 5,
    role: 'Brand Designer',
    client: 'HighLabs',
    clientUrl: '#',
    clientLabel: 'highlabs.au',
    title: 'HighLabs',
    subtitle: 'A clinical brand for medical cannabis.',
    lead: 'Brand identity for a Sydney-based medical cannabis provider. The system leans clinical to earn trust while staying approachable.',
    groups: [{ label: 'Brand identity', images: [{ label: 'HighLabs — Logo', caption: 'Wordmark and brand mark.' }] }]
  },
  {
    slug: 'pegasus-airlines',
    name: 'Pegasus Airlines',
    short: 'Website and in-flight menus for a major low-cost carrier.',
    year: '2017',
    tags: 'Creative Direction, Product Design',
    iconId: 6,
    role: 'Creative Director, Product Designer',
    client: 'Pegasus Airlines',
    clientUrl: '#',
    clientLabel: 'flypgs.com',
    title: 'Pegasus Airlines',
    subtitle: 'Website and in-flight menus for a major low-cost carrier.',
    lead: 'Website and in-flight menu system for Pegasus Airlines, designed to scale across routes, languages, and the on-board experience.',
    groups: [
      { label: 'Website', images: [{ label: 'Pegasus — Booking flow', caption: 'A streamlined booking flow.' }] },
      { label: 'In-flight menus', images: [{ label: 'Pegasus — In-flight menu', caption: 'In-flight collateral.' }] }
    ]
  }
];

window.AVALON_DATA = { CASE_STUDIES, SHOWCASES };
