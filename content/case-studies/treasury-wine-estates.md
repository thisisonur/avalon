<!--
EDITING GUIDE — Treasury Wine Estates
Source of truth in code: src/data/caseStudies.js (slug: treasury-wine-estates)

- Edit the COPY freely (titles, subtitles, paragraphs, list items, captions, quotes).
- Keep the structural labels in (parentheses) and the headings — they tell Claude
  where each piece of copy belongs when applying your edits back to the data file.
- Leave image paths and the slug alone unless you say otherwise.
- **bold** maps to <strong>; *italic* maps to <em>. Links are written as [text](url).
- When you're done, ask Claude to "update the copies from the MD files".
-->

# Treasury Wine Estates

## Card & Metadata
- Slug: treasury-wine-estates
- Card name: Treasury Wine Estates
- Card short (home card): A multi-brand design system for ten wine brands and one global parent on a shared architecture.
- Card subtitle: Design Systems Designer
- Read time: 5 min read
- Year: 2023
- Duration: 6 months
- Role: Design System Designer
- Client: Treasury Wine Estates
- Client URL: https://www.tweglobal.com/
- Client label: TWE Global
- Key takeaway: Architecture has to match its operational context. The most elegant system is the wrong one if it doesn't fit the project's timeline, ownership model, and maintenance horizon.

## Page Header
- Title: Treasury Wine Estates
- Subtitle: A multi-brand design system for ten wine brands and one global parent, built to let each brand stay itself inside a shared architecture.

