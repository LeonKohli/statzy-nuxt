// composables/useToken.js
import { ref, watch } from 'vue';

export const useToken = () => {
  const token = ref(process.client ? window.localStorage.getItem('token') : null);

  watch(token, (newValue) => {
    if (process.client) {
      if (newValue) {
        window.localStorage.setItem('token', newValue);
      } else {
        window.localStorage.removeItem('token');
      }
    }
  });

  return token;
};
