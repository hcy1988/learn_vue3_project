<template>
  <div>
    <home></home>
    <input type="text" v-model="newName">
    <button @click="addName">+name</button>
  </div>
</template>

<script>
import home from './Home.vue';
import { computed } from 'vue';

  export default {
    components: {
      home,
    },
    //provide想使用data里的数据，就要让provide变成一个函数，然后里面的数据如果希望是响应式，就要使用computed方法，需要import
    
    provide() {
      return {
      name:"hcy",
      age:"20",
      length: computed(()=>this.names.length),
      }
    },
    data() {
      return {
        names: ["aaa", "bbb", "ccc", "ddd"],
        newName:"",
      }
    },
    methods: {
      addName() {
        this.names.push(this.newName);
        console.log(this.names)
      }
    },

    
  }
</script>

<style scoped>

</style>