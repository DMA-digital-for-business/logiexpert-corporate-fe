import { describe, it, expect } from 'vitest';
import { renderCandidatureEmail } from './emailTemplate.js';

const baseFields = () => ({
  nome: 'Giulia', cognome: 'Bianchi', email: 'giulia@example.com',
  telefono: '+39 340 1234567', citta: 'Torino', linkedin: 'https://linkedin.com/in/giulia',
  posizioneLabel: 'Full Stack Software Engineer', area: '',
  datore: 'Acme', disponibilita: '2026-10-01', messaggio: 'Ciao', lang: 'it',
});
const render = (over = {}) => renderCandidatureEmail({
  fields: { ...baseFields(), ...over.fields },
  attachmentName: over.attachmentName ?? 'CV.pdf',
  receivedAt: over.receivedAt ?? '2026-08-17T09:30:00.000Z',
});

describe('renderCandidatureEmail', () => {
  it('costruisce un subject con nome e posizione', () => {
    expect(render().subject).toBe('Candidatura — Full Stack Software Engineer — Giulia Bianchi');
  });

  it('include tutti i campi valorizzati nel corpo HTML', () => {
    const { html } = render();
    for (const v of ['Giulia Bianchi', 'giulia@example.com', '+39 340 1234567', 'Torino',
      'Full Stack Software Engineer', 'Acme', 'CV.pdf']) {
      expect(html).toContain(v);
    }
  });

  it('omette i campi vuoti (nessuna riga "Area desiderata" senza valore)', () => {
    const { html } = render();
    expect(html).not.toContain('Area desiderata');
    // ma la mostra quando presente
    expect(render({ fields: { area: 'Commerciale' } }).html).toContain('Commerciale');
  });

  it('esegue l’escaping di caratteri HTML nei valori (anti-injection)', () => {
    const { html } = render({ fields: { nome: '<b>', cognome: 'x&y' } });
    expect(html).toContain('&lt;b&gt; x&amp;y');
    expect(html).not.toContain('<b> x&y');
  });

  it('localizza la data di ricezione (it-IT, Europe/Rome)', () => {
    expect(render().html).toContain('17 agosto 2026');
  });

  it('produce un fallback testuale con i campi principali', () => {
    const { text } = render();
    expect(text).toContain('NUOVA CANDIDATURA');
    expect(text).toContain('Email: giulia@example.com');
  });

  // Guard-rail cross-client (Outlook): niente rgba(), bgcolor presente su celle colorate.
  it('non usa rgba() (non supportato da Outlook)', () => {
    expect(render().html).not.toMatch(/rgba\(/);
  });

  it('applica bgcolor sulle celle colorate per Outlook', () => {
    const { html } = render();
    for (const c of ['#0D0D12', '#CD1632', '#F6F8FA', '#ffffff', '#F2F2F2']) {
      expect(html).toContain(`bgcolor="${c}"`);
    }
  });
});
