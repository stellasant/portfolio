/**
 * Site configuration.
 *
 * CV_URL is the single place to wire the public CV. No public CV asset was
 * supplied with the approved content, so it is null and the "Download CV" entry
 * renders as an inactive item rather than a link that goes nowhere.
 *
 * To connect it: drop the public PDF into `app/public/` and set
 *   export const CV_URL: string | null = `${import.meta.env.BASE_URL}your-cv.pdf`
 * Nothing else needs to change.
 */
export const CV_URL: string | null = null
