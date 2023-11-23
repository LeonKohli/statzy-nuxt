<template>
  <div class="messageContainer">
    <span> Message "Successfull | ERROR" </span>
    <br>
    <br>
    <ButtonComponent text="Erstellen"/>
  </div>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue';
</script>

<style>
.messageContainer {
  @apply text-center text-yellow-400 mb-8 font-bold;
}
</style>
