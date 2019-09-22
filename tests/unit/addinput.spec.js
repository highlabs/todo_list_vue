import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import AddInput from '@/components/AddInput.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('AddInput.vue', () => {
  describe('> Actions', () => {
    let actions
    let store

    beforeEach(() => {
      actions = {
        addTodo: jest.fn()
      }
      store = new Vuex.Store({
        actions
      })
    })
    it('dispatches "addTodo" when user send form', () => {
      const wrapper = shallowMount(AddInput, { store, localVue })

      wrapper.find('form').trigger('submit.prevent')
      expect(actions.addTodo).not.toHaveBeenCalled()

      wrapper.setData({ todoText: 'New Todo' })
      wrapper.find('form').trigger('submit.prevent')

      expect(actions.addTodo).toHaveBeenCalled()
    })

    it('dispatches "addTodo" when user press enter', () => {
      const wrapper = shallowMount(AddInput, { store, localVue })

      wrapper.find('input').trigger('keydown.enter')
      expect(actions.addTodo).not.toHaveBeenCalled()

      wrapper.setData({ todoText: 'New Todo' })
      wrapper.find('input').trigger('keydown.enter')

      expect(actions.addTodo).toHaveBeenCalled()
    })

    it('dispatches "addTodo" when user press "+" button', () => {
      const wrapper = shallowMount(AddInput, { store, localVue })

      wrapper.find('button').trigger('click')
      expect(actions.addTodo).not.toHaveBeenCalled()

      wrapper.setData({ todoText: 'New Todo' })
      wrapper.find('button').trigger('click')

      expect(actions.addTodo).toHaveBeenCalled()
    })
  })
})
