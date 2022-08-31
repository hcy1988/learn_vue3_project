<template>
  <div>
    <h2>Home</h2>
    <h3 ref="title">{{message}}</h3>
    <button @click="changeMessage">change message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "000"
      }
    },
    beforeCreate() {
      console.log("home beforeCreate");
    },
    created() {
      console.log("home created");
    },
    beforeMount() {
      console.log("home before mount");
    },
    mounted() {
      console.log("home mounted");
    },
    beforeUnmount() {
      console.log("home before unmount");
    },
    unmounted() {
      console.log("home unmount");
    },
    beforeUpdate() {
      console.log(this.$refs.title.innerHTML);
      console.log("home before update");
    },
    updated() {
      console.log(this.$refs.title.innerHTML);
      console.log("home updated");
    },
    methods: {
      changeMessage() {
        this.message += "1"
      }
    }
  }
</script>

<style scoped>

</style>