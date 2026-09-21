# Portfolio

Single-page portfolio for Stella Maris Santamaría.
React + TypeScript + Vite, no runtime dependencies beyond React.

Live at **https://stellasant.github.io/portfolio/**

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. The build output is never committed.

`vite.config.ts` sets `base: './'`, so the same build works from a project page
(`stellasant.github.io/portfolio/`) and from a user site, without hard-coding a
repository name. The site is one page with hash anchors and no router, so no
SPA fallback is needed.

## Content

All visible copy lives in `src/content/*.ts`, one module per section,
transcribed verbatim from the approved source. Inline markers (`**bold**`,
`` `code` ``, `[label](url)`) are kept as written and rendered by
`src/components/RichText.tsx`, so a rendered section can be diffed against its
source word for word.

Section order and numbering come from `src/content/sections.ts`.

## Wiring the CV

`src/config.ts` holds the single switch:

```ts
export const CV_URL: string | null = null
```

Drop the public CV PDF into `public/` and set:

```ts
export const CV_URL: string | null = `${import.meta.env.BASE_URL}stella-santamaria-cv.pdf`
```

Until then, both the hero and the Contact section render "CV" as an inactive
item rather than a link that leads nowhere. Nothing else needs to change.

## Adding the Behance covers

`src/content/earlierDesignWork.ts` still lists the three earlier projects. They
are not rendered today. To bring them back with imagery, drop a cover in
`public/` and set `cover` (and optionally `alt`) on the project.

## Structure

```
src/
  content/    approved copy, one module per section
  components/ Section, Entry, Part (accordion), RichText, SiteNav
  sections/   one component per numbered section
  styles/     tokens, base, layout, content, sections, visuals
  visuals/    the recreated diagrams, built from DOM + CSS
```

The diagrams use container queries rather than viewport media queries, so each
one responds to the column it occupies and stays readable at any width.
