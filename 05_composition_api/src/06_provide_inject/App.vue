<template>
  <div>
    <home />
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { ref, provide, readonly } from 'vue'
import Home from './Home.vue'

  export default {
    components: {
      Home
    },
    setup() {
      const name = "hcy";
      let counter = ref(100);
      //父组件修改数据，不要让子组件修改数据，这叫单向数据流
      //所以，方法写在父组件里，让子组件上传事件来让父组件执行方法
      //这样方便调试错误。
      //另外，可以使用readonly来给子组件传送数据
      provide("name", readonly(name));
      provide("counter", readonly(counter));

      const increment = () => {
        counter.value++
      }
      return {
        increment,
      }
    }
  }
</script>

<style scoped>

</style>