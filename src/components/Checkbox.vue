<template>
  <div class="py-4" :class="[done ? 'line-through opacity-25' : '']">
    <input
      type="checkbox"
      :checked="done"
      :id="id"
      @change="onCheckBoxChange"
    />
    <label ref="label" :for="id">
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onCheckBoxChange (e) {
      const value = this.done
      const id = this.id
      this.$emit('change', { id, value })
    }
  }
}
</script>
