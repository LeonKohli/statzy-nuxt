// /middleware/auth.js
import { useToken } from '~/composables/useToken';
import jwt from 'jsonwebtoken';

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useToken();

  if (!token.value && to.path !== '/login') {
    return navigateTo('/login');
  }

  try {
    jwt.verify(token.value, process.env.JWT_SECRET);
  } catch (error) {
    console.error(error);
    return navigateTo('/login');
  }
});
