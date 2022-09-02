<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul" name="hcy" :css="false" 
                      @beforeEnter="beforeEnter"
                      @enter="enter"
                      @leave="leave">
      <li v-for="(i, index) in showNames" :key="i" :data-index="index">
        {{i}}
      </li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap';
  export default {
    data() {
      return {
        names: ["aaa", "bbb", "ccc", "hcy", "hxy", "triston", "freya"],
        keyword: "",
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el, done) {
        gsap.to(el, {
          // x: 0,
          opacity: 1,
          height: "1.5em",
          onComplete: done,
          delay: el.dataset.index * 0.5
        })
      },
      leave(el, done) {
        gsap.to(el, {
          // x:100,
          opacity: 0,
          height: 0,
          onComplete: done,
          delay: el.dataset.index * 0.5
        })
      }
    }
  }
</script>

<style scoped>
  /* .hcy-enter-from,
  .hcy-leave-to {
    opacity: 0;
  }

  .hcy-enter-active,
  .hcy-leave-active {
    transition: opacity 1s ease;
  } */
</style>