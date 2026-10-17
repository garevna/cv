/**
 * The tiles, as the page builds them.
 *
 * `mount` renders the component into a DOM that jsdom provides, so these are
 * not assertions about the source — they are assertions about what a browser
 * would actually have on screen. That difference is the whole point: the
 * component used to be twelve hand-written blocks, and the refactor to one
 * v-for is only safe if the output is the same.
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import PortfolioButtons from '../PortfolioButtons.vue'
import PointerButton from '../PointerButton.vue'
import LinkButton from '../LinkButton.vue'
import { portfolioProjects } from '@/configs/portfolio-projects'

const described = portfolioProjects.filter((project) => project.selects)
const links = portfolioProjects.filter((project) => !project.selects)

describe('PortfolioButtons', () => {
  it('renders one tile per project', () => {
    const wrapper = mount(PortfolioButtons)
    expect(wrapper.findAll('.portfolio-buttons > a')).toHaveLength(portfolioProjects.length)
  })

  it('gives every tile its caption', () => {
    // data-social is what the CSS shows under the cube on hover.
    const wrapper = mount(PortfolioButtons)
    const captions = wrapper.findAll('.portfolio-buttons > a').map((a) => a.attributes('data-social'))
    expect(captions).toEqual(portfolioProjects.map((project) => project.label))
  })

  it('opens external links in a new tab, and never the placeholder', () => {
    // A tile with href="#" must not carry target="_blank": it is a button, not
    // a link, and opening a blank tab on click would be a visible bug.
    const wrapper = mount(PortfolioButtons)
    for (const a of wrapper.findAll('.portfolio-buttons > a')) {
      const href = a.attributes('href')
      const target = a.attributes('target')
      if (href === '#') expect(target, href).toBeUndefined()
      else expect(target, href).toBe('_blank')
    }
  })

  it('uses the pointer button where there is something to open', () => {
    const wrapper = mount(PortfolioButtons)
    expect(wrapper.findAllComponents(PointerButton)).toHaveLength(described.length)
    expect(wrapper.findAllComponents(LinkButton)).toHaveLength(links.length)
  })

  it('tells the page which project was chosen', async () => {
    // defineModel means pressing a button emits an update. The page listens to
    // that and renders the matching description, so this is the join between
    // the two halves of the portfolio.
    const wrapper = mount(PortfolioButtons)
    await wrapper.findComponent(PointerButton).trigger('click')

    const emitted = wrapper.emitted('update:modelValue')
    expect(emitted).toBeTruthy()
    expect(emitted?.[0]).toEqual([described[0].selects])
  })

  it('clears the selection when a plain link is pressed', async () => {
    // Otherwise an open description would sit under an unrelated project.
    const wrapper = mount(PortfolioButtons)
    await wrapper.findComponent(LinkButton).trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([null])
  })

  it('renders the animated logo for the course and images for the rest', () => {
    // One project uses a component instead of a file, and that branch is easy
    // to break when the loop changes.
    const wrapper = mount(PortfolioButtons)
    const images = wrapper.findAll('.icon-front img')
    const withFiles = portfolioProjects.filter((project) => project.logo !== 'glitch')
    expect(images).toHaveLength(withFiles.length)
  })

  it('carries each logo its own size and class', () => {
    const wrapper = mount(PortfolioButtons)
    const tiles = wrapper.findAll('.portfolio-buttons > a')

    portfolioProjects.forEach((project, index) => {
      if (project.logo === 'glitch') return
      const img = tiles[index].find('.icon-front img')
      expect(img.attributes('width'), project.label).toBe(String(project.width))
      expect(img.attributes('height'), project.label).toBe(
        project.height === undefined ? undefined : String(project.height),
      )
    })
  })
})
