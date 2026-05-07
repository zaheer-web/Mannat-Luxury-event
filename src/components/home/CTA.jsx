import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarHeart,
  MessageCircleMore,
} from "lucide-react";

import cta from "../../assets/fa-15.jpeg";

export default function CTA() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ───────── IMAGE PARALLAX ───────── */
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black"
      style={{
        minHeight: "clamp(320px, 50vw, 520px)",
      }}
    >
      {/* ───────── BG IMAGE ───────── */}
      <motion.img
        src={cta}
        alt="Luxury Decoration"
        style={{ y: imgY }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full object-cover"
      />

      {/* ───────── OVERLAYS ───────── */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-950/30 to-transparent" />

      {/* Left Accent */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />

      {/* Right Accent */}
      <div className="absolute right-0 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent md:block" />

      {/* ───────── CONTENT ───────── */}
      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-14">
        <div className="max-w-2xl">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-[2px] w-7 bg-yellow-400" />

            <span
              className="text-[10px] uppercase tracking-[5px] text-yellow-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              LET'S CELEBRATE TOGETHER
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="text-[2.7rem] leading-[1.02] text-white sm:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Make Your
            <br />

            <span
              className="text-yellow-400"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Moments
            </span>{" "}
            Special
            <br />

            <span
              className="text-[1.6rem] text-white/55 sm:text-3xl lg:text-4xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
              }}
            >
              With Beautiful Balloon Decorations
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.5,
            }}
            style={{ originX: 0 }}
            className="mt-7 h-[2px] w-16 bg-gradient-to-r from-yellow-400 to-yellow-600"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.6,
            }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            We design premium balloon decorations and luxury event
            setups for birthdays, anniversaries, proposals,
            weddings and every special celebration.
          </motion.p>

          {/* ───────── BUTTONS ───────── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* BOOK BUTTON */}
            <Link to="/contact">
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex h-[58px] items-center justify-center overflow-hidden rounded-2xl bg-yellow-500 px-8 text-black shadow-[0_15px_40px_rgba(245,193,24,0.25)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,193,24,0.45)]"
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
                  {/* Icon */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-black">
                    <CalendarHeart
                      size={17}
                      className="transition-colors duration-300 group-hover:text-yellow-400"
                    />
                  </span>

                  {/* Text */}
                  <span className="text-[14px] tracking-[0.3px]">
                    Book Your Event
                  </span>
                </span>
              </motion.button>
            </Link>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{ scale: 0.96 }}
                className="group relative flex h-[58px] items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/20 bg-white/[0.03] px-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/50 hover:bg-yellow-400/10"
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
                <span className="relative z-10 flex items-center gap-3 text-yellow-300 transition-all duration-300 group-hover:text-yellow-200">
                  {/* Icon */}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 transition-all duration-300 group-hover:rotate-6 group-hover:border-yellow-400/40 group-hover:bg-yellow-400">
                    <MessageCircleMore
                      size={17}
                      className="transition-colors duration-300 group-hover:text-black"
                    />
                  </span>

                  {/* Text */}
                  <span className="text-[14px] tracking-[0.3px]">
                    WhatsApp Us
                  </span>

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ───────── BOTTOM LINE ───────── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 opacity-60" />
    </section>
  );
}