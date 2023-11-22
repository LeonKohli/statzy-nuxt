<template>
  <div>
    <div class="flex justify-center mt-4">
      <img src="/Statzy-Logo.png" class="w-60 place-content-center" v-if="!isLoginPage"/>
    </div>
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
  html 
  {
    background-color: #0f172a;
    color: white;
  }
/*div.main {
  border: 1px solid red;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
  padding: 5px;
}*/
</style>
