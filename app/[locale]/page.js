"use client";
import { useTranslations } from 'next-intl';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import DescriptionSection from '../../components/DescriptionSection';
import FeaturesSection from '../../components/FeaturesSection';
import AboutUsSection from '../../components/AboutUsSection';
import ClientForm from '../../components/ClientForm';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import DownloadSection from '../../components/DownloadSection';
import Footer from '../../components/Footer';

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
          <section className="bg-white section-block pb-4 md:pb-6 pt-6 md:pt-8">
            <div className="section-inner">
              <ReviewsCarousel />
            </div>
          </section>
          <section id="download" className="bg-white section-block -mt-2 md:-mt-3 pt-0 pb-4 md:pt-0 md:pb-6">
            <div className="section-inner">
              <DownloadSection />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}