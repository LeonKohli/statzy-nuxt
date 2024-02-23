<template>
  <div>
    <h1 class="text-4xl font-bold text-center">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps(['title']);
</script>

<style>
/* Intentionally left empty as we're using Tailwind CSS */
</style>