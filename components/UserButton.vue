<template>
  <div class="relative">
    <button @click="toggleDropdown" class="flex items-center justify-center p-2 bg-transparent border-none rounded-full cursor-pointer">
      <img src="https://avatars.githubusercontent.com/u/98176333?v=4" alt="User" class="w-10 h-10 rounded-full" />
    </button>
    <div v-if="showDropdown" class="absolute right-0 flex flex-col items-start p-2 mt-2 border rounded-md top-full bg-white/10 backdrop-blur-sm border-white/30">
      <ul class="p-0 m-0 list-none">
        <li @click="logout" class="p-2 cursor-pointer hover:bg-slate-200/20">Logout</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* no styles */
</style>


<script>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

export default {
  data() {
    return {
      showDropdown: false
    };
  },
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const logout = () => {
      userStore.logout();
      router.push('/login');
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