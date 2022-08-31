<template>
  <div>
    <h2>NavBar</h2>
    <button @click="getParentAndRoot">获取父组件，根组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "NavBarのmessage",
      }
    },
    methods: {
      sayHello(){
        console.log("hello navBar");
      },
      getParentAndRoot() {
        //虽然能够拿到父组件和根组件，但是这样使用的话，代码的耦合性太强了，很容易报错
        console.log(this.$parent);
        console.log(this.$root);
      }
    }
  }
</script>

<style scoped>

</style>