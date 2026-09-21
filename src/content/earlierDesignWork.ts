/** Source: content/Stella_Portfolio_Earlier_Design_Work.md */

export type EarlierProject = {
  name: string
  /**
   * Public Behance cover. None were available locally, so the plates render the
   * project name instead. Drop a file in `public/`, set `cover` (and `alt`) and
   * the image renders in its place — no other change needed.
   */
  cover?: string
  alt?: string
}

export const earlierDesignWork: {
  intro: string
  projects: EarlierProject[]
  link: { label: string; href: string }
} = {
  intro:
    'Selected work from the years before I moved fully into Frontend Engineering. I keep these projects here as context for the design foundation behind how I approach interfaces today.',
  projects: [
    { name: 'Brainboost web' },
    { name: 'Wotiply App - Ionic' },
    { name: 'El Águila Sanitarios 2019' },
  ],
  /* Label changed from the approved "View more work on Behance" at Stella's
     explicit request. The destination is unchanged. */
  link: { label: 'Behance portfolio', href: 'https://www.behance.net/stella-sant' },
}
