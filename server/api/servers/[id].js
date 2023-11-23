// server/api/servers/[id].js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const serverId = event.context.params.id;
  const result = await query(`
  SELECT server.*, fachverfahren.name AS fachverfahren_name FROM public.server
  LEFT JOIN public.fachverfahren ON server.fachverfahren = fachverfahren.verf_id
  WHERE server.server_id = 1`,

  // SELECT s.*, f.name as fachverfahren_name
  // FROM public.server s
  // LEFT JOIN public.fachverfahren f ON s.fachverfahren = f.verf_id
  // WHERE s.server_id = 1;

    [serverId]);

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Server not found' });
  }

  return { server: result.rows[0] };
});
