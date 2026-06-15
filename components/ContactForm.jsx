'use client';

import { useState } from 'react';
import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// ContactForm — form di contatto qualificante per la pagina /contatti.
// Il form completo è temporaneamente disabilitato: sezione attiva = mailto.
// Da riattivare quando il backend sarà pronto.

const MAILTO_CONTENT = {
  it: {
    overline: 'Contatti · Richiesta qualificata',
    h2: 'Raccontaci la tua esigenza.',
    p: 'Indica settore, processo e soluzione di interesse. Un consulente specializzato nel tuo ambito ti risponde direttamente.',
    cta: 'Scrivi a info@logiexpert.com →',
  },
  en: {
    overline: 'Contact · Qualified request',
    h2: 'Tell us about your need.',
    p: 'Include your sector, process and solution of interest. A specialist consultant in your field will respond directly.',
    cta: 'Write to info@logiexpert.com →',
  },
};

export default function ContactForm() {
  const { lang } = useLanguage();
  const c = MAILTO_CONTENT[lang];
  return (
    <section id="form" style={{ background: '#F2F2F2', padding: '80px 56px 96px' }}>
      <div style={{
        maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 24,
        padding: 64, textAlign: 'center', boxShadow: 'inset 0 0 0 1px #ECEFF3',
      }}>
        <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
          {c.overline}
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36, lineHeight: '44px',
          letterSpacing: '-0.012em', color: '#0D0D12', margin: '0 0 20px',
        }}>
          {c.h2}
        </h2>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: '26px',
          color: '#36394A', maxWidth: 500, margin: '0 auto 32px',
        }}>
          {c.p}
        </p>
        <a href="mailto:info@logiexpert.com?subject=Richiesta%20di%20informazioni" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          height: 52, padding: '0 28px',
          background: 'var(--le-red)', color: '#fff', borderRadius: 8,
          fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
          textDecoration: 'none', boxShadow: '0 2px 4px rgba(149,18,43,0.25)',
        }}>
          {c.cta}
        </a>
      </div>
    </section>
  );
}
