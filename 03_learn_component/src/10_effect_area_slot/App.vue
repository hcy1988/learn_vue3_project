<template>
  <div>
    <!-- <child-cpn>
      <button>hahah</button>
    </child-cpn> -->
    <show-names :names="names">
      <template v-slot:hcy="slotProps">
        <button>{{slotProps.item}}</button>
      </template>
    </show-names>
    <show-names :names="names">
      <template v-slot:hcy="slotProps">
        <strong>{{slotProps.item}}</strong>
      </template>
    </show-names>

    <!-- 默认插槽时，可以简写 独占默认插槽 有其他具名插槽时候无法使用-->
    <show-names :names="names" v-slot="slotProps">
      <button>{{slotProps.item}}-{{slotProps.index}}</button>
    </show-names>
  </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue';
import ShowNames from './ShowNames.vue';

  export default {
    components: {
      ChildCpn,
      ShowNames,
    },
    data() {
      return {
        names: ["nhcy", "hxy", "james", "tris"],
      }
    }
  }
</script>

<style scoped>

</style>