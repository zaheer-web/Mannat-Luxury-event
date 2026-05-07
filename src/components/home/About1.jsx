import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";

import {
  PhoneCall,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import img1 from "../../assets/sasa-3.jpeg";

/* ───────── COUNTER ───────── */
function Counter({ end, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, inView]);

  return <span>{count}</span>;
}

/* ───────── STATS ───────── */
const stats = [
  { end: 5, suffix: "+", label: "Years Experience" },
  { end: 2000, suffix: "+", label: "Happy Clients" },
  { end: 50, suffix: "+", label: "Team Members" },
  { end: 4, suffix: "+", label: "States Covered" },
];

export default function About1() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const statsInView = useInView(statsRef, {
    once: true,
    margin: "-80px",
  });

  /* ───────── IMAGE SCROLL ───────── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", "6%"]
  );

  const imgScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.08, 1.0, 1.06]
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080808] py-24 md:py-32 text-white"
    >
      {/* ───────── BG EFFECTS ───────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px)",
          }}
        />

        {/* Glow */}
        <div className="absolute -left-20 -top-20 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />

        <div className="absolute -bottom-20 -right-20 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* ───────── TOP LABEL ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex items-center gap-3"
        >
          <div className="h-[2px] w-8 bg-yellow-500" />

          <span
            className="text-yellow-500 text-[11px] uppercase tracking-[5px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            WHO WE ARE
          </span>
        </motion.div>

        {/* ───────── GRID ───────── */}
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ───────── IMAGE SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative order-2 lg:order-1"
          >
            {/* Border */}
            <div className="absolute -left-4 -top-4 h-[70%] w-[70%] rounded-2xl border border-yellow-500/20" />

            <div className="absolute -bottom-4 -right-4 h-[70%] w-[70%] rounded-2xl border border-yellow-500/10" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60">
              <motion.img
                src={img1}
                alt="Mannat Luxury Events"
                className="h-[420px] w-full object-cover sm:h-[500px]"
                style={{
                  y: imgY,
                  scale: imgScale,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.5,
                }}
                className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl border border-yellow-500/30 bg-black/70 px-4 py-3 backdrop-blur-md"
              >
                {/* REAL ICON */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/20">
                  <BadgeCheck
                    size={18}
                    className="text-black"
                  />
                </div>

                <div>
                  <p
                    className="text-yellow-400 text-[11px] uppercase tracking-[4px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    EST. 2019
                  </p>

                  <p
                    className="mt-1 text-[12px] text-white/70"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    Trusted by 2000+ families
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ───────── CONTENT SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            {/* HEADING */}
            <h2
              className="text-[2.8rem] leading-[1.02] tracking-tight sm:text-5xl md:text-6xl"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              <span className="text-yellow-400">
                About
              </span>

              <br />

              <span className="text-white">
                Mannat Luxury
              </span>

              <br />

              <span className="text-white/45">
                Events
              </span>
            </h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ originX: 0 }}
              className="mb-6 mt-6 h-[2px] w-16 bg-gradient-to-r from-yellow-400 to-yellow-600"
            />

            {/* Tagline */}
            <p
              className="mb-5 text-sm uppercase tracking-[3px] text-yellow-400 sm:text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Turning Celebrations Into Magical Moments
            </p>

            {/* BODY TEXT */}
            <div
              className="space-y-5 text-[15px] leading-8 text-white/60"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              <p>
                <span className="font-semibold text-white">
                  Mannat Luxury Events
                </span>{" "}
                is a trusted and fast-growing event
                decoration company with{" "}
                <span className="font-semibold text-yellow-400">
                  5+ years
                </span>{" "}
                of experience.
              </p>

              <p>
                From birthdays, anniversaries, and
                surprise parties to weddings, haldi
                functions, and grand entries — we
                bring creativity, elegance, and
                perfection to every event.
              </p>

              <p>
                Our team focuses on personalized
                themes, premium quality materials,
                and attention to detail to make your
                special moments truly unforgettable 💛
              </p>
            </div>

            {/* ───────── STATS ───────── */}
            <div
              ref={statsRef}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/5 sm:grid-cols-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    statsInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.5,
                  }}
                  className="bg-[#0e0e0e] px-4 py-5 text-center transition-colors duration-300 hover:bg-yellow-500/5"
                >
                  <p
                    className="text-2xl text-yellow-400 sm:text-3xl"
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                      fontWeight: 700,
                    }}
                  >
                    <Counter
                      end={stat.end}
                      inView={statsInView}
                    />
                    {stat.suffix}
                  </p>

                  <p
                    className="mt-2 text-[11px] uppercase tracking-[2px] text-white/40 sm:text-xs"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ───────── BUTTONS ───────── */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {/* CALL BUTTON */}
              <a
                href="tel:+917888735541"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-[#111] px-5 py-4 transition-all duration-300 hover:border-yellow-500/40"
              >
                {/* REAL ICON */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-500 shadow-lg shadow-yellow-500/30 transition-transform duration-300 group-hover:scale-110">
                  <PhoneCall
                    size={18}
                    className="text-black"
                  />
                </div>

                <div>
                  <p
                    className="text-sm text-white"
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Call Anytime
                  </p>

                  <p
                    className="text-base tracking-wide text-yellow-400"
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                      fontWeight: 700,
                    }}
                  >
                    78887-35541
                  </p>
                </div>
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-2xl border border-yellow-500/40 px-5 py-4 text-yellow-300 transition-all duration-300 hover:border-yellow-500 hover:bg-yellow-500 hover:text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Book on WhatsApp

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}