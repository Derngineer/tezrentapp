"use client";
import {NextIntlClientProvider} from 'next-intl';

export default function I18nProviderClient({locale, messages, children}) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="UTC"
      now={new Date()}
    >
      {children}
    </NextIntlClientProvider>
  );
}