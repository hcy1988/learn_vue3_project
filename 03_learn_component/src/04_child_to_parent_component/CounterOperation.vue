<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>

  </div>
</template>

<script>
  export default {
    //vue3里通过emits来注册，可以增加代码的可读性，
    //自己试下来不写emits也可以，但是推荐写.
    //一般都是使用数组
    // emits: ["add","sub","addN"],
    //emits也可以使用对象用法，一般用于参数验证
    emits: {
      add: null,
      sub: null,
      //单参数一般用payload
      // addN: payload => {
      //   console.log(payload);
      // }
      //多参数写法用下面这个
      addN: (num, name, age) => {
        console.log(num, name, age);
        if (num > 10) {
          return true;
        }
        return false;
      }
    },
    data() {
      return {
        num:0,
      }
    },
    methods: {
      increment() {
        console.log("+1");
        this.$emit("add");
      },
      decrement() {
        console.log("-1");
        this.$emit("sub");        
      },
      incrementN() {
        //可以将更多的参数传给父组件
        this.$emit("addN", this.num, "why", 18)
      }
    }
  }
</script>

<style scoped>

</style>