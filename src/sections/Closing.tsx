import { Fragment } from 'react'
import { about } from '../content/about'
import { contact } from '../content/contact'
import { earlierDesignWork } from '../content/earlierDesignWork'
import { CV_URL } from '../config'
import { Section } from '../components/primitives'

/**
 * The approved intro and the link out. The image grid and the three project
 * names were both removed at Stella's request; the three names are still in
 * `content/earlierDesignWork.ts` if they are ever wanted back.
 */
export function EarlierDesignWork() {
  return (
    <Section id="earlier-design-work">
      <p className="earlier__intro">{earlierDesignWork.intro}</p>

      <p className="earlier__link">
        <a className="link" href={earlierDesignWork.link.href} rel="noreferrer" target="_blank">
          {earlierDesignWork.link.label}
        </a>
      </p>
    </Section>
  )
}

/** The progression spans the page width; the approved text sits beneath it. */
export function About() {
  return (
    <Section id="about">
      <ol className="path">
        {about.path.map((step, index) => (
          <Fragment key={step}>
            {index > 0 ? (
              <li aria-hidden="true" className="path__arrow">
                &#8594;
              </li>
            ) : null}
            <li>{step}</li>
          </Fragment>
        ))}
      </ol>

      <div className="grid" style={{ marginTop: 'var(--space-block)' }}>
        {about.paragraphs.map((paragraph) => (
          <p className="col-5 about__text" key={paragraph.slice(0, 24)}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}

/** A simple strong ending: typography only, on the same page background. */
export function Contact() {
  return (
    <Section id="contact">
      <dl className="contact-list">
        {contact.map((entry) => {
          const href = entry.label === 'CV' ? CV_URL : entry.href
          const external = href?.startsWith('http')

          return (
            <div className="contact-row" key={entry.label}>
              <dt>{entry.label}</dt>
              <dd>
                {href ? (
                  <a
                    className="link"
                    download={entry.label === 'CV' ? true : undefined}
                    href={href}
                    rel={external ? 'noreferrer' : undefined}
                    target={external ? '_blank' : undefined}
                  >
                    {entry.value}
                  </a>
                ) : (
                  /* No public CV asset has been supplied, so this stays an
                     inactive item rather than a link that leads nowhere. */
                  <span aria-disabled="true" className="contact-pending">
                    {entry.value}
                  </span>
                )}
              </dd>
            </div>
          )
        })}
      </dl>
    </Section>
  )
}
