<template>
  <form class="fixed bottom-0 left-0 right-0 px-6 pb-4 flex" @submit.prevent="validateForm" @keydown.enter="validateForm">
    <label class="hidden" for="add">Add New Todo</label>
    <input v-model="todoText" type="text" id="add" class="border border-gray-300 border-solid border-1 rounded-sm px-2 py-1 w-full">
    <button class="px-4 py-2 font-bold" @click="validateForm">
      +
    </button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import nanoid from 'nanoid'

export default {
  name: 'AddInput',
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    validateForm () {
      if (!this.todoText || this.todoText.length === 0) return false
      const todo = {
        label: this.todoText,
        id: nanoid(),
        completed: false
      }
      this.$store.dispatch('addTodo', todo)
      this.todoText = ''
    }
  }
}
</script>
