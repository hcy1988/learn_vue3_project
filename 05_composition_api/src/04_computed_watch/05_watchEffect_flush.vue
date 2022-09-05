<template>
  <div>
    <h2 ref="title">hahah</h2>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
  export default {
    //以前は$refsでhahahを使用することが可能
    //methodsの中に、this.$refs.titleをすれば良い
    setup() {
      const title = ref(null);

      watchEffect(()=>{
        console.log(title.value);
      }, {
        //flushはwatchEffectの監視タイミングを選択可能、デフォルトはpre,postはDOMをマウント後に実行、syncは使用しないでください。
        flush: "post"
      })

      return {
        title,
      }
    }
  }
</script>

<style scoped>

</style>