'use client';

import CosaFacciamo from '../components/CosaFacciamo';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import Pillars from '../components/Pillars';
import Sectors from '../components/Sectors';
import { useLanguage } from '../lib/LanguageContext';

// Homepage — composes all building blocks per the LogiExpert brief.
// Order: Hero → 4 Pillars → Settori → Cosa Facciamo (SEO) → FAQ → LeadForm → Footer

const FAQ_ITEMS = {
  it: [
    {
      q: "Cos'è LogiExpert in una frase?",
      a: "LogiExpert è un system integrator e una software house italiana specializzata in soluzioni di logistica digitale integrata. Sviluppiamo software proprietari (LogiTrace, LogiPod, LogiStock), integriamo hardware AIDC e mobility, eroghiamo servizi di assistenza e consulenza.",
    },
    {
      q: "Quali sono i 4 pilastri operativi di LogiExpert?",
      a: "Lavoriamo su quattro pilastri integrati: (1) eCommerce B2B per la vendita di hardware professionale; (2) System Integration per cucire hardware, software e processi al sistema informativo esistente; (3) Soluzioni Software proprietarie per tracciabilità, POD e WMS; (4) Servizi di assistenza, manutenzione e formazione.",
    },
    {
      q: "Per quali settori sono pensate le vostre soluzioni?",
      a: "Operiamo principalmente in tre verticali: Manifatturiero (tracciabilità di lotto, gestione WIP, etichettatura industriale), Logistica & Trasporti (pallet, picking, proof of delivery) e Retail & Distribuzione (riassortimento, inventari ciclici, store-shipment).",
    },
    {
      q: "Come avviene un primo contatto con LogiExpert?",
      a: "Tramite il form di contatto in fondo a questa pagina: assegnamo la richiesta al consulente specializzato nel tuo settore, che ti contatta direttamente con una prima direzione tecnica. Nessuna newsletter, nessun call center.",
    },
  ],
  en: [
    {
      q: "What is LogiExpert in one sentence?",
      a: "LogiExpert is an Italian system integrator and software house specializing in integrated digital logistics solutions. We develop proprietary software (LogiTrace, LogiPod, LogiStock), integrate AIDC and mobility hardware, and provide support and consulting services.",
    },
    {
      q: "What are LogiExpert's 4 operational pillars?",
      a: "We work on four integrated pillars: (1) B2B eCommerce for the sale of professional hardware; (2) System Integration to connect hardware, software and processes to the existing information system; (3) Proprietary Software Solutions for tracking, POD and WMS; (4) Support, maintenance and training services.",
    },
    {
      q: "Which sectors are your solutions designed for?",
      a: "We operate mainly in three verticals: Manufacturing (batch tracking, WIP management, industrial labelling), Logistics & Transport (pallets, picking, proof of delivery) and Retail & Distribution (replenishment, cycle counts, store-shipment).",
    },
    {
      q: "How does a first contact with LogiExpert happen?",
      a: "Through the contact form at the bottom of this page: we assign the request to the consultant specialised in your sector, who contacts you directly with an initial technical direction. No newsletter, no call centre.",
    },
  ],
};

export default function Homepage() {
  const { lang } = useLanguage();

  return (
    <main data-screen-label="Home">
      <Hero />
      <Pillars />
      <Sectors />
      <CosaFacciamo />
      <FAQ items={FAQ_ITEMS[lang]} />
      <LeadForm />
    </main>
  );
}
