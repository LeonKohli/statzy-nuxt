// server/api/fachverf/[id].put.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const verfId = event.context.params.id;
  const newData = await useBody(event);

  try {
    let setClauses = [];
    let params = [];
    let paramIndex = 1;

    for (const [key, value] of Object.entries(newData)) {
      if (value !== undefined) {
        setClauses.push(`${key} = $${paramIndex}`);
        params.push(value);
        paramIndex++;
      }
    }

    params.push(verfId);

    if (setClauses.length === 0) {
      throw createError({ statusCode: 400, statusMessage: 'No valid fields provided for update' });
    }

    const result = await query(
      `UPDATE fachverfahren SET ${setClauses.join(', ')} WHERE verf_id = $${paramIndex}`,
      params
    );

    return { updated: result.rowCount > 0 };
  } catch (err) {
    console.error('Error updating Fachverfahren:', err.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});
