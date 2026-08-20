import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const res = NextResponse.next();
  res.headers.set('x-lang', pathname.startsWith('/en') ? 'en' : 'it');

  // Internal documents (/interno/*): kept out of search engines via noindex.
  // The page also sets a noindex meta tag; this header is defense-in-depth.
  // Note: the path is intentionally crawlable (no robots Disallow) so bots can
  // actually read the noindex directive.
  if (pathname.startsWith('/interno')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|assets|favicon|icon\\.svg).*)'],
};
