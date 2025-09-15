"use client";
import Header from "../components/Header";
import { Typewriter } from 'react-simple-typewriter';
import ReviewsCarousel from "../components/ReviewsCarousel";
import DownloadSection from "../components/DownloadSection";
import DescriptionSection from "@/components/DescriptionSection";
import Spline from "../components/Spline";
import ClientForm from "@/components/ClientForm";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="flex-1 flex flex-col">
        <section
          className="relative min-h-screen w-full flex items-center justify-center bg-center bg-cover"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/bannerimage.png')",
          }}
        >
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
              <span>
                <Typewriter
                  words={['Rent Heavy Machinery']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>{" "}
              <span className="text-blue-300">Easily<sup>™</sup></span>
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-10 text-center max-w-2xl drop-shadow">
              Find, compare, and rent the best construction equipment for your next project. Fast, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a
                href="#catalog"
                className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 hover:text-white transition border border-white"
              >
                Browse Catalog
              </a>
              <a
                href="#contact"
                className="border border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
              >
                Contact Us
              </a>
            </div>
    
              </div>
            </section>
            <section className="w-full bg-[#E2FBFE] flex justify-center items-center py-12 px-4">
              <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full items-center">
                {/* Left: Spline */}
                <div className="flex-1 flex justify-left">
                  <div className="max-w-[500px] w-full">
                    <Spline />
                  </div>
                </div>

                {/* Right: Form */}
                <div className="flex-1 flex justify-right">
                  <div className="max-w-md w-full">
                    <ClientForm />
                  </div>
                </div>
              </div>
            </section>
        <ReviewsCarousel />
        <DescriptionSection />
        <DownloadSection />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Machinery Rental with Tezrent<sup>™</sup>. All rights reserved .
      </footer>
    </div>
  );
}
