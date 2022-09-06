import { createApp } from 'vue'
import App from './07_composition_練習/App.vue'

const app = createApp(App);
// app.mixin({
//   created() {
//     console.log("global mixin")
//   }
// })
app.mount('#app')
