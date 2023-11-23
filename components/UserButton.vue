<template>
  <div class="user-button">
    <button class="user-avatar" @click="toggleDropdown">
      <img src="https://avatars.githubusercontent.com/u/98176333?v=4" alt="User" />
    </button>
    <div v-if="showDropdown" class="dropdown">
      <ul>
        <li @click="logout">Logout</li>
      </ul>
    </div>
  </div>
</template>


<script>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'; // Import the user store

export default {
  data() {
    return {
      showDropdown: false
    };
  },
  setup() {
    const router = useRouter();
    const userStore = useUserStore(); // Use the user store

    const logout = () => {
      userStore.logout(); // Call the logout action from the store
      router.push('/login'); // Redirect to the login page
    };

    return { logout };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    }
  }
}
</script>


<style scoped>
.user-button {
  position: relative;
}

.user-avatar {
  border: none;
  background: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.dropdown ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown li {
  padding: 0.5rem;
  cursor: pointer;
}

.dropdown li:hover {
  background-color: rgba(100, 116, 139, 0.2); /* Lighter slate color for hover */
}
</style>