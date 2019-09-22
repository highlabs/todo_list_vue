<template>
  <div class="flex justify-between md:justify-end py-2 border-b border-t border-gray-200">
    <button ref="darkModeButton" class="px-2 py-1 text-sm" @click="toggleDarkMode">
      Modo Noturno
    </button>
    <button ref="doneButton" class="px-2 py-1 text-sm" @click="toggleDone">
      Esconder concluídos
    </button>
    <button ref="archiveButton" class="px-2 py-1 text-sm" @click="toggleTrash">
      Mostrar arquivados
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Menu',
  methods: {
    ...mapActions(['toggleDarkMode', 'toggleDone', 'toggleTrash'])
  }
}
</script>
