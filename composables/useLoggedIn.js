// composables/useLoggedIn.js
import { useToken } from './useToken';
import { computed } from 'vue';

export const useLoggedIn = () => {
  const token = useToken();
  console.log('token outside computed:', token.value);

  const isLoggedIn = computed(() => {
    console.log('computed isLoggedIn:', !!token.value);
    return !!token.value;
  });

  return isLoggedIn;
};
