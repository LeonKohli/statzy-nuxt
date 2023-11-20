// server/api/auswahl_data.js
import { query } from '../../db.js';

export default defineEventHandler(async () => {
  const tables = [
    'auswahl_cpu',
    'auswahl_datenbank', //not used
    'auswahl_erreichbarkeit',
    'auswahl_nic',
    'auswahl_os',
    'auswahl_ram',
    'auswahl_server',
    'auswahl_speicher',
    'auswahl_typ',
    'auswahl_umgebung'
  ];

  const fetchDataForTable = async (tableName) => {
    const result = await query(`SELECT * FROM ${tableName}`);
    return result.rows.map(row => row[tableName.split('_')[1]]);
  };

  let data = {};

  for (const table of tables) {
    data[table] = await fetchDataForTable(table);
  }

  return data;
});
