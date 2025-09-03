"use client";

import { motion } from "framer-motion";

export default function MaintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-green-900 via-green-700 to-green-900 text-white text-center px-6">
      {/* Logo / Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        Organo Extracts Global Limited
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl max-w-2xl mb-8"
      >
        Our website is currently under maintenance to serve you better.  
        We’ll be back online very soon. Thank you for your patience!
      </motion.p>

      {/* Animated Loader */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"
      />

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 text-sm md:text-base"
      >
        <p>📧 info@organoextract.com</p>
        <p>📞 +234-802-768-6565</p>
      </motion.div>
    </main>
  );
}
