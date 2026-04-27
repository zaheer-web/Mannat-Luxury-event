import React from "react";
import { motion } from "framer-motion";

export default function CourseCTA() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🌟 Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.15),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >

        {/* 💎 GLASS CARD */}
        <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-yellow-500/20 rounded-2xl p-10 sm:p-12 shadow-xl">

          {/* 🔥 HEADLINE */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Start Your <br />
            <span className="text-yellow-400">Balloon Business?</span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-400 mt-5 text-sm md:text-base max-w-xl mx-auto">
            Limited seats available. Don’t miss this opportunity to learn a high-income skill and build your own business 🚀
          </p>

          {/* ⚡ URGENCY */}
          <p className="mt-4 text-yellow-400 text-sm font-semibold tracking-wide">
            ⚡ Only Few Seats Left
          </p>

          {/* BUTTON */}
          <a
            href="https://wa.me/7888735541?text=I want to join the course"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold 
            hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30 text-lg">
              Book Your Slot Now
            </button>
          </a>

        </div>

      </motion.div>
    </section>
  );
}