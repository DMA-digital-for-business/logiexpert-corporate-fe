// careersData.js — dati bilingue per la pagina "Lavora con noi" / "Careers".
// Stesso pattern di soluzioniData.js: copy per lingua + dati strutturati.
//
// NOTA CONTENUTI (da confermare col cliente HR — Caterina Alessi):
//  - JOBS_DATA: le posizioni qui sotto sono realistiche ma indicative; vanno
//    sostituite con l'elenco reale delle posizioni aperte (titolo, area, sede,
//    responsabilità, requisiti, tipo contratto) fornito da HR.
//  - STATS: i numeri riprendono quelli già usati altrove nel sito (30+ anni,
//    4 software) — confermare team/organico ("PERSONE").
//  - CAREERS_COPY.it.faq / .en.faq: verificare tempi di risposta e processo di
//    selezione reali prima della pubblicazione.

export const CAREERS_COPY = {
  it: {
    breadcrumbHome: 'Home',
    breadcrumbAbout: 'Azienda',
    breadcrumbCurrent: 'Lavora con noi',

    // Hero
    overline: 'Lavora con noi',
    heroTitle: 'Costruiamo il futuro della\nlogistica digitale. Insieme.',
    heroSubhead: 'Software proprietari, system integration ed eCommerce B2B: da oltre trent’anni digitalizziamo la supply chain delle aziende italiane. Cerchiamo persone che vogliano crescere con noi.',
    heroCtaPrimary: 'Scopri le posizioni aperte',
    heroCtaSecondary: 'Candidatura spontanea',

    // Perché LogiExpert
    valuesOverline: 'Perché LogiExpert',
    valuesHeading: 'Un posto dove le competenze contano davvero.',
    valuesIntro: 'Siamo una PMI italiana con la solidità di trent’anni di esperienza e l’energia di una software house. Qui il tuo lavoro ha un impatto concreto e visibile.',
    values: [
      {
        icon: 'zap',
        title: 'Cresci con noi',
        body: 'Percorsi di crescita reali su tecnologie e processi della supply chain, affiancato da figure senior con esperienza diretta sul campo.',
      },
      {
        icon: 'cog',
        title: 'Innova ogni giorno',
        body: 'Lavori su software proprietari — LogiTrace, LogiPod, LogiStock — non su prodotti di terze parti. Le tue idee entrano nel prodotto.',
      },
      {
        icon: 'user',
        title: 'Lavora in squadra',
        body: 'Team piccoli e trasversali, comunicazione diretta, niente burocrazia inutile. Commerciale, sviluppo e field lavorano fianco a fianco.',
      },
      {
        icon: 'shield',
        title: 'Costruisci il tuo percorso',
        body: 'Autonomia e responsabilità fin da subito, con obiettivi chiari e la libertà di proporre soluzioni migliori.',
      },
    ],

    // Numeri
    statsOverline: 'LogiExpert in numeri',
    statsHeading: 'Trent’anni di esperienza, un team che continua a crescere.',

    // Posizioni aperte
    positionsOverline: 'Posizioni aperte',
    positionsHeading: 'Trova il ruolo giusto per te.',
    positionsIntro: 'Filtra per area e apri la posizione per leggere responsabilità e requisiti. Non trovi il ruolo adatto? Inviaci una candidatura spontanea.',
    filterAllLabel: 'Tutte le aree',
    positionsEmpty: 'Nessuna posizione aperta in questa area al momento. Inviaci comunque una candidatura spontanea.',
    labelResponsibilities: 'Cosa farai',
    labelRequirements: 'Cosa cerchiamo',
    labelLocation: 'Sede',
    labelContract: 'Contratto',
    applyToPosition: 'Candidati per questa posizione',

    // Form
    formOverline: 'Candidati',
    formHeading: 'Inviaci la tua candidatura.',
    formIntro: 'Compila il form e allega il tuo CV. Se ti candidi per una posizione specifica, seleziona quella corrispondente; altrimenti scegli "Candidatura spontanea".',
    spontaneous: 'Candidatura spontanea',
    fields: {
      nome: 'Nome',
      cognome: 'Cognome',
      email: 'Email',
      telefono: 'Telefono',
      citta: 'Città',
      linkedin: 'LinkedIn / Portfolio',
      posizione: 'Posizione di interesse',
      area: 'Area desiderata',
      datore: 'Datore di lavoro attuale',
      disponibilita: 'Disponibilità (data indicativa)',
      cv: 'Carica il tuo CV',
      messaggio: 'Messaggio / breve presentazione',
    },
    cvHint: 'PDF, DOC o DOCX — max 5MB',
    optional: 'facoltativo',
    selectPlaceholder: 'Seleziona…',
    privacyText: 'Dichiaro di aver preso visione dell’Informativa Privacy e autorizzo il trattamento dei miei dati personali ai fini della selezione del personale, ai sensi del Regolamento (UE) 2016/679 (GDPR).',
    privacyLinkLabel: 'Informativa Privacy',
    submit: 'Invia candidatura',
    submitting: 'Invio in corso…',
    // Aree per candidatura spontanea (allineate ai profili aziendali reali — da confermare)
    areas: [
      'Commerciale',
      'Marketing',
      'Amministrazione',
      'Ingegneria & Sviluppo Software',
      'Tecnico & Field Operations',
    ],
    errors: {
      required: 'Campo obbligatorio',
      email: 'Inserisci un indirizzo email valido',
      cvType: 'Formato non valido. Carica un file PDF, DOC o DOCX.',
      cvSize: 'Il file supera i 5MB.',
      privacy: 'Devi accettare l’informativa privacy per procedere.',
      generic: 'Si è verificato un errore durante l’invio. Riprova o scrivici a info@logiexpert.com.',
    },

    // FAQ
    faqOverline: 'Domande frequenti',
    faqHeading: 'Come funziona la candidatura.',
    faq: [
      {
        q: 'In quanto tempo ricevo una risposta?',
        a: 'Esaminiamo ogni candidatura e ricontattiamo i profili in linea con le posizioni aperte, di norma entro due settimane. Anche in assenza di posizioni immediate, conserviamo il tuo CV per opportunità future, nel rispetto dell’informativa privacy.',
      },
      {
        q: 'Come funziona il processo di selezione?',
        a: 'Dopo una prima valutazione del CV segue un colloquio conoscitivo con HR, un colloquio tecnico o manageriale con il team di riferimento e, per i profili selezionati, la proposta economica. Il numero di step può variare in base al ruolo.',
      },
      {
        q: 'Posso inviare una candidatura spontanea?',
        a: 'Sì. Se non trovi una posizione adatta, seleziona "Candidatura spontanea" nel form e indica l’area di tuo interesse. Valutiamo tutte le candidature spontanee in base alle esigenze in evoluzione.',
      },
      {
        q: 'Come vengono trattati i miei dati?',
        a: 'I dati e il CV che invii sono trattati esclusivamente ai fini della selezione del personale, secondo quanto indicato nell’Informativa Privacy, e non vengono ceduti a terzi.',
      },
    ],
  },

  en: {
    breadcrumbHome: 'Home',
    breadcrumbAbout: 'Company',
    breadcrumbCurrent: 'Careers',

    overline: 'Careers',
    heroTitle: 'Building the future of\ndigital logistics. Together.',
    heroSubhead: 'Proprietary software, system integration and B2B eCommerce: for over thirty years we have been digitalising the supply chain of Italian companies. We are looking for people who want to grow with us.',
    heroCtaPrimary: 'See open positions',
    heroCtaSecondary: 'Send a spontaneous application',

    valuesOverline: 'Why LogiExpert',
    valuesHeading: 'A place where skills really matter.',
    valuesIntro: 'We are an Italian SME with the solidity of thirty years of experience and the energy of a software house. Here your work has a concrete, visible impact.',
    values: [
      {
        icon: 'zap',
        title: 'Grow with us',
        body: 'Real growth paths across supply chain technologies and processes, supported by senior people with hands-on field experience.',
      },
      {
        icon: 'cog',
        title: 'Innovate every day',
        body: 'You work on proprietary software — LogiTrace, LogiPod, LogiStock — not third-party products. Your ideas make it into the product.',
      },
      {
        icon: 'user',
        title: 'Work as a team',
        body: 'Small, cross-functional teams, direct communication, no pointless bureaucracy. Sales, development and field work side by side.',
      },
      {
        icon: 'shield',
        title: 'Build your own path',
        body: 'Autonomy and responsibility from day one, with clear goals and the freedom to propose better solutions.',
      },
    ],

    statsOverline: 'LogiExpert in numbers',
    statsHeading: 'Thirty years of experience, a team that keeps growing.',

    positionsOverline: 'Open positions',
    positionsHeading: 'Find the right role for you.',
    positionsIntro: 'Filter by area and open a position to read responsibilities and requirements. Can’t find the right role? Send us a spontaneous application.',
    filterAllLabel: 'All areas',
    positionsEmpty: 'No open positions in this area right now. Send us a spontaneous application anyway.',
    labelResponsibilities: 'What you will do',
    labelRequirements: 'What we are looking for',
    labelLocation: 'Location',
    labelContract: 'Contract',
    applyToPosition: 'Apply for this position',

    formOverline: 'Apply',
    formHeading: 'Send us your application.',
    formIntro: 'Fill in the form and attach your CV. If you are applying for a specific position, select the matching one; otherwise choose "Spontaneous application".',
    spontaneous: 'Spontaneous application',
    fields: {
      nome: 'First name',
      cognome: 'Last name',
      email: 'Email',
      telefono: 'Phone',
      citta: 'City',
      linkedin: 'LinkedIn / Portfolio',
      posizione: 'Position of interest',
      area: 'Preferred area',
      datore: 'Current employer',
      disponibilita: 'Availability (approx. date)',
      cv: 'Upload your CV',
      messaggio: 'Message / short introduction',
    },
    cvHint: 'PDF, DOC or DOCX — max 5MB',
    optional: 'optional',
    selectPlaceholder: 'Select…',
    privacyText: 'I declare that I have read the Privacy Policy and authorise the processing of my personal data for personnel selection purposes, pursuant to Regulation (EU) 2016/679 (GDPR).',
    privacyLinkLabel: 'Privacy Policy',
    submit: 'Send application',
    submitting: 'Sending…',
    areas: [
      'Sales',
      'Marketing',
      'Administration',
      'Engineering & Software Development',
      'Technical & Field Operations',
    ],
    errors: {
      required: 'Required field',
      email: 'Enter a valid email address',
      cvType: 'Invalid format. Upload a PDF, DOC or DOCX file.',
      cvSize: 'The file exceeds 5MB.',
      privacy: 'You must accept the privacy policy to proceed.',
      generic: 'An error occurred while sending. Please try again or write to info@logiexpert.com.',
    },

    faqOverline: 'Frequently asked questions',
    faqHeading: 'How the application works.',
    faq: [
      {
        q: 'How long until I get a reply?',
        a: 'We review every application and contact profiles matching our open positions, usually within two weeks. Even without immediate openings, we keep your CV for future opportunities, in compliance with the privacy policy.',
      },
      {
        q: 'How does the selection process work?',
        a: 'After an initial CV review comes an introductory interview with HR, a technical or managerial interview with the relevant team and, for selected profiles, the offer. The number of steps may vary depending on the role.',
      },
      {
        q: 'Can I send a spontaneous application?',
        a: 'Yes. If you can’t find a suitable position, select "Spontaneous application" in the form and indicate your area of interest. We evaluate all spontaneous applications based on evolving needs.',
      },
      {
        q: 'How is my data handled?',
        a: 'The data and CV you send are processed exclusively for personnel selection purposes, as described in the Privacy Policy, and are not shared with third parties.',
      },
    ],
  },
};

