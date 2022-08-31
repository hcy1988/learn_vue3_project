<template>
  <div>
    <!-- <button @click="btnClick">hyinput button</button>
    <h2>HyInput: {{modelValue}}</h2> -->
    <!-- <input :value="modelValue" @input="btnClick"> -->

    <input v-model="value">
    <input v-model="why">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String,
      title: String,
    },
    emits: ["update:modelValue", "update:title"],
    computed: {
      value: {
        set(value) {
          this.$emit("update:modelValue", value);
        },
        get() {
          return this.modelValue;
        }
      },
      why: {
        set(why) {
          this.$emit("update:title", why);
        },
        get() {
          return this.title;
        }
      }
    },
    // methods: {
    //   btnClick() {
    //     // this.$emit("update:modelValue", event.target.value);
    //   }
    // }
  }
</script>

<style scoped>

</style>