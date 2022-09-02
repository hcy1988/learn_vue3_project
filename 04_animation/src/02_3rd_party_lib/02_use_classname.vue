<template>
  <div class="app">
    <div>
    <button @click="isShow = !isShow">表示・非表示</button>
    </div>
    <!--简写是appear -->
    <transition enter-active-class="animate__animated animate__rotateIn" 
                leave-active-class="animate__animated animate__rotateOut">
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
  /* .hcy-enter-active {
    animation: bounceInUp 1s ease-in;
  }
  .hcy-leave-active {
        animation: bounceInUp 1s ease-in reverse;
  } */
</style>