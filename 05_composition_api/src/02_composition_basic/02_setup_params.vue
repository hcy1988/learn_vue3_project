<template>
  <div>
    <p>home</p>
    <div>{{message}}</div>

    <div>{{title}}</div>

    <div>{{counter}}
    </div>
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
      console.log(props.message);
      console.log(context.attrs.id, context.attrs.class, context.slots, context.emit);
      return {
        title: "helo hcy",
        counter:100,
      }

    }
  }
</script>

<style scoped>

</style>