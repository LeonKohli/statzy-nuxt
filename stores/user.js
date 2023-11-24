import { defineStore } from 'pinia';
import axios from 'axios';
import Cookies from 'js-cookie';


export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('/api/auth/login', { username, password });
        Cookies.set('auth_token', response.data.token, { expires: 1 / 24, secure: true }); // Set for 1 hour
        console.log('Login successful with cookie login.post: ', response.data.token);
        this.isAuthenticated = true;
      } catch (error) {
        this.isAuthenticated = false;
        throw new Error('Login failed');
      }
    },
    checkAuth() {
      const token = Cookies.get('auth_token');
      console.log('checkAuth token user.js: ', token);
      if (!token) {
        this.isAuthenticated = false;
        return;
      }

      // Optionally verify the token's validity with an API call
      axios.post('/api/auth/verifyToken', { token })
        .then(() => {
          this.isAuthenticated = true;
          console.log('checkAuth successful user.js: ', this.isAuthenticated);
        })
        .catch(() => {
          this.isAuthenticated = false;
          Cookies.remove('auth_token');
          console.log('checkAuth error user.js: ', error);
        });
      },
      logout() {
        axios.post('/api/auth/logout')
          .then(() => {
            this.isAuthenticated = false;
            console.log('Logout successful');
          })
          .catch((error) => {
            console.error('Logout error:', error);
          });
      },
  },
});
