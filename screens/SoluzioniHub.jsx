'use client';

import CosE from '../components/CosE';
import FAQ from '../components/FAQ';
import Icon from '../components/Icon';
import Spotlight from '../components/Spotlight';
import LeadForm from '../components/LeadForm';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// SoluzioniHub — /soluzioni entry point.

const DATA = {
  it: {
    breadcrumb: 'Home',
    pageLabel: 'Soluzioni',
    overline: 'Hub Soluzioni · 1° livello',
    h1: 'Le nostre soluzioni per la logistica digitale.',
    subhead: 'Quattro famiglie di soluzioni per chi muove merce nel mondo reale. Ogni soluzione è realizzata da un software proprietario LogiExpert — web-based e in modalità SaaS — che si integra in modo nativo con gli ERP e i gestionali già in uso, all\'interno di un unico ecosistema digitale.',
    levelLabel: '2° livello · 4 famiglie di soluzioni',
    hierarchyLabel: 'Soluzione  ↓  Software proprietario',
    businessSolutionLabel: 'Soluzione di business',
    realizedByLabel: 'Realizzata da',
    softwareLevelLabel: 'Software · 3° livello',
    exploreLabel: 'Esplora',
    ecosystemOverline: 'L\'ecosistema software LogiExpert',
    ecosystemH2: 'Non strumenti isolati, ma un unico ecosistema digitale.',
    ecosystemP: 'Le piattaforme LogiExpert sono web-based ed erogate in modalità SaaS: tempi di implementazione ridotti, scalabilità immediata e aggiornamenti continui. Dialogano in modo nativo con i principali ERP e gestionali e si valorizzano a vicenda quando lavorano insieme, offrendo una visione completa e coerente dei processi.',
    evolvingLabel: 'In evoluzione',
    soluzioni: [
      {
        n: '01',
        title: 'Tracciabilità Pallet',
        slug: '/soluzioni/tracciabilita-pallet',
        body: 'Identifica, traccia e riconcilia ogni pallet — interno e in interscambio. Riduzione perdite, anomalie immediate, conto pallet sempre quadrato con clienti e fornitori.',
        bullets: ['Etichette EPAL · CHEP', 'Codifica SSCC / GS1-128', 'Anomalie in tempo reale'],
        software: { name: 'LogiTrace', desc: 'Software proprietario per la tracciabilità pallet end-to-end.' },
        icon: 'pallet',
      },
      {
        n: '02',
        title: 'Proof of Delivery Digitale',
        slug: '/soluzioni/proof-of-delivery',
        body: 'Sostituisce il bollettino cartaceo con una conferma firmata, geolocalizzata e fotografata. Chiusura del ciclo fattura senza fogli persi, contestazioni tracciate.',
        bullets: ['Firma elettronica', 'Foto consegna · geo · timestamp', 'Integrazione con TMS / ERP'],
        software: { name: 'LogiPod', desc: 'App mobile + console di backoffice per il proof of delivery.' },
        icon: 'send',
      },
      {
        n: '03',
        title: 'Warehouse Management System',
        slug: '/soluzioni/wms',
        body: 'Governa ubicazioni, missioni e picking guidato da terminale. Pensato per magazzini complessi con flussi non-standard, kitting, cross-docking e inventario ciclico.',
        bullets: ['Ubicazioni dinamiche', 'Picking guidato da terminale', 'Inventario ciclico'],
        software: { name: 'LogiStock', desc: 'WMS proprietario, scalabile da 1 a N depositi.' },
        icon: 'database',
      },
      {
        n: '04',
        title: 'Soluzioni AIDC & Mobility',
        slug: '/soluzioni/aidc-mobility',
        body: 'Identificazione automatica e mobilità industriale: barcode, RFID, voice picking, terminali rugged. Hardware e configurazione end-to-end, manutenuto dal nostro team servizi.',
        bullets: ['Barcode & RFID', 'Voice & vision picking', 'Mobile devices rugged'],
        software: { name: 'Hardware partner', desc: 'Zebra · Honeywell · Datalogic, integrati ai software LogiExpert.' },
        icon: 'scan',
      },
    ],
    platforms: [
      { name: 'LogiTrace', label: 'Tracciabilità pallet e gestione asset', href: '/soluzioni/tracciabilita-pallet', live: true },
      { name: 'LogiPod', label: 'Proof of Delivery digitale', href: '/soluzioni/proof-of-delivery', live: true },
      { name: 'LogiDealer', label: 'Gestione concessionari e reti distributive', href: '/contatti', live: false },
      { name: 'LogiStock', label: 'Warehouse Management System', href: '/soluzioni/wms', live: false },
    ],
    faqItems: [
      {
        q: 'Le vostre soluzioni si integrano con il mio gestionale ERP?',
        a: 'Sì. Tutti i nostri software — LogiTrace, LogiPod, LogiStock — sono progettati per integrarsi con i principali ERP e gestionali del mercato italiano. L\'integrazione viene definita in fase di progetto in base ai sistemi già in uso.',
      },
      {
        q: 'Cosa significa che LogiExpert è un system integrator?',
        a: 'Significa che non vendiamo prodotti isolati. Componiamo una soluzione coordinando il software (proprietario o di terze parti), l\'hardware (terminali, stampanti, lettori), il processo operativo e l\'integrazione con il sistema informativo esistente. La responsabilità end-to-end è nostra: un solo interlocutore tecnico per tutto il progetto.',
      },
      {
        q: 'Posso adottare una sola soluzione, o devo comprare tutto?',
        a: 'Le 4 soluzioni sono modulari e indipendenti. Molti nostri clienti partono con una sola — tipicamente Proof of Delivery o Tracciabilità Pallet — e nel tempo estendono la copertura. I software sono progettati per coesistere con i sistemi già in uso, non per sostituirli a forza.',
      },
      {
        q: 'Quanto dura un progetto tipo, dal primo contatto al go-live?',
        a: 'Dipende dalla complessità del progetto, dal numero di sedi coinvolte e dal livello di integrazione richiesto con i sistemi esistenti. Le tempistiche vengono definite in fase di assessment, dopo aver compreso i processi del cliente e l\'architettura già in uso.',
      },
    ],
  },
  en: {
    breadcrumb: 'Home',
    pageLabel: 'Solutions',
    overline: 'Solutions Hub · 1st level',
    h1: 'Our solutions for digital logistics.',
    subhead: 'Four solution families for companies that move goods in the real world. Every solution is implemented by a proprietary LogiExpert software — web-based and SaaS — that integrates natively with ERPs and management systems already in use, within a single digital ecosystem.',
    levelLabel: '2nd level · 4 solution families',
    hierarchyLabel: 'Solution  ↓  Proprietary software',
    businessSolutionLabel: 'Business solution',
    realizedByLabel: 'Implemented by',
    softwareLevelLabel: 'Software · 3rd level',
    exploreLabel: 'Explore',
    ecosystemOverline: 'The LogiExpert software ecosystem',
    ecosystemH2: 'Not isolated tools, but a single digital ecosystem.',
    ecosystemP: 'The LogiExpert platforms are web-based and delivered as SaaS: reduced implementation times, immediate scalability and continuous updates. They integrate natively with major ERPs and management systems and enhance each other when working together, offering a complete and coherent view of processes.',
    evolvingLabel: 'In development',
    soluzioni: [
      {
        n: '01',
        title: 'Pallet Tracking',
        slug: '/en/solutions/tracciabilita-pallet',
        body: 'Identify, track and reconcile every pallet — internal and in exchange. Loss reduction, immediate anomalies, pallet count always balanced with customers and suppliers.',
        bullets: ['EPAL · CHEP labels', 'SSCC / GS1-128 encoding', 'Real-time anomalies'],
        software: { name: 'LogiTrace', desc: 'Proprietary software for end-to-end pallet tracking.' },
        icon: 'pallet',
      },
      {
        n: '02',
        title: 'Digital Proof of Delivery',
        slug: '/en/solutions/proof-of-delivery',
        body: 'Replaces the paper delivery note with a signed, geolocated and photographed confirmation. Invoice cycle closure without lost slips, tracked disputes.',
        bullets: ['Electronic signature', 'Delivery photo · geo · timestamp', 'TMS / ERP integration'],
        software: { name: 'LogiPod', desc: 'Mobile app + backoffice console for proof of delivery.' },
        icon: 'send',
      },
      {
        n: '03',
        title: 'Warehouse Management System',
        slug: '/en/solutions/wms',
        body: 'Manages locations, missions and terminal-guided picking. Designed for complex warehouses with non-standard flows, kitting, cross-docking and cycle counting.',
        bullets: ['Dynamic locations', 'Terminal-guided picking', 'Cycle counting'],
        software: { name: 'LogiStock', desc: 'Proprietary WMS, scalable from 1 to N sites.' },
        icon: 'database',
      },
      {
        n: '04',
        title: 'AIDC & Mobility Solutions',
        slug: '/en/solutions/aidc-mobility',
        body: 'Automatic identification and industrial mobility: barcode, RFID, voice picking, rugged terminals. End-to-end hardware and configuration, maintained by our services team.',
        bullets: ['Barcode & RFID', 'Voice & vision picking', 'Rugged mobile devices'],
        software: { name: 'Hardware partner', desc: 'Zebra · Honeywell · Datalogic, integrated with LogiExpert software.' },
        icon: 'scan',
      },
    ],
    platforms: [
      { name: 'LogiTrace', label: 'Pallet tracking and asset management', href: '/en/solutions/tracciabilita-pallet', live: true },
      { name: 'LogiPod', label: 'Digital Proof of Delivery', href: '/en/solutions/proof-of-delivery', live: true },
      { name: 'LogiDealer', label: 'Dealer network and distribution channel management', href: '/en/contact', live: false },
      { name: 'LogiStock', label: 'Warehouse Management System', href: '/en/solutions/wms', live: false },
    ],
    faqItems: [
      {
        q: 'Do your solutions integrate with my ERP?',
        a: 'Yes. All our software — LogiTrace, LogiPod, LogiStock — is designed to integrate with the major ERPs and management systems on the Italian market. Integration is defined during the project phase based on the systems already in use.',
      },
      {
        q: 'What does it mean that LogiExpert is a system integrator?',
        a: 'It means we don\'t sell isolated products. We compose a solution by coordinating the software (proprietary or third-party), the hardware (terminals, printers, scanners), the operational process and the integration with the existing information system. End-to-end responsibility is ours: a single technical point of contact for the entire project.',
      },
      {
        q: 'Can I adopt just one solution, or do I have to buy everything?',
        a: 'The 4 solutions are modular and independent. Many of our customers start with just one — typically Proof of Delivery or Pallet Tracking — and extend coverage over time. The software is designed to coexist with systems already in use, not to forcibly replace them.',
      },
      {
        q: 'How long does a typical project take, from first contact to go-live?',
        a: 'It depends on the complexity of the project, the number of sites involved and the level of integration required with existing systems. Timelines are defined during the assessment phase, after understanding the customer\'s processes and existing architecture.',
      },
    ],
  },
};

