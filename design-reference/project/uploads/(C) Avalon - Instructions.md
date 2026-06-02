# Avalon — Portfolio Build Instructions for Claude Design

> **Who this is for:** Claude Design (AI design + code agent).
> **What this is:** Everything you need to design and build Onur Erdem's design portfolio from scratch — structure, content, visual direction, behavior, and links to all final copy files.
> **Last updated:** 2026-04-24
> **Design tokens source:** `Avalon - DesignTokens.md`

---

## 1. Project Overview

**What:** A personal portfolio website for Onur Erdem, a Design Systems Designer with 20+ years of experience. The site showcases three case studies, six selected projects, and an About page.

**Goal:** Land a full-time design systems role at a SaaS company. The portfolio must feel credible, confident, and senior — not trendy or over-designed. Every design decision should reflect a systems thinker, not a visual decorator.

**Tone:** Minimal. Quiet. Precise. The work carries the weight — the site steps out of the way.

**Live references (use these as the primary visual guide):**
- Figma prototype: https://www.figma.com/proto/uHXvzDtsShahv0e1G3IjN5/TiO-Portfolio-26?page-id=0%3A1&node-id=89-183&viewport=3672%2C294%2C0.28&t=cVkWQeWNrFGnfGUW-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=89%3A183&hide-ui=1
- Homepage screenshot: `05 Attachments/Home(CaseStudies).png`
- Case study page screenshot: `05 Attachments/Case Studies - TWE.png`
- Showcase page screenshot: `05 Attachments/Showcase - Relate.png`
- About page screenshot: `05 Attachments/About.png`

---

## 2. Visual Design System

> All tokens are defined in `Avalon - DesignTokens.md`. The CSS custom properties block at the bottom of that file should be pasted directly into the project as the token foundation. What follows is a usage guide — not a redefinition.

### 2.1 Color

**Semantic tokens (use these, not raw hex values):**

| CSS Variable                    | Hex       | Usage                                |
| ------------------------------- | --------- | ------------------------------------ |
| `--background-primary`          | `#FBFFFF` | Page background — entire site        |
| `--surface-nude`                | `#FBFFFF` | Default card/surface (same as bg)    |
| `--surface-elevated`            | `#EEF3F3` | Slightly raised surfaces             |
| `--surface-prominent`           | `#E1E7E7` | Borders, dividers, horizontal rules  |
| `--surface-strong`              | `#C7CACA` | Strong separators, inactive states   |
| `--text-body-default`           | `#3E4040` | All primary text — headlines, body   |
| `--text-body-muted`             | `#878A8A` | Metadata, captions, secondary labels |
| `--background-primary-elevated` | `#3E4040` | Dark pill buttons, interactive fills |
| `--color-white`                 | `#FFFFFF` | Text on dark buttons                 |
| `--link-surface`                | `#696C6C` | Default link color                   |
| `--link-hovered`                | `#3E4040` | Link hover state                     |
| `--icon-surface`                | `#3E4040` | Icons                                |
| `--icon-border`                 | `#E1E7E7` | Icon container borders               |

> **Case study cards are the only exception to the global palette.** See Section 2.5 for the three card color schemes.

### 2.2 Typography

**Font families (confirmed):**

| Role | Font | Weight usage |
|------|------|---|
| Display / headlines | `Crimson Pro` (serif) | Regular (400) or Light (300) for large display; Bold (700) for strong headings |
| Body / UI / labels | `Inter` (sans-serif) | Regular (400) for body; Medium (500) for labels and nav; Bold (700) for emphasis |
| Code / mono | `IBM Plex Mono` (monospace) | Regular only — use sparingly if needed |

**Size scale (use token values):**

| Role | Token | Value |
|------|-------|-------|
| Display headline (homepage hero, About opener) | `--font-size-5xlarge` | `64px` |
| Page title (case study/showcase H1) | `--font-size-4xlarge` | `48px` |
| Section heading | `--font-size-3xlarge` | `36px` |
| Sub-heading / card title | `--font-size-2xlarge` | `28px` |
| Body copy | `--font-size-medium` | `16px` |
| Body large | `--font-size-large` | `18px` |
| Labels / metadata / spaced caps | `--font-size-small` | `12px` |
| Captions | `--font-size-small` | `12px`, `--text-body-muted` |
| Navigation | `--font-size-medium` | `16px` |

