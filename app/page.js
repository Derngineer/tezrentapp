"use client";
import Header from "../components/Header";
import ReviewsCarousel from "../components/ReviewsCarousel";
import DownloadSection from "../components/DownloadSection";
import DescriptionSection from "@/components/DescriptionSection";
import ClientForm from "@/components/ClientForm";
import HeroSection from "../components/HeroSection";
import MobileMockups from "@/components/MobileMockups";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-gray-100">
      <Header />
      <main className="flex-1 flex flex-col bg-white">
        <div className="flex flex-col gap-48">
          <HeroSection />
          <DescriptionSection />
          <ClientForm />
          <ReviewsCarousel />
          <MobileMockups />
          <DownloadSection />
        </div>
      </main>
  
    </div>
  );
}
