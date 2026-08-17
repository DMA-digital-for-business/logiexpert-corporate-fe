'use client';

import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Icon from '../components/Icon';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Contatti — pagina contatti dedicata.

const DATA = {
  it: {
    breadcrumb: 'Home',
    overline: 'Contatti',
    h1: 'Parliamo del tuo processo.\nNessun call center, nessun bot.',
    subhead: 'Quattro canali, ognuno con un destinatario interno specifico. Scegli quello giusto per la tua richiesta — ti risponde la persona giusta.',
    formQualifiesOn: 'Il form qualifica su',
    formFields: [
      { l: 'Azienda e settore di appartenenza', v: '01' },
      { l: 'Contatto diretto',                  v: '02' },
      { l: 'Tipologia di richiesta',             v: '03' },
      { l: 'Area di interesse ed esigenza',      v: '04' },
    ],
    channelsOverline: 'Scegli il canale giusto',
    channelsH2: 'Quattro modi di parlarci.',
    channelsP: 'Ogni canale ha un destinatario interno specifico. Scegliere quello giusto significa una risposta più rapida e più qualificata.',
    channels: [
      {
        icon: 'send',
        eyebrow: 'Pre-vendita',
        title: 'Parla con un consulente commerciale',
        body: 'Per nuovi progetti, demo dei software o richieste di preventivo. Un consulente specializzato nel tuo settore ti contatta direttamente.',
        cta: 'Richiedi una demo',
        ctaHref: '#form',
        tag: 'preventivo · demo · scoping',
      },
      {
        icon: 'cog',
        eyebrow: 'Supporto tecnico',
        title: 'Assistenza clienti attivi',
        body: 'Helpdesk dedicato a chi ha già un contratto LogiExpert. Apertura ticket sul portale clienti, telefono diretto o email.',
        cta: 'Apri un ticket',
        ctaHref: 'mailto:assistenza@logiexpert.com',
        tag: 'helpdesk · assistenza · contratti',
      },
      {
        icon: 'building',
        eyebrow: 'Amministrazione',
        title: 'Fatturazione e contratti',
        body: 'Per questioni amministrative: fatture, contratti, ordini di acquisto, dati anagrafici.',
        cta: 'Scrivici',
        ctaHref: 'mailto:amministrazione@logiexpert.it',
        tag: 'fatture · contratti · PA',
      },
      {
        icon: 'user',
        eyebrow: 'HR & Carriere',
        title: 'Lavora con noi',
        body: 'Stiamo cercando software engineer, sistemisti, consulenti di processo e tecnici on-site. Inviaci il tuo CV o consulta le posizioni aperte.',
        cta: 'Posizioni aperte',
        ctaHref: '/azienda/lavora-con-noi',
        tag: 'tech · sales · field',
      },
    ],
    faqItems: [
      {
        q: 'Come funziona la qualificazione della richiesta?',
        a: 'Il form raccoglie informazioni su azienda e settore, contatto diretto, tipologia di richiesta (software, hardware, soluzione integrata, automazione, servizi) e area di interesse specifica (LogiTrace, LogiPod, LogiDealer, LogiStock, hardware AIDC, automazione, servizi). Questo permette di assegnare la richiesta al consulente più adatto.',
      },
      {
        q: 'Posso prenotare una demo dei software (LogiTrace, LogiPod, LogiStock)?',
        a: 'Sì. Seleziona il software di interesse nell\'area di interesse del form e indica una breve descrizione del tuo processo. Un consulente di prodotto ti contatterà per organizzare una sessione direttamente sul tuo contesto operativo.',
      },
    ],
  },
  en: {
    breadcrumb: 'Home',
    overline: 'Contact',
    h1: 'Let\'s talk about your process.\nNo call centre, no bot.',
    subhead: 'Four channels, each with a specific internal recipient. Choose the right one for your request — the right person responds.',
    formQualifiesOn: 'The form qualifies on',
    formFields: [
      { l: 'Company and sector',          v: '01' },
      { l: 'Direct contact',              v: '02' },
      { l: 'Type of request',             v: '03' },
      { l: 'Area of interest and need',   v: '04' },
    ],
    channelsOverline: 'Choose the right channel',
    channelsH2: 'Four ways to reach us.',
    channelsP: 'Each channel has a specific internal recipient. Choosing the right one means a faster and more qualified response.',
    channels: [
      {
        icon: 'send',
        eyebrow: 'Pre-sales',
        title: 'Talk to a sales consultant',
        body: 'For new projects, software demos or quote requests. A consultant specialised in your sector will contact you directly.',
        cta: 'Request a demo',
        ctaHref: '#form',
        tag: 'quote · demo · scoping',
      },
      {
        icon: 'cog',
        eyebrow: 'Technical support',
        title: 'Active customer support',
        body: 'Dedicated helpdesk for customers with a LogiExpert contract. Open a ticket on the customer portal, direct phone or email.',
        cta: 'Open a ticket',
        ctaHref: 'mailto:assistenza@logiexpert.com',
        tag: 'helpdesk · support · contracts',
      },
      {
        icon: 'building',
        eyebrow: 'Administration',
        title: 'Billing and contracts',
        body: 'For administrative matters: invoices, contracts, purchase orders, company details.',
        cta: 'Write to us',
        ctaHref: 'mailto:amministrazione@logiexpert.it',
        tag: 'invoices · contracts · PA',
      },
      {
        icon: 'user',
        eyebrow: 'HR & Careers',
        title: 'Work with us',
        body: 'We are looking for software engineers, system administrators, process consultants and on-site technicians. Send us your CV or check open positions.',
        cta: 'Open positions',
        ctaHref: '/en/about/careers',
        tag: 'tech · sales · field',
      },
    ],
    faqItems: [
      {
        q: 'How does request qualification work?',
        a: 'The form collects information on company and sector, direct contact, type of request (software, hardware, integrated solution, automation, services) and specific area of interest (LogiTrace, LogiPod, LogiDealer, LogiStock, AIDC hardware, automation, services). This allows the request to be assigned to the most suitable consultant.',
      },
      {
        q: 'Can I book a demo of the software (LogiTrace, LogiPod, LogiStock)?',
        a: 'Yes. Select the software of interest in the area of interest field and provide a brief description of your process. A product consultant will contact you to arrange a session focused on your operational context.',
      },
    ],
  },
};

