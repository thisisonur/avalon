<!--
EDITING GUIDE — Trier
Source of truth in code: src/data/caseStudies.js (slug: trier)

- Edit the COPY freely (titles, subtitles, paragraphs, list items, captions, quotes).
- Keep the structural labels in (parentheses) and the headings — they tell Claude
  where each piece of copy belongs when applying your edits back to the data file.
- Leave image paths, the Vimeo URL, and the slug alone unless you say otherwise.
- **bold** maps to <strong>; *italic* maps to <em>. Links are written as [text](url).
- When you're done, ask Claude to "update the copies from the MD files".
-->

# Trier

## Card & Metadata
- Slug: trier
- Card name: Trier
- Card short (home card): A digital triage platform that cut ambulance ramping by 50% in the pilot hospital.
- Card subtitle: Product Designer
- Read time: 4 min read
- Year: 2023
- Duration: 12 months
- Role: Product Designer · Design System Designer
- Client: Trier Medical Solutions, in collaboration with Imminently
- Client URL: #
- Client label: Project overview
- Key takeaway: In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It's the right answer.

## Page Header
- Title: Trier: My Emergency Visit
- Subtitle: A digital triage platform for Sir Charles Gairdner Hospital, designed to take pressure off the emergency department by moving data capture off the front lines.

