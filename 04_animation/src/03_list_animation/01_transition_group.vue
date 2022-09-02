<template>
  <div>
    <button @click="addNum">add Number</button>
    <button @click="removeNum">remove Number</button>
    <button @click="shuffleNum">shuffle Number</button>

    <transition-group tag="p" name="hcy">
      <span v-for="i in numbers" :key="i" class="item">
      {{i}}
    </span>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash';
  export default {
    data() {
      return {
        numbers: [0,2,3,4,5,6,7,8,9],
        numCounter:10,
      }
    },
    methods: {
      addNum() {
        // this.numbers.push(this.numCounter++);
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.numbers.splice(this.randomIndex(), 1)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length);
      },
      shuffleNum() {
        this.numbers= _.shuffle(this.numbers);
      }
    },
  }
</script>

<style scoped>
  .item {
    margin-right: 10px;
    display: inline-block;
  }
  .hcy-enter-from,
  .hcy-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .hcy-enter-active,
  .hcy-leave-active {
    transition: all 1s ease;
  }
  /* 移除需要添加以下position才会有动画效果，因为在移除前会占据位置 */
  .hcy-leave-active {
    position: absolute;
  }
  .hcy-move {
    transition: transform 1s ease;
  }
</style>