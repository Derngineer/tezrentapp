"use client";
import Header from "../components/Header";
import ReviewsCarousel from "../components/ReviewsCarousel";
import DownloadSection from "../components/DownloadSection";
import DescriptionSection from "@/components/DescriptionSection";
import ClientForm from "@/components/ClientForm";
import HeroSection from "../components/HeroSection";
import MobileMockups from "@/components/MobileMockups";
import TermsAndConditions from "@/components/TermsAndConditions";
import AboutUsSection from '../components/AboutUsSection';

// Simple spacer component for visual separation
const Spacer = ({ size = "large" }) => {
  const sizeClasses = {
    small: "h-16",
    medium: "h-32",
    large: "h-64",
    xlarge: "h-96"
  };
  
  return <div className={`${sizeClasses[size]} w-full`}></div>;
};

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      
      {/* Hero section - No padding top, connects directly to header */}
      <section className="w-full pt-16">
        <HeroSection />
      </section>
      
      {/* Main content with sections and spacing */}
      <main className="flex-1 flex flex-col">
        <div className="grid grid-cols-1 gap-80">
          {/* Description section */}
          <section className="pt-32 bg-white">
            <DescriptionSection />
          </section>
          
          {/* About us section */}
          <section className="pt-24 bg-white">
            <AboutUsSection /> 
          </section>
          
          {/* Client form section */}
          <section className="pt-24 bg-white">
            <ClientForm />
          </section>
          
          {/* Reviews section */}
          <section className="pt-24 bg-white">
            <ReviewsCarousel />
          </section>
          
          {/* Mobile mockups section */}
          <section className="pt-24 bg-white">
            <MobileMockups />
          </section>
          
          {/* Terms section */}
          <section className="pt-24 bg-white">
            <TermsAndConditions />
          </section>
          
          {/* Download section - extra space before footer */}
          <section className="pt-24 bg-white">
            <DownloadSection />
          </section>
        </div>
      </main>
    </div>
  );
}
