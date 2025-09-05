import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Organo Extract Global Limited",
  description: "Natural extracts for a healthier future",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <header className="bg-green-900 text-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">Organo Extract</h1>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-yellow-400">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400">About</a></li>
              <li><a href="/products" className="hover:text-yellow-400">Products</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-green-900 text-white text-center py-6 mt-10">
          <p>© {new Date().getFullYear()} Organo Extract Global Limited. All rights reserved.</p>
          <p>📧 info@organochoice.com | 📞 +234-802-768-6565</p>
        </footer>
      </body>
    </html>
  );
}
