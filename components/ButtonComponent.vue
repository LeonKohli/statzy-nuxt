<template>
  <button class="button" :class="additionalClasses">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: String,
  additionalClasses: String
});
</script>

<style>
.button {
  @apply w-36 h-8 bg-slate-800 rounded-lg my-4 mx-auto block text-white font-bold scale-125;
}
.button:active {
  @apply scale-90 bg-gray-600 transition duration-75;
}
.button:hover {
  @apply bg-gray-600 transition duration-75;
}
</style>
