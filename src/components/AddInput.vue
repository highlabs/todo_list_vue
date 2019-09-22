<template>
  <form
    class="fixed bottom-0 left-0 right-0 px-6 pb-4 flex"
    :class="[darkMode ? 'bg-black' : 'bg-white']"
    @submit.prevent="validateForm"
    @keydown.enter="validateForm"
  >
    <label class="sr-only" for="add">Add New Todo</label>

    <input
      v-model="todoText"
      type="text"
      id="add"
      class="border border-solid border-1 border-r-0 px-2 py-1 w-full"
      :class="[darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200']"
    />

    <button
      class="px-4 py-2 font-bold border border-solid border-1 border-l-0"
      :class="[darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200']"
      @click="validateForm"
    >+</button>
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
  computed: {
    darkMode () {
      return this.$store.state.darkMode
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

<style scoped>
.sr-only,
.sr-only-focusable:not(:focus) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
</style>