**Letter spacing:** Apply `--font-letterSpacing-wide` (`8px` tracking) only on all-caps labels like `CASE STUDIES`, `HOW I WORK`, `EXPERIENCES`, etc.

### 2.3 Spacing

Use the spacing scale from the token file. Key reference values:

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-50` | `4px` | Tight internal gaps |
| `--space-100` | `8px` | Icon padding, small gaps |
| `--space-200` | `16px` | Component internal padding |
| `--space-300` | `24px` | Between related elements |
| `--space-400` | `32px` | Card padding |
| `--space-600` | `48px` | Section sub-padding |
| `--space-800` | `64px` | Between major sections |
| `--space-1000` | `80px` | Section separators |

Page top padding (before hero): `120px` — compose from `--space-1000` + `--space-500`.

### 2.4 Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-large` | `8px` | Image containers, subtle rounding |
| `--radius-xlarge` | `16px` | Cards |
| `--radius-2xlarge` | `24px` | Large cards, hero elements |
| `--radius-3xlarge` | `32px` | Pill buttons — or use `999px` for fully round |

> Buttons use `999px` (fully rounded pill). Cards use `--radius-2xlarge` (`24px`).

### 2.5 Case Study Card Color Schemes

Three color themes are defined in the token file — one per case study. Card backgrounds use a **gradient** between `gradient01` and `gradient02`. Text, button, border, and shadow all follow card-specific tokens.

> ⚠️ **Important naming note:** The palette names ("Green", "Pink", "Orange") describe the accent system, not the card's dominant visual color. The "Green" card is a **mint-to-sky-blue gradient with purple text**. Read the hex values, not the names.

**Card assignment (confirmed order: TWE / Trier / HASTE):**

| Case Study | Card theme | Gradient | Text color | Button |
|---|---|---|---|---|
| Treasury Wine Estates | **Green** | `#A5E7CA` → `#C6E0F2` (mint to sky) | `#550B96` (purple) | `#5ED96C` bg / `#0B4812` label |
| Trier — My Emergency Visit | **Pink** | `#DD87F6` → `#FFAABE` (lavender to blush) | `#8D132F` (deep rose) | `#CD22FF` bg / `#FFE2E9` label |
| HASTE | **Orange** | `#DBEC90` → `#FFC875` (lime to peach) | `#9C2E07` (burnt orange) | `#FF782E` bg / `#FFEFDE` label |

> ✅ **Card color-to-case-study assignment is confirmed.** If Onur ever wants to swap cards, only the CSS variable references need to change — no structural rebuild required.

**Full card token sets** (copy from `Avalon - DesignTokens.md`, Section "Card Tokens"):
- `--card-green-*` — 8 tokens
- `--card-pink-*` — 8 tokens
- `--card-orange-*` — 8 tokens

**Card hover behavior:** On hover, card transitions from a neutral default state (white surface, `--surface-prominent` border) into its full color scheme. The gradient fills the background, text shifts to the card text color, and a pill button appears reading "View case study →" using the card button tokens. Transition: `300ms ease-out`.

### 2.6 CSS Custom Properties

**Paste the full `:root {}` block from `Avalon - DesignTokens.md` as the first CSS in the project.** Do not redefine tokens manually. All values in the rest of this document refer to these variables.

### 2.7 Shadows

Keep shadows very subtle. If used, derive from card dropshadow tokens (e.g. `--card-green-dropshadow: #C6E0F2`). Global UI shadows: `box-shadow: 0 1px 4px rgba(62, 64, 64, 0.08)` at most.

---

## 3. Site Map

