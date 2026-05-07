import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// import aboutImg from "../../assets/ah-1.jpg";
// import aboutImg from "../../assets/za-13.jpeg";
import aboutImg from "../../assets/fa-7.jpeg";

export default function AboutHero() {
  return (
    <section className="relative h-[620px] sm:h-[700px] overflow-hidden bg-black">
      {/* ───────── BG IMAGE ───────── */}
      <motion.img
        src={aboutImg}
        alt="about"
        initial={{ scale: 1 }}
        animate={{ scale: 1.06 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ───────── OVERLAYS ───────── */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/25 to-transparent" />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/20" />

      {/* Glow */}
      <div className="absolute left-0 top-0 z-10 h-[320px] w-[320px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Left Accent */}
      <div className="absolute left-0 top-0 z-20 h-full w-[2px] bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />

      {/* ───────── FLOATING SPARKLES ───────── */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [-20, -220],
              x: [0, i % 2 === 0 ? 15 : -15],
            }}
            transition={{
              duration: 6 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            className="absolute bottom-0"
            style={{
              left: `${8 + i * 7}%`,
            }}
          >
            <Sparkles
              size={13}
              className="text-yellow-400/70"
            />
          </motion.div>
        ))}
      </div>

      {/* ───────── CONTENT ───────── */}
      <div className="relative z-30 flex h-full items-center  pt-40">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            {/* TOP LABEL */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-yellow-500" />

              <span
                className="text-[10px] uppercase tracking-[5px] text-yellow-400"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="text-[2.9rem] leading-[0.95] text-white sm:text-6xl lg:text-7xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              About{" "}

              <span
                className="text-yellow-400"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Mannat Luxury
              </span>

              <br />

              <span className="text-white">
                Events
              </span>
            </h1>

            {/* LINE */}
            <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-yellow-400 to-yellow-600" />

            {/* DESCRIPTION */}
            <p
              className="mt-6 max-w-2xl text-sm leading- text-white/70 sm:text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              We are passionate event decorators dedicated to turning
              your celebrations into unforgettable experiences with
              creativity, perfection, and love.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ───────── BOTTOM FADE ───────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}