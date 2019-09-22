<template>
  <div
    class="flex justify-between md:justify-end py-2 border-b border-t"
    :class="[darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200']"
  >
    <button ref="doneButton" class="px-2 py-1 text-sm" @click="toggleDone">
      <span v-if="showDone">
        Exibir Concluídos
      </span>
      <span v-else>
        Esconder Concluídos
      </span>
    </button>

    <button ref="darkModeButton" class="px-2 py-1 text-sm" @click="toggleDarkMode">
      <span v-if="darkMode">
        Modo Claro
      </span>
      <span v-else>
        Modo Escuro
      </span>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Menu',
  computed: {
    darkMode () {
      return this.$store.state.darkMode
    },
    showDone () {
      return this.$store.state.showDone
    }
  },
  methods: {
    ...mapActions(['toggleDarkMode', 'toggleDone'])
  }
}
</script>
