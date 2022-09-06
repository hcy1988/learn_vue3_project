import { createApp } from 'vue'
import App from './08_setup_top/App.vue'

const app = createApp(App);
// app.mixin({
//   created() {
//     console.log("global mixin")
//   }
// })
app.mount('#app')
