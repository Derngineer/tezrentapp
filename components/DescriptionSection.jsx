"use client";

import { useState } from "react";
import { FaSearch, FaCalendarCheck, FaTruck, FaUndo, FaPlay } from "react-icons/fa";

export default function DescriptionSection() {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Browse & Search",
      description: "Explore a wide range of machinery and filter by type, size, or availability to find exactly what you need.",
      color: "blue"
    },
    {
      id: 2,
      icon: <FaCalendarCheck />,
      title: "Easy Booking",
      description: "Select your equipment, choose rental dates, and book instantly through our secure platform.",
      color: "green"
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: "Seamless Delivery or Pickup",
      description: "Arrange for delivery to your site or pick up the machinery at your convenience.",
      color: "orange"
    },
    {
      id: 4,
      icon: <FaUndo />,
      title: "Manage & Return",
      description: "Track your rentals, extend periods if needed, and return equipment easily—all within the app.",
      color: "purple"
    }
  ];
  
  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="max-w-7xl w-full px-4 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left: Explainer Animation/Video Placeholder */}
        <div className="w-full md:w-1/3 flex items-center justify-center mb-10 md:mb-0 sticky top-24">
          <div className="w-[270px] h-[520px] bg-gradient-to-b from-gray-800 to-gray-950 rounded-2xl overflow-hidden shadow-xl border border-gray-700 relative">
            {/* Video placeholder with play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FaPlay className="text-white ml-1" />
              </div>
            </div>
            
            {/* Active step visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`transition-all duration-500 opacity-${activeStep === 1 ? '100' : '0'}`}>
                <div className="relative w-[230px] h-[440px] rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-sm">
                  <div className="absolute top-10 left-4 right-4 h-12 bg-blue-500/20 rounded-lg flex items-center px-3">
                    <FaSearch className="text-blue-300 mr-2" />
                    <div className="w-2/3 h-4 bg-blue-300/30 rounded" />
                  </div>
                  <div className="absolute top-28 left-4 right-4 bottom-10 bg-blue-500/10 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-2 h-full">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-blue-500/20 rounded-lg flex flex-col items-center justify-center p-2">
                          <div className="w-full h-16 bg-blue-500/10 rounded mb-2" />
                          <div className="w-3/4 h-3 bg-blue-300/30 rounded" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 absolute inset-0 flex items-center justify-center opacity-${activeStep === 2 ? '100' : '0'}`}>
                <div className="relative w-[230px] h-[440px] rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-sm">
                  <div className="absolute top-10 left-4 right-4 h-40 bg-green-500/20 rounded-lg flex flex-col p-3">
                    <div className="w-full h-24 bg-green-500/10 rounded mb-2" />
                    <div className="w-full flex justify-between mt-2">
                      <div className="w-[45%] h-8 bg-green-300/20 rounded" />
                      <div className="w-[45%] h-8 bg-green-300/20 rounded" />
                    </div>
                  </div>
                  <div className="absolute top-56 left-4 right-4 h-16 bg-green-500/30 rounded-lg flex items-center justify-center">
                    <div className="w-1/2 h-6 bg-white/20 rounded" />
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 absolute inset-0 flex items-center justify-center opacity-${activeStep === 3 ? '100' : '0'}`}>
                <div className="relative w-[230px] h-[440px] rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-sm">
                  <div className="absolute top-10 left-4 right-4 h-32 bg-orange-500/20 rounded-lg p-3">
                    <div className="w-full h-12 flex items-center justify-center mb-2">
                      <FaTruck className="text-orange-300 text-3xl" />
                    </div>
                    <div className="w-full h-4 bg-orange-300/30 rounded mb-2" />
                    <div className="w-3/4 mx-auto h-4 bg-orange-300/20 rounded" />
                  </div>
                  <div className="absolute top-48 left-4 right-4 h-40 bg-orange-500/10 rounded-lg">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="w-3/4 h-24 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <FaCalendarCheck className="text-orange-300/60 text-3xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-500 absolute inset-0 flex items-center justify-center opacity-${activeStep === 4 ? '100' : '0'}`}>
                <div className="relative w-[230px] h-[440px] rounded-xl overflow-hidden bg-gray-900/60 backdrop-blur-sm">
                  <div className="absolute top-10 left-4 right-4 h-16 bg-purple-500/30 rounded-lg flex items-center justify-center">
                    <FaUndo className="text-purple-300 mr-2" />
                    <div className="w-1/2 h-4 bg-purple-300/30 rounded" />
                  </div>
                  <div className="absolute top-32 left-4 right-4 bottom-10 bg-purple-500/10 rounded-lg p-3">
                    <div className="w-full h-8 bg-purple-500/20 rounded mb-3 flex items-center px-3">
                      <div className="w-3/4 h-3 bg-purple-300/30 rounded" />
                    </div>
                    <div className="w-full h-8 bg-purple-500/20 rounded mb-3 flex items-center px-3">
                      <div className="w-1/2 h-3 bg-purple-300/30 rounded" />
                    </div>
                    <div className="w-full h-8 bg-purple-500/20 rounded flex items-center px-3">
                      <div className="w-2/3 h-3 bg-purple-300/30 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone frame details */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-black rounded-b-xl" />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full" />
          </div>
        </div>
        
        {/* Right: How It Works */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center md:text-left animate-fade-in-down">
            How It Works
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center md:text-left animate-fade-in">
            Renting machinery with Tezrent is simple, transparent, and efficient. Our app is designed to make your equipment rental experience smooth from start to finish.
          </p>
          
          {/* Step progress indicator */}
          <div className="hidden md:flex w-full mb-8 px-2">
            <div className="relative w-full h-1 bg-gray-200 rounded">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={`absolute top-0 h-1 rounded transition-all duration-500 ease-out ${
                    step.id === 1 ? 'left-0' : ''
                  } ${
                    step.id <= activeStep ? `bg-${step.color}-600` : 'bg-gray-200'
                  }`}
                  style={{ 
                    width: `${25 * Math.min(activeStep, step.id)}%`, 
                    left: `${(step.id - 1) * 25}%` 
                  }}
                />
              ))}
              {steps.map((step) => (
                <button
                  key={step.id}
                  className={`absolute top-1/2 transform -translate-y-1/2 -ml-3 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    activeStep >= step.id 
                      ? `bg-${step.color}-600 text-white` 
                      : 'bg-white border-2 border-gray-300 text-gray-400'
                  }`}
                  style={{ left: `${(step.id - 1) * 25}%` }}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.id}
                </button>
              ))}
            </div>
          </div>
          
          <ol className="space-y-8 w-full">
            {steps.map((step) => (
              <li 
                key={step.id}
                className={`flex items-start gap-4 animate-fade-in-left p-4 rounded-lg transition-all duration-300 ${
                  activeStep === step.id ? 'bg-gray-50 shadow-sm' : ''
                }`} 
                style={{ animationDelay: `${(step.id - 1) * 0.2}s` }}
                onClick={() => setActiveStep(step.id)}
              >
                <span className={`flex items-center justify-center bg-${step.color}-100 text-${step.color}-600 rounded-full w-12 h-12 text-2xl shadow transition-all ${
                  activeStep === step.id ? 'scale-110' : ''
                }`}>
                  {step.icon}
                </span>
                <div>
                  <span className={`font-semibold text-gray-900 text-lg ${
                    activeStep === step.id ? `text-${step.color}-700` : ''
                  }`}>
                    {step.title}:
                  </span>
                  <span className="ml-2 text-gray-700 block mt-1">
                    {step.description}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.7s both;
        }
        .animate-fade-in {
          animation: fadeIn 1s both;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1s both;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px);}
          to { opacity: 1; transform: translateX(0);}
        }
        
        /* Color classes for dynamic colors */
        .bg-blue-100 { background-color: #dbeafe; }
        .bg-green-100 { background-color: #dcfce7; }
        .bg-orange-100 { background-color: #ffedd5; }
        .bg-purple-100 { background-color: #f3e8ff; }
        
        .text-blue-600 { color: #2563eb; }
        .text-green-600 { color: #16a34a; }
        .text-orange-600 { color: #ea580c; }
        .text-purple-600 { color: #9333ea; }
        
        .text-blue-700 { color: #1d4ed8; }
        .text-green-700 { color: #15803d; }
        .text-orange-700 { color: #c2410c; }
        .text-purple-700 { color: #7e22ce; }
        
        .bg-blue-600 { background-color: #2563eb; }
        .bg-green-600 { background-color: #16a34a; }
        .bg-orange-600 { background-color: #ea580c; }
        .bg-purple-600 { background-color: #9333ea; }
        
        /* Opacity classes for transitions */
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
      `}</style>
    </section>
  );
}