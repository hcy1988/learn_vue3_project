import { createApp } from 'vue'
import App from './03_customize_command/App.vue'
import registerDirectives from './03_customize_command/directives'

const app = createApp(App)

//global command 全局指令
// app.directive("focus", {
//   mounted(el, bindings, vnode, preVnode) {
//     el.focus();
//   }
// })
registerDirectives(app);


app.mount('#app')
