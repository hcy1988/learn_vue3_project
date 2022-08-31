<template>
  <div @click="divClick">
    home component
    {{name}}-{{age}}
  </div>
</template>

<script>
  export default {
    name: "home",
    props: {
      name: {
        type: String,
        default: "",
      },
      age: {
        type: Number,
        default: 0,
      }
    },
    emits: ["pageClick"],
    methods: {
      divClick() {
        this.$emit("pageClick")
      }
    }
  }
</script>

<style scoped>

</style>