import { Fragment } from 'react'

/**
 * Visuals for the AI-assisted FE Workflow case.
 *
 * These follow the `Visual content` section of
 * content/Stella_Portfolio_FeaturedWork_AI_Workflow.md. They are simplified,
 * sanitised recreations: they show that the system exists and how it is shaped,
 * and deliberately carry no prompts, agent instructions, hooks, spec or domain
 * content, team conventions or ticket data. The private HTML deck was used only
 * as a reference for what to draw, and is not published, embedded or linked.
 */

/* --- Visual 1: workflow overview ----------------------------------------- */

const LIFECYCLE = ['/ticket', '/implement', '/pr', '/review-comments', '/wrap']

const OUTPUTS = ['FE → BE contract', 'FE → QA handoff']

export function LifecycleFlow() {
  return (
    <div
      aria-label="Ticket to Implement to PR to Review to Wrap, with a manual step between each"
      role="group"
    >
      <div className="flow">
        {LIFECYCLE.map((step, index) => (
          <Fragment key={step}>
            {index > 0 ? <span aria-hidden="true" className="flow__gate" /> : null}
            <div className="flow__step">
              <span className="flow__node">{step}</span>
            </div>
          </Fragment>
        ))}
      </div>

      <ul className="flow__outputs">
        {OUTPUTS.map((output) => (
          <li className="flow__output" key={output}>
            {output}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* --- Visual 3: terminal status stepper ------------------------------------ */

type StepState = 'done' | 'active' | 'pending'

const STEPPER: { label: string; state: StepState; count?: string }[] = [
  { label: 'spec', state: 'done' },
  { label: 'implement', state: 'active', count: '2/3' },
  { label: 'pr', state: 'pending' },
  { label: 'review', state: 'pending' },
  { label: 'wrap', state: 'pending' },
]

/** The source line, kept verbatim in the DOM for assistive technology. */
const STEPPER_SOURCE = 'spec ✓ → implement ◉ 2/3 → pr ◌ → review ◌ → wrap ◌'

export function TerminalStepper() {
  return (
    <div role="group">
      <div className="terminal">
        <span className="sr-only">{STEPPER_SOURCE}</span>
        <div aria-hidden="true" className="terminal__steps">
          {STEPPER.map((step, index) => (
            <Fragment key={step.label}>
              {index > 0 ? <span className="terminal__arrow">→</span> : null}
              <span className="terminal__step" data-state={step.state}>
                {step.label}
                <span className="tmark" data-state={step.state} />
                {step.count ? <span className="terminal__count">{step.count}</span> : null}
              </span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

/* --- Visual 4: team handoffs ---------------------------------------------- */

const HANDOFFS = [
  {
    to: 'Backend',
    text: 'FE surfaces API and contract assumptions early for Backend confirmation.',
  },
  {
    to: 'QA',
    text: 'FE produces suggested QA scenarios and FE Verification for QA.',
  },
]

export function TeamHandoffs() {
  return (
    <div aria-label="Handoffs from FE to Backend and QA" role="group">
      <div className="handoffs">
        {HANDOFFS.map((handoff) => (
          <div className="handoff" key={handoff.to}>
            <p className="handoff__route">
              <span className="handoff__role">FE</span>
              <span aria-hidden="true" className="handoff__arrow" />
              <span className="handoff__role">{handoff.to}</span>
            </p>
            <p className="handoff__text">{handoff.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* --- Visual 2: system architecture ---------------------------------------- */

const LAYERS = [
  { name: 'Claude Code Plugin', contents: ['shared workflow core'] },
  { name: 'Product repository', contents: ['specs', 'domains', 'team conventions'] },
  { name: 'Developer configuration', contents: ['team', 'language', 'permissions'] },
]

export function ArchitectureLayers() {
  return (
    <div
      aria-label="Three layers: Claude Code Plugin, Product repository, Developer configuration"
      role="group"
    >
      <div className="layers">
        {LAYERS.map((layer) => (
          <div className="layer" key={layer.name}>
            <p className="layer__name">{layer.name}</p>
            <ul className="tokens">
              {layer.contents.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
