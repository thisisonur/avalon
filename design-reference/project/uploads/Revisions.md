## Major Content & Layout Revision

This is a large update across all three areas of the site. Work through each section carefully and do not make changes outside the scope described.

---

### Home Page & General

---

**Fix 1 — Replace the Selected Projects section with a fourth case study card**

Remove the entire Selected Projects section — all cards, headings, and any surrounding layout. It will not be replaced with a projects grid.

Instead, add a fourth case study card to the existing case study card row. The new card sits alongside the three current case study cards. Refer to `cards.png` (attached) for the correct positioning and layout reference.

The final card order on the home page is: **TWE → Relate → HASTE → Trier** (left to right on desktop).

---

**Fix 2 — Rebuild the case study card from scratch using the new design**

The current case study card design is replaced entirely. Do not modify the existing card — delete it and build the new one from scratch using `NewCaseStudyCard.fig` (attached) as the sole reference.

Build the new card as a reusable component and apply it to all four case study cards. Match every detail in the Figma file: layout, typography, spacing, colors, border radius, and all visual states.

**Do not touch the card's interactivity.** The "Visit Case Study" button behavior — how and when it appears — remains exactly as it is. Only the visual design of the card changes.

---

**Fix 3 — Populate case study cards with updated copy**

The copy for all four case study cards has been updated. Use the content from `case-study-cards.md` (attached) to populate each card — card title, subtitle, tags, or any other text fields the card component contains.

Apply the correct copy to each card individually in the order: TWE → Relate → HASTE → Trier. Do not rewrite or shorten the copy. Use it exactly as provided in the file.

---

**Fix 4 — Card grid responsive behavior**

The four case study cards must follow this layout at each breakpoint:

- **Desktop and tablet landscape:** All four cards in a single horizontal row
- **Mobile:** 2×2 grid — 2 cards per row, 2 rows

Do not change the card layout on any breakpoint beyond what is described here.

---

**Fix 5 — Reduce the gradient opacity behind the sticky menu**

The backdrop gradient behind the sticky navigation menu is too opaque — it completely masks the content behind it. Reduce the gradient's opacity so the page content is partially visible through it. The menu itself must remain fully readable; only the background blur/gradient intensity is reduced.

Adjust the `background` or `backdrop-filter` on the sticky menu wrapper. Aim for content being subtly visible rather than completely obscured — test visually and dial it back until it feels light.

---

### Case Study Pages

---

**Fix 5 — Reorder the case study page layout**

The content order on every case study page must follow this exact sequence:

1. Title
2. Subtitle — styled with body typography (not a heading style)
3. Hero image
4. Client, Role, and Year
5. First section
6. Second section
7. … additional sections …
8. Footer

Remove the second description text block entirely — it does not appear anywhere in this new layout. Update the markup and component structure on all four case study pages to match this order.

---

**Fix 6 — Update the sticky content menu items**

The sticky sidebar/content menu on case study pages lists the section names for in-page navigation. Update these items to match the actual sections in the new case study content. The correct section names are defined in the attached MD files for each case study.

Apply the correct section list to each case study page individually — do not use the same list across all four.

---

**Fix 7 — Replace all case study copy with attached MD files**

All four case study text contents are updated. Replace every copy block on each case study page with the content from the corresponding attached file:

- TWE → `twe.md`
- Relate → `relate.md`
- HASTE → `haste.md`
- Trier → `trier.md`

Do not rewrite, summarize, or reformat the copy. Use it exactly as written in each file. Apply the correct typographic styles (headings, body, captions) based on the existing type system — do not introduce new styles.

---

### About Page

---

**Fix 8 — Update the About Me heading and body copy**

Replace the current About Me heading and body copy with the content from `about.md` (attached). Use it exactly as written. Do not change the layout, typography styles, or section structure — content only.

---

**Fix 9 — Remove the hero subtitle line**

Delete the following line from the About page hero area entirely:

> "Design Systems Designer · 20+ years across brand, product, and digital. Washington DC"

Remove it from the markup completely. Do not replace it with anything.

---

**Fix 10 — Update the How I Work section**

The How I Work section has a new item and updated copy across all existing items. Replace the entire section's content with the copy from `howIwork.md` (attached). Add the new item to the layout — match the visual style of the existing items exactly (same card/row structure, same typography, same spacing). Do not remove or reorder existing items unless the attached file specifies a different order.

---

**Fix 11 — Remove the Experiences section**

Delete the Experiences section from the About page entirely — the heading, all entries, and any surrounding layout or spacing. Do not leave an empty container or gap where it was. The section above and below it should flow together naturally after removal.

---

**Fix 12 — Update the Off the Clock section copy**

Replace the Off the Clock section copy with the content from `offtheclock.md` (attached). Use it exactly as written. Do not change the layout or visual structure of the section — copy only.

---

**Fix 13 — Update the footer copy**

The footer copy has been updated. Replace all existing text content in the footer with the content from `footer.md` (attached). Use it exactly as written. Do not change the footer's layout, buttons, structure, or visual design — copy only.