```
/ (Homepage — Case Studies)
├── /treasury-wine-estates     (Case Study)
├── /haste                     (Case Study)
├── /trier                     (Case Study)
├── /relate                    (Showcase)
├── /livetiles-reach           (Showcase)
├── /global-ports              (Showcase)
├── /candidex                  (Showcase)
├── /highlabs                  (Showcase)
├── /pegasus-airlines          (Showcase)
└── /about                     (About)

External links (open in new tab):
- Resume PDF: https://www.dropbox.com/scl/fi/n286yerj9j2y96van4463/OnurErdem_Resume.pdf?rlkey=uhrs462psr810vhyui31aakq2&e=1&st=brisvxqj&dl=0
- LinkedIn: https://www.linkedin.com/in/thisisonur/
- Email: mailto:thisisonur@gmail.com
```

---

## 4. Global Components

### 4.1 Header / Navigation

**Default state (Homepage + About):**

```
[Onur Erdem logo/wordmark]    [Work]  [About]  [Download Resume]  [LinkedIn]  [Get in Touch]
```

- Sticky: Yes. Fixed to top on scroll.
- Background on scroll: Slight blur + subtle background, or stays fully transparent. Keep it minimal.
- "Work" and "About" are internal page links.
- "Download Resume", "LinkedIn", "Get in Touch" are external links (open in new tab).
- Active state: "Work" is underlined/active on homepage; "About" is underlined/active on About page.

**Case study + showcase page state:**

```
[← index]  [Case Study Name]                    [Download Resume]  [LinkedIn]  [Get in Touch]
```

- "← index" is a back button that goes to the homepage.
- The center text changes dynamically: as user scrolls down, the logo "Onur Erdem" transitions/morphs into the current page title (e.g. "Treasury Wine Estates").
- "Work" and "About" nav links are removed on these pages.
- Width of navigation container is wider on case study/showcase pages (full content width).

### 4.2 Footer

```
Portfolio work shown for demonstration purposes. All brand assets belong to their respective clients.

Built with Claude Code.  ©  Onur Erdem 2026     [Download Resume]  [LinkedIn]  [Get in Touch]
```

- Two-line footer. Left: legal copy. Right: utility links.
- Very small text, `--text-body-muted`.
- No border or heavy divider above footer — let whitespace separate it.

### 4.3 Animations

- **Approach:** Smooth, subtle, intentional. Never decorative.
- **Page load:** Elements fade in sequentially from top. Stagger delay ~80ms between elements.
- **Scroll-triggered:** Each new section fades in + translates up ~20px as it enters the viewport.
- **Card hover:** See Section 6.1 for case study cards. Showcase items: subtle lift or icon appearance.
- **Navigation logo transition:** On case study/showcase pages, the logo smoothly crossfades to the page title on scroll past hero.
- **Duration:** `300ms–400ms` easing `ease-out` for most interactions. Nothing jarring.

### 4.4 Responsiveness

Build for three breakpoints. Content must adapt gracefully at every size.

| Breakpoint | Range | Key changes |
|-----------|-------|-------------|
| Desktop | ≥ 1280px | Full layout as described |
| Tablet | 768px–1279px | Single column cards, compressed nav |
| Mobile | < 768px | Stacked layout, hamburger or simplified nav |

---

## 5. Homepage

**Content source:** `(C) Case Study Cards.md` + `(C) Showcase Cards.md`

### 5.1 Structure

```
1. Header (sticky nav)
2. Greeting / Hero section
3. Case Studies section
4. Selected Projects (Showcase) section
5. Footer
```

### 5.2 Greeting / Hero

Display headline (serif, large):

> **"Design systems that think in brand. Built to hold their identity at scale."**

Subtext below (body, centered, ~60% width):

> "I'm Onur, a Design Systems Designer with 20+ years across brand, product, and digital. Below you'll find the case studies, the thinking behind them, and how I work."

Layout: Centered, generous vertical padding top and bottom (~120px top, ~80px bottom).

### 5.3 Case Studies Section

**Label:** `CASE STUDIES` (spaced uppercase, small, `--text-body-muted`)

**Card layout:** Three cards displayed in a staggered/overlapping stack arrangement — not a flat row. Based on the Figma prototype:
- Card 1 (Treasury Wine Estates): Positioned left, partially behind Card 2 → **Green card theme**
- Card 2 (Trier): Center, on top (foreground) → **Pink card theme**
- Card 3 (HASTE): Positioned right, partially behind Card 2 → **Orange card theme**

