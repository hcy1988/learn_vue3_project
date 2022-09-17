<template>
  <div>
    <input type="text">
    <!-- 自定义指令，修饰符，传入参数，参数也可以是变量 -->
    <button v-if="counter < 5" v-hcy.aaa.bbb="'coderwhy'" @click="increment">current Counter: {{counter}}</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

  export default {
    //ローカルコマンド局部指令
    directives: {
      hcy: {
        created(el, bindings, vnode, preVnode) {
          console.log("hcy created", el, bindings, vnode, preVnode);
          console.log(bindings.value);
          console.log(bindings.modifiers)
        },
        beforeMount() {
          console.log("hcy before mount")
        },
        mounted() {
          console.log("hcy mouted")
        },
        beforeUpdate() {
          console.log("hcy beforeUpdate")
        },
        updated() {
          console.log("hcy updated")
        },
        beforeUnmount() {
          console.log("hcy beforeUnmount")
        },
        unmounted() {
          console.log("hcy unmounted")
        },
      }
    },
    setup() {
      const counter = ref(0);
      const increment = () => counter.value++;

      return {
        counter,
        increment
      }
    }
  }
</script>

<style scoped>

</style>