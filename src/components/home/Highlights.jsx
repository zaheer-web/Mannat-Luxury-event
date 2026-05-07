import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  PartyPopper,
  Crown,
  Gem,
  Palette,
  Wallet,
  Stars,
} from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    num: "01",
    title: "Balloon Decoration Experts",
    desc: "Creative balloon setups for birthdays, weddings & celebrations.",
  },
  {
    icon: PartyPopper,
    num: "02",
    title: "Birthday Surprise Setup",
    desc: "Luxury surprise decorations that make every birthday memorable.",
  },
  {
    icon: Heart,
    num: "03",
    title: "Anniversary Decoration",
    desc: "Romantic setups designed beautifully for special couples.",
  },
  {
    icon: Crown,
    num: "04",
    title: "Haldi & Wedding Decor",
    desc: "Traditional and modern luxury decoration experiences.",
  },
  {
    icon: Stars,
    num: "05",
    title: "Bridal & Couple Entry",
    desc: "Grand entry setups with lights, balloons and elegance.",
  },
  {
    icon: Gem,
    num: "06",
    title: "Proposal Decorations",
    desc: "Romantic proposal setups crafted with premium styling.",
  },
  {
    icon: Palette,
    num: "07",
    title: "Customized Themes",
    desc: "Personalized decoration themes according to your ideas.",
  },
  {
    icon: Wallet,
    num: "08",
    title: "Affordable Packages",
    desc: "Premium decoration services at budget-friendly pricing.",
  },
];

export default function Highlights() {
  return (
    <section className="relative overflow-hidden bg-[#070707] py-24">
      {/* ───────── BG EFFECTS ───────── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px)",
        }}
      />

      <div className="absolute top-0 left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* ───────── HEADING ───────── */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Top Label */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-yellow-500" />

              <span
                className="text-[10px] uppercase tracking-[5px] text-yellow-400"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.05] text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              We Create
              <br />

              <span className="text-yellow-400">
                Beautiful Moments
              </span>
            </h2>
          </motion.div>

          {/* Right Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-sm text-sm leading-7 text-white/50 lg:text-right"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Every celebration deserves elegance, creativity and premium
            decoration styling that leaves unforgettable memories.
          </motion.p>
        </div>

        {/* ───────── GRID ───────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0d0d0d] p-7 transition-all duration-500 hover:border-yellow-500/30"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-[70px]" />
                </div>

                {/* Animated Border */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full" />

                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="text-[20px] tracking-[4px] text-yellow-500/60"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.num}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/10 bg-yellow-500/5 transition-all duration-500 group-hover:scale-110 group-hover:border-yellow-500/30 group-hover:bg-yellow-500">
                    <Icon
                      size={20}
                      className="text-yellow-400 transition-all duration-500 group-hover:text-black"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[1.1rem] leading-snug text-white transition-all duration-300 group-hover:text-yellow-400"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                {/* Desc */}
                <p
                  className="mt-4 text-sm leading-7 text-white/50 transition-all duration-300 group-hover:text-white/70"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-12" />

                  <div className="h-2 w-2 rounded-full bg-yellow-500/40 transition-all duration-500 group-hover:bg-yellow-400" />
                </div>

                {/* Hover Background */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-yellow-500/[0.03] via-transparent to-yellow-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}