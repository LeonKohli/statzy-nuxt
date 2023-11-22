<template>
    <tr class="component-row">
      <th v-if="label" class="tableheadside">{{ label }}</th>
      <td class="tabledata" v-for="(input, index) in inputs" :key="index">
        <input v-if="input.type !== 'select'" :type="input.type" :placeholder="input.placeholder" class="eingabe" />
        <select v-else class="eingabe"></select>
      </td>
    </tr>
  </template>

  <style>
tr.component-row{
  display: inline-block;
}
</style>
  
  <script>
  export default {
    name: 'TableRow',
    props: {
      label: String,
      inputs: Array
    }
  }
  </script>
  