import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, state } from '@/store'
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
    let store

    beforeEach(() => {
      store = new Vuex.Store({
        mutations,
        state
      })
    })
    it('renders props.list length', () => {
      const wrapper = shallowMount(List, {
        store,
        localVue,
        propsData
      })

      expect(wrapper.findAll(Checkbox).length).toBe(2)
    })

    it('check darkMode Computed', () => {
      const wrapper = shallowMount(List, {
        store,
        localVue,
        propsData
      })

      expect(wrapper.vm.darkMode).toBe(false)
    })

    it('check filteredList Computed', () => {
      const wrapper = shallowMount(List, {
        store,
        localVue,
        propsData
      })

      mutations.toggleDone(state, !state.showDone)

      expect(wrapper.findAll(Checkbox).length).toBe(4)
    })
  })

  describe('> Actions', () => {
    let actions
    let store
    let state

    beforeEach(() => {
      state = {
        darkMode: false
      }
      actions = {
        removeTodo: jest.fn(),
        toggleTodo: jest.fn()
      }
      store = new Vuex.Store({
        state,
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
