import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { mutations, state } from '@/store'
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

    it('check text when "toggleDarkMode" is commited', () => {
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

  describe('> Mutations', () => {
    let store
    beforeEach(() => {
      store = new Vuex.Store({
        state
      })
    })
    it('render correct text in Dark More button', () => {
      const wrapper = shallowMount(Menu, { store })

      const button = wrapper.find({ ref: 'darkModeButton' })

      expect(button.find('span').text()).toBe('Modo Escuro')

      mutations.toggleDarkMode(state, !state.darkMode)

      expect(button.find('span').text()).toBe('Modo Claro')
    })

    it('render correct text in Dark More button', () => {
      const wrapper = shallowMount(Menu, { store })

      const button = wrapper.find({ ref: 'doneButton' })

      expect(button.find('span').text()).toBe('Exibir Concluídos')

      mutations.toggleDone(state, !state.showDone)

      expect(button.find('span').text()).toBe('Esconder Concluídos')
    })
  })
})