Each card contains:
- Project icon (geometric, unique per card — use placeholders)
- Year
- Case study name (large, bold)
- Role(s)
- Short card copy (one sentence)

**Card short copy** (from `(C) Case Study Cards.md`):
- **HASTE:** "A headless design system built to scale across any brand."
- **Treasury Wine Estates:** "Twelve wine brand websites launched from one shared foundation."
- **Trier:** "A triage platform that cut ambulance wait times by 50%."

**Card hover behavior:** The full card transitions into its color scheme (see Section 2.5). The cursor transforms into a "View case study →" button/label using the card's button tokens. Animate smoothly — `300ms ease-out`.

**Card click:** Routes to the individual case study page.

### 5.4 Selected Projects (Showcase) Section

**Label:** `SELECTED PROJECTS` with `2017–2025` as a secondary label below it (both spaced uppercase, small)

**Layout:** Three-column grid on desktop. Two columns on tablet. Single column on mobile.

Each showcase item shows:
- Project name
- Year + tags (e.g. "2025 • Brand Design, Design Systems, Product Design")
- Short one-sentence description

**Showcase card copy** (from `(C) Showcase Cards.md`):
- **Relate:** "Brand and product design for an AI trust platform."
- **LiveTiles Reach:** "Product redesign for an employee communications platform."
- **Global Ports:** "One layout system behind fifteen cruise port websites."
- **Candidex:** "Brand identity for an early childhood education recruiter."
- **HighLabs:** "Brand identity for a medical cannabis provider in Sydney."
- **Pegasus Airlines:** "Website and in-flight menus for a major low-cost carrier."

**Showcase item hover:** A unique icon appears per project. Icon should appear on hover with a subtle animation. Each showcase has a distinct icon — use placeholder icons for now until Onur confirms.

**Showcase item click:** Routes to the individual showcase page.

---

## 6. Case Study Pages

**Content source:**
- `(C) HASTE.md`
- `(C) Treasury Wine Estates.md`
- `(C) Trier — My Emergency Visit.md`

### 6.1 Structure (all case studies follow the same template)

```
1. Header (case study nav state — see Section 4.1)
2. Hero block (title, subtitle, metadata)
3. Body sections (narrative copy in chunks — see individual files)
4. Images (max 4–5 per case study, with captions)
5. Side navigation (desktop only)
6. Next case study button (sticky, bottom right)
7. Footer
```

### 6.2 Hero Block

- Large display title (e.g. "Treasury Wine Estates")
- Subtitle (one sentence — the hook line)
- Metadata row: `Client` | `Role` | `Year`
- External link button (pill button, dark): "TWE Global ↗" or similar (link to client site if applicable — use `#` placeholder for now)

See `05 Attachments/Case Studies - TWE.png` for the exact layout.

### 6.3 Body Copy Sections

Each case study has 3 main sections: **The Situation**, **What I Did**, **Results**. Copy is already written and final. Pull it directly from the files linked above.

- Section headers: medium weight, clear typographic hierarchy
- Body text: readable, 16–18px, max-width ~680px for comfortable reading
- Lists: clean, no excessive bullet decoration

### 6.4 Images

- Use full-width or wide-content-width image containers
- Each image has a caption below it (small, `--text-body-muted`)
- Use placeholder blocks (light gray rectangles with label) for now. Label them e.g. "Image 1 — System architecture diagram"
- Max 4–5 images per case study

### 6.5 Side Navigation (Desktop Only)

On desktop, a fixed side nav anchors to major sections of the case study:
- The Situation
- What I Did
- Results

Clicking jumps to that section. Active section is highlighted. Positioned on the left or right side of the content column — match Figma prototype.

### 6.6 Next Case Study Button

- Sticky to the bottom-right corner on desktop
- Dark pill button: "Next → [Case Study Name]"
- Order: Treasury Wine Estates → Trier → HASTE → (loops or returns to homepage)

---

## 7. Showcase Pages

