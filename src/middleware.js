import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "@/dictionaries/dictionaries";
import { updateSession, getSession } from "@/lib/auth";

import { NextResponse } from "next/server";

function getLocale(request) {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = match(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
  );

  console.log("pathname", pathname);
  console.log("pathnameHasLocale", pathnameHasLocale);

  // NO LANGUAGE
  if (!pathnameHasLocale) {
    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
  }

  const session = await getSession();
  console.log("session middleware", session);

  const arr = request.nextUrl.pathname.split("/");

  const patnamewithoutlocale = arr.length > 2 ? arr[2] : "";
  const pathnameLocale = arr.length > 1 ? arr[1] : "";

  if (!session && !patnamewithoutlocale.startsWith("sign-in")) {
    if (pathnameHasLocale) {
      return Response.redirect(
        new URL(`/${pathnameLocale}/sign-in`, request.url)
      );
    } else {
      return Response.redirect(new URL(`/sign-in`, request.url));
    }
  }

  // NO USER
  return await updateSession(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
