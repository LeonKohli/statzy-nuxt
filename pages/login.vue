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
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Your email</label>
              <input type="email" name="email" id="email" class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-slate-600 border border-transparent text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border rounded border-slate-600 bg-slate-500 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-white">Remember me</label>
                </div>
              </div>
              <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
            </div>
            <button type="submit" class="w-full px-5 py-3 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
