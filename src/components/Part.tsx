import { useId, useState, type ReactNode } from 'react'

/**
 * One named detail block — Background, My work, Outcome, or one of the named
 * groups of the long-form case — as a collapsible section.
 *
 * The subheadings stay visible whether or not they are open, so the outline of
 * what a project covers is always readable and the page keeps its structure.
 * Only the paragraphs collapse, which is what made it endless.
 *
 * The button is inside the heading (the ARIA disclosure pattern), so the
 * heading still appears in the document outline. Collapsed content stays in
 * the DOM and is marked `inert`, so nothing is removed from the page and
 * nothing collapsed is reachable by keyboard.
 */
export function Part({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <section className="part" data-open={open}>
      <h4 className="part__label">
        <button
          aria-controls={id}
          aria-expanded={open}
          className="part__toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {/* The chevron sits before the label, so the control reads as one
              clickable thing rather than as a heading with a stray sign at the
              far end of the line. */}
          <span aria-hidden="true" className="part__mark" />
          <span>{label}</span>
        </button>
      </h4>

      <div className="part__panel" id={id}>
        <div className="part__inner">
          <div className="part__content" inert={!open}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
