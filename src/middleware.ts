import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { routes } from './config/routes';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(routes.home, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};
