import React from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  HeartHandshake,
  Clock3,
  Palette,
  ArrowRight,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/birthday/ba-2.jpg";
import img2 from "../../assets/b-2.jpg";
import img3 from "../../assets/anivarsary/an-4.jpeg";
import img4 from "../../assets/haldi/za-3.jpeg";
import img5 from "../../assets/za-12.jpeg";
import img6 from "../../assets/za-9.jpeg";
import img7 from "../../assets/p-1.jpg";
import img8 from "../../assets/birthday/ba-3.jpeg";
import img9 from "../../assets/za-25.jpeg";

const services = [
  {
    title: "Balloon Decoration",
    image: img1,
  },
  {
    title: "Birthday Celebration",
    image: img2,
  },
  {
    title: "Anniversary Decoration",
    image: img3,
  },
  {
    title: "Haldi Decoration",
    image: img4,
  },
  {
    title: "All Types of Decorations",
    image: img5,
  },
  {
    title: "Bridal Entry",
    image: img6,
  },
  {
    title: "Couple Entry",
    image: img7,
  },
  {
    title: "Birthday Surprise",
    image: img8,
  },
  {
    title: "Proposal Decoration",
    image: img9,
  },
];

function Service3() {
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

      {/* ───────── GLOW ───────── */}
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
      <div className="relative z-10 mx-auto mb-16 max-w-5xl px-4 text-center">
        
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
            LUXURY EVENT EXPERIENCE
          </span>

          <div className="h-[2px] w-8 bg-pink-500" />
        </div>

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
          Creating

          <br />

          <span className="text-pink-500">
            Unforgettable Moments
          </span>
        </motion.h2>

        {/* Desc */}
        <p
          className="
          mx-auto
          mt-7
          max-w-3xl

          text-sm
          leading-8
          text-black/65

          sm:text-base
        "
        >
          At{" "}
          <span className="font-semibold text-black">
            Mannat Luxury Events
          </span>
          , we create premium decoration
          experiences filled with elegance,
          beauty and unforgettable memories.
        </p>
      </div>

      {/* ───────── SERVICES GRID ───────── */}
      <div
        className="
        relative z-10
        mx-auto
        grid
        max-w-[90rem]

        grid-cols-2
        gap-4

        px-4

        sm:grid-cols-2
        sm:px-6

        lg:grid-cols-3
        lg:gap-7
        lg:px-10
      "
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
            }}
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
              delay: index * 0.05,
            }}
            className="
            group relative overflow-hidden

            rounded-[28px]
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
                h-[180px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110

                sm:h-[260px]
                lg:h-[320px]
              "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Badge */}
             
            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-7">
              
              {/* Title */}
              <h3
                className="
                text-[1rem]
                leading-snug
                text-black

                transition-all duration-300
                group-hover:text-pink-500

                sm:text-[1.6rem]
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </h3>

              {/* Bottom Line */}
              <div className="mt-5 flex items-center gap-2">
                
                <div
                  className="
                  h-[2px] w-10
                  bg-pink-500

                  transition-all duration-500
                  group-hover:w-16
                "
                />

                <div
                  className="
                  h-2 w-2 rounded-full
                  bg-pink-300
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

      {/* ───────── TRUST SECTION ───────── */}
      <div className="relative z-10 mt-24 px-4 sm:px-6 lg:px-10">
        
        <div
          className="
          mx-auto
          max-w-[90rem]

          overflow-hidden
          rounded-[36px]

          border border-pink-100
          bg-[#fff8fc]

          p-7
          sm:p-10
          lg:p-16

          shadow-xl shadow-pink-100/40
        "
        >
          
          {/* Heading */}
          <div className="max-w-4xl">
            
            <div className="mb-5 flex items-center gap-3">
              
              <div className="h-[2px] w-8 bg-pink-500" />

              <span
                className="
                text-[10px]
                uppercase tracking-[5px]
                text-pink-500
              "
              >
                WHY CHOOSE US
              </span>
            </div>

            <h3
              className="
              text-[2.4rem]
              leading-[1]

              text-black

              sm:text-5xl
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Why Clients{" "}

              <span className="text-pink-500">
                Trust Us?
              </span>
            </h3>

            <p
              className="
              mt-6

              text-sm
              leading-8
              text-black/65

              sm:text-base
            "
            >
              We focus on creativity, premium
              quality and timely execution for
              every event decoration setup.
            </p>
          </div>

          {/* FEATURES */}
          <div
            className="
            mt-14
            grid
            gap-5

            md:grid-cols-3
          "
          >
            
            {/* CARD 1 */}
            <div
              className="
              group overflow-hidden

              rounded-[28px]
              border border-pink-100
              bg-white

              shadow-lg shadow-pink-100/30

              transition-all duration-500

              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
            >
              
              <img
                src={img2}
                alt=""
                className="
                h-[220px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110
              "
              />

              <div className="p-7">
                
                <div
                  className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <HeartHandshake size={24} />
                </div>

                <h4
                  className="
                  mt-6
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  100% Satisfaction
                </h4>

                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-black/60
                "
                >
                  We ensure every decoration
                  setup looks beautiful and
                  exceeds expectations.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
              group overflow-hidden

              rounded-[28px]
              border border-pink-100
              bg-white

              shadow-lg shadow-pink-100/30

              transition-all duration-500

              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
            >
              
              <img
                src={img4}
                alt=""
                className="
                h-[220px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110
              "
              />

              <div className="p-7">
                
                <div
                  className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <Palette size={24} />
                </div>

                <h4
                  className="
                  mt-6
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  Creative Designs
                </h4>

                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-black/60
                "
                >
                  Unique luxury decoration ideas
                  crafted specially for every
                  celebration.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
              group overflow-hidden

              rounded-[28px]
              border border-pink-100
              bg-white

              shadow-lg shadow-pink-100/30

              transition-all duration-500

              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
            >
              
              <img
                src={img8}
                alt=""
                className="
                h-[220px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110
              "
              />

              <div className="p-7">
                
                <div
                  className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <Clock3 size={24} />
                </div>

                <h4
                  className="
                  mt-6
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  On-Time Setup
                </h4>

                <p
                  className="
                  mt-4
                  text-sm
                  leading-7
                  text-black/60
                "
                >
                  Our team delivers every setup
                  beautifully before your event
                  starts.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-14 flex justify-center">
            
            <a
              href="https://wa.me/917888735541"
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
                  Book Your Event Now
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
      </div>
    </section>
  );
}

export default Service3;