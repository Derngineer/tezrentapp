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
import FeaturesSection from "@/components/FeaturesSection";

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
      
      {/* Hero section */}
      <section className="w-full">
        <HeroSection />
      </section>
      
      {/* Main content with sections */}
      <main className="flex-1 flex flex-col">
        <div className="grid grid-cols-1">
          {/* Description section */}
          <section className="bg-white">
            <DescriptionSection />
          </section>

          <section className="bg-white" id="features">
            <FeaturesSection />
          </section>
          
          {/* About us section */}
          <section className="bg-white" id="about-us">
            <AboutUsSection /> 
          </section>
          
          {/* Client form section */}
          <section className="bg-white" id="contact">
            <ClientForm />
          </section>
          
          {/* Reviews section */}
          <section className="bg-white">
            <ReviewsCarousel />
          </section>
          
          {/* Mobile mockups section */}
          <section className="bg-white">
            <MobileMockups />
          </section>
          
          {/* Terms section */}
          <section className="bg-white" id="terms">
            <TermsAndConditions />
          </section>
          
          {/* Download section */}
          <section className="bg-white" id="download">
            <DownloadSection />
          </section>
        </div>
      </main>
    </div>
  );
}
