<template>
  <div id="app" class="font-body pb-16 min-h-screen" :class="[darkMode ? 'bg-black text-gray-200' : 'bg-white text-black']">
    <Header />
    <Menu />
    <List :list="list" v-if="list.length > 0" />
    <div class="text-center py-4" v-else>
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
import Menu from '@/components/Menu'

export default {
  name: 'app',
  components: {
    Header,
    List,
    AddInput,
    Menu
  },
  computed: {
    list () {
      return this.$store.state.todoList
    },
    trash () {
      return this.$store.state.trashList
    },
    darkMode () {
      return this.$store.state.darkMode
    }
  }
}
</script>
