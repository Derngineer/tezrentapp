"use client";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function TermsAndConditions() {
  const t = useTranslations('termsAndConditions');
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };
  
  // Get sections from translations
  const sections = [
    {
      id: 1,
      title: t('sections.0.title'),
      content: t.raw('sections.0.content')
    },
    {
      id: 2,
      title: t('sections.1.title'),
      content: t.raw('sections.1.content')
    },
    {
      id: 3,
      title: t('sections.2.title'),
      content: t.raw('sections.2.content')
    },
    {
      id: 4,
      title: t('sections.3.title'),
      content: t.raw('sections.3.content')
    },
    {
      id: 5,
      title: t('sections.4.title'),
      content: t.raw('sections.4.content')
    }
  ];
  
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">{t('heading')}</h1>
        <p className="text-gray-700 mb-8 text-center">
          {t('intro')}
        </p>
        
        <div className="mb-8 bg-blue-50 p-4 rounded-lg text-blue-800 text-sm">
          {t('lastUpdated', { date: t('updateDate') })}
        </div>
        
        <div className="space-y-4">
          {sections.map(section => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="w-full px-4 py-3 text-left font-medium flex justify-between items-center bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleSection(section.id)}
              >
                <span>{section.title}</span>
                <span className="text-blue-600">
                  {activeSection === section.id ? '−' : '+'}
                </span>
              </button>
              
              {activeSection === section.id && (
                <div 
                  className="px-4 py-3 text-gray-700 bg-white"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-center">
            {t('agreement')}
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/" className="text-blue-600 hover:underline">
              {t('returnHome')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}