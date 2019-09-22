import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export const state = {
  todoList: [],
  trashList: [],
  darkMode: false,
  showDone: true,
  showTrash: false
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
  },
  toggleDarkMode (state) {
    state.darkMode = !state.darkMode
  },
  toggleDone (state) {
    state.showDone = !state.showDone
  },
  toggleTrash () {
    state.showTrash = !state.showTrash
  }
}

export const actions = {
  addTodo (context, todo) {
    context.commit('addTodo', todo)
  },
  toggleTodo (context, todo) {
    context.commit('toggleTodo', todo)
  },
  removeTodo (context, todo) {
    context.commit('removeTodo', todo)
  },
  toggleDarkMode (context) {
    context.commit('toggleDarkMode')
  },
  toggleDone (context) {
    context.commit('toggleDone')
  },
  toggleTrash (context) {
    context.commit('toggleTrash')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [vuexLocal.plugin]
})
