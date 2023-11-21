<template>
    <div> 
        <h1 class="fachverfahrenh1"> Fachverfahren </h1>
        <div>
            <div class="suchmaske">
                <h2 class="fachverfahrenh2"> Verfahrens-Daten </h2>
                <table class="verfahren">
                    <tr>
                        <td class="tabledata"> <input class="eingabe" placeholder="Verfahrens-ID"/> </td>
                        <td class="tabledata"> <input class="eingabe" placeholder="Verfahrens-Name"/> </td>
                        <td class="tabledata"> <input class="eingabe" placeholder="Tag"/> </td>
                        <td class="tabledata"> <input class="eingabe" placeholder="Zweck"/> </td>
                        <td class="tabledata"> <input class="eingabe" placeholder="Laufzeit"/> </td>
                    </tr>
                </table>
                <br>
                <h2 class="fachverfahrenh2"> Personen-Daten </h2>
                <table class="personen">
                    <tr>
                        <th class="tableheadtop">  </th>
                        <th class="tableheadtop"> Name </th>
                        <th class="tableheadtop"> Vorname </th>
                        <th class="tableheadtop"> Dezernat </th>
                        <th class="tableheadtop"> Telefon </th>
                    </tr> 
                    <tr>
                        <th class="tableheadside"> Kundenmanagament: </th>
                        <td class="tabledata"> <input class="eingabe" placeholder="Muster Name"/> </td>
                        <td class="tabledata"> "Muster Vorname" </td>
                        <td class="tabledata"> "Muster Dezernat" </td>
                        <td class="tabledata"> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th class="tableheadside"> Fachadministration: </th>
                        <td class="tabledata"> <input class="eingabe" placeholder="Muster Name"/> </td>
                        <td class="tabledata"> "Muster Vorname" </td>
                        <td class="tabledata"> "Muster Dezernat" </td>
                        <td class="tabledata"> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th class="tableheadside"> Auftraggeber: </th>
                        <td class="tabledata"> <input class="eingabe" placeholder="Muster Name"/> </td>
                        <td class="tabledata"> "Muster Vorname" </td>
                        <td class="tabledata"> "Muster Dezernat" </td>
                        <td class="tabledata"> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th class="tableheadside"> Verfahrensbetreuer: </th>
                        <td class="tabledata"> <input class="eingabe" placeholder="Muster Name"/> </td>
                        <td class="tabledata"> "Muster Vorname" </td>
                        <td class="tabledata"> "Muster Dezernat" </td>
                        <td class="tabledata"> "Muster Telefon" </td>
                    </tr>
                </table>
                <br>
                <table class="systeme"> 
                    <tr> 
                        <td class="tabledata"> Anzahl zugeordneter Systeme: "Anzahl" </td>
                        <td class="tabledata"> <input class="eingabe" type="number" placeholder="Zahl"/> </td>
                    </tr>
                </table>
                <button class="button"> Suchen </button>
            </div>
            <br>
            <hr class="line">
            <br>
            <div class="message">
                <span> Message "Successfull | ERROR"</span>
                <br>
                <button class="button"> Erstellen </button>
            </div>
        </div>
    </div>

</template>

<script>
    
</script>

<style>
    table.verfahren, table.personen, table.systeme
    {
        text-align: center;
        border-radius: 10px;
        background-color: #1e293b;
        margin-left: auto;
        margin-right: auto;
        color: white
    }

    td.tabledata
    {
        padding: 10px;
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

    div.message
    {
        text-align: center;
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
        scale: 80%;
        background: #475569; 
        border-radius: 9px;
        transition-duration: 30ms;
    }

    hr.line
    {
        border-radius: 10px;
        border: 5px solid #1E293B;
    }
</style>

