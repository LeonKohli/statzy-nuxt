<template>
    <div> 
      <h1 class="fachverfahrenh1">Fachverfahren</h1>
      <div class="suchmaske">
        <h2 class="fachverfahrenh2">Verfahrens-Daten</h2>
        <TableComponent 
          tableClass="verfahren" 
          :rows="verfahrenRows"
        />
        <h2 class="fachverfahrenh2">Personen-Daten</h2>
        <TableComponent 
          tableClass="personen" 
          :rows="personenRows"
        />
        <h2 class="fachverfahrenh2">Server</h2>
        <TableComponent 
          tableClass="server" 
          :rows="serverRows"
        />
        <h2 class="fachverfahrenh2">Datenbanken</h2>
        <TableComponent 
          tableClass="db" 
          :rows="dbRows"
        />
        <button class="button">Suchen</button>
        <button class="button">Erstellen</button>
        <button class="buttonDelete">Löschen</button>
      </div>
    </div>
  </template>
  
  <script>
  import TableComponent from '@/components/TableComponent.vue';
  
  export default {
    components: {
      TableComponent
    },
    data() {
      return {
        verfahrenRows: [
          { label: null, inputs: [{ type: 'text', placeholder: 'Verfahrens-ID' }, ] },
          { label: null, inputs: [{ type: 'text', placeholder: 'Verfahrens-Name' }, ] },
          { label: null, inputs: [{ type: 'text', placeholder: 'Tag' }, ] },
          { label: null, inputs: [{ type: 'text', placeholder: 'Zweck' }, ] },
          { label: null, inputs: [{ type: 'text', placeholder: 'Laufzeit' }, ] },
          // More rows for 'Verfahrens-Daten'
        ],
        personenRows: [
          { label: 'Kundenmanagement:', inputs: [{ type: 'text', placeholder: 'Muster Name' }, /* more inputs */] },
          // More rows for 'Personen-Daten'
        ],
        serverRows: [
          { label: 'Name', inputs: [{ type: 'text', placeholder: 'Name' }, { type: 'checkbox' }] },
          // More rows for 'Server'
        ],
        dbRows: [
          { label: 'Name', inputs: [{ type: 'text', placeholder: 'Name' }] },
          // More rows for 'Datenbanken'
        ]
      };
    }
  }
  </script>

<style>
    table.verfahren, table.personen, table.systeme, table.server, table.db
    {
        text-align: center;
        border-radius: 10px;
        background-color: #1e293b;
        margin-left: auto;
        margin-right: auto;
        color: white
    }

    table.server > tbody > tr > th, td
    {
        padding: 10px;
    }

    td.tabledata
    {
        padding: 10px;
    }

    td.tableSeperator
    {
        border-right: 1px solid #475569;
    }

    th.tableheadtop, th.tableheadside
    {
        padding: 10px;
    }

    tr > th.tableheadtop:nth-child(n + 2):nth-child(-n + 5)
    {
        border-bottom: 1px solid #475569;
    }

    th.tableheadside
    {
        border-right: 1px solid #475569;
    }

    input.eingabe
    {
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        padding: 5px;
    }

    input.eingabeCheck
    {
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        padding: 5px;
        scale: 200%;
    }

    input.eingabeDate
    {
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        padding: 5px;
        color: #adb3bd;
    }

    select.eingabe
    {
        text-align: center;
        margin: 10px;
        border-radius: 5px;
        padding: 5px;
        width: 195px;
    }

    h1.fachverfahrenh1
    {
        font-size: xx-large;
        font-weight: 700;
        text-align: center;
    }

    h2.fachverfahrenh2
    {
        font-size: x-large;
        text-align: center;
        margin: 15px;
    }

    div.suchmaske
    {
        align-items: center;
    }

    div.messageContainer
    {
        text-align: center;
        color: #facc15;
        margin-bottom: 30px;
        font-weight: bolder;
    }

    button.button
    {
        width: 146px; 
        height: 31px; 
        background: #1E293B; 
        border-radius: 9px;
        margin: 0 auto;
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
        font-weight: bolder;
        color: white;
        scale: 120%
    }

    button.button:active
    {
        scale: 90%;
        background: #475569; 
        border-radius: 9px;
        transition-duration: 30ms;
    }

    button.button:hover
    {
        transition-duration: 30ms;
        background: #475569; 
    }

    button.buttonDelete
    {
        width: 146px; 
        height: 31px; 
        background: #1E293B; 
        border: 2px solid #ef4444; 
        border-radius: 9px;
        margin: 0 auto;
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
        font-weight: bolder;
        scale: 120%;
        color: #dc2626;
    }

    button.buttonDelete:active
    {
        scale: 90%;
        background: #dc2626; 
        border-radius: 9px;
        transition-duration: 30ms;
        color: white;
    }
    button.buttonDelete:hover
    {
        transition-duration: 30ms;
        background: #dc2626; 
        color: white;
    }

    hr.line
    {
        border-radius: 10px;
        border: 5px solid #1E293B;
    }
</style>

