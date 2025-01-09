import { mount } from '@vue/test-utils'
import GenericDropdown from '../GenericDropdown.vue'

describe('GenericDropdown.vue', () => {
  it('renders correctly with props', () => {
    const options = { name: 'Name', age: 'Age' }
    const wrapper = mount(GenericDropdown, {
      props: { options, label: 'Sort by:' },
    })
    expect(wrapper.text()).toContain('Sort by:')
  })
})
