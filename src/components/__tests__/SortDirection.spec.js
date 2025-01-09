import { mount } from '@vue/test-utils'
import SortDirection from '../SortDirection.vue'
import { DIRECTIONS } from '../../utils'

describe('SortDirection.vue', () => {
  it('toggles direction on click', async () => {
    const wrapper = mount(SortDirection, {
      props: { modelValue: DIRECTIONS.ASC },
    })
    const button = wrapper.find('.arrow-container')
    await button.trigger('click')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual([DIRECTIONS.DESC])
  })
})
