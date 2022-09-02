<template>
  <div class="app">
    <div>
    <button @click="isShow = !isShow">表示・非表示</button>
    </div>
    <!--简写是appear -->
    <transition name="hcy">
      <h2 class="title" v-if="isShow">HElo hcy</h2>
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

  }
</script>

<style scoped>
  .title {
    display: inline-block;
  }
  .hcy-enter-active {
    animation: bounceInUp 1s ease-in;
  }
  .hcy-leave-active {
        animation: bounceInUp 1s ease-in reverse;
  }
</style>