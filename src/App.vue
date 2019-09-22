<template>
  <div id="app" class="container mx-auto px-6 font-body">
    <Header />
    <List :list="list" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import List from '@/components/List'

export default {
  name: 'app',
  components: {
    Header,
    List
  },
  computed: {
    list () {
      return this.$store.state.todoList
    }
  }
}
</script>
