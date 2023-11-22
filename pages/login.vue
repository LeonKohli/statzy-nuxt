<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex justify-center mt-4">
        <img src="/Statzy-Logo.png" class="w-32 md:w-48" />
      </div>
      <div class="w-full shadow-lg bg-slate-800 rounded-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            Melden Sie sich hier an
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Benutzername</label>
              <input type="username" name="username" id="username"
                class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Benutzername" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Passwort</label>
              <input type="password" name="password" id="password" placeholder="••••••••"
                class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required />
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Passwort
                vergessen?</a>
            </div>
            <button type="submit"
              class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useToken } from '~/composables/useToken';
import { useLoggedIn } from '~/composables/useLoggedIn';
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

export default {
  setup() {
    const token = useToken();
    const isLoggedIn = useLoggedIn();
    const router = useRouter();

    const handleLogin = async () => {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        token.value = data.token;

        // Redirect after a short delay to ensure reactivity updates
        setTimeout(() => {
          if (isLoggedIn.value) {
            router.push('/');
          }
        }, 100); // Adjust the delay as needed
      }
      catch (error) {
        console.error(error);
        // Handle login error (show message to user, etc.)
      }
    };

    return { handleLogin };
  }
};
</script>
