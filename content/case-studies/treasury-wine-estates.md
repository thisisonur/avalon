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
- Brands: Treasury Wine Estates Global, Matua, Coastal Reserve, Lindeman's, Pepperjack, St Hubert's, The Stag, Squealing Pig, Blossom Hill, Devil's Lair, Yellowglen
- Scope: 10 brand sites + 1 global parent, 6-month delivery
- Reading time: ~5 min

## Quick Context
**Eleven websites, ten brand sites and one global parent, built within six months on a shared foundation.** The brands ranged from bright and geometric to dark and classical, monochrome to maximalist. The system had to absorb that range without flattening it.

## Sections

### The central question

The brief sounded like a typical multi-brand DS project, but the real problem was harder than it looked. How do you build one system that lets eleven brands stay themselves genuinely, when their visual identities have almost nothing in common?

This wasn't eleven variations on a theme. The brands ranged from bright and geometric to dark and classical. Some leaned ocean-serif elegant; others were quirky, illustrated, and maximalist. One was monochrome with handwriting fonts; another was pastel with restrained sans-serifs. They weren't different colorways. They were different design languages.

The system had to absorb that range without flattening it. That tension shaped every decision in the project.

(figure caption) Brand identity range across the eleven Treasury Wine Estates sites — from geometric to classical, monochrome to maximalist.

### My role and the architecture

From early workshops, I took ownership of the brand-token architecture across all eleven sites, the layer where each brand's identity was encoded into the system.

(h3) What I owned
- Discovery workshops with the client to define and lock the system structure
- Brand-token architecture across all eleven sites
- Components and layouts built in Figma
- Interaction design on a subset of brand sites to test how the token layer held up in practice

(h3) What the team contributed
- Design lead — led the design process and supervised the building of the design system
- Interaction designers — carried brand-specific surface treatments (photography, parallax, custom imagery) where the system's structural skeleton couldn't
- Dev lead — built and maintained the pipeline, guiding the frontend developers
- Business analyst — maintained the project objectives and managed the ticketing

The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook into a Storybook CMS that was delivered to all eleven brand marketing teams.

### Encoding identity through tokens

Each brand got its own set of tokens for color, typography, border radii, spacing, sizing, and line-height. The hardest decisions came from brands whose identities pushed against system constraints.

(decision card) Color, when brand identity meets accessibility
Some brands carried colors that failed contrast on white surfaces. Rather than accept the accessibility failure or override the brand, I introduced parallel color ramps in the primitives, accessibility-safe variants close to the original brand colors. Interactive and text-bearing semantic tokens resolved to the accessibility-safe variants by default. Surface-level semantic tokens could still consume the original brand color, since contrast risk was managed by the foreground tokens that sat on top. Accessibility was enforced architecturally, not by convention.
(figure caption) Dual-ramp token architecture. Where a brand color failed contrast, an accessibility-safe primitive sat alongside it, and semantic tokens resolved to the safe variant by default. The same pattern applied across every brand on the project.

(decision card) Typography, when ornate display fonts break the system
Several brands provided distinctive display fonts that defined their identity but couldn't carry the full type system. I extended each brand's type system with secondary and tertiary fonts, using Google Fonts equivalents that resonated with the brand's character but worked safely across components. The signature font was preserved for headings; the system-safe alternatives carried body, captions, and UI labels. Where those display fonts also broke spacing assumptions, I added line-height tokens at the brand-semantic level, not as per-component patches but as proper semantic overrides. Typography identity lives in spacing relationships as much as in the font itself, so vertical rhythm became a brand-customizable layer too.

### Governance: what the system should and shouldn't absorb

A multi-brand system survives or fails based on what the team chooses to put inside it. Before kickoff, I built a detailed inventory of every component, variation, state, pattern, and layout the system would support, and got client approval. That document became the basis for every later conversation about what was and wasn't in the system.

As work progressed, new ideas surfaced naturally. Most fit within the system. Some could be solved cleanly by extending or creatively reusing what was already there. Others were structurally different enough that absorbing them would have introduced ambiguity into components that needed to stay clear; those were built as bespoke work for the brand that needed them, kept outside the shared system. The system stayed clean, the brand got what it needed, and the architecture didn't carry the cost of single-use exceptions.

### When scope expanded during the work

The scope expanded during the project. New page types, layout variations, and component needs surfaced as the work progressed, particularly for the Global site, which grew in complexity beyond what the original scope anticipated. The architecture was built to absorb that kind of growth.

I added the new components using the same primitives and architectural conventions, with only a small number of new semantic tokens. Once built, they were available to any brand, and several were later adopted by sites that hadn't originally needed them. The architecture absorbed the additions cleanly and the foundation came out stronger for it.

(figure caption) Global site — late-stage layout and component additions that grew out of the same primitive layer.

### The trade-off the system couldn't solve on its own

The system shipped on time, on scope, and architecturally sound. Token-level customization gave each brand a distinct surface, but it couldn't change the underlying shapes. Every brand site shared the same component structures and layout vocabulary, so the skeleton across the eleven sites was structurally similar.

The interaction designers closed that gap. Distinctive photography, expressive background imagery, and bespoke surface treatments like parallax effects were layered on top to carry each brand's personality where the structure couldn't. The system handled the foundation; the surface work brought the character forward. Brands ended up feeling genuinely different even though the underlying layouts were related.

(pull quote) Tokens got us far, but they couldn’t solve everything. The moment brands wanted distinct component shapes, the limits of the architecture became obvious.

(figure caption) Surface treatments — photography, parallax, and brand imagery layered on top of the shared structural skeleton.

### Architectural choice: forking, not theming

We shipped a fork-per-brand approach rather than a runtime theming architecture. The headless system was duplicated for each brand, with the primitive and semantic layers modified within each fork.

Eleven sites, six-month delivery, no runtime brand-switching required. Forking was the right fit. A theming architecture would have been a different commitment: shared tooling across the team, shared maintenance, and longer operational horizons than the project was scoped for. The cost of forking is governance over time, since system-level changes have to propagate across multiple libraries. That trade-off was understood and accepted.

### Outcome

(outcome headline) Eleven sites launched within the six-month window. Still in production today.
(outcome body) Maintained by the client's brand teams in the Storybook CMS. The team's velocity increased across the project, not because the system grew significantly, but because the workflow, tooling, and conventions became second nature as we went.
(outcome body) The architecture absorbed late-stage scope expansions without breaking, and the trade-offs were known, named, and chosen deliberately.

### What I’d do differently on the next multi-brand system

Looking back, the architecture succeeded because it matched the project. Eleven sites, six months, and no requirement for runtime brand switching. A different context would have justified a different system. This one worked because it matched the operational reality rather than an idealized future state. I now scope the architecture to fit the operational reality from the start, including how teams will work with it, not just how it works in theory.

The second is that brand identity at scale is a problem of how much of a brand the system can carry, not just how cleanly the system can be themed. Surface-level tokens are necessary but not sufficient. The next version of multi-brand DS work I'd architect would expose form-level variants too, letting brands express identity through component shape. That's where I want to take this kind of work next.
