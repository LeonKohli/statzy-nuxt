<template>
  <section>
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="flex justify-center mt-4">
        <img src="/Statzy-Logo.png" class="w-32 md:w-48" />
      </div>
      <div class="w-full shadow-lg bg-slate-800 rounded-xl md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Your username</label>
              <input type="username" name="username" id="username" class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded border-slate-600 bg-slate-500 focus:ring-3 focus:ring-blue-300" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-white">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
            </div>
            <button type="submit" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue" @click="showPopup = true">Sign in</button>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showPopup" class="popup">
      <button class="close-button" @click="showPopup = false">Close</button>
      <div class="card">
        <div class="bg"></div>
        <div class="blob"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false
    };
  },
  /*methods: {
    handleLogin() {
      const email = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      loginFunction(username, password);
      // additional logic, e.g. error handling
    }
  }*/
};
</script>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
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
  box-shadow: 20px 20px 60px #1e293b, -20px -20px 60px #334155;
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 190px;
  height: 240px;
  z-index: 2;
  background: #1e293b(255, 255, 255, .95);
  backdrop-filter: blur(200px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid #334155;
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
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
