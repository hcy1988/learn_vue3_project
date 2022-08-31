<template>
  <div>
    App
    <home></home>
    <async-category></async-category>
    <suspense>
      <template>
        <home></home>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';
import loading from './loading.vue';
import Home from './Home.vue';
// import AsyncCategory from './AsyncCategory.vue'
const AsyncCategory = defineAsyncComponent(()=>import("./AsyncCategory.vue"));


  export default {
    components: {
      Home,
      AsyncCategory,
      loading,
    }
  }
</script>

<style scoped>

</style>