<template>
  <div>
    category component
        <button @click="counter++">{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name:"category",
    data() {
      return {
        counter: 0,
      }
    }
  }
</script>

<style scoped>

</style>