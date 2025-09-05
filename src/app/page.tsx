"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-r from-green-900 via-green-700 to-green-900 text-white text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Welcome to Organo Extract Global Limited
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl max-w-2xl mb-6"
      >
        Harnessing nature’s power to create sustainable health and wellness solutions.
      </motion.p>

      <motion.a
        href="/about"
        whileHover={{ scale: 1.1 }}
        className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
      >
        Learn More About Us
      </motion.a>
    </section>
  );
}
