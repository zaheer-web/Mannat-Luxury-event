import React from "react";
import { motion } from "framer-motion";

import {
  IndianRupee,
  Gift,
  GraduationCap,
  Package,
  Headphones,
  MapPin,
  ArrowRight,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/fa-14.jpeg";
import img2 from "../../assets/fa-15.jpeg";
import img3 from "../../assets/fa-16.jpeg";
import img4 from "../../assets/fa-17.jpeg";
import img5 from "../../assets/fa-18.jpeg";
import img6 from "../../assets/fa-19.jpeg";

/* ───────── ANIMATION ───────── */
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.6,
    },
  }),
};

export default function CourseDetails() {
  const cards = [
    {
      title: "Earnings Potential",
      desc: "Earn ₹50K – ₹1L+ monthly with event bookings and decoration projects.",
      image: img1,
      icon: IndianRupee,
    },

    {
      title: "Free Startup Kit",
      desc: "Get ring stand, balloon pump, neon decor and premium tools worth ₹5000.",
      image: img2,
      icon: Gift,
    },

    {
      title: "What You Will Learn",
      list: [
        "Balloon Basics & Types",
        "Arch & Ring Decoration",
        "Theme Setup",
        "Event Styling",
        "Client Handling",
      ],
      image: img3,
      icon: GraduationCap,
    },

    {
      title: "Kit Includes",
      desc: "All essential decoration materials and tools to start immediately.",
      image: img4,
      icon: Package,
    },

    {
      title: "Lifetime Support",
      desc: "Get continuous business guidance and support after training.",
      image: img5,
      icon: Headphones,
    },

    {
      title: "Course Details",
      list: [
        "3 Days Training",
        "Certificate Included",
        "Live Practice",
        "Limited Seats",
      ],
      image: img6,
      icon: MapPin,
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
              PROFESSIONAL TRAINING
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
            Course{" "}

            <span className="text-pink-500">
              Highlights
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
            Everything you need to learn
            premium decoration skills and build
            a successful event decoration
            business professionally.
          </motion.p>
        </div>

        {/* ───────── GRID ───────── */}
        <div
          className="
          grid
          gap-5

          sm:grid-cols-2

          lg:grid-cols-3
          lg:gap-7
        "
        >
          
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
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
                    src={card.image}
                    alt={card.title}
                    className="
                    h-[240px]
                    w-full
                    object-cover

                    transition-transform duration-700
                    group-hover:scale-110
                  "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Icon */}
                  <div
                    className="
                    absolute left-5 top-5

                    flex h-14 w-14
                    items-center justify-center

                    rounded-2xl
                    bg-white/90

                    text-pink-500

                    shadow-xl shadow-pink-100

                    backdrop-blur-xl
                  "
                  >
                    <Icon size={24} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-7">
                  
                  {/* Title */}
                  <h3
                    className="
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
                    {card.title}
                  </h3>

                  {/* Desc */}
                  {card.desc && (
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
                      {card.desc}
                    </p>
                  )}

                  {/* List */}
                  {card.list && (
                    <ul className="mt-5 space-y-3">
                      
                      {card.list.map(
                        (item, idx) => (
                          <li
                            key={idx}
                            className="
                            flex items-start gap-3

                            text-sm
                            text-black/70
                          "
                          >
                            
                            <div
                              className="
                              mt-[6px]
                              h-2 w-2
                              rounded-full
                              bg-pink-500
                            "
                            />

                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
}