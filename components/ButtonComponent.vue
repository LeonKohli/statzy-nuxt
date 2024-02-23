<template>
  <div class="flex justify-center">
    <button class="h-8 my-4 font-bold text-white transition duration-75 scale-125 rounded-lg w-36 bg-slate-800 hover:bg-gray-600 active:scale-90 active:bg-gray-600">{{ text }}</button>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  additionalClasses: String
});
</script>

<style>
</style>