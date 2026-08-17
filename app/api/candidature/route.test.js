import { describe, it, expect, vi, beforeEach } from 'vitest';

// Il mailer (che importa SES/nodemailer) è mockato: i test della route non
// toccano AWS e verificano solo validazione, honeypot e derivazione label.
vi.mock('../../../lib/mailer.js', () => ({ sendCandidatureEmail: vi.fn() }));

import { POST } from './route.js';
import { sendCandidatureEmail } from '../../../lib/mailer.js';

function makeRequest(fields = {}, { cv } = {}) {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  if (cv) fd.append('cv', new File([cv.content], cv.name, { type: cv.type || 'application/pdf' }));
  return new Request('http://localhost/api/candidature', { method: 'POST', body: fd });
}

const validBody = () => ({
  nome: 'Mario', cognome: 'Rossi', email: 'mario@example.com',
  telefono: '+39 333 1234567', posizione: 'sales-account-manager',
  privacy: 'true', lang: 'it',
});
const validCv = () => ({ content: '%PDF-1.4 test', name: 'cv.pdf' });

beforeEach(() => {
  vi.clearAllMocks();
  sendCandidatureEmail.mockResolvedValue({ messageId: 'test-id' });
});

describe('POST /api/candidature', () => {
  it('scarta silenziosamente i bot (honeypot) senza inviare', async () => {
    const res = await POST(makeRequest({ ...validBody(), website: 'spam' }, { cv: validCv() }));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(sendCandidatureEmail).not.toHaveBeenCalled();
  });

  it('rifiuta i campi mancanti con 400', async () => {
    const res = await POST(makeRequest({ nome: 'Mario' }));
    expect(res.status).toBe(400);
    expect(sendCandidatureEmail).not.toHaveBeenCalled();
  });

  it('rifiuta un email non valida con 400', async () => {
    const res = await POST(makeRequest({ ...validBody(), email: 'nope' }, { cv: validCv() }));
    expect(res.status).toBe(400);
  });

  it('rifiuta la candidatura spontanea senza area con 400', async () => {
    const res = await POST(makeRequest(
      { ...validBody(), posizione: 'spontaneous' }, { cv: validCv() },
    ));
    expect(res.status).toBe(400);
  });

  it('rifiuta un CV con formato non ammesso', async () => {
    const res = await POST(makeRequest(validBody(), { cv: { content: 'x', name: 'cv.exe' } }));
    expect(res.status).toBe(400);
    expect(sendCandidatureEmail).not.toHaveBeenCalled();
  });

  it('invia e risponde 200 su candidatura valida', async () => {
    const res = await POST(makeRequest(validBody(), { cv: validCv() }));
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
    expect(sendCandidatureEmail).toHaveBeenCalledOnce();
  });

  it('deriva la label posizione dall’id e IGNORA quella inviata dal client', async () => {
    await POST(makeRequest(
      { ...validBody(), posizioneLabel: 'ETICHETTA-FALSA' }, { cv: validCv() },
    ));
    const arg = sendCandidatureEmail.mock.calls[0][0];
    expect(arg.fields.posizioneLabel).toBe('Sales Account Manager');
    expect(arg.fields.posizioneLabel).not.toBe('ETICHETTA-FALSA');
    expect(arg.cv.filename).toBe('cv.pdf');
  });

  it('restituisce 502 se l’invio email fallisce', async () => {
    sendCandidatureEmail.mockRejectedValueOnce(new Error('SES down'));
    const res = await POST(makeRequest(validBody(), { cv: validCv() }));
    expect(res.status).toBe(502);
    await expect(res.json()).resolves.toMatchObject({ ok: false });
  });
});
