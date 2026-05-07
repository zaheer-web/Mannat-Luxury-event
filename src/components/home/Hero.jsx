import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import {
  Star,
  PartyPopper,
  BadgeCheck,
  PhoneCall,
  Images,
  Sparkles,
} from "lucide-react";

import heroImg from "../../assets/sasa-2.jpeg";

/* ───────────────── Sparkle ───────────────── */
function FloatingSparkle({ style }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        y: [0, -60],
      }}
      transition={{
        duration: style.duration,
        delay: style.delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    >
      <Sparkles
        size={12}
        className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]"
      />
    </motion.div>
  );
}

const sparkles = Array.from({ length: 16 }, (_, i) => ({
  left: `${5 + i * 6}%`,
  top: `${15 + Math.sin(i) * 25}%`,
  delay: i * 0.2,
  duration: 3 + (i % 3) * 0.5,
}));

export default function Hero() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* ───────── Background ───────── */}
      <motion.img
        src={heroImg}
        alt="Luxury Decoration"
        onLoad={() => setLoaded(true)}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/50 to-black/10" />

      <div className="absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Sparkles */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {sparkles.map((s, i) => (
          <FloatingSparkle key={i} style={s} />
        ))}
      </div>

      {/* Left Border */}
      <div className="absolute left-0 top-0 z-20 h-full w-[2px]">
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-full w-full bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
        />
      </div>

      {/* ───────── Content ───────── */}
      <div className="relative z-30 flex min-h-screen items-center md:pt-32 pt-32">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="max-w-2xl">
            {/* Top Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={loaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-yellow-400" />

              <span
                className="text-[10px] uppercase tracking-[5px] text-yellow-400"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                PREMIUM EVENT DECORATORS
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1
                className="text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-1px] text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                Make Every
                <br />

                <span
                  className="text-yellow-400"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                  }}
                >
                  <Typewriter
                    words={[
                      "Celebration Special",
                      "Event Feel Luxury",
                      "Moment Unforgettable",
                    ]}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={loaded ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{ originX: 0 }}
              className="mt-6 h-[2px] w-24 bg-gradient-to-r from-yellow-400 to-yellow-600"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base md:pr-20"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              We craft elegant balloon decorations and luxury event setups
              for birthdays, anniversaries, weddings and every special
              celebration with premium styling and creativity.
            </motion.p>

            {/* Buttons */}
            {/* ───────── BUTTONS ───────── */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={loaded ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="mt-10 flex flex-col sm:flex-row gap-4"
>
  {/* BOOK NOW BUTTON */}
  <a
    href="https://wa.me/917888735541"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto"
  >
    <motion.button
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.96 }}
      className="group relative flex h-[58px] w-full sm:w-auto items-center justify-center overflow-hidden rounded-2xl bg-yellow-500 px-8 text-black shadow-[0_15px_40px_rgba(245,193,24,0.25)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(245,193,24,0.45)]"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
      }}
    >
      {/* Animated Background */}
      <span className="absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute left-[-120%] top-0 h-full w-[120%] skew-x-[25deg] bg-white/25 transition-all duration-1000 group-hover:left-[130%]" />
      </span>

      {/* Inner Content */}
      <span className="relative z-10 flex items-center gap-3">
        {/* Icon Circle */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-black group-hover:rotate-6">
          <PhoneCall
            size={17}
            className="transition-colors duration-300 group-hover:text-yellow-400"
          />
        </span>

        {/* Text */}
        <span className="text-[14px] tracking-[0.3px]">
          Book Now
        </span>
      </span>
    </motion.button>
  </a>

  {/* GALLERY BUTTON */}
  <motion.button
    whileHover={{
      y: -4,
      scale: 1.02,
    }}
    whileTap={{ scale: 0.96 }}
    onClick={() => navigate("/our-gallery")}
    className="group relative flex h-[58px] w-full sm:w-auto items-center justify-center overflow-hidden rounded-2xl border border-yellow-400/20 bg-white/[0.03] px-8 backdrop-blur-xl transition-all duration-500 hover:border-yellow-400/50 hover:bg-yellow-400/10"
    style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
    }}
  >
    {/* Hover Glow */}
    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
    </div>

    {/* Content */}
    <span className="relative z-10 flex items-center gap-3 text-yellow-300 transition-all duration-300 group-hover:text-yellow-200">
      {/* Icon */}
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-400/20 bg-yellow-400/10 transition-all duration-300 group-hover:rotate-6 group-hover:border-yellow-400/40 group-hover:bg-yellow-400">
        <Images
          size={17}
          className="transition-colors duration-300 group-hover:text-black"
        />
      </span>

      {/* Text */}
      <span className="text-[14px] tracking-[0.3px]">
        View Gallery
      </span>
    </span>
  </motion.button>
</motion.div>

            {/* Trust Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={loaded ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                {
                  icon: (
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ),
                  text: "4.9 Rating",
                },
                {
                  icon: (
                    <PartyPopper
                      size={15}
                      className="text-yellow-400"
                    />
                  ),
                  text: "500+ Events",
                },
                {
                  icon: (
                    <BadgeCheck
                      size={15}
                      className="text-yellow-400"
                    />
                  ),
                  text: "Trusted Service",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(250,204,21,0.3)",
                  }}
                  className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md transition-all duration-300 hover:bg-white/10"
                >
                  {item.icon}

                  <span
                    className="text-[11px] uppercase tracking-[2px] text-white/80"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span
          className="text-[10px] uppercase tracking-[4px] text-white/40"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
        >
          SCROLL
        </span>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-8 w-[1px] bg-gradient-to-b from-yellow-400/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}