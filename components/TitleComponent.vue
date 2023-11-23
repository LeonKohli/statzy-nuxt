<template>
  <div>
    <h1 class="title-h1">{{ title }}</h1>
  </div>
</template>

<script setup>
defineProps(['title']);
</script>

<style>
.title-h1 {
  @apply text-2xl font-bold text-center;
}
</style>
