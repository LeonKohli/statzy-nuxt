<template>
  <div>
    <Navbar v-if="!isLoginPage"></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '/components/navbar.vue';
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';


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
  setup() {
    const userStore = useUserStore();

    onMounted(() => {
      userStore.checkAuth(); // Call checkAuth on component mount
    });
  },
};
</script>

<style>
  html {
    background-color: #0f172a;
    color: white;
  }
</style>
