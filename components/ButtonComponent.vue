<template>
  <div class="flex justify-center">
    <button class="w-36 h-8 bg-slate-800 rounded-lg my-4 text-white font-bold scale-125 transition duration-75 hover:bg-gray-600 active:scale-90 active:bg-gray-600">{{ text }}</button>
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