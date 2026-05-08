import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ArrowRight,
  CalendarHeart,
  MessageCircleMore,
} from "lucide-react";

import cta from "../../assets/fa-15.jpeg";

export default function CTA() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ───────── IMAGE PARALLAX ───────── */
  const imgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-6%", "6%"]
  );

  return (
    <section
      ref={sectionRef}
      className="
      relative w-full overflow-hidden
      bg-white
    "
    >
      
      {/* Main Banner */}
      <div className="relative w-full overflow-hidden">
        
        {/* Background Image */}
        <motion.img
          src={cta}
          alt="Luxury Decoration"
          style={{ y: imgY }}
          className="
          absolute inset-0
          h-full w-full
          object-cover
        "
        />

        {/* Dark + Pink Overlay */}
        <div
          className="
          absolute inset-0
          bg-black/45
        "
        />

        <div
          className="
          absolute inset-0
          bg-pink-900/20
        "
        />

        {/* Content */}
        <div
          className="
          relative z-20

          flex items-center

          min-h-[340px]
          px-4 py-14

          sm:min-h-[460px]
          sm:px-8

          lg:min-h-[650px]
          lg:px-16
        "
        >
          <div className="max-w-3xl">
            
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-pink-400" />

              <span
                className="
                text-[10px]
                uppercase tracking-[5px]
                text-pink-300
              "
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                LET'S CELEBRATE TOGETHER
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
              }}
              className="
              text-[2.3rem]
              leading-[1.02]
              text-white

              sm:text-5xl
              lg:text-7xl
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Make Your

              <br />

              <span className="text-pink-300">
                Moments
              </span>{" "}
              Special

              <br />

              <span
                className="
                text-[1.2rem]
                text-white/90

                sm:text-3xl
                lg:text-4xl
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
              >
                With Beautiful Balloon Decorations
              </span>
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.5,
              }}
              style={{ originX: 0 }}
              className="
              mt-7 h-[3px] w-20
              bg-pink-400
            "
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
              mt-7
              max-w-2xl
              text-sm leading-7
              text-white

              sm:text-base
              lg:text-lg
            "
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              We design premium balloon decorations
              and elegant event setups for birthdays,
              anniversaries, proposals, weddings and
              every special celebration.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
              mt-10
              flex flex-col gap-4
              sm:flex-row
            "
            >
              
              {/* Book Button */}
              <Link to="/contact">
                <motion.button
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                  group flex h-[58px]
                  items-center justify-center
                  gap-3

                  rounded-2xl
                  bg-pink-500
                  px-8

                  text-white
                  shadow-xl shadow-pink-500/30

                  transition-all duration-500
                  hover:bg-pink-600
                "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  <span
                    className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-white/20
                  "
                  >
                    <CalendarHeart size={17} />
                  </span>

                  <span className="text-[14px] tracking-[0.3px]">
                    Book Your Event
                  </span>
                </motion.button>
              </Link>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="
                  group flex h-[58px]
                  items-center justify-center
                  gap-3

                  rounded-2xl
                  border border-white/30
                  bg-black/30
                  px-8

                  text-white
                  backdrop-blur-md

                  transition-all duration-500
                  hover:bg-pink-500
                  hover:border-pink-500
                "
                  style={{
                    fontFamily:
                      "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  <span
                    className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-white/20
                  "
                  >
                    <MessageCircleMore size={17} />
                  </span>

                  <span className="text-[14px] tracking-[0.3px]">
                    WhatsApp Us
                  </span>

                  <ArrowRight
                    size={15}
                    className="
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                  />
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}