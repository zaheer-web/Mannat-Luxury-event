import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Sparkles,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function CoursePricing() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-24 px-4 sm:px-6 text-white">
      {/* ───────── BG EFFECTS ───────── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_45%)]" />

      <div className="absolute top-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-10%] h-[400px] w-[400px] rounded-full bg-yellow-400/10 blur-[120px]" />

      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 70px),repeating-linear-gradient(90deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 70px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ───────── TITLE ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Top Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8 bg-yellow-500" />

            <span
              className="text-[10px] uppercase tracking-[5px] text-yellow-400"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              Pricing Plans
            </span>

            <div className="h-[2px] w-8 bg-yellow-500" />
          </div>

          {/* Heading */}
          <h2
            className="text-[2.4rem] sm:text-5xl lg:text-6xl leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
            }}
          >
            Choose Your{" "}
            <span className="text-yellow-400">
              Perfect Plan
            </span>
          </h2>

          {/* Description */}
          <p
            className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-7 text-white/60"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Start your balloon decoration journey with our premium
            training programs designed to help you learn, grow and earn.
          </p>
        </motion.div>

        {/* ───────── CARDS ───────── */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* ───────── BASIC PLAN ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[32px] border border-yellow-500/10 transition-all duration-500 group-hover:border-yellow-400/40" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0b0b0b] p-8 sm:p-10">
              {/* Glow */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-[90px]" />

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500/10 border border-yellow-500/20">
                <Sparkles
                  size={30}
                  className="text-yellow-400"
                />
              </div>

              {/* Plan Name */}
              <h3
                className="text-2xl text-yellow-400"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Basic Plan
              </h3>

              <p
                className="mt-2 text-sm leading-6 text-white/55"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Perfect for beginners starting their decoration
                journey with essential training.
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span
                  className="text-5xl text-white"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  ₹10,000
                </span>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Balloon Basics",
                  "Simple Decorations",
                  "Garland & Ring Setup",
                  "Beginner Friendly Training",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500/15">
                      <Check
                        size={12}
                        className="text-yellow-400"
                      />
                    </div>

                    <p
                      className="text-sm text-white/70"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="https://wa.me/7888735541?text=I want Basic Plan"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="group/btn mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-4 text-sm text-black shadow-[0_0_30px_rgba(245,193,24,0.3)] transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_45px_rgba(245,193,24,0.5)]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Get Started

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* ───────── ADVANCED PLAN ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-yellow-500/30 via-yellow-300/10 to-yellow-500/30 blur-xl opacity-70 transition duration-500 group-hover:opacity-100" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-[#0b0b0b] p-8 sm:p-10">
              {/* Badge */}
              <div
                className="absolute top-5 right-5 rounded-full bg-yellow-500 px-4 py-1 text-[10px] uppercase tracking-[2px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                Most Popular
              </div>

              {/* Glow */}
              <div className="absolute top-0 right-0 h-44 w-44 rounded-full bg-yellow-500/15 blur-[100px]" />

              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-500 border border-yellow-400/40 shadow-lg shadow-yellow-500/30">
                <Crown
                  size={30}
                  className="text-black"
                />
              </div>

              {/* Title */}
              <h3
                className="text-2xl text-yellow-400"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Advanced Plan
              </h3>

              <p
                className="mt-2 text-sm leading-6 text-white/55"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Best for serious learners who want premium skills
                and fast business growth.
              </p>

              {/* Price */}
              <div className="mt-8 flex items-end gap-2">
                <span
                  className="text-5xl text-white"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  ₹15,000
                </span>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "All Basic Features",
                  "Advanced Decoration Designs",
                  "Theme Setup & Backdrops",
                  "Business Growth Tips",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500">
                      <Check
                        size={12}
                        className="text-black"
                      />
                    </div>

                    <p
                      className="text-sm text-white/75"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="https://wa.me/7888735541?text=I want Advanced Plan"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="group/btn mt-10 flex w-full items-center justify-center gap-2 rounded-2xl bg-yellow-500 px-6 py-4 text-sm text-black shadow-[0_0_35px_rgba(245,193,24,0.4)] transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_55px_rgba(245,193,24,0.6)]"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Upgrade Now

                  <Rocket
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}