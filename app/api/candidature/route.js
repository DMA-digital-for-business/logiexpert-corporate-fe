import { NextResponse } from 'next/server';
import { sendCandidatureEmail } from '../../../lib/mailer';
import { validateCandidatura, ERROR_CODES } from '../../../lib/candidature';
import { resolvePositionLabel } from '../../../screens/careersData';

// Route Handler candidature — riceve il form multipart (incluso il CV) e invia
// l'email a HR con l'allegato. Richiede runtime Node (Buffer per l'allegato).
export const runtime = 'nodejs';

// Messaggi generici (non localizzati) per i codici di errore del validatore
// condiviso. Il client mostra i messaggi localizzati; qui serve solo un fallback
// leggibile per chi chiama l'API direttamente.
const MESSAGES = {
  [ERROR_CODES.REQUIRED]: 'Compila tutti i campi obbligatori.',
  [ERROR_CODES.EMAIL]: 'Indirizzo email non valido.',
  [ERROR_CODES.CV_TYPE]: 'Formato CV non valido (ammessi PDF, DOC, DOCX).',
  [ERROR_CODES.CV_SIZE]: 'Il CV supera i 5MB.',
  [ERROR_CODES.PRIVACY]: 'Consenso privacy obbligatorio.',
};
// Ordine di priorità del messaggio: prima il caso comune (campi mancanti), poi
// gli errori di validità puntuali quando il form è per il resto completo.
const MESSAGE_PRIORITY = [
  ERROR_CODES.REQUIRED, ERROR_CODES.EMAIL,
  ERROR_CODES.CV_SIZE, ERROR_CODES.CV_TYPE, ERROR_CODES.PRIVACY,
];

function bad(error, status = 400) {
  return NextResponse.json({ ok: false, error }, { status });
}

function firstMessage(codes) {
  const present = Object.values(codes);
  const code = MESSAGE_PRIORITY.find((c) => present.includes(c));
  return MESSAGES[code] || 'Dati non validi.';
}

export async function POST(request) {
  let fd;
  try {
    fd = await request.formData();
  } catch (_) {
    return bad('Richiesta non valida.');
  }

  const get = (k) => {
    const v = fd.get(k);
    return typeof v === 'string' ? v.trim() : '';
  };

  // Honeypot: se compilato, è un bot → 200 senza inviare nulla.
  if (get('website')) {
    return NextResponse.json({ ok: true });
  }

  const lang = get('lang') === 'en' ? 'en' : 'it';
  const fields = {
    nome: get('nome'),
    cognome: get('cognome'),
    email: get('email'),
    telefono: get('telefono'),
    citta: get('citta'),
    linkedin: get('linkedin'),
    posizione: get('posizione'),
    // Fonte di verità server: la label è derivata dall'id, non dal client.
    posizioneLabel: resolvePositionLabel(get('posizione'), lang),
    area: get('area'),
    datore: get('datore'),
    disponibilita: get('disponibilita'),
    messaggio: get('messaggio'),
    lang,
    privacy: get('privacy') === 'true',
  };

  const cv = fd.get('cv');
  const isFile = cv && typeof cv !== 'string' && typeof cv.arrayBuffer === 'function';
  const cvMeta = isFile ? { size: cv.size, name: cv.name } : null;

  // Validazione lato server con lo stesso validatore usato dal client.
  const codes = validateCandidatura(fields, cvMeta);
  if (Object.keys(codes).length) {
    return bad(firstMessage(codes));
  }

  let base64;
  try {
    base64 = Buffer.from(await cv.arrayBuffer()).toString('base64');
  } catch (_) {
    return bad('Impossibile leggere il file CV.');
  }

  try {
    await sendCandidatureEmail({
      fields,
      cv: { filename: cv.name, base64 },
      receivedAt: new Date().toISOString(),
    });
  } catch (err) {
    // Log server-side senza esporre dati personali/CV nel messaggio di risposta.
    console.error('[candidature] invio fallito:', err?.message);
    return bad('Invio non riuscito. Riprova più tardi.', 502);
  }

  return NextResponse.json({ ok: true });
}
