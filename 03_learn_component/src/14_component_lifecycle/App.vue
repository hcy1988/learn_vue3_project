<template>
  <div>
    <h2>APP</h2>
    <button @click="showHome = !showHome">switch</button>
    <template v-if="showHome">
          <home></home>
    </template>
  </div>
</template>

<script>
import Home from './Home.vue'
  export default {
    components: {
      Home,
    },
    data() {
      return {
        showHome:true,
      }
    }
  }
</script>

<style scoped>

</style>