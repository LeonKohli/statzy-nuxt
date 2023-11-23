<template>
  <div class="server">
    <TitleComponent title="Server" />
    <table class="table">
      <tr>
        <th> Name </th>
        <td class=tableSeperator> <input class="input" placeholder="Name" /> </td>
        <th> Hochverfügbar </th>
        <td> <input class="inputCheck" type="checkbox" /> </td>
      </tr>
      <tr>
        <th> Umgebung </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Verfügbarkeit </th>
        <td> <input class="input" placeholder="Verfügbarkeit" /> </td>
      </tr>
      <tr>
        <th> Netzwerk </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Vertraulichkeit </th>
        <td> <input class="input" placeholder="Vertraulichkeit" /> </td>
      </tr>
      <tr>
        <th> CPU </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Integrität </th>
        <td> <input class="input" placeholder="Integrität" /> </td>
      </tr>
      <tr>
        <th> Arbeitsspeicher </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Verwendungszweck </th>
        <td> <select class="input" /> </td>
      </tr>
      <tr>
        <th> Betriebssystem </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Anmerkungen </th>
        <td> <input class="input" placeholder="Integrietät" /> </td>
      </tr>
      <tr>
        <th> HD-Typ </th>
        <td class=tableSeperator> <select class="input" /> </td>
        <th> Bereitstellungszeitpunkt </th>
        <td> <input class="inputDate" type="date" /> </td>
      </tr>
      <tr>
        <th> HD-Kapazität </th>
        <td class=tableSeperator> <input class="input" placeholder="Kapazität" /> </td>
        <th> vorraussichtl. Lieferzeit </th>
        <td> <input class="input" placeholder="Lieferzeit" /> </td>
      </tr>
      <tr>
        <th> Erreichbarkeit </th>
        <td class=tableSeperator> <select class="input" /> </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import TitleComponent from './TitleComponent.vue';
</script>

<style>
.input {
  @apply text-center m-2 rounded-md p-1;
  color: black;
}
.inputCheck {
  @apply text-center m-2 rounded-md p-1;
  transform: scale(1.25);
  color: black;
}
.inputDate {
  @apply text-center m-2 rounded-md p-1 text-gray-500;
  color: black;
}

.table {
  @apply text-center rounded-lg bg-slate-800 mx-auto text-white;
}

.table-head {
  @apply p-2;
}

.table-head-side {
  @apply p-2 border-r-2 border-gray-600;
}

.table-data {
  @apply p-2;
}

</style>
