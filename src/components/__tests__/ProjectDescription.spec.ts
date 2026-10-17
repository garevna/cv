/**
 * The description panel, and the two extras it carries conditionally.
 *
 * Three components used to do this job and only two of them had an extra — a
 * video for the portal, a demo button for the CMS. Folding them into one is
 * only correct if each extra still appears for exactly the project that has it
 * and for no other, which is what these check.
 */
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import ProjectDescription from '../ProjectDescription.vue'
import type { PortfolioProject } from '@/configs/portfolio-projects'

/** The smallest project that is still a project. */
const plain: PortfolioProject = {
  label: 'Test project',
  href: '#',
  logo: 'npm.svg',
  width: 48,
  imageClass: '',
  selects: 'test',
  description: 'A sentence about the project.',
  role: 'Developer',
  stack: 'Vue 3',
}

const mountWith = (project: PortfolioProject, isActive = true) =>
  mount(ProjectDescription, { props: { project, isActive } })

describe('ProjectDescription', () => {
  it('shows the project role and stack', () => {
    const wrapper = mountWith(plain)
    expect(wrapper.text()).toContain('Developer')
    expect(wrapper.text()).toContain('Vue 3')
  })

  /* ----------------------------------------------------- the demo button */

  it('shows a demo button only when the project has a demo', () => {
    expect(mountWith(plain).find('button.demo').exists()).toBe(false)

    const withDemo = { ...plain, demo: { href: 'https://example.com', label: 'Open the demo' } }
    const wrapper = mountWith(withDemo)

    expect(wrapper.find('button.demo').exists()).toBe(true)
    expect(wrapper.find('button.demo').text()).toContain('Open the demo')
    expect(wrapper.find('a[target="_blank"]').attributes('href')).toBe('https://example.com')
  })

  it('hides the demo button while the project is not open', () => {
    // The panel is in the page for every project at once; only the active one
    // shows anything. A button that ignored isActive would be clickable under
    // a collapsed description.
    const withDemo = { ...plain, demo: { href: 'https://example.com', label: 'Open the demo' } }
    expect(mountWith(withDemo, false).find('button.demo').exists()).toBe(false)
  })

  /* ---------------------------------------------------------- the video */

  it('embeds no player when the project has no video', () => {
    expect(mountWith(plain).find('iframe').exists()).toBe(false)
  })

  it('does not embed a player before the text is ready', () => {
    // The iframe waits for ExpandedText to report that it has finished, so the
    // player is not loaded behind a description that is still typing itself
    // out. Mounted and active, nothing has reported yet.
    const withVideo = { ...plain, video: 'https://www.youtube.com/embed/videoseries?list=x' }
    expect(mountWith(withVideo).find('iframe').exists()).toBe(false)
  })

  it('titles the player after the project', async () => {
    const withVideo = { ...plain, video: 'https://www.youtube.com/embed/videoseries?list=x' }
    const wrapper = mountWith(withVideo)

    // Stand in for ExpandedText finishing: the panel listens to its model.
    wrapper.findComponent({ name: 'ExpandedText' }).vm.$emit('update:modelValue', true)
    await wrapper.vm.$nextTick()

    const iframe = wrapper.find('iframe')
    expect(iframe.exists()).toBe(true)
    expect(iframe.attributes('title')).toBe('Test project')
    expect(iframe.attributes('src')).toContain('youtube.com/embed')
  })
})
