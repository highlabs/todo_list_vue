<template>
  <section>
    <Checkbox
      ref="checkbox"
      v-for="todo in list"
      :label="todo.label"
      :id="todo.id"
      :key="todo.id"
      :value="todo.completed"
      @change="setValue"
    />
  </section>
</template>

<script>
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
    setValue (value) {
      console.log(value)
    }
  }
}
</script>
