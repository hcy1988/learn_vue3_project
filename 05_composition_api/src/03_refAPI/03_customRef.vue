<template>
  <div>
    <input v-model="message" />
    <h2>{{message}}</h2>
  </div>
</template>

<script>
// import { ref } from 'vue'
import debounceRef from './hooks/useDebounce.js'

  export default {
    setup() {
      const message = debounceRef("hello world");


      return {
        message,
      }
    }
  }
</script>

<style scoped>

</style>