<template>
  <div class="app">
    <div>
    <button @click="toggle">表示・非表示</button>
    </div>
    <!-- duration一般比较少用  -->
    <!-- <transition name="hcy" type="transition" :duration="1000"> -->

    <transition name="hcy" type="transition" :duration="1000">
      <h2 class="title" v-if="isShow">Hello World</h2>
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
.app {
  width:200px;
  margin: 0 auto;
}
  .title {
    display: inline-block;
  }
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
    transition: opacity 1s ease;
  }

  .hcy-enter-active {
    animation: bounce 1s ease;
  }

  .hcy-leave-active {
    animation: bounce 1s ease reverse;
  }

  @keyframes bounce {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>