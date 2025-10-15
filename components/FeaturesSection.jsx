"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { 
  FaClock, 
  FaTruck, 
  FaShieldAlt, 
  FaCreditCard, 
  FaTools, 
  FaMobileAlt,
  FaSearch,
  FaCalendarAlt,
  FaChartLine,
  FaCamera,
  FaBlender,
  FaSnowflake,
  FaWind
} from 'react-icons/fa';

export default function FeaturesSection() {
  const t = useTranslations('features');
  const [activeTab, setActiveTab] = useState('rental');
  
  // Equipment categories showcase using translations but with arrays for items
  const equipmentShowcase = [
    // Small Equipment first
    {
      name: t('inventory.categories.small.name'),
      image: '/equipment/small-equipment.jpg',
      items: [
        t('inventory.categories.small.items.0'),
        t('inventory.categories.small.items.1'),
        t('inventory.categories.small.items.2'),
        t('inventory.categories.small.items.3')
      ]
    },
    // Then Home & DIY
    {
      name: t('inventory.categories.diy.name'),
      image: '/equipment/home-diy.jpg',
      items: [
        t('inventory.categories.diy.items.0'),
        t('inventory.categories.diy.items.1'),
        t('inventory.categories.diy.items.2'),
        t('inventory.categories.diy.items.3')
      ]
    },
    // Then Industrial
    {
      name: t('inventory.categories.industrial.name'),
      image: '/equipment/industrial.jpg',
      items: [
        t('inventory.categories.industrial.items.0'),
        t('inventory.categories.industrial.items.1'),
        t('inventory.categories.industrial.items.2'),
        t('inventory.categories.industrial.items.3')
      ]
    },
    // Then Landscaping
    {
      name: t('inventory.categories.landscaping.name'),
      image: '/equipment/landscaping.jpg',
      items: [
        t('inventory.categories.landscaping.items.0'),
        t('inventory.categories.landscaping.items.1'),
        t('inventory.categories.landscaping.items.2'),
        t('inventory.categories.landscaping.items.3')
      ]
    },
    // Construction last
    {
      name: t('inventory.categories.construction.name'),
      image: '/equipment/construction.jpg',
      items: [
        t('inventory.categories.construction.items.0'),
        t('inventory.categories.construction.items.1'),
        t('inventory.categories.construction.items.2'),
        t('inventory.categories.construction.items.3')
      ]
    }
  ];

  // Feature categories with translations
  const featureCategories = [
    {
      id: 'rental',
      title: t('categories.rental.title'),
      description: t('categories.rental.description'),
      features: [
        {
          icon: <FaTools className="text-blue-600 text-3xl" />,
          title: t('categories.rental.features.inventory.title'),
          description: t('categories.rental.features.inventory.description')
        },
        {
          icon: <FaSearch className="text-blue-600 text-3xl" />,
          title: t('categories.rental.features.search.title'),
          description: t('categories.rental.features.search.description')
        },
        {
          icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
          title: t('categories.rental.features.quality.title'),
          description: t('categories.rental.features.quality.description')
        }
      ]
    },
    {
      id: 'logistics',
      title: t('categories.logistics.title'),
      description: t('categories.logistics.description'),
      features: [
        {
          icon: <FaTruck className="text-blue-600 text-3xl" />,
          title: t('categories.logistics.features.sameDay.title'),
          description: t('categories.logistics.features.sameDay.description')
        },
        {
          icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
          title: t('categories.logistics.features.scheduling.title'),
          description: t('categories.logistics.features.scheduling.description')
        },
        {
          icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
          title: t('categories.logistics.features.tracking.title'),
          description: t('categories.logistics.features.tracking.description')
        }
      ]
    },
    {
      id: 'payment',
      title: t('categories.payment.title'),
      description: t('categories.payment.description'),
      features: [
        {
          icon: <FaCreditCard className="text-blue-600 text-3xl" />,
          title: t('categories.payment.features.options.title'),
          description: t('categories.payment.features.options.description')
        },
        {
          icon: <FaClock className="text-blue-600 text-3xl" />,
          title: t('categories.payment.features.rates.title'),
          description: t('categories.payment.features.rates.description')
        },
        {
          icon: <FaChartLine className="text-blue-600 text-3xl" />,
          title: t('categories.payment.features.insights.title'),
          description: t('categories.payment.features.insights.description')
        }
      ]
    },
    {
      id: 'small',
      title: t('categories.small.title'),
      description: t('categories.small.description'),
      features: [
        {
          icon: <FaCamera className="text-blue-600 text-3xl" />,
          title: t('categories.small.features.photography.title'),
          description: t('categories.small.features.photography.description')
        },
        {
          icon: <FaBlender className="text-blue-600 text-3xl" />,
          title: t('categories.small.features.kitchen.title'),
          description: t('categories.small.features.kitchen.description')
        },
        {
          icon: <FaWind className="text-blue-600 text-3xl" />,
          title: t('categories.small.features.climate.title'),
          description: t('categories.small.features.climate.description')
        }
      ]
    }
  ];

  return (
    <div id="features" className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Equipment Category Showcase */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              {t('inventory.badge')}
            </span>
            <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-4">
              {t('inventory.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('inventory.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {equipmentShowcase.map((category, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="w-full h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 z-10"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 z-20 p-3 flex flex-col justify-end">
                  {/* Adjust heading size dynamically based on text length */}
                  <h4 className={`font-bold text-white mb-2 ${
                    category.name.length > 15 ? 'text-lg' : 'text-xl'
                  }`}>
                    {category.name}
                  </h4>
                  
                  {/* Adjust item spacing and font size */}
                  <ul className="space-y-0.5">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-white/90 text-xs sm:text-sm flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-1.5"></span>
                        <span className="flex-1 line-clamp-2">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Removed dead-end explore link */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Equipment Highlight Section */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                {t('smallEquipment.badge')}
              </span>
              <h3 className="text-3xl font-bold text-blue-900 mt-2 mb-4">
                {t('smallEquipment.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                {t('smallEquipment.subtitle')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaCamera className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">{t('smallEquipment.items.cameras')}</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaBlender className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">{t('smallEquipment.items.kitchen')}</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaSnowflake className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">{t('smallEquipment.items.coolers')}</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaWind className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">{t('smallEquipment.items.climate')}</span>
                  </div>
                </div>
              </div>
              
              {/* Removed dead-end small equipment CTA link */}
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {/* DSLR Camera */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/dlsr1.jpg" 
                      alt={t('smallEquipment.productLabels.cameras')}
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">
                  {t('smallEquipment.productLabels.cameras')}
                </div>
              </div>
              
              {/* Blender */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/blendwe1.jpg" 
                      alt={t('smallEquipment.productLabels.blenders')}
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">
                  {t('smallEquipment.productLabels.blenders')}
                </div>
              </div>
              
              {/* Cooler */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/chiller1.jpg" 
                      alt={t('smallEquipment.productLabels.coolers')}
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/fallback-cooler.jpg";
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">
                  {t('smallEquipment.productLabels.coolers')}
                </div>
              </div>
              
              {/* AC */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/fan1.jpg" 
                      alt={t('smallEquipment.productLabels.ac')}
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">
                  {t('smallEquipment.productLabels.ac')}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Rest of your component... */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        
        {/* Feature Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {featureCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Feature Content */}
        <div className="mb-10">
          {featureCategories.map((category) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${
                activeTab === category.id ? 'opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                <p className="text-lg text-gray-600 mt-2">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Removed dead-end browse equipment button */}
                <a 
                  href="#download" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all"
                >
                  {t('cta.downloadButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}