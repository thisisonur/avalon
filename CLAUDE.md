# CLAUDE.md — Onur Erdem Portfolio

## Project
Personal portfolio at **onurerdem.com**. Code quality and structure should
reflect design systems thinking, not just produce a working site.

- Repo: `github.com/thisisonur/avalon`
- Deploy: Cloudflare Pages (static)

## Stack
- **Astro**, static output (`output: 'static'`, the default). No SSR, no
  Cloudflare adapter.
- **Vanilla CSS** with custom properties as the token layer. No Tailwind,
  no CSS-in-JS.
- **Minimal vanilla JS.** Only what a page actually needs.
- Page transitions via Astro `<ClientRouter />`, placed in the shared layout.

## Site structure
Routes:
- `/` — home. Lists **4 case studies**.
- `/about` — about page.
- `/work/treasury-wine-estates` — case study
- `/work/haste` — case study
- `/work/relate` — case study
- `/work/trier` — case study

Home order: Treasury Wine Estates, HASTE, Relate, Trier.

Each case study is a long-form page (3–5 min read), image and text-heavy. One case
study embeds a **Vimeo player** — lazy-load the iframe so it does not block
render or transitions.

## Design source of truth
The visual design is finalized in **Claude Design**. Its exported HTML/CSS
lives in `/design-reference/` in this repo. Treat that as the spec for
colors, type scale, spacing, and animation timing.

Do NOT redesign. Extract the values from the reference into CSS custom
properties, then build pages that consume those tokens.

## Token rules
- All color, spacing, type, and timing values live as CSS custom properties
  in `src/styles/tokens.css`.
- Never hardcode a hex value, a px spacing, or a duration inside a component.
  Reference the variable.
- If a value is needed that is not tokenized yet, add the token first, then
  use it.

## Layout & components
- One shared layout (`src/layouts/Base.astro`) holds `<head>`, nav, footer,
  and `<ClientRouter />`. Every page extends it.
- Nav and footer exist in exactly one place. Never duplicate them per page.
- Build small composable components (e.g. `CaseStudyCard`, `ImageBlock`,
  `VimeoEmbed`).

## Copy rules
Copy is **locked** unless I explicitly say otherwise. Do not rewrite,
"improve", or paraphrase existing copy.


## Deployment (Cloudflare Pages)
- Build command: `npm run build`
- Output directory: `dist`
- No adapter. Static only.
- Pin the Node version with a `.nvmrc` so local and Cloudflare builds match.
- The custom domain is essential, not optional: the `.pages.dev` URL is
  unreachable from Turkey. Always verify against onurerdem.com.

## How we work
- Migrate incrementally. Get one page deploying green before porting the next.
- After each step, state the expected output so I can confirm. A blank
  terminal response usually means success — say so explicitly.
- Do not expand scope. Do the task asked, nothing more. No unrequested files,
  critiques, or extra deliverables.
- Do not try to preserve the old in-page JS section transitions from the
  single-file build. They are replaced by real navigation plus view
  transitions.
