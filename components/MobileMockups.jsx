"use client";

import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function MobileMockups() {
  const t = useTranslations('mobileMockups');
  
  // Mockup data with translated titles and image paths
  const mockups = [
    { title: t('mockups.0.title'), image: "/M1.png", alt: t('mockups.0.alt') },
    { title: t('mockups.1.title'), image: "/M2.png", alt: t('mockups.1.alt') },
    { title: t('mockups.2.title'), image: "/M3.png", alt: t('mockups.2.alt') }
  ];

  // Features array from translations
  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description')
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description')
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description')
    }
  ];

  return (
    <div className="w-full py-12 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('heading')}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {t('subheading')}
        </p>
      </div>
      
      {/* Gradient Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* Purple-Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl transform -skew-y-2" />
        
        {/* Content Container with Grid */}
        <div className="relative z-10 px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {mockups.map((mockup, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Text Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">{mockup.title}</h3>
                </div>
                
                {/* Phone Mockup Container */}
                <div className="relative">
                  {/* Phone Frame - Notch removed */}
                  <div className="w-[220px] h-[440px] md:w-[240px] md:h-[480px] bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden border-8 border-gray-900 flex items-center justify-center p-1">
                    {/* Screen Content */}
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white">
                      <Image
                        src={mockup.image}
                        alt={mockup.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-[30px]"
                      />
                    </div>
                  </div>
                  
                  {/* Subtle Shadow Effect */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full z-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Additional Feature Points */}
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}