import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronLeft,
  ChevronRight,
  Image,
  X,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/za-1.jpeg";
import img2 from "../../assets/za-2.jpeg";
import img3 from "../../assets/za-3.jpeg";
import img4 from "../../assets/za-4.jpeg";
import img5 from "../../assets/za-5.jpeg";
import img6 from "../../assets/za-7.jpeg";
import img7 from "../../assets/za-8.jpeg";
import img8 from "../../assets/za-9.jpeg";
import img9 from "../../assets/za-10.jpeg";
import img10 from "../../assets/za-11.jpeg";
import img11 from "../../assets/za-12.jpeg";
import img12 from "../../assets/za-13.jpeg";
import img13 from "../../assets/fa-14.jpeg";
import img14 from "../../assets/fa-15.jpeg";
import img15 from "../../assets/fa-16.jpeg";
import img16 from "../../assets/fa-17.jpeg";
import img17 from "../../assets/fa-18.jpeg";
import img18 from "../../assets/fa-19.jpeg";
import img19 from "../../assets/fa-20.jpeg";
import img20 from "../../assets/fa-21.jpeg";

export default function AllPhotos() {
  const [currentIndex, setCurrentIndex] =
    useState(null);

  const [showAll, setShowAll] =
    useState(false);

  const galleryItems = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  /* SHOW ONLY 8 INITIALLY */
  const visibleItems = showAll
    ? galleryItems
    : galleryItems.slice(0, 8);

  /* NEXT */
  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1
        ? 0
        : prev + 1
    );
  };

  /* PREV */
  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? galleryItems.length - 1
        : prev - 1
    );
  };

  return (
    <section
      id="gallery"
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
              LUXURY EVENT GALLERY
            </span>

            <div className="h-[2px] w-8 bg-pink-500" />
          </div>

          {/* Heading */}
          <h2
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
              Gallery
            </span>
          </h2>

          {/* Desc */}
          <p
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
            Explore our premium luxury
            decoration setups, unforgettable
            celebrations and beautiful event
            moments crafted with elegance.
          </p>
        </div>

        {/* ───────── GRID ───────── */}
        <div
          className="
          grid
          grid-cols-2
          gap-4

          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-7
        "
        >
          
          {visibleItems.map((img, index) => (
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
                delay: index * 0.04,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              group relative overflow-hidden

              rounded-[28px]
              border border-pink-100

              shadow-xl shadow-pink-100/40

              transition-all duration-500

              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
              onClick={() =>
                setCurrentIndex(index)
              }
            >
              
              {/* IMAGE */}
              <img
                src={img}
                alt={`gallery-${index}`}
                className="
                h-[180px]
                w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-110

                sm:h-[260px]
                lg:h-[340px]
              "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0

                bg-black/10

                opacity-0
                transition-all duration-500

                group-hover:opacity-100
              "
              />

              {/* ICON */}
              <div
                className="
                absolute left-1/2 top-1/2

                flex h-14 w-14
                items-center justify-center

                rounded-full
                bg-white

                text-pink-500

                shadow-xl shadow-pink-200

                opacity-0

                -translate-x-1/2
                -translate-y-1/2
                scale-75

                transition-all duration-500

                group-hover:scale-100
                group-hover:opacity-100
              "
              >
                <Image size={22} />
              </div>

              {/* TOP BORDER */}
              <div
                className="
                absolute left-0 top-0
                h-[3px] w-0
                bg-pink-500

                transition-all duration-500
                group-hover:w-full
              "
              />
            </motion.div>
          ))}
        </div>

        {/* ───────── BUTTONS ───────── */}
        <div className="mt-12 flex justify-center">
          
          {!showAll ? (
            <motion.button
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                setShowAll(true)
              }
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
              
              <span className="text-[14px] tracking-[0.3px]">
                View All Photos
              </span>

              <ChevronRight
                size={18}
                className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
              />
            </motion.button>
          ) : (
            <button
              onClick={() =>
                setShowAll(false)
              }
              className="
              text-sm
              text-pink-500

              underline
              underline-offset-4
            "
            >
              Show Less
            </button>
          )}
        </div>
      </div>

      {/* ───────── FULLSCREEN VIEWER ───────── */}
      <AnimatePresence>
        
        {currentIndex !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed inset-0 z-50

            flex items-center justify-center

            bg-black/90

            px-4
          "
          >
            
            {/* CLOSE */}
            <button
              onClick={() =>
                setCurrentIndex(null)
              }
              className="
              absolute right-5 top-5

              flex h-12 w-12
              items-center justify-center

              rounded-full
              bg-white

              text-pink-500

              shadow-xl
            "
            >
              <X size={22} />
            </button>

            {/* PREV */}
            <button
              onClick={prevItem}
              className="
              absolute left-3

              flex h-12 w-12
              items-center justify-center

              rounded-full
              bg-white

              text-pink-500

              shadow-xl

              sm:left-6
            "
            >
              <ChevronLeft size={24} />
            </button>

            {/* IMAGE */}
            <motion.img
              key={currentIndex}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
              }}
              src={galleryItems[currentIndex]}
              alt="preview"
              className="
              max-h-[85vh]
              w-auto

              rounded-[28px]
              border border-white/10

              object-cover

              shadow-2xl
            "
            />

            {/* NEXT */}
            <button
              onClick={nextItem}
              className="
              absolute right-3

              flex h-12 w-12
              items-center justify-center

              rounded-full
              bg-white

              text-pink-500

              shadow-xl

              sm:right-6
            "
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}