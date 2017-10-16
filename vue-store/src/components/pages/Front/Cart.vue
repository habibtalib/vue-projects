<template>
  <div>
    <b-jumbotron :header="title" :lead="msg">
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      title: 'Vue Store',
      msg: 'Welcome to Cart Page',
    };
  },
};
</script>
