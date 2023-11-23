<template>
    <div style="margin-top: 150px;"> 
      <TitleComponent title="Fachverfahren"/>
      <SearchMaskComponent/>
      <MessageContainerComponent/>
      <ServerComponent/>
      <DatabaseComponent/>
    </div>
  </template>
  
  <script setup>
  import TitleComponent from '../components/TitleComponent.vue';
  import SearchMaskComponent from '../components/SearchMaskComponent.vue';
  import MessageContainerComponent from '../components/MessageContainerComponent.vue';
  import ServerComponent from '../components/ServerComponent.vue';
  import DatabaseComponent from '../components/DatabaseComponent.vue';
  </script>
  