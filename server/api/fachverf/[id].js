// server/api/fachverf/[id].js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const verfId = event.context.params.id;
  try {
    const result = await query('SELECT * FROM fachverfahren WHERE verf_id = $1', [verfId]);
    if (result.rowCount === 0) {
      throw createError({ statusCode: 404, statusMessage: 'Fachverfahren not found' });
    }
    return result.rows[0];
  } catch (err) {
    console.error('Error fetching Fachverfahren details:', err.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});
