import { query } from '../../db.js';
import { createError } from 'h3';

export default defineEventHandler(async (event) => {
  const verfId = event.context.params.id;
  console.log('verfId:', verfId);
  if (!verfId) {
    throw createError({ statusCode: 400, statusMessage: 'Fachverfahren ID is required' });
  }

  try {
    const { rows } = await query('SELECT * FROM datenbank WHERE fachverfahren = $1', [verfId]);
    return rows;
  } catch (err) {
    console.error('Error fetching databases for Fachverfahren:', err.message);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});