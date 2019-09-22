import { shallowMount } from '@vue/test-utils'
import Checkbox from '@/components/Checkbox.vue'

const propsData = {
  id: 'checkbox',
  label: 'Lorem Ipsum',
  done: false
}
describe('Checkbox.vue', () => {
  it('renders props.label when passed', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData
    })

    expect(wrapper.find({ ref: 'label' }).text()).toMatch(propsData.label)
  })

  it('send event to parent on change', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        ...propsData
      }
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked()

    expect(wrapper.emitted().change[0][0].value).toEqual(false)
  })

  it('change classes on component change', () => {
    const wrapper = shallowMount(Checkbox, {
      propsData: {
        ...propsData,
        done: true
      }
    })
    const checkbox = wrapper.find('input[type="checkbox"]')
    checkbox.setChecked()

    expect(wrapper.classes()).toContain('opacity-25')
    expect(wrapper.classes()).toContain('line-through')
  })
})
