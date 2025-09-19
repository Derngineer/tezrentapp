"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section by checking viewport position
      // Updated to include all sections
      const sections = ["features", "catalog", "contact", "about-us", "download", "terms"];
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest('nav') && !event.target.closest('button')) {
        setOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);
  
  // Updated navigation links to match sections
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#catalog", label: "Catalog" },
    { href: "#contact", label: "Contact" },
    { href: "#about-us", label: "About" }, // Changed from "/about" to "#about-us"
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/95 shadow-lg backdrop-blur-sm' : 'py-6 bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 relative">
        <Link href="/" className="font-bold text-2xl text-gray-800 flex items-center group">
          <div className="flex items-baseline">
            <span className="text-black group-hover:scale-105 transition-transform">Tez</span>
            <span className="text-blue-600 group-hover:text-blue-500 transition-colors group-hover:scale-105 transition-transform">rent</span>
            <span className="text-black">.</span>
          </div>
          <div className="h-6 w-6 ml-2 relative overflow-hidden hidden sm:block">
            <div className={`absolute inset-0 transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
            </div>
          </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              className={`py-2 px-1 font-medium transition-all relative ${
                activeSection === link.href.replace('#', '') 
                  ? 'text-blue-600' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                  activeSection === link.href.replace('#', '') ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </Link>
          ))}
          
          <div className="h-6 border-l border-gray-300 mx-2"></div>
          
          <Link 
            href="#download" // Changed from "/start" to "#download"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg active:scale-95"
          >
            Get Started
          </Link>
        </nav>
        
        {/* Burger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-12 h-12 relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span 
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : "mb-1.5"
            }`}
          ></span>
          <span 
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "opacity-0" : "mb-1.5"
            }`}
          ></span>
          <span 
            className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        
        {/* Mobile Nav - Overlay with Animation */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
        
        <nav 
          className={`md:hidden fixed top-[72px] right-0 bottom-0 w-64 bg-white shadow-xl p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`py-2 px-1 font-medium transition-all relative ${
                  activeSection === link.href.replace('#', '') 
                    ? 'text-blue-600 pl-4 border-l-2 border-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="h-px bg-gray-200 my-4"></div>
            
            <Link 
              href="#download" // Changed from "/start" to "#download"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all text-center mt-4"
              onClick={() => setOpen(false)}
            >
              Get Started
            </Link>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500">Support</div>
                <a href="tel:+15555555555" className="text-blue-600 font-medium">
                  (555) 555-5555
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}