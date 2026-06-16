import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const isEn = request.nextUrl.pathname.startsWith('/en');
  res.headers.set('x-lang', isEn ? 'en' : 'it');
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|assets|favicon|icon\\.svg).*)'],
};
