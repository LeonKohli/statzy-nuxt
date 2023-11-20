// server/api/servers/[id].delete.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const serverId = event.context.params.id;
  const result = await query('DELETE FROM public.server WHERE server_id = $1', [serverId]);

  return { deleted: result.rowCount > 0 };
});
