<template>
    <div>
        <h1> API Endpoints </h1>

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
        associatedPersons: ''
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
      }
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
        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/servers/auswahl_data`);
        const data = await response.json();
        this.dropdownData = data;
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    },
    async createServer() {
      try {
        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/servers/create.post`, {
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
        const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
        const response = await fetch(`${baseUrl}/api/servers`);
        const responseData = await response.json();
        this.servers = responseData;
      } catch (error) {
        console.error('Error fetching servers:', error);
      }
    }
  }
};
</script>


