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
      const name = ref("gogogo")

      const changeData = () => {
        info.name = "hxy";
        // info.age = 30;
        name.value = "popopo"
      }


      watch([info, name], ([newInfo, newName], [oldInfo, oldName])=>{
        console.log("newValue:", newInfo, newName, "oldValue:", oldInfo, oldName)
      })

      return {
        info,
        changeData,
        name
      }
    }
  }
</script>

<style scoped>

</style>