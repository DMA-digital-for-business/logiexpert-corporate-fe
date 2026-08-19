'use client';

import { useState } from 'react';
import Icon from './Icon';
import { useLanguage } from '../lib/LanguageContext';

// FAQ — accordion, used at the bottom of soluzione / settore / software pages

const DEFAULT_ITEMS = {
  it: [
    { q: "Cos'è la Tracciabilità Pallet?",
      a: "È la capacità di seguire ogni pallet — identificato univocamente da un'etichetta SSCC o EPAL — lungo la catena interna (magazzino, spedizione) e nei rapporti con clienti e fornitori. LogiTrace è il software LogiExpert che realizza questa soluzione." },
    { q: "Qual è la differenza tra LogiPod e un POD cartaceo?",
      a: "LogiPod sostituisce il bollettino firmato con una conferma di consegna digitale: firma elettronica del cliente, foto della merce, geolocalizzazione e timestamp. Il dato è strutturato e disponibile in fattura entro pochi secondi." },
    { q: "LogiStock si integra con il mio gestionale?",
      a: "Sì. LogiStock è progettato per integrarsi con i principali ERP e gestionali del mercato. L'integrazione viene gestita dal team di LogiExpert in base ai sistemi già in uso." },
    { q: "Vendete anche l'hardware oltre al software?",
      a: "Sì — siamo system integrator. Sul nostro eCommerce B2B trovi stampanti industriali, terminali handheld, lettori barcode, POS, RFID, sanificabili e consumabili dei principali brand (Zebra, Honeywell, Datalogic)." },
  ],
  en: [
    { q: "What is Pallet Tracking?",
      a: "It is the ability to follow every pallet — uniquely identified by an SSCC or EPAL label — along the internal chain (warehouse, shipment) and in relationships with customers and suppliers. LogiTrace is the LogiExpert software that implements this solution." },
    { q: "What is the difference between LogiPod and a paper POD?",
      a: "LogiPod replaces the signed delivery note with a digital delivery confirmation: customer electronic signature, photo of the goods, geolocation and timestamp. The data is structured and available for invoicing within seconds." },
    { q: "Does LogiStock integrate with my ERP?",
      a: "Yes. LogiStock is designed to integrate with the major ERPs and management systems on the market. Integration is handled by the LogiExpert team based on the systems already in use." },
    { q: "Do you also sell hardware as well as software?",
      a: "Yes — we are system integrators. Our B2B eCommerce features industrial printers, handheld terminals, barcode scanners, POS, RFID, sanitizable devices and consumables from the major brands (Zebra, Honeywell, Datalogic)." },
  ],
};

const SECTION_LABELS = {
  it: { overline: 'Domande frequenti', heading: 'Risposte rapide, scritte per i tuoi acquisti e per la tua IT.' },
  en: { overline: 'Frequently asked questions', heading: 'Quick answers, written for your purchasing and IT teams.' },
};

function FAQ({ items = [] }) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(0);
  const sl = SECTION_LABELS[lang];
  const data = items.length ? items : DEFAULT_ITEMS[lang];

  // FAQPage structured data — emitted wherever this component renders so answer
  // engines (Google AI Overviews, ChatGPT, Perplexity) can quote the Q&A directly.
  const ldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <section style={{ background: '#fff', padding: '96px 56px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }} />
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <div className="overline" style={{ color: 'var(--le-red)' }}>{sl.overline}</div>
        <h2 style={{ marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 36, lineHeight: '44px', letterSpacing: '-0.01em', color: '#0D0D12', margin: '16px 0 40px' }}>
          {sl.heading}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.map((d, i) => {
            const isOpen = open === i;
            return (
              <div key={d.q} style={{
                border: '1px solid #ECEFF3', borderRadius: 12,
                background: isOpen ? '#F6F8FA' : '#fff',
                transition: 'background 200ms var(--ease-out)'
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%', background: 'transparent', border: 0, cursor: 'pointer',
                  padding: '20px 22px',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: 16, textAlign: 'left',
                  fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 17, color: '#0D0D12'
                }}>
                  <span>{d.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: isOpen ? 'var(--le-red)' : '#fff',
                    boxShadow: isOpen ? 'none' : 'inset 0 0 0 1px #DFE1E7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    transition: 'background 200ms var(--ease-out)'
                  }}>
                    <Icon name="chevD" size={14} color={isOpen ? '#fff' : '#0D0D12'} stroke={2}
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 200ms var(--ease-out)' }} />
                  </span>
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 22px 22px',
                    fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px', color: '#36394A'
                  }}>
                    {d.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
