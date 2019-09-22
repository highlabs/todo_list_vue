import { shallowMount } from '@vue/test-utils'
import List from '@/components/List.vue'
import Checkbox from '@/components/Checkbox.vue'

const propsData = {
  list: [
    {
      id: '1',
      label: 'Clean dishes',
      completed: true
    },
    {
      id: '2',
      label: 'Write a post',
      completed: false
    },
    {
      id: '3',
      label: 'Go to walk',
      completed: false
    },
    {
      id: '4',
      label: 'Make dinner',
      completed: true
    }
  ]
}
describe('List.vue', () => {
  it('renders props.label when passed', () => {
    const wrapper = shallowMount(List, {
      propsData
    })

    expect(wrapper.findAll(Checkbox).length).toBe(propsData.list.length)
  })
})
