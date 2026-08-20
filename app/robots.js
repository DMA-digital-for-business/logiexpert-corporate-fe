export default function robots() {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.logiexpert.com/sitemap.xml',
  };
}
