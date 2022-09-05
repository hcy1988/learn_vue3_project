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
        friend: {
          name:"kobe"
        }
      })


      const changeData = () => {
        // info.name = "hxy";
        // info.age = 30;
        info.friend.name = "hhhh"
      }

      //info是reactive对象时，deep自动为true
      // watch(info, (newValue, oldValue)=>{
      //   console.log("newValue:", newValue, "oldValue:", oldValue)
      // })


      //info用展开运算符时，就无法默认深度侦听，需要手动设置deep为true
      watch(() => ({...info}), (newValue, oldValue)=>{
        console.log("newValue:", newValue, "oldValue:", oldValue)
      }, { 
        deep: true,
        //立刻侦听并执行一次
        immediate: true
         })

      return {
        info,
        changeData,
      }
    }
  }
</script>

<style scoped>

</style>