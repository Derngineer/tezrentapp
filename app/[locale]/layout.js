import React from 'react';
import {NextIntlClientProvider} from 'next-intl';

import en from '../../messages/en.json';
import ru from '../../messages/ru.json';
import uz from '../../messages/uz.json';
import ar from '../../messages/ar.json';
import I18nProviderClient from '../../components/I18nProviderClient';

const MAP = {en, ru, uz, ar};
const SUPPORTED = Object.keys(MAP);
const RTL = new Set(['ar']);

export default async function LocaleLayout({children, params}) {
  const awaited = (params && typeof params.then === 'function') ? await params : params;
  const raw = awaited?.locale;
  const locale = SUPPORTED.includes(raw) ? raw : 'en';
  const messages = MAP[locale];
  const dir = RTL.has(locale) ? 'rtl' : 'ltr';

  return (
    <div dir={dir} data-locale={locale}>
      <I18nProviderClient key={locale} locale={locale} messages={messages}>
        {children}
      </I18nProviderClient>
    </div>
  );
}