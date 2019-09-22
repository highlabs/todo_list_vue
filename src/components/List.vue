<template>
  <section>
    <Checkbox
      v-for="todo in list"
      :key="todo.id"
      :label="todo.label"
      :id="todo.id"
      :done="todo.completed"
      @change="toggleTodo"
      @click="toggleTodo"
    />
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
    ...mapActions(['toggleTodo'])
  }
}
</script>
