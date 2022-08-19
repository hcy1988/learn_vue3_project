<template>
  <div>
    <h2>{{title}}</h2>
    <h3>{{content}}</h3>
  </div>
</template>

<script>
import { stringLiteral } from '@babel/types';

  export default {
    //本番の開発ではアレイ[]ではなく、オブジェクト{}を使用する
    // props:[
    //   'title',
    //   'content'
    // ]
    props: {
      title:String,
      content: {
        type: String,
        //requiredとdefaultのどっちを使うこと
        required: true,
        default: "123"
      },
      propE: {
        type:Object,
        //typeがオブジェクトの場合、defaultはreturn{}の形式にする
        //もしdefault:{name:"abc"}のように設定すると、ほかの場所にもこのpropEを使用すると、どこか変更が発生したら、すべてpropEが変更される
        //对象的情况很重要，他是对对象的引用，所以复用时，改一处就会全改
        default() {
          return { message: "hello" }
        }
      },
      propF: {
        //自己对value进行校验
        validator(value) {
          return ['success', 'warning', 'danger'].includes(value)
        }
      },
      //也可以传入函数，但是很少用
      propG: {
        type: Function,
        default() {
          return 'Default function'
        }
      }
    }
  }
</script>

<style scoped>

</style>