import { createApp } from 'vue'
import App from './03_refAPI/App.vue'

const app = createApp(App);
// app.mixin({
//   created() {
//     console.log("global mixin")
//   }
// })
app.mount('#app')
