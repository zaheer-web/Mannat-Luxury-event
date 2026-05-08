import React from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  ArrowRight,
} from "lucide-react";

/* ───────── IMAGE ───────── */
import areaImg from "../../assets/fa-4.jpeg";

export default function WorkingAreas() {
  const areas = [
    "Delhi NCR",
    "Noida",
    "Gurugram",
    "Ghaziabad",
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
              SERVICE LOCATIONS
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
          "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Our{" "}

            <span className="text-pink-500">
              Working Areas
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
            We proudly provide our premium
            luxury decoration services across
            multiple cities with creativity,
            elegance and perfection.
          </motion.p>
        </div>

        {/* ───────── CONTENT ───────── */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
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
                src={areaImg}
                alt="areas"
                className="
                h-[350px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110

                sm:h-[550px]
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
                Available In
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
                4+
              </h3>

              <p className="text-black">
                Major Cities
              </p>
            </div>
          </motion.div>

          {/* ───────── RIGHT AREA CARDS ───────── */}
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
            className="
            grid
            grid-cols-2
            gap-5
          "
          >
            
            {areas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                group relative overflow-hidden

                rounded-[28px]
                border border-pink-100
                bg-white

                p-6
                sm:p-8

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
                  <MapPin size={24} />
                </div>

                {/* Title */}
                <h3
                  className="
                  mt-6
                  text-[1.4rem]
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
                  {area}
                </h3>

                {/* Bottom */}
                <div className="mt-5 flex items-center gap-2">
                  
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}