<template>
  <div class="app">
    <div>
    <button @click="toggle">表示・非表示</button>
    </div>
    <!--简写是appear -->
    <transition name="hcy" mode="out-in" appear="true">
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>

  </div>
</template>

<script>
import Home from './pages/About.vue';
import About from './pages/Home.vue';
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
    },
    components: {
      Home,
      About,
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