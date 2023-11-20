<template>
  <div>
    <h1>Welcome to the Test Page!</h1>
    <p>This is a test page for your Nuxt project.</p>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      message: 'Hello, world!'
    }
  },
  methods: {
    showMessage() {
      console.log(this.message);
    }
  },
  mounted() {
    this.showMessage();
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
p {
  font-size: 18px;
}
</style>
