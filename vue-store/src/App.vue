<template>
  <div id="app">

    <!-- Main Navbar -->
    <b-navbar toggleable="md" type="dark" variant="info">

      <!-- Toggle Collapsed Menu for Mobile -->
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <!-- Navbar Brand -->
      <b-navbar-brand router-link :to="{ name: 'Home' }">
        <img width="80" src="./assets/logo.png"> {{title}}
      </b-navbar-brand>

      <!-- Collapsed Menu -->
      <b-collapse is-nav id="nav_collapse">

        <!-- Left aligned nav items -->
        <b-nav is-nav-bar>
          <b-nav-item router-link :to="{ name: 'Products'}">Admin</b-nav-item>
          <b-nav-item router-link :to="{ name: 'Cart'}">Cart</b-nav-item>
        </b-nav>

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">

          <!-- Seachbar -->
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <!-- Dropdown Menu -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- Login Button -->
          <b-nav-item router-link :to="{ name: 'Products'}">Login</b-nav-item>
        </b-nav>

      </b-collapse>
    </b-navbar>

    <!-- Router outlet -->
    <router-view/>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Vue Store',
      };
    },
  };

</script>

<style>
  #app {
    font-family: 'Fira Code', 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
