<template>
  <div>
    <b-jumbotron :header="title" :lead="msg">
    </b-jumbotron>
  </div>
</template>

<style scoped>
  .jumbotron{
    text-align: center;
  }
</style>


<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Vue Store',
      msg: 'Welcome to Vue-Store',
    };
  },
};
</script>
