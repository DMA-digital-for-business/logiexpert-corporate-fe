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
  verification: {
    google: 'wPo84C7LvSRCKOKUKtK4guTKaYv4FS_Iv80PTBKOafc',
  },
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
      <head>
        {/* Google Tag Manager */}
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NB6KT2PF');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NB6KT2PF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
