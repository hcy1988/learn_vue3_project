import { createApp } from 'vue'
import App from './04_computed_watch/App.vue'

const app = createApp(App);
// app.mixin({
//   created() {
//     console.log("global mixin")
//   }
// })
app.mount('#app')
