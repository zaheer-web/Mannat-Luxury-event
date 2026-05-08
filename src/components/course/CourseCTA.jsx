import React from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  Rocket,
} from "lucide-react";

export default function CourseCTA() {
  return (
    <section
      className="
      relative overflow-hidden
      bg-white

      py-20
      sm:py-24
      lg:py-32
    "
    >
      
      {/* ───────── BG GRID ───────── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
        }}
      />

      {/* ───────── PINK GLOW ───────── */}
      <div
        className="
        absolute left-[-120px] top-[-120px]

        h-[320px] w-[320px]

        rounded-full
        bg-pink-500/10

        blur-[120px]
      "
      />

      <div
        className="
        absolute bottom-[-120px] right-[-120px]

        h-[320px] w-[320px]

        rounded-full
        bg-pink-400/10

        blur-[120px]
      "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
        className="
        relative z-10

        mx-auto
        max-w-5xl

        px-4
        sm:px-6
      "
      >
        
        {/* ───────── MAIN CARD ───────── */}
        <div
          className="
          group relative overflow-hidden

          rounded-[40px]
          border border-pink-100
          bg-[#fff7fb]

          p-8
          sm:p-12
          lg:p-16

          shadow-2xl shadow-pink-100/50
        "
        >
          
          {/* Top Border */}
          <div
            className="
            absolute left-0 top-0
            h-[4px] w-full
            bg-pink-500
          "
          />

          {/* Glow */}
          <div
            className="
            absolute right-0 top-0

            h-60 w-60

            rounded-full
            bg-pink-500/15

            blur-[120px]
          "
          />

          {/* Floating Glow */}
          <div
            className="
            absolute bottom-[-80px] left-[-80px]

            h-60 w-60

            rounded-full
            bg-pink-400/10

            blur-[120px]
          "
          />

          {/* CONTENT */}
          <div className="relative z-10 text-center">
            
            {/* Badge */}
            <div
              className="
              mx-auto mb-6

              flex w-fit items-center gap-2

              rounded-full
              border border-pink-200
              bg-white

              px-5 py-2

              shadow-lg shadow-pink-100
            "
            >
              
              <Sparkles
                size={16}
                className="text-pink-500"
              />

              <span
                className="
                text-[11px]
                uppercase tracking-[3px]
                text-pink-500
              "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                LIMITED SEATS AVAILABLE
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
              text-[2.7rem]
              leading-[0.95]
              text-black

              sm:text-6xl
              lg:text-7xl
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Ready to Start

              <br />

              Your{" "}

              <span className="text-pink-500">
                Balloon Business?
              </span>
            </h2>

            {/* Desc */}
            <p
              className="
              mx-auto
              mt-7
              max-w-2xl

              text-sm
              leading-8
              text-black/65

              sm:text-base
            "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
              }}
            >
              Limited seats available. Don’t
              miss this opportunity to learn a
              high-income skill and build your
              own successful decoration
              business professionally.
            </p>

            {/* Urgency */}
            <div
              className="
              mt-7

              inline-flex items-center gap-2

              rounded-full
              bg-pink-50

              px-5 py-3

              text-pink-500

              shadow-lg shadow-pink-100
            "
            >
              
              <Rocket size={16} />

              <span
                className="
                text-sm tracking-[0.3px]
              "
                style={{
                  fontFamily:
                    "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Only Few Seats Left
              </span>
            </div>

            {/* BUTTON */}
            <div className="mt-10 flex justify-center">
              
              <a
                href="https://wa.me/7888735541?text=I want to join the course"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                  group/btn

                  flex h-[62px]
                  items-center justify-center
                  gap-3

                  rounded-2xl
                  bg-pink-500

                  px-8 sm:px-10

                  text-white

                  shadow-[0_20px_60px_rgba(236,72,153,0.35)]

                  transition-all duration-500
                  hover:bg-pink-600
                "
                >
                  
                  {/* Icon */}
                  <div
                    className="
                    flex h-10 w-10
                    items-center justify-center

                    rounded-full
                    bg-white/20
                  "
                  >
                    <Sparkles size={16} />
                  </div>

                  {/* Text */}
                  <span
                    className="
                    text-sm
                    sm:text-base
                    tracking-[0.3px]
                  "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    Book Your Slot Now
                  </span>

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    className="
                    transition-transform duration-300
                    group-hover/btn:translate-x-1
                  "
                  />
                </motion.button>
              </a>
            </div>
          </div>

          {/* Hover Glow */}
          <div
            className="
            absolute inset-0 opacity-0

            transition-opacity duration-500
            group-hover:opacity-100
          "
          >
            <div
              className="
              absolute left-1/2 top-1/2

              h-72 w-72

              -translate-x-1/2
              -translate-y-1/2

              rounded-full
              bg-pink-500/10

              blur-[120px]
            "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}