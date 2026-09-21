/** Source: content/Stella_Portfolio_Contact.md */
export type ContactEntry = {
  label: string
  /** Display text exactly as written in the approved Markdown. */
  value: string
  href: string | null
}

export const contact: ContactEntry[] = [
  { label: 'Email', value: 'santamariastella2@gmail.com', href: 'mailto:santamariastella2@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/stellasant', href: 'https://www.linkedin.com/in/stellasant' },
  { label: 'Behance', value: 'behance.net/stella-sant', href: 'https://www.behance.net/stella-sant' },
  // `href` is resolved at render time from `config.CV_URL`; see src/config.ts.
  { label: 'CV', value: 'Download CV', href: null },
]