## Facts Panel
- Role: Product Designer · Design System Designer
- Year: 2023
- Client: [Trier Medical Solutions](https://www.triersolutions.com/), in collaboration with [Imminently](https://imminently.co/)
- Pilot site: Sir Charles Gairdner Hospital, Perth, Australia
- Outcome: 50% reduction in ambulance ramping at pilot
- Reading time: ~4 min

## Quick Context
The pilot at Sir Charles Gairdner Hospital reported a **50% reduction in ambulance ramping**, the metric used to measure ER congestion when ambulances queue outside because there's no capacity inside. The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital.

## Sections

### The problem

Emergency departments were drowning. The pandemic had pushed already-stretched ER workflows past their limits, and the operational bottleneck was getting worse: patients arrived, queued in shared waiting areas, talked to a nurse to share sensitive information out loud, filled out paper forms with no privacy, and the same data then got re-entered manually into multiple clinical systems before triage could even begin.

Trier's brief was to take that load off. Move the data capture earlier in the process, give patients privacy, give clinicians a single screen, and reduce the manual work that compounded under peak demand.

The project shipped two products that worked together:
- A patient-facing mobile app, used before and during the ER visit
- A clinician-facing web app, used by nurses and doctors during triage

### Role and team

I worked under the design director, who captained the project and was responsible for the UX and UI outcomes. We co-ran discovery workshops to understand current ER workflows, with her in charge and me supporting. From there, the design work was mine to drive.

(h3) What I owned
- Every screen on the patient mobile app
- Every screen on the clinician web app
- The supporting design system
- Usability validation that fed back into the design

(h3) What the team contributed
- Design director (Hide and Seek Digital) — project captain, discovery workshop lead
- Design lead (Hide and Seek Digital) — responsible for UX and UI outcomes
- Business analyst (Imminently) — requirements and project objectives
- Dev team (Imminently) — built the products
- Clinicians at Sir Charles Gairdner Hospital — interview subjects, usability testing participants
- Illustrator (Trier) — visuals for the patient app's symptom screens

I participated in five clinician interviews during discovery, asking questions and synthesizing in Dovetail. I ran the usability testing sessions myself, my first time leading that part of the work, with the design lead attending as a silent observer for support.

### Designing for stressed users

The patient mobile app is the harder half of the project, and it's where most of the design work lived. Patients using it are stressed, often in pain, often elderly, and trying to enter sensitive medical information either on their way to the ER or while sitting in a waiting room. Almost every design decision in the app started from that user state.

(decision card) Step-heavy onboarding, paced to feel manageable
Long-form input in one screen would have been unmanageable for someone in distress. The flow was chunked into clear steps with visual progress and a persistent view of triage wait time on every screen.

(decision card) Symptom selection through illustrations
The team replaced text and buttons with illustrations covering symptoms like cough, nausea, and injury. Patients in stress states have reduced reading comprehension. A visual interface is more accessible across language proficiency, age, and cognitive load.

(decision card) A heat-map-style severity slider
Self-reporting how you feel in numeric or descriptive terms is genuinely hard, especially when you're not feeling well. A high-visual slider let patients indicate severity through a heat-map gradient, removing the cognitive work of mapping a feeling to a number.

(decision card) Wait time visibility, hierarchy-shifted over time
During onboarding, triage wait time was visible but didn't dominate. Once onboarding completed, wait time was promoted to a hero card on the home screen, because at that point it was the main thing the patient was sitting with. The information hierarchy shifted to match the patient's state.

(decision card) A condition deterioration alert
ER conditions can worsen in the waiting room, and patients can't always advocate for themselves through normal channels. The app gave patients a direct alert button to notify a nurse if their condition deteriorated. The most clinically critical feature in the app and one of the decisions I'm most proud of.

(decision card) Optional medication details, designed for older users
Patients could optionally enter their current medications: drug names with autocomplete, dosages, frequencies, and multi-medication entry with edit and delete. Building dense, detailed input flows that remained legible and usable for older patients on small phone screens was a genuine design challenge. My favorite work on the project.

(figure caption) Patient mobile app — six accessibility-led design decisions translated into screens.

### Accessibility shaped every screen

Vulnerable patients are the dominant ER demographic, which meant the accessibility constraints weren't a feature of the app, they were the architecture of every screen.

Specific decisions:
- Tap targets at ~60 pixels, well above standard mobile minimums
- Form elements (radio buttons, etc.) sized larger than typical defaults
- Type sizes, contrast ratios, and hit areas all calibrated for users who might be in pain, on small-screen phones, with reduced visual acuity

The trade-off was honest: the app couldn't be visually compact or sleek in the conventional sense. Every accessibility decision took up real estate. The aesthetic ended up sterile and clinical, which was the right answer for the domain.

(pull quote) The app prioritized legibility and clinical clarity over consumer polish, and that was the right call.

### The clinician web app

On the clinician-facing side, the web app was the operational backbone. Before Trier, nurses and doctors collected triage data manually and re-entered it across multiple systems. The web app consolidated all of that into a single screen where clinicians could see incoming patient data in real time, track observations, and prioritize triage without the duplicate-entry overhead.

Clinical environments demand clarity over personality, and the web app was built to support fast scanning, dense information density, and zero ambiguity at decision points.

(figure caption) Clinician web app — a single-screen triage view consolidating patient data, observations, and prioritization.

### Outcome

(outcome headline) 50% reduction in ambulance ramping at the pilot hospital.
(outcome body) The metric measures ER congestion when ambulances queue outside because there's no capacity inside. Halving it isn't a marginal efficiency gain. It's a measurable shift in how the hospital absorbed peak demand, with direct implications for patient outcomes during the worst operational periods.
(outcome body) The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital, who described how the new triage approach had changed their workflow.

(video caption) 9News Perth segment — clinicians from Sir Charles Gairdner Hospital discuss the new triage workflow.

### What Trier taught me

The biggest lesson I take from this project is about trading off design values when the cause warrants it.

I came into Trier believing good design meant clean, beautiful, easy-on-the-eyes interfaces. The accessibility constraints pushed me to a different conclusion. In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It's the right answer.

That distinction now shapes how I approach any project where users are stressed, vulnerable, or operating outside ideal conditions. Trier forced me to stop judging interfaces by the standards I used on marketing sites or SaaS products. An ER waiting room isn’t a normal product environment. Once I accepted that, many of the design decisions became obvious. The interface needed to be clear, accessible, and dependable long before it needed to be visually refined.

If I worked on a future version of Trier, I'd refine the visual hierarchy within the same accessibility constraints. I wouldn't change the philosophy. Some projects don't need to be reinvented in retrospect. They need to be defended.
