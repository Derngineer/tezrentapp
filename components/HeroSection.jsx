"use client";
import { useState, useEffect } from "react";
import { FaAngleDown, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.75)), url('/bannerimage.png')",
      }}
    >
      {/* Subtle background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-0" 
        style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"%23FFFFFF\" fill-opacity=\".1\"/%3E%3C/svg%3E')", backgroundSize: "20px 20px"}}
      />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 max-w-6xl mx-auto">
        {/* Left: Text Content */}
        <div 
          className={`w-full md:w-1/2 flex flex-col items-start justify-center md:pr-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* New badge */}
          <span className="bg-blue-600 text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-4 inline-flex items-center font-semibold">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Coming Soon
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 text-left drop-shadow-lg leading-tight">
            Rent Heavy Machinery <span className="text-blue-300">Easily<sup className="text-sm">™</sup></span>
          </h1>
          
          <p className="text-lg sm:text-2xl text-white mb-8 text-left max-w-2xl drop-shadow opacity-90">
            Find, compare, and rent the best construction equipment for your next project. Fast, reliable, and affordable.
          </p>
          
          {/* Trust indicators */}
          <div className="mb-10 flex flex-wrap gap-6 items-center">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center">
                <span className="text-white font-bold text-2xl">4.9</span>
                <div className="ml-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white text-xs">App Store</span>
                </div>
              </div>
            </div>
            <div className="text-white/80 flex items-center gap-2 text-sm">
              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
              <span>500+ Machinery Options</span>
              <span className="w-1 h-1 bg-white/60 rounded-full"></span>
              <span>24/7 Support</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
            <a
              href="#catalog"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 hover:text-white transition-all duration-300 border border-white flex-grow sm:flex-grow-0 text-center"
            >
              Download Now
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition-all duration-300 flex-grow sm:flex-grow-0 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Right: Video Placeholder */}
        <div 
          className={`w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{transitionDelay: "200ms"}}
        >
          <div className="relative w-full max-w-md aspect-[9/16] md:aspect-[3/4] lg:aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Video placeholder - replace with actual video */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-950 flex items-center justify-center">
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/10">
                <div className="w-20 h-20 rounded-full bg-blue-500/80 flex items-center justify-center backdrop-blur-sm shadow-xl p-5 cursor-pointer hover:bg-blue-600/90 transition-all duration-300 group">
                  <FaPlay className="text-white text-2xl ml-1 group-hover:scale-110 transition-all" />
                </div>
              </div>
              
              {/* App name watermark */}
              <div className="absolute top-8 left-0 right-0 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold">Tezrent Demo</span>
                </div>
              </div>
              
              {/* Mockup content - this will be replaced by your actual video */}
              <div className="w-3/4 h-3/4 flex flex-col">
                <div className="flex-1 grid grid-cols-2 gap-4 p-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white/10 rounded-xl p-2 flex flex-col animate-pulse" style={{animationDelay: `${item * 0.2}s`, animationDuration: '3s'}}>
                      <div className="flex-1 bg-blue-400/20 rounded-lg mb-2"></div>
                      <div className="h-3 w-full bg-white/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="h-16 bg-blue-800/50 border-t border-white/10 flex items-center justify-around px-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-sm bg-white/30"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <FaAngleDown className="text-white/50 animate-bounce" />
      </div>
    </section>
  );
}