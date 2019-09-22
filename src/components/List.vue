<template>
  <section>
    <div  v-for="todo in list" :key="todo.id" class="border-b border-gray-200">
      <div class="flex flex-row items-center container mx-auto px-6">
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
