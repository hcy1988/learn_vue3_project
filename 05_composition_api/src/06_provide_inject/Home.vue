<template>
  <div>
    <h2>{{name}}</h2>
    <h2>
      {{counter}}
    </h2>
  </div>
</template>

<script>
import { ref, inject } from 'vue'

  export default {
    setup() {
      const name = inject("name");
      const counter = inject("counter");

      return {
        name, counter
      }
    }
  }
</script>

<style scoped>

</style>