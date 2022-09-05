<template>
  <div>
    <h2>{{name}} - {{age}}</h2>
    <button @click="changeAge">change age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
  export default {

    setup() {
      const info = reactive({
        name: "hcy",
        age: 30,
      });
      //toRefsはreactive対象のすべて属性をref対象に変更する
      let { name, age } = toRefs(info)
      //toRefは一つの属性をref対象に変更する
      // let { name } = info;
      // let age = toRef(info, "age");
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