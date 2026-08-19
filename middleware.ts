import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths under /interno are internal-only documents: protected by HTTP Basic Auth and
// never indexable. Credentials come from INTERNAL_DOCS_USER / INTERNAL_DOCS_PASSWORD.
// If those env vars are not set, access is denied by default (fail-closed).
function checkInternalAuth(request: NextRequest): boolean {
  const user = process.env.INTERNAL_DOCS_USER;
  const pass = process.env.INTERNAL_DOCS_PASSWORD;
  if (!user || !pass) return false;

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) return false;

  try {
    const [u, p] = atob(header.slice(6)).split(':');
    return u === user && p === pass;
  } catch {
    return false;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isEn = pathname.startsWith('/en');

  if (pathname.startsWith('/interno')) {
    if (!checkInternalAuth(request)) {
      return new NextResponse('Autenticazione richiesta', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="LogiExpert Area Interna", charset="UTF-8"',
          'X-Robots-Tag': 'noindex, nofollow, noarchive',
        },
      });
    }
    const res = NextResponse.next();
    res.headers.set('x-lang', isEn ? 'en' : 'it');
    res.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    return res;
  }

  const res = NextResponse.next();
  res.headers.set('x-lang', isEn ? 'en' : 'it');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|assets|favicon|icon\\.svg).*)'],
};
