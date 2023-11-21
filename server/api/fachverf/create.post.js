// server/api/fachverf/create.post.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const newData = await useBody(event);

  try {
    const result = await query(
      'INSERT INTO fachverfahren (name, verf_id, tag, vewendungszweck, laufzeitverfahren, auftraggeber, verf_betreuung, kundenmanagement, fachadministation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [newData.name, newData.verf_id, newData.tag, newData.vewendungszweck, newData.laufzeitverfahren, newData.auftraggeber, newData.verf_betreuung, newData.kundenmanagement, newData.fachadministation]
    );

    return { created: result.rows[0] };
  } catch (err) {
    console.error('Error creating Fachverfahren:', err.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});
