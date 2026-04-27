import React from "react";
import { motion } from "framer-motion";

export default function CoursePricing() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🌟 BG Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(234,179,8,0.08),transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Choose Your <span className="text-yellow-400">Plan</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Start small or go pro — both plans are designed to help you earn 💰
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* 🟡 BASIC PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >

            {/* BORDER */}
            <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 group-hover:border-yellow-400 transition" />

            <div className="relative bg-[#0a0a0a] p-8 rounded-2xl overflow-hidden">

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                🟡 Basic Plan
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Perfect for beginners starting their journey
              </p>

              {/* PRICE */}
              <p className="text-4xl font-extrabold mb-6">
                ₹10,000
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li>✔ Balloon Basics</li>
                <li>✔ Simple Decorations</li>
                <li>✔ Garland & Ring Setup</li>
                <li>✔ Beginner Friendly Training</li>
              </ul>

              {/* BUTTON */}
              <a
                href="https://wa.me/7888735541?text=I want Basic Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold 
                hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
                  Get Started
                </button>
              </a>

            </div>
          </motion.div>


          {/* 🔥 ADVANCED PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >

            {/* GLOW BORDER */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r 
            from-yellow-500/40 via-yellow-300/20 to-yellow-600/40 blur opacity-60 group-hover:opacity-100 transition" />

            <div className="relative bg-[#0a0a0a] p-8 rounded-2xl border border-yellow-500/30 overflow-hidden">

              {/* BADGE */}
              <span className="absolute top-4 right-4 text-xs bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                MOST POPULAR
              </span>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                🔥 Advanced Plan
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                Best for serious learners who want to earn fast
              </p>

              {/* PRICE */}
              <p className="text-4xl font-extrabold mb-6">
                ₹15,000
              </p>

              {/* FEATURES */}
              <ul className="space-y-3 text-gray-300 text-sm mb-8">
                <li>✔ All Basic Features</li>
                <li>✔ Advanced Decoration Designs</li>
                <li>✔ Theme Setup & Backdrops</li>
                <li>✔ Business Growth Tips</li>
              </ul>

              {/* BUTTON */}
              <a
                href="https://wa.me/7888735541?text=I want Advanced Plan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold 
                hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
                  Upgrade Now
                </button>
              </a>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}