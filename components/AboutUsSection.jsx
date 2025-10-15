"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaTools, FaShippingFast, FaHeadset, FaCheckCircle } from 'react-icons/fa';

export default function AboutUsSection() {
  const t = useTranslations('about');
  const [activeTab, setActiveTab] = useState('mission');
  
  const equipmentCategories = [
    { id: 'homeDiy', count: 240 },
    { id: 'construction', count: 320 },
    { id: 'landscaping', count: 180 },
    { id: 'industrial', count: 275 },
    { id: 'automotive', count: 150 },
    { id: 'eventAv', count: 125 },
  ];

  const features = [
    {
      id: 'quality',
      icon: <FaTools className="text-blue-600 text-2xl" />
    },
    {
      id: 'delivery',
      icon: <FaShippingFast className="text-blue-600 text-2xl" />
    },
    {
      id: 'support',
      icon: <FaHeadset className="text-blue-600 text-2xl" />
    },
    {
      id: 'terms',
      icon: <FaCheckCircle className="text-blue-600 text-2xl" />
    }
  ];

  const tabs = [
    { id: 'mission', label: t('tabs.mission') },
    { id: 'story', label: t('tabs.story') },
    { id: 'approach', label: t('tabs.approach') }
  ];

  return (
    <section id="about" className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            {t('sectionHeader.badge')}
          </span>
          <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            {t('sectionHeader.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('sectionHeader.subtitle')}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                <Image 
                  src="/warehouse.jpg" 
                  alt={t('sectionHeader.badge')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 w-64">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-4xl font-bold text-blue-900">1,200+</div>
                  <div className="text-gray-500 text-sm">{t('stats.equipmentItems')}</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="text-4xl font-bold text-blue-900">98%</div>
                  <div className="text-gray-500 text-sm">{t('stats.satisfaction')}</div>
                </div>
              </div>
              <div>
                <div className="text-blue-900 font-bold mb-1">{t('stats.servingSince')}</div>
                <div className="text-gray-500 text-sm">{t('stats.trustedBy')}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 border-b border-gray-200">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  className={`py-3 px-4 font-medium text-sm focus:outline-none ${
                    activeTab === tab.id 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-500 hover:text-blue-800'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mb-8">
              {activeTab === 'mission' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    {t('mission.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-700">
                    {t('mission.paragraph2')}
                  </p>
                </div>
              )}

              {activeTab === 'story' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    {t('story.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-700">
                    {t('story.paragraph2')}
                  </p>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    {t('approach.paragraph1')}
                  </p>
                  <p className="text-lg text-gray-700">
                    {t('approach.paragraph2')}
                  </p>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t(`features.${feature.id}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`features.${feature.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Categories Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900">{t('equipmentRange.title')}</h3>
            <p className="text-lg text-gray-600 mt-2">
              {t('equipmentRange.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((category) => (
              <div 
                key={category.id} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold text-blue-900">
                      {t(`equipmentRange.categories.${category.id}.name`)}
                    </h4>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {t(`equipmentRange.categories.${category.id}.count`)}+ items
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Including {t(`equipmentRange.categories.${category.id}.examples`)}
                  </p>
                  {/* Removed dead-end browse category link */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}