<template>
  <div
    class="flex justify-between md:justify-end py-2 border-b border-t"
    :class="[darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200']"
  >
    <button ref="doneButton" class="px-2 py-1 text-sm" @click="toggleDone">
      Esconder concluídos
    </button>

    <button ref="darkModeButton" class="px-2 py-1 text-sm" @click="toggleDarkMode">
      Modo Noturno
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
    }
  },
  methods: {
    ...mapActions(['toggleDarkMode', 'toggleDone'])
  }
}
</script>
