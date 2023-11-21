// server/api/fachverf/index.js
import { query } from '../../db.js';

export default defineEventHandler(async () => {
  try {
    const result = await query('SELECT * FROM fachverfahren');
    return result.rows;
  } catch (err) {
    console.error('Error fetching Fachverfahren:', err.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});
