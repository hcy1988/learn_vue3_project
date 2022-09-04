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
import {reactive, ref, readonly} from 'vue';
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
      const info1 = {name:"hcy"};
      const readonlyInfo1 = readonly(info1);

      const info2 = reactive({
        name: "huang"
      })
      const readonlyInfo2 = readonly(info2);

      const info3 = ref("why");
      const readonlyInfo3 = readonly(info3);

      const increment = () => {
        // state.counter++;
        counter.value++;
        readonlyInfo1.name="hxy";
        readonlyInfo2.name="hu";
        readonlyInfo3.value="hu";
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