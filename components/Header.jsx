import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-6 px-4 bg-white shadow-md relative">
      <div className="flex items-center gap-3">
        <Link href="/" className="font-bold text-2xl text-gray-800 flex items-center">
          <span className="text-black">Tez</span>
          <span className="text-blue-600">rent</span>
          <span className="text-black">.</span>
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        <a href="#features" className="hover:text-blue-600 transition">Features</a>
        <a href="#catalog" className="hover:text-blue-600 transition">Catalog</a>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
      </nav>
      {/* Burger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-800 mb-1 transition-all ${open ? "opacity-0" : ""}`}></span>
        <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      {/* Mobile Nav */}
      {open && (
        <nav className="absolute top-full right-4 mt-2 bg-white rounded-lg shadow-lg flex flex-col gap-4 p-6 z-50 md:hidden min-w-[160px]">
          <a href="#features" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Features</a>
          <a href="#catalog" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Catalog</a>
          <a href="#contact" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>Contact</a>
          <Link href="/about" className="hover:text-blue-600 transition" onClick={() => setOpen(false)}>About</Link>
        </nav>
      )}
    </header>
  );
}