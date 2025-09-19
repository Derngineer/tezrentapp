"use client";
import { useState } from 'react';
import Image from 'next/image';
//import { motion } from 'framer-motion'; // You may need to install this: npm install framer-motion
import { 
  FaClock, 
  FaTruck, 
  FaShieldAlt, 
  FaCreditCard, 
  FaTools, 
  FaMobileAlt,
  FaSearch,
  FaCalendarAlt,
  FaChartLine
} from 'react-icons/fa';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState('rental');
  
  // Feature categories with their details
  const featureCategories = [
    {
      id: 'rental',
      title: 'Equipment Rental',
      description: 'Access a vast catalog of well-maintained equipment for any project',
      features: [
        {
          icon: <FaTools className="text-blue-600 text-3xl" />,
          title: 'Extensive Inventory',
          description: 'From hand tools to heavy machinery, find exactly what you need for any job size.'
        },
        {
          icon: <FaSearch className="text-blue-600 text-3xl" />,
          title: 'Advanced Search',
          description: 'Filter by project type, tool category, brand, or specifications to quickly find the perfect equipment.'
        },
        {
          icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
          title: 'Quality Guaranteed',
          description: 'All equipment is regularly serviced, inspected, and tested before each rental.'
        }
      ]
    },
    {
      id: 'logistics',
      title: 'Delivery & Logistics',
      description: 'Reliable, on-time delivery and pickup services for your convenience',
      features: [
        {
          icon: <FaTruck className="text-blue-600 text-3xl" />,
          title: 'Same-Day Delivery',
          description: 'Get equipment delivered within hours for urgent project needs in service areas.'
        },
        {
          icon: <FaCalendarAlt className="text-blue-600 text-3xl" />,
          title: 'Flexible Scheduling',
          description: 'Schedule deliveries and pickups at your convenience with precise time windows.'
        },
        {
          icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
          title: 'Real-Time Tracking',
          description: 'Track your equipment delivery in real-time and receive ETA notifications.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Simplified Payments',
      description: 'Transparent pricing and flexible payment options for businesses and individuals',
      features: [
        {
          icon: <FaCreditCard className="text-blue-600 text-3xl" />,
          title: 'Multiple Payment Options',
          description: 'Pay with credit cards, ACH transfers, digital wallets, or approved corporate accounts.'
        },
        {
          icon: <FaClock className="text-blue-600 text-3xl" />,
          title: 'Hourly to Monthly Rates',
          description: 'Flexible rental periods with decreasing rates for longer rentals to match your project timeline.'
        },
        {
          icon: <FaChartLine className="text-blue-600 text-3xl" />,
          title: 'Business Insights',
          description: 'Track spending by project, department, or location with detailed reporting for business customers.'
        }
      ]
    }
  ];
  
  // Equipment categories showcase
  const equipmentShowcase = [
    {
      name: 'Construction',
      image: '/equipment/construction.jpg',
      items: ['Excavators', 'Bulldozers', 'Concrete Mixers', 'Jackhammers']
    },
    {
      name: 'Landscaping',
      image: '/equipment/landscaping.jpg',
      items: ['Lawn Mowers', 'Trimmers', 'Wood Chippers', 'Trenchers']
    },
    {
      name: 'Home & DIY',
      image: '/equipment/home-diy.jpg',
      items: ['Power Drills', 'Sanders', 'Paint Sprayers', 'Ladders']
    },
    {
      name: 'Industrial',
      image: '/equipment/industrial.jpg',
      items: ['Generators', 'Welders', 'Forklifts', 'Air Compressors']
    }
  ];

  return (
    <div id="features" className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-4">Everything You Need For Your Project</h2>
          <p className="text-xl text-gray-600">
            Our rental platform is designed to make equipment rental seamless, convenient, and reliable at every step.
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
        <div className="mb-20">
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
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
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
        
        {/* Equipment Category Showcase */}
        <div className="border-t border-gray-100 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Equipment Categories</h3>
            <p className="text-lg text-gray-600 mt-2">
              Browse our extensive catalog of quality equipment across major categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentShowcase.map((category, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
                  <div className="w-full h-64 relative">
                    {/* Replace with your actual images or add placeholder if not available */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40 z-20"></div>
                    <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <h4 className="text-2xl font-bold text-white mb-2">{category.name}</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-white/90 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <a 
                      href="#catalog" 
                      className="text-white flex items-center text-sm font-medium hover:text-blue-300 transition-colors"
                    >
                      Explore {category.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
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
              <h3 className="text-3xl font-bold text-white mb-6">Ready to get started?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Find the perfect equipment for your next project in minutes. No commitments, no hassles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#catalog" 
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all"
                >
                  Browse Equipment
                </a>
                <a 
                  href="#download" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg transition-all"
                >
                  Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}