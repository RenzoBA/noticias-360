import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'self' https://noticias360.com.pe;
    script-src 'self' 'nonce-${nonce}' https://noticias360.com.pe 'strict-dynamic';
    style-src 'self' 'unsafe-hashes' 'nonce-${nonce}' https://noticias360.com.pe;
    style-src-elem 'self' 'unsafe-hashes' 'nonce-${nonce}' https://noticias360.com.pe;
    img-src 'self' https://noticias360.com.pe data: blob:;
    font-src 'self' https://noticias360.com.pe;
    object-src https://noticias360.com.pe;
    base-uri 'self' https://noticias360.com.pe;
    form-action 'self' https://noticias360.com.pe;
    frame-ancestors https://noticias360.com.pe;
    upgrade-insecure-requests;
`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
