import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '@/components/List.vue'
import Checkbox from '@/components/Checkbox.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

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
  describe('> Component', () => {
    it('renders props.label when passed', () => {
      const wrapper = shallowMount(List, {
        propsData
      })

      expect(wrapper.findAll(Checkbox).length).toBe(propsData.list.length)
    })
  })

  describe('> Actions', () => {
    let actions
    let store

    beforeEach(() => {
      actions = {
        removeTodo: jest.fn(),
        toggleTodo: jest.fn()
      }
      store = new Vuex.Store({
        actions
      })
    })

    it('dispatches "toggleTodo" when checkbox has been called', () => {
      const wrapper = shallowMount(List, { store, localVue, propsData })
      wrapper.vm.toggleTodo()

      expect(actions.toggleTodo).toHaveBeenCalled()
    })

    it('dispatches "toggleTodo" when checkbox has been called', () => {
      const wrapper = shallowMount(List, { store, localVue, propsData })
      wrapper.vm.removeTodo()

      expect(actions.removeTodo).toHaveBeenCalled()
    })
  })
})
