"use client";

import React, { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Jane Doe",
    text: "Excellent service! The machinery was top-notch and the process was seamless.",
    stars: 5,
    image: "/image1.png",
  },
  {
    name: "John Smith",
    text: "Quick delivery and very professional staff. Highly recommend for any project.",
    stars: 4.5,
    image: "/image2.png",
  },
  {
    name: "Alice Johnson",
    text: "Affordable rates and reliable equipment. Will rent again!",
    stars: 4,
    image: "/image3.png",
  },
  {
    name: "Michael Brown",
    text: "Customer support was very helpful and responsive.",
    stars: 4.5,
    image: "/image4.png",
  },
  {
    name: "Emily Davis",
    text: "The best rental experience I’ve had. Everything was as promised.",
    stars: 5,
    image: "/image5.png",
  },
  {
    name: "Chris Lee",
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
  React.useEffect(() => {
    const update = () => setSlideCount(window.innerWidth < 640 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const slides = [];
  for (let i = 0; i < reviews.length; i += slideCount) {
    slides.push(reviews.slice(i, i + slideCount));
  }

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl w-full mx-auto flex flex-col items-center px-2 sm:px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">What Our Clients Say</h2>
        <div className="relative w-full">
          <div className="flex justify-center gap-8">
            {slides[current].map((review, idx) => (
              <div
                key={review.name}
                className={`bg-gray-50 rounded-2xl shadow-xl p-10 flex flex-col items-center transition-all duration-300 ${
                  slides[current].length === 1
                    ? "w-full max-w-4xl min-h-[400px]"
                    : "w-full max-w-md min-h-[340px]"
                }`}
              >
                <Image
                  src={review.image}
                  alt={review.name}
                  width={110}
                  height={110}
                  className="rounded-full mb-6 object-cover border-4 border-white shadow"
                  style={{ width: 110, height: 110 }}
                />
                <StarRating count={review.stars} />
                <p className="text-xl text-gray-700 mt-6 mb-4 text-center">"{review.text}"</p>
                <span className="font-semibold text-blue-700">{review.name}</span>
              </div>
            ))}
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-blue-100 transition"
            aria-label="Previous review"
          >
            <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full p-3 shadow hover:bg-blue-100 transition"
            aria-label="Next review"
          >
            <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex gap-2 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-700" : "bg-gray-300"}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to review slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}