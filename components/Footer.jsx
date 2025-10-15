"use client";
import Link from "next/link";
import {useTranslations, useLocale} from 'next-intl';
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('downloadSection');
  const locale = useLocale();
  const base = `/${locale}`;

  return (
    <footer className="w-full mt-24 border-t border-blue-200 pt-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="font-bold text-xl text-blue-900 mb-4">Tezrent</h3>
          <p className="text-gray-600 mb-4">
            {t('footer.description')}
          </p>
          <div className="flex space-x-4">
            {[
              { name: 'twitter', href: '#', Icon: FaTwitter },
              { name: 'instagram', href: '#', Icon: FaInstagram },
              { name: 'linkedin', href: '#', Icon: FaLinkedin },
              { name: 'facebook', href: '#', Icon: FaFacebook },
            ].map(({name, href, Icon}) => (
              <a
                key={name}
                href={href}
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition"
                aria-label={name}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-blue-900 mb-4">{t('footer.company.title')}</h4>
          <ul className="space-y-2">
            {(() => {
              const links = [
                { key: 'about', href: `${base}#about-us`, label: t('footer.company.links.0') },
              ];
              return links.map((l) => (
                <li key={l.key}>
                  <Link href={l.href} className="text-gray-600 hover:text-blue-600 transition">
                    {l.label}
                  </Link>
                </li>
              ));
            })()}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-blue-900 mb-4">{t('footer.legal.title')}</h4>
          <ul className="space-y-2">
            {(() => {
              const legal = [
                { key: 'terms', index: 0, href: `/${locale}/terms-and-conditions` },
                { key: 'privacy', index: 1, href: `#privacy` },
              ];
              return legal
                .map((l) => ({ ...l, label: t(`footer.legal.links.${l.index}`) }))
                .filter((l) => typeof l.label === 'string' ? l.label.trim().length > 0 : Boolean(l.label))
                .map((l) => (
                  <li key={l.key}>
                    <Link href={l.href} className="text-gray-600 hover:text-blue-600 transition">
                      {l.label}
                    </Link>
                  </li>
                ));
            })()}
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-100 mt-12 pt-6 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} {t('footer.copyright')}
      </div>
    </footer>
  );
}
