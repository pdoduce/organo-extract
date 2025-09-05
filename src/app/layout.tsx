import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./navbar"; // import client component

export const metadata = {
  title: "Organo Choice Global Limited",
  description: "Natural extracts for a healthier future",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Navbar */}
        <Navbar />

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
