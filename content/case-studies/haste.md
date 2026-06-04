<!--
EDITING GUIDE — HASTE
Source of truth in code: src/data/caseStudies.js (slug: haste)

- Edit the COPY freely (titles, subtitles, paragraphs, list items, captions, quotes).
- Keep the structural labels in (parentheses) and the headings — they tell Claude
  where each piece of copy belongs when applying your edits back to the data file.
- Leave image paths and the slug alone unless you say otherwise.
- **bold** maps to <strong>; *italic* maps to <em>. Links are written as [text](url).
- When you're done, ask Claude to "update the copies from the MD files".
-->

# HASTE

## Card & Metadata
- Slug: haste
- Card name: HASTE
- Card short (home card): A tokenized design system and methodology for igniting new client projects from a shared start.
- Card subtitle: Design Systems Designer
- Read time: 4 min read
- Year: 2024
- Duration: 12 months
- Role: Design System Designer
- Client: Hide and Seek Digital
- Client URL: #
- Client label: HASTE overview
- Key takeaway: A great system that no one uses is worth less than a simpler system the team can confidently work with. Adoption is its own design problem.

## Page Header
- Title: HASTE
- Subtitle: A headless, tokenized design system and methodology for starting every client design system from the same place.

## Facts Panel
- Role: Design System Designer
- Year: 2024
- Duration: 12 months
- Client: Internal system for [Hide and Seek Digital](https://hideandseek.digital/)
- Used on: Australian Federal Police, Relate
- Reading time: ~4 min

## Quick Context
**A tokenized design system and a documented methodology, built as an R&D initiative to give Hide and Seek Digital a shared starting point for every client engagement.** Used as the foundation for client work during my time at Hide and Seek Digital, including projects for the Australian Federal Police and Relate. Presented externally at a Storyblok webinar attended by around a hundred people.

## Sections

### What HASTE was for

Every new client engagement at the agency started from zero. Designers reinvented foundations from scratch, or stitched together components borrowed from past projects and adapted them by hand. The output was inconsistent, the kickoffs were slow, and the same architectural problems were being solved over and over again by different people.

HASTE was scoped as an R&D initiative to change that. The goal wasn't just a component library. It was a tokenized foundation, a documented methodology, and a workflow for igniting new client design systems from a shared starting point. The brief I owned was both to build the system and to make it adoptable.

### The system

HASTE is a tokenized component and pattern library built in Figma with Tokens Studio. The token architecture covers color, typography, border radii, spacing, sizing, and line-height, structured in primitive and semantic layers from day one. Components and patterns cover the foundations of typical client engagements: buttons, forms, navigation, content layouts, and the structural elements that appear on most projects.

The library was architected to support web, mobile, and web-app projects through shared primitives. Coverage was deliberately partial. Most components were single-platform; a smaller subset had multi-platform variants. The architecture made room for the system to grow as new client work demanded it, rather than locking HASTE into web-only assumptions before that breadth was needed.

The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook. The same operational shape every client engagement would inherit when they spun up a system on top of HASTE.

(figure caption) HASTE — tokenized foundations and pattern library built in Figma with Tokens Studio.

### The methodology

The library was the smaller half of the deliverable. The bigger half was making sure HASTE could actually be used. Three artifacts carried that work.

(decision card) The HASTE Handbook
A detailed reference that documented the architecture, naming conventions, token logic, and component usage. The handbook included video tutorials so anyone learning the system could see Tokens Studio in motion, not just read about it.

(decision card) Workflow diagrams
Diagrams showed exactly how to ignite a new client design system based on HASTE. They covered the steps from forking the foundation to establishing client-specific tokens, plus troubleshooting paths for the situations teams ran into most often.

(decision card) A training program for designers
Two-hour sessions every week for two months, working from a shared Tokens Studio repo, with hands-on practice on real component scenarios. Sessions were recorded so they could be referenced after the fact, and the same material was woven into the handbook for self-serve learning.

(figure caption) Methodology artifacts — the HASTE Handbook and workflow diagrams.

Together, the system and the methodology were designed to outlast any single person on the team. The handbook, the recorded sessions, and the workflow diagrams gave the agency a complete starting kit that could be picked up by new designers without requiring a live walkthrough.

The methodology also traveled outside the agency. I co-presented HASTE with the dev lead at a Storyblok webinar attended by around a hundred people, walking through the token pipeline live and showing how a tokenized foundation flows from Tokens Studio into Storybook in practice.

(figure caption) Storyblok webinar — co-presenting the token pipeline live, walking through Tokens Studio into Storybook in practice.

### What I learned about adoption

Designing the system was the smaller half of the work. Getting it adopted was the harder half, and HASTE taught me that adoption is a tooling problem and a communication problem at the same time.

Some designers picked up Tokens Studio quickly. Others struggled with it. That difference had a bigger impact on adoption than any architectural decision I made. The more friction people felt in the tooling, the faster they fell back to old habits. The training program was structured around both: hands-on tooling practice, and documentation written to be read under pressure.


(pull quote) Designing the system was the smaller half of the work. Getting it adopted was the harder half.

### Where the architecture had a cost

HASTE shipped as a fork-per-brand system, the same architecture that had worked on the agency's earlier multi-brand projects. Each new client engagement forked the headless foundation and customized the primitive and semantic layers for that client.

The architecture worked, but it had an adoption cost I didn't fully anticipate. Every new client engagement required the team to internalize the full fork-and-retokenize flow, which made onboarding slower than it needed to be. The training program absorbed that cost, but the cost was real.

If I were starting HASTE today, I'd architect it around theming from day one. Not because theming is universally better, but because the operational model is conceptually simpler: the foundation stays put and brand layers swap on top. That simplicity translates directly to faster team adoption, but only if the team accepts and commits to the tooling the theming model depends on. The architecture's advantage lives entirely in the tooling; without that buy-in, you've added a layer of abstraction without gaining the operational benefit. Tooling acceptance is the condition the whole argument rests on.

(figure caption) Fork-per-brand vs. theming — two operational shapes for a tokenized foundation, each with its own adoption cost.

### Outcome

(outcome headline) HASTE became the foundation for new client engagements during my time at the agency.
(outcome body) Used on projects including the Australian Federal Police and Relate. The system, the handbook, the recorded training, and the workflow diagrams remained as the agency's starting kit when I transitioned out. Day-to-day stewardship moved to the team.
(outcome body) Working on Relate as an interaction designer, I experienced HASTE from the consumer side: the foundation made room for brand-specific components rather than basic ones, which is exactly the value the system was designed to deliver.

### What HASTE taught me about systems work

Two lessons I carry forward from this project.

The first is that documentation is part of the system, not a wrapper around it. The HASTE Handbook and the workflow diagrams weren't supplementary. They were the difference between a system that lives only in the architect's head and a system other people can pick up and use. And as AI agents increasingly work inside design systems, the quality of that documentation determines what they can do too. Thorough documentation is no longer just for humans; it's the interface the AI consumes as well. I now scope documentation as a deliverable from the start, not as a thing that gets written at the end.

The second is that adoption is its own design problem. A great system that no one uses is worth less than a simpler system that the team can confidently work with. Architecting for adoption, choosing the operational model that matches the team's tooling fluency, pacing the training, and writing documentation people actually want to read, is as much of the work as architecting the system itself.
