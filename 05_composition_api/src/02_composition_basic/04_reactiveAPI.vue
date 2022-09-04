<template>
  <div>
    <p>home</p>
    <div>{{message}}</div>


    <div>{{state.counter}}
    </div>
    <button @click="increment">++</button>
  </div>
</template>

<script>
import {reactive} from 'vue';
  export default {
    
    props:{
      message: {
        type: String,
        required: true,
      }
    },

    setup(props, context) {
      const state = reactive({
        counter: 100,
      })

      const increment = () => {
        state.counter++;
      };
      return {
        state,
        increment,
      }

    }
  }
</script>

<style scoped>

</style>