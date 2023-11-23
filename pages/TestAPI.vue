<template>
    <div>
        <h1>Test API Endpoints</h1>

        <!-- Create Server Form -->

        <div>
            <h2>Create Server</h2>

            <form @submit.prevent="createServer">
                <input v-model="newServerData.fachverfahren" placeholder="Fachverfahren" />

                <input v-model="newServerData.name" placeholder="Name" />

                <!-- Dropdown for 'Umgebung' -->

                <select v-model="newServerData.umgebung">
                    <option v-for="option in dropdownData.auswahl_umgebung" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <input v-model="newServerData.laufzeit_server" placeholder="Laufzeit Server" />
                <input v-model="newServerData.bereitstellungszeitpunkt" placeholder="Bereitstellungszeitpunkt" />
                <input v-model="newServerData.verwendungszweck" placeholder="Verwendungszweck" />

                <!-- Dropdown for 'Typ' -->

                <select v-model="newServerData.typ">
                    <option v-for="option in dropdownData.auswahl_typ" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <!-- Dropdown for 'Netzwerk' -->

                <select v-model="newServerData.netzwerk">
                    <option v-for="option in dropdownData.auswahl_nic" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <!-- Dropdown for 'RAM' -->

                <select v-model="newServerData.ram">
                    <option v-for="option in dropdownData.auswahl_ram" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <!-- Dropdown for 'CPU' -->

                <select v-model="newServerData.cpu">
                    <option v-for="cpu in dropdownData.auswahl_cpu" :value="cpu" :key="cpu">
                        {{ cpu }}
                    </option>
                </select>

                <!-- Dropdown for 'OS' -->

                <select v-model="newServerData.os">
                    <option v-for="option in dropdownData.auswahl_os" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <!-- Dropdown for 'Speichertyp' -->

                <select v-model="newServerData.speichertyp">
                    <option v-for="option in dropdownData.auswahl_speicher" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <input v-model="newServerData.kapazität" placeholder="Kapazität" />

                <!-- Dropdown for 'Erreichbarkeit' -->

                <select v-model="newServerData.erreichbarkeit">
                    <option v-for="option in dropdownData.auswahl_erreichbarkeit" :value="option" :key="option">
                        {{ option }}
                    </option>
                </select>

                <input v-model="newServerData.hochverfügbarkeit" placeholder="Hochverfügbarkeit" />

                <input v-model="newServerData.vertraulichkeit" placeholder="Vertraulichkeit" />

                <input v-model="newServerData.verfügbarkeit" placeholder="Verfügbarkeit" />
                <input v-model="newServerData.integrität" placeholder="Integrität" />
                <input v-model="newServerData.anmerkungen" placeholder="Anmerkungen" />
                <input v-model="newServerData.user_ins" placeholder="User Ins" />
                <input v-model="newServerData.user_upd" placeholder="User Upd" />

                <input v-model="newServerData.associatedPersons" placeholder="Associated Persons" />

                <button type="submit">Create Server</button>
            </form>
        </div>

        <div>
            <h2>List Servers</h2>
            <button @click="listServers">Refresh List</button>
            <ul>
                <li v-for="server in servers" :key="server.server_id">
                    {{ server.name }} ({{ server.fachverfahren }})
                </li>
            </ul>
        </div>
        <div>
          <h2>Test Fachverfahren Databases</h2>

          <input v-model="fachverfahrenId" placeholder="Enter Fachverfahren ID" />
          <button @click="fetchDatabasesForFachverfahren">Get Databases</button>

          <div v-if="fachverfahrenDatabases.length > 0">
              <h3>Databases:</h3>
              <ul>
                  <li v-for="database in fachverfahrenDatabases" :key="database.name">
                      {{ database.name }} - {{ database.typ }}
                  </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      newServerData: {
        fachverfahren: '',
        name: '',
        umgebung: '',
        laufzeit_server: '',
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
        user_ins: '',
        user_upd: '',
        associatedPersons: '',
      },
      servers: [],
      dropdownData: {
        umgebung: [],
        typ: [],
        netzwerk: [],
        ram: [],
        cpu: [],
        os: [],
        speichertyp: [],
        erreichbarkeit: [],
      },
      fachverfahrenId: '', // To store the input Fachverfahren ID
fachverfahrenDatabases: [], // To store the databases associated with a Fachverfahren
    };
  },
  mounted() {
    if (process.client) {
      this.fetchDropdownData();
      this.listServers();
    }
  },
  methods: {
    async fetchDropdownData() {
      try {
        const response = await fetch(`/api/servers/auswahl_data`);
        const data = await response.json();
        this.dropdownData = data;
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    },
    async createServer() {
      try {
        const response = await fetch(`/api/servers/create.post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.newServerData)
        });
        const responseData = await response.json();
        console.log('Server Created:', responseData);
        this.listServers(); // Refresh the list after creation
      } catch (error) {
        console.error('Error creating server:', error);
      }
    },
    async listServers() {
      try {
        const response = await fetch(`/api/servers`);
        const responseData = await response.json();
        this.servers = responseData;
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    },
    async getPersonDetails(personName) {
      try {
        const response = await fetch(`/api/persons/${encodeURIComponent(personName)}`);
        const responseData = await response.json();
        
        // Assuming there's a property 'personDetails' in the response
        this.personDetails = responseData.personDetails;
        console.log(`Details for ${personName}:`, this.personDetails);
      } catch (error) {
        console.error(`Error fetching details for ${personName}:`, error);
      }
    },
    async fetchDatabasesForFachverfahren() {
  if (!this.fachverfahrenId) {
    alert('Please enter a Fachverfahren ID.');
    return;
  }

  // Use window.location.origin to get the base URL of your Nuxt app
  const baseUrl = window.location.origin;

  try {
    const response = await fetch(`${baseUrl}/api/databases/${encodeURIComponent(this.fachverfahrenId)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    this.fachverfahrenDatabases = await response.json();
  } catch (error) {
    console.error('Error fetching databases for Fachverfahren:', error.message);
    this.fachverfahrenDatabases = []; // Reset in case of error
  }
},
  }
};
</script>


