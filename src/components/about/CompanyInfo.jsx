import React from "react";
import { motion } from "framer-motion";

import {
  Sparkles,
  Users,
  Award,
  Clock3,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/fa-3.jpeg";
import img2 from "../../assets/fa-4.jpeg";
import img3 from "../../assets/za-21.jpeg";
import img4 from "../../assets/fa-14.jpeg";

export default function CompanyInfo() {
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

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── TOP SECTION ───────── */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* LEFT CONTENT */}
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
                ABOUT COMPANY
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
              About{" "}

              <span className="text-pink-500">
                Mannat Luxury
              </span>

              <br />

              Events
            </h2>

            {/* Desc */}
            <p
              className="
              mt-7

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
              Mannat Luxury Events is a trusted
              and growing event decoration
              company with over{" "}

              <span className="font-semibold text-black">
                5 years of experience
              </span>

              . Founded by{" "}

              <span className="font-semibold text-black">
                Mannat Sood
              </span>

              , we create unforgettable luxury
              celebrations with creativity,
              perfection and premium styling.
            </p>

            <p
              className="
              mt-5

              text-sm
              leading-8
              text-black/65

              sm:text-base
            "
            >
              We specialize in balloon
              decorations, birthday setups,
              anniversary celebrations, haldi
              functions, proposal decorations
              and customized luxury event
              designs.
            </p>

            {/* ───────── STATS ───────── */}
            <div
              className="
              mt-10
              grid
              grid-cols-3
              gap-4
            "
            >
              
              {/* CARD */}
              <div
                className="
                group rounded-[24px]
                border border-pink-100
                bg-white

                p-5

                shadow-lg shadow-pink-100/40

                transition-all duration-500

                hover:-translate-y-2
                hover:border-pink-300
              "
              >
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500

                  transition-all duration-500

                  group-hover:bg-pink-500
                  group-hover:text-white
                "
                >
                  <Clock3 size={22} />
                </div>

                <h3
                  className="
                  mt-4
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  5+
                </h3>

                <p className="mt-1 text-sm text-black/60">
                  Years
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                group rounded-[24px]
                border border-pink-100
                bg-white

                p-5

                shadow-lg shadow-pink-100/40

                transition-all duration-500

                hover:-translate-y-2
                hover:border-pink-300
              "
              >
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500

                  transition-all duration-500

                  group-hover:bg-pink-500
                  group-hover:text-white
                "
                >
                  <Users size={22} />
                </div>

                <h3
                  className="
                  mt-4
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  50+
                </h3>

                <p className="mt-1 text-sm text-black/60">
                  Workers
                </p>
              </div>

              {/* CARD */}
              <div
                className="
                group rounded-[24px]
                border border-pink-100
                bg-white

                p-5

                shadow-lg shadow-pink-100/40

                transition-all duration-500

                hover:-translate-y-2
                hover:border-pink-300
              "
              >
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500

                  transition-all duration-500

                  group-hover:bg-pink-500
                  group-hover:text-white
                "
                >
                  <Award size={22} />
                </div>

                <h3
                  className="
                  mt-4
                  text-2xl
                  text-black
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  2000+
                </h3>

                <p className="mt-1 text-sm text-black/60">
                  Clients
                </p>
              </div>
            </div>

            {/* ───────── CONTACT ───────── */}
            <div className="mt-10 space-y-5">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Address
                  </p>

                  <p className="mt-1 text-black">
                    K-A Block 415, Rahul Vihar
                    2nd, near Santosh Medical
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Email
                  </p>

                  <p className="mt-1 text-black break-all">
                    Soodmannat902gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                
                <div
                  className="
                  flex h-12 w-12
                  items-center justify-center

                  rounded-2xl
                  bg-pink-50

                  text-pink-500
                "
                >
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-black/50">
                    Phone
                  </p>

                  <p className="mt-1 text-black">
                    78887-35541
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              
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
                    Contact Us Now
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
          </motion.div>

          {/* ───────── RIGHT IMAGE ───────── */}
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
                src={img4}
                alt="event"
                className="
                h-[400px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110

                sm:h-[600px]
              "
              />

              {/* Overlay */}
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
        </div>

        {/* ───────── IMAGE STRIP ───────── */}
        <div
          className="
          mt-16
          grid
          gap-5

          md:grid-cols-3
        "
        >
          {[img1, img2, img3].map(
            (img, i) => (
              <motion.div
                key={i}
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
                  duration: 0.6,
                  delay: i * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                group overflow-hidden

                rounded-[30px]
                border border-pink-100

                shadow-xl shadow-pink-100/40
              "
              >
                
                <img
                  src={img}
                  alt="event"
                  className="
                  h-[260px]
                  w-full
                  object-cover

                  transition-transform duration-700
                  group-hover:scale-110
                "
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}