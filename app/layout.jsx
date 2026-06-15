import '../colors_and_type.css';
import '../styles.css';
import SiteShell from '../components/SiteShell';
import { LanguageProvider } from '../lib/LanguageContext';

export const metadata = {
  title: 'LogiExpert — System integrator e software house per la logistica digitale',
  description:
    'LogiExpert è un system integrator italiano specializzato in soluzioni di logistica digitale integrata: tracciabilità pallet, proof of delivery, warehouse management e AIDC & Mobility.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <LanguageProvider>
          <SiteShell>{children}</SiteShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
