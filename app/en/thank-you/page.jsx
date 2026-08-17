import Grazie from '../../../screens/Grazie';

const BASE = 'https://www.logiexpert.com';

export const metadata = {
  title: 'Thank you | LogiExpert',
  description: 'We have received your request. We will get back to you as soon as possible.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${BASE}/en/thank-you`,
    languages: {
      'it':        `${BASE}/grazie`,
      'en':        `${BASE}/en/thank-you`,
      'x-default': `${BASE}/grazie`,
    },
  },
};

export default function EnThankYouPage() {
  return <Grazie />;
}
