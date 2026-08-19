export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/interno' },
    ],
    sitemap: 'https://www.logiexpert.com/sitemap.xml',
  };
}
