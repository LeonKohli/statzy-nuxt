<template>
  <div class="datenbanken">
    <TitleComponent title="Datenbanken" />
    <table class="table">
      <tr>
        <th> Name </th>
        <td> <input class="input" placeholder="Name" /> </td>
      </tr>
      <tr>
        <th> Datenbank-Typ </th>
        <td> <select class="input" /> </td>
      </tr>
      <tr>
        <th> Clusterlösung </th>
        <td> <input class="input" placeholder="Lösung" /> </td>
      </tr>
      <tr>
        <th> Größe der Instanz </th>
        <td> <input class="input" placeholder="Größe" /> </td>
      </tr>
      <tr>
        <th> Festplattengröße </th>
        <td> <input class="input" placeholder="Größe" /> </td>
      </tr>
    </table>
    <ButtonComponent text="Bearbeiten" />
    <ButtonComponent text="Löschen" class="text-red-600 bg-red-500" />
  </div>
</template>

<script setup>
</script>

<style>
.datenbanken {
  @apply mt-4 mb-4;
}

.table {
  @apply text-center rounded-lg bg-slate-800 mx-auto text-white;
  /* Add specific styles for table rows and cells here */
}

.input {
  @apply text-center m-2 rounded-md p-1;
  color: black;
}
</style>
