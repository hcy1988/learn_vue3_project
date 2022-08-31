<template>
  <div>
    <nav-bar :name="name">
      <!-- slot默认有一个为default的name
      <slot name="default"></slot> -->

      <!-- v-slot:[name]的缩写 #[name] -->
      <template v-slot:left>
        <button>left button</button>
      </template>
      <template v-slot:center>
        <h2>the title</h2>
      </template>
      <template #right>
        <i>left I</i>
      </template>
      <template #[name]>
        <i>动态插槽</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar,

    },
    data() {
      return {
        name: "hcy",
      }
    }
  }
</script>

<style scoped>

</style>