import { useEffect, useRef, useState } from 'react'
import { SECTIONS } from '../content/sections'
import { hero } from '../content/hero'

const NAV_SECTIONS = SECTIONS.filter((section) => section.id !== 'hero')

/**
 * Quiet chrome at metadata scale, so the page's weight stays with the content.
 * Scroll-spy underlines the section currently in view.
 */
export function SiteNav() {
  const [current, setCurrent] = useState<string>('hero')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const targets = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (element): element is HTMLElement => element !== null,
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]) setCurrent(visible[0].target.id)
      },
      // A band just below the navigation bar decides which section you are in.
      { rootMargin: '-18% 0px -70% 0px', threshold: 0 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  return (
    <>
      <nav aria-label="Sections" className="nav" data-scrolled={scrolled}>
        <div className="container nav__inner">
          <a className="nav__home" href="#hero">
            {hero.name}
          </a>

          <ul className="nav__list">
            {NAV_SECTIONS.map((section) => (
              <li key={section.id}>
                <a
                  aria-current={current === section.id ? 'true' : undefined}
                  className="nav__link"
                  href={`#${section.id}`}
                >
                  {section.navLabel}
                </a>
              </li>
            ))}
          </ul>

          <button
            aria-controls="nav-panel"
            aria-expanded={open}
            className="nav__toggle"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <span aria-hidden="true" className="nav__toggle-bars">
              <span />
              <span />
              <span />
            </span>
            <span className="nav__toggle-text">{open ? 'Close' : 'Sections'}</span>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="nav__panel" id="nav-panel" ref={panelRef}>
          <div className="container">
            <ul className="nav__panel-list">
              {NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    aria-current={current === section.id ? 'true' : undefined}
                    className="nav__panel-link"
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="nav__panel-num">{section.index}</span>
                    <span>{section.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  )
}
