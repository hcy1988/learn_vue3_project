<template>
  <div>
    <!-- <input v-model="message"> -->
    <!-- v-model其实就是做了以下的事情
    <input :value="message" @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    <hy-input v-model="message" v-model:title="title"></hy-input>
    <!-- 就是以下写法的语法糖 -->
    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import HyInput from './HyInput.vue'
  export default {
    data() {
      return {
        message:"helo",
        title:"hcy"
      }
    },
    components: {
      HyInput,
    }
  }
</script>

<style scoped>

</style>