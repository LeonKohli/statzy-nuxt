// server/api/persons/[name].js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const name = event.context.params.name;

  if (!name || name.length < 2) {
    throw createError({ statusCode: 400, statusMessage: 'Eingabe ist zu kurz' });
  }

  let searchQuery = `
    SELECT name, vornam, dez, telefonnummer 
    FROM person
    WHERE name LIKE $1 OR vornam LIKE $1`;
  
  const result = await query(searchQuery, [`%${name}%`]);

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: 'keine Übereinstimmungen gefunden' });
  }

  return { persons: result.rows };
});
