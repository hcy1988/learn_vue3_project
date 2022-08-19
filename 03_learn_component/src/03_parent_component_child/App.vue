<template>
  <div>
    <show-message title="hahaha" content="hehehe"></show-message>
    
    <!-- 我们也可以给组件传入class，id，style这样的属性，如果这样的属性没有在子组件的props里定义，他会遵循以下顺序传递
    1.传给子组件的根元素，一般是div
    2.如果不想给根元素，可以在子组件里设置inheritAttrs:false
      同时在需要的元素节点里用:class="$attrs.class"这样的方式来引用，
      如果希望绑定所有非prop的属性，可以用v-bind="$attrs"
    3.子组件有多个根节点的话，会报警告 可以使用:class="$attrs.class"来定义 -->
    <!-- <show-message class="hcy" title="hahaha" content="hehehe"></show-message> -->
    <show-message :title="title" :content="content"></show-message>
    <show-message v-bind="message"></show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';
  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: "xixixi",
        content: "XIXIXI",
        message: {
          title: "132",
          content: "wo shi wowowo"
        }
      }
    }
  }
</script>

<style scoped>

</style>