## Facts Panel
- Role: Design System Designer
- Year: 2023
- Client: [Treasury Wine Estates](https://www.tweglobal.com/)
- Brands: Treasury Wine Estates Global, Matua, Coastal Reserve, Lindeman's, Pepperjack, St Hubert's The Stag, Squealing Pig, Blossom Hill, Devil's Lair, Yellowglen
- Scope: 10 brand sites + 1 global parent, 6-month delivery
- Reading time: ~5 min

## Quick Context
**Eleven websites, ten brand sites and one global parent, built within six months on a shared foundation.** The brands ranged from bright and geometric to dark and classical, monochrome to maximalist. The system had to absorb that range without flattening it.

## Sections

### The central question

Treasury Wine Estates needed eleven websites, ten brand sites and one global parent, built within six months on a shared foundation. The brief sounded like a typical multi-brand DS project, but the real problem was harder than it looked. How do you build one system that lets eleven brands stay genuinely themselves, when their visual identities have almost nothing in common?

This wasn't eleven variations on a theme. The brands ranged from bright and geometric to dark and classical. Some leaned ocean-serif elegant; others were quirky, illustrated, and maximalist. One was monochrome with handwriting fonts; another was pastel with restrained sans-serifs. They weren't different colorways. They were different design languages.

The system had to absorb that range without flattening it. That tension shaped every decision in the project.

(figure caption) Brand identity range across the eleven Treasury Wine Estates sites — from geometric to classical, monochrome to maximalist.

### My role and the architecture

The headless, atomic foundation was set by the team lead before my work began. We aligned on the structural approach in early workshops, and from there I owned the brand-token architecture across all eleven sites, the layer where each brand's identity was encoded into the system.

(h3) What I owned
- Brand-token architecture across all eleven sites
- All components and layouts built in Figma
- Interaction design on a subset of brand sites, giving me a direct feedback loop on how the brand-token layer performed in real design work

(h3) What the team contributed
- Team lead — set the headless, atomic foundation
- Interaction designers — carried brand-specific surface treatments (photography, parallax, custom imagery) where the system's structural skeleton couldn't
- Engineering — built and maintained the pipeline

The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook into a Storybook CMS that was delivered to all eleven brand marketing teams.

### Encoding identity through tokens

Each brand got its own set of tokens for color, typography, border radii, spacing, sizing, and line-height. The hardest decisions came from brands whose identities pushed against system constraints.

(decision card) Color, when brand identity meets accessibility
Some brands carried colors that failed contrast on white surfaces. Rather than accept the accessibility failure or override the brand, I introduced parallel color ramps in the primitives, accessibility-safe variants close to the original brand colors. Interactive and text-bearing semantic tokens resolved to the accessibility-safe variants by default. Surface-level semantic tokens could still consume the original brand color, since contrast risk was managed by the foreground tokens that sat on top. Accessibility was enforced architecturally, not by convention.
(figure caption) Dual-ramp token architecture. Where a brand color failed contrast, an accessibility-safe primitive sat alongside it, and semantic tokens resolved to the safe variant by default. The same pattern applied across every brand on the project.

(decision card) Typography, when ornate display fonts break the system
Several brands provided distinctive display fonts that defined their identity but couldn't carry the full type system. I extended each brand's type system with secondary and tertiary fonts — Google Fonts equivalents that resonated with the brand's character but worked safely across components. The signature font was preserved for headings; the system-safe alternatives carried body, captions, and UI labels.

(decision card) Vertical rhythm as a brand-customizable layer
For brands whose display fonts broke spacing assumptions, I added line-height tokens at the brand-semantic level — not as per-component patches but as proper semantic overrides. Vertical rhythm became a brand-customizable layer, recognizing that typography identity lives in spacing relationships as much as in the font itself.

### Governance: what the system should and shouldn't absorb

A multi-brand system survives or fails based on what the team chooses to put inside it. The project started with explicit scoping. Before kickoff, I built a detailed inventory of every component, variation, state, pattern, and layout the system would support, and got client approval. That document became the basis for every later conversation about what was and wasn't in the system.

As work progressed, new ideas surfaced naturally. Most fit within the system. Some could be solved cleanly by extending or creatively reusing what was already there. Others were structurally different enough that absorbing them would have introduced ambiguity into components that needed to stay clear; those were built as bespoke work for the brand that needed them, kept outside the shared system. The boundary was visible and intentional. The system stayed clean, the brand got what it needed, and the architecture didn't carry the cost of single-use exceptions.

### When scope expanded during the work

The scope expanded during the project. New page types, layout variations, and component needs surfaced as the work progressed, particularly for the Global site, which grew in complexity beyond what the original scope anticipated. The architecture was built to absorb that kind of growth.

I added the new components within the existing system, using the same primitives and architectural conventions. No primitive-level changes were needed. A small number of new semantic tokens were added. Once the components existed, they were available to any brand, and some were later adopted by brand sites that hadn't originally needed them. The architecture absorbed the additions without breaking, and the new work strengthened the shared foundation rather than fragmenting it.

(figure caption) Global site — late-stage layout and component additions that grew out of the same primitive layer.

### The trade-off the system couldn't solve on its own

The system shipped on time, on scope, and architecturally sound. It also had a real limit, one worth naming honestly.

Customization at the token level (color, type, spacing, line-height) enabled rich surface-level brand differentiation. What it couldn't enable on its own was form-level expression. Every brand site shared the same underlying component shapes and layout vocabularies, so the structural skeleton across brands was similar.

In practice, the gap was filled by close collaboration with the interaction designers on the project. Distinctive photography, expressive background imagery, and bespoke surface treatments like parallax effects were layered on top of the system to carry each brand's look and feel where the structure couldn't. The DS handled the structural and accessible foundation; the surface treatments brought the personality forward. The result was that brands felt genuinely different even though the underlying layouts were related.

(pull quote) Tokens got us far, but they couldn’t solve everything. The moment brands wanted distinct component shapes, the limits of the architecture became obvious.

(figure caption) Surface treatments — photography, parallax, and brand imagery layered on top of the shared structural skeleton.

### Architectural choice: forking, not theming

Rather than building a runtime theming architecture, with one source of truth and brand layers that switch dynamically, we shipped a fork-per-brand approach. The headless system was duplicated for each brand, and the primitive and semantic layers were modified within each fork.

This was the right shape for the project. Eleven brand sites, six-month delivery, no requirement for runtime brand-switching. A theming architecture is a different operational model: it requires shared tooling, shared maintenance, and longer maintenance horizons than this project was scoped for. The cost of forking is governance over time, since future system-level changes have to propagate across multiple libraries, and that cost was understood and accepted at the project level.

### Outcome

(outcome headline) Eleven sites launched within the six-month window. Still in production today.
(outcome body) Maintained by the client's brand teams in the Storybook CMS. The team's velocity increased across the project, not because the system grew significantly, but because the workflow, tooling, and conventions became second nature as we went.
(outcome body) The architecture absorbed late-stage scope expansions without breaking, and the trade-offs were known, named, and chosen deliberately.

### What I’d do differently on the next multi-brand system

Looking back, the architecture succeeded because it matched the project. Eleven sites, six months, and no requirement for runtime brand switching. A different context would have justified a different system. This one worked because it matched the operational reality rather than an idealized future state. I now scope the architecture to fit the operational reality from the start, including how teams will work with it, not just how it works in theory.

The second is that brand identity at scale is a problem of how much of a brand the system can carry, not just how cleanly the system can be themed. Surface-level tokens are necessary but not sufficient. The next version of multi-brand DS work I'd architect would expose form-level variants too, letting brands express identity through component shape. That's where multi-brand systems have the most room to grow, and it's the direction I want to take this kind of work next.
