# Treasury Wine Estates

**A multi-brand design system for ten wine brands and one global parent, built to let each brand stay itself inside a shared architecture.**

---

**Role & Duration**
Design System Designer, 2023

**Client**
Treasury Wine Estates
Brands supported included Treasury Wine Estates Global, Matua, Coastal Reserve, Lindeman's, Pepperjack, St Hubert's The Stag, Squealing Pig, Blossom Hill, Devil's Lair, and Yellowglen.

---

## The central question

Treasury Wine Estates needed eleven websites, ten brand sites and one global parent, built within six months on a shared foundation. The brief sounded like a typical multi-brand DS project, but the real problem was harder than it looked. How do you build one system that lets eleven brands stay genuinely themselves, when their visual identities have almost nothing in common?

This wasn't eleven variations on a theme. The brands ranged from bright and geometric to dark and classical. Some leaned ocean-serif elegant; others were quirky, illustrated, and maximalist. One was monochrome with handwriting fonts; another was pastel with restrained sans-serifs. They weren't different colorways. They were different design languages.

The system had to absorb that range without flattening it. That tension shaped every decision in the project.

---

## My role and the architecture I worked within

The headless, atomic foundation was set by the team lead before my work began. We aligned on the structural approach in early workshops, and from there I owned the brand-token architecture across all eleven sites, the layer where each brand's identity was encoded into the system. I also built all the components and layouts in Figma, and designed the interfaces on a subset of the brand sites, which gave me a direct feedback loop on how the brand-token layer performed in real design work.

The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook into a Storybook CMS that was delivered to all eleven brand marketing teams.

---

## Encoding identity through tokens

Each brand got its own set of tokens for color, typography, border radii, spacing, sizing, and line-height. The hardest decisions came from brands whose identities pushed against system constraints.

**Color, when brand identity meets accessibility.** Yellowglen's brand color is a saturated yellow that fails contrast on white surfaces. The naive options were both bad: accept the accessibility failure, or override the brand. Instead, I introduced a parallel color ramp in the primitives, an accessibility-safe variant close to the brand color. The semantic tokens resolved to the accessible variant, while the original brand color remained available for decorative use. Accessibility was enforced architecturally, not by convention.

**Typography, when ornate display fonts break the system.** Several brands provided distinctive display fonts that defined their identity but couldn't carry the full type system. I extended each brand's type system with secondary and tertiary fonts, Google Fonts equivalents that resonated with the brand's character but worked safely across components. The signature font was preserved for headings and display use; body, captions, and UI labels were carried by the system-safe alternatives. Each substitution was approved by the client.

For brands whose display fonts still broke spacing assumptions, I added line-height tokens at the brand-semantic level, not as per-component patches but as proper semantic overrides. Vertical rhythm became a brand-customizable layer, recognizing that typography identity lives in spacing relationships as much as in the font itself.

---

## Governance: knowing what the system should and shouldn't absorb

A multi-brand system survives or fails based on what the team chooses to put inside it. The project started with explicit scoping. Before kickoff, I built a detailed inventory of every component, variation, state, pattern, and layout the system would support, and got client approval. That document became the basis for every later conversation about what was and wasn't in the system.

As work progressed, new ideas surfaced naturally. Most fit within the system. Some could be solved cleanly by extending or creatively reusing what was already there. Others were structurally different enough that absorbing them would have introduced ambiguity into components that needed to stay clear; those were built as bespoke work for the brand that needed them, kept outside the shared system. The boundary was visible and intentional. The system stayed clean, the brand got what it needed, and the architecture didn't carry the cost of single-use exceptions.

---

## When scope expands during the work

The Global site was always part of the scope, but it grew during the project. New page types, layout variations, and component needs surfaced as the work progressed. The architecture was built to absorb it.

I added the new components within the existing system, using the same primitives and architectural conventions. No primitive-level changes were needed. A small number of new semantic tokens were added. Once the components existed, they were available to any brand, and some were later adopted by brand sites that hadn't originally needed them. The architecture absorbed the additions without breaking, and the new work strengthened the shared foundation rather than fragmenting it.

---

## The trade-off the system couldn't solve on its own

The system shipped on time, on scope, and architecturally sound. It also had a real limit, one worth naming honestly.

Customization at the token level (color, type, spacing, line-height) enabled rich surface-level brand differentiation. What it couldn't enable on its own was form-level expression. Every brand site shared the same underlying component shapes and layout vocabularies, so the structural skeleton across brands was similar.

In practice, the gap was filled by close collaboration with the UI designers on the project. Distinctive photography, expressive background imagery, and bespoke surface treatments like parallax effects were layered on top of the system to carry each brand's look and feel where the structure couldn't. The DS handled the structural and accessible foundation; the surface treatments brought the personality forward. The result was that brands felt genuinely different even though the underlying layouts were related.

This is a known trade-off in multi-brand DS work. The architecture we shipped was the right shape for the project's brief and timeline, but it's also where multi-brand systems always have more room to grow.

---

## Architectural choice: forking, not theming

Rather than building a runtime theming architecture, with one source of truth and brand layers that switch dynamically, we shipped a fork-per-brand approach. The headless system was duplicated for each brand, and the primitive and semantic layers were modified within each fork.

This was the right shape for the project. Eleven brand sites, six-month delivery, no requirement for runtime brand-switching. A theming architecture is a different operational model: it requires shared tooling, shared maintenance, and longer maintenance horizons than this project was scoped for. The cost of forking is governance over time, since future system-level changes have to propagate across multiple libraries, and that cost was understood and accepted at the project level.

---

## Outcome

All eleven sites launched within the six-month window. They remain in production today, maintained by the client's brand teams in the Storybook CMS. The team's velocity increased across the project, not because the system grew significantly, but because the workflow, tooling, and conventions became second nature as we went.

---

## What I take into multi-brand work now

Two lessons shape how I approach multi-brand DS work today.

The first is that architecture has to match its operational context. The most elegant system is the wrong one if it doesn't fit the project's timeline, ownership model, and maintenance horizon. I now scope the architecture to fit the operational reality from the start, including how teams will work with it, not just how it works in theory.

The second is that brand identity at scale is a problem of how much of a brand the system can carry, not just how cleanly the system can be themed. Surface-level tokens are necessary but not sufficient. The next version of multi-brand DS work I'd architect would expose form-level variants too, letting brands express identity through component shape. That's where multi-brand systems have the most room to grow, and it's the direction I want to take this kind of work next.
