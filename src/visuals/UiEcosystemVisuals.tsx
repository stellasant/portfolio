import { uiEcosystemAreas } from '../content/featuredWork'

/**
 * Visuals for the Frontend UI Ecosystem Proposal.
 *
 * Confidentiality: the reference material for this case is a private client
 * presentation. Every label below is quoted from the approved Markdown for this
 * case, not from that presentation, so nothing client-specific reaches the
 * public build. The references were used only to decide what kind of visual
 * belongs here.
 */

/** The eight areas, quoted from the `Background` block of the approved copy. */
export function EightAreas() {
  return (
    <div aria-label="defined proposals across eight areas" role="group">
      <div className="plate-grid">
        {uiEcosystemAreas.map((area) => (
          <div className="plate-grid__cell" key={area}>
            <span>{area}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * The end-to-end process described in the `My work` block, as a sequence.
 * Numbered because the content genuinely is one. Each label is a verbatim
 * fragment of that block; the capital first letter is applied with CSS so the
 * text itself stays unchanged.
 */
const PROCESS = [
  'mapped the current issues',
  'ran technical spikes and POCs',
  'audited the component ecosystem',
  'evaluated alternatives',
  'defined proposals across eight areas',
  'proposed a phased implementation plan',
]

export function ProcessSpine() {
  return (
    <div aria-label="I led the process end to end" role="group">
      <ol className="spine">
        {PROCESS.map((step, index) => (
          <li className="spine__step" key={step}>
            <span className="spine__num">{String(index + 1).padStart(2, '0')}</span>
            <span className="spine__label">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
