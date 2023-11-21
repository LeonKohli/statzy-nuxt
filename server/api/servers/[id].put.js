// server/api/servers/[id].put.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const serverId = event.context.params.id;
  const serverData = await readBody(event);

  let setClauses = [];
  let params = [];
  let paramIndex = 1;

  for (const [key, value] of Object.entries(serverData)) {
    if (value !== undefined) {
      setClauses.push(`${key} = $${paramIndex}`);
      params.push(value);
      paramIndex++;
    }
  }

  params.push(serverId);

  if (setClauses.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No valid fields provided for update' });
  }

  const result = await query(
    `UPDATE public.server SET ${setClauses.join(', ')} WHERE server_id = $${paramIndex}`,
    params
  );

  return { updated: result.rowCount > 0 };
});
