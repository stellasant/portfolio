import type { CaseGroup, LabelledBlock } from './types'

/** Source: content/Stella_Portfolio_FeaturedWork_UI_Ecosystem.md */
export const uiEcosystem: {
  id: string
  title: string
  pills: string[]
  summary: string
  blocks: LabelledBlock[]
} = {
  id: 'ui-ecosystem',
  title: 'Frontend UI Ecosystem Proposal',
  pills: ['UI Systems', 'Frontend Architecture', 'Design Systems'],
  summary:
    'Designed a complete UI ecosystem proposal for a frontend repository shared by five teams after identifying that an ongoing rearchitecture did not define how the UI layer should evolve.',
  blocks: [
    {
      label: 'Background',
      body: 'A major frontend rearchitecture was already being implemented, but there was no plan for how the existing UI ecosystem should evolve with it. The UI layer also had unresolved issues across styling, shared components, Design System adoption, responsive behavior, performance, UI libraries, development workflow, and documentation.',
    },
    {
      label: 'My work',
      body: 'I raised the gap and started the initiative myself. Over three months, I led the process end to end: mapped the current issues, ran technical spikes and POCs, audited the component ecosystem, evaluated alternatives, and defined proposals across eight areas. I also proposed a phased implementation plan, coordinated contributions across the 11-person frontend group, and followed up on the work as team members contributed to specific parts of the initiative.',
    },
    {
      label: 'Outcome',
      body: 'I presented the proposal to client-side Engineering Management. It was well received, but implementation was postponed until the broader frontend rearchitecture was completed, to avoid running two large changes in parallel.',
    },
  ],
}

/**
 * The eight areas the proposal covered, quoted verbatim from the `Background`
 * block above. Used as labels for the recreated "eight areas" visual so that no
 * label originates from the private client presentation.
 */
export const uiEcosystemAreas = [
  'styling',
  'shared components',
  'Design System adoption',
  'responsive behavior',
  'performance',
  'UI libraries',
  'development workflow',
  'documentation',
] as const

