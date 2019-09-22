import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  todoList: [
    {
      id: '1',
      label: 'Do the dishes',
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

export const mutations = {
  addTodo (state, todo) {
    state.todoList.push(todo)
  },
  removeTodo (state, todo) {
    state.todoList = state.todoList.filter(item => item.id !== todo.id)
  },
  toggleTodo (state, todo) {
    state.todoList.map(item => {
      if (item.id === todo) {
        item.completed = !item.completed
      }
      return item
    })
  }
}

export const actions = {
  toggleTodo (context, todo) {
    context.commit('toggleTodo', todo)
  },
  removeTodo (context, todo) {
    context.commit('removeTodo', todo)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
