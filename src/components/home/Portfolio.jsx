import React, { useEffect, useState } from "react";
import {
  ImageIcon,
  Video,
  ChevronLeft,
  ChevronRight,
  X,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function Portfolio() {
  const navigate = useNavigate();

  const [galleryItems, setGalleryItems] =
    useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* ───────── FETCH ───────── */
  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await api.get(
        "/gallery"
      );

      if (response.data.status) {
        setGalleryItems(
          (response.data.data || []).slice(0, 6)
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  /* ───────── NEXT ───────── */
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1
        ? 0
        : prev + 1
    );
  };

  /* ───────── PREV ───────── */
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? galleryItems.length - 1
        : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      
      {/* BG GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── TOP ───────── */}
        <div className="mb-16">
          
          {/* Label */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
            className="mb-5 flex items-center gap-3"
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
              OUR LUXURY WORK
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
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
            max-w-5xl

            text-[2.6rem]
            leading-[0.95]
            text-black

            sm:text-5xl
            lg:text-7xl
          "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Crafted With

            <br />

            <span className="text-pink-500">
              Elegance
            </span>{" "}
            & Luxury
          </motion.h2>

          {/* Desc */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
            mt-6
            max-w-2xl
            text-sm leading-8
            text-black/60

            sm:text-base
          "
            style={{
              fontFamily:
                "'Inter', sans-serif",
            }}
          >
            Discover our premium balloon
            decorations, luxury event styling
            and unforgettable celebration
            setups designed beautifully for
            special moments.
          </motion.p>

          {/* Button */}
          <motion.button
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
              delay: 0.3,
            }}
            whileHover={{
              y: -4,
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              navigate("/our-gallery")
            }
            className="
            group relative mt-8

            flex h-[58px]
            items-center justify-center
            gap-3

            overflow-hidden
            rounded-2xl

            border border-pink-200
            bg-pink-500

            px-8

            text-white
            shadow-xl shadow-pink-200

            transition-all duration-500
            hover:bg-pink-600
          "
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            {/* Shine */}
            <span className="absolute inset-0 overflow-hidden rounded-2xl">
              <span
                className="
                absolute left-[-120%] top-0
                h-full w-[120%]
                skew-x-[25deg]
                bg-white/20

                transition-all duration-1000
                group-hover:left-[130%]
              "
              />
            </span>

            {/* Icon */}
            <div
              className="
              relative z-10
              flex h-9 w-9
              items-center justify-center

              rounded-full
              bg-white/20
            "
            >
              <Sparkles size={16} />
            </div>

            {/* Text */}
            <span className="relative z-10 text-[14px]">
              View All Projects
            </span>

            <ArrowRight
              size={17}
              className="
              relative z-10

              transition-transform duration-300
              group-hover:translate-x-1
            "
            />
          </motion.button>
        </div>

        {/* ───────── GRID ───────── */}
        {!loading &&
          galleryItems.length > 0 && (
            <div
              className="
              grid grid-cols-1 gap-5

              sm:grid-cols-2
              lg:grid-cols-3
            "
            >
              {galleryItems.map(
                (item, i) => (
                  <Card
                    key={i}
                    item={item}
                    index={i}
                    onClick={() =>
                      setCurrentIndex(i)
                    }
                  />
                )
              )}
            </div>
          )}
      </div>

      {/* ───────── FULLSCREEN ───────── */}
      <AnimatePresence>
        {currentIndex !== null &&
          galleryItems[currentIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
              fixed inset-0 z-50

              flex items-center justify-center

              bg-black/90
              p-4
              backdrop-blur-xl
            "
            >
              
              {/* Close */}
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

                transition-all duration-300
                hover:bg-pink-500
                hover:text-white
              "
              >
                <X size={20} />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="
                absolute left-4

                flex h-12 w-12
                items-center justify-center

                rounded-full
                bg-white

                text-pink-500

                transition-all duration-300
                hover:bg-pink-500
                hover:text-white

                md:left-8
              "
              >
                <ChevronLeft size={28} />
              </button>

              {/* Media */}
              <motion.div
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
                  duration: 0.35,
                }}
                className="
                overflow-hidden
                rounded-[28px]

                border border-white/10

                shadow-[0_25px_100px_rgba(0,0,0,0.6)]
              "
              >
                {galleryItems[currentIndex]
                  .type === "video" ? (
                  <video
                    src={
                      galleryItems[
                        currentIndex
                      ].file_url
                    }
                    controls
                    autoPlay
                    className="
                    max-h-[85vh]
                    max-w-[92vw]
                    object-cover
                  "
                  />
                ) : (
                  <img
                    src={
                      galleryItems[
                        currentIndex
                      ].file_url
                    }
                    alt=""
                    className="
                    max-h-[85vh]
                    max-w-[92vw]
                    object-cover
                  "
                  />
                )}
              </motion.div>

              {/* Next */}
              <button
                onClick={nextImage}
                className="
                absolute right-4

                flex h-12 w-12
                items-center justify-center

                rounded-full
                bg-white

                text-pink-500

                transition-all duration-300
                hover:bg-pink-500
                hover:text-white

                md:right-8
              "
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          )}
      </AnimatePresence>
    </section>
  );
}

/* ───────── CARD ───────── */
function Card({ item, onClick, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      onClick={onClick}
      className="
      group relative cursor-pointer overflow-hidden

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

      {/* Image */}
      <div className="relative h-[320px] overflow-hidden">
        
        {item.type === "video" ? (
          <video
            src={item.file_url}
            muted
            className="
            h-full w-full object-cover

            transition-transform duration-700
            group-hover:scale-110
          "
          />
        ) : (
          <img
            src={item.file_url}
            alt=""
            className="
            h-full w-full object-cover

            transition-transform duration-700
            group-hover:scale-110
          "
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Icon */}
        <div
          className="
          absolute right-5 top-5 z-20

          flex h-12 w-12
          items-center justify-center

          rounded-2xl
          bg-white/90

          text-pink-500
          backdrop-blur-md

          transition-all duration-500

          group-hover:scale-110
          group-hover:bg-pink-500
          group-hover:text-white
        "
        >
          {item.type === "video" ? (
            <Video size={20} />
          ) : (
            <ImageIcon size={20} />
          )}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          
          <p
            className="
            text-[10px]
            uppercase tracking-[5px]
            text-pink-300
          "
            style={{
              fontFamily:
                "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Luxury Decoration
          </p>

          <h3
            className="
            mt-2
            text-2xl
            text-white

            transition-all duration-300
            group-hover:text-pink-300
          "
            style={{
              fontFamily:
                "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Premium Event Setup
          </h3>

          {/* Bottom Line */}
          <div className="mt-4 flex items-center gap-2">
            
            <div
              className="
              h-[2px] w-10
              bg-pink-400

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
      </div>
    </motion.div>
  );
}