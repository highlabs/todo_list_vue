<template>
  <div id="app" class="font-body pb-16">
    <Header />
    <List :list="list" v-if="list.length > 0" />
    <div class="text-center" v-else>
      <p>Você não tem tarefas! (」°ロ°)」</p>
      <p>Escreve ali em baixo e clica no + pra começar! (⌒_⌒;)</p>
    </div>
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
