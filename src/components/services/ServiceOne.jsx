import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  Images,
} from "lucide-react";

import img from "../../assets/za-10.jpeg";
import { Link } from "react-router-dom";

function ServiceOne() {
  return (
    <section className="relative h-[620px] sm:h-[680px] overflow-hidden bg-black">
      {/* ───────── BG IMAGE ───────── */}
      <motion.img
        src={img}
        alt="Luxury Decoration"
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
      <div className="absolute inset-0 bg-black/15 z-10" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />

      {/* Glow */}
      <div className="absolute left-0 top-0 z-10 h-[300px] w-[300px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Left Accent */}
      <div className="absolute left-0 top-0 z-20 h-full w-[2px] bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />

      {/* ───────── CONTENT ───────── */}
      <div className="relative z-30 flex h-full items-center md:pt-40 pt-40">
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
              duration: 0.7,
            }}
            className="max-w-2xl"
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
                PREMIUM EVENT DECORATION
              </span>
            </div>

            {/* HEADING */}
            <h1
              className="text-[2.9rem] leading-[0.95] text-white sm:text-6xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Balloon

              <br />

              <span
                className="text-yellow-400 pr-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                }}
              >
                Decoration  <span className="text-white">Services</span>
              </span>

             
            </h1>

            {/* LINE */}
            <div className="mt-6 h-[2px] w-20 bg-gradient-to-r from-yellow-400 to-yellow-600" />

            {/* DESCRIPTION */}
            <p
              className="mt-3 max-w-xl text-sm leading- text-white/70 sm:text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Transform your celebrations into unforgettable moments
              with our creative balloon decoration and event styling
              services.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              {/* BOOK BUTTON */}
              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group relative flex h-[56px] items-center justify-center overflow-hidden rounded-2xl bg-yellow-500 px-8 text-black shadow-[0_15px_40px_rgba(245,193,24,0.25)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,193,24,0.45)]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {/* Shine */}
                  <span className="absolute inset-0 overflow-hidden rounded-2xl">
                    <span className="absolute left-[-120%] top-0 h-full w-[120%] skew-x-[25deg] bg-white/25 transition-all duration-1000 group-hover:left-[130%]" />
                  </span>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-black">
                      <PhoneCall
                        size={16}
                        className="transition-all duration-300 group-hover:text-yellow-400"
                      />
                    </div>

                    <span className="text-[14px] tracking-[0.3px]">
                      Book Now
                    </span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </motion.button>
              </a>

              {/* GALLERY BUTTON */}
              <Link to="/our-gallery">
                <motion.button
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group relative flex h-[56px] items-center justify-center overflow-hidden rounded-2xl border border-yellow-500/20 bg-white/[0.03] px-8 text-yellow-300 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/40 hover:bg-yellow-400/10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
                  </div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 transition-all duration-300 group-hover:bg-yellow-400">
                      <Images
                        size={16}
                        className="transition-all duration-300 group-hover:text-black"
                      />
                    </div>

                    <span className="text-[14px] tracking-[0.3px]">
                      View Gallery
                    </span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ───────── BOTTOM FADE ───────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

export default ServiceOne;