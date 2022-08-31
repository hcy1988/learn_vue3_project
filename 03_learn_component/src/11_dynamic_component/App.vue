<template>
  <div>
    <button @click="clickItem(item)" 
            v-for="item in tabs" 
            :key="item"
            :class="{active: currentTab===item}">
      {{item}}
    </button> 
    <!-- 1. v-ifの方法でcomponent間遷移を実現 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 2. 动态组件 -->
    <!-- 如果使用age="18",将会传递字符串，加[：]就能够转递Number -->
    <keep-alive include="home,about">
    <component :is="currentTab" 
               name="coderwhy" 
               :age="18" 
               @pageClick="pageClick"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Category from './pages/category.vue'

  export default {
    components: {
      Home,
      About,
      Category,
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        currentTab: "home",
      }
    },
    methods: {
      clickItem(item) {
        this.currentTab = item;
      },
      pageClick() {
        console.log("click from child component")
      }
    }
  }
</script>

<style scoped>
  .active {
    color:red;
  }
</style>