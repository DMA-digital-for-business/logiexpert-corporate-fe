import PrivacyPolicy from '../../screens/PrivacyPolicy';

const BASE = 'https://www.logiexpert.com';

export const metadata = {
  title: 'Privacy Policy | LogiExpert',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento (UE) 2016/679 (GDPR).',
  alternates: {
    canonical: `${BASE}/privacy-policy`,
    languages: {
      'it':        `${BASE}/privacy-policy`,
      'en':        `${BASE}/en/privacy-policy`,
      'x-default': `${BASE}/privacy-policy`,
    },
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
