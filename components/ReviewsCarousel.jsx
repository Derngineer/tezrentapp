"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Jane Doe",
    role: "Construction Manager",
    text: "Excellent service! The machinery was top-notch and the process was seamless.",
    stars: 5,
    image: "/image1.png",
  },
  {
    name: "John Smith",
    role: "Project Director",
    text: "Quick delivery and very professional staff. Highly recommend for any project.",
    stars: 4.5,
    image: "/image2.png",
  },
  {
    name: "Alice Johnson",
    role: "Site Engineer",
    text: "Affordable rates and reliable equipment. Will rent again!",
    stars: 4,
    image: "/image3.png",
  },
  {
    name: "Michael Brown",
    role: "Contractor",
    text: "Customer support was very helpful and responsive.",
    stars: 4.5,
    image: "/image4.png",
  },
  {
    name: "Emily Davis",
    role: "Operations Manager",
    text: "The best rental experience I've had. Everything was as promised.",
    stars: 5,
    image: "/image5.png",
  },
  {
    name: "Chris Lee",
    role: "Independent Builder",
    text: "Easy booking and great selection of machinery.",
    stars: 3.5,
    image: "/image6.png",
  },
];

function StarRating({ count }) {
  const fullStars = Math.floor(count);
  const halfStar = count % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(3);
  const [autoplay, setAutoplay] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  // Responsive slide count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setSlideCount(1);
      } else if (window.innerWidth < 1024) {
        setSlideCount(2);
      } else {
        setSlideCount(3);
      }
    };
    
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplay && !isHovering) {
      const interval = setInterval(() => {
        setCurrent((current + 1) % slides.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [autoplay, current, isHovering]);

  const slides = [];
  for (let i = 0; i < reviews.length; i += slideCount) {
    slides.push(reviews.slice(i, i + slideCount));
  }

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center px-4 sm:px-6">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl font-bold mt-2 text-gray-800">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div 
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div 
                key={slideIndex}
                className="min-w-full flex justify-center gap-4 md:gap-8 px-4"
              >
                {slide.map((review) => (
                  <div
                    key={review.name}
                    className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 w-full max-w-md"
                  >
                    <div className="relative">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={100}
                        height={100}
                        className="rounded-full object-cover border-4 border-white shadow"
                        style={{ width: 100, height: 100 }}
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-2">
                        <FaQuoteLeft className="text-white text-sm" />
                      </div>
                    </div>
                    
                    <StarRating count={review.stars} />
                    
                    <p className="text-xl text-gray-700 mt-6 mb-4 text-center italic leading-relaxed">
                      "{review.text}"
                    </p>
                    
                    <div className="mt-auto text-center">
                      <h3 className="font-semibold text-lg text-blue-700">{review.name}</h3>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-blue-100 transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-blue-100 transition-all duration-200 hover:scale-110 z-10 border border-gray-200"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="flex gap-3 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current 
                  ? "bg-blue-700 w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to review slide ${idx + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setAutoplay(!autoplay)}
          className={`mt-6 text-sm flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            autoplay 
              ? "bg-blue-100 text-blue-700" 
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <span className={`block w-2 h-2 rounded-full ${autoplay ? "bg-blue-700" : "bg-gray-600"}`}></span>
          {autoplay ? "Autoplay On" : "Autoplay Off"}
        </button>
      </div>
    </section>
  );
}