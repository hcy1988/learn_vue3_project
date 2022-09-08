
<script>
import {h} from 'vue'
  export default {
    render() {
      return h("div", null, [
        h("h2", null, "hello world component"),
        this.$slots.default ? this.$slots.default({name: "hcy"}) : h("span", null, "helloworld slot default")

      ])
    }
  }
</script>

<style scoped>

</style>