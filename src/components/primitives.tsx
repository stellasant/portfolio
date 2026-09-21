import { useEffect, useRef, useState, type ReactNode } from 'react'
import { RichText } from './RichText'
import type { LabelledBlock } from '../content/types'
import { SECTIONS } from '../content/sections'

/** The classification terms the approved copy carries, as one metadata line. */
export function MetaList({ items }: { items: readonly string[] }) {
  return (
    <ul className="meta-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

/** One open detail block: a subheading and its content, in the reading column. */
export function PlainPart({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="part">
      <h4 className="part__label">{label}</h4>
      <div className="part__content part__content--open">{children}</div>
    </section>
  )
}

/** Background / My work / Outcome, all open, in the single reading column. */
export function Parts({ blocks }: { blocks: LabelledBlock[] }) {
  return (
    <div className="parts">
      {blocks.map((block) => (
        <PlainPart key={block.label} label={block.label}>
          <p className="part__body">
            <RichText text={block.body} />
          </p>
        </PlainPart>
      ))}
    </div>
  )
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="bullets">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  )
}

export function Tokens({ items }: { items: string[] }) {
  return (
    <ul className="tokens">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

/** Opacity and a short translate, on visual blocks only. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={className ? `reveal ${className}` : 'reveal'} data-shown={shown} ref={ref}>
      {children}
    </div>
  )
}

/**
 * A requested diagram, below the text it belongs to. It may use the full
 * container width while the text stays at the reading measure. This is the
 * only container type on the page.
 *
 * `title` is a short label for the diagram, set inside the frame so it belongs
 * to the object rather than floating under it. These labels are the only text
 * on the page that is not approved portfolio copy: they name a drawing, they
 * make no claim.
 */
export function Visual({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="visual-block">
      <Reveal>
        <div className="visual-frame">
          <figcaption className="visual-title">{title}</figcaption>
          {children}
        </div>
      </Reveal>
    </figure>
  )
}

/**
 * The one entry pattern. A featured project, a technical initiative, a current
 * initiative, an experience area and a leadership role are all built from it,
 * so the reader learns the shape once.
 */
export function Entry({
  title,
  meta,
  summary,
  status,
  children,
}: {
  title: string
  meta?: readonly string[]
  summary?: string
  status?: ReactNode
  children: ReactNode
}) {
  return (
    <article className="entry">
      <h3 className="entry__title">{title}</h3>
      {status}
      {meta?.length ? (
        <div className="entry__meta">
          <MetaList items={meta} />
        </div>
      ) : null}
      {summary ? (
        <p className="entry__summary">
          <RichText text={summary} />
        </p>
      ) : null}
      <div className="entry__body">{children}</div>
    </article>
  )
}

/**
 * The section header: the heading alone. The small label that used to sit
 * above it only repeated the title, so it told the reader nothing.
 */
export function Section({ id, children }: { id: string; children: ReactNode }) {
  const meta = SECTIONS.find((section) => section.id === id)
  if (!meta) throw new Error(`Unknown section: ${id}`)

  return (
    <section aria-labelledby={`${id}-title`} className="section" id={id}>
      <div className="container">
        <header className="section__head">
          <h2 className="section__title" id={`${id}-title`}>
            {meta.title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  )
}
