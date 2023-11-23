<template>
    <div> 
        <h1 class="fachverfahrenh1"> Fachverfahren </h1>
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
            <button class="button" @click="openPopupError"> Suchen </button>
            <button class="button" @click="openPopupServer('Server')"> Server </button>
            <button class="button" @click="openPopupDB('DB')"> DB </button>
            <div v-if="Error" class="popupVerfahren">
                <button class="close-button-verfahren" @click="Error = false"> Close </button>
                <button class="create-button" @click="Error = false"> Erstellen </button>
                <div class="cardVerfahren">
                    <div class="bgVerfahren"></div>
                    <div class="blob"></div>
                    <p class="popup-überschrift"> Kein Fachverfahren gefunden </p>
                    <p class="popup-text"> Überprüfen sie ihre Suche <br> oder <br> Erstellen sie ein neues Fachverfahren </p>
                </div>
            </div>
        </div>
        <hr class="line">
        <br>
        <div class="personen"> 
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
            <table class="personen-button">
                <tr>
                    <td class="tabledata"> <button class="button-person"> Bearbeiten </button> </td>
                    <td class="tabledata"> <button class="button-person"> Erstellen </button> </td>
                </tr>
            </table>
        </div>
        <br>
        <hr class="line">
        <br>
        <div v-if="Server" class="popupVerfahrenServer">
            <button class="close-button-verfahren-server" @click="Server = false"> Close </button>
            <div class="cardVerfahrenServer">
                <div class="bgVerfahrenServer"></div>
                <div class="blob"></div>
            </div>
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
        </div>
        <br>
        <div v-if="DB" class="popupVerfahrenDB">
            <button class="close-button-verfahren-db" @click="DB = false"> Close </button>
            <div class="cardVerfahrenDB">
                <div class="bgVerfahrenDB"></div>
                <div class="blob"></div>
            </div>
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
        </div>
        <br>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return {
            serverDetails: [{
                serverId: '',
                fachverfahrenId: '',
                name: '',
                umgebung: '',
                laufzeitServer: '',
                bereitstellungszeitpunkt: '',
                verwendungszweck: '',
                typ: '',
                netzwerk: '',
                ram: '',
                cpu: '',
                os: '',
                speichertyp: '',
                kapazität: '',
                erreichbarkeit: '',
                hochverfügbarkeit: '',
                vertraulichkeit: '',
                verfügbarkeit: '',
                integrität: '',
                anmerkungen: '',
                zeitpunktIns: '',
                userIns: '',
                zeitpunktUpd: '',
                userUpd: '',
                fachverfahrenName: '',
            },],
            fachverfahrenId: '',
            verfahrensName: '',
            verfahrensTag: '',
            verfahrensZweck: '',
            verfahrensLaufzeit: '',
            Error: false,
            Server: false,
            DB: false,
            // ... Weitere Datenfelder nach Bedarf
        };
    },
    methods: {
        async getServerDetails(serverId) {
            try {
                const response = await fetch(`/api/servers/${serverId}`);
                const responseData = await response.json();

                // Annahme: In der Antwort gibt es eine Eigenschaft 'servers' als Array von Servern
                if (responseData.servers && responseData.servers.length > 0) {
                // Fülle das serverDetails-Array mit den Serverdaten
                this.serverDetails = responseData.servers.map(server => ({
                    serverId: server.serverId,
                    fachverfahrenId: server.fachverfahrenId,
                    name: server.name,
                    umgebung: server.umgebung,
                    laufzeitServer: server.laufzeitServer,
                    bereitstellungszeitpunkt: server.bereitstellungszeitpunkt,
                    verwendungszweck: server.verwendungszweck,
                    typ: server.typ,
                    netzwerk: server.netzwerk,
                    ram: server.ram,
                    cpu: server.cpu,
                    os: server.os,
                    speichertyp: server.speichertyp,
                    kapazität: server.kapazität,
                    erreichbarkeit: server.erreichbarkeit,
                    hochverfügbarkeit: server.hochverfügbarkeit,
                    vertraulichkeit: server.vertraulichkeit,
                    verfügbarkeit: server.verfügbarkeit,
                    integrität: server.integrität,
                    anmerkungen: server.anmerkungen,
                    zeitpunktIns: server.zeitpunktIns,
                    userIns: server.userIns,
                    zeitpunktUpd: server.zeitpunktUpd,
                    userUpd: server.userUpd,
                    fachverfahrenName: server.fachverfahrenName,
                }));

                console.log(`Details für Server mit ID ${serverId}:`, this.serverDetails);
                } else {
                console.warn(`Keine Daten für Server mit ID ${serverId} gefunden.`);
                // Setze serverDetails auf ein leeres Array oder handle es entsprechend
                this.serverDetails = [];
                }
            } catch (error) {
                console.error(`Fehler beim Abrufen der Details für Server mit ID ${serverId}:`, error);
                // Setze serverDetails auf ein leeres Array oder handle es entsprechend
                this.serverDetails = [];
            }
        },

        async sucheFachverfahren() {
            try {
            // Führe die API-Anfrage durch, um Fachverfahrensdaten für die angegebene ID abzurufen
            const fachverfahrenData = await fetchFachverfahrenById(this.fachverfahrenId);

            // Überprüfe, ob Daten zurückgegeben wurden
            if (fachverfahrenData) {
                // Setze die anderen Eingabefelder mit den abgerufenen Daten
                this.verfahrensName = fachverfahrenData.verfahrensName;
                this.verfahrensTag = fachverfahrenData.verfahrensTag;
                this.verfahrensZweck = fachverfahrenData.verfahrensZweck;
                this.verfahrensLaufzeit = fachverfahrenData.verfahrensLaufzeit;
                // ... Setze weitere Felder nach Bedarf

                // Zeige eine Erfolgsmeldung im Terminal an
                console.log('Fachverfahren erfolgreich gefunden:', fachverfahrenData);
            } else {
                // Handle den Fall, dass keine Daten gefunden wurden
                console.warn('Fachverfahren nicht gefunden.');

                // Setze die anderen Felder auf leere Werte oder handle es entsprechend
                this.verfahrensName = '';
                this.verfahrensTag = '';
                this.verfahrensZweck = '';
                this.verfahrensLaufzeit = '';
                // ... Setze weitere Felder nach Bedarf

                // Zeige das Popup für den Fehler an
                this.showPopup = true;
                }
            } catch (error) {
                console.error('Fehler bei der Suche nach Fachverfahren:', error);
                // Handle den Fehler angemessen, zum Beispiel zeige eine Fehlermeldung an
                // Zeige das Popup für den Fehler an
                this.showPopup = true;
            } finally {
                // Schließe das Popup, unabhängig davon, ob die Suche erfolgreich war oder nicht
                this.showPopup = false;
            }
        },

        // ... Weitere Methoden nach Bedarf
        openPopupError() {
            this.Error = true;
        },
        openPopupServer() {
            this.Server = true;
        },
        openPopupDB() {
            this.DB = true;
        },
    },
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

    table.personen-button
    {
        text-align: center;
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto;
        color: white;
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
        margin-top: 25px;
        margin-bottom: 25px;
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

    button.button-person
    {
        width: 146px; 
        height: 31px; 
        background: #1E293B; 
        border-radius: 9px;
        margin: 0 auto;
        display: block;
        margin-top: 25px;
        margin-bottom: 25px;
        font-weight: bolder;
        color: white;
        scale: 120%;
        margin-right: 20px;
        margin-left: 20px
    }
    button.button-person:active
    {
        scale: 90%;
        background: #475569; 
        border-radius: 9px;
        transition-duration: 30ms;
    }
    button.button-person:hover
    {
        transition-duration: 30ms;
        background: #475569; 
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

    .popupVerfahren {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 50%;
            
        border-radius: 8px; /* Optional: for rounded corners */
        padding: 20px; /* Optional: for some spacing inside the popup */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: for a subtle shadow */
    }
    .popupVerfahren::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100vw;
        height: 110vh;
        backdrop-filter: blur(10px); /* Apply backdrop-filter for blurring */
        background-color: rgba(15, 23, 42, 0.5); /* Semi-transparent background */
    }

    .cardVerfahren {
        position: relative;
        width: 250px;
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

    .bgVerfahren {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 240px;
        height: 240px;
        z-index: 2;
        background: rgba(51, 65, 85, 0.95);
        backdrop-filter: blur(24px);
        border-radius: 10px;
        overflow: hidden;
        outline: 2px solid #475569;
    }

    .popupVerfahrenServer {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 70%;
        border-radius: 8px; /* Optional: for rounded corners */
        padding: 20px; /* Optional: for some spacing inside the popup */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: for a subtle shadow */
    }
    .popupVerfahrenServer::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100vw;
        height: 110vh;
        backdrop-filter: blur(10px); /* Apply backdrop-filter for blurring */
        background-color: rgba(15, 23, 42, 0.5); /* Semi-transparent background */
    }

    .cardVerfahrenServer {
        position: relative;
        width: 250px;
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

    .bgVerfahrenServer {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 240px;
        height: 240px;
        z-index: 2;
        background: rgba(51, 65, 85, 0.95);
        backdrop-filter: blur(24px);
        border-radius: 10px;
        overflow: hidden;
        outline: 2px solid #475569;
    }

    .popupVerfahrenDB {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        top: 70%;
        border-radius: 8px; /* Optional: for rounded corners */
        padding: 20px; /* Optional: for some spacing inside the popup */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: for a subtle shadow */
    }
    .popupVerfahrenDB::before{
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        display: block;
        width: 100vw;
        height: 110vh;
        backdrop-filter: blur(10px); /* Apply backdrop-filter for blurring */
        background-color: rgba(15, 23, 42, 0.5); /* Semi-transparent background */
    }

    .cardVerfahrenDB {
        position: relative;
        width: 250px;
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

    .bgVerfahrenDB {
        position: absolute;
        top: 5px;
        left: 5px;
        width: 240px;
        height: 240px;
        z-index: 2;
        background: rgba(51, 65, 85, 0.95);
        backdrop-filter: blur(24px);
        border-radius: 10px;
        overflow: hidden;
        outline: 2px solid #475569;
    }

    .create-button {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 30%;
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
    .create-button:hover { 
        background-color: #1d4ed8;
        color: #fff;
        transition-duration: 100ms;
    }
    .create-button:active { 
        scale: 90%;
        transition-duration: 25ms;
    }

    .close-button-verfahren {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 75%;
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
    .close-button-verfahren:hover { 
        background-color: #dc2626;
        color: #fff;
        transition-duration: 100ms;
    }
    .close-button-verfahren:active { 
        scale: 90%;
        transition-duration: 25ms;
    }

    .close-button-verfahren-server {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 75%;
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
    .close-button-verfahren-server:hover { 
        background-color: #dc2626;
        color: #fff;
        transition-duration: 100ms;
    }
    .close-button-verfahren-server:active { 
        scale: 90%;
        transition-duration: 25ms;
    }

    .close-button-verfahren-db {
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 75%;
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
    .close-button-verfahren-db:hover { 
        background-color: #dc2626;
        color: #fff;
        transition-duration: 100ms;
    }
    .close-button-verfahren-db:active { 
        scale: 90%;
        transition-duration: 25ms;
    }

</style>

