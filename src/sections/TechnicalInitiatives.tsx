import { technicalInitiatives } from '../content/technicalInitiatives'
import { Entry, Parts, Section } from '../components/primitives'

/**
 * Stacked vertically, each initiative reading as a short editorial article:
 * title, classification, summary, then Background / My work / Outcome in one
 * column. A subtle rule between them, no number column, no metadata column,
 * no card, and nothing hidden.
 */
export function TechnicalInitiatives() {
  return (
    <Section id="technical-initiatives">
      <div className="entries">
        {technicalInitiatives.map((item) => (
          <Entry key={item.id} meta={item.pills} summary={item.summary} title={item.title}>
            <Parts blocks={item.blocks} />
          </Entry>
        ))}
      </div>
    </Section>
  )
}
