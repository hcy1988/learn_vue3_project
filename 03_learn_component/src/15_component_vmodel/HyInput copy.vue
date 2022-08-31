<template>
  <div>
    <!-- <button @click="btnClick">hyinput button</button>
    <h2>HyInput: {{modelValue}}</h2> -->
    <input :value="modelValue" @input="btnClick">

    <!-- <input v-model="value"> -->
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String | Number,
    },
    emits: ["update: modelValue"],
    // computed: {
    //   value: {
    //     set(value) {
    //       this.$emit("update:modelValue", value);
    //     },
    //     get() {
    //       return this.modelValue;
    //     }
    //   }
    // },
    methods: {
      btnClick() {
        this.$emit("update:modelValue", event.target.value);
      }
    }
  }
</script>

<style scoped>

</style>