// middleware/auth.global.js
import { useLoggedIn } from '~/composables/useLoggedIn';

export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedIn = useLoggedIn();

  if (!isLoggedIn.value && to.path !== '/login') {
    return navigateTo('/login');
  }
});
