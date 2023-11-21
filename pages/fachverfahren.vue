<template>
    <div> 
        <h1> Fachverfahren </h1>
        <div>
            <div id="suchmaske">
                <h2> Verfahrens-Daten </h2>
                <table id="verfahren">
                    <tr>
                        <td> <input placeholder="Verfahrens-ID"/> </td>
                        <td> <input placeholder="Verfahrens-Name"/> </td>
                        <td> <input placeholder="Tag"/> </td>
                        <td> <input placeholder="Zweck"/> </td>
                        <td> <input placeholder="Laufzeit"/> </td>
                    </tr>
                </table>
                <br>
                <h2> Personen-Daten </h2>
                <table id="personen">
                    <tr>
                        <th>  </th>
                        <th> Name </th>
                        <th> Vorname </th>
                        <th> Dezernat </th>
                        <th> Telefon </th>
                    </tr> 
                    <tr>
                        <th> Kundenmanagament: </th>
                        <td> <input placeholder="Muster Name"/> </td>
                        <td> "Muster Vorname" </td>
                        <td> "Muster Dezernat" </td>
                        <td> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th> Fachadministration: </th>
                        <td> <input placeholder="Muster Name"/> </td>
                        <td> "Muster Vorname" </td>
                        <td> "Muster Dezernat" </td>
                        <td> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th> Auftraggeber: </th>
                        <td> <input placeholder="Muster Name"/> </td>
                        <td> "Muster Vorname" </td>
                        <td> "Muster Dezernat" </td>
                        <td> "Muster Telefon" </td>
                    </tr>
                    <tr>
                        <th> Verfahrensbetreuer: </th>
                        <td> <input placeholder="Muster Name"/> </td>
                        <td> "Muster Vorname" </td>
                        <td> "Muster Dezernat" </td>
                        <td> "Muster Telefon" </td>
                    </tr>
                </table>
                <br>
                <table id="systeme"> 
                    <tr> 
                        <td> Anzahl zugeordneter Systeme: "Anzahl" </td>
                        <td> <input type="number" placeholder="Zahl"/> </td>
                    </tr>
                </table>
                <button> Suchen </button>
            </div>
            <br>
            <hr>
            <br>
            <div id="message">
                <span> Message "Successfull | ERROR"</span>
                <br>
                <button> Erstellen </button>
            </div>
        </div>
    </div>

</template>

<script>
    const button = document.getElementsByTagName("button");

    button.forEach(element => {
        element.onClick = function() {
            
        }
    });
</script>

<style>
    table
    {
        text-align: center;
        border-radius: 10px;
        background-color: #1e293b;
        margin-left: auto;
        margin-right: auto;
    }

    td, th
    {
        padding: 15px;
    }

    tr > th:nth-child(n+2):nth-child(-n+5)
    {
        font-size: 500;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #475569;
    }

    tr:nth-child(n+2):nth-child(-n+5) > th:first-child
    {
        border-right: 1px solid #475569;
    }

    input
    {
        text-align: center;
    }

    h1
    {
        font-size: xx-large;
        font-weight: 700;
        text-align: center;
    }

    h2
    {
        font-size: x-large;
        text-align: center;
        margin: 15px;
    }

    div#suchmaske
    {
        align-items: center;
    }

    button
    {
        width: 146px; 
        height: 31px; 
        background: #1E293B; 
        border-radius: 9px;
    }

    button:active
    {
        scale: 80%;
        background: #475569; 
        border-radius: 9px
    }
</style>

