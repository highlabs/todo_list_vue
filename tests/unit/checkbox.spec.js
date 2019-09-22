import { shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/Checkbox.vue'

const propsData = {
  id: 'checkbox',
  label: 'Lorem Ipsum'
}
describe('Checkbox.vue', () => {
  it('renders props.label when passed', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData
    })

    expect(wrapper.find({ ref: 'spanLabel' }).text()).toMatch(propsData.label)
  })

  it('send event to parent on change', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked()

    expect(wrapper.emitted().change[0]).toEqual([true])
  })

  it('change classes on component change', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked()

    expect(wrapper.classes()).toContain('opacity-25')
    expect(wrapper.classes()).toContain('line-through')
  })
})
