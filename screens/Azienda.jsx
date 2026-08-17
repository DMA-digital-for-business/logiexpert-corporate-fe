'use client';

import Approach from '../components/Approach';
import CosaFacciamo from '../components/CosaFacciamo';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import Icon from '../components/Icon';
import Spotlight from '../components/Spotlight';
import LeadForm from '../components/LeadForm';
import Pillars from '../components/Pillars';
import Sectors from '../components/Sectors';
import SoftwareTrio from '../components/SoftwareTrio';
import StatsBlock from '../components/StatsBlock';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// Azienda — /azienda hub.

const DATA = {
  it: {
    breadcrumb: 'Home',
    pageLabel: 'Azienda',
    overline: 'Azienda · Chi è LogiExpert',
    h1: 'Creiamo valore reale per i processi logistici delle aziende.',
    lead: 'LogiExpert nasce con un obiettivo preciso: accompagnare le aziende in un percorso strutturato di digitalizzazione e ottimizzazione della supply chain, integrando competenze, tecnologie e servizi in un unico modello operativo orientato al risultato.',
    ctaPrimary: 'Conosci il nostro approccio',
    ctaSecondary: 'Contattaci',
    jumpLinks: [
      { l: 'Chi siamo', h: '#chi-siamo' },
      { l: 'Il nostro approccio', h: '#approccio' },
      { l: 'Competenze', h: '#competenze' },
      { l: 'Soluzioni', h: '/soluzioni' },
    ],
    heroFactsLabel: 'LogiExpert in breve',
    heroFacts: [
      { l: 'Esperienza distribuzione', v: '20+' },
      { l: 'Esperienza vendor AIDC', v: '30+' },
      { l: 'Software proprietari', v: '4' },
      { l: 'Territorio coperto', v: 'Italia' },
    ],
    chiSiamoOverline: 'Chi è LogiExpert',
    chiSiamoHeading: 'Identità, storia e vicinanza operativa.',
    chiSiamoLead: 'Un partner che accompagna le aziende in un percorso evolutivo strutturato, pragmatico e orientato ai risultati.',
    chiSiamoFacts: [
      {
        label: 'Chi siamo',
        body: <><strong>LogiExpert</strong> è un <strong>system integrator</strong> e una{' '}<strong>software house</strong> specializzata in <strong>logistica digitale integrata</strong>. La filosofia aziendale si fonda su un principio: <strong>creare valore reale per il cliente</strong>{' '}attraverso soluzioni concrete, progettate sulle effettive esigenze operative — non su modelli standard predefiniti.</>,
      },
      {
        label: 'La nostra storia',
        body: <>Il progetto nasce da competenze maturate in contesti complementari:{' '}<strong>oltre vent'anni nel mondo della distribuzione</strong> e{' '}<strong>oltre trent'anni lato vendor</strong> nel settore <strong>AIDC e tecnologie barcode</strong>. Un mix che unisce conoscenza del mercato, visibilità sulle strategie dei vendor e capacità di orientare le scelte del cliente.</>,
      },
      {
        label: 'Cosa facciamo',
        body: <>Progettiamo e implementiamo sistemi di <strong>tracciabilità pallet</strong>,{' '}<strong>proof of delivery digitale</strong>, <strong>warehouse management</strong> e{' '}<strong>identificazione automatica (AIDC)</strong>. Integriamo i nostri software —{' '}<em>LogiTrace</em>, <em>LogiPod</em>, <em>LogiDealer</em>, <em>LogiStock</em> — con i principali ERP e gestionali già in uso.</>,
      },
      {
        label: 'Come operiamo',
        body: <>Una struttura commerciale di figure <strong>senior e junior distribuite sul territorio</strong>{' '}garantisce tempi di risposta rapidi, conoscenza delle specificità locali e relazioni continuative nel tempo. In un mercato frammentato come quello italiano, la{' '}<strong>vicinanza operativa</strong> è un vantaggio competitivo reale.</>,
      },
    ],
    settoriOverline: 'Dove lavoriamo',
    settoriHeading: 'Specializzati dove la logistica è più complessa.',
    settoriIntro: 'LogiExpert ha scelto consapevolmente di concentrarsi su mercati ben definiti. La verticalità è l\'unico modo per comprendere davvero le dinamiche operative, le criticità e le opportunità di un settore.',
    settoriItems: [
      {
        title: 'Transportation & Logistics',
        body: 'Dalla missione del corriere al conteggio EPAL con il cliente: la catena completa dal magazzino alla firma di consegna, senza fogli volanti.',
        tag: 'Pallet · POD · Picking · Flotta',
        icon: 'truck',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/soluzioni',
      },
      {
        title: 'Retail & Distribuzione',
        body: 'Riassortimento, inventari ciclici, store-shipment. Processi coerenti tra back-office e punto cassa, su reti distribuite su scala nazionale.',
        tag: 'Inventario · POS · DC · Store',
        icon: 'retail',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/soluzioni',
      },
      {
        title: 'Manufacturing',
        body: 'Tracciabilità di lotto, gestione del WIP, etichettatura industriale. Per impianti dove ogni fermo linea è un costo diretto.',
        tag: 'Lotto · WIP · Etichettatura · ERP',
        icon: 'factory',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/soluzioni',
      },
    ],
    approccioOverline: 'Il nostro approccio',
    approccioHeading: 'Ascolto, analisi, progettazione, integrazione.',
    approccioIntro: 'Non proponiamo soluzioni standard. Costruiamo un percorso a partire dalla realtà operativa del cliente — con flessibilità, rapidità di risposta e capacità di adattamento. Il sito stesso segue la gerarchia Azienda → Settori → Soluzioni → Software.',
    approccioSteps: [
      { n: '01', title: 'Ascolto', body: 'Comprendiamo a fondo i processi esistenti e le specificità operative del cliente. Non partiamo dal nostro catalogo: partiamo dal suo contesto.' },
      { n: '02', title: 'Analisi strutturata', body: 'Individuiamo le aree di miglioramento e i punti di rottura nei flussi, unendo visione strategica senior e operatività junior sul campo.' },
      { n: '03', title: 'Progettazione su misura', body: 'Costruiamo percorsi progettuali personalizzati: flessibili, rapidamente implementabili, capaci di evolvere nel tempo con il cliente.' },
      { n: '04', title: 'Integrazione tecnologica', body: 'Implementiamo la soluzione — software proprietario e hardware partner — cucita sul sistema informativo già in uso, senza sostituire ciò che funziona.' },
    ],
    approccioCtaLabel: 'Parla con un consulente',
    competenzeOverline: 'Competenze ed esperienza',
    competenzeHeading: 'Un patrimonio di competenze costruito in trent\'anni.',
    competenzeIntro: 'L\'unione tra conoscenza della distribuzione ed esperienza lato vendor permette non solo di proporre soluzioni tecniche, ma di orientare le scelte del cliente in funzione dell\'evoluzione del mercato.',
    pilastriOverline: 'La nostra offerta',
    pilastriHeading: 'Quattro pilastri che lavorano come uno solo.',
    pilastriIntro: 'LogiExpert non vende prodotti isolati. Compone soluzioni che attraversano hardware, software, integrazione e servizio — partendo sempre dal problema del cliente, mai dal catalogo.',
    pilastriCtaLabel: 'Esplora le soluzioni',
    visioneOverline: 'Dove stiamo andando',
    visioneH2: 'La supply chain del futuro passa per AI, robotica e automazione avanzata.',
    visioneP: 'Investiamo su tecnologie emergenti non come fine in sé, ma per integrarle concretamente nei processi e generare valore reale e misurabile.',
    visioneItems: [
      { icon: 'zap', title: 'Intelligenza Artificiale', body: 'Ottimizzazione dei flussi logistici e riduzione degli errori operativi tramite modelli predittivi.' },
      { icon: 'cog', title: 'Robotica avanzata', body: 'Automazione fisica per magazzini ad alta intensità operativa.' },
      { icon: 'truck', title: 'Robot mobili autonomi (AMR)', body: 'Movimentazione autonoma del materiale in ambienti logistici complessi.' },
      { icon: 'user', title: 'Supporto umanoide', body: 'Tecnologie emergenti per il supporto operativo nelle attività ad alto contenuto manuale.' },
    ],
    softwareOverline: 'Il nostro metodo in pratica',
    softwareHeading: 'Quattro software proprietari nati dai problemi reali dei nostri settori.',
    softwareIntro: 'LogiTrace, LogiPod e LogiStock sono il prodotto diretto del nostro approccio: costruiti internamente per risolvere problemi specifici in contesti specifici, non soluzioni generiche adattate.',
    softwareCtaLabel: 'Esplora tutte le soluzioni',
    ctaTitle: 'Vuoi conoscere LogiExpert da vicino?',
    ctaBody: 'Raccontaci il tuo contesto operativo. Un consulente senior analizza il tuo caso e ti propone una direzione concreta — senza call center, senza newsletter.',
    ctaPrimary2: 'Contattaci',
    ctaSecondary2: 'Scopri le soluzioni',
    faqItems: [
      { q: 'Chi è LogiExpert?', a: "LogiExpert è un system integrator e software house specializzato in logistica digitale integrata per la supply chain. Unisce oltre vent'anni di esperienza nella distribuzione e oltre trent'anni lato vendor nel settore AIDC, con quattro software proprietari (LogiTrace, LogiPod, LogiDealer, LogiStock) e una struttura commerciale distribuita sul territorio italiano." },
      { q: 'In quali settori è specializzata LogiExpert?', a: 'LogiExpert ha scelto una forte verticalità su tre mercati: Transportation & Logistics, Retail e Manufacturing. La specializzazione consente di comprendere le dinamiche operative, le criticità e le opportunità di ciascun contesto e di offrire soluzioni realmente aderenti alle esigenze del cliente.' },
      { q: "Qual è l'approccio di LogiExpert ai progetti?", a: "Ogni progetto parte dall'ascolto dei processi esistenti, prosegue con un'analisi strutturata delle aree di miglioramento, la progettazione di soluzioni su misura e l'integrazione tecnologica con i sistemi già in uso. LogiExpert non propone soluzioni standard: costruisce percorsi personalizzati, flessibili e capaci di evolvere nel tempo." },
      { q: 'Su quali tecnologie investe LogiExpert per il futuro?', a: "LogiExpert è convinta che l'evoluzione della supply chain passerà sempre più per automazione avanzata, intelligenza artificiale e interazione uomo-macchina. Per questo investe su AI, robotica avanzata, robot mobili autonomi (AMR) e soluzioni umanoidi per il supporto operativo — sempre con l'obiettivo di integrarle concretamente nei processi e generare valore misurabile." },
    ],
  },
  en: {
    breadcrumb: 'Home',
    pageLabel: 'Company',
    overline: 'Company · Who is LogiExpert',
    h1: 'We create real value for companies\' logistics processes.',
    lead: 'LogiExpert was founded with a precise objective: to accompany companies on a structured path of digitalisation and supply chain optimisation, integrating skills, technologies and services into a single results-oriented operational model.',
    ctaPrimary: 'Learn about our approach',
    ctaSecondary: 'Contact us',
    jumpLinks: [
      { l: 'About us', h: '#chi-siamo' },
      { l: 'Our approach', h: '#approccio' },
      { l: 'Expertise', h: '#competenze' },
      { l: 'Solutions', h: '/en/solutions' },
    ],
    heroFactsLabel: 'LogiExpert at a glance',
    heroFacts: [
      { l: 'Distribution experience', v: '20+' },
      { l: 'AIDC vendor experience', v: '30+' },
      { l: 'Proprietary software', v: '4' },
      { l: 'Territory covered', v: 'Italy' },
    ],
    chiSiamoOverline: 'Who is LogiExpert',
    chiSiamoHeading: 'Identity, history and operational proximity.',
    chiSiamoLead: 'A partner that accompanies companies on a structured, pragmatic and results-oriented evolutionary journey.',
    chiSiamoFacts: [
      {
        label: 'Who we are',
        body: <><strong>LogiExpert</strong> is a <strong>system integrator</strong> and{' '}<strong>software house</strong> specializing in <strong>integrated digital logistics</strong>. The company philosophy is built on one principle: <strong>creating real value for the customer</strong>{' '}through concrete solutions, designed around actual operational needs — not predefined standard models.</>,
      },
      {
        label: 'Our history',
        body: <>The project was born from expertise developed in complementary contexts:{' '}<strong>over twenty years in the distribution world</strong> and{' '}<strong>over thirty years on the vendor side</strong> in the <strong>AIDC and barcode technology</strong> sector. A mix that combines market knowledge, visibility into vendor strategies and the ability to guide customer choices.</>,
      },
      {
        label: 'What we do',
        body: <>We design and implement <strong>pallet tracking</strong> systems,{' '}<strong>digital proof of delivery</strong>, <strong>warehouse management</strong> and{' '}<strong>automatic identification (AIDC)</strong>. We integrate our software —{' '}<em>LogiTrace</em>, <em>LogiPod</em>, <em>LogiDealer</em>, <em>LogiStock</em> — with the major ERPs and management systems already in use.</>,
      },
      {
        label: 'How we operate',
        body: <>A commercial structure of <strong>senior and junior profiles distributed across the territory</strong>{' '}ensures fast response times, knowledge of local specifics and ongoing relationships over time. In a fragmented market like Italy,{' '}<strong>operational proximity</strong> is a real competitive advantage.</>,
      },
    ],
    settoriOverline: 'Where we work',
    settoriHeading: 'Specialised where logistics is most complex.',
    settoriIntro: 'LogiExpert has consciously chosen to focus on well-defined markets. Verticality is the only way to truly understand the operational dynamics, critical issues and opportunities of a sector.',
    settoriItems: [
      {
        title: 'Transportation & Logistics',
        body: 'From the courier\'s mission to EPAL pallet counting with the customer: the complete chain from warehouse to delivery signature, without paper slips.',
        tag: 'Pallet · POD · Picking · Fleet',
        icon: 'truck',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/en/solutions',
      },
      {
        title: 'Retail & Distribution',
        body: 'Replenishment, cycle counts, store-shipment. Consistent processes between back-office and point of sale, across nationally distributed networks.',
        tag: 'Inventory · POS · DC · Store',
        icon: 'retail',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/en/solutions',
      },
      {
        title: 'Manufacturing',
        body: 'Batch tracking, WIP management, industrial labelling. For plants where every line stoppage is a direct cost.',
        tag: 'Batch · WIP · Labelling · ERP',
        icon: 'factory',
        photo: 'url(/assets/hero-warehouse.jpg)',
        href: '/en/solutions',
      },
    ],
    approccioOverline: 'Our approach',
    approccioHeading: 'Listen, analyse, design, integrate.',
    approccioIntro: 'We don\'t propose standard solutions. We build a path starting from the customer\'s operational reality — with flexibility, speed of response and adaptability. The site itself follows the hierarchy Company → Sectors → Solutions → Software.',
    approccioSteps: [
      { n: '01', title: 'Listening', body: 'We deeply understand the customer\'s existing processes and operational specifics. We don\'t start from our catalogue: we start from their context.' },
      { n: '02', title: 'Structured analysis', body: 'We identify areas for improvement and bottlenecks in the flows, combining senior strategic vision with junior field operations.' },
      { n: '03', title: 'Tailored design', body: 'We build personalised project paths: flexible, rapidly implementable, capable of evolving over time with the customer.' },
      { n: '04', title: 'Technological integration', body: 'We implement the solution — proprietary software and partner hardware — tailored to the information system already in use, without replacing what works.' },
    ],
    approccioCtaLabel: 'Talk to a consultant',
    competenzeOverline: 'Expertise & experience',
    competenzeHeading: 'A wealth of expertise built over thirty years.',
    competenzeIntro: 'The combination of distribution knowledge and vendor-side experience allows us not only to propose technical solutions, but to guide customer choices based on market evolution.',
    pilastriOverline: 'Our offering',
    pilastriHeading: 'Four pillars working as one.',
    pilastriIntro: 'LogiExpert does not sell isolated products. It composes solutions spanning hardware, software, integration and service — always starting from the customer\'s problem, never from the catalogue.',
    pilastriCtaLabel: 'Explore solutions',
    visioneOverline: 'Where we are heading',
    visioneH2: 'The supply chain of the future runs through AI, robotics and advanced automation.',
    visioneP: 'We invest in emerging technologies not as an end in themselves, but to integrate them concretely into processes and generate real, measurable value.',
    visioneItems: [
      { icon: 'zap', title: 'Artificial Intelligence', body: 'Optimisation of logistics flows and reduction of operational errors through predictive models.' },
      { icon: 'cog', title: 'Advanced robotics', body: 'Physical automation for high-intensity operational warehouses.' },
      { icon: 'truck', title: 'Autonomous mobile robots (AMR)', body: 'Autonomous material movement in complex logistics environments.' },
      { icon: 'user', title: 'Humanoid support', body: 'Emerging technologies for operational support in high manual content activities.' },
    ],
    softwareOverline: 'Our method in practice',
    softwareHeading: 'Four proprietary software tools born from the real problems of our sectors.',
    softwareIntro: 'LogiTrace, LogiPod and LogiStock are the direct product of our approach: built internally to solve specific problems in specific contexts, not generic adapted solutions.',
    softwareCtaLabel: 'Explore all solutions',
    ctaTitle: 'Want to get to know LogiExpert better?',
    ctaBody: 'Tell us about your operational context. A senior consultant analyses your case and proposes a concrete direction — no call centre, no newsletter.',
    ctaPrimary2: 'Contact us',
    ctaSecondary2: 'Explore solutions',
    faqItems: [
      { q: 'Who is LogiExpert?', a: "LogiExpert is a system integrator and software house specializing in integrated digital logistics for the supply chain. It combines over twenty years of experience in distribution and over thirty years on the vendor side in the AIDC sector, with four proprietary software products (LogiTrace, LogiPod, LogiDealer, LogiStock) and a commercial structure distributed across Italy." },
      { q: 'Which sectors does LogiExpert specialise in?', a: 'LogiExpert has chosen strong verticality in three markets: Transportation & Logistics, Retail and Manufacturing. Specialisation allows the company to understand the operational dynamics, critical issues and opportunities of each context and to offer solutions genuinely aligned with customer needs.' },
      { q: 'What is LogiExpert\'s approach to projects?', a: 'Every project starts with listening to existing processes, continues with a structured analysis of areas for improvement, the design of tailored solutions and technological integration with systems already in use. LogiExpert does not propose standard solutions: it builds personalised, flexible paths capable of evolving over time.' },
      { q: 'Which technologies is LogiExpert investing in for the future?', a: 'LogiExpert believes that the evolution of the supply chain will increasingly pass through advanced automation, artificial intelligence and human-machine interaction. It therefore invests in AI, advanced robotics, autonomous mobile robots (AMR) and humanoid solutions for operational support — always with the aim of concretely integrating them into processes and generating measurable value.' },
    ],
  },
};

