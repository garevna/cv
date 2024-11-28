import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Education from '../Education.vue'

describe('education', () => {
  it('renders properly', () => {
    const wrapper = mount(Education, { props: { msg: 'IRINA FYLYPPOVA' } })
    expect(wrapper.text()).toContain('Education')
  })
})
