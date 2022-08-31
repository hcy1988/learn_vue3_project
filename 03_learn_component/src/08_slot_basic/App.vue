<template>
  <div>
    <my-slot-cpn>
      <button>I am button</button>
    </my-slot-cpn>
    <my-slot-cpn>
      wo shi text
    </my-slot-cpn>
    <my-slot-cpn>
      <my-btn/>
    </my-slot-cpn>
    <my-slot-cpn></my-slot-cpn>
    <my-slot-cpn>
      <h2>wo shi h2</h2>
      <button>woshibtn2</button>
      <strong>woshi strong</strong>
    </my-slot-cpn>
  </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue';
import MyBtn from './MyBtn.vue';

  export default {
    components: {
      MySlotCpn,
      MyBtn,
    }
  }
</script>

<style scoped>

</style>