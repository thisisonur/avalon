# Trier: My Emergency Visit

**A digital triage platform for Sir Charles Gairdner Hospital, designed to take pressure off the emergency department by moving data capture off the front lines.**

---

**Role & Duration**
Product Designer and Design System Designer, 2023 to 2024

**Client**
Trier Medical Solutions, in collaboration with Imminently. Piloted at Sir Charles Gairdner Hospital, Perth.

---

## The problem the project was trying to solve

Emergency departments were drowning. The pandemic had pushed already-stretched ER workflows past their limits, and the operational bottleneck was getting worse: patients arrived, queued in shared waiting areas, talked to a nurse to share sensitive information out loud, filled out paper forms with no privacy, and the same data then got re-entered manually into multiple clinical systems before triage could even begin.

Trier's brief was to take that load off. Move the data capture earlier in the process, give patients privacy, give clinicians a single screen, and reduce the manual work that compounded under peak demand.

The project shipped two products that worked together: a patient-facing mobile app and a clinician-facing web app.

---

## My role and the team

I worked under the design director, who captained the project. We co-ran discovery workshops to understand current ER workflows, with her in charge and me supporting. From there, I drove the design across both apps: every screen on the patient mobile app and the clinician web app, the supporting design system, and the usability validation that fed back into the design.

The team also included an illustrator who created visuals for the patient app's symptom screens, plus developers from Imminently who built the products. I participated in five clinician interviews during discovery, asking questions and synthesizing in Dovetail. I ran the usability testing sessions myself, my first time leading that part of the work, with the design lead attending as a silent observer for support.

---

## Designing for stressed users in a high-stakes domain

The patient mobile app is the harder half of the project, and it's where most of the design work lived. Patients using it are stressed, often in pain, often elderly, and trying to enter sensitive medical information either on their way to the ER or while sitting in a waiting room. Almost every design decision in the app started from that user state.

**Step-heavy onboarding, paced to feel manageable.** Once a patient entered the virtual queue, they were stepped through the data the ER needed: symptoms, condition severity, optional details. Long-form input in one screen would have been unmanageable for someone in distress, so the flow was chunked into clear steps with visual progress and a constant, persistent view of triage wait time on every screen.

**Symptom selection through illustrations, not text or buttons.** For the symptom screens, the team made an accessibility-driven decision to replace text and buttons with illustrations covering symptoms like cough, nausea, and injury. Patients in stress states have reduced reading comprehension, and a visual interface is more accessible across language proficiency, age, and cognitive load. The illustrator I worked with created visuals specifically for these screens.

**A heat-map-style severity slider.** Self-reporting how you feel in numeric or descriptive terms is genuinely hard, especially when you're not feeling well. We designed a high-visual slider that let patients indicate severity through a heat-map gradient, removing the cognitive work of mapping a feeling to a number.

**Wait time visibility, hierarchy-shifted over time.** During onboarding, triage wait time was visible on every step but didn't dominate; the patient had a task in front of them. Once onboarding was complete, the wait time was promoted to a hero card on the home screen, because at that point it was the main thing the patient was sitting with. The information hierarchy shifted to match the patient's mental state.

**A condition deterioration alert.** ER conditions can worsen in the waiting room, and patients can't always advocate for themselves through normal channels. The app gave patients a direct alert button to notify a nurse if their condition deteriorated. This was the most clinically critical feature in the app and one of the design decisions I'm most proud of.

**Optional medication details, designed for older users on small screens.** Patients in the queue could optionally enter their current medications: drug names with autocomplete, dosages, frequencies, and multi-medication entry with edit and delete. The form complexity was real, and the accessibility constraints made it harder. These screens were my favorite work on the project. Building dense, detailed input flows that remained legible and usable for older patients on small phone screens was a genuine design challenge, and getting it to work was deeply satisfying.

---

## Accessibility shaped every screen

Older patients are the dominant ER demographic, which meant the accessibility constraints weren't a feature of the app, they were the architecture of every screen.

Tap targets ran around 60 pixels, well above standard mobile minimums. Form elements like radio buttons were sized larger than typical defaults. Type sizes, contrast ratios, and hit areas were all calibrated for users who might be in pain, on small-screen phones, with reduced visual acuity.

The trade-off was honest: the app couldn't be visually compact or sleek in the conventional sense. Every accessibility decision took up real estate. The aesthetic ended up sterile and clinical, which was the right answer for the domain. Patients seeing a clinical interface are reminded of where they are and what's happening. The app prioritized legibility and clinical clarity over consumer polish, and that was the right call.

---

## The clinician web app

On the clinician-facing side, the web app was the operational backbone. Before Trier, nurses and doctors collected triage data manually and re-entered it across multiple systems. The web app consolidated all of that into a single screen where clinicians could see incoming patient data in real time, track observations, and prioritize triage without the duplicate-entry overhead.

The design work was less visually rich than the patient app but no less critical. Clinical environments demand clarity over personality, and the web app was built to support fast scanning, dense information density, and zero ambiguity at decision points.

---

## Outcome

The pilot at Sir Charles Gairdner Hospital reported a 50% reduction in ambulance ramping, the metric used to measure ER congestion when ambulances queue outside because there's no capacity inside. The pilot was significant enough to be covered as a 9News Perth segment featuring interviews with clinicians from the hospital, who described how the new triage approach had changed their workflow.

Halving ambulance ramping isn't a marginal efficiency gain. It's a measurable shift in how the hospital absorbed peak demand, with direct implications for patient outcomes during the worst operational periods.

---

## What Trier taught me

The biggest lesson I take from this project is about trading off design values when the cause warrants it.

I came into Trier believing good design meant clean, beautiful, easy-on-the-eyes interfaces. The accessibility constraints pushed me to a different conclusion. In some domains, design that prioritizes legibility, hit accuracy, and clinical clarity over visual polish is not a compromise. It's the right answer.

That distinction now shapes how I approach any project where users are stressed, vulnerable, or operating outside ideal conditions. The aesthetic standard isn't universal. The right design depends on who is using the product and under what conditions, and a sterile, functional, accessible interface can be the most respectful design choice when the user is sitting in an ER waiting room hoping to be seen.

If I worked on a future version of Trier, I'd refine the visual hierarchy within the same accessibility constraints. I wouldn't change the philosophy. Some projects don't need to be reinvented in retrospect. They need to be defended.
