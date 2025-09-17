"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaTools, FaShippingFast, FaHeadset, FaCheckCircle } from 'react-icons/fa';

export default function AboutUsSection() {
  const [activeTab, setActiveTab] = useState('mission');
  
  const equipmentCategories = [
    { name: 'Home & DIY', count: 240, examples: 'Drills, Sanders, Ladders' },
    { name: 'Construction', count: 320, examples: 'Jackhammers, Concrete Mixers' },
    { name: 'Landscaping', count: 180, examples: 'Lawn Mowers, Trimmers' },
    { name: 'Industrial', count: 275, examples: 'Generators, Compressors' },
    { name: 'Automotive', count: 150, examples: 'Diagnostic Tools, Lifts' },
    { name: 'Event & AV', count: 125, examples: 'Cameras, Sound Systems' },
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Tezrent</span>
          <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-4">Your Trusted Equipment Partner</h2>
          <p className="text-xl text-gray-600">
            We're revolutionizing equipment rental with our extensive inventory, reliable service, and seamless experience.
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
                  alt="Tezrent Warehouse" 
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
                  <div className="text-gray-500 text-sm">Equipment Items</div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                  <div className="text-4xl font-bold text-blue-900">98%</div>
                  <div className="text-gray-500 text-sm">Satisfaction</div>
                </div>
              </div>
              <div>
                <div className="text-blue-900 font-bold mb-1">Serving Since 2018</div>
                <div className="text-gray-500 text-sm">Trusted by 10,000+ customers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-6 border-b border-gray-200">
              {[
                { id: 'mission', label: 'Our Mission' },
                { id: 'story', label: 'Our Story' },
                { id: 'approach', label: 'Our Approach' }
              ].map((tab) => (
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
                    At Tezrent, our mission is to make quality equipment accessible to everyone, from DIY homeowners to large construction companies. We believe the right tools should never be a barrier to getting the job done right.
                  </p>
                  <p className="text-lg text-gray-700">
                    We've built a platform that simplifies equipment rental with transparent pricing, reliable maintenance, and exceptional customer support—ensuring you can focus on your project, not your tools.
                  </p>
                </div>
              )}

              {activeTab === 'story' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Founded in 2018 by a team of contractors and tech innovators, Tezrent was born from frustration with traditional equipment rental processes. We saw an opportunity to leverage technology to create a more efficient, user-friendly rental experience.
                  </p>
                  <p className="text-lg text-gray-700">
                    Starting with just 50 items in a small warehouse, we've grown to over 1,200 pieces of equipment across multiple categories, serving thousands of satisfied customers nationwide.
                  </p>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="space-y-4">
                  <p className="text-lg text-gray-700">
                    Our approach centers on three core principles: quality, reliability, and convenience. Every piece of equipment undergoes rigorous maintenance and testing before each rental. 
                  </p>
                  <p className="text-lg text-gray-700">
                    We've developed streamlined logistics to ensure on-time delivery and pickup, and our customer support team is always ready to provide expert advice on choosing and using the right equipment for your specific needs.
                  </p>
                </div>
              )}
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaTools className="text-blue-600 text-2xl" />,
                  title: 'Quality Equipment',
                  description: 'Regularly maintained and tested tools from trusted brands.'
                },
                {
                  icon: <FaShippingFast className="text-blue-600 text-2xl" />,
                  title: 'Fast Delivery',
                  description: 'Same-day or next-day delivery options to your location.'
                },
                {
                  icon: <FaHeadset className="text-blue-600 text-2xl" />,
                  title: '24/7 Support',
                  description: 'Expert advice and technical assistance whenever you need it.'
                },
                {
                  icon: <FaCheckCircle className="text-blue-600 text-2xl" />,
                  title: 'Flexible Terms',
                  description: 'Rent by hour, day, week, or month to fit your schedule.'
                }
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipment Categories Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-blue-900">Our Equipment Range</h3>
            <p className="text-lg text-gray-600 mt-2">
              From small hand tools to heavy machinery, we have everything you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentCategories.map((category, i) => (
              <div 
                key={i} 
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-xl font-bold text-blue-900">{category.name}</h4>
                    <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {category.count}+ items
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">Including {category.examples}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <a href="#catalog" className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors">
                      Browse Category
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}