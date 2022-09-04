<template>
  <div>
    <p>home</p>
    <div>{{message}}</div>


    <!-- <div>{{state.counter}}
    </div> -->
    <!-- 当我们在template里使用ref对象，会自动解包，不需要再使用counter.value -->
    <div>{{counter}}</div>
    <button @click="increment">++</button>
  </div>
</template>

<script>
import {reactive, ref} from 'vue';
  export default {
    
    props:{
      message: {
        type: String,
        required: true,
      }
    },

    setup(props, context) {
      // const state = reactive({
      //   counter: 100,
      // })
      let counter = ref(100);


      const increment = () => {
        // state.counter++;
        counter.value++;
      };
      return {
        // state,
        counter,
        increment,
      }

    }
  }
</script>

<style scoped>

</style>