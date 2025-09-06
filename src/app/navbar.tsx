"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Organo Choice Logo"
            width={50}
            height={50}
            priority
          />
          <span className="text-xl font-bold">Organo Choice</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
          <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400">Products</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}
