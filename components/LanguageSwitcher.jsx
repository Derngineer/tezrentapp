"use client";
import {useLocale} from 'next-intl';
import {usePathname, useSearchParams, useRouter} from 'next/navigation';
import {useMemo, useTransition} from 'react';

const LOCALES = [
  {code: 'en', label: 'EN'},
  {code: 'ru', label: 'RU'},
  {code: 'uz', label: 'UZ'},
  {code: 'ar', label: 'AR'}
];

export default function LanguageSwitcher({className, selectClassName}) {
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const qs = useMemo(() => {
    const s = searchParams?.toString();
    return s ? `?${s}` : '';
  }, [searchParams]);

  const buildPath = (target) => {
    const segments = (pathname || '/').split('/');
    segments[1] = target;
    const nextPath = segments.join('/') || '/';
    return `${nextPath}${qs}`;
  };

  const onChange = (e) => {
    const target = e.target.value;
    startTransition(() => {
      router.push(buildPath(target));
    });
  };

  return (
    <label className={`inline-flex items-center gap-2 ${className || ''}`}>
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={onChange}
        disabled={isPending}
        aria-label="Language"
        className={`rounded-md border bg-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 ${selectClassName || ''}`}
      >
        {LOCALES.map(l => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </label>
  );
}