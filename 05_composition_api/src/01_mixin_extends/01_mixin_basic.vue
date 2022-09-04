<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">foo</button>
  </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin.js'
  export default {
    mixins: [demoMixin],
    data() {
      return {
        title: "helo hcy in app",
      }
    }
  }
</script>

<style scoped>

</style>