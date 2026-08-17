// candidature.js — logica di dominio condivisa del flusso "Lavora con noi".
// Framework-agnostic e senza side-effect: importabile sia dal form client
// (components/CandidaturaForm) sia dal Route Handler server (app/api/candidature),
// così validazione e vincoli hanno un'unica fonte di verità.

export const SPONTANEOUS = 'spontaneous';

export const CV_MAX_BYTES = 5 * 1024 * 1024; // 5MB
export const CV_ACCEPT =
  '.pdf,.doc,.docx,application/pdf,application/msword,' +
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
export const CV_EXT_RE = /\.(pdf|doc|docx)$/i;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Codici di errore restituiti dal validatore. Client e server li mappano ai
// rispettivi messaggi (localizzati sul client, generici sul server).
export const ERROR_CODES = {
  REQUIRED: 'required',
  EMAIL: 'email',
  CV_TYPE: 'cvType',
  CV_SIZE: 'cvSize',
  PRIVACY: 'privacy',
};

/**
 * Valida i campi della candidatura. Puro: nessun side-effect, nessuna dipendenza
 * dal DOM o da FormData. Il CV è descritto in modo astratto per funzionare sia
 * lato client (File) sia lato server (Blob/File).
 *
 * @param {Object} fields                 - { nome, cognome, email, telefono, posizione, area, privacy }
 * @param {{ size:number, name:string }|null} cv - metadati del file CV (o null se assente)
 * @returns {Object} mappa { campo: codiceErrore } (vuota = valido)
 */
export function validateCandidatura(fields, cv) {
  const e = {};
  const { REQUIRED, EMAIL, CV_TYPE, CV_SIZE, PRIVACY } = ERROR_CODES;

  if (!fields.nome?.trim()) e.nome = REQUIRED;
  if (!fields.cognome?.trim()) e.cognome = REQUIRED;
  if (!fields.email?.trim()) e.email = REQUIRED;
  else if (!EMAIL_RE.test(fields.email.trim())) e.email = EMAIL;
  if (!fields.telefono?.trim()) e.telefono = REQUIRED;
  if (!fields.posizione) e.posizione = REQUIRED;
  if (fields.posizione === SPONTANEOUS && !fields.area) e.area = REQUIRED;

  if (!cv) e.cv = REQUIRED;
  else if (cv.size > CV_MAX_BYTES) e.cv = CV_SIZE;
  else if (!CV_EXT_RE.test(cv.name || '')) e.cv = CV_TYPE;

  if (!fields.privacy) e.privacy = PRIVACY;

  return e;
}
