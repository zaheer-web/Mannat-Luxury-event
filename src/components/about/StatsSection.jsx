import React from "react";
import { motion } from "framer-motion";

import {
  Award,
  Users,
  Clock3,
  MapPin,
} from "lucide-react";

/* ───────── IMAGE ───────── */
import statsImg from "../../assets/fa-15.jpeg";

export default function StatsSection() {
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
      <div
        className="
        relative z-10
        mx-auto
        grid
        max-w-[90rem]

        items-center
        gap-14

        px-4

        md:grid-cols-2

        sm:px-6
        lg:px-10
      "
      >
        
        {/* ───────── LEFT IMAGE ───────── */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="relative"
        >
          
          {/* Main Image */}
          <div
            className="
            group relative overflow-hidden

            rounded-[36px]
            border border-pink-100

            shadow-2xl shadow-pink-100/50
          "
          >
            
            <img
              src={statsImg}
              alt="stats"
              className="
              h-[350px]
              w-full
              object-cover

              transition-transform duration-700
              group-hover:scale-110

              sm:h-[500px]
            "
            />

            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Floating Card */}
          <div
            className="
            absolute bottom-6 left-6

            rounded-[24px]
            bg-white/90

            p-5

            shadow-xl shadow-pink-100

            backdrop-blur-xl
          "
          >
            
            <p className="text-sm text-black/50">
              Trusted By
            </p>

            <h3
              className="
              mt-1
              text-3xl
              text-pink-500
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              2000+
            </h3>

            <p className="text-black">
              Happy Clients
            </p>
          </div>
        </motion.div>

        {/* ───────── RIGHT CONTENT ───────── */}
        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
        >
          
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
                fontFamily:
                  "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              OUR ACHIEVEMENTS
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
            text-[2.8rem]
            leading-[0.95]
            text-black

            sm:text-6xl
          "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Our{" "}

            <span className="text-pink-500">
              Achievements
            </span>
          </h2>

          {/* Desc */}
          <p
            className="
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
            We have successfully completed
            thousands of luxury events with
            creativity, dedication and trust.
            Our achievements reflect years of
            experience and premium decoration
            excellence.
          </p>

          {/* ───────── STATS GRID ───────── */}
          <div
            className="
            mt-10
            grid
            grid-cols-2
            gap-5
          "
          >
            
            {[
              {
                num: "5+",
                label: "Years Experience",
                icon: Clock3,
              },
              {
                num: "50+",
                label: "Expert Workers",
                icon: Users,
              },
              {
                num: "2000+",
                label: "Happy Customers",
                icon: Award,
              },
              {
                num: "Delhi NCR",
                label: "Working Area",
                icon: MapPin,
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                  group relative overflow-hidden

                  rounded-[28px]
                  border border-pink-100
                  bg-white

                  p-5
                  sm:p-7

                  shadow-lg shadow-pink-100/40

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
                    <Icon size={24} />
                  </div>

                  {/* Number */}
                  <h3
                    className="
                    mt-6
                    text-[2rem]
                    leading-none
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
                    {item.num}
                  </h3>

                  {/* Label */}
                  <p
                    className="
                    mt-3
                    text-sm
                    leading-6
                    text-black/60
                  "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                    }}
                  >
                    {item.label}
                  </p>

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

                      h-40 w-40

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
        </motion.div>
      </div>
    </section>
  );
}