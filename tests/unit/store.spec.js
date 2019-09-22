import { mutations, state } from '@/store'

describe('Vuex', () => {
  describe('Mutations', () => {
    const todoList = [
      {
        id: '1',
        label: 'Make dinner',
        completed: true
      },
      {
        id: '2',
        label: 'Do the dishes',
        completed: true
      },
      {
        id: '3',
        label: 'write a post',
        completed: true
      }
    ]
    it('add todo to the list when commit AddTodo', () => {
      mutations.addTodo(state, todoList[0])
      mutations.addTodo(state, todoList[1])
      mutations.addTodo(state, todoList[2])

      expect(state.todoList[0]).toEqual(todoList[0])
      expect(state.todoList[1]).toEqual(todoList[1])
      expect(state.todoList[2]).toEqual(todoList[2])
    })

    it('toggle Todo when commit toggleTodo', () => {
      const itemToToggle = todoList[1]

      mutations.toggleTodo(state, itemToToggle.id)

      expect(state.todoList[0].completed).toBe(true)
      expect(state.todoList[1].completed).toBe(false)
      expect(state.todoList[2].completed).toBe(true)
    })

    it('remove todo from the list when commit RemoveTodo', () => {
      const itemToRemove = todoList[1]

      mutations.removeTodo(state, itemToRemove)

      expect(state.todoList[0]).toEqual(todoList[0])
      expect(state.todoList[1]).toEqual(todoList[2])
      expect(state.todoList[2]).toBe(undefined)
      expect(state.trashList[0]).toBe(itemToRemove)
    })

    it('toggle darkMode when commit toggleDarkMode', () => {
      mutations.toggleDarkMode(state, !state.darkMode)

      expect(state.darkMode).toBe(true)
    })

    it('toggle showDone when commit toggleDone', () => {
      mutations.toggleDone(state, !state.showDone)

      expect(state.showDone).toBe(false)
    })

    it('toggle showTrash when commit toggleTrash', () => {
      mutations.toggleTrash(state, !state.showTrash)

      expect(state.showTrash).toBe(true)
    })
  })
})
