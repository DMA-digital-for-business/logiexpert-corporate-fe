import { headers } from 'next/headers';
import '../colors_and_type.css';
import '../styles.css';
import SiteShell from '../components/SiteShell';
import { LanguageProvider } from '../lib/LanguageContext';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D0D12',
};

export const metadata = {
  metadataBase: new URL('https://www.logiexpert.com'),
  title: {
    default: 'LogiExpert — System integrator e software house per la logistica digitale',
    template: '%s — LogiExpert',
  },
  description:
    'LogiExpert è un system integrator italiano specializzato in soluzioni di logistica digitale integrata: tracciabilità pallet, proof of delivery, warehouse management e AIDC & Mobility.',
  keywords: [
    'system integrator', 'logistica digitale', 'supply chain', 'tracciabilità pallet',
    'proof of delivery', 'warehouse management', 'WMS', 'AIDC', 'mobility industriale',
    'LogiTrace', 'LogiPod', 'LogiStock', 'Zebra', 'Honeywell', 'Datalogic',
  ],
  authors: [{ name: 'LogiExpert', url: 'https://www.logiexpert.com' }],
  creator: 'LogiExpert',
  publisher: 'LogiExpert',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'LogiExpert',
    title: 'LogiExpert — System integrator e software house per la logistica digitale',
    description:
      'LogiExpert è un system integrator italiano specializzato in soluzioni di logistica digitale integrata: tracciabilità pallet, proof of delivery, warehouse management e AIDC & Mobility.',
    images: [{ url: '/assets/og-logiexpert.png', width: 1200, height: 630, alt: 'LogiExpert' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LogiExpert — System integrator per la logistica digitale',
    description:
      'Tracciabilità pallet, proof of delivery digitale, WMS e AIDC & Mobility. Software proprietari + system integration.',
    images: ['/assets/og-logiexpert.png'],
  },
};

export default async function RootLayout({ children }) {
  const h = await headers();
  const lang = h.get('x-lang') ?? 'it';
  return (
    <html lang={lang}>
      <body>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
