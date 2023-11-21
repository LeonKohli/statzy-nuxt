<template>
  <div>
    <h1 class="text-7xl text-center text-blue-500">Statzy</h1>
    <Navbar v-if="!isLoginPage"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '/components/navbar.vue';

export default {
  name: 'App',
  components: {
    navbar,
  },
  computed: {
    isLoginPage() {
      // Überprüfe, ob die aktuelle Seite die Login-Seite ist
      return this.$route.name === 'login';
    },
  },
};
</script>

<style>
@media (prefers-color-scheme: dark) {
  html 
  {
    background-color: black;
    color: white;
  }
}
@media (prefers-color-scheme: light) 
{
  html 
  {
    background-color: white;
    color: black;
  }
}
@media (prefers-color-scheme: no-preference)
{
  html {
    background-color: black;
    color: white;
  }
}
div.main {
  border: 1px solid red;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
  padding: 5px;
}
</style>
