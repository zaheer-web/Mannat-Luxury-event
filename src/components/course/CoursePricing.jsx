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

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── TITLE ───────── */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            
            <div className="h-[2px] w-8 bg-pink-500" />

            <span
              className="
              text-[10px]
              uppercase tracking-[5px]
              text-pink-500
            "
              style={{
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              PRICING PLANS
            </span>

            <div className="h-[2px] w-8 bg-pink-500" />
          </div>

          {/* Heading */}
          <h2
            className="
            text-[2.8rem]
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
            Choose Your{" "}

            <span className="text-pink-500">
              Perfect Plan
            </span>
          </h2>

          {/* Desc */}
          <p
            className="
            mx-auto
            mt-6
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
            Start your balloon decoration
            journey with our premium training
            programs designed to help you
            learn, grow and earn professionally.
          </p>
        </motion.div>

        {/* ───────── CARDS ───────── */}
        <div className="grid gap-7 lg:grid-cols-2">
          
          {/* ───────── BASIC PLAN ───────── */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              y: -10,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
            group relative overflow-hidden

            rounded-[32px]
            border border-pink-100
            bg-white

            p-8
            sm:p-10

            shadow-xl shadow-pink-100/40

            transition-all duration-500

            hover:border-pink-300
            hover:shadow-2xl hover:shadow-pink-200/50
          "
          >
            
            {/* Top Border */}
            <div
              className="
              absolute left-0 top-0
              h-[3px] w-0
              bg-pink-500

              transition-all duration-500
              group-hover:w-full
            "
            />

            {/* Glow */}
            <div
              className="
              absolute right-0 top-0

              h-44 w-44

              rounded-full
              bg-pink-500/10

              blur-[100px]
            "
            />

            {/* Icon */}
            <div
              className="
              relative z-10

              flex h-16 w-16
              items-center justify-center

              rounded-2xl
              bg-pink-50

              text-pink-500

              transition-all duration-500

              group-hover:bg-pink-500
              group-hover:text-white
            "
            >
              <Sparkles size={30} />
            </div>

            {/* Plan Name */}
            <h3
              className="
              mt-7
              text-[2rem]
              text-black

              transition-all duration-300
              group-hover:text-pink-500
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Basic Plan
            </h3>

            {/* Desc */}
            <p
              className="
              mt-3
              text-sm
              leading-7
              text-black/60
            "
            >
              Perfect for beginners starting
              their decoration journey with
              essential training.
            </p>

            {/* Price */}
            <div className="mt-8 flex items-end gap-2">
              
              <span
                className="
                text-[3.5rem]
                leading-none
                text-black
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                ₹10,000
              </span>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-5">
              
              {[
                "Balloon Basics",
                "Simple Decorations",
                "Garland & Ring Setup",
                "Beginner Friendly Training",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="
                  flex items-start gap-3
                "
                >
                  
                  <div
                    className="
                    mt-[2px]

                    flex h-6 w-6
                    items-center justify-center

                    rounded-full
                    bg-pink-50

                    text-pink-500
                  "
                  >
                    <Check size={14} />
                  </div>

                  <p
                    className="
                    text-sm
                    text-black/70
                  "
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
                whileTap={{
                  scale: 0.97,
                }}
                className="
                group/btn

                mt-10
                flex w-full
                items-center justify-center
                gap-3

                rounded-2xl
                bg-pink-500

                px-6 py-4

                text-white

                shadow-[0_20px_60px_rgba(236,72,153,0.35)]

                transition-all duration-500
                hover:bg-pink-600
              "
              >
                
                <span className="text-sm">
                  Get Started
                </span>

                <ArrowRight
                  size={16}
                  className="
                  transition-transform duration-300
                  group-hover/btn:translate-x-1
                "
                />
              </motion.button>
            </a>
          </motion.div>

          {/* ───────── ADVANCED PLAN ───────── */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            whileHover={{
              y: -12,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
            group relative overflow-hidden

            rounded-[32px]
            border border-pink-200
            bg-[#fff7fb]

            p-8
            sm:p-10

            shadow-2xl shadow-pink-200/50

            transition-all duration-500

            hover:border-pink-400
          "
          >
            
            {/* Badge */}
            <div
              className="
              absolute right-5 top-5

              rounded-full
              bg-pink-500

              px-4 py-1

              text-[10px]
              uppercase tracking-[2px]
              text-white
            "
            >
              Most Popular
            </div>

            {/* Top Border */}
            <div
              className="
              absolute left-0 top-0
              h-[3px] w-full
              bg-pink-500
            "
            />

            {/* Glow */}
            <div
              className="
              absolute right-0 top-0

              h-52 w-52

              rounded-full
              bg-pink-500/15

              blur-[100px]
            "
            />

            {/* Icon */}
            <div
              className="
              relative z-10

              flex h-16 w-16
              items-center justify-center

              rounded-2xl
              bg-pink-500

              text-white

              shadow-lg shadow-pink-300/50
            "
            >
              <Crown size={30} />
            </div>

            {/* Title */}
            <h3
              className="
              mt-7
              text-[2rem]
              text-black

              transition-all duration-300
              group-hover:text-pink-500
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Advanced Plan
            </h3>

            {/* Desc */}
            <p
              className="
              mt-3
              text-sm
              leading-7
              text-black/60
            "
            >
              Best for serious learners who
              want premium skills and fast
              business growth.
            </p>

            {/* Price */}
            <div className="mt-8 flex items-end gap-2">
              
              <span
                className="
                text-[3.5rem]
                leading-none
                text-black
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                ₹15,000
              </span>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-5">
              
              {[
                "All Basic Features",
                "Advanced Decoration Designs",
                "Theme Setup & Backdrops",
                "Business Growth Tips",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="
                  flex items-start gap-3
                "
                >
                  
                  <div
                    className="
                    mt-[2px]

                    flex h-6 w-6
                    items-center justify-center

                    rounded-full
                    bg-pink-500

                    text-white
                  "
                  >
                    <Check size={14} />
                  </div>

                  <p
                    className="
                    text-sm
                    text-black/70
                  "
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
                whileTap={{
                  scale: 0.97,
                }}
                className="
                group/btn

                mt-10
                flex w-full
                items-center justify-center
                gap-3

                rounded-2xl
                bg-pink-500

                px-6 py-4

                text-white

                shadow-[0_20px_60px_rgba(236,72,153,0.35)]

                transition-all duration-500
                hover:bg-pink-600
              "
              >
                
                <span className="text-sm">
                  Upgrade Now
                </span>

                <Rocket
                  size={16}
                  className="
                  transition-transform duration-300
                  group-hover/btn:translate-x-1
                "
                />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}