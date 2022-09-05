<template>
  <div>
    <h2 ref="title">hahah</h2>
    <button @click="changeData">change data</button>
  </div>
</template>

<script>
import { ref, watchEffect, reactive, watch } from 'vue'

  export default {

    setup() {
      const info = reactive({
        name:"hcy",
        age:20,
      })
      const changeData = () => {
        info.name = "hxy";
        // info.age = 30;
        // name.value = "popopo"
      }
      const name = ref("gogogo")
      //watchにgetter関数を渡す方法
      // watch(() => info.name, (newValue, oldValue)=>{
      //   console.log("newValue:", newValue, "oldValue:", oldValue)
      // })

      //watchにreactiveを渡す方法
      //reactiveの場合、newValue、oldValueは同じreactive対象になる
      watch(()=>{
        return {...info}
      }, (newValue, oldValue)=>{
        console.log("newValue:", newValue, "oldValue:", oldValue)
      })
      //reactiveではなく、普通の対象にしたい場合
      watch(info, (newValue, oldValue)=>{
        console.log("newValue:", newValue, "oldValue:", oldValue)
      })

      //watch ref対象

      // watch(name, (newValue, oldValue)=>{
      //   console.log("newValue:", newValue, "oldValue:", oldValue)
      // })

      return {
        info,
        changeData,

      }
    }
  }
</script>

<style scoped>

</style>