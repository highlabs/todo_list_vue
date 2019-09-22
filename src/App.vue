<template>
  <div id="app" class="container mx-auto px-6 font-body">
    <Header />
    <List />
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
  }
}
</script>
