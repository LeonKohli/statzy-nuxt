<template>
  <div class="suchmaske">
    <TitleComponent title="Verfahrens-Daten"/>
    <ProcedureTableComponent/>
    <TitleComponent title="Personen-Daten"/>
    <PersonTableComponent/>
    <SystemeComponent/>
    <ButtonComponent text="Suchen" />
  </div>
</template>

<script setup>
import TitleComponent from './TitleComponent.vue';
import ProcedureTableComponent from './ProcedureTableComponent.vue';
import PersonTableComponent from './PersonTableComponent.vue';
import ButtonComponent from './ButtonComponent.vue';
import SystemeComponent from './SystemeComponent.vue';
</script>
