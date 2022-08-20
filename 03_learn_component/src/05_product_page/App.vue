<template>
  <div>
    <tab-control :titles="titles" @titleClick="titleClick"></tab-control>
    <h2>{{contents[currentIndex]}}</h2>
  </div>
</template>

<script>
import TabControl from './TabControl.vue';

  export default {
    components: {
      TabControl,
    },
    data() {
      return {
        titles: ['洋服','靴','鞄'],
        contents: ['洋服の画面','鞄の画面','靴の画面'],
        currentIndex:0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>

</style>