export default function Contatti() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const d = DATA[lang];
  const h1Lines = d.h1.split('\n');

  return (
    <main data-screen-label="Contatti" style={{ background: '#fff' }}>

      {/* HERO */}
      <section className="le-clip" style={{
        background: '#0D0D12', color: '#fff', padding: '88px 56px 72px',
        position: 'relative', overflow: 'hidden'
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-10%', top: '10%', width: '70%', height: '140%',
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
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{d.overline}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'flex-end', marginTop: 40 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)' }}>{d.overline}</div>
              <h1 style={{
                marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 60, lineHeight: '68px', letterSpacing: '-0.014em',
                color: '#fff', maxWidth: 900, margin: '16px 0 0'
              }}>
                {h1Lines[0]}<br/>{h1Lines[1]}
              </h1>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)',
                fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.82)', maxWidth: 720
              }}>
                {d.subhead}
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18, padding: 28
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18
              }}>
                {d.formQualifiesOn}
              </div>
              {d.formFields.map((row, i) => (
                <div key={row.l} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '12px 0', gap: 14,
                  borderTop: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none'
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                    {row.l}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--le-red)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CANALI DI CONTATTO */}
      <section style={{ background: '#fff', padding: '120px 56px' }}>
        <div style={{ maxWidth: 1328, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, gap: 32 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
                {d.channelsOverline}
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em',
                color: '#0D0D12', margin: 0
              }}>
                {d.channelsH2}
              </h2>
            </div>
            <p style={{
              maxWidth: 420, fontFamily: 'var(--font-display)',
              fontSize: 16, lineHeight: '24px', color: '#36394A', margin: 0
            }}>
              {d.channelsP}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
            {d.channels.map(c => (
              <div key={c.title} style={{
                background: '#F6F8FA', borderRadius: 18, padding: 32,
                display: 'flex', flexDirection: 'column', gap: 18, minHeight: 280
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12, background: '#0D0D12',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <Icon name={c.icon} size={22} color="#fff" stroke={1.6} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, color: '#666D80',
                    letterSpacing: '0.06em', textTransform: 'uppercase'
                  }}>
                    {c.tag}
                  </span>
                </div>
                <div>
                  <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 6 }}>{c.eyebrow}</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 500,
                    fontSize: 24, lineHeight: '30px', letterSpacing: '-0.005em',
                    color: '#0D0D12', margin: 0
                  }}>
                    {c.title}
                  </h3>
                </div>
                <p style={{
                  fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: '22px',
                  color: '#36394A', margin: 0, flex: 1
                }}>
                  {c.body}
                </p>
                <a href={c.ctaHref} style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '0 18px', height: 44,
                  background: '#0D0D12', color: '#fff', borderRadius: 6,
                  fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 14, textDecoration: 'none'
                }}>
                  {c.cta} <Icon name="arrow" size={14} color="#fff" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM QUALIFICANTE */}
      <ContactForm />

      {/* FAQ */}
      <FAQ items={d.faqItems} />
    </main>
  );
}