// Numeri aziendali per la sezione "Numeri" (riusa StatsBlock).
// NOTA: valori allineati agli altri blocchi del sito; "PERSONE" e presenza da confermare con HR.
export const CAREERS_STATS = {
  it: [
    { value: '30+', label: 'Anni di esperienza', desc: 'Nella digitalizzazione della supply chain per manufacturing, logistica e retail.' },
    { value: '4', label: 'Software proprietari', desc: 'LogiTrace, LogiPod, LogiDealer, LogiStock — sviluppati internamente.' },
    { value: 'Italia', label: 'Presenza capillare', desc: 'Team sul territorio, vicino ai clienti e ai loro processi.' },
    { value: '3', label: 'Aree di business', desc: 'Software, system integration ed eCommerce B2B in un’unica realtà.' },
  ],
  en: [
    { value: '30+', label: 'Years of experience', desc: 'In supply chain digitalisation for manufacturing, logistics and retail.' },
    { value: '4', label: 'Proprietary software', desc: 'LogiTrace, LogiPod, LogiDealer, LogiStock — developed in-house.' },
    { value: 'Italy', label: 'Nationwide presence', desc: 'Teams across the country, close to customers and their processes.' },
    { value: '3', label: 'Business areas', desc: 'Software, system integration and B2B eCommerce under one roof.' },
  ],
};

