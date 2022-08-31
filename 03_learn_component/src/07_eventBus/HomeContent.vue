<template>
  <div>
    <h2>HomeContent</h2>
  </div>
</template>

<script>
import emitter from './utils/eventbus.js';

  export default {
    created() {
      // emitter.on("hcy", (info)=> {
      //   console.log(info);
      // }),
      emitter.on("*", (type, info)=>{
        console.log("* listener:", type , info)
      })
    }

  }
</script>

<style scoped>

</style>