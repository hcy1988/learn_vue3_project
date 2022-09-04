export const demoMixin = {
  data() {
    return {
      message: "helo hcy"
    }
  },
  methods: {
    foo() {
      console.log("mixin function");
    }
  },
  created() {
    console.log("mixin created");
  }
}