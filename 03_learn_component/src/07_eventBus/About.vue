<template>
  <div>
    <button @click="btnClick">click</button>
  </div>
</template>

<script>
import emitter from './utils/eventbus.js'

  export default {
    methods: {
      btnClick() {
        console.log("about console.log");
        emitter.emit("hcy", {name: "hcy", age: 18});
        emitter.emit("hxy", {name: "hxy", age: 8});
      }
    }
  }
</script>

<style scoped>

</style>