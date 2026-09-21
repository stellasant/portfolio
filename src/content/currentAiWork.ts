import type { InitiativeEntry } from './types'

/**
 * Source files:
 *   content/Stella_Portfolio_CurrentAI_AI_Suite_for_Library_Migrations.md
 *   content/Stella_Portfolio_CurrentAI_Product_FE_Workflow.md
 *   content/Stella_Portfolio_CurrentAI_Focus_AI_FE.md
 *
 * Order follows section 4 of Stella_Portfolio_Final_Structure.md.
 */

/** 4.1 — the only entry in this section with a recreated diagram. */
export const aiSuite: InitiativeEntry = {
  id: 'ai-suite-library-migrations',
  title: 'AI Suite for Library Migrations',
  pills: ['AI-assisted Engineering', 'Migration Systems', 'Frontend Platform'],
  summary:
    'Detected a recurring frontend platform problem: outdated libraries were limiting access to newer capabilities and, in some cases, causing bugs that could only be resolved through upgrades. I started designing a library-agnostic AI-assisted migration module, using lessons from real migrations to build a reusable process for analysis, strategy, implementation, and validation. The longer-term vision was to prove it in our frontend repository and then evolve it into a reusable library migration and application modernization service that Making Sense could offer across projects and clients.',
  blocks: [
    {
      label: 'Background',
      body: 'Our frontend repository has several significantly outdated libraries. Beyond preventing teams from using newer capabilities, this had already surfaced as a product problem when reported bugs turned out to come from old library versions and required upgrades to resolve. Large migrations were also expensive to approach manually, with repeated analysis, changes spread across many files, risk of incomplete migrations, and knowledge that often remained with the developer who performed the work. The idea was to turn that recurring problem into a reusable AI-assisted capability. The initiative builds on patterns and lessons from real migrations rather than a theoretical migration process.',
    },
    {
      label: 'My work',
      body: 'I used the migration process I had already defined through real production work as the foundation: `Pre-migration Analysis → Migration Strategy → Implementation → Post-migration Analysis`. From there, I iterated on the concept to make it reusable across different libraries rather than tied to one migration. The current design separates a common **Core** from migration-specific **Packs**, uses mandatory **Scanners** to gather real repository evidence before and after the migration, and keeps decisions, outputs, and progress in a persistent `migration-state.md`. The workflow uses phase gates so critical analysis and validation cannot simply be skipped, while the developer remains responsible for decisions and execution.',
    },
    {
      label: 'Current state',
      body: 'The initiative is still in development. The current V4 is the most complete design so far, but it has not yet been validated end to end on a real migration. The next step is to challenge the architecture with team feedback, simplify what does not provide enough value, and evolve it into a more realistic V5 before building a first usable version. If the approach proves successful inside the FE repository, the longer-term goal is to explore whether it can become a repeatable migration and application modernization offering for Making Sense.',
    },
  ],
}

/** 4.2 and 4.3 — compact companions to the entry above. */
export const currentAiCompanions: InitiativeEntry[] = [
  {
    id: 'product-fe-ai-workflow',
    title: 'Product <-> FE AI Workflow',
    pills: ['AI Workflow Design', 'Product Collaboration', 'Cross-functional Handoffs'],
    summary:
      'Extending the FE AI workflow into Product by helping define an AI-assisted process for Product Analysts and POs, together with structured handoffs between Product and FE. The goal is to reduce context loss between product definition and implementation while keeping both roles in control.',
    blocks: [
      {
        label: 'Current work',
        body: 'I am helping Product map its own workflow into clear AI-assisted steps and define what information should move from Product to FE before implementation starts. I am also designing the reverse handoff for product questions, assumptions, and decisions that emerge during FE work, so important context can move back between roles without being lost.',
      },
      {
        label: 'Status',
        body: 'Work in progress. The process and handoffs are being iterated with Product before broader use.',
      },
    ],
  },
  {
    id: 'focus-ai-fe',
    title: 'Focus AI FE',
    pills: ['AI Adoption', 'Frontend Enablement', 'Knowledge Sharing'],
    summary:
      'I lead an internal frontend initiative focused on practical AI adoption, helping developers turn individual experiments into repeatable ways of using AI in real engineering work.',
    blocks: [
      {
        label: 'My role',
        body: 'I lead and moderate the group, guide discussions, help teammates troubleshoot AI tools and workflows, and share patterns from real frontend work. I also bring initiatives such as the FE AI workflow and AI Suite for Library Migrations into the group to gather feedback and improve them.',
      },
      {
        label: 'Impact',
        body: 'The group gives frontend developers a shared place to compare approaches, reuse what works, and avoid solving the same AI workflow problems independently. My FE AI workflow has also been used as a reference by other client teams.',
      },
    ],
  },
]
