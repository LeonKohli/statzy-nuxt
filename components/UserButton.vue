<template>
  <button class="user-button">
    <img src="/path-to-user-icon.png" alt="User" />
  </button>
</template>

<script>
export default {
  // Add any required script here
}
</script>

<style>
.user-button {
  border: none;
  background-color: transparent;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-button img {
  width: 40px; /* Adjust size as needed */
  height: 40px; /* Adjust size as needed */
  border-radius: 50%; /* Make image round */
}
</style>
