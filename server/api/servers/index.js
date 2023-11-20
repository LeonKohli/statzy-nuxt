// server/api/servers/index.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const { rows } = await query(`
    SELECT s.*, f.name as fachverfahren_name, 
           array_agg(p.name || ' (' || p.vornam || ')') as associated_persons
    FROM public.server s
    LEFT JOIN public.fachverfahren f ON s.fachverfahren = f.verf_id
    LEFT JOIN public.server_person sp ON s.server_id = sp.server_id
    LEFT JOIN public.person p ON sp.person_id = p.person_id
    GROUP BY s.server_id, f.name
  `);
  return rows;
});
