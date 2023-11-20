// server/api/persons/index.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const { rows } = await query('SELECT * FROM person');
  return rows;
});
