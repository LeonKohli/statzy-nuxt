<template>
  <table class="table">
    <tr>
      <td class="table-data"> <input class="input" placeholder="Verfahrens-ID"/> </td>
      <td class="table-data"> <input class="input" placeholder="Verfahrens-Name"/> </td>
      <td class="table-data"> <input class="input" placeholder="Tag"/> </td>
      <td class="table-data"> <input class="input" placeholder="Zweck"/> </td>
      <td class="table-data"> <input class="input" placeholder="Laufzeit"/> </td>
    </tr>
  </table>
</template>

<style>
.table {
  @apply text-center rounded-lg bg-slate-800 mx-auto text-white;
}
.table-data {
  @apply p-2;
}
.input {
  @apply text-center m-2 rounded-md p-1;
  color: black;
}
</style>
