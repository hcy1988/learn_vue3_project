import { createApp } from 'vue';
import App from './08_slot_basic/App.vue';
// import {sum} from './12_异步组件/utils/math.js';


//import()メソッドで導入されたファイルは、app.jsにパッケージ化されるではなく、
//新たにjsを作成すること
// import("./12_异步组件/utils/math.js").then((res)=> {
//   console.log(res.sum(20, 40));
// })



createApp(App).mount('#app')