/** Source: content/Stella_Portfolio_FeaturedWork_AI_Workflow.md */
export const aiWorkflow: {
  id: string
  title: string
  pills: string[]
  summary: string
  groups: CaseGroup[]
} = {
  id: 'ai-assisted-fe-workflow',
  title: 'AI-assisted FE Workflow',
  pills: ['AI-assisted Engineering', 'Claude Code', 'Developer Workflow'],
  summary:
    'Designed and built a custom SDD-based Claude Code workflow from scratch, turning my years-long ticket process into a human-in-the-loop system adopted by the FE team. It structures the full ticket lifecycle, preserves product knowledge, and creates explicit handoffs with Backend and QA.',
  groups: [
    {
      heading: 'Context / origin',
      nodes: [
        {
          kind: 'list',
          items: [
            'The FE team was looking for a consistent way to work with AI.',
            'For years, I had already been using my own manual process in Notion to work on Jira tickets: `Background`, `Need`, `Goals`, `Related files`, `Extra info`, `FE Tasks`.',
            'I took that real working process, moved it into Claude, and adapted it to be **SDD-based and human in the loop**.',
            '**It was a self-initiated project that I designed from scratch**, without starting from an existing library, framework, or workflow.',
          ],
        },
      ],
    },
    {
      heading: 'What I designed',
      nodes: [
        { kind: 'para', text: 'A complete workflow to take a Jira ticket from start to finish:' },
        { kind: 'visual', visual: 'lifecycle' },
        {
          kind: 'para',
          text: 'Each step is executed manually through a command. There is no automatic chaining. The developer decides when to move forward.',
        },
        { kind: 'para', text: 'I also added on-demand commands:' },
        {
          kind: 'tokens',
          items: [
            '/config',
            '/guide',
            '/status',
            '/catchup',
            '/contract',
            '/qa-scenarios',
            '/future-ticket',
            '/draft-ticket',
          ],
        },
      ],
    },
    {
      heading: 'The spec',
      nodes: [
        {
          kind: 'list',
          items: [
            'It is created before touching the code.',
            'It follows the same logic as my original Notion process.',
            'It includes functional context and the technical plan.',
            'It is reviewed with the developer.',
            'It goes through an adversarial review with `spec-reviewer` before approval.',
            'It is iterated until the developer approves it.',
            '**The spec lives during the ticket and is frozen when the ticket is completed.**',
          ],
        },
      ],
    },
    {
      heading: 'Specs vs Domains',
      nodes: [
        { kind: 'para', text: 'This is one of the core concepts of the system:' },
        {
          kind: 'list',
          items: [
            '**Spec:** temporary knowledge related to one ticket.',
            '**Domain:** permanent product and business rules.',
            'When a ticket is closed, `/wrap` extracts durable business rules and adds them to `domains/`.',
            'Domains grow with the product and survive individual tickets.',
          ],
        },
        {
          kind: 'para',
          text: 'The spec belongs to the ticket. `domains/` keeps the knowledge that should remain.',
        },
      ],
    },
    {
      heading: 'Subagents',
      nodes: [
        { kind: 'para', text: 'I defined specialized workers for heavy analysis and review tasks:' },
        {
          kind: 'tokens',
          items: ['code-explorer', 'spec-reviewer', 'diff-reviewer', 'qa-suggester', 'done-checker'],
        },
        {
          kind: 'para',
          text: 'They are read-only and return findings. **They do not make decisions for the developer.**',
        },
      ],
    },
    {
      heading: 'Human in the loop / guardrails',
      nodes: [
        { kind: 'para', text: 'This is a core part of the workflow.' },
        {
          kind: 'list',
          items: [
            'The developer runs every command.',
            'AI does not commit.',
            'AI does not push.',
            'AI does not create PRs.',
            'AI does not reply to review comments on its own.',
            'State lives in files, not in the chat.',
          ],
        },
        {
          kind: 'para',
          text: 'It is not "AI doing the ticket by itself". It is **AI structured around the developer’s working process**.',
        },
      ],
    },
    {
      heading: 'Context recovery',
      nodes: [
        {
          kind: 'para',
          text: 'I designed mechanisms so tickets can continue across multiple days and sessions:',
        },
        {
          kind: 'list',
          items: [
            '`/status` shows the current workflow step.',
            '`/catchup` rebuilds the real working state using git and the spec.',
            'A SessionStart hook helps the developer understand the current state when returning to a session.',
            'The code remains the source of truth when there is drift.',
          ],
        },
      ],
    },
    {
      heading: 'Status UI',
      nodes: [
        { kind: 'para', text: 'The workflow includes a stepper directly in the terminal:' },
        { kind: 'visual', visual: 'stepper' },
        {
          kind: 'para',
          text: 'This makes the ticket state visible without requiring the developer to inspect files manually.',
        },
      ],
    },
    {
      heading: 'BE handoff',
      nodes: [
        { kind: 'para', text: 'I added this to address a real coordination problem between FE and BE.' },
        {
          kind: 'list',
          items: [
            'FE defines API and contract assumptions early.',
            'BE can confirm or correct them before implementation moves too far.',
            'It does not require both teams to be working on the ticket at the same time.',
            'The workflow makes unconfirmed assumptions explicit instead of leaving them hidden until late in development.',
          ],
        },
      ],
    },
    {
      heading: 'QA handoff',
      nodes: [
        { kind: 'para', text: 'Another output designed specifically for another role:' },
        {
          kind: 'list',
          items: [
            'Suggested QA scenarios in Gherkin.',
            'Stable scenario IDs.',
            'FE Verification.',
            'One Jira comment that is updated as the implementation changes.',
            'It is input for QA. **It does not replace QA or act as a QA sign-off.**',
          ],
        },
        { kind: 'visual', visual: 'handoffs' },
      ],
    },
    {
      heading: 'Team configuration',
      nodes: [
        {
          kind: 'list',
          items: [
            '`/config` asks for the developer’s team and chat language.',
            'It resolves the Jira prefix based on the selected team.',
            'The chat can use the developer’s preferred language.',
            'Everything shared or committed remains in English.',
            'Each team can define its own `team-conventions`.',
          ],
        },
      ],
    },
    {
      heading: 'Plugin architecture',
      nodes: [
        { kind: 'para', text: 'I turned the workflow into an independent **Claude Code plugin**:' },
        {
          kind: 'list',
          items: [
            'shared core: commands, agents, hooks, documentation, and status line',
            'product repository: specs, domains, and team conventions',
            'personal configuration: language, team, and permissions',
          ],
        },
        { kind: 'visual', visual: 'architecture' },
        {
          kind: 'para',
          text: 'This allows fixes and improvements to be distributed from one place instead of copying the workflow manually across repositories.',
        },
      ],
    },
    {
      heading: 'Adoption / outcome',
      nodes: [
        {
          kind: 'list',
          items: [
            'I presented it to the FE team.',
            'The team tested it and responded positively.',
            'I presented it to Engineering Management at Making Sense and to the client’s Engineering Manager.',
            'It was adopted by the team.',
            'We are currently improving it based on real usage and feedback.',
            'I am also extending the concept toward Product, although that belongs in the **Current AI Work** section rather than this case.',
          ],
        },
      ],
    },
  ],
}
