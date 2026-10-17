/**
 * The portfolio data, checked for the mistakes that do not throw.
 *
 * This is the most useful test in the repository, and it exists because of a
 * bug that lived here for a long time without anybody noticing: eight tiles had
 * a button that opened a description, and only three descriptions were ever
 * rendered. Pressing VD EXPRESS, IS PORTAL, BUS PORTAL, ITNET or Roles manager
 * did nothing. Nothing crashed, nothing logged, the page simply sat there — so
 * the only way to find it was for a visitor to press a button and tell you.
 *
 * Every assertion below is one way of writing that bug again.
 */
import { describe, expect, it } from 'vitest'

import { portfolioProjects } from '../portfolio-projects'

/**
 * The same lookup the component uses, rather than a directory listing. Reading
 * the folder would only prove a file sits on disk; this proves Vite resolves
 * it, which is what actually has to be true for the image to appear.
 */
const assets = Object.keys(import.meta.glob('../../assets/*')).map(
  (path) => path.split('/').pop() as string,
)

describe('portfolio projects', () => {
  it('has projects at all', () => {
    expect(portfolioProjects.length).toBeGreaterThan(0)
  })

  /* ---------------------------------------------------- the dead button */

  it('every project that selects something has something to show', () => {
    // The original bug, stated as a rule: a tile cannot ask to open a
    // description it does not have.
    for (const project of portfolioProjects) {
      if (!project.selects) continue
      const shows = Boolean(project.description) || Boolean(project.component)
      expect(shows, `${project.label} opens nothing`).toBe(true)
    }
  })

  it('every description is reachable', () => {
    // The same mistake from the other end: prose nobody can open is prose
    // nobody will read.
    for (const project of portfolioProjects) {
      if (!project.description) continue
      expect(project.selects, `${project.label} has a description but no key`).toBeTruthy()
    }
  })

  /* ------------------------------------------------------- the clashes */

  it('no two projects share a label', () => {
    // The label is the v-for key and the tile's caption, so a duplicate makes
    // Vue reuse the wrong DOM node and shows the wrong caption.
    const labels = portfolioProjects.map((project) => project.label)
    expect(new Set(labels).size).toBe(labels.length)
  })

  it('no two projects share a selection key', () => {
    // Two tiles with the same key open each other's descriptions.
    const keys = portfolioProjects.map((project) => project.selects).filter(Boolean)
    expect(new Set(keys).size).toBe(keys.length)
  })

  /* -------------------------------------------------------- the assets */

  it('every logo is a file that exists', () => {
    // A missing asset is a broken image on the page and nothing in the console
    // worth noticing. 'glitch' is the animated component, not a file.
    for (const project of portfolioProjects) {
      if (project.logo === 'glitch') continue
      expect(assets, `${project.label}: ${project.logo}`).toContain(project.logo)
    }
  })

  /* --------------------------------------------------------- the links */

  it('every href is either an external address or the placeholder', () => {
    for (const project of portfolioProjects) {
      const ok = project.href === '#' || /^https?:\/\//.test(project.href)
      expect(ok, `${project.label}: ${project.href}`).toBe(true)
    }
  })

  it('a tile that only opens a description does not pretend to be a link', () => {
    // href="#" is how a description-only tile is written. Anything with a real
    // address should open in a new tab instead of swallowing the click.
    for (const project of portfolioProjects) {
      if (project.href !== '#') continue
      expect(project.selects, `${project.label} links nowhere and opens nothing`).toBeTruthy()
    }
  })

  /* ---------------------------------------------------- the dimensions */

  it('every logo has a width', () => {
    for (const project of portfolioProjects) {
      expect(project.width, project.label).toBeGreaterThan(0)
    }
  })

  it('DGtek keeps its missing height', () => {
    // Not a typo to fix. The original markup said `heigh="48"`, so that image
    // has never had a height attribute and is scaled by its width alone.
    // Adding one would change how the tile looks, which is why the data leaves
    // it out and why this test says so out loud.
    const dgtek = portfolioProjects.find((project) => project.label === 'DGtek portal')
    expect(dgtek?.height).toBeUndefined()
  })
})
