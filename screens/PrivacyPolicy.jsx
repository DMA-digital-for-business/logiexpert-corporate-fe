'use client';

import Icon from '../components/Icon';
import { useLanguage } from '../lib/LanguageContext';
import { useRoutes } from '../lib/routes';

// PrivacyPolicy — Informativa privacy ex artt. 13-14 GDPR.
//
// NOTA LEGALE (da completare a cura del cliente / DPO prima del go-live):
//  - Inserire ragione sociale completa, P.IVA, sede legale del Titolare.
//  - Indicare i dati di contatto del DPO/Responsabile protezione dati, se nominato.
//  - Validare periodi di conservazione e categorie di destinatari con il legale.
// Il testo qui sotto è una base strutturata e coerente, non un placeholder: copre
// esplicitamente il trattamento dati per la selezione del personale (candidature).

const COPY = {
  it: {
    overline: 'Informativa Privacy',
    title: 'Informativa sul trattamento dei dati personali',
    updated: 'Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR).',
    sections: [
      {
        h: '1. Titolare del trattamento',
        p: 'Il Titolare del trattamento è LogiExpert srl, Viale Sarca 336/F, Edificio 16, 20126 Milano (P.IVA IT09900890964). Per ogni richiesta relativa ai tuoi dati personali puoi scrivere a info@logiexpert.com o telefonare al +39 02 80898867.',
      },
      {
        h: '2. Dati che raccogliamo',
        p: 'Trattiamo i dati che ci fornisci volontariamente tramite i form del sito: dati anagrafici e di contatto (nome, cognome, email, telefono, città), informazioni professionali (posizione di interesse, area, datore di lavoro attuale, disponibilità, profilo LinkedIn/portfolio) e il curriculum vitae che alleghi, oltre a eventuali messaggi liberi.',
      },
      {
        h: '3. Finalità del trattamento',
        p: 'I dati inviati tramite il form "Lavora con noi" sono trattati esclusivamente per la selezione del personale: valutazione della candidatura, gestione dei colloqui e delle comunicazioni collegate. I dati inviati tramite gli altri form sono trattati per rispondere alle richieste commerciali o di assistenza. Non utilizziamo i tuoi dati per finalità di marketing senza un tuo consenso specifico.',
      },
      {
        h: '4. Base giuridica',
        p: 'Il trattamento si fonda sul consenso che presti al momento dell’invio (art. 6.1.a GDPR) e sull’adozione di misure precontrattuali su tua richiesta (art. 6.1.b GDPR). Il conferimento dei dati è facoltativo, ma il mancato conferimento dei dati obbligatori rende impossibile la valutazione della candidatura.',
      },
      {
        h: '5. Conservazione dei dati',
        p: 'I dati di candidatura sono conservati per il tempo necessario a valutare il tuo profilo e, in caso di esito negativo, per un periodo limitato utile a considerarti per future opportunità, dopodiché vengono cancellati. Puoi chiederne la rimozione in qualsiasi momento.',
      },
      {
        h: '6. Comunicazione dei dati',
        p: 'I dati sono trattati dal personale autorizzato di LogiExpert e possono essere trattati da fornitori di servizi (es. hosting e servizi di posta transazionale) nominati responsabili del trattamento. I dati non sono diffusi né ceduti a terzi per finalità proprie.',
      },
      {
        h: '7. I tuoi diritti',
        p: 'Puoi esercitare in qualsiasi momento i diritti di accesso, rettifica, cancellazione, limitazione, opposizione e portabilità, oltre a revocare il consenso prestato, scrivendo a info@logiexpert.com. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali.',
      },
    ],
    backHome: 'Torna alla home',
  },
  en: {
    overline: 'Privacy Policy',
    title: 'Personal data processing notice',
    updated: 'Pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR).',
    sections: [
      {
        h: '1. Data controller',
        p: 'The data controller is LogiExpert srl, Viale Sarca 336/F, Edificio 16, 20126 Milan, Italy (VAT IT09900890964). For any request regarding your personal data you can write to info@logiexpert.com or call +39 02 80898867.',
      },
      {
        h: '2. Data we collect',
        p: 'We process the data you voluntarily provide through the website forms: identification and contact data (first name, last name, email, phone, city), professional information (position of interest, area, current employer, availability, LinkedIn/portfolio profile) and the curriculum vitae you attach, as well as any free-text messages.',
      },
      {
        h: '3. Purposes of processing',
        p: 'Data submitted through the "Careers" form is processed exclusively for personnel selection: evaluating your application, managing interviews and related communications. Data submitted through the other forms is processed to respond to sales or support requests. We do not use your data for marketing purposes without your specific consent.',
      },
      {
        h: '4. Legal basis',
        p: 'Processing is based on the consent you give when submitting (Art. 6.1.a GDPR) and on pre-contractual measures taken at your request (Art. 6.1.b GDPR). Providing data is optional, but failure to provide mandatory data makes it impossible to evaluate your application.',
      },
      {
        h: '5. Data retention',
        p: 'Application data is kept for the time needed to evaluate your profile and, in case of a negative outcome, for a limited period useful to consider you for future opportunities, after which it is deleted. You can request its removal at any time.',
      },
      {
        h: '6. Data sharing',
        p: 'Data is processed by authorised LogiExpert staff and may be processed by service providers (e.g. hosting and transactional email services) appointed as data processors. Data is not disclosed or transferred to third parties for their own purposes.',
      },
      {
        h: '7. Your rights',
        p: 'You can exercise at any time the rights of access, rectification, erasure, restriction, objection and portability, and withdraw the consent given, by writing to info@logiexpert.com. You also have the right to lodge a complaint with the data protection authority.',
      },
    ],
    backHome: 'Back to home',
  },
};

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  const routes = useRoutes();
  const c = COPY[lang];

  return (
    <main data-screen-label="PrivacyPolicy" style={{ background: '#fff' }}>
      <section className="le-clip" style={{
        background: '#0D0D12', color: '#fff', padding: '88px 56px 72px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="le-glow" style={{
          position: 'absolute', left: '-10%', top: '10%', width: '70%', height: '140%',
          background: 'radial-gradient(60% 60% at 30% 50%, rgba(205,22,50,0.4) 0%, rgba(0,0,0,0) 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: 820, margin: '0 auto', position: 'relative' }}>
          <div className="overline" style={{ color: 'var(--le-red)' }}>{c.overline}</div>
          <h1 style={{
            marginTop: 16, fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 44, lineHeight: '52px', letterSpacing: '-0.014em', color: '#fff', margin: '16px 0 0',
          }}>
            {c.title}
          </h1>
          <p style={{
            marginTop: 18, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px',
            color: 'rgba(255,255,255,0.7)',
          }}>
            {c.updated}
          </p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 56px 120px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
          {c.sections.map((s) => (
            <div key={s.h}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontWeight: 500,
                fontSize: 22, lineHeight: '30px', letterSpacing: '-0.01em', color: '#0D0D12', margin: '0 0 12px',
              }}>
                {s.h}
              </h2>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, lineHeight: '26px', color: '#36394A', margin: 0 }}>
                {s.p}
              </p>
            </div>
          ))}

          <a href={routes.home} style={{
            alignSelf: 'flex-start', marginTop: 8,
            display: 'inline-flex', alignItems: 'center', gap: 10,
            height: 48, padding: '0 22px', background: '#0D0D12', color: '#fff', borderRadius: 6,
            fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 15, textDecoration: 'none',
          }}>
            {c.backHome} <Icon name="arrow" size={16} color="#fff" />
          </a>
        </div>
      </section>
    </main>
  );
}
