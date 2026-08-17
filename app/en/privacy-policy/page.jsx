import PrivacyPolicy from '../../../screens/PrivacyPolicy';

const BASE = 'https://www.logiexpert.com';

export const metadata = {
  title: 'Privacy Policy | LogiExpert',
  description: 'Personal data processing notice pursuant to Regulation (EU) 2016/679 (GDPR).',
  alternates: {
    canonical: `${BASE}/en/privacy-policy`,
    languages: {
      'it':        `${BASE}/privacy-policy`,
      'en':        `${BASE}/en/privacy-policy`,
      'x-default': `${BASE}/privacy-policy`,
    },
  },
};

export default function EnPrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
