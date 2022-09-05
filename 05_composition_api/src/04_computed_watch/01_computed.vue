<template>
  <div>
    {{fullName}}
  </div>
</template>

<script>
import { ref, computed } from 'vue'
  export default {
    
    setup() {
      const firstName = ref("H");
      const lastName = ref("cy");
      const fullName = computed(()=>firstName.value + lastName.value);

      return {
        firstName,
        lastName,
        fullName,
      }
    }
  }
</script>

<style scoped>

</style>