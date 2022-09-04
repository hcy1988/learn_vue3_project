<template>
  <div>
    Home page
    {{title}}
    <button @click="bar">click</button>
  </div>
</template>

<script>
import BasePage from './BasePage.vue';
  export default {
    extends: BasePage,
  }
</script>

<style scoped>

</style>