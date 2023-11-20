<template>
    <div>
        <h1>Test API Endpoints</h1>
        
        <!-- Create Server Form -->
        <div>
            <h2>Create Server</h2>
            <form @submit.prevent="createServer">
                <input v-model="newServerData.fachverfahren" placeholder="Fachverfahren">
                <input v-model="newServerData.name" placeholder="Name">
                <input v-model="newServerData.umgebung" placeholder="Umgebung">
                <input v-model="newServerData.laufzeit_server" placeholder="Laufzeit Server">
                <input v-model="newServerData.bereitstellungszeitpunkt" placeholder="Bereitstellungszeitpunkt">
                <input v-model="newServerData.verwendungszweck" placeholder="Verwendungszweck">
                <input v-model="newServerData.typ" placeholder="Typ">
                <input v-model="newServerData.netzwerk" placeholder="Netzwerk">
                <input v-model="newServerData.ram" placeholder="RAM">
                <input v-model="newServerData.cpu" placeholder="CPU">
                <input v-model="newServerData.os" placeholder="OS">
                <input v-model="newServerData.speichertyp" placeholder="Speichertyp">
                <input v-model="newServerData.kapazität" placeholder="Kapazität">
                <input v-model="newServerData.erreichbarkeit" placeholder="Erreichbarkeit">
                <input v-model="newServerData.hochverfügbarkeit" placeholder="Hochverfügbarkeit">
                <input v-model="newServerData.vertraulichkeit" placeholder="Vertraulichkeit">
                <input v-model="newServerData.verfügbarkeit" placeholder="Verfügbarkeit">
                <input v-model="newServerData.integrität" placeholder="Integrität">
                <input v-model="newServerData.anmerkungen" placeholder="Anmerkungen">
                <input v-model="newServerData.user_ins" placeholder="User Ins">
                <input v-model="newServerData.user_upd" placeholder="User Upd">
                <input v-model="newServerData.associatedPersons" placeholder="Associated Persons">
                <button type="submit">Create Server</button>
            </form>
        </div>

        <!-- List Servers -->
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
            servers: []
        };
    },
    methods: {
        async createServer() {
            try {
                const response = await this.$fetch('/api/servers/create.post', {
                    method: 'POST',
                    body: this.newServerData
                });
                console.log('Server Created:', response);
                this.listServers(); // Refresh the list after creation
            } catch (error) {
                console.error('Error creating server:', error);
            }
        },
        async listServers() {
            try {
                const response = await this.$fetch('/api/servers');
                this.servers = response;
            } catch (error) {
                console.error('Error fetching servers:', error);
            }
        }
    }
};
</script>
  