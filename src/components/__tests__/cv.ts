import { describe, expect, it } from 'vitest'

import { mount } from '@vue/test-utils'
import AboutMe from '../AboutMe.vue'

describe('about', () => {
  it('renders properly', () => {
    const wrapper = mount(AboutMe, { props: { msg: 'IRINA FYLYPPOVA' } })
    expect(wrapper.text()).toContain('AboutMe')
  })
})