// Etichetta leggibile di una posizione, derivata dall'id — fonte di verità
// server-side (non fidarsi mai della label inviata dal client).
export function resolvePositionLabel(posizione, lang = 'it') {
  const l = lang === 'en' ? 'en' : 'it';
  if (posizione === 'spontaneous') return CAREERS_COPY[l].spontaneous;
  const job = JOBS_DATA.find((j) => j.id === posizione);
  return job ? job.title[l] : '';
}

// Posizioni aperte — DATI DI ESEMPIO, plausibili ma da sostituire con quelli reali forniti da HR.
// `area` deve corrispondere a una delle CAREERS_COPY[lang].areas per il filtro.
export const JOBS_DATA = [
  {
    id: 'sales-account-manager',
    areaKey: 0, // Commerciale / Sales
    title: { it: 'Sales Account Manager', en: 'Sales Account Manager' },
    location: { it: 'Milano / Nord Ovest', en: 'Milan / North-West Italy' },
    contract: { it: 'Tempo indeterminato', en: 'Permanent, full-time' },
    responsibilities: {
      it: [
        'Sviluppare nuove opportunità commerciali su soluzioni software e system integration.',
        'Gestire l’intero ciclo di vendita, dalla qualificazione alla chiusura.',
        'Presentare demo dei software proprietari a clienti dei settori manufacturing, logistica e retail.',
        'Mantenere e far crescere il portafoglio clienti assegnato.',
      ],
      en: [
        'Develop new business opportunities on software and system integration solutions.',
        'Manage the full sales cycle, from qualification to closing.',
        'Present demos of our proprietary software to customers in manufacturing, logistics and retail.',
        'Maintain and grow the assigned customer portfolio.',
      ],
    },
    requirements: {
      it: [
        'Esperienza di vendita B2B, preferibilmente in ambito software, IT o supply chain.',
        'Ottime capacità relazionali e di negoziazione.',
        'Attitudine consulenziale e orientamento al risultato.',
        'Disponibilità a trasferte sul territorio.',
      ],
      en: [
        'B2B sales experience, ideally in software, IT or supply chain.',
        'Excellent relationship and negotiation skills.',
        'Consultative approach and results orientation.',
        'Willingness to travel within the territory.',
      ],
    },
  },
  {
    id: 'full-stack-software-engineer',
    areaKey: 3, // Ingegneria & Sviluppo Software
    title: { it: 'Full Stack Software Engineer', en: 'Full Stack Software Engineer' },
    location: { it: 'Sede / ibrido', en: 'On-site / hybrid' },
    contract: { it: 'Tempo indeterminato', en: 'Permanent, full-time' },
    responsibilities: {
      it: [
        'Progettare e sviluppare nuove funzionalità dei software proprietari LogiExpert.',
        'Integrare i software con ERP e gestionali dei clienti.',
        'Collaborare con il team di prodotto e con i consulenti di processo.',
        'Contribuire alla qualità del codice e alla manutenzione evolutiva.',
      ],
      en: [
        'Design and develop new features of LogiExpert proprietary software.',
        'Integrate the software with customer ERPs and management systems.',
        'Collaborate with the product team and process consultants.',
        'Contribute to code quality and evolutionary maintenance.',
      ],
    },
    requirements: {
      it: [
        'Esperienza di sviluppo full stack (frontend e backend).',
        'Buona conoscenza di database relazionali e API REST.',
        'Capacità di lavorare su integrazioni tra sistemi eterogenei.',
        'Autonomia, precisione e attitudine al lavoro in team.',
      ],
      en: [
        'Full stack development experience (frontend and backend).',
        'Good knowledge of relational databases and REST APIs.',
        'Ability to work on integrations between heterogeneous systems.',
        'Autonomy, precision and a team-working attitude.',
      ],
    },
  },
  {
    id: 'field-service-technician',
    areaKey: 4, // Tecnico & Field Operations
    title: { it: 'Tecnico Field Service / Sistemista', en: 'Field Service Technician / System Administrator' },
    location: { it: 'Nord Italia (on-site clienti)', en: 'Northern Italy (customer on-site)' },
    contract: { it: 'Tempo indeterminato', en: 'Permanent, full-time' },
    responsibilities: {
      it: [
        'Installare e configurare hardware AIDC (stampanti industriali, terminali, lettori barcode/RFID).',
        'Effettuare interventi di assistenza on-site presso i clienti.',
        'Supportare l’avviamento delle soluzioni software sul campo.',
        'Gestire la diagnosi e la risoluzione dei guasti.',
      ],
      en: [
        'Install and configure AIDC hardware (industrial printers, terminals, barcode/RFID readers).',
        'Carry out on-site support at customer premises.',
        'Support the go-live of software solutions in the field.',
        'Handle fault diagnosis and resolution.',
      ],
    },
    requirements: {
      it: [
        'Competenze sistemistiche di base (reti, sistemi operativi, hardware).',
        'Esperienza con dispositivi AIDC o mobility industriale (gradita).',
        'Patente B e disponibilità a trasferte giornaliere.',
        'Problem solving e buona relazione con il cliente.',
      ],
      en: [
        'Basic systems skills (networks, operating systems, hardware).',
        'Experience with AIDC devices or industrial mobility (a plus).',
        'Driving licence and availability for daily travel.',
        'Problem solving and good customer relations.',
      ],
    },
  },
  {
    id: 'b2b-marketing-specialist',
    areaKey: 1, // Marketing
    title: { it: 'Marketing Specialist B2B', en: 'B2B Marketing Specialist' },
    location: { it: 'Sede / ibrido', en: 'On-site / hybrid' },
    contract: { it: 'Tempo determinato / indeterminato', en: 'Fixed-term / permanent' },
    responsibilities: {
      it: [
        'Gestire contenuti e campagne per i canali digitali dell’azienda.',
        'Supportare il lancio di prodotti software e iniziative eCommerce B2B.',
        'Curare materiali commerciali, sito e presenza online.',
        'Analizzare i risultati e proporre ottimizzazioni.',
      ],
      en: [
        'Manage content and campaigns for the company’s digital channels.',
        'Support the launch of software products and B2B eCommerce initiatives.',
        'Look after sales materials, website and online presence.',
        'Analyse results and propose optimisations.',
      ],
    },
    requirements: {
      it: [
        'Esperienza in marketing B2B, preferibilmente in ambito tech o industriale.',
        'Buona capacità di scrittura e sensibilità per i contenuti tecnici.',
        'Conoscenza di strumenti di digital marketing e analytics.',
        'Organizzazione, autonomia e attitudine al lavoro in team.',
      ],
      en: [
        'Experience in B2B marketing, ideally in tech or industrial sectors.',
        'Good writing skills and a feel for technical content.',
        'Knowledge of digital marketing and analytics tools.',
        'Organisation, autonomy and a team-working attitude.',
      ],
    },
  },
];