export default function Azienda() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const d = DATA[lang];

  return (
    <main data-screen-label="Azienda" style={{ background: '#fff' }}>

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
            <span style={{ color: '#fff', fontFamily: 'var(--font-mono)' }}>{d.pageLabel}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64, alignItems: 'flex-end', marginTop: 40 }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)' }}>{d.overline}</div>
              <h1 style={{
                marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 60, lineHeight: '68px', letterSpacing: '-0.014em',
                color: '#fff', maxWidth: 900, margin: '16px 0 0'
              }}>
                {d.h1}
              </h1>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)',
                fontSize: 18, lineHeight: '28px', color: 'rgba(255,255,255,0.82)', maxWidth: 720
              }}>
                {d.lead}
              </p>

              <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#approccio" style={{
                  height: 48, padding: '0 22px', display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'var(--le-red)', color: '#fff', borderRadius: 6,
                  fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15,
                  textDecoration: 'none', boxShadow: '0 2px 4px rgba(149,18,43,0.25)'
                }}>
                  {d.ctaPrimary} <Icon name="arrow" size={16} color="#fff" />
                </a>
                <a href={routes.contact} style={{
                  height: 48, padding: '0 22px', display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: 'transparent', color: '#fff', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.28)',
                  fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none'
                }}>
                  {d.ctaSecondary}
                </a>
              </div>

              <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {d.jumpLinks.map(j => (
                  <a key={j.l} href={j.h} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '8px 14px', borderRadius: 9999,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.16)',
                    color: '#fff', textDecoration: 'none',
                    fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500
                  }}>
                    {j.l}
                    <Icon name="chevR" size={12} color="rgba(255,255,255,0.5)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Aside — LogiExpert in breve */}
            <div style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 18, padding: 28
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.6)',
                letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 18
              }}>
                {d.heroFactsLabel}
              </div>
              {d.heroFacts.map((row, i) => (
                <div key={row.l} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                  padding: '14px 0', gap: 14,
                  borderTop: i > 0 ? '1px solid rgba(255,255,255,0.10)' : 'none'
                }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>
                    {row.l}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--le-red)', fontWeight: 500, whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <CosaFacciamo
        id="chi-siamo"
        overline={d.chiSiamoOverline}
        heading={d.chiSiamoHeading}
        lead={d.chiSiamoLead}
        facts={d.chiSiamoFacts}
        trust={null}
      />

      {/* SETTORI */}
      <Sectors
        overline={d.settoriOverline}
        heading={d.settoriHeading}
        intro={d.settoriIntro}
        items={d.settoriItems}
      />

      {/* APPROCCIO */}
      <Approach
        overline={d.approccioOverline}
        heading={d.approccioHeading}
        intro={d.approccioIntro}
        steps={d.approccioSteps}
        cta={{ label: d.approccioCtaLabel, href: routes.contact }}
      />
      <div id="approccio" style={{ position: 'relative', top: -126 }} />

      {/* COMPETENZE */}
      <StatsBlock
        id="competenze"
        overline={d.competenzeOverline}
        heading={d.competenzeHeading}
        intro={d.competenzeIntro}
      />

      {/* PILASTRI */}
      <Pillars
        id="pilastri"
        overline={d.pilastriOverline}
        heading={d.pilastriHeading}
        intro={d.pilastriIntro}
        cta={{ label: d.pilastriCtaLabel, href: routes.solutions }}
      />

      {/* INNOVAZIONE E VISIONE FUTURA */}
      <section className="le-clip" style={{ background: '#0D0D12', color: '#fff', padding: '120px 56px', position: 'relative', overflow: 'hidden' }}>
        <div className="le-glow" style={{
          position: 'absolute', right: '-10%', top: '-20%', width: '55%', height: '170%',
          background: 'radial-gradient(60% 60% at 70% 50%, rgba(205,22,50,0.4) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: 1328, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'flex-start' }}>
            <div>
              <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>{d.visioneOverline}</div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 40, lineHeight: '48px', letterSpacing: '-0.012em', color: '#fff', margin: 0
              }}>
                {d.visioneH2}
              </h2>
              <p style={{
                marginTop: 22, fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: '26px',
                color: 'rgba(255,255,255,0.78)', maxWidth: 460
              }}>
                {d.visioneP}
              </p>
            </div>

            <Spotlight style={{ borderRadius: 18, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'rgba(255,255,255,0.08)' }}>
                {d.visioneItems.map((v, i) => (
                  <div key={v.title} data-reveal-child style={{
                    padding: 32, background: '#0D0D12',
                    display: 'flex', flexDirection: 'column', gap: 14, minHeight: 200,
                    '--reveal-i': i
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <Icon name={v.icon} size={22} color="#fff" stroke={1.6} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, lineHeight: '26px', color: '#fff' }}>
                      {v.title}
                    </div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, lineHeight: '21px', color: 'rgba(255,255,255,0.7)' }}>
                      {v.body}
                    </div>
                  </div>
                ))}
              </div>
            </Spotlight>
          </div>
        </div>
      </section>

      {/* SOFTWARE */}
      <SoftwareTrio
        overline={d.softwareOverline}
        heading={d.softwareHeading}
        intro={d.softwareIntro}
        cta={{ label: d.softwareCtaLabel, href: routes.solutions }}
      />

      {/* TEASER — Lavora con noi */}
      <section style={{ background: '#fff', padding: '0 56px 120px' }}>
        <div className="le-clip" style={{
          maxWidth: 1328, margin: '0 auto',
          background: '#0D0D12', color: '#fff', borderRadius: 24, padding: 56,
          position: 'relative', overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 48, alignItems: 'center',
        }}>
          <div className="le-glow" style={{
            position: 'absolute', right: '-8%', top: '-40%', width: '55%', height: '180%',
            background: 'radial-gradient(50% 50% at 60% 50%, rgba(205,22,50,0.4) 0%, rgba(0,0,0,0) 65%)',
            pointerEvents: 'none',
          }} />
          <div style={{ position: 'relative' }}>
            <div className="overline" style={{ color: 'var(--le-red)', marginBottom: 16 }}>
              {lang === 'en' ? 'Careers' : 'Lavora con noi'}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 36, lineHeight: '44px', letterSpacing: '-0.012em', color: '#fff', margin: 0, maxWidth: 620,
            }}>
              {lang === 'en'
                ? 'Grow with us in digital logistics.'
                : 'Cresci con noi nella logistica digitale.'}
            </h2>
            <p style={{
              marginTop: 16, fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: '26px',
              color: 'rgba(255,255,255,0.8)', maxWidth: 560,
            }}>
              {lang === 'en'
                ? 'We are looking for people who want to work on proprietary software, system integration and B2B eCommerce. Discover our open positions.'
                : 'Cerchiamo persone che vogliano lavorare su software proprietari, system integration ed eCommerce B2B. Scopri le posizioni aperte.'}
            </p>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-start' }}>
            <a href={routes.careers} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              height: 52, padding: '0 28px',
              background: 'var(--le-red)', color: '#fff', borderRadius: 8,
              fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none',
              boxShadow: '0 2px 4px rgba(149,18,43,0.25)',
            }}>
              {lang === 'en' ? 'Open positions' : 'Posizioni aperte'} <Icon name="arrow" size={16} color="#fff" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <CTABanner
        title={d.ctaTitle}
        body={d.ctaBody}
        primary={d.ctaPrimary2}
        primaryHref={routes.contact}
        secondary={d.ctaSecondary2}
        secondaryHref={routes.solutions}
      />

      {/* FAQ */}
      <FAQ items={d.faqItems} />

      {/* Lead form */}
      <LeadForm />
    </main>
  );
}
