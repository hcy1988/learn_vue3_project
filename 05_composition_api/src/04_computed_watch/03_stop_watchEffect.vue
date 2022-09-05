<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeName">change name</button>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch } from 'vue'
  export default {
    setup() {
      const name = ref("hcy");
      const age = ref(18);
      const stop = watchEffect(() => {
        console.log("name:", name.value, "age:", age.value);
      })
      
      let changeName = function() {
        name.value = name.value + "k";
      }
      let changeAge = function() {
        age.value++;
        if (age.value > 25) {
          stop();
        }
      }
      //watchEffect会自动调用依赖，并且一定会执行一次。因为执行一次后才能收集依赖。
      

      return {
        name, 
        age,
        changeName,
        changeAge,
      }
    }
  }
</script>

<style scoped>

</style>