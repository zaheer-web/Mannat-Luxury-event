import React, { useState } from "react";
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
  ArrowRight,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/birthday/ba-4.jpeg";
import img2 from "../../assets/birthday/bs-2.jpg";
import img3 from "../../assets/anivarsary/an-1.jpeg";
import img4 from "../../assets/haldi/za-3.jpeg";
import img5 from "../../assets/za-9.jpeg";
import img6 from "../../assets/za-26.jpeg";
import img7 from "../../assets/za-14.jpeg";
import img8 from "../../assets/za-27.jpeg";

/* ───────── DATA ───────── */
const highlights = [
  {
    icon: Sparkles,
    num: "01",
    image: img1,
    title: "Balloon Decoration Experts",
    desc: "Creative balloon setups for birthdays & celebrations.",
  },
  {
    icon: PartyPopper,
    num: "02",
    image: img2,
    title: "Birthday Surprise Setup",
    desc: "Luxury surprise decorations for memorable birthdays.",
  },
  {
    icon: Heart,
    num: "03",
    image: img3,
    title: "Anniversary Decoration",
    desc: "Romantic setups designed beautifully for couples.",
  },
  {
    icon: Crown,
    num: "04",
    image: img4,
    title: "Haldi & Wedding Decor",
    desc: "Traditional and modern luxury decoration experiences.",
  },
  {
    icon: Stars,
    num: "05",
    image: img5,
    title: "Bridal & Couple Entry",
    desc: "Grand entry setups with lights and elegance.",
  },
  {
    icon: Gem,
    num: "06",
    image: img6,
    title: "Proposal Decorations",
    desc: "Romantic proposal setups crafted beautifully.",
  },
  {
    icon: Palette,
    num: "07",
    image: img7,
    title: "Customized Themes",
    desc: "Personalized decoration themes according to ideas.",
  },
  {
    icon: Wallet,
    num: "08",
    image: img8,
    title: "Affordable Packages",
    desc: "Premium decoration services at budget pricing.",
  },
];

export default function Highlights() {
  const [showAllMobile, setShowAllMobile] =
    useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      
      {/* BG GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── HEADING ───────── */}
        <div className="mb-14">
          
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-pink-500" />

            <span
              className="
              text-[10px]
              uppercase tracking-[5px]
              text-pink-500
            "
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
            className="
            max-w-3xl

            text-[2.5rem]
            leading-[1.05]
            text-black

            sm:text-5xl
            lg:text-6xl
          "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            We Create

            <br />

            <span className="text-pink-500">
              Beautiful Moments
            </span>
          </h2>
        </div>

        {/* ───────── GRID ───────── */}
        <div
          className="
          grid grid-cols-2 gap-4

          lg:grid-cols-4
          lg:gap-6
        "
        >
          {highlights.map((item, i) => {
            /* Mobile Logic */
            const hiddenOnMobile =
              i >= 4 && !showAllMobile;

            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                }}
                whileHover={{ y: -8 }}
                className={`
                  ${
                    hiddenOnMobile
                      ? "hidden lg:block"
                      : "block"
                  }

                  group relative overflow-hidden

                  rounded-[22px]
                  border border-pink-100
                  bg-white

                  shadow-lg shadow-pink-100/40

                  transition-all duration-500

                  hover:border-pink-300
                  hover:shadow-2xl hover:shadow-pink-200/50
                `}
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

                {/* Image */}
                <div className="relative overflow-hidden">
                  
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    h-[150px] w-full object-cover

                    transition-transform duration-700
                    group-hover:scale-110

                    sm:h-[190px]
                    lg:h-[240px]
                  "
                  />

                  {/* Number */}
                  <div
                    className="
                    absolute left-3 top-3

                    rounded-full
                    bg-white/90
                    px-3 py-1

                    text-[10px]
                    tracking-[3px]
                    text-pink-500
                  "
                    style={{
                      fontFamily:
                        "'Montserrat', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.num}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                    absolute right-3 top-3

                    flex h-9 w-9
                    items-center justify-center

                    rounded-xl
                    bg-pink-500

                    transition-all duration-500
                    group-hover:scale-110

                    sm:h-11 sm:w-11
                  "
                  >
                    <Icon
                      size={16}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  
                  {/* Title */}
                  <h3
                    className="
                    text-[15px]
                    leading-snug
                    text-black

                    transition-all duration-300
                    group-hover:text-pink-500

                    sm:text-[1.1rem]
                  "
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="
                    mt-2
                    text-[12px]
                    leading-6
                    text-black/60

                    sm:text-sm
                  "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-4 flex items-center gap-2">
                    
                    <div
                      className="
                      h-[2px] w-0
                      bg-pink-500

                      transition-all duration-500
                      group-hover:w-10
                    "
                    />

                    <div
                      className="
                      h-2 w-2 rounded-full
                      bg-pink-300

                      transition-all duration-500
                      group-hover:bg-pink-500
                    "
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ───────── MOBILE VIEW ALL BUTTON ───────── */}
        {!showAllMobile && (
          <div className="mt-10 flex justify-center lg:hidden">
            
            <button
              onClick={() =>
                setShowAllMobile(true)
              }
              className="
              group inline-flex items-center gap-2

              rounded-full
              border border-pink-200
              bg-pink-50

              px-6 py-3

              text-sm text-pink-500

              transition-all duration-300
              hover:bg-pink-500
              hover:text-white
            "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              View All

              <ArrowRight
                size={16}
                className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}