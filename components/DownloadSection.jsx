"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBell, FaCheckCircle, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { useTranslations, useLocale } from 'next-intl';

export default function DownloadSection() {
  const t = useTranslations('downloadSection');
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1000);
  };

  const benefits = [
    { title: t('benefits.0.title'), desc: t('benefits.0.desc'), icon: "📱" },
    { title: t('benefits.1.title'), desc: t('benefits.1.desc'), icon: "🔍" },
    { title: t('benefits.2.title'), desc: t('benefits.2.desc'), icon: "🔒" }
  ];

  return (
  <section className="relative py-4 md:py-6 bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* App preview floating phone */}
        <div className="absolute top-0 -right-20 md:right-10 opacity-10 md:opacity-30 pointer-events-none">
          <div className="w-[300px] h-[600px] bg-gradient-to-b from-gray-800 to-black rounded-[40px] p-3 shadow-2xl rotate-12 border border-gray-700">
            <div className="w-full h-full bg-blue-900 rounded-[32px] overflow-hidden"></div>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-full">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4 bg-blue-100 px-4 py-1 rounded-full animate-pulse">
            {t('comingSoon')}
          </span>
          
          <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-900 mb-6 text-center max-w-4xl leading-tight">
            {t('heading.part1')} <span className="text-blue-600">{t('heading.part2')}</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-blue-800/80 mb-10 text-center font-medium max-w-3xl">
            {t('subheading')}
          </p>

          {/* App benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 w-full max-w-5xl">
            {benefits.map((benefit, i) => (
              <div 
                key={i} 
                className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-4">{benefit.icon}</span>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{benefit.title}</h3>
                <p className="text-blue-800/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
            {/* App Store Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
              <button
                className="relative bg-black rounded-3xl shadow-xl hover:scale-105 transition duration-300 w-64 sm:w-72 h-24 flex items-center justify-center"
                disabled
                aria-label={t('appStore.ariaLabel')}
                style={{ opacity: 0.9, cursor: "not-allowed" }}
              >
                <div className="relative w-56 h-16">
                  <Image
                    src="/appstore.png"
                    alt={t('appStore.alt')}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </button>
            </div>
            
            {/* Google Play Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 group-hover:opacity-80 transition duration-500"></div>
              <button
                className="relative bg-black rounded-3xl shadow-xl hover:scale-105 transition duration-300 w-64 sm:w-72 h-24 flex items-center justify-center"
                disabled
                aria-label={t('googlePlay.ariaLabel')}
                style={{ opacity: 0.9, cursor: "not-allowed" }}
              >
                <div className="relative w-56 h-16">
                  <Image
                    src="/googleplay.png"
                    alt={t('googlePlay.alt')}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </button>
            </div>
          </div>
          
          {/* Notification signup - Widened */}
          <div className="mt-16 max-w-xl w-full">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                  <FaBell />
                </div>
                <h3 className="font-bold text-xl text-blue-900">{t('notification.title')}</h3>
              </div>
              
              {subscribed ? (
                <div className="flex flex-col items-center py-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-3">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                  <p className="text-center text-green-700">
                    {t('notification.success')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <p className="text-gray-600 mb-4">
                    {t('notification.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('notification.emailPlaceholder')}
                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition-all flex items-center justify-center whitespace-nowrap ${
                        loading ? "opacity-80 cursor-not-allowed" : ""
                      }`}
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          {t('notification.button')} <FaArrowRight className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  {/* Terms and conditions checkbox */}
                  <div className="mt-4 flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        required
                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-500">
                        {t('terms.agree')}{" "}
                        <Link href={`/${locale}/terms-and-conditions`} className="text-blue-600 hover:text-blue-800 underline">
                          {t('terms.termsLink')}
                        </Link>
                        {" "}{t('terms.and')}{" "}
                        <Link href="#privacy" className="text-blue-600 hover:text-blue-800 underline">
                          {t('terms.privacyLink')}
                        </Link>
                      </label>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}