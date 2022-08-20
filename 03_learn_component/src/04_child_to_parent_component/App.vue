<template>
  <div>
    <h2>counter:{{counter}}</h2>
    <counter-operation @add="addOne" 
                       @sub="subOne"
                       @addN="addNNum">
    </counter-operation>
  </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue';
  export default {
    data() {
      return {
        counter:0,
      }
    },
    components: {
      CounterOperation,
    },
    methods: {
      addOne() {
        this.counter++;
      },
      subOne() {
        this.counter--;
      },
      //可以将子组件上传的参数接受
      addNNum(num, name, age) {
        this.counter += num;
        console.log(name, age);
      }
    }
  }
</script>

<style scoped>

</style>