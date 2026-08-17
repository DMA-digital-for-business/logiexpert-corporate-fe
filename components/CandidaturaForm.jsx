'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { CV_ACCEPT, SPONTANEOUS, validateCandidatura } from '../lib/candidature';
import { JOBS_DATA } from '../screens/careersData';

// CandidaturaForm — form unico di candidatura (posizione specifica o spontanea).
// Invia a /api/candidature e reindirizza a /grazie in caso di successo.
// `preset` (opzionale) pre-seleziona la posizione quando l'utente arriva da un
// CTA dell'accordion o dall'hero.

const inputStyle = {
  width: '100%', height: 48, padding: '0 14px', borderRadius: 10,
  border: '1px solid #DFE1E7', background: '#fff',
  fontFamily: 'var(--font-display)', fontSize: 15, color: '#0D0D12', outline: 'none',
};
const labelStyle = {
  display: 'block', marginBottom: 8,
  fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 14, color: '#0D0D12',
};
const optionalStyle = {
  fontFamily: 'var(--font-mono)', fontSize: 11, color: '#818898',
  textTransform: 'uppercase', letterSpacing: '0.04em', marginLeft: 8,
};
const errorTextStyle = {
  marginTop: 6, fontFamily: 'var(--font-display)', fontSize: 13, color: 'var(--le-red)',
};

const EMPTY_FORM = {
  nome: '', cognome: '', email: '', telefono: '', citta: '', linkedin: '',
  posizione: '', area: '', datore: '', disponibilita: '', messaggio: '',
  privacy: false, website: '', // website = honeypot
};

