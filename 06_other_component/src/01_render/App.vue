
<script>
import { h } from 'vue'
import HelloWorld from './HelloWorld.vue'

  export default {
    render() {
      return h(HelloWorld, null, {
        default: props => h("span", null, `app to helloworld: ${props.name}`),
      })
    }

  }
</script>

<style scoped>

</style>