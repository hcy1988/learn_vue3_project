<template>
  <div>
    <h2 v-format-time="'YYYY/MM/DD'">{{timeStamp}}</h2>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

  export default {
    
    setup() {
      const timeStamp = 1612953732;
      

      return {
        timeStamp
      }
    }
  }
</script>

<style scoped>

</style>