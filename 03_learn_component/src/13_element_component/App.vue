<template>
  <div>
    <h2 ref="title">hahaha</h2>
    <nav-bar ref="navBar"></nav-bar>
    <button @click="btnClick">elementを取得</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

  export default {
    methods: {
      btnClick() {
        console.log(this.$refs.title);
        console.log(this.$refs.navBar);
        console.log(this.$refs.navBar.message);
        this.$refs.navBar.sayHello();
      }
    },
    components: {
      NavBar,
    }
  }
</script>

<style scoped>

</style>