import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';

const SUPPORTED = ['en', 'ru', 'uz', 'ar'];

export default getRequestConfig(async ({locale: inputLocale} = {}) => {
  // 1) Prefer locale from plugin
  let locale = inputLocale;

  // 2) Fallback: derive from cookie set by middleware
  if (!locale) {
    const store = await cookies();
    locale = store.get('NEXT_LOCALE')?.value || store.get('locale')?.value || null;
  }

  if (!locale) {
    throw new Error('next-intl: No locale provided to request config and no locale cookie found');
  }
  if (!SUPPORTED.includes(locale)) {
    throw new Error(`next-intl: Unsupported locale "${locale}"`);
  }

  const messages = (await import(`../messages/${locale}.json`)).default;
  return {locale, messages};
});