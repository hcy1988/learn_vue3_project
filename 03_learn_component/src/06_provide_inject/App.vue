<template>
  <div>
    <home></home>
  </div>
</template>

<script>
import home from './Home.vue';

  export default {
    components: {
      home,
    },
    provide: {
      name:"hcy",
      age:"20",
    }
    
  }
</script>

<style scoped>

</style>