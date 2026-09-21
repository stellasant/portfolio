import type { InitiativeEntry } from './types'

/**
 * Source files:
 *   content/Stella_Portfolio_TechnicalProposals_ReactQuery_Migration.md
 *   content/Stella_Portfolio_TechnicalProposals_Vitest_Adoption.md
 *   content/Stella_Portfolio_TechnicalProposals_Phrase_i18n_Safe_Rename.md
 *   content/Stella_Portfolio_TechnicalProposals_Permissions_LongTerm_Solution.md
 *
 * Order follows section 3 of Stella_Portfolio_Final_Structure.md.
 */
export const technicalInitiatives: InitiativeEntry[] = [
  {
    id: 'react-query-migration',
    title: 'React Query v2 → v5 Migration',
    pills: ['Migration Strategy', 'Frontend Architecture', 'AI-assisted Migration'],
    summary:
      "Designed the migration strategy for moving a large, multi-team frontend from React Query v2 to v5 across almost 1,000 affected files. The process became the FE team's framework for future library migrations and later the foundation for my AI Suite for Library Migrations.",
    blocks: [
      {
        label: 'Background',
        body: 'React Query v2 had been outdated for years, while v2 and v5 were both running in the same repository. With five frontend teams working in a large shared codebase, the challenge was not just updating APIs. Migration chunks had to account for shared services, feature dependencies, cache invalidation, and safe coexistence between both versions.',
      },
      {
        label: 'My work',
        body: 'I designed the migration process and strategy independently. I analyzed the breaking changes across three major versions and mapped dependencies through shared services, direct imports, and cache invalidation. From that analysis, I defined which features could migrate in parallel, which had to move together, and how v2 and v5 could safely coexist during the transition. I also defined the phased implementation plan, temporary dual-support strategies, rollback boundaries, PR and QA tracking, pre/post migration metrics, and the documentation used by the team. I executed the migration with Codex and Copilot to accelerate repetitive code transformations at scale, while keeping ownership of the migration strategy, technical decisions, review, validation, and manual fixes when AI output was incomplete or incorrect.',
      },
      {
        label: 'Outcome',
        body: 'The migration was completed across almost 1,000 affected files and the repository moved to React Query v5. More importantly, the structure I created, `Pre-migration Analysis → Migration Strategy → Implementation → Post-migration Analysis`, was adopted by the FE team as the approach for future library migrations. I later used that same foundation to design the **AI Suite for Library Migrations**.',
      },
    ],
  },
  {
    id: 'vitest-adoption',
    title: 'Vitest Adoption Proposal',
    pills: ['Technical Investigation', 'Technical Communication', 'Client Proposal'],
    summary:
      'Built and presented the Vitest migration proposal to the client, uncovering the real cause behind recurring Jest problems while preparing the case. The proposal was approved in a single meeting, and Making Sense later showcased the presentation itself as a success case for how to structure and communicate technical proposals to clients. The FE team also adopted my presentation structure as the basis for future technical proposals to the client.',
    blocks: [
      {
        label: 'Background',
        body: "The FE team had decided to propose a migration from Jest to Vitest after recurring testing problems, and I was chosen to create and deliver the presentation to the client's Engineering Manager. To prepare it properly, I started analyzing the problem in depth. That investigation uncovered a deeper architectural cause behind the issues and gave the proposal a much stronger technical foundation.",
      },
      {
        label: 'My work',
        body: 'I investigated beyond the visible timeout and performance symptoms, evaluated optimizing Jest versus moving to Vitest, built a POC in the real repository, ran comparative benchmarks, and defined an implementation path. I then structured the presentation around the actual investigation journey: `Problem → Root Cause → Possible Solutions → Vitest → POC → Comparison → Benchmark → Implementation Plan`. The goal was to make the reasoning easy to follow, keep technical complexity at the right level for the audience, and let the client understand how and why we reached the recommendation.',
      },
      {
        label: 'Outcome',
        body: 'The client approved the proposal in that same meeting. Making Sense later presented the presentation itself internally as a success case for how to structure and communicate technical proposals to clients. The FE team then adopted the same presentation structure as the basis for future technical proposals to the client.',
      },
    ],
  },
  {
    id: 'phrase-i18n-safe-rename',
    title: 'Phrase / i18n Safe Rename Workflow',
    pills: ['Problem Discovery', 'AI-assisted Workflow', 'Developer Tooling'],
    summary:
      'Turned a question that came up while working on a translations ticket into a technical spike that uncovered a hidden production risk, then designed an AI-assisted workflow to solve it safely and repeatably for the FE team.',
    blocks: [
      {
        label: 'Background',
        body: 'While reorganizing existing translation keys, I questioned what would happen to translations in other languages when a key path changed. I proposed a spike to investigate it and discovered that Phrase treats renamed or moved paths as new keys, leaving existing translations attached to the old ones and creating missing translations across locales.',
      },
      {
        label: 'My work',
        body: "I designed the complete safe-rename process and implemented it as a custom Copilot Agent that guides developers through the workflow step by step. The process detects renamed or moved keys, handles ambiguous mappings with human review, preserves existing translations in Phrase, and keeps the developer in control. I also designed the agent's behavior and responses for the different workflow states. A follow-up improvement moved the critical execution step into GitHub Actions, making the process self-serve for developers while keeping dry-run, rollback, and security guardrails.",
      },
      {
        label: 'Outcome',
        body: 'What started as a question during a regular feature ticket became a reusable AI-assisted tool for a problem the team had not previously identified. It replaced a risky manual translation-key change with a defined, repeatable workflow that preserves existing translations and reduces cross-team coordination.',
      },
    ],
  },
  {
    id: 'permissions-long-term-solution',
    title: 'Permissions / Authentication Long-term Solution Proposal',
    pills: ['Cross-stack Architecture', 'Platform Impact', 'Technical Proposal'],
    summary:
      'Expanded a Genetics module-scoped permissions spike into a repo-wide FE and BE solution after discovering the problem affected the platform beyond the original module. The approach became the long-term permissions update strategy across the application.',
    blocks: [
      {
        label: 'Background',
        body: 'The Genetics module was using a temporary fix for user permission updates, and the goal of the spike was to define a proper long-term solution for that module. While investigating the flow, I found that the underlying problem was not specific to the Genetics module. Active users across the application could continue working with outdated permissions after an administrator changed their access.',
      },
      {
        label: 'My work',
        body: "I expanded the analysis beyond the original FE scope and traced what would need to happen across both frontend and backend. I proposed a lightweight permissions versioning approach that allowed the frontend to detect when a user's permissions had changed and refresh them without requiring logout, page reload, or additional infrastructure. The proposal turned a module-level fix into a platform-level solution and required coordinated FE and BE changes.",
      },
      {
        label: 'Outcome',
        body: 'The approach was adopted and implemented as the long-term permissions update solution across the repository, replacing the temporary Genetics module workaround with a shared platform strategy.',
      },
    ],
  },
]
