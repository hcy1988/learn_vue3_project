<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
  export default {

    setup() {
      const info = reactive({
        name: "hcy",
        age: 30,
      });
      let { name, age } = toRefs(info)
      const changeAge = () => {
        age.value++
      }
      return {
        name,
        age,
        changeAge,
      }
    }
  }
</script>

<style scoped>

</style>