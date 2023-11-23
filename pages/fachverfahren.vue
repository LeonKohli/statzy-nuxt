<template>
    <div> 
        <h1 class="fachverfahrenh1"> Fachverfahren </h1>
        <div>
            <div class="suchmaske">
                <h2 class="fachverfahrenh2"> Verfahrens-Daten </h2>
                <table class="verfahren">
                    <tr>
                        <th class="tablehead"> Verfahrens-ID </th>
                        <th class="tablehead"> Verfahrens-Name </th>
                        <th class="tablehead"> Verfahrens-Tag </th>
                        <th class="tablehead"> Verfahrens-Zweck </th>
                        <th class="tablehead"> Verfahrens-Laufzeit </th>
                    </tr>
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
                <button class="button" @click="showPopup = false"> Suchen </button>
            </div>
            <br>
            <hr class="line">
            <br>
            <div class="messageContainer">
                <span> Message "Successfull | ERROR" </span>
                <br>
                <br>
                <button class="button"> Erstellen </button>
            </div>
            <hr class="line">
            <div class="server">
                <h2 class="fachverfahrenh2"> Server </h2>
                <table class="server">
                    <tr>
                        <th> Name </th>
                        <td class=tableSeperator> <input class="eingabe" placeholder="Name" /> </td>
                        <th> Hochverfügbar </th>
                        <td > <input class="eingabeCheck" type="checkbox" /> </td>
                    </tr>
                    <tr>
                        <th> Umgebung </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Verfügbarkeit </th>
                        <td > <input class="eingabe" placeholder="Verfügbarkeit" /> </td>
                    </tr>
                    <tr>
                        <th> Netzwerk </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Vertraulichkeit </th>
                        <td > <input class="eingabe" placeholder="Vertraulichkeit" /> </td>
                    </tr>
                    <tr>
                        <th> CPU </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Integrität </th>
                        <td > <input class="eingabe" placeholder="Integrität" /> </td>
                    </tr>
                    <tr>
                        <th> Arbeitsspeicher </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Verwendungszweck </th>
                        <td > <select class="eingabe" /> </td>
                    </tr>
                    <tr>
                        <th> Betriebssystem </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Anmerkungen </th>
                        <td > <input class="eingabe" placeholder="Integrietät" /> </td>
                    </tr>
                    <tr>
                        <th> HD-Typ </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                        <th> Bereitstellungszeitpunkt </th>
                        <td > <input class="eingabeDate" type="date" /> </td>
                    </tr>
                    <tr>
                        <th> HD-Kapazität </th>
                        <td class=tableSeperator> <input class="eingabe" placeholder="Kapazität" /> </td>
                        <th> vorraussichtl. Lieferzeit </th>
                        <td > <input class="eingabe" placeholder="Lieferzeit" /> </td>
                    </tr>
                    <tr>
                        <th> Erreichbarkeit </th>
                        <td class=tableSeperator> <select class="eingabe" /> </td>
                    </tr>
                </table>
            </div>
            <br>
            <br>
            <div class="datenbanken">
                <h2 class="fachverfahrenh2"> Datenbanken </h2>
                <table class="db">
                    <tr>
                        <th> Name </th>
                        <td> <input class="eingabe" placeholder="Name" /> </td>
                    </tr>
                    <tr>
                        <th> Datenbank-Typ </th>
                        <td> <select class="eingabe" /> </td>
                    </tr>
                    <tr>
                        <th> Clusterlösung </th>
                        <td> <input class="eingabe" placeholder="Lösung" /> </td>
                    </tr>
                    <tr>
                        <th> Größe der Instanz </th>
                        <td> <input class="eingabe" placeholder="Größe" /> </td>
                    </tr>
                    <tr>
                        <th> Festplattengröße </th>
                        <td> <input class="eingabe" placeholder="Größe" /> </td>
                    </tr>
                </table>
                <button class="button"> Bearbeiten </button>
                <button class="buttonDelete"> Löschen </button>
            </div>
            <br>
            <br>
        </div>
        <div v-if="showPopup" class="popup">
        <button class="close-button" @click="showPopup = false">Close</button>
            <div class="card">
                <div class="bg"></div>
                <div class="blob"></div>
                <p class="popup-überschrift">Incorrect Login</p>
                <p class="popup-text">Please check password and username</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        showPopup: false,
        };
    },
    methods: {
        searchError() {
        this.showPopup = true;
        },
    },
};
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

    body {
        margin-top: 120px;
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

    th.tablehead 
    {
        padding-top: 15px;
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
        /* Schwarze Schriftfarbe für Eingabefelder */
    input.eingabe,
    input.eingabeCheck,
    input.eingabeDate,
    select.eingabe {
        color: black; /* Schriftfarbe auf Schwarz ändern */
    }



.popup {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
        
    border-radius: 8px; /* Optional: for rounded corners */
    padding: 20px; /* Optional: for some spacing inside the popup */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: for a subtle shadow */
}
.popup::before{
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(10px); /* Apply backdrop-filter for blurring */
    background-color: rgba(15, 23, 42, 0.5); /* Semi-transparent background */
}

.card {
    position: relative;
    width: 200px;
    height: 250px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #334155, -20px -20px 60px #334155;
}

.bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(51, 65, 85, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid #475569;
}

.blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
}
.popup-überschrift {
    color: rgb(255, 255, 255);
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
    background-color: rgb(255, 10, 10);
    border-radius: 5px;
    z-index: 10;
    font-size: 16px;
    margin-top: 10px;
    text-align: center; /* Added text-align center */
}

.popup-text {
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    z-index: 10;
    font-size: 16px;
    margin-top: 10px;
    text-align: center; /* Added text-align center */
}

@keyframes blob-bounce {
    0% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
        transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
        transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
        transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
}

.close-button {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background-color: #334155;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    z-index: 10000;
    outline: 2px solid #475569;
}
.close-button:hover { 
    background-color: #dc2626;
    color: #fff;
}
</style>

