# Trier: My Emergency Visit

---

## Component specifications

This case study introduces five new components. Each one is specified below with purpose, structure, content slots, and layout behavior. Build these once and reuse across the other case studies where applicable. The case study content begins after the spec section.

---

### Component 1 — Quick Context Callout

**Purpose**
A short, scannable lead block placed near the top of the case study, above or just below the hero image. Surfaces the single strongest claim or outcome so a scanning reader catches it before reading any prose. Used once per case study.

**Visual structure**
A horizontally bounded block, visually distinct from body text (background tint, border, or accent rule on the left edge). Compact. Sits in the main content column, not as a sidebar.

**Content slots**
- Small label at the top (e.g., "Quick context" or "At a glance"). Uppercase or mono treatment to differentiate from headings.
- A short body of 2-4 sentences. The first sentence should contain the headline claim or metric in bold. Supporting sentences add minimal context.

**Layout behavior**
Full content width, not centered. Single column. No icons, no decorative elements. Quiet, declarative, confident.

**Variants**
None for now. One treatment, used consistently across case studies.

---

### Component 2 — Project Facts Panel

**Purpose**
Replaces the traditional bold-label metadata block at the top of a case study (Role, Year, Client, etc.). Faster to scan, structurally cleaner than free-form labels.

**Visual structure**
A two-column key/value layout. Left column is the field label (small, lighter weight, possibly muted). Right column is the value (regular body weight). Rows separated by a thin divider or whitespace.

**Content slots**
A flexible list of field/value pairs. Fields typically include: Role, Year, Client, Pilot site, Outcome, Reading time. Number of rows varies per case study (5-7 typical).

**Layout behavior**
Sits below the case study title and subtitle. In a single content column, not as a sidebar. Each row is one line on desktop, can wrap on mobile. The label column should be a fixed proportion (suggest ~30% of the panel width) so values align cleanly.

**Variants**
None.

---

### Component 3 — Decision Card

**Purpose**
A card used within a grid to display one design decision, principle, or feature. Used when a section contains 4-6 enumerable items that each deserve their own visual beat. The Trier patient app section is the canonical use case (six decisions).

**Visual structure**
Each card is a self-contained block with:
- An icon at the top or top-left (small, ~32-40px)
- A short title (~3-7 words), set as a sub-heading
- A body paragraph (2-4 sentences)

Cards have a light background tint, subtle border, or both. Sufficient internal padding to feel breathable.

**Content slots**
- Icon (single glyph or symbol; no decorative illustrations)
- Title (text)
- Body (paragraph)

**Layout behavior**
Cards display in a responsive grid. Suggested behavior:
- Desktop: 2 columns or 3 columns depending on case study density (Trier works well with 2 columns and three rows of two)
- Tablet: 2 columns
- Mobile: 1 column, stacked

