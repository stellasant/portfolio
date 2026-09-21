import { experienceByArea } from '../content/experience'
import { leadership } from '../content/leadership'
import { Bullets, Entry, Section } from '../components/primitives'

/**
 * Three areas stacked as ordinary editorial subsections. No columns, no
 * vertical dividers between columns, no cards — a rule between entries and the
 * reading measure do the separating.
 */
export function ExperienceByArea() {
  return (
    <Section id="experience-by-area">
      <div className="entries">
        {experienceByArea.map((area) => (
          <Entry key={area.title} meta={area.pills} summary={area.lead} title={area.title}>
            <Bullets items={area.points} />
          </Entry>
        ))}
      </div>
    </Section>
  )
}

/**
 * The same stacked pattern. The metrics row is gone: the numbers it showed
 * ("five-person team", "more than ten initiatives", "up to three UX
 * Developers", "about one year") live in the approved sentences below, where
 * they belong, and are not repeated as standalone statistics.
 */
export function Leadership() {
  return (
    <Section id="leadership">
      <div className="entries">
        {leadership.map((role) => (
          <Entry key={role.title} meta={role.pills} summary={role.lead} title={role.title}>
            <Bullets items={role.points} />
          </Entry>
        ))}
      </div>
    </Section>
  )
}
