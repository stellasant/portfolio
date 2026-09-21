import type { AreaEntry } from './types'

/** Source: content/Stella_Portfolio_Experience_by_Area.md */
export const experienceByArea: AreaEntry[] = [
  {
    title: 'Product UI & Design Collaboration',
    pills: ['Product UI', 'UX Collaboration', 'React'],
    lead: 'My background spans UX Design, UX Development, and Frontend Engineering, so I approach UI implementation with both design intent and production constraints in mind.',
    points: [
      'Build production interfaces in React and TypeScript from design specs, including business rules, interaction states, responsiveness, state management, and API integration.',
      'Collaborate with UX and Product to clarify missing states, edge cases, interaction behavior, and implementation constraints before they become delivery problems.',
      'Suggest alternatives when a design needs to fit existing patterns, reusable components, or technical constraints instead of silently filling gaps.',
      'Use Design System guidance and existing UI patterns to keep implementation consistent across the product.',
    ],
  },
  {
    title: 'Component Libraries & Design Systems',
    pills: ['Component Libraries', 'Storybook', 'Design Systems'],
    lead: 'I spent several years working directly on reusable UI systems before moving fully into Frontend Engineering.',
    points: [
      "As a UX Developer, I built and maintained the client's React and TypeScript component library, distributed as a versioned private package and consumed by the main application.",
      'Built components from scratch with styled-components and Storybook without relying on a base UI framework.',
      'Created documentation for contribution workflow, versioning, releases, and consumption.',
      'Designed a Storybook documentation template to move the library toward Design System practices, combining technical examples with UX guidance for purpose, usage, variants, and specifications.',
      'Built a component library POC for Making Sense with React, TypeScript, Storybook, component architecture, and documentation standards.',
      "Continued contributing to the client's component library after moving into Frontend Engineering when feature work required changes or new components.",
    ],
  },
  {
    title: 'Frontend Delivery & Technical Ownership',
    pills: ['React', 'TypeScript', 'Frontend Platform'],
    lead: 'My frontend work combines feature delivery with platform-level improvements that make the codebase easier to evolve.',
    points: [
      'Build production features end to end in React and TypeScript, working across business rules, state management, REST APIs, testing, and reusable UI.',
      'Break complex work into implementation tasks, estimate effort, identify dependencies, and document technical decisions.',
      'Investigate recurring or systemic problems instead of treating them as isolated fixes, then turn the findings into migrations, tooling, technical proposals, or workflow improvements.',
      'Work across feature delivery and broader frontend concerns such as testing infrastructure, dependency migrations, permissions, internationalization, documentation, and developer tooling.',
    ],
  },
]
