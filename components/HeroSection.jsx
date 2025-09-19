"use client";
import { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaPlay } from "react-icons/fa";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const video = videoRef.current;
    if (video) {
      // Handle video loading events
      const handleCanPlay = () => {
        setIsLoading(false);
        // Auto-play when loaded
        video.play()
          .then(() => setIsPlaying(true))
          .catch(error => {
            console.error("Autoplay failed:", error);
            // Keep the play button visible for user interaction
          });
      };

      const handleError = (error) => {
        console.error("Video error:", error);
        setIsLoading(false);
      };

      video.addEventListener('canplaythrough', handleCanPlay);
      video.addEventListener('error', handleError);
      
      // Try to load the video
      video.load();

      return () => {
        video.removeEventListener('canplaythrough', handleCanPlay);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.error("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

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
        
        {/* Right: Floating Video Container */}
        <div 
          className={`w-full md:w-1/2 flex items-center justify-center mt-16 md:mt-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{transitionDelay: "200ms"}}
        >
          {/* Video container - shadows removed */}
          <div className="relative">
            {/* Video element */}
            <div className="relative z-10">
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted 
                playsInline
                className="rounded-[2.5rem] shadow-xl w-[280px] h-[560px] object-cover"
              >
                <source src="/videos/video2.webm" type="video/webm" />
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[2.5rem] z-20">
                  <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/50 text-xs uppercase tracking-widest mb-2">Scroll</span>
      </div>
    </section>
  );
}