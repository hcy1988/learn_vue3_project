<template>
  <div>
    <p>home</p>
    <div>{{message}}</div>

    <div>{{title}}</div>

    <div>{{counter}}
    </div>
    <button @click="increment">++</button>
  </div>
</template>

<script>
  export default {
    
    props:{
      message: {
        type: String,
        required: true,
      }
    },
    // setupの属性
    //props属性がsetup中に入れない、
    //setupの中に、thisが使えない
    //contextは{attrs, slots, emit}を含めています
    setup(props, context) {
      let counter = 100;
      const increment = () => {
        counter++;
      };
      return {
        title: "helo hcy",
        counter,
        increment,
      }

    }
  }
</script>

<style scoped>

</style>