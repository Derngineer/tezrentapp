import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'uz', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always' // ensure /ru, /uz, /ar are treated as locales
});

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|.*\\..*).*)']
};