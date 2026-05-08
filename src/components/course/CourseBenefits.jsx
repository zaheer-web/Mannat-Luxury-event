import React from "react";
import { motion } from "framer-motion";

import {
  Rocket,
  Briefcase,
  Headphones,
  Zap,
  IndianRupee,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CourseBenefits() {
  const benefits = [
    {
      title: "Start From Zero",
      icon: Rocket,
    },

    {
      title: "Business Guidance",
      icon: Briefcase,
    },

    {
      title: "Personal Support",
      icon: Headphones,
    },

    {
      title: "Fast Learning",
      icon: Zap,
    },

    {
      title: "Focus on Earning",
      icon: IndianRupee,
    },

    {
      title: "High Demand Skill",
      icon: TrendingUp,
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

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── HEADING ───────── */}
        <div className="mb-20 text-center">
          
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
              COURSE BENEFITS
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
            Why People{" "}

            <span className="text-pink-500">
              Choose Us
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
            We don’t just teach decoration —
            we help you build real skills,
            confidence and a successful earning
            business.
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
          
          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="
                group relative overflow-hidden

                rounded-[30px]
                border border-pink-100
                bg-white

                p-7

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

                    h-44 w-44

                    -translate-x-1/2
                    -translate-y-1/2

                    rounded-full
                    bg-pink-500/10

                    blur-[80px]
                  "
                  />
                </div>

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
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3
                  className="
                  relative z-10

                  mt-7
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
                  relative z-10

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
                  This course helps you build
                  practical decoration skills
                  and start earning confidently
                  from day one.
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-6 flex items-center gap-2">
                  
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}