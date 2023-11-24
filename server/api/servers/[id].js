// server/api/servers/[id].js
import { query } from '../../db.js';

console.log('fachverfahren.js');
export default defineEventHandler(async (event) => {
  console.log('Test1');
  const id = event.context.params.id;
  const searchQuery = `
    SELECT server.*, fachverfahren.name AS fachverfahren_name
    FROM public.server
    LEFT JOIN public.fachverfahren ON server.fachverfahren = fachverfahren.verf_id
    WHERE server.fachverfahren = $1
  `;
  // test with: http://localhost:3000/api/servers/4711 
  console.log('Test2');
  const result = await query(searchQuery, [id]);

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Server not found' });
  }
  
  return { server: result.rows[0] };
});
// SELECT s.*, f.name as fachverfahren_name
// FROM public.server s
// LEFT JOIN public.fachverfahren f ON s.fachverfahren = f.verf_id
// WHERE s.server_id = 1;
