import React from "react";
import Divider from "../../components/home/Divider";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/ah-2.avif";
import img2 from "../../assets/za-10.jpeg";
import img3 from "../../assets/ad-1.jpg";
import img4 from "../../assets/za-7.jpeg";
import img5 from "../../assets/za-12.jpeg";
import img6 from "../../assets/za-9.jpeg";
import img8 from "../../assets/ba-2.webp";
import img9 from "../../assets/za-26.jpeg";

/* ───────── DATA ───────── */
const services = [
  {
    title: "Balloon Decoration",
    img: img1,
  },
  {
    title: "Birthday Decoration",
    img: img2,
  },
  {
    title: "Anniversary Decoration",
    img: img3,
  },
  {
    title: "Haldi Decoration",
    img: img4,
  },
  {
    title: "All Type Decoration",
    img: img5,
  },
  {
    title: "Couple Entry",
    img: img6,
  },
  {
    title: "Birthday Surprise",
    img: img8,
  },
  {
    title: "Proposal Decoration",
    img: img9,
  },
];

export default function ServicesMain() {
  const navigate = useNavigate();

  return (
    <>
      <section
        className="
        relative overflow-hidden
        bg-white

        py-20
        sm:py-24
        lg:py-32
      "
      >
        
        {/* BG GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
          }}
        />

        {/* PINK GLOW */}
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

        {/* ───────── HEADING ───────── */}
        <div className="relative z-10 mb-16 text-center">
          
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
              OUR PREMIUM SERVICES
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
            Luxury Event

            <br />

            <span className="text-pink-500">
              Decoration Services
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
            text-black/60

            sm:text-base
          "
            style={{
              fontFamily:
                "'Inter', sans-serif",
            }}
          >
            Making every celebration beautiful
            with premium balloon decoration,
            surprise setups and unforgettable
            luxury event styling experiences.
          </motion.p>
        </div>

        {/* ───────── GRID ───────── */}
        <div
          className="
          relative z-10
          mx-auto
          grid
          max-w-[90rem]

          grid-cols-1
          gap-5

          px-4

          sm:grid-cols-2
          sm:px-6

          lg:grid-cols-4
          lg:gap-7
          lg:px-10
        "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-50px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -10,
              }}
              className="
              group relative overflow-hidden

              rounded-[28px]
              border border-pink-100
              bg-white

              shadow-lg shadow-pink-100/40

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
                  src={service.img}
                  alt={service.title}
                  className="
                  h-[260px]
                  w-full
                  object-cover

                  transition-transform duration-700
                  group-hover:scale-110

                  sm:h-[300px]
                "
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Floating Badge */}
                <div
                  className="
                  absolute left-4 top-4

                  flex items-center gap-2

                  rounded-full
                  bg-white/90

                  px-4 py-2

                  text-[11px]
                  uppercase tracking-[3px]
                  text-pink-500

                  backdrop-blur-md
                "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  <Sparkles size={13} />

                  Premium
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                
                {/* Title */}
                <h3
                  className="
                  text-[1.5rem]
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
                  {service.title}
                </h3>

                {/* Line */}
                <div
                  className="
                  mt-4
                  h-[3px]
                  w-12
                  rounded-full
                  bg-pink-500

                  transition-all duration-500
                  group-hover:w-20
                "
                />

                {/* Button */}
                <button
                  onClick={() =>
                    navigate("/our-gallery")
                  }
                  className="
                  group/btn

                  mt-6
                  flex h-[52px]
                  items-center justify-center
                  gap-3

                  rounded-2xl

                  border border-pink-200
                  bg-pink-50

                  px-6

                  text-pink-500

                  transition-all duration-500

                  hover:bg-pink-500
                  hover:text-white
                "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  
                  <span className="text-sm">
                    View Gallery
                  </span>

                  <ArrowRight
                    size={16}
                    className="
                    transition-transform duration-300
                    group-hover/btn:translate-x-1
                  "
                  />
                </button>
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

                  h-52 w-52

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
      </section>

      <Divider />
    </>
  );
}