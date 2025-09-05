"use client";

import "./globals.css";
import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // lightweight icons

export const metadata = {
  title: "Organo Choice Global Limited",
  description: "Natural extracts for a healthier future",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <header className="bg-green-900 text-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <h1 className="text-2xl font-bold">
              <Link href="/">Organo Choice</Link>
            </h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
              <li>
                <Link href="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-yellow-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="md:hidden bg-green-800">
              <ul className="flex flex-col items-center space-y-4 py-6">
                <li>
                  <Link
                    href="/"
                    className="hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-yellow-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-green-900 text-white text-center py-6 mt-10">
          <p>
            © {new Date().getFullYear()} Organo Choice Global Limited. All rights
            reserved.
          </p>
          <p>📧 info@organochoice.com | 📞 +234-802-768-6565</p>
        </footer>
      </body>
    </html>
  );
}
