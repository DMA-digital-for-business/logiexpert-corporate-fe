'use client';

import { anchorFor } from '../lib/toc';

// FlussoManuale — interactive, self-contained flow of the B2B order/quote process
// for the internal operating manual. Three purchase paths (A / B / C) rendered as
// swimlane columns; every step is a role-coloured node that scrolls to the matching
// procedure section (§) in the page below. No external dependency (native web).

// Role → colour. Keys reused across steps and the legend.
const ROLES = {
  cliente:  { label: 'Cliente',          color: '#64748B' },
  sales:    { label: 'Sales rep',        color: 'var(--le-red)' },
  admin:    { label: 'Admin ecommerce',  color: '#2F6FED' },
  ammin:    { label: 'Amministrazione',  color: '#C77D0A' },
  mag:      { label: 'Magazzino',        color: '#0E9F6E' },
};

// Section headings to link to (must match the Markdown headings; slugified identically).
const SEC = {
  paths:    { ref: '§3', href: `#${anchorFor("3. I tre percorsi d'acquisto")}` },
  approval: { ref: '§4', href: `#${anchorFor('4. Procedura — Approvazione di una registrazione azienda')}` },
  quote:    { ref: '§5', href: `#${anchorFor('5. Procedura — Gestione di una richiesta di preventivo')}` },
  terms:    { ref: '§6', href: `#${anchorFor("6. Procedura — Condizioni commerciali di un'azienda")}` },
  orders:   { ref: '§7', href: `#${anchorFor('7. Procedura — Gestione degli ordini')}` },
};

const PATHS = [
  {
    tag: 'A',
    title: 'Acquisto diretto',
    subtitle: 'senza account',
    steps: [
      { role: 'cliente', text: 'Ordine a listino, pagamento con carta o bonifico', sec: SEC.orders },
      { role: 'ammin',   text: 'Verifica del bonifico anticipato (se scelto)',       sec: SEC.orders },
      { role: 'admin',   text: 'Ordine confermato → trasmesso al magazzino',         sec: SEC.orders },
      { role: 'mag',     text: 'Evasione e spedizione',                               sec: SEC.orders },
    ],
  },
  {
    tag: 'B',
    title: 'Preventivo',
    subtitle: 'cliente registrato',
    steps: [
      { role: 'cliente', text: 'Richiesta preventivo (azienda già collegata)', sec: SEC.paths },
      { role: 'sales',   text: 'Validazione offerta: prezzi, scadenza, spedizione', sec: SEC.quote },
      { role: 'admin',   text: 'Condizioni e metodi di pagamento dell’azienda',  sec: SEC.terms },
      { role: 'sales',   text: 'Invio preventivo + email al cliente',            sec: SEC.quote },
      { role: 'cliente', text: 'Accetta e ordina online',                        sec: SEC.orders },
      { role: 'mag',     text: 'Evasione e spedizione',                          sec: SEC.orders },
    ],
  },
  {
    tag: 'C',
    title: 'Preventivo',
    subtitle: 'cliente non registrato',
    steps: [
      { role: 'cliente', text: 'Richiesta preventivo (nessuna azienda collegata)', sec: SEC.paths },
      { role: 'sales',   text: 'Controllo anti-duplicati sull’email — sempre',     sec: SEC.quote },
      { role: 'sales',   text: 'Creazione azienda dal preventivo',                 sec: SEC.quote },
      { role: 'admin',   text: 'Condizioni commerciali e pagamenti',              sec: SEC.terms },
      { role: 'sales',   text: 'Validazione offerta e invio + email',             sec: SEC.quote },
      { role: 'cliente', text: 'Accetta e ordina online',                         sec: SEC.orders },
      { role: 'mag',     text: 'Evasione e spedizione',                           sec: SEC.orders },
    ],
  },
];

function StepCard({ step }) {
  const r = ROLES[step.role];
  return (
    <a href={step.sec.href} title={`Vai a ${step.sec.ref}`} style={{
      display: 'block', textDecoration: 'none',
      background: '#fff', border: '1px solid #ECEFF3', borderLeft: `3px solid ${r.color}`,
      borderRadius: 10, padding: '12px 14px',
      transition: 'transform 160ms var(--ease-out), box-shadow 160ms var(--ease-out)',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(13,13,18,0.10)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.color, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600, letterSpacing: '0.03em', textTransform: 'uppercase', color: r.color }}>
            {r.label}
          </span>
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#98A0AE' }}>{step.sec.ref} ›</span>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 14.5, lineHeight: '21px', color: '#0D0D12' }}>
        {step.text}
      </div>
    </a>
  );
}

export default function FlussoManuale() {
  return (
    <section aria-label="Flusso operativo interattivo" style={{ margin: '0 0 44px' }}>
      <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 12 }}>Flusso operativo</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, lineHeight: '32px', letterSpacing: '-0.01em', color: '#0D0D12', margin: '0 0 8px' }}>
        Chi fa cosa, per percorso d’acquisto
      </h2>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '23px', color: '#5A6072', margin: '0 0 20px' }}>
        Ogni richiesta rientra in uno dei tre percorsi. Clicca un passaggio per aprire la procedura di dettaglio.
      </p>

      {/* Legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
        {Object.values(ROLES).map(r => (
          <span key={r.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '5px 10px', borderRadius: 9999,
            background: '#fff', border: '1px solid #ECEFF3',
            fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500, color: '#36394A',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: r.color }} />
            {r.label}
          </span>
        ))}
      </div>

      {/* Trigger */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 6,
        padding: '10px 16px', borderRadius: 10, background: '#0D0D12', color: '#fff',
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: ROLES.cliente.color }} />
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15 }}>Cliente — richiesta o ordine</span>
      </div>
      <div aria-hidden="true" style={{ color: '#C6CBD4', fontSize: 18, lineHeight: '18px', margin: '2px 0 14px', paddingLeft: 22 }}>↓</div>

      {/* Paths */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(258px, 1fr))', gap: 18 }}>
        {PATHS.map(p => (
          <div key={p.tag} style={{
            background: '#F6F8FA', border: '1px solid #ECEFF3', borderRadius: 14, padding: 16,
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <span style={{
                width: 30, height: 30, borderRadius: 8, flexShrink: 0,
                background: '#0D0D12', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15,
              }}>{p.tag}</span>
              <span style={{ lineHeight: '17px' }}>
                <span style={{ display: 'block', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, color: '#0D0D12' }}>{p.title}</span>
                <span style={{ display: 'block', fontFamily: 'var(--font-ui)', fontSize: 12, color: '#5A6072' }}>{p.subtitle}</span>
              </span>
            </div>

            {p.steps.map((s, si) => (
              <div key={si}>
                <StepCard step={s} />
                {si < p.steps.length - 1 && (
                  <div aria-hidden="true" style={{ textAlign: 'center', color: '#C6CBD4', fontSize: 15, lineHeight: '16px', padding: '5px 0' }}>↓</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
