'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// LeadForm — blocco contatto sopra il footer.
// FORM TEMPORANEAMENTE DISABILITATO — in attesa di backend. Mostra mailto: info@logiexpert.com

const CONTENT = {
  it: {
    overline: 'Contatti · Lead generation',
    h2: 'Raccontaci il tuo processo.\nUn consulente specializzato ti risponde con una direzione concreta.',
    p: 'Scrivi a info@logiexpert.com indicando settore, processo e soluzione di interesse. Nessun call center, nessuna newsletter.',
    phoneLabel: 'Telefono',
    emailLabel: 'Email',
    stat1Label: 'software proprietari',
    stat2Label: 'anni di esperienza',
    rightH3: 'Scrivici direttamente.',
    rightP: 'Indica nella email il tuo settore, il processo e la soluzione di interesse. Un consulente specializzato ti risponde direttamente.',
    rightCta: 'info@logiexpert.com →',
  },
  en: {
    overline: 'Contact · Lead generation',
    h2: 'Tell us about your process.\nA specialist consultant will respond with a concrete direction.',
    p: 'Write to info@logiexpert.com indicating your sector, process and solution of interest. No call centre, no newsletter.',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    stat1Label: 'proprietary software',
    stat2Label: 'years of experience',
    rightH3: 'Write to us directly.',
    rightP: 'Include your sector, process and solution of interest in the email. A specialist consultant will respond directly.',
    rightCta: 'info@logiexpert.com →',
  },
};

function LeadForm() {
  const { lang } = useLanguage();
  const c = CONTENT[lang];

  return (
    <section id="contatti" style={{ background: '#F2F2F2', padding: '80px 56px 96px' }}>
      <div style={{
        maxWidth: 1328, margin: '0 auto',
        background: '#fff', borderRadius: 24, overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr 1.1fr', minHeight: 640,
        boxShadow: '0 1px 0 #ECEFF3, inset 0 0 0 1px #ECEFF3'
      }}>
        {/* Left — dark pitch */}
        <div style={{
          background: '#0D0D12', color: '#fff', padding: '56px 48px',
          position: 'relative', overflow: 'hidden'
        }}>
          <div className="le-glow" style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(120% 100% at 0% 100%, #FFE9C5 0%, #B0220C 14%, rgba(176,34,12,0) 42%, rgba(0,0,0,0) 100%)',
            opacity: 0.7, '--glow-dur': '5s'
          }} />
          <div style={{ position: 'relative' }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
              {c.overline}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
              color: '#fff', margin: 0
            }}>
              {c.h2.split('\n').map((line, i) => (
                i === 0 ? <span key={i}>{line}<br/></span> : <span key={i}>{line}</span>
              ))}
            </h2>
            <p style={{
              marginTop: 22, fontFamily: 'var(--font-display)',
              fontSize: 17, lineHeight: '26px', color: 'rgba(255,255,255,0.78)', maxWidth: 440
            }}>
              {c.p.split('info@logiexpert.com').map((part, i, arr) => (
                i < arr.length - 1
                  ? <span key={i}>{part}<strong style={{ color: '#fff' }}>info@logiexpert.com</strong></span>
                  : <span key={i}>{part}</span>
              ))}
            </p>

            <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: 'phone', label: c.phoneLabel, value: '+39 02 80898867' },
                { icon: 'mail',  label: c.emailLabel, value: 'info@logiexpert.com' },
              ].map(contact => (
                <div key={contact.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 8,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon name={contact.icon} size={16} color="#fff" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-ui)', fontSize: 11, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)'
                    }}>
                      {contact.label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: '#fff' }}>
                      {contact.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: 40, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.12)',
              display: 'flex', gap: 32
            }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, color: '#fff', lineHeight: 1 }}>4</div>
                <div style={{ marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{c.stat1Label}</div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 28, color: '#fff', lineHeight: 1 }}>30+</div>
                <div style={{ marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{c.stat2Label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — FORM TEMPORANEAMENTE SOSTITUITO CON MAILTO in attesa di backend */}
        <div style={{
          padding: '56px 48px', background: '#fff',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          textAlign: 'center', gap: 24
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: '#FEEFF2', display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Icon name="mail" size={28} color="var(--le-red)" stroke={1.6} />
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 28, lineHeight: '36px', letterSpacing: '-0.01em',
            color: '#0D0D12', margin: 0,
          }}>
            {c.rightH3}
          </h3>
          <p style={{
            fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px',
            color: '#36394A', maxWidth: 380, margin: 0,
          }}>
            {c.rightP}
          </p>
          <a href="mailto:info@logiexpert.com?subject=Richiesta%20di%20informazioni" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            height: 52, padding: '0 28px',
            background: 'var(--le-red)', color: '#fff', borderRadius: 8,
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
            textDecoration: 'none', boxShadow: '0 2px 4px rgba(149,18,43,0.25)',
          }}>
            {c.rightCta}
          </a>
        </div>
      </div>
    </section>
  );
}

export default LeadForm;
