import { Fragment } from 'react'
import { aiWorkflow, uiEcosystem } from '../content/featuredWork'
import type { CaseGroup, CaseNode } from '../content/types'
import {
  Bullets,
  Entry,
  Parts,
  PlainPart,
  Section,
  Tokens,
  Visual,
} from '../components/primitives'
import { Part } from '../components/Part'
import { RichText } from '../components/RichText'
import { EightAreas, ProcessSpine } from '../visuals/UiEcosystemVisuals'
import {
  ArchitectureLayers,
  LifecycleFlow,
  TeamHandoffs,
  TerminalStepper,
} from '../visuals/WorkflowVisuals'

/** The diagram each `visual` node in the approved content resolves to, with the
 *  short label shown inside its frame. */
const VISUALS = {
  lifecycle: { Component: LifecycleFlow, title: 'Ticket lifecycle' },
  stepper: { Component: TerminalStepper, title: 'Workflow status in the terminal' },
  handoffs: { Component: TeamHandoffs, title: 'Handoffs to Backend and QA' },
  architecture: { Component: ArchitectureLayers, title: 'Plugin architecture' },
}

/** The prose, lists and command tokens of one approved group. */
function GroupText({ nodes }: { nodes: CaseNode[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        if (node.kind === 'para') {
          return (
            <p className="part__body" key={index}>
              <RichText text={node.text} />
            </p>
          )
        }
        if (node.kind === 'list') return <Bullets items={node.items} key={index} />
        if (node.kind === 'tokens') return <Tokens items={node.items} key={index} />
        return null
      })}
    </>
  )
}

/** The requested diagrams belonging to one approved group. */
function GroupVisuals({ nodes }: { nodes: CaseNode[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        if (node.kind !== 'visual') return null
        const { Component, title } = VISUALS[node.visual]
        return (
          <Visual key={index} title={title}>
            <Component />
          </Visual>
        )
      })}
    </>
  )
}

/**
 * The long-form case. `Context / origin` opens it and `Adoption / outcome`
 * closes it, both always visible. Everything between — ten further groups and
 * three more diagrams — folds into the `What I designed` accordion, which is
 * what made this entry run for screens.
 */
const CONTEXT = aiWorkflow.groups[0]
const DESIGNED = aiWorkflow.groups[1]
const INSIDE: CaseGroup[] = aiWorkflow.groups.slice(2, -1)
const ADOPTION = aiWorkflow.groups[aiWorkflow.groups.length - 1]

export function FeaturedWork() {
  return (
    <Section id="featured-work">
      <div className="entries">
        <Entry meta={uiEcosystem.pills} summary={uiEcosystem.summary} title={uiEcosystem.title}>
          <Parts blocks={uiEcosystem.blocks} />

          <Visual title="The eight areas the proposal covered">
            <EightAreas />
          </Visual>
          <Visual title="How the initiative ran, end to end">
            <ProcessSpine />
          </Visual>
        </Entry>

        <Entry meta={aiWorkflow.pills} summary={aiWorkflow.summary} title={aiWorkflow.title}>
          <div className="parts">
            <PlainPart label={CONTEXT.heading}>
              <GroupText nodes={CONTEXT.nodes} />
            </PlainPart>

            <Part label={DESIGNED.heading}>
              <GroupText nodes={DESIGNED.nodes} />
              <GroupVisuals nodes={DESIGNED.nodes} />

              {INSIDE.map((group) => (
                <Fragment key={group.heading}>
                  <section className="subpart">
                    <h5 className="subpart__label">{group.heading}</h5>
                    <GroupText nodes={group.nodes} />
                  </section>
                  <GroupVisuals nodes={group.nodes} />
                </Fragment>
              ))}
            </Part>

            <PlainPart label={ADOPTION.heading}>
              <GroupText nodes={ADOPTION.nodes} />
            </PlainPart>
          </div>
        </Entry>
      </div>
    </Section>
  )
}
