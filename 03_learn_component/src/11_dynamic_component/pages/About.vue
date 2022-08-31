<template>
  <div>
    about component
    <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        counter: 0,
      }
    },
    //生命周期里，我们既想保存缓存数据，又想知道当前组件是否在激活状态或者非激活状态。
    //这时候不能使用created，mount这种，因为keep alive会一直维持组件，vue提供了以下两种生命周期函数
  
    activated() {
      console.log("about activated");
    },
    deactivated() {
      console.log("about deactivated");
    }
  }
</script>

<style scoped>

</style>