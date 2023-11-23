<template>
    <div class="navbar-container" :class="{ 'hidden': isNavbarHidden }">
      <img src="/Statzy-Logo.png" class="logo" v-if="!isLoginPage" />
      <nav class="nav-links">
        <NuxtLink to="/" class="nav-link">Statzy</NuxtLink>
        <NuxtLink to="/fachverfahren" class="nav-link">Fachverfahren</NuxtLink>
      </nav>
      <UserButton v-if="isLoggedIn" />
      <NuxtLink to="/login" class="nav-link" v-if="!isLoggedIn">Login</NuxtLink>
    </div>
  </template>
  

<script lang="ts">
import UserButton from './UserButton.vue';
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    UserButton,
  },
  setup() {
    const isNavbarHidden = ref(false);
    let lastScrollTop = 0;

        const handleScroll = () => {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScroll > lastScrollTop) {
                isNavbarHidden.value = true;
            } else {
                isNavbarHidden.value = false;
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return { isNavbarHidden };
    }
}
</script>

<style>
.navbar-container {
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  border: 1px solid rgba(255, 255, 255, 0.3); /* Border for glass effect */
  padding: 0.25rem 1rem;
  border-radius: 30px;
  margin: 0.5rem 8rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1),
              0 1px 2px -1px rgba(0, 0, 0, 0.06);
  transition: top 0.3s;
  z-index: 1000; 
}

.hidden {
  top: -100px;
}

.logo {
    width: 100px;
    height: auto;
    margin-right: 1rem;
    margin-left: 1rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  flex-grow: 1; /* Allows nav-links to take available space */
  justify-content: center; /* Center nav-links */
}

.nav-link {
    color: #ffffff;
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
    background-color: #64748B;
    color: #ffffff;
}
</style>
