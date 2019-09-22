<template>
  <div id="app" class="container mx-auto px-6 font-body">
    <Header />
    <List :list="list" />
    <AddInput />
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'
import AddInput from '@/components/AddInput'

export default {
  name: 'app',
  components: {
    Header,
    List,
    AddInput
  },
  computed: {
    list () {
      return this.$store.state.todoList
    }
  }
}
</script>
