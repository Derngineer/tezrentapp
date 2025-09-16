"use client";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('/bannerimage.png')",
      }}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full px-4 max-w-6xl mx-auto">
        {/* Left: Text Content (2/3) */}
        <div className="w-full md:w-2/3 flex flex-col items-start justify-center md:pr-16">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-8 text-left drop-shadow-lg">
            Rent Heavy Machinery <span className="text-blue-300">Easily<sup>™</sup></span>
          </h1>
          <p className="text-2xl sm:text-3xl text-white mb-10 text-left max-w-2xl drop-shadow">
            Find, compare, and rent the best construction equipment for your next project. Fast, reliable, and affordable.
          </p>
          <div className="flex gap-4 justify-start">
            <a
              href="#catalog"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-blue-700 hover:text-white transition border border-white"
            >
              Download
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Right: Mobile Mockup (1/3) */}
        <div className="w-full md:w-1/3 flex items-center justify-center mt-12 md:mt-0">
          <div className="w-[300px] h-[580px] bg-black rounded-3xl shadow-2xl flex items-center justify-center">
            <span className="text-white text-xl font-semibold text-center px-4">
              Mobile Mockup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}