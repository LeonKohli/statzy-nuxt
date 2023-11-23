<template>
  <div>
    <table class="table">
      <tr>
        <td class="tableSeperator"> Anzahl zugeordneter Systeme: "Anzahl" </td>
        <td class="tableSeperator"> <input class="input" type="number" placeholder="Zahl" /> </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.input {
  @apply text-center m-2 rounded-md p-1;
  color: black;
}


.table {
  @apply text-center rounded-lg bg-slate-800 mx-auto text-white;
}

</style>