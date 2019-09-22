import { mutations } from '@/store'

describe('Vuex', () => {
  describe('Mutations', () => {
    let todoList
    let state

    beforeEach(() => {
      todoList = [
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

      state = {
        todoList: todoList
      }
    })
    it('add todo to the list when commit AddTodo', () => {
      const itemToAdd = {
        id: 4,
        label: 'Item to add in todo list',
        completed: false
      }
      mutations.addTodo(state, itemToAdd)
      expect(state.todoList[0]).toEqual(todoList[0])
      expect(state.todoList[3]).toEqual(itemToAdd)
    })

    it('remove todo from the list when commit RemoveTodo', () => {
      const itemToRemove = todoList[1]

      mutations.removeTodo(state, itemToRemove)

      expect(state.todoList[0]).toEqual(todoList[0])
      expect(state.todoList[1]).toEqual(todoList[2])
      expect(state.todoList[2]).toBe(undefined)
    })

    it('toggle Todo when commit toggleTodo', () => {
      const itemToToggle = todoList[1]

      mutations.toggleTodo(state, itemToToggle)

      expect(state.todoList[0].completed).toBe(true)
      expect(state.todoList[1].completed).toBe(false)
      expect(state.todoList[2].completed).toBe(true)
    })
  })
})
