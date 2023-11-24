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
                    <td class="tabledata"> <input class="eingabe" v-model="fachverfahrenId" @keyup.enter="sucheFachverfahren" placeholder="Verfahrens-ID"/> </td>
                    <td class="tabledata"> <input class="eingabe" v-model="name" placeholder="Verfahrens-Name"/> </td>
                    <td class="tabledata"> <input class="eingabe" v-model="tag" placeholder="Tag"/> </td>
                    <td class="tabledata"> <input class="eingabe" v-model="verwendungszweck" placeholder="Zweck"/> </td>
                    <td class="tabledata"> <input class="eingabe" v-model="laufzeitverfahren" placeholder="Laufzeit"/> </td>
                </tr>
            </table>
            <button class="button" @click="sucheFachverfahren"> Suchen </button>
            <div v-if="Error" class="popupVerfahren">
                <button class="close-button-verfahren" @click="Error = false"> Schließen </button>
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
            <h2 class="fachverfahrenh2-personen"> Personen-Daten </h2>
            <table class="personen">
                <tr>
                    <th class="tableheadtop">  </th>
                    <th class="tableheadtop"> Name </th>
                    <th class="tableheadtop"> Vorname </th>
                    <th class="tableheadtop"> Dezernat </th>
                    <th class="tableheadtop"> Telefon </th>
                </tr> 
                <tr>
                    <th class="tableheadside"> Kundenmanagement: </th>
                    <td class="tabledata"><input class="eingabe" v-model="kundenmanagement.name" placeholder="Name"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="kundenmanagement.vorname" placeholder="Vorname"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="kundenmanagement.dezernat" placeholder="Dezernat"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="kundenmanagement.telefon" placeholder="Telefon"/></td>
                </tr>
                <tr>
                    <th class="tableheadside"> Fachadministration: </th>
                    <td class="tabledata"><input class="eingabe" v-model="fachadministration.name" placeholder="Name"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="fachadministration.vorname" placeholder="Vorname"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="fachadministration.dezernat" placeholder="Dezernat"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="fachadministration.telefon" placeholder="Telefon"/></td>
                </tr>
                <tr>
                    <th class="tableheadside"> Auftraggeber: </th>
                    <td class="tabledata"><input class="eingabe" v-model="auftraggeber.name" placeholder="Name"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="auftraggeber.vorname" placeholder="Vorname"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="auftraggeber.dezernat" placeholder="Dezernat"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="auftraggeber.telefon" placeholder="Telefon"/></td>
                </tr>
                <tr>
                    <th class="tableheadside"> Verfahrensbetreuer: </th>
                    <td class="tabledata"><input class="eingabe" v-model="verfahrensbetreuer.name" placeholder="Name"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="verfahrensbetreuer.vorname" placeholder="Vorname"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="verfahrensbetreuer.dezernat" placeholder="Dezernat"/></td>
                    <td class="tabledata"><input class="eingabe" v-model="verfahrensbetreuer.telefon" placeholder="Telefon"/></td>
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
            <button class="close-button-verfahren-server" @click="Server = false"> Schließen </button>
            <div class="cardVerfahrenServer">
                <div class="blob-server"></div>
            </div>
            <div class="server">
                <h2 class="fachverfahrenh2"> Server </h2>
                <table class="server">
                    <tr>
                        <th> Name </th>
                        <td class="tableSeperator"> 
                            <input class="eingabe" v-model="serverDetails.name" placeholder="Name" />
                        </td>
                        <th> Hochverfügbar </th>
                        <td> 
                            <input class="eingabeCheck" type="checkbox" v-model="serverDetails.hochverfügbar" />
                        </td>
                    </tr>
                    <tr>
                        <th> Umgebung </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.umgebung">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Verfügbarkeit </th>
                        <td> 
                            <input class="eingabe" v-model="serverDetails.verfügbarkeit" placeholder="Verfügbarkeit" />
                        </td>
                    </tr>
                    <tr>
                        <th> Netzwerk </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.netzwerk">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Vertraulichkeit </th>
                        <td> 
                            <input class="eingabe" v-model="serverDetails.vertraulichkeit" placeholder="Vertraulichkeit" />
                        </td>
                    </tr>
                    <tr>
                        <th> CPU </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.cpu">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Integrität </th>
                        <td> 
                            <input class="eingabe" v-model="serverDetails.integrität" placeholder="Integrität" />
                        </td>
                    </tr>
                    <tr>
                        <th> Arbeitsspeicher </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.arbeitsspeicher">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Verwendungszweck </th>
                        <td> 
                            <select class="eingabe" v-model="serverDetails.verwendungszweck">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th> Betriebssystem </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.betriebssystem">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Anmerkungen </th>
                        <td> 
                            <input class="eingabe" v-model="serverDetails.anmerkungen" placeholder="Anmerkungen" />
                        </td>
                    </tr>
                    <tr>
                        <th> HD-Typ </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.hdTyp">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                        <th> Bereitstellungszeitpunkt </th>
                        <td> 
                            <input class="eingabeDate" type="date" v-model="serverDetails.bereitstellungszeitpunkt" />
                        </td>
                    </tr>
                    <tr>
                        <th> HD-Kapazität </th>
                        <td class="tableSeperator"> 
                            <input class="eingabe" v-model="serverDetails.hdKapazität" placeholder="Kapazität" />
                        </td>
                        <th> vorraussichtl. Lieferzeit </th>
                        <td> 
                            <input class="eingabe" v-model="serverDetails.lieferzeit" placeholder="Lieferzeit" />
                        </td>
                    </tr>
                    <tr>
                        <th> Erreichbarkeit </th>
                        <td class="tableSeperator"> 
                            <select class="eingabe" v-model="serverDetails.erreichbarkeit">
                                <!-- Optionen hier -->
                            </select>
                        </td>
                    </tr>
                </table>
            </div>  
        </div>           
        <br>
        <div v-if="DB" class="popupVerfahrenDB">
            <button class="close-button-verfahren-db" @click="DB = false"> Schließen </button>
            <div class="cardVerfahrenDB">
                <div class="blob-db"></div>
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
                <button class="button-db"> Bearbeiten </button>
                <button class="buttonDelete-db"> Löschen </button>
                <span class="space"> </span>
            </div>
        </div>
        <br>
        <br>
        <div v-if="fachverfahrenDatabases.length > 0" class="db-details">
            <h2 class="fachverfahrenh2">Datenbank Details</h2>
            <table class="db">
            <!-- ... your table headers -->
                <button v-for="database in fachverfahrenDatabases" :key="database.id"
                class="list-button" @click="openPopupDB('DB')">
                {{ database.name }} 
                <!-- ... additional data fields -->
                </button>
            </table>
        </div>
        <br>
        <br>
    </div>
    <div v-if="fachverfahrenServer.length > 0" class="server-details">
        <h2 class="fachverfahrenh2">Server Details</h2>
        <table class="server">
            <!-- Für JACOB -->
            <button v-for="server in serverDetails" :key="server.serverId" @click="openPopupServer('Server')"
            class="list-button">
            {{ server.name }}
            </button>
        </table>
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
            name: '',
            tag: '',
            verwendungszweck: '',
            laufzeitverfahren: '',
            Error: false,
            Server: false,
            DB: false,
            
            kundenmanagement: {
                name: '',
                vorname: '',
                dezernat: '',
                telefon: ''
            },
            fachadministration: {
                name: '',
                vorname: '',
                dezernat: '',
                telefon: ''
            },
            auftraggeber: {
                name: '',
                vorname: '',
                dezernat: '',
                telefon: ''
            },
            verfahrensbetreuer: {
                name: '',
                vorname: '',
                dezernat: '',
                telefon: ''
            },
            fachverfahrenDatabases: [],
            fachverfahrenServer: [],
        };
    },
    // Weitere Methoden und Optionen
    methods: {
        async getServerDetails(fachverfahren) {
            try {
                
            } catch (error) {
                console.error(`Fehler beim Abrufen der Details für Server mit ID ${fachverfahren}:`, error);
                // Setze serverDetails auf ein leeres Array oder handle es entsprechend
                this.serverDetails = [];
            }
        },

        async sucheFachverfahren() {
            try {
                // Führe die API-Anfrage durch, um Datenbanken für die angegebene Fachverfahren ID abzurufen
                this.fetchDatabasesForFachverfahren();

                // Führe die API-Anfrage durch, um Fachverfahrensdaten für die angegebene ID abzurufen
                const fachverfahrenData = await fetchFachverfahrenById(this.fachverfahrenId);

                // Überprüfe, ob Daten zurückgegeben wurden
                if (fachverfahrenData) {
                    // Setze die Eingabefelder mit den abgerufenen Daten
                    this.name = fachverfahrenData.name;
                    this.tag = fachverfahrenData.tag;
                    this.verwendungszweck = fachverfahrenData.vewendungszweck;
                    this.laufzeitverfahren = fachverfahrenData.laufzeitverfahren;
                    // ... Setze weitere Felder nach Bedarf

                    // Rufe zusätzliche Personendaten mit der verfahrensId ab
                    const personenData = await fetchPersonVerf(this.fachverfahrenId);
                    if (personenData && personenData.fachverfahren.length > 0) {
                        const person = personenData.fachverfahren[0]; // Da es ein Array ist, nehmen wir das erste Element

                        // Zuweisen der Daten zu den entsprechenden Objekten in Ihrer Komponente
                        this.kundenmanagement.name = person.kundenmanagement_name;
                        this.kundenmanagement.vorname = person.kundenmanagement_vornam;
                        this.kundenmanagement.dezernat = person.kundenmanagement_dez;
                        this.kundenmanagement.telefon = person.kundenmanagement_telefon;

                        this.fachadministration.name = person.fachadministration_name;
                        this.fachadministration.vorname = person.fachadministration_vornam;
                        this.fachadministration.dezernat = person.fachadministration_dez;
                        this.fachadministration.telefon = person.fachadministration_telefon;

                        this.auftraggeber.name = person.auftraggeber_name;
                        this.auftraggeber.vorname = person.auftraggeber_vornam;
                        this.auftraggeber.dezernat = person.auftraggeber_dez;
                        this.auftraggeber.telefon = person.auftraggeber_telefon;

                        this.verfahrensbetreuer.name = person.verf_betreuung_name;
                        this.verfahrensbetreuer.vorname = person.verf_betreuung_vornam;
                        this.verfahrensbetreuer.dezernat = person.verf_betreuung_dez;
                        this.verfahrensbetreuer.telefon = person.verf_betreuung_telefon;

                        console.log('Personendaten erfolgreich zugeordnet:', this.kundenmanagement, this.fachadministration, this.auftraggeber, this.verfahrensbetreuer);
                    } else {
                        console.warn('Keine Personendaten gefunden.');
                    }
                    // Janneck nistet sich hier ein
                    const response = await fetch(`/api/servers/${this.fachverfahrenId}`);
                    const serverData = await response.json();
                    console.log('Antwort der Server API:', serverData);
                    // Annahme: In der Antwort gibt es eine Eigenschaft 'servers' als Array von Servern
                    if (serverData.server && serverData.server.length > 0) {
                        // Fülle das serverDetails-Array mit den Serverdaten
                        this.serverDetails = serverData.server.map(server => ({
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

                        console.log(`Details für Server mit FachverfahrensID ${this.fachverfahrenId}:`, this.serverDetails);
                    } else {
                        console.warn(`Keine Daten für Server mit FachverfahrensID ${this.fachverfahrenId} gefunden.`);
                        // Setze serverDetails auf ein leeres Array oder handle es entsprechend
                        this.serverDetails = [];
                    }
                    // Janneck nistet sich hier aus
                    console.log('Fachverfahren erfolgreich gefunden:', fachverfahrenData);
                } else {
                    console.warn('Fachverfahren nicht gefunden.');
                    this.resetFachverfahrenData();
                    this.openPopupError();
                }
            } catch (error) {
                console.error('Fehler bei der Suche nach Fachverfahren:', error);
                // Handle den Fehler angemessen, zum Beispiel zeige eine Fehlermeldung an
                // Zeige das Popup für den Fehler an
                this.openPopupError();
            }
        },

        resetFachverfahrenData() {
            // Setze alle Datenfelder zurück
            this.verfahrensName = '';
            this.verfahrensTag = '';
            this.verfahrensZweck = '';
            this.verfahrensLaufzeit = '';
            // ... Setze weitere Felder nach Bedarf

            // Setze Personendaten zurück
            const emptyPersonData = { name: '', vorname: '', dezernat: '', telefon: '' };
            this.kundenmanagement = { ...emptyPersonData };
            this.fachadministration = { ...emptyPersonData };
            this.auftraggeber = { ...emptyPersonData };
            this.verfahrensbetreuer = { ...emptyPersonData };
        },

        openPopupError() {
            this.Error = true;
        },
        openPopupServer() {
            this.Server = true;
        },
        openPopupDB() {
            this.DB = true;
        },
        async fetchDatabasesForFachverfahren() {
        if (!this.fachverfahrenId) {
            alert('Please enter a Fachverfahren ID.');
            return;
        }
        
        try {
            const response = await fetch(`/api/databases/${encodeURIComponent(this.fachverfahrenId)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.fachverfahrenDatabases = await response.json();
        } catch (error) {
            console.error('Error fetching databases for Fachverfahren:', error.message);
            this.fachverfahrenDatabases = []; // Reset in case of error
            this.Error = true;
        }

        try {
            const response = await fetch(`/api/databases/${encodeURIComponent(this.fachverfahrenId)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.fachverfahrenServer = await response.json();
        } catch (error) {
            console.error('Error fetching databases for Fachverfahren:', error.message);
            this.fachverfahrenServer = []; // Reset in case of error
            this.Error = true;
        }
    },
    },
}
</script>



<style>
body {
    background-color: lime; /* Bright background */
    font-family: 'Comic Sans MS', 'Comic Sans', cursive; /* Funny font */
}

table, th, td {
    border: 5px dashed red; /* Inconsistent border */
    background-color: fuchsia; /* Clashing background */
    color: aqua; /* Hard to read text color */
}

h1, h2 {
    font-size: 48px; /* Inconsistent size */
    color: yellow; /* Clashing color */
    text-shadow: 0 0 10px purple; /* Hard on eyes */
}

button {
    font-family: Papyrus, fantasy; /* Inconsistent font */
    background-color: #ff00ff; /* Neon color */
    animation: spin 2s linear infinite; /* Unnecessary animation */
}

@keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

img {
    width: 20px; /* Randomly small */
    height: 400px; /* Disproportionate height */
}

a {
    color: orange; /* Hard to read */
    text-decoration: blink; /* Annoying effect */
}

/* Add a loud, auto-playing background MIDI */
body::before {
    content: url('path_to_midi_file.mid');
}

</style>

