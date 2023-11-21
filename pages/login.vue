<template>
    <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" id="login">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" @submit.prevent="login">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="username" class="sr-only">Benutzername</label>
              <input id="username" name="username" type="text" v-model="username" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-slate-800 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Benutzername">
            </div>
            <div>
              <label for="password" class="sr-only">Passwort</label>
              <input id="password" name="password" type="password" v-model="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 bg-slate-800 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Passwort">
            </div>
          </div>
  
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Anmelden
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      login() {
        // Überprüfen Sie hier die Anmeldedaten
        console.log('Benutzername:', this.username);
        console.log('Passwort:', this.password);
      }
    }
  }
  </script>

  <style>

  </style>