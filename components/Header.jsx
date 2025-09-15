import Image from "next/image";
import Link from "next/link";

export default function Header() {
return (
    <header className="w-full flex items-center justify-between py-6 px-4 bg-white shadow-md">
        <div className="flex items-center gap-3">
            <Link href="/" className="font-bold text-2xl text-gray-800 flex items-center">
                <span className="text-black">Tez</span>
                <span className="text-blue-600">rent</span>
                <span className="text-black">.</span>
            </Link>
        </div>
        <nav className="flex gap-8">
            <a href="#features" className="hover:text-blue-600 transition">Features</a>
            <a href="#catalog" className="hover:text-blue-600 transition">Catalog</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        </nav>
    </header>
);
}