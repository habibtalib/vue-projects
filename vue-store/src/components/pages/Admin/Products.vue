<template>
  <div>
    <b-row align-h="between" class="border border-top-0
                                    border-left-0
                                    border-right-0
                                    mt-4">
      <b-col cols="8">
        <h1 class="display-4">
          {{title}}
        </h1>
      </b-col>
      <b-col cols="4">
        <b-button class="float-right my-3" router-link :to="{ name: 'New' }" variant="success">
          New Product
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      title: 'Products',
    };
  },
};
</script>
