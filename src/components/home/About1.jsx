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
      className="
      relative overflow-hidden
      bg-white
      py-16 sm:py-20 lg:py-28
      text-black
    "
    >
      {/* ───────── BG EFFECTS ───────── */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
          }}
        />

        {/* Glow */}
        <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[100px]" />

        <div className="absolute -bottom-20 right-0 h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[100px]" />
      </div>

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── TOP LABEL ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          <div className="h-[2px] w-8 bg-pink-500" />

          <span
            className="
            text-[10px] uppercase tracking-[4px]
            text-pink-500
            sm:text-[11px]
          "
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            WHO WE ARE
          </span>
        </motion.div>

        {/* ───────── GRID ───────── */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* ───────── IMAGE SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative order-2 lg:order-1"
          >
            
            {/* Border */}
            <div className="absolute -left-3 -top-3 h-[70%] w-[70%] rounded-2xl border border-pink-500/20" />

            <div className="absolute -bottom-3 -right-3 h-[70%] w-[70%] rounded-2xl border border-pink-500/10" />

            {/* Image */}
            <div className="relative overflow-hidden rounded-[28px] shadow-2xl shadow-pink-100">
              
              <motion.img
                src={img1}
                alt="Mannat Luxury Events"
                className="
                h-[320px] w-full object-cover
                sm:h-[420px]
                md:h-[500px]
                lg:h-[620px]
              "
                style={{
                  y: imgY,
                  scale: imgScale,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="
                absolute bottom-4 left-4
                flex items-center gap-3
                rounded-2xl
                border border-pink-200
                bg-white/90
                px-4 py-3
                backdrop-blur-md
              "
              >
                <div
                  className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-pink-500
                "
                >
                  <BadgeCheck
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p
                    className="
                    text-[10px]
                    uppercase tracking-[3px]
                    text-pink-500
                  "
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    EST. 2019
                  </p>

                  <p className="mt-1 text-xs text-black/70">
                    Trusted by 2000+ families
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ───────── CONTENT SIDE ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="order-1 lg:order-2"
          >
            
            {/* HEADING */}
            <h2
              className="
              text-[2.5rem]
              leading-[1]
              sm:text-5xl
              md:text-6xl
            "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              <span className="text-pink-500">
                About
              </span>

              <br />

              <span className="text-black">
                Mannat Luxury
              </span>

              <br />

              <span className="text-black/40">
                Events
              </span>
            </h2>

            {/* Divider */}
            <div className="mb-6 mt-6 h-[2px] w-16 bg-pink-500" />

            {/* Tagline */}
            <p
              className="
              mb-5
              text-xs uppercase tracking-[3px]
              text-pink-500
              sm:text-sm
            "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              Turning Celebrations Into Magical Moments
            </p>

            {/* BODY TEXT */}
            <div
              className="
              space-y-5
              text-sm leading-7
              text-black/70
              sm:text-[15px]
              sm:leading-8
            "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              <p>
                <span className="font-semibold text-black">
                  Mannat Luxury Events
                </span>{" "}
                is a trusted and fast-growing event
                decoration company with{" "}
                <span className="font-semibold text-pink-500">
                  5+ years
                </span>{" "}
                of experience.
              </p>

              <p>
                From birthdays, anniversaries, and
                surprise parties to weddings,
                haldi functions, and grand entries
                — we bring creativity, elegance,
                and perfection to every event.
              </p>

              <p>
                We focus on personalized themes,
                premium decoration quality,
                and unforgettable experiences 💖
              </p>
            </div>

            {/* ───────── STATS ───────── */}
            <div
              ref={statsRef}
              className="
              mt-10
              grid grid-cols-2 gap-3
              sm:grid-cols-4
            "
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
                  className="
                  rounded-2xl
                  border border-pink-100
                  bg-pink-50
                  px-4 py-5
                  text-center
                  transition-all duration-300
                  hover:bg-pink-100
                "
                >
                  <p
                    className="
                    text-2xl text-pink-500
                    sm:text-3xl
                  "
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
                    className="
                    mt-2
                    text-[10px]
                    uppercase tracking-[2px]
                    text-black/50
                    sm:text-xs
                  "
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ───────── BUTTONS ───────── */}
            <div
              className="
              mt-10
              flex flex-col gap-4
              sm:flex-row sm:items-center
            "
            >
              
              {/* CALL BUTTON */}
              <a
                href="tel:+917888735541"
                className="
                group flex items-center gap-4
                rounded-2xl
                border border-pink-200
                bg-pink-50
                px-5 py-4
                transition-all duration-300
                hover:border-pink-500
              "
              >
                <div
                  className="
                  flex h-11 w-11 items-center justify-center
                  rounded-xl bg-pink-500
                "
                >
                  <PhoneCall
                    size={18}
                    className="text-white"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-black">
                    Call Anytime
                  </p>

                  <p className="text-base text-pink-500">
                    78887-35541
                  </p>
                </div>
              </a>

              {/* WHATSAPP BUTTON */}
              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-center justify-center gap-2
                rounded-2xl
                border border-pink-500
                px-5 py-4
                text-pink-500
                transition-all duration-300
                hover:bg-pink-500
                hover:text-white
              "
              >
                Book on WhatsApp

                <ArrowRight
                  size={15}
                  className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}