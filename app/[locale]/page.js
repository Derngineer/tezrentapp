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

export default function Home() {
  const t = useTranslations('hero');

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <section className="w-full">
        <HeroSection />
      </section>
      <main className="flex-1 flex flex-col">
        <div className="flex flex-col">

          <section id="features" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <FeaturesSection />
            </div>
          </section>
          <section id="about-us" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <AboutUsSection />
            </div>
          </section>
                    <section id="description" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <DescriptionSection />
            </div>
          </section>
          <section id="contact" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <ClientForm />
            </div>
          </section>
          <section className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <ReviewsCarousel />
            </div>
          </section>
          <section className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <MobileMockups />
            </div>
          </section>
          <section id="terms" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <TermsAndConditions />
            </div>
          </section>
          <section id="download" className="bg-white section-block py-6 md:py-8">
            <div className="section-inner">
              <DownloadSection />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}