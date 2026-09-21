import { hero } from '../content/hero'
import { MetaList } from '../components/primitives'
import { CV_URL } from '../config'

/**
 * A structured hero on the 12-column grid. No image, no banner, no card.
 *
 * Left 7 columns: the name and the role. Right 5: the approved introduction,
 * the approved skill terms and the links, all starting on the same line as the
 * name.
 *
 * The approved hero copy has no separate positioning line, so the role — a
 * verbatim phrase from that copy — carries it.
 *
 * Links: Behance was swapped for CV at Stella's request. CV points at
 * `config.CV_URL`; until that is set it renders as an inactive item rather
 * than a link that leads nowhere. Behance is still reachable from Earlier
 * Design Work and from Contact.
 */
const HERO_LINKS = hero.links.filter((link) => link.label !== 'Behance')

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="section hero" id="hero">
      <div className="container">
        <div className="grid">
          <div className="col-7">
            <h1 className="hero__name" id="hero-title">
              {hero.name}
            </h1>
            <p className="hero__role">Senior Frontend Developer</p>
          </div>

          <div className="col-5 hero__aside">
            <p className="hero__intro">{hero.intro}</p>
            <MetaList items={hero.pills} />
            <ul className="hero__links">
              {HERO_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    className="link"
                    href={link.href}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                {CV_URL ? (
                  <a className="link" download href={CV_URL}>
                    CV
                  </a>
                ) : (
                  <span aria-disabled="true" className="hero__links-pending">
                    CV
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
