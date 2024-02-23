<template>
  <div class="fixed top-0 left-0 right-0 flex items-center justify-between bg-[rgba(255,255,255,0.1)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.3)] p-1 rounded-[30px] m-2 mx-32 shadow transition-all duration-300 z-50" :class="{ 'top-[-100px]': isNavbarHidden }">
    <img src="/Statzy-Logo.png" class="w-[100px] h-auto mr-4 ml-4" v-if="!isLoginPage" />
    <nav class="flex justify-center flex-grow gap-6">
      <NuxtLink to="/" class="text-white font-medium text-[0.9rem] no-underline px-3 py-1 rounded-[15px] transition-colors duration-300 hover:bg-[#64748B]">Statzy</NuxtLink>
      <NuxtLink to="/fachverfahren" class="text-white font-medium text-[0.9rem] no-underline px-3 py-1 rounded-[15px] transition-colors duration-300 hover:bg-[#64748B]">Fachverfahren</NuxtLink>
    </nav>
    <UserButton/>
  </div>
</template>

<script lang="ts">

export default {
  setup() {
    const isNavbarHidden = ref(false);
    const route = useRoute();
    const isLoginPage = ref(route.name === 'login')

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

    return { isNavbarHidden, isLoginPage };
  }
}
</script>

<style>
/* Intentionally left empty as we're using Tailwind CSS */
</style>
