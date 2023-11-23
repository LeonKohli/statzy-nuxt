<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex justify-center mt-4">
        <img src="/Statzy-Logo.png" class="w-32 md:w-48" />
      </div>
      <div class="w-full shadow-lg bg-slate-800 rounded-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">Melden Sie sich hier an</h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-white">Benutzername</label>
              <input type="text" id="username"
                class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Benutzername" v-model="username" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Passwort</label>
              <input type="password" id="password"
                class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••••••" v-model="password" required />
            </div>
            <div class="flex items-center justify-between">
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Passwort
                vergessen?</a>
            </div>
            <button type="submit"
              class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
              @click="showPopup = false">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="popup">
      <button class="close-button" @click="showPopup = false">Close</button>
      <div class="card">
        <div class="bg"></div>
        <div class="blob"></div>
        <p class="popup-überschrift">Incorrect Login</p>
        <p class="popup-text">Please check password and username</p>
      </div>
    </div>
  </section>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  data() {
    return {
      username: '',
      password: '',
      showPopup: false,
    };
  },
  methods: {
    async handleLogin() {
      try {
        const userStore = useUserStore();
        await userStore.login(this.username, this.password);
        this.$router.push('/'); // Redirect after successful login
      } catch (error) {
        this.showPopup = true;
      }
    },
  },
};
</script>

<style>
.popup {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  top: 50%;

  border-radius: 8px;
  /* Optional: for rounded corners */
  padding: 20px;
  /* Optional: for some spacing inside the popup */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Optional: for a subtle shadow */
}

.popup::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: block;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px);
  /* Apply backdrop-filter for blurring */
  background-color: rgba(15, 23, 42, 0.5);
  /* Semi-transparent background */
}

.card {
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 20px 20px 60px #334155, -20px -20px 60px #334155;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 190px;
  height: 240px;
  z-index: 2;
  background: rgba(51, 65, 85, 0.95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid #475569;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

.popup-überschrift {
  color: rgb(255, 255, 255);
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: rgb(255, 10, 10);
  border-radius: 5px;
  z-index: 10;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  /* Added text-align center */
}

.popup-text {
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 10;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
  /* Added text-align center */
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}

.close-button {
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background-color: #334155;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10000;
  outline: 2px solid #475569;
}

.close-button:hover {
  background-color: #dc2626;
  color: #fff;
  transition-duration: 100ms;
}

.close-button:active {
  scale: 90%;
  transition-duration: 25ms;
}
</style>
