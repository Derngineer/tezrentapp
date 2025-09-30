"use client";
import { useState } from 'react';
import Image from 'next/image';
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
  const [activeTab, setActiveTab] = useState('rental');
  
  // Equipment categories showcase - moved to top
  const equipmentShowcase = [
    // Small Equipment first
    {
      name: 'Small Equipment',
      image: '/equipment/small-equipment.jpg',
      items: ['Cameras', 'Blenders', 'Coolers', 'Portable AC']
    },
    // Then Home & DIY
    {
      name: 'Home & DIY',
      image: '/equipment/home-diy.jpg',
      items: ['Power Drills', 'Sanders', 'Paint Sprayers', 'Ladders']
    },
    // Then Industrial
    {
      name: 'Industrial',
      image: '/equipment/industrial.jpg',
      items: ['Generators', 'Welders', 'Forklifts', 'Air Compressors']
    },
    // Then Landscaping 
    {
      name: 'Landscaping',
      image: '/equipment/landscaping.jpg',
      items: ['Lawn Mowers', 'Trimmers', 'Wood Chippers', 'Trenchers']
    },
    // Construction last
    {
      name: 'Construction',
      image: '/equipment/construction.jpg',
      items: ['Excavators', 'Bulldozers', 'Concrete Mixers', 'Jackhammers']
    }
  ];

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
    // Other feature categories remain unchanged
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
    },
    // New category for small equipment rental features
    {
      id: 'small',
      title: 'Small Equipment',
      description: 'Quality small equipment for events, travel, and home needs',
      features: [
        {
          icon: <FaCamera className="text-blue-600 text-3xl" />,
          title: 'Photography & Video',
          description: 'Professional cameras, lenses, and accessories for any photography or video project.'
        },
        {
          icon: <FaBlender className="text-blue-600 text-3xl" />,
          title: 'Kitchen & Event',
          description: 'Blenders, food processors, and other kitchen equipment for events and gatherings.'
        },
        {
          icon: <FaWind className="text-blue-600 text-3xl" />,
          title: 'Climate Control',
          description: 'Portable AC units, heaters, and air purifiers for comfort in any environment.'
        }
      ]
    }
  ];

  return (
    <div id="features" className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Equipment Category Showcase - MOVED TO TOP */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Inventory</span>
            <h2 className="text-4xl font-extrabold text-blue-900 mt-2 mb-4">Equipment Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our extensive catalog of quality equipment across major categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {equipmentShowcase.map((category, index) => (
              <div 
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  {/* Remove Image component, keep only the blue background */}
                  <div className="w-full h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 z-10"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
                  <h4 className="text-xl font-bold text-white mb-2">{category.name}</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-white/90 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/20">
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

        {/* Small Equipment Highlight Section */}
        <div className="mb-16 bg-blue-50 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">New Additions</span>
              <h3 className="text-3xl font-bold text-blue-900 mt-2 mb-4">Small Equipment Rentals</h3>
              <p className="text-lg text-gray-700 mb-6">
                We've expanded our inventory to include high-quality small equipment perfect for events, travel, home projects, and more.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaCamera className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">Professional Cameras</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaBlender className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">Kitchen Equipment</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaSnowflake className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">Portable Coolers</span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center">
                    <FaWind className="text-blue-600 text-xl mr-3" />
                    <span className="font-medium">Climate Control</span>
                  </div>
                </div>
              </div>
              
              <a 
                href="#catalog" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
              >
                Browse Small Equipment
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {/* DSLR Camera - Fixed */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/dlsr1.jpg" 
                      alt="DSLR Camera"
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">DSLR Cameras</div>
              </div>
              
              {/* Blender - Working */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/blendwe1.jpg" 
                      alt="Professional Blender"
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Pro Blenders</div>
              </div>
              
              {/* Cooler - Fixed */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform -rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/chiller1.jpg" 
                      alt="Portable Cooler"
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
                <div className="mt-2 text-center text-sm font-medium">Coolers</div>
              </div>
              
              {/* AC - Working */}
              <div className="bg-white p-3 rounded-lg shadow-lg transform rotate-1">
                <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
                  <div className="relative w-full h-32 sm:h-40">
                    <Image 
                      src="/fan1.jpg" 
                      alt="Portable AC"
                      width={300}
                      height={300}
                      priority
                      className="object-cover absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
                <div className="mt-2 text-center text-sm font-medium">Portable AC</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Section Header - MOVED AFTER EQUIPMENT CATEGORIES */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
              <h3 className="text-3xl font-bold text-white mb-4">Ready to get started?</h3>
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