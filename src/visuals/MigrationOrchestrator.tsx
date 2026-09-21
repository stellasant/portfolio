import type { ReactNode } from 'react'
import { RichText } from '../components/RichText'

/**
 * AI Suite for Library Migrations — orchestrator flow.
 *
 * Recreated in English from `orchestrator_flow_v2_completo.jpg`, following the
 * `Visual content` instructions in
 * content/Stella_Portfolio_CurrentAI_AI_Suite_for_Library_Migrations.md:
 * the original Spanish image is not embedded, the terminology is updated to the
 * current design (`migration-state.md`, not the reference image's
 * `migration-state.json`), and the flow stays conceptual. The lane taxonomy of
 * the source is preserved: orchestration, routing and guards, skills or agents,
 * validators, critical decisions, and the final record.
 */

type Lane = 'Orchestrator' | 'Router / guard' | 'Skills / agents' | 'Validators' | 'Critical decision' | 'Log' | ''

type NodeKind = 'step' | 'decision' | 'terminal' | 'stop'

type NodeSpec = {
  lane: Lane
  kind?: NodeKind
  title: string
  meta?: string[]
}

function FlowNode({ kind = 'step', lane, title, meta }: NodeSpec) {
  const className = [
    'node',
    kind === 'decision' ? 'node--decision' : '',
    kind === 'terminal' ? 'node--terminal' : '',
    kind === 'stop' ? 'node--stop' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={className}>
      {lane ? <p className="node__tag">{lane}</p> : null}
      <p className="node__title">
        <RichText text={title} />
      </p>
      {meta?.length ? (
        <ul className="node__meta">
          {meta.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

/** One chart row: lane name on the left at wide widths, content on the right. */
function Row({ lane, showLane, children }: { lane: Lane; showLane: boolean; children: ReactNode }) {
  return (
    <div className="chart__row">
      <p aria-hidden="true" className="chart__lane">
        {showLane ? lane : ''}
      </p>
      <div className="chart__cell">{children}</div>
    </div>
  )
}

function Link({ branch = false }: { branch?: boolean }) {
  return (
    <div className="chart__row">
      <p aria-hidden="true" className="chart__lane" />
      <div aria-hidden="true" className={branch ? 'chart__link chart__link--branch' : 'chart__link'} />
    </div>
  )
}

const SAFETY_BRANCH: { label: string; node: NodeSpec }[] = [
  {
    label: 'No',
    node: {
      lane: 'Skills / agents',
      title: 'No safety net',
      meta: ['Warn', 'Suggest tests'],
    },
  },
  {
    label: 'Yes',
    node: {
      lane: 'Skills / agents',
      title: 'Safety net',
      meta: ['Baseline recorded in `migration-state.md`'],
    },
  },
]

const LEGEND: { kind: string; label: string }[] = [
  { kind: 'step', label: 'Orchestration, routing, skills and validators' },
  { kind: 'decision', label: 'Critical decision' },
  { kind: 'terminal', label: 'Start and end' },
]

export function MigrationOrchestrator() {
  return (
    <div
      aria-label="Orchestrator flow for the AI Suite for Library Migrations, from repository scan to a migration closed with evidence"
      role="group"
    >
      <div className="chart">
        <Row lane="" showLane={false}>
          <FlowNode
            kind="terminal"
            lane=""
            title="Repository, library and maximum files per chunk"
          />
        </Row>
        <Link />

        <Row lane="Orchestrator" showLane>
          <FlowNode
            lane="Orchestrator"
            meta={['Is the library used?', 'Where?', 'How much?']}
            title="Phase 0 — Lightweight repository scan"
          />
        </Row>
        <Link />

        <Row lane="Orchestrator" showLane={false}>
          <FlowNode
            lane="Orchestrator"
            meta={['Scan id', 'Timestamp', 'Library', 'Base ref']}
            title="Initialise `migration-state.md`"
          />
        </Row>
        <Link />

        <Row lane="Router / guard" showLane>
          <FlowNode
            lane="Router / guard"
            meta={['Active phase', 'Pack to load', 'Next chunk']}
            title="Router reads `migration-state.md`"
          />
        </Row>
        <Link />

        <Row lane="Router / guard" showLane={false}>
          <FlowNode
            lane="Router / guard"
            meta={['File completed?', 'Chunk locked?', 'Phase blocked?']}
            title="Guard — can it move forward?"
          />
        </Row>
        <Link branch />
        <Row lane="Router / guard" showLane={false}>
          <div className="branch">
            <div className="branch__arm">
              <p className="branch__label">blocked</p>
              <FlowNode kind="stop" lane="Router / guard" title="Stop and report" />
            </div>
          </div>
        </Row>
        <Link />

        <Row lane="Skills / agents" showLane>
          <FlowNode
            lane="Skills / agents"
            meta={[
              'Finds tests covering the modules to migrate',
              'Coverage',
              'Assertiveness',
              'Covered exports',
            ]}
            title="Skill — test safety net evaluation"
          />
        </Row>
        <Link />

        <Row lane="Critical decision" showLane>
          <FlowNode
            kind="decision"
            lane="Critical decision"
            meta={['Export coverage', 'Critical cases']}
            title="Are the tests robust enough?"
          />
        </Row>
        <Link branch />

        <Row lane="Skills / agents" showLane>
          <div className="branch">
            {SAFETY_BRANCH.map((arm) => (
              <div className="branch__arm" key={arm.label}>
                <p className="branch__label">{arm.label}</p>
                <FlowNode {...arm.node} />
              </div>
            ))}
          </div>
        </Row>
        <Link />

        <Row lane="Skills / agents" showLane={false}>
          <FlowNode
            lane="Skills / agents"
            meta={[
              'Pre-migration scan',
              'Chunks of at most N files',
              'Migration plan written to state',
            ]}
            title="Skill F1 — Pre-migration scan and migration plan"
          />
        </Row>
        <Link />

        <Row lane="Skills / agents" showLane={false}>
          <div className="repeat">
            <span className="repeat__label">
              <span aria-hidden="true">&#8635;</span> remaining chunks
            </span>
            <FlowNode
              lane="Skills / agents"
              meta={[
                'Locks the chunk',
                'Migrates files',
                'Respects exclusion zones',
                'Updates file status per file',
              ]}
              title="Skill F2–F3 — Chunked execution"
            />
            <div aria-hidden="true" className="chart__link" />
            <FlowNode
              lane="Validators"
              meta={[
                'Runs the test runner',
                'Compares against the baseline',
                'Same tests passing unlocks the chunk',
              ]}
              title="Validator — post-chunk"
            />
          </div>
        </Row>
        <Link />

        <Row lane="Validators" showLane>
          <FlowNode
            lane="Validators"
            meta={['Post-migration scan', 'Pre and post diff', 'Any old imports left?', 'Final coverage']}
            title="Validator F4 — Post-migration scan and final diff"
          />
        </Row>
        <Link />

        <Row lane="Critical decision" showLane>
          <FlowNode
            kind="decision"
            lane="Critical decision"
            meta={['No old imports', 'Tests at or above the baseline']}
            title="Clean diff and tests passing?"
          />
        </Row>
        <Link branch />
        <Row lane="Critical decision" showLane={false}>
          <div className="branch">
            <div className="branch__arm">
              <p className="branch__label">
                <span aria-hidden="true">&#8635;</span> pending
              </p>
              <FlowNode kind="stop" lane="Skills / agents" title="Back to chunked execution" />
            </div>
          </div>
        </Row>
        <Link />

        <Row lane="Log" showLane>
          <FlowNode
            lane="Log"
            meta={[
              'Test baseline before and after',
              'Diff',
              'Completed chunks',
              'Exclusion zones',
              'Scan id',
              'Closing timestamp',
            ]}
            title="Final record — `migration-state.md`"
          />
        </Row>
        <Link />

        <Row lane="" showLane={false}>
          <FlowNode kind="terminal" lane="" title="Migration closed with evidence" />
        </Row>
      </div>

      <ul className="chart__legend">
        {LEGEND.map((entry) => (
          <li key={entry.kind}>
            <span aria-hidden="true" className="chart__swatch" data-kind={entry.kind} />
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