export default function CandidaturaForm({ c, lang, routes, preset }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [cvFile, setCvFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | error

  // Sincronizza la posizione quando arriva un preset (nuovo oggetto a ogni click).
  useEffect(() => {
    if (preset?.position) {
      setForm((f) => ({ ...f, posizione: preset.position }));
      setErrors((e) => ({ ...e, posizione: undefined }));
    }
  }, [preset]);

  const posOptions = [
    ...JOBS_DATA.map((j) => ({ value: j.id, label: j.title[lang] })),
    { value: SPONTANEOUS, label: c.spontaneous },
  ];

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const onCvChange = (file) => {
    setCvFile(file || null);
    setErrors((e) => ({ ...e, cv: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: bot compila un campo nascosto → abortisci fingendo successo
    if (form.website) { window.location.assign(routes.thankYou); return; }

    const codes = validateCandidatura(form, cvFile);
    if (Object.keys(codes).length) {
      // Mappa i codici errore ai messaggi localizzati (le chiavi coincidono con c.errors)
      const mapped = {};
      for (const [field, code] of Object.entries(codes)) mapped[field] = c.errors[code];
      setErrors(mapped);
      return;
    }

    setStatus('submitting');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        if (k === 'privacy') fd.append(k, v ? 'true' : 'false');
        else fd.append(k, v);
      });
      fd.append('lang', lang);
      fd.append('cv', cvFile);

      const res = await fetch('/api/candidature', { method: 'POST', body: fd });
      if (!res.ok) throw new Error('Request failed');
      window.location.assign(routes.thankYou);
    } catch (_) {
      setStatus('error');
    }
  };

  return (
    <section id="candidati" style={{ background: '#fff', padding: '120px 56px' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ marginBottom: 32 }}>
          <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{c.formOverline}</div>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', color: '#0D0D12', margin: 0,
          }}>
            {c.formHeading}
          </h2>
          <p style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: '#36394A' }}>
            {c.formIntro}
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate style={{
          background: '#F6F8FA', border: '1px solid #ECEFF3', borderRadius: 18, padding: 36,
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          {/* Honeypot — nascosto agli utenti, esca per i bot */}
          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
            <label>
              Website
              <input type="text" tabIndex={-1} autoComplete="off"
                value={form.website} onChange={(e) => update('website', e.target.value)} />
            </label>
          </div>

          <Row>
            <Field label={c.fields.nome} required error={errors.nome}>
              <input style={inputStyle} value={form.nome} onChange={(e) => update('nome', e.target.value)} />
            </Field>
            <Field label={c.fields.cognome} required error={errors.cognome}>
              <input style={inputStyle} value={form.cognome} onChange={(e) => update('cognome', e.target.value)} />
            </Field>
          </Row>

          <Row>
            <Field label={c.fields.email} required error={errors.email}>
              <input type="email" style={inputStyle} value={form.email} onChange={(e) => update('email', e.target.value)} />
            </Field>
            <Field label={c.fields.telefono} required error={errors.telefono}>
              <input type="tel" style={inputStyle} value={form.telefono} onChange={(e) => update('telefono', e.target.value)} />
            </Field>
          </Row>

          <Row>
            <Field label={c.fields.citta} optional={c.optional}>
              <input style={inputStyle} value={form.citta} onChange={(e) => update('citta', e.target.value)} />
            </Field>
            <Field label={c.fields.linkedin} optional={c.optional}>
              <input type="url" placeholder="https://" style={inputStyle} value={form.linkedin} onChange={(e) => update('linkedin', e.target.value)} />
            </Field>
          </Row>

          <Field label={c.fields.posizione} required error={errors.posizione}>
            <select style={{ ...inputStyle, appearance: 'auto' }} value={form.posizione} onChange={(e) => update('posizione', e.target.value)}>
              <option value="" disabled>{c.selectPlaceholder}</option>
              {posOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </Field>

          {form.posizione === SPONTANEOUS && (
            <Field label={c.fields.area} required error={errors.area}>
              <select style={{ ...inputStyle, appearance: 'auto' }} value={form.area} onChange={(e) => update('area', e.target.value)}>
                <option value="" disabled>{c.selectPlaceholder}</option>
                {c.areas.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </Field>
          )}

          <Row>
            <Field label={c.fields.datore} optional={c.optional}>
              <input style={inputStyle} value={form.datore} onChange={(e) => update('datore', e.target.value)} />
            </Field>
            <Field label={c.fields.disponibilita} optional={c.optional}>
              <input type="date" style={inputStyle} value={form.disponibilita} onChange={(e) => update('disponibilita', e.target.value)} />
            </Field>
          </Row>

          <Field label={c.fields.cv} required error={errors.cv}>
            <label style={{
              display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
              padding: '12px 14px', borderRadius: 10, border: '1px dashed #C1C7D0', background: '#fff',
            }}>
              <span style={{
                width: 40, height: 40, borderRadius: 8, background: '#FEEFF2', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name="arrowUR" size={18} color="var(--le-red)" />
              </span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{
                  display: 'block', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500,
                  color: cvFile ? '#0D0D12' : '#666D80',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {cvFile ? cvFile.name : c.fields.cv}
                </span>
                <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#818898', marginTop: 2 }}>
                  {c.cvHint}
                </span>
              </span>
              <input type="file" accept={CV_ACCEPT} style={{ display: 'none' }}
                onChange={(e) => onCvChange(e.target.files && e.target.files[0])} />
            </label>
          </Field>

          <Field label={c.fields.messaggio} optional={c.optional}>
            <textarea rows={4} maxLength={1000} style={{ ...inputStyle, height: 'auto', padding: '12px 14px', resize: 'vertical', lineHeight: '22px' }}
              value={form.messaggio} onChange={(e) => update('messaggio', e.target.value)} />
          </Field>

          {/* Consenso privacy */}
          <div>
            <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" checked={form.privacy} onChange={(e) => update('privacy', e.target.checked)}
                style={{ marginTop: 3, width: 18, height: 18, accentColor: 'var(--le-red)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '21px', color: '#36394A' }}>
                {c.privacyText}{' '}
                <a href={routes.privacy} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--le-red)', textDecoration: 'underline' }}>
                  {c.privacyLinkLabel}
                </a>
              </span>
            </label>
            {errors.privacy && <div style={errorTextStyle}>{errors.privacy}</div>}
          </div>

          {status === 'error' && (
            <div style={{
              padding: '14px 16px', borderRadius: 10, background: '#FADAE1',
              fontFamily: 'var(--font-display)', fontSize: 14, color: '#95122B',
            }}>
              {c.errors.generic}
            </div>
          )}

          <button type="submit" disabled={status === 'submitting'} style={{
            alignSelf: 'flex-start', marginTop: 4,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            height: 52, padding: '0 28px', border: 0, borderRadius: 8,
            background: 'var(--le-red)', color: '#fff', cursor: status === 'submitting' ? 'default' : 'pointer',
            opacity: status === 'submitting' ? 0.7 : 1,
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
            boxShadow: '0 2px 4px rgba(149,18,43,0.25)',
          }}>
            {status === 'submitting' ? c.submitting : c.submit}
            {status !== 'submitting' && <Icon name="arrow" size={16} color="#fff" />}
          </button>
        </form>
      </div>
    </section>
  );
}

// ── Sotto-componenti del form ───────────────────────────────────────────────
function Row({ children }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>{children}</div>;
}

function Field({ label, required, optional, error, children }) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: 'var(--le-red)' }}> *</span>}
        {optional && <span style={optionalStyle}>{optional}</span>}
      </label>
      {children}
      {error && <div style={errorTextStyle}>{error}</div>}
    </div>
  );
}
