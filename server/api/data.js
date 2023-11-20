import { defineEventHandler, createError } from 'h3';
import { query } from '../db.js'; // Make sure this path is correct

export default defineEventHandler(async (event) => {
  try {
    const result = await query('SELECT * FROM person');
    return result.rows;
  } catch (err) {
    console.error('Database query failed:', err.message);
  
    console.error(err.stack);
    throw createError({ statusCode: 500, statusMessage: 'Internal Server Error' });
  }
});