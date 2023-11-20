// server/api/servers/create.post.js
import { query } from '../../db.js';

export default defineEventHandler(async (event) => {
  const {
    fachverfahren,
    name,
    umgebung,
    laufzeit_server,
    bereitstellungszeitpunkt,
    verwendungszweck,
    typ,
    netzwerk,
    ram,
    cpu,
    os,
    speichertyp,
    kapazität,
    erreichbarkeit,
    hochverfügbarkeit,
    vertraulichkeit,
    verfügbarkeit,
    integrität,
    anmerkungen,
    user_ins,
    user_upd,
    associatedPersons
  } = await useBody(event);

  await query('BEGIN');

  const insertServerResult = await query(
    `INSERT INTO public.server 
      (fachverfahren, name, umgebung, laufzeit_server, bereitstellungszeitpunkt, verwendungszweck, typ, netzwerk, ram, cpu, os, speichertyp, "kapazität", erreichbarkeit, "hochverfügbarkeit", vertraulichkeit, "verfügbarkeit", "integrität", anmerkungen, zeitpunkt_ins, user_ins, zeitpunkt_upd, user_upd)
     VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, CURRENT_TIMESTAMP, $20, CURRENT_TIMESTAMP, $21)
     RETURNING server_id`,
    [fachverfahren, name, umgebung, laufzeit_server, bereitstellungszeitpunkt, verwendungszweck, typ, netzwerk, ram, cpu, os, speichertyp, kapazität, erreichbarkeit, hochverfügbarkeit, vertraulichkeit, verfügbarkeit, integrität, anmerkungen, user_ins, user_upd]
  );

  const serverId = insertServerResult.rows[0].server_id;

  if (Array.isArray(associatedPersons)) {
    for (const personId of associatedPersons) {
      await query(
        'INSERT INTO public.server_person (server_id, person_id) VALUES ($1, $2)',
        [serverId, personId]
      );
    }
  }

  await query('COMMIT');

  return { id: serverId };
});
