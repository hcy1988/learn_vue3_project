<template>
  <div>
    <button @click="toggle">表示・非表示</button>

    <transition name="hcy">
      <h2 v-if="isShow">Hello World</h2>
    </transition>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      toggle() {
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style scoped>
  .hcy-enter-from,
  .hcy-leave-to {
    opacity: 0;
  } 

  .hcy-enter-to,
  .hcy-leave-from {
    opacity: 1;
  }

  .hcy-enter-active,
  .hcy-leave-active {
    transition: opacity 2s ease;
  }
</style>