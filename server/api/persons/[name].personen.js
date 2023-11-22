// server/api/persons/[name]personen.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const name = event.context.params.name;

  let searchQuery = `
    SELECT vorname, name, telefonnummer, dez 
    FROM person
    WHERE name LIKE $1`;
  
  const result = await query(searchQuery, [`%${name}%`]);

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: 'No matching names found' });
  }

  return { persons: result.rows };
});
