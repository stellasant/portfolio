/**
 * Site configuration.
 *
 * CV_URL is the single place the public CV is wired from. BASE_URL keeps it
 * correct whether the site is served from a project page or a user site.
 *
 * Set it to null to take the CV down: the hero and Contact then render "CV"
 * as an inactive item instead of a link that leads nowhere.
 */
export const CV_URL: string | null = `${import.meta.env.BASE_URL}stella-maris-santamaria-cv.pdf`
