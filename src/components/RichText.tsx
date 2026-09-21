import { Fragment, type ReactNode } from 'react'

/**
 * Renders the inline markers kept in the content strings so that every string
 * in `src/content/*` stays byte-comparable with its Markdown source:
 *
 *   **bold**        emphasis carried over from the approved copy
 *   `code`          commands, file names and other literal tokens
 *   [label](url)    links written in the approved copy
 *
 * Nothing else is interpreted. No copy is added, removed or reordered.
 */

const TOKEN = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/
/** Longest atomic token in the approved copy is 18 characters. */
const LONG_TOKEN = 24

export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(TOKEN).filter((part) => part !== '')

  return parts.map((part, index) => {
    const key = `${index}-${part.slice(0, 12)}`

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      const token = part.slice(1, -1)
      // Short tokens are atomic — `migration-state.md` must not break at its
      // hyphen. Only the long pipeline strings are allowed to wrap.
      return (
        <code className={token.length > LONG_TOKEN ? 'code code--long' : 'code'} key={key}>
          {token}
        </code>
      )
    }

    const link = LINK.exec(part)
    if (link) {
      return (
        <a className="link" href={link[2]} key={key} rel="noreferrer" target="_blank">
          {link[1]}
        </a>
      )
    }

    return <Fragment key={key}>{part}</Fragment>
  })
}