**Content source:**
- `(C) Relate.md`
- `(C) LiveTiles Reach.md`
- `(C) Global Ports.md`
- `(C) Candidex.md`
- `(C) HighLabs.md`
- `(C) Pegasus Airlines.md`

### 7.1 Structure (all showcases follow the same template)

```
1. Header (case study nav state — see Section 4.1)
2. Hero block (title, subtitle/description, metadata)
3. Image sections (max 3–5 images with captions)
4. Next showcase button (sticky, bottom right)
5. Footer
```

### 7.2 Hero Block

- Large display title
- Short description (1–2 sentences — the pitch)
- External link button (pill): "relate.us ↗" or client URL. Use `#` placeholder.
- Metadata block: `Client` | `Role` | `Year` — displayed as a labeled column group

See `05 Attachments/Showcase - Relate.png` for reference layout.

### 7.3 Body

Showcases are lighter than case studies. Structure:
- **No section headers** like "The Situation / What I Did"
- Body copy is 1–2 paragraphs max (pull directly from the files above)
- Followed by image placeholders with group labels (e.g. "Brand Identity", "Design System", "Product Screens")

### 7.4 Image Sections

- Labeled groups (e.g. "Brand Identity", "Website", "Components") — use small uppercase label above the image block
- Image placeholder blocks with caption below each one
- Max 3–5 images per showcase

### 7.5 Next Showcase Button

Same pattern as case studies. Order: Relate → LiveTiles Reach → Global Ports → Candidex → HighLabs → Pegasus Airlines → (return to homepage or loops).

---

## 8. About Page

**Content source:**
- Greetings: `(C) Greetings.md`
- About me copy: `(C) About.md`
- How I Work: `(C) How I Work.md`
- Experiences: `(C) Experiences.md`
- Toolkit: `(C) Toolkit.md`
- Off the Clock: `(C) Off the Clock.md`

### 8.1 Structure

```
1. Header (standard nav — About is active)
2. Photo + Greeting headline
3. About me copy
4. How I Work (4 principles)
5. Experiences (5 roles, reverse chronological)
6. Toolkit
7. Off the Clock
8. Footer
```

### 8.2 Photo + Greeting

- Photo: Left column, portrait aspect ratio. Use placeholder.
- Greeting headline (from `(C) Greetings.md`):
  > **"Design Systems That Hold Brand Identity at Scale"**
- Subtitle below headline: *"I'm Onur. I build design systems where brand intent drives every decision. 20+ years across brand, product, and digital."*
- Location tag below: "Based in Washington DC"

See `05 Attachments/About.png` for the overall layout.

### 8.3 About Me Copy

Pull directly from `(C) About.md`. One short paragraph block. No heading needed here — it flows naturally after the greeting.

### 8.4 How I Work

**Section label:** `HOW I WORK` (spaced uppercase)

Four principles displayed as a 2×2 grid on desktop, single column on mobile. Each has:
- Bold title/label
- Short paragraph

Pull all four principles directly from `(C) How I Work.md`:
1. Brand intent, encoded in tokens
2. Architecture first, aesthetics later
3. Engineering is design, design is engineering
4. Standards enable scale

### 8.5 Experiences

**Section label:** `EXPERIENCES` (spaced uppercase)

Five roles, each displayed with:
- Company logo placeholder (colored square or icon) + company name
- Title / role
- Date range + location (right-aligned or below title)
- Short paragraph body

Pull all experience content from `(C) Experiences.md`:
1. Hide and Seek Digital — Product Designer for Design Systems (2022–2025)
2. Equilibre Monaco — Senior Art Director (2018–2021)
3. Nexum Creative — Creative Director (2015–2018)
4. iGOA — Art Director → Creative Director (2007–2015)
5. Rafineri — Art Director (2005–2007)

Each company should have a distinct color accent on its logo square (refer to the About.png screenshot for the style — colored squares with company initials or logo placeholder).

### 8.6 Toolkit

**Section label:** `TOOLKIT` (spaced uppercase)

Pull intro line from `(C) Toolkit.md`:
> "The list shifts depending on the project. I pick up new tools quickly and stay close to what's changing in AI."

Display tools as icon + label pairs in a horizontal row (wraps on smaller screens):

