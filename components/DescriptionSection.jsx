"use client";

import { FaSearch, FaCalendarCheck, FaTruck, FaUndo } from "react-icons/fa";

export default function DescriptionSection() {
  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="max-w-7xl w-full px-2 flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Left: Explainer Animation/Video Placeholder */}
        <div className="w-full md:w-1/3 flex items-center justify-center mb-10 md:mb-0">
          <div className="w-[270px] h-[520px] bg-gray-900 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white text-lg font-semibold text-center px-4">
              Explainer Animation / Video
            </span>
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
          <ol className="space-y-8 w-full">
            <li className="flex items-start gap-4 animate-fade-in-left">
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-12 h-12 text-2xl shadow">
                <FaSearch />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Browse &amp; Search:</span>
                <span className="ml-2 text-gray-700">Explore a wide range of machinery and filter by type, size, or availability to find exactly what you need.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-12 h-12 text-2xl shadow">
                <FaCalendarCheck />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Easy Booking:</span>
                <span className="ml-2 text-gray-700">Select your equipment, choose rental dates, and book instantly through our secure platform.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-left" style={{ animationDelay: "0.4s" }}>
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-12 h-12 text-2xl shadow">
                <FaTruck />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Seamless Delivery or Pickup:</span>
                <span className="ml-2 text-gray-700">Arrange for delivery to your site or pick up the machinery at your convenience.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 animate-fade-in-left" style={{ animationDelay: "0.6s" }}>
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-12 h-12 text-2xl shadow">
                <FaUndo />
              </span>
              <div>
                <span className="font-semibold text-gray-900">Manage &amp; Return:</span>
                <span className="ml-2 text-gray-700">Track your rentals, extend periods if needed, and return equipment easily—all within the app.</span>
              </div>
            </li>
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
      `}</style>
    </section>
  );
}