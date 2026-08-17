import Grazie from '../../screens/Grazie';

const BASE = 'https://www.logiexpert.com';

export const metadata = {
  title: 'Grazie | LogiExpert',
  description: 'Abbiamo ricevuto la tua richiesta. Ti ricontatteremo al più presto.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${BASE}/grazie`,
    languages: {
      'it':        `${BASE}/grazie`,
      'en':        `${BASE}/en/thank-you`,
      'x-default': `${BASE}/grazie`,
    },
  },
};

export default function GraziePage() {
  return <Grazie />;
}