| Tool      | Icon                                         |
| --------- | -------------------------------------------- |
| Figma     | Full-color official Figma SVG logo           |
| Adobe CC  | Full-color official Adobe Creative Cloud SVG |
| Claude    | Full-color Anthropic/Claude mark             |
| Obsidian  | Full-color Obsidian SVG (purple gem)         |
| Storybook | Full-color official Storybook SVG            |
| Chromatic | Full-color official Chromatic SVG            |
| Miro      | Full-color official Miro SVG                 |
| Slack     | Full-color official Slack SVG                |

> **Icons are full-color (confirmed).** Use official SVG brand marks. Source from each tool's official press kit or brand assets page. Display at consistent size (e.g. 40×40px) with the tool name as a label below. Onur will provide custom icons if any official marks are unavailable.

### 8.7 Off the Clock

No section label. This section flows after Toolkit as a quiet closing note.

Pull directly from `(C) Off the Clock.md`. One short paragraph block. No header — let it breathe on its own.

---

## 9. Content Files Index

Complete map of all Final copy files to their corresponding site sections.

| Page / Section | Final File |
|----------------|-----------|
| Homepage greeting | `(C) Greetings.md` |
| Case study card: HASTE | `(C) Case Study Cards.md` |
| Case study card: TWE | `(C) Case Study Cards.md` |
| Case study card: Trier | `(C) Case Study Cards.md` |
| Case study full: HASTE | `(C) HASTE.md` |
| Case study full: TWE | `(C) Treasury Wine Estates.md` |
| Case study full: Trier | `(C) Trier — My Emergency Visit.md` |
| Showcase card: all 6 | `(C) Showcase Cards.md` |
| Showcase full: Relate | `(C) Relate.md` |
| Showcase full: LiveTiles Reach | `(C) LiveTiles Reach.md` |
| Showcase full: Global Ports | `(C) Global Ports.md` |
| Showcase full: Candidex | `(C) Candidex.md` |
| Showcase full: HighLabs | `(C) HighLabs.md` |
| Showcase full: Pegasus Airlines | `(C) Pegasus Airlines.md` |
| About — greeting | `(C) Greetings.md` |
| About — about me body | `(C) About.md` |
| About — how I work | `(C) How I Work.md` |
| About — experiences | `(C) Experiences.md` |
| About — toolkit | `(C) Toolkit.md` |
| About — off the clock | `(C) Off the Clock.md` |

---

## 10. Placeholder Standards

Use these consistently until Onur provides final assets.

| Placeholder type | Style |
|-----------------|-------|
| Portrait photo | `--surface-prominent` rectangle, label "Photo — Onur Erdem" |
| Project images | `--surface-elevated` rectangle, label with project name + image number e.g. "HASTE — Image 1" |
| Case study card icons | Simple geometric shapes — squares, circles, X shapes in a 2×3 or 3×3 grid pattern. Onur will provide final icons. |
| Showcase item icons | Simple line icons, unique per project. Onur will provide final icons. |
| Company logos (Experiences) | Colored square with company initials. Onur will provide actual logos. |
| Client URL buttons | Use `href="#"` for all "↗" pill buttons. Onur will provide final URLs. |

---

## 11. Pending Assets from Onur

The following are confirmed as "to be provided later." Build with placeholders for all of these. Do not block progress waiting for them.

| Item | Status | Notes |
|------|--------|-------|
| Case study card icons | ⏳ Pending | One unique icon per case study. Use geometric placeholder. |
| Showcase item icons | ⏳ Pending | One unique icon per showcase item. Use line icon placeholder. |
| Client URLs | ⏳ Pending | For all "↗" pill buttons. Use `href="#"` until provided. |
| Portrait photo | ⏳ Pending | For About page hero. Use placeholder rectangle. |
| Project images | ⏳ Pending | All case study and showcase images. Use labeled placeholder blocks. |

## 12. All Questions Resolved

No open questions remain. The document is ready to hand off to Claude Design.

---

*This document is Claude-generated. Prefix: `(C)`. Original instructions are in `00 Inputs/Avalon - Instructions.md`.*
