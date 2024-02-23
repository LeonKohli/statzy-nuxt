<template>
    <table :class="tableClass">
      <tbody>
        <TableRow v-for="(row, index) in rows" :key="index" :label="row.label" :inputs="row.inputs" />
      </tbody>
    </table>
  </template>
  
  <script>
  
  export default {
    name: 'TableComponent',
    props: {
      tableClass: String,
      rows: Array
    }
  }
  </script>
  