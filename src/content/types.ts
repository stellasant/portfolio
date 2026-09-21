/**
 * Content model for the portfolio.
 *
 * Every string in `src/content/*` is transcribed verbatim from the approved
 * Markdown in `portfolio/content/`. Inline markers are preserved as written in
 * the source (`**bold**`, `` `code` ``, `[label](url)`) and rendered by
 * `components/RichText.tsx`, so a rendered section can be diffed against its
 * Markdown source word for word.
 */

/** A labelled prose block, e.g. `- **Background:** ...` in the source Markdown. */
export type LabelledBlock = {
  label: string
  body: string
}

/**
 * Nodes used by the long-form AI-assisted FE Workflow case study.
 *
 * `visual` marks the position where one of the recreated diagrams replaces the
 * inline code line of the source Markdown, keeping the reading order intact.
 */
export type CaseNode =
  | { kind: 'para'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'tokens'; items: string[] }
  | { kind: 'visual'; visual: 'lifecycle' | 'stepper' | 'handoffs' | 'architecture' }

export type CaseGroup = {
  heading: string
  nodes: CaseNode[]
}

/** Shape shared by Experience by Area and Leadership entries. */
export type AreaEntry = {
  title: string
  pills: string[]
  lead: string
  points: string[]
}

/** Shape shared by Technical Initiatives and Current AI Work entries. */
export type InitiativeEntry = {
  id: string
  title: string
  pills: string[]
  summary: string
  blocks: LabelledBlock[]
}
