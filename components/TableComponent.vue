<template>
    <table :class="tableClass">
      <tbody>
        <TableRow v-for="(row, index) in rows" :key="index" :label="row.label" :inputs="row.inputs" />
      </tbody>
    </table>
  </template>
  
  <script>
  import TableRow from './TableRow.vue';
  
  export default {
    name: 'TableComponent',
    components: {
      TableRow
    },
    props: {
      tableClass: String,
      rows: Array
    }
  }
  </script>
  