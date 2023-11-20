<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@media (prefers-color-scheme: dark) {
  html 
  {
    background-color: black;
    color: white;
  }
}
@media (prefers-color-scheme: light) 
{
  html 
  {
    background-color: white;
    color: black;
  }
}
@media (prefers-color-scheme: no-preference)
{
  html {
    background-color: black;
    color: white;
  }
}
div.main {
  border: 1px solid red;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
  padding: 5px;
}
</style>
