// server/api/persons/fachverf.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const { rows } = await query('SELECT name, verf_id, tag FROM fachverfahren WHERE verf_id IS NOT NULL ORDER BY name');
  return rows;
});
