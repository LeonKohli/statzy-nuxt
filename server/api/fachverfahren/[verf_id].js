// server/api/fachverfahren/[verf_id].js
import { query } from '../../db.js';
console.log('verf_id.js');
export default defineEventHandler(async (event) => {
  const verf_id = event.context.params.verf_id;
  console.log('Test1');
  if (!verf_id) {
    throw createError({ statusCode: 400, statusMessage: 'Keine Fachverfahren-ID angegeben' });
  }

  let searchQuery = `
    SELECT 
        f.verf_id,
        ag.name AS auftraggeber_name, ag.vornam AS auftraggeber_vornam, ag.telefonnummer AS auftraggeber_telefon, ag.dez AS auftraggeber_dez,
        vb.name AS verf_betreuung_name, vb.vornam AS verf_betreuung_vornam, vb.telefonnummer AS verf_betreuung_telefon, vb.dez AS verf_betreuung_dez,
        km.name AS kundenmanagement_name, km.vornam AS kundenmanagement_vornam, km.telefonnummer AS kundenmanagement_telefon, km.dez AS kundenmanagement_dez,
        fa.name AS fachadministration_name, fa.vornam AS fachadministration_vornam, fa.telefonnummer AS fachadministration_telefon, fa.dez AS fachadministration_dez
    FROM 
        public.fachverfahren f
    LEFT JOIN person ag ON f.auftraggeber = ag.person_id
    LEFT JOIN person vb ON f.verf_betreuung = vb.person_id
    LEFT JOIN person km ON f.kundenmanagement = km.person_id
    LEFT JOIN person fa ON f.fachadministation = fa.person_id
    WHERE 
        f.verf_id = $1`;
  console.log('Test2');
  const result = await query(searchQuery, [verf_id]);

  if (result.rowCount === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Keine Übereinstimmungen gefunden' });
  }

  return { fachverfahren: result.rows };
});
