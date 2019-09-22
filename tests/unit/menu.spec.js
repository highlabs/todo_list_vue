import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Menu from '@/components/Menu.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Menu.vue', () => {
  describe('> Actions', () => {
    let actions
    let store
    let state

    beforeEach(() => {
      state = {
        darkMode: false
      }
      actions = {
        toggleDarkMode: jest.fn(),
        toggleDone: jest.fn(),
        toggleTrash: jest.fn()
      }
      store = new Vuex.Store({
        state,
        actions
      })
    })

    it('dispatches "toggleDarkMode" button is clicked', () => {
      const wrapper = shallowMount(Menu, { store, localVue })

      const button = wrapper.find({ ref: 'darkModeButton' })
      button.trigger('click')

      expect(actions.toggleDarkMode).toHaveBeenCalled()
    })

    it('dispatches "toggleDone" button is clicked', () => {
      const wrapper = shallowMount(Menu, { store, localVue })

      const button = wrapper.find({ ref: 'doneButton' })
      button.trigger('click')

      expect(actions.toggleDone).toHaveBeenCalled()
    })
  })
})
