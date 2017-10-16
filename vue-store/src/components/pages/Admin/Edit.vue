<template>
  <div>
    <h1 class="display-4
                 border border-top-0
                 border-left-0
                 border-right-0
                 mt-4"
    >
      {{title}} - {{$route.params.id}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      title: 'Edit Product',
    };
  },
};
</script>
