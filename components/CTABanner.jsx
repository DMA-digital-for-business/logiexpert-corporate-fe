'use client';

import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// CTABanner — full-bleed red conversion block

const LABELS = {
  it: { overline: 'Contatti', phone: 'Telefono', email: 'Email' },
  en: { overline: 'Contact', phone: 'Phone', email: 'Email' },
};

function CTABanner({
  title,
  body,
  primary,
  primaryHref = '/contatti',
  secondary,
  secondaryHref = '/contatti',
} = {}) {
  const { lang } = useLanguage();
  const lb = LABELS[lang];

  const defaultTitle = lang === 'en'
    ? 'Ready to start a logistics project with us?'
    : 'Pronto a iniziare un progetto logistico con noi?';
  const defaultBody = lang === 'en'
    ? 'One of our consultants analyses your case and proposes a concrete direction.'
    : 'Un nostro consulente analizza il tuo caso e propone una direzione concreta.';
  const defaultPrimary = lang === 'en' ? 'Request a quote' : 'Richiedi un preventivo';
  const defaultSecondary = lang === 'en' ? 'Book a call' : 'Prenota una call';

  const resolvedTitle = title ?? defaultTitle;
  const resolvedBody = body ?? defaultBody;
  const resolvedPrimary = primary ?? defaultPrimary;
  const resolvedSecondary = secondary ?? defaultSecondary;

  return (
    <section style={{ background: '#F2F2F2', padding: '0 56px 96px' }}>
      <div style={{
        maxWidth: 1328, margin: '0 auto',
        background: 'linear-gradient(120deg, #CD1632 0%, #95122B 100%)',
        borderRadius: 24, padding: 64,
        display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 48,
        color: '#fff', position: 'relative', overflow: 'hidden'
      }}>
        <div className="le-glow" style={{
          position: 'absolute', right: -120, top: -80, width: 420, height: 420, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,233,197,0.35) 0%, rgba(255,233,197,0) 65%)',
          pointerEvents: 'none', '--glow-dur': '6.5s'
        }} />
        <div style={{ position: 'relative' }}>
          <div className="overline" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 16 }}>{lb.overline}</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 44, lineHeight: '52px', letterSpacing: '-0.012em', color: '#fff', margin: 0, maxWidth: 620 }}>
            {resolvedTitle}
          </h2>
          <p style={{ marginTop: 18, fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.9)', maxWidth: 560 }}>
            {resolvedBody}
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={primaryHref} style={{
              padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#fff', color: '#0D0D12', borderRadius: 6,
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none'
            }}>
              {resolvedPrimary} <Icon name="arrow" size={16} />
            </a>
            <a href={secondaryHref} style={{
              padding: '0 22px', height: 48, display: 'inline-flex', alignItems: 'center', gap: 10,
              background: 'transparent', color: '#fff', borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.4)',
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none'
            }}>
              <Icon name="phone" size={14} color="#fff" /> {resolvedSecondary}
            </a>
          </div>
        </div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'center' }}>
          {[
            { icon: 'phone', label: lb.phone, value: '+39 02 80898867', href: 'tel:+390280898867' },
            { icon: 'mail',  label: lb.email, value: 'info@logiexpert.com', href: 'mailto:info@logiexpert.com' },
          ].map(c => (
            <a key={c.label} href={c.href} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: 18, borderRadius: 12, background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)', textDecoration: 'none'
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: 'rgba(255,255,255,0.14)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Icon name={c.icon} size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500, color: '#fff' }}>
                  {c.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
