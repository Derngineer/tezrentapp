import Image from "next/image";

// This component centers a wide box labeled "Mobile Mockups".
// You can adjust the number of mockups by duplicating the inner rectangles.

export default function MobileMockups() {
  return (
    <div className="flex justify-center items-center w-full h-full py-12">
      <div className="flex gap-8">
        <div className="w-[120px] h-[240px] md:w-[180px] md:h-[360px] bg-black rounded-3xl shadow-2xl flex items-center justify-center">
          <span className="text-white text-base font-semibold">Mobile Mockup</span>
        </div>
        <div className="w-[120px] h-[240px] md:w-[180px] md:h-[360px] bg-black rounded-3xl shadow-2xl flex items-center justify-center">
          <span className="text-white text-base font-semibold">Mobile Mockup</span>
        </div>
        <div className="w-[120px] h-[240px] md:w-[180px] md:h-[360px] bg-black rounded-3xl shadow-2xl flex items-center justify-center">
          <span className="text-white text-base font-semibold">Mobile Mockup</span>
        </div>
      </div>
      <div className="absolute left-0 right-0 mx-auto mt-8 flex justify-center">
        <span className="text-gray-700 text-lg font-bold">Mobile Mockups</span>
      </div>
    </div>
  );
}