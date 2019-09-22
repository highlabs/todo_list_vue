<template>
  <header class="flex flex-row justify-between items-end py-6 container mx-auto px-6">
    <div class="flex flex-row items-center">
      <span class="text-4xl font-bold leading-none mr-2">{{ day }}</span>
      <div class="flex flex-col justify-between">
        <span class="text-sm leading-none uppercase">{{ month }}</span>
        <span class="text-sm leading-none">{{ year }}</span>
      </div>
    </div>
    <div>
      <span>{{ weekday }}</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    today () {
      return new Date()
    },
    date () {
      const today = this.today
      return today.toLocaleDateString('pt-BR')
    },
    year () {
      const today = this.today
      const options = {
        year: 'numeric'
      }
      return today.toLocaleString('pt-BR', options)
    },
    month () {
      const today = this.today
      const options = {
        month: 'short'
      }
      return today.toLocaleString('pt-BR', options)
    },
    day () {
      const today = this.today
      const options = {
        day: 'numeric'
      }
      return today.toLocaleString('pt-BR', options)
    },
    weekday () {
      const today = this.today
      const options = {
        weekday: 'long'
      }
      return today.toLocaleString('pt-BR', options)
    }
  }
}
</script>
