# HASTE

**A headless, tokenized design system built to be the agency's first internal foundation, and a methodology for starting every client design system from the same place.**


**Role & Duration**
Design System Designer and System Advocate, 2023, 18 months

**Client**
Internal system for Hide and Seek Digital. Used as the foundation for client engagements during my time at the agency, including projects for the Australian Federal Police and Relate.

---

## What HASTE was for

Every new client engagement at the agency started from zero. Designers reinvented foundations from scratch, or stitched together components borrowed from past projects and adapted them by hand. The output was inconsistent, the kickoffs were slow, and the same architectural problems were being solved over and over again by different people.

HASTE was scoped as an R&D initiative to change that. The goal wasn't just a component library. It was a tokenized foundation, a documented methodology, and a workflow for igniting new client design systems from a shared starting point. The brief I owned was both: build the system, and make it adoptable.

---

## The system

HASTE is a tokenized component and pattern library built in Figma with Tokens Studio. The token architecture covers color, typography, border radii, spacing, sizing, and line-height, structured in primitive and semantic layers from day one. Components and patterns cover the foundations of typical client engagements: buttons, forms, navigation, content layouts, and the structural pieces that show up on most projects.

The library was architected to support web, mobile, and web-app projects through shared primitives. Coverage was deliberately partial. Most components were single-platform; a smaller subset had multi-platform variants. The architecture made room for the system to grow as new client work demanded it, rather than locking HASTE into web-only assumptions before that breadth was needed.

The pipeline ran tokens through Tokens Studio and Figma, exported to JSON, transformed through Style Dictionary, validated in Chromatic, and shipped through Storybook. The same operational shape every client engagement would inherit when they spun up a system on top of HASTE.


---

## The methodology

The library was the smaller half of the deliverable. The bigger half was making sure HASTE could actually be used.

I built three pieces around the system:

A detailed **HASTE Handbook** that documented the architecture, naming conventions, token logic, and component usage. The handbook included video tutorials so anyone learning the system could see Tokens Studio in motion, not just read about it.

A set of **workflow diagrams** that showed exactly how to ignite a new client design system based on HASTE. The diagrams covered the steps from forking the foundation to establishing client-specific tokens, plus troubleshooting paths for the situations teams ran into most often.

A **training program** for designers on the team. Two-hour sessions every week for two months, working from a shared Tokens Studio repo, with hands-on practice on real component scenarios. The sessions were recorded so they could be referenced after the fact, and the same material was woven into the handbook for self-serve learning.

Together, the system and the methodology were designed to outlast any single person on the team. The handbook, the recorded sessions, and the workflow diagrams gave the agency a complete starting kit that could be picked up by new designers without requiring a live walkthrough.

The methodology also traveled outside the agency. I co-presented HASTE with the dev lead at a Storyblok webinar attended by around a hundred people, walking through the token pipeline live and showing how a tokenized foundation flows from Tokens Studio into Storybook in practice.


---

## What I learned about adoption

Designing the system was the smaller half of the work. Getting it adopted was the harder half, and HASTE taught me that adoption is a tooling problem and a communication problem at the same time.

Tooling fluency across the team determines whether the system can actually be used. Theoretical elegance doesn't survive contact with delivery deadlines, and information that isn't clean, direct, and easy to digest gets bypassed. The training program was structured around both: hands-on tooling practice, and documentation written to be read under pressure.

Adoption is also never fully won. Introducing a new methodology mid-stride means some of the team takes to it quickly and others work with it on their own terms. That's the reality of changing how an agency operates, and it's why I've come to think of adoption work as continuous, not as a phase that ends.


---

## Where the architecture had a cost

HASTE shipped as a fork-per-brand system, the same architecture that had worked on the agency's earlier multi-brand projects. Each new client engagement forked the headless foundation and customized the primitive and semantic layers for that client.

The architecture worked, but it had an adoption cost I didn't fully anticipate. Every new client engagement required the team to internalize the full fork-and-retokenize flow, which made onboarding slower than it needed to be. The training program absorbed that cost, but the cost was real.

If I were starting HASTE today, I'd architect it around theming from day one. Not because theming is universally better, but because the operational model is conceptually simpler: the foundation stays put and brand layers swap on top. That simplicity translates directly to faster team adoption, which is the part of system work that determines whether the rest of it succeeds.


---

## Outcome

HASTE was used as the foundation for client engagements during my time at the agency, including projects for the Australian Federal Police and Relate. Working on Relate as an interaction designer, I experienced HASTE from the consumer side: the foundation made room for brand-specific components rather than basic ones, which is exactly the value the system was designed to deliver.

The system, the handbook, the recorded training, and the workflow diagrams remained as the agency's starting kit when I transitioned out. Day-to-day stewardship moved to the team.

---

## What HASTE taught me about systems work

Two lessons I carry forward from this project.

The first is that documentation is part of the system, not a wrapper around it. The HASTE Handbook and the workflow diagrams weren't supplementary. They were the difference between a system that lives only in the architect's head and a system other people can pick up and use. And as AI agents increasingly work inside design systems, the quality of that documentation determines what they can do too. Thorough documentation is no longer just for humans; it's the interface the AI consumes as well. I now scope documentation as a deliverable from the start, not as a thing that gets written at the end.

The second is that adoption is its own design problem. A great system that no one uses is worth less than a simpler system that the team can confidently work with. Architecting for adoption, choosing the operational model that matches the team's tooling fluency, pacing the training, and writing documentation people actually want to read, is as much of the work as architecting the system itself.
