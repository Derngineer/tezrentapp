"use client";
import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import DescriptionSection from '../../components/DescriptionSection';
import FeaturesSection from '../../components/FeaturesSection';
import AboutUsSection from '../../components/AboutUsSection';
import ClientForm from '../../components/ClientForm';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import MobileMockups from '../../components/MobileMockups';
import TermsAndConditions from '../../components/TermsAndConditions';
import DownloadSection from '../../components/DownloadSection';

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
  const t = useTranslations('hero');

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <section className="w-full">
        <HeroSection />
      </section>
      <main className="flex-1 flex flex-col">
        <h1>{t('title')}</h1>
        <div className="grid grid-cols-1">
          <section className="bg-white">
            <DescriptionSection />
          </section>
          <section className="bg-white" id="features">
            <FeaturesSection />
          </section>
          <section className="bg-white" id="about-us">
            <AboutUsSection />
          </section>
          <section className="bg-white" id="contact">
            <ClientForm />
          </section>
          <section className="bg-white">
            <ReviewsCarousel />
          </section>
          <section className="bg-white">
            <MobileMockups />
          </section>
          <section className="bg-white" id="terms">
            <TermsAndConditions />
          </section>
          <section className="bg-white" id="download">
            <DownloadSection />
          </section>
        </div>
      </main>
    </div>
  );
}