export default function SoluzioniHub() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const d = DATA[lang];

  return (
    <main data-screen-label="Soluzioni hub" style={{ background: '#fff' }}>
      {/* HERO with breadcrumb */}
      <section className="le-clip" style={{ background: '#0D0D12', color: '#fff', padding: '88px 56px 72px', position: 'relative', overflow: 'hidden' }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-10%', top: '20%', width: '60%', height: '120%',
          background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.45) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: 1328, margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--font-ui)', fontSize: 13, color: 'rgba(255,255,255,0.6)'
          }}>
            <a href={routes.home} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>{d.breadcrumb}</a>
            <Icon name="chevR" size={12} color="rgba(255,255,255,0.4)" />
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{d.pageLabel}</span>
          </div>

          <div className="overline" style={{ color: 'var(--le-red)', marginTop: 32 }}>
            {d.overline}
          </div>
          <h1 style={{
            marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 56, lineHeight: '64px', letterSpacing: '-0.012em',
            color: '#fff', maxWidth: 980, margin: '16px 0 0', textWrap: 'balance'
          }}>
            {d.h1}
          </h1>
          <p style={{
            marginTop: 22, fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '28px',
            color: 'rgba(255,255,255,0.78)', maxWidth: 760, margin: '22px 0 0'
          }}>
            {d.subhead}
          </p>

          <div style={{ marginTop: 44, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {d.soluzioni.map(s => (
              <a key={s.n} href={s.slug} style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '8px 14px', borderRadius: 9999,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.16)',
                color: '#fff', textDecoration: 'none',
                fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500
              }}>
                <span style={{ color: 'var(--le-red)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>
                  {s.n}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2° LIVELLO */}
      <section style={{ background: '#fff', padding: '80px 56px 96px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: 40, gap: 32
          }}>
            <div className="overline" style={{ color: '#666D80' }}>
              {d.levelLabel}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: 11, color: '#666D80',
              letterSpacing: '0.06em', textTransform: 'uppercase'
            }}>
              {d.hierarchyLabel}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {d.soluzioni.map(s => (
              <article key={s.title} style={{
                background: '#F6F8FA', borderRadius: 18, padding: 36,
                display: 'flex', flexDirection: 'column', gap: 18,
                position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: '#666D80', letterSpacing: '0.04em',
                  display: 'flex', alignItems: 'center', gap: 6
                }}>
                  <span style={{ color: 'var(--le-red)' }}>{s.n}</span>
                  <span>·</span>
                  <span>{s.slug}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14, background: '#0D0D12',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <Icon name={s.icon} size={26} color="#fff" stroke={1.6} />
                  </div>
                  <div>
                    <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 6 }}>
                      {d.businessSolutionLabel}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)', fontWeight: 500,
                      fontSize: 30, lineHeight: '36px', letterSpacing: '-0.012em',
                      color: '#0D0D12', margin: 0
                    }}>
                      {s.title}
                    </h3>
                  </div>
                </div>

                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '24px',
                  color: '#36394A', margin: 0
                }}>
                  {s.body}
                </p>

                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {s.bullets.map(b => (
                    <span key={b} style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      padding: '6px 12px', borderRadius: 9999,
                      background: '#fff', boxShadow: 'inset 0 0 0 1px #ECEFF3',
                      fontFamily: 'var(--font-ui)', fontSize: 12, color: '#0D0D12', fontWeight: 500
                    }}>
                      <Icon name="check" size={12} color="var(--le-red)" stroke={2.5} />
                      {b}
                    </span>
                  ))}
                </div>

                <div style={{
                  marginTop: 4, marginBottom: -4,
                  display: 'flex', alignItems: 'center', gap: 10,
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: '#666D80', letterSpacing: '0.08em', textTransform: 'uppercase'
                }}>
                  <span style={{ flex: 1, height: 1, background: '#DFE1E7' }} />
                  {d.realizedByLabel}
                  <span style={{ flex: 1, height: 1, background: '#DFE1E7' }} />
                </div>

                <a href={s.slug} style={{
                  marginTop: 4, padding: 20,
                  background: '#fff', borderRadius: 14,
                  boxShadow: 'inset 0 0 0 1px #ECEFF3',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  textDecoration: 'none', transition: 'all 200ms var(--ease-out)'
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--le-red), 0 8px 20px -12px rgba(205,22,50,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'inset 0 0 0 1px #ECEFF3'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10, background: '#CD1632',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <Icon name="layers" size={20} color="#fff" stroke={1.6} />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)', fontSize: 10,
                        color: '#666D80', letterSpacing: '0.06em', textTransform: 'uppercase'
                      }}>
                        {d.softwareLevelLabel}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20,
                        color: '#0D0D12', marginTop: 2
                      }}>
                        {s.software.name}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: 13, lineHeight: '18px',
                        color: '#36394A', marginTop: 2, maxWidth: 320
                      }}>
                        {s.software.desc}
                      </div>
                    </div>
                  </div>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '10px 14px', borderRadius: 6,
                    background: '#0D0D12', color: '#fff',
                    fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500, flexShrink: 0
                  }}>
                    {d.exploreLabel} <Icon name="arrow" size={14} color="#fff" />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSISTEMA SOFTWARE */}
      <section style={{ background: '#0D0D12', color: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'flex-start', marginBottom: 56 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {d.ecosystemOverline}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', color: '#fff', margin: 0
              }}>
                {d.ecosystemH2}
              </h2>
            </div>
            <p style={{
              fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: '28px',
              color: 'rgba(255,255,255,0.78)', margin: 0, alignSelf: 'flex-end'
            }}>
              {d.ecosystemP}
            </p>
          </div>

          <Spotlight style={{ borderRadius: 18, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
              {d.platforms.map(p => (
                <a key={p.name} href={p.href} style={{
                  padding: 32, background: '#0D0D12', minHeight: 220,
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  textDecoration: 'none', color: '#fff',
                  transition: 'background 200ms var(--ease-out)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#16161c'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#0D0D12'; }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon name="layers" size={20} color="#fff" stroke={1.6} />
                    </div>
                    {!p.live && (
                      <span style={{
                        padding: '4px 9px', borderRadius: 9999,
                        background: 'rgba(255,189,76,0.14)', border: '1px solid rgba(255,189,76,0.3)',
                        fontFamily: 'var(--font-mono)', fontSize: 9, fontWeight: 600,
                        letterSpacing: '0.06em', textTransform: 'uppercase', color: '#FFBD4C'
                      }}>
                        {d.evolvingLabel}
                      </span>
                    )}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24,
                      letterSpacing: '-0.01em', color: '#fff'
                    }}>
                      {p.name}
                    </div>
                    <div style={{
                      marginTop: 8, fontFamily: 'var(--font-display)', fontSize: 14,
                      lineHeight: '20px', color: 'rgba(255,255,255,0.7)'
                    }}>
                      {p.label}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Spotlight>
        </div>
      </section>

      {/* SEO definition block */}
      <CosE />

      {/* FAQ */}
      <FAQ items={d.faqItems} />

      {/* Lead form */}
      <LeadForm />
    </main>
  );
}
