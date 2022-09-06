<template>
  <div>
    <h2>
      現在のカウンター：{{counter}}
    </h2>
    <h2>
      カウンター＊２：{{doubleCounter}}
    </h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <div>{{data}}</div>
    <button @click="changeData">change data</button>

    <p class="content"></p>

    <div class="scroll">
      <div class="scroll-x">scrollX:{{scrollX}}</div>
      <div class="scroll-y">scrollY:{{scrollY}}</div>
    </div>

    <div class="mousemove">
      <div class="mouse-x">mouseX:{{mouseX}}</div>
      <div class="mouse-y">mouseY:{{mouseY}}</div>
    </div>

    
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import {
  useCounter,
  useLocalStorage,
  useMousePosition,
  useScrollPosition,
  useTitle,
} from './hooks/index'

  export default {
    
    //最初の方法でカウンターを実現する方法
    // data() {
    //   return {
    //     counter: 0,
    //   }
    // },
    // methods: {
    //   increment() {
    //     this.counter++
    //   },
    //   decrement() {
    //     this.counter--
    //   }
    // },
    // computed: {
    //   doubleCounter() {
    //     return this.counter * 2;
    //   }
    // }


    //compositionで実現する方法
    setup() {
      //counter hook
      const { counter, doubleCounter, increment, decrement } = useCounter();

      //title hook
      const titleRef = useTitle("デフォルト値です！");
      setTimeout(()=>{
        titleRef.value = "hahaha"
      }, 3000)

      //scroll hook
      const { scrollX, scrollY } = useScrollPosition();

      //mouse hook
      const { mouseX, mouseY } = useMousePosition();

      const data = useLocalStorage("info", {name:"hcy", age:18});
      const changeData = () => {
        data.value = "hahaha"
      }

      return {
        counter,
        increment,
        decrement,
        doubleCounter,

        scrollX,
        scrollY,

        mouseX, mouseY,

        data, changeData,

        //以下の書き方もOKですが、可読性が良くない
        // ...useCounter()
      }
    }
  }
</script>

<style scoped>
  .content {
    width: 5000px;
    height: 3000px;
  }
  .scroll {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  .mousemove {
    position: fixed;
    left: 30px;
    bottom: 30px;
  }
</style>