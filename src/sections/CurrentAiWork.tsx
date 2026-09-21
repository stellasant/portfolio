import { aiSuite, currentAiCompanions } from '../content/currentAiWork'
import { Entry, Parts, PlainPart, Section, Visual } from '../components/primitives'
import { Part } from '../components/Part'
import { RichText } from '../components/RichText'
import { MigrationOrchestrator } from '../visuals/MigrationOrchestrator'

/**
 * The three initiatives stacked vertically, in the same entry pattern as every
 * other section. Differentiated by a status line, not by a band or a card.
 *
 * Each status is a verbatim fragment of that item's own approved copy. Where
 * the approved copy states no status — Focus AI FE — none is shown, because
 * none may be invented.
 */
const STATUS: Record<string, string | undefined> = {
  'ai-suite-library-migrations': 'still in development',
  'product-fe-ai-workflow': 'work in progress',
  'focus-ai-fe': undefined,
}

function Status({ id }: { id: string }) {
  const status = STATUS[id]
  if (!status) return null
  return <p className="status">{status}</p>
}

/** Background and My work stay open; Current state carries the long tail. */
const OPEN_BLOCKS = aiSuite.blocks.slice(0, -1)
const CURRENT_STATE = aiSuite.blocks[aiSuite.blocks.length - 1]

export function CurrentAiWork() {
  return (
    <Section id="current-ai-work">
      <div className="entries">
        <Entry
          meta={aiSuite.pills}
          status={<Status id={aiSuite.id} />}
          summary={aiSuite.summary}
          title={aiSuite.title}
        >
          <div className="parts">
            {OPEN_BLOCKS.map((block) => (
              <PlainPart key={block.label} label={block.label}>
                <p className="part__body">
                  <RichText text={block.body} />
                </p>
              </PlainPart>
            ))}

            {/* Current state holds its own text and the orchestrator diagram,
                which is the tallest thing in this section. */}
            <Part label={CURRENT_STATE.label}>
              <p className="part__body">
                <RichText text={CURRENT_STATE.body} />
              </p>
              <Visual title="Orchestrator flow">
                <MigrationOrchestrator />
              </Visual>
            </Part>
          </div>
        </Entry>

        {currentAiCompanions.map((item) => (
          <Entry
            key={item.id}
            meta={item.pills}
            status={<Status id={item.id} />}
            summary={item.summary}
            title={item.title}
          >
            <Parts blocks={item.blocks} />
          </Entry>
        ))}
      </div>
    </Section>
  )
}
