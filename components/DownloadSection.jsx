"use client";

import Image from "next/image";

export default function DownloadSection() {
  return (
    <section className="py-20 bg-blue-50 flex justify-center">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-8 text-center">
          Get the App Now!
        </h2>
        <p className="text-2xl sm:text-3xl text-blue-800 mb-14 text-center font-medium">
          Download on your favorite platform and manage rentals on the go.
        </p>
        <div className="flex gap-12 flex-wrap justify-center">
          {/* App Store Button */}
          <button
            className="bg-black rounded-3xl shadow-2xl hover:scale-105 transition w-80 h-28 flex items-center justify-center"
            disabled
            aria-label="App Store link coming soon"
            style={{ opacity: 0.8, cursor: "not-allowed" }}
          >
            <div className="relative w-64 h-20">
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>
          {/* Google Play Button */}
          <button
            className="bg-black rounded-3xl shadow-2xl hover:scale-105 transition w-80 h-28 flex items-center justify-center"
            disabled
            aria-label="Google Play link coming soon"
            style={{ opacity: 0.8, cursor: "not-allowed" }}
          >
            <div className="relative w-64 h-20">
              <Image
                src="/googleplay.png"
                alt="Get it on Google Play"
                fill
                className="object-contain"
                priority
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}