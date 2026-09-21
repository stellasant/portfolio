/**
 * Section order and titles come from `Stella_Portfolio_Final_Structure.md`,
 * which is the authority for hierarchy. `index` is the section number used in
 * the margin rail and in the navigation.
 */
export type SectionMeta = {
  id: string
  index: string
  title: string
  /** Shorter label used only inside the navigation, where width is tight. */
  navLabel: string
}

export const SECTIONS: SectionMeta[] = [
  { id: 'hero', index: '01', title: 'Hero', navLabel: 'Top' },
  { id: 'featured-work', index: '02', title: 'Featured Work', navLabel: 'Work' },
  { id: 'technical-initiatives', index: '03', title: 'Technical Initiatives', navLabel: 'Initiatives' },
  { id: 'current-ai-work', index: '04', title: 'Current AI Work', navLabel: 'Current AI' },
  { id: 'experience-by-area', index: '05', title: 'Experience by Area', navLabel: 'Experience' },
  { id: 'leadership', index: '06', title: 'Leadership, Mentoring & Team Impact', navLabel: 'Leadership' },
  { id: 'earlier-design-work', index: '07', title: 'Earlier Design Work', navLabel: 'Earlier work' },
  { id: 'about', index: '08', title: 'About / Career Path', navLabel: 'About' },
  { id: 'contact', index: '09', title: 'Contact', navLabel: 'Contact' },
]
