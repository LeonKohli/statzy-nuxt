// composables/useLoggedIn.js
import { useToken } from './useToken';

export const useLoggedIn = () => {
  const token = useToken();
  return computed(() => !!token.value);
};