All cards in a grid should be equal height (the tallest card's content sets the row height; shorter cards have extra trailing whitespace).

**Variants**
None. One card style, reused across the portfolio.

---

### Component 4 — Pull Quote

**Purpose**
Visually elevates a single sentence or short passage that captures a senior insight. Used sparingly — typically once per case study, in the section where the strongest reflective moment lives.

**Visual structure**
A short text block, visually distinct from surrounding prose. Larger type size than body (suggest 125-140% of body), looser line-height. May include a leading mark (a long horizontal rule, a left accent rule, or an oversized opening quotation mark — designer's choice). No author attribution needed since it's the case study author speaking.

**Content slots**
- The quote text (1-2 sentences, max ~30 words)

**Layout behavior**
Sits inline within the body content column, not breaking out into a sidebar. Generous vertical whitespace above and below to separate it from surrounding prose.

**Variants**
None.

---

### Component 5 — Outcome Callout

**Purpose**
A visually weighted block that announces the case study's outcome with the strongest framing available. Used once per case study, in the Outcome section. Different from the Quick Context Callout: that one teases the metric at the top; this one delivers it in full at the bottom.

**Visual structure**
A larger block than the Quick Context Callout, with more visual presence. Contains a prominent metric or claim line (rendered larger and bolder than surrounding body), followed by 1-3 sentences of context. Optional: an accent color or background treatment that's more saturated than the Quick Context Callout, signaling it's the conclusion of the story.

**Content slots**
- Optional small label (e.g., "Outcome" or "Result")
- A prominent metric or claim (one sentence, set large)
- 1-3 sentences of supporting context

**Layout behavior**
Full content width, single column. Generous vertical whitespace above (separates it from the prior section) and below (sets up the reflection section that typically follows).

**Variants**
None for now.

---

# Trier: My Emergency Visit

**A digital triage platform for Sir Charles Gairdner Hospital, designed to take pressure off the emergency department by moving data capture off the front lines.**

---

## [INSTANCE — Quick Context Callout]

**Label:** Quick context

**Body:**

The pilot at Sir Charles Gairdner Hospital reported a **50% reduction in ambulance ramping**, the metric used to measure ER congestion when ambulances queue outside because there's no capacity inside. The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital.

---

## [INSTANCE — Project Facts Panel]

| | |
|---|---|
| Role | Product Designer · Design System Designer |
| Year | 2023 to 2024 |
| Client | Trier Medical Solutions, in collaboration with Imminently |
| Pilot site | Sir Charles Gairdner Hospital, Perth |
| Outcome | 50% reduction in ambulance ramping at pilot |
| Reading time | ~5.5 min |

---

## The problem

Emergency departments were drowning. The pandemic had pushed already-stretched ER workflows past their limits, and the operational bottleneck was getting worse: patients arrived, queued in shared waiting areas, talked to a nurse to share sensitive information out loud, filled out paper forms with no privacy, and the same data then got re-entered manually into multiple clinical systems before triage could even begin.

Trier's brief was to take that load off. Move the data capture earlier in the process, give patients privacy, give clinicians a single screen, and reduce the manual work that compounded under peak demand.

The project shipped two products that worked together:

- A patient-facing mobile app, used before and during the ER visit
- A clinician-facing web app, used by nurses and doctors during triage

---

## Role and team

I worked under the design director, who captained the project. We co-ran discovery workshops to understand current ER workflows, with her in charge and me supporting. From there, the design work was mine to drive.

**What I owned**

- Every screen on the patient mobile app
- Every screen on the clinician web app
- The supporting design system (project-specific, non-tokenized)
- Usability validation that fed back into the design

**What the team contributed**

- Design director — project captain, discovery workshop lead
- Illustrator — visuals for the patient app's symptom screens
- Developers from Imminently — built the products
- Clinicians at Sir Charles Gairdner Hospital — interview subjects, usability testing participants

I participated in five clinician interviews during discovery, asking questions and synthesizing in Dovetail. I ran the usability testing sessions myself, my first time leading that part of the work, with the design lead attending as a silent observer for support.

---

## Designing for stressed users

The patient mobile app is the harder half of the project, and it's where most of the design work lived. Patients using it are stressed, often in pain, often elderly, and trying to enter sensitive medical information either on their way to the ER or while sitting in a waiting room. Almost every design decision in the app started from that user state.

## [INSTANCE — Decision Card Grid: 6 cards, 2-column layout]

**Card 1**
- Icon: a staircase or stepped progression
- Title: Step-heavy onboarding, paced to feel manageable
- Body: Long-form input in one screen would have been unmanageable for someone in distress. The flow was chunked into clear steps with visual progress and a persistent view of triage wait time on every screen.

**Card 2**
- Icon: a visual symbol or eye
- Title: Symptom selection through illustrations
- Body: The team replaced text and buttons with illustrations covering symptoms like cough, nausea, and injury. Patients in stress states have reduced reading comprehension. A visual interface is more accessible across language proficiency, age, and cognitive load.

**Card 3**
- Icon: a thermometer or gradient bar
- Title: A heat-map-style severity slider
- Body: Self-reporting how you feel in numeric or descriptive terms is genuinely hard, especially when you're not feeling well. A high-visual slider let patients indicate severity through a heat-map gradient, removing the cognitive work of mapping a feeling to a number.

**Card 4**
- Icon: a clock or timer
- Title: Wait time visibility, hierarchy-shifted over time
- Body: During onboarding, triage wait time was visible but didn't dominate. Once onboarding completed, wait time was promoted to a hero card on the home screen, because at that point it was the main thing the patient was sitting with. The information hierarchy shifted to match the patient's state.

**Card 5**
- Icon: an alert bell or warning symbol
- Title: A condition deterioration alert
- Body: ER conditions can worsen in the waiting room, and patients can't always advocate for themselves through normal channels. The app gave patients a direct alert button to notify a nurse if their condition deteriorated. The most clinically critical feature in the app and one of the decisions I'm most proud of.

**Card 6**
- Icon: a pill or medication symbol
- Title: Optional medication details, designed for older users
- Body: Patients could optionally enter their current medications: drug names with autocomplete, dosages, frequencies, and multi-medication entry with edit and delete. Building dense, detailed input flows that remained legible and usable for older patients on small phone screens was a genuine design challenge. My favorite work on the project.

---

## Accessibility shaped every screen

Older patients are the dominant ER demographic, which meant the accessibility constraints weren't a feature of the app, they were the architecture of every screen.

Specific decisions:

- Tap targets at ~60 pixels, well above standard mobile minimums
- Form elements (radio buttons, etc.) sized larger than typical defaults
- Type sizes, contrast ratios, and hit areas all calibrated for users who might be in pain, on small-screen phones, with reduced visual acuity

The trade-off was honest: the app couldn't be visually compact or sleek in the conventional sense. Every accessibility decision took up real estate. The aesthetic ended up sterile and clinical, which was the right answer for the domain.

## [INSTANCE — Pull Quote]

The app prioritized legibility and clinical clarity over consumer polish, and that was the right call.

---

## The clinician web app

On the clinician-facing side, the web app was the operational backbone. Before Trier, nurses and doctors collected triage data manually and re-entered it across multiple systems. The web app consolidated all of that into a single screen where clinicians could see incoming patient data in real time, track observations, and prioritize triage without the duplicate-entry overhead.

The design work was less visually rich than the patient app but no less critical. Clinical environments demand clarity over personality, and the web app was built to support fast scanning, dense information density, and zero ambiguity at decision points.

---

## Outcome

## [INSTANCE — Outcome Callout]

**Label:** Outcome

**Prominent line:** 50% reduction in ambulance ramping at the pilot hospital.

**Supporting context:** The metric measures ER congestion when ambulances queue outside because there's no capacity inside. Halving it isn't a marginal efficiency gain. It's a measurable shift in how the hospital absorbed peak demand, with direct implications for patient outcomes during the worst operational periods.

The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital, who described how the new triage approach had changed their workflow.

---

## What Trier taught me

The biggest lesson I take from this project is about trading off design values when the cause warrants it.

I came into Trier believing good design meant clean, beautiful, easy-on-the-eyes interfaces. The accessibility constraints pushed me to a different conclusion. In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It's the right answer.

That distinction now shapes how I approach any project where users are stressed, vulnerable, or operating outside ideal conditions. The aesthetic standard isn't universal. The right design depends on who is using the product and under what conditions, and a sterile, functional, accessible interface can be the most respectful design choice when the user is sitting in an ER waiting room hoping to be seen.

If I worked on a future version of Trier, I'd refine the visual hierarchy within the same accessibility constraints. I wouldn't change the philosophy. Some projects don't need to be reinvented in retrospect. They need to be defended.

---

## Submenu anchors

For the in-page submenu navigation, the following sections should be anchor-linkable:

- The problem → `#the-problem`
- Role and team → `#role-and-team`
- Designing for stressed users → `#designing-for-stressed-users`
- Accessibility shaped every screen → `#accessibility`
- The clinician web app → `#clinician-web-app`
- Outcome → `#outcome`
- What Trier taught me → `#reflection`
