<template>
  <section>
    <div v-for="todo in list" :key="todo.id" class="flex flex-row items-center">
      <Checkbox
        :label="todo.label"
        :id="todo.id"
        :done="todo.completed"
        @change="toggleTodo"
        @click="toggleTodo"
      />
      <button class="ml-auto text-xs" @click="() => removeTodo(todo)">
        Remover
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import Checkbox from '@/components/Checkbox'

export default {
  name: 'List',
  components: {
    Checkbox
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    ...mapActions(['toggleTodo', 'removeTodo'])
  }
}
</script>
