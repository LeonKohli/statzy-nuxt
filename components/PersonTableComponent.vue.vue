<template>
  <table class="table">
    <tr>
      <th class="table-head"> </th>
      <th class="table-head"> Name </th>
      <th class="table-head"> Vorname </th>
      <th class="table-head"> Dezernat </th>
      <th class="table-head"> Telefon </th>
    </tr>
    <tr>
      <th class="table-head-side"> Kundenmanagament: </th>
      <td class="table-data"> <input class="input" placeholder="Muster Name" /> </td>
      <td class="table-data"> "Muster Vorname" </td>
      <td class="table-data"> "Muster Dezernat" </td>
      <td class="table-data"> "Muster Telefon" </td>
    </tr>
    <tr>
      <th class="table-head-side"> Fachadministration: </th>
      <td class="table-data"> <input class="input" placeholder="Muster Name" /> </td>
      <td class="table-data"> "Muster Vorname" </td>
      <td class="table-data"> "Muster Dezernat" </td>
      <td class="table-data"> "Muster Telefon" </td>
    </tr>
    <tr>
      <th class="table-head-side"> Auftraggeber: </th>
      <td class="table-data"> <input class="input" placeholder="Muster Name" /> </td>
      <td class="table-data"> "Muster Vorname" </td>
      <td class="table-data"> "Muster Dezernat" </td>
      <td class="table-data"> "Muster Telefon" </td>
    </tr>
    <tr>
      <th class="table-head-side"> Verfahrensbetreuer: </th>
      <td class="table-data"> <input class="input" placeholder="Muster Name" /> </td>
      <td class="table-data"> "Muster Vorname" </td>
      <td class="table-data"> "Muster Dezernat" </td>
      <td class="table-data"> "Muster Telefon" </td>
    </tr>
  </table>
  <br>
</template>

<style>
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

.input {
  @apply text-center m-2 rounded-md p-1;
  color: black;
}</style>
