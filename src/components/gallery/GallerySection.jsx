import React from "react";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/za-10.jpeg";
import img2 from "../../assets/fa-14.jpeg";
import img3 from "../../assets/fa-15.jpeg";
import img4 from "../../assets/fa-21.jpeg";

export default function GallerySection() {
  const events = [
    {
      title: "Luxury Wedding Setup",
      desc: "Royal stage decoration with elegant floral styling and luxury lighting.",
      image: img1,
    },
    {
      title: "Birthday Decoration",
      desc: "Creative balloon setups with vibrant colors and joyful celebration vibes.",
      image: img2,
    },
    {
      title: "Engagement Ceremony",
      desc: "Romantic premium decoration crafted beautifully for unforgettable memories.",
      image: img3,
    },
    {
      title: "Corporate Events",
      desc: "Elegant and professional event styling designed for business occasions.",
      image: img4,
    },
  ];

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

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── HEADING ───────── */}
        <div className="mb-16 text-center">
          
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="
            mb-5
            flex items-center justify-center gap-3
          "
          >
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
              PREMIUM EVENT STYLING
            </span>

            <div className="h-[2px] w-8 bg-pink-500" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
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
            Our{" "}

            <span className="text-pink-500">
              Decorations
            </span>
          </motion.h2>

          {/* Desc */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
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
            Discover our premium decoration
            styles crafted beautifully for
            weddings, birthdays, engagements
            and unforgettable celebrations.
          </motion.p>
        </div>

        {/* ───────── CARDS ───────── */}
        <div
          className="
          grid
          grid-cols-1
          gap-5

          sm:grid-cols-2

          lg:grid-cols-4
          lg:gap-7
        "
        >
          
          {events.map((item, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              group relative overflow-hidden

              rounded-[30px]
              border border-pink-100
              bg-white

              shadow-xl shadow-pink-100/40

              transition-all duration-500

              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
            >
              
              {/* Top Border */}
              <div
                className="
                absolute left-0 top-0 z-20
                h-[3px] w-0
                bg-pink-500

                transition-all duration-500
                group-hover:w-full
              "
              />

              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                  h-[260px]
                  w-full
                  object-cover

                  transition-transform duration-700
                  group-hover:scale-110
                "
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Number */}
                <div
                  className="
                  absolute left-4 top-4

                  flex h-12 w-12
                  items-center justify-center

                  rounded-full
                  bg-white/90

                  text-pink-500

                  shadow-lg shadow-pink-100

                  backdrop-blur-xl
                "
                >
                  <span
                    className="text-lg"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond', serif",
                      fontWeight: 700,
                    }}
                  >
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                {/* Icon */}
                <div
                  className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500

                  transition-all duration-500

                  group-hover:bg-pink-500
                  group-hover:text-white
                "
                >
                  <Sparkles size={22} />
                </div>

                {/* Title */}
                <h3
                  className="
                  mt-6
                  text-[1.6rem]
                  leading-snug
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
                  {item.title}
                </h3>

                {/* Desc */}
                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-black/60
                "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {item.desc}
                </p>

                {/* Bottom */}
                <div className="mt-6 flex items-center gap-2">
                  
                  <div
                    className="
                    h-[2px] w-10
                    bg-pink-500

                    transition-all duration-500
                    group-hover:w-16
                  "
                  />

                  <ArrowRight
                    size={14}
                    className="
                    text-pink-500

                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                  />
                </div>
              </div>

              {/* Hover Glow */}
              <div
                className="
                absolute inset-0 -z-10 opacity-0

                transition-opacity duration-500
                group-hover:opacity-100
              "
              >
                <div
                  className="
                  absolute left-1/2 top-1/2

                  h-44 w-44

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full
                  bg-pink-500/10

                  blur-[80px]
                "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ───────── CTA ───────── */}
        <div className="mt-16 flex justify-center">
          
          <a
            href="https://wa.me/917888735541?text=Hello%20I%20want%20to%20book%20decoration%20service"
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
              group

              flex h-[58px]
              items-center justify-center
              gap-3

              rounded-2xl
              bg-pink-500

              px-8

              text-white

              shadow-[0_20px_60px_rgba(236,72,153,0.35)]

              transition-all duration-500
              hover:bg-pink-600
            "
            >
              
              <div
                className="
                flex h-9 w-9
                items-center justify-center

                rounded-full
                bg-white/20
              "
              >
                <Sparkles size={16} />
              </div>

              <span className="text-[14px] tracking-[0.3px]">
                Book Your Decoration
              </span>

              <ArrowRight
                size={16}
                className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
              />
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}