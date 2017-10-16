<template>
  <div>
    <b-container class="my-5">
      <b-breadcrumb :items="returnArrayOfPath"/>
      <router-view/>
    </b-container>
  </div>
</template>

<style scoped>
  .fab-button{
    position: absolute;
    bottom: 45px;
    right: 45px;
  }
</style>


<script>
export default {
  name: 'Index',
  data() {
    return {
      title: 'Admin',
      msg: 'Welcome to the Admin Page',
      routePath: [],
    };
  },
  mounted() {
    this.buildArrayOfPath();
  },
  computed: {
    returnArrayOfPath() {
      return this.routePath;
    },
  },
  watch: {
    $route: 'buildArrayOfPath',
  },
  methods: {
    splitPath() {
      return this.$route.path.split('/');
    },
    buildArrayOfPath() {
      this.routePath = [];
      this.splitPath().forEach((element) => {
        if (element !== '') {
          this.routePath.push({
            text: this.upperCaseParse(element),
            to: { name: this.upperCaseParse(element) },
          });
        }
      }, this);
    },
    upperCaseParse(element) {
      return element.charAt(0).toUpperCase() + element.slice(1);
    },
  },
};
</script>
