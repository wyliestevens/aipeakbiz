import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"];
const defaultLocale = "en";

// Paths that should NOT be localized
const ignoredPaths = ["/api/", "/_next/", "/images/", "/videos/", "/fonts/", "/favicon"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets, API routes, and Next.js internals
  if (ignoredPaths.some((p) => pathname.startsWith(p)) || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If it's /en or /en/*, rewrite to /[lang]/* internally
    return NextResponse.next();
  }

  // No locale prefix = English (default). Rewrite internally to /en/*
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|videos|fonts|favicon|.*\\..*).*)"],
};
