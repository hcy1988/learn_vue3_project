<template>
  <div>
    <button @click="increment">
      {{counter}}
    </button>
  </div>
</template>

<script>
import { ref,onMounted, onUpdated, onUnmounted } from 'vue'

  export default {
    setup() {
      let counter = ref(0);
      let increment = () => {
        counter.value++;
      }
      onMounted(()=>{
        console.log("App mounted");
      })
      onUpdated(()=>{
        console.log("App updated");
      })
      onUnmounted(()=>{
        console.log("App unmounted");
      })
      return {
        counter,
        increment,
        onMounted,
        onUpdated,
        onUnmounted
      }
    }
  }
</script>

<style scoped>

</style>