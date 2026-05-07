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
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const navigate = useNavigate();

  const [galleryItems, setGalleryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ───────── FETCH GALLERY ───────── */
  const fetchGallery = async () => {
    try {
      setLoading(true);

      const response = await api.get("/gallery");

      if (response.data.status) {
        setGalleryItems((response.data.data || []).slice(0, 6));
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
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  /* ───────── PREV ───────── */
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#060606] py-24">
      {/* ───────── PREMIUM BG ───────── */}
      <div className="absolute inset-0">
        {/* Glow */}
        <div className="absolute left-0 top-0 h-[350px] w-[450px] rounded-full bg-yellow-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-yellow-500/5 blur-[120px]" />
      </div>

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* ───────── TOP SECTION ───────── */}
        <div className="mb-20 flex flex-col items-start">
          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-[2px] w-8 bg-yellow-500" />

            <span
              className="text-[10px] uppercase tracking-[5px] text-yellow-400"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}
            >
              OUR LUXURY WORK
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl text-[2.8rem] leading-[0.95] text-white sm:text-5xl lg:text-7xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Crafted With

            <br />

            <span
              className="text-yellow-400"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
              }}
            >
              Elegance &
            </span>

            <br />

            Luxury
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mt-6 max-w-2xl text-sm leading-8 text-white/55 sm:text-base"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
            }}
          >
            Discover our premium balloon decorations, luxury event
            styling and unforgettable celebration setups designed
            with creativity and perfection.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/our-gallery")}
            className="group relative mt-8 flex h-[60px] items-center justify-center overflow-hidden rounded-2xl border border-yellow-500/20 bg-yellow-500 px-8 text-black shadow-[0_15px_50px_rgba(245,193,24,0.25)] transition-all duration-500 hover:shadow-[0_25px_70px_rgba(245,193,24,0.45)]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            {/* Shine */}
            <span className="absolute inset-0 overflow-hidden rounded-2xl">
              <span className="absolute left-[-120%] top-0 h-full w-[120%] skew-x-[25deg] bg-white/25 transition-all duration-1000 group-hover:left-[130%]" />
            </span>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-black">
                <Sparkles
                  size={16}
                  className="transition-all duration-300 group-hover:text-yellow-400"
                />
              </div>

              <span className="text-[14px] tracking-[0.3px]">
                View All Projects
              </span>

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </motion.button>
        </div>

        {/* ───────── GALLERY GRID ───────── */}
        {!loading && galleryItems.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <Card
                key={i}
                item={item}
                index={i}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
            >
              {/* CLOSE */}
              <button
                onClick={() => setCurrentIndex(null)}
                className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              >
                <X size={20} />
              </button>

              {/* PREV */}
              <button
                onClick={prevImage}
                className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black md:left-8"
              >
                <ChevronLeft size={28} />
              </button>

              {/* IMAGE */}
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
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-[30px] border border-yellow-500/20 shadow-[0_25px_100px_rgba(0,0,0,0.8)]"
              >
                {galleryItems[currentIndex].type ===
                "video" ? (
                  <video
                    src={galleryItems[currentIndex].file_url}
                    controls
                    autoPlay
                    className="max-h-[85vh] max-w-[92vw] object-cover"
                  />
                ) : (
                  <img
                    src={galleryItems[currentIndex].file_url}
                    alt=""
                    className="max-h-[85vh] max-w-[92vw] object-cover"
                  />
                )}
              </motion.div>

              {/* NEXT */}
              <button
                onClick={nextImage}
                className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-black/50 text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black md:right-8"
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
      className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-white/5 bg-[#0d0d0d]"
    >
      {/* Glow */}
      <div className="absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-yellow-500/15 blur-[90px]" />
      </div>

      {/* IMAGE */}
      <div className="relative h-[320px] overflow-hidden">
        {item.type === "video" ? (
          <video
            src={item.file_url}
            muted
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <img
            src={item.file_url}
            alt=""
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* ICON */}
        <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-500/20 bg-black/60 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-500">
          {item.type === "video" ? (
            <Video
              size={20}
              className="text-yellow-400 transition-all duration-500 group-hover:text-black"
            />
          ) : (
            <ImageIcon
              size={20}
              className="text-yellow-400 transition-all duration-500 group-hover:text-black"
            />
          )}
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <p
            className="text-[10px] uppercase tracking-[5px] text-yellow-400"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
            }}
          >
            Luxury Decoration
          </p>

          <h3
            className="mt-2 text-2xl text-white transition-all duration-300 group-hover:text-yellow-400"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Premium Event Setup
          </h3>

          {/* LINE */}
          <div className="mt-4 flex items-center gap-2">
            <div className="h-[2px] w-10 bg-yellow-400 transition-all duration-500 group-hover:w-16" />

            <div className="h-2 w-2 rounded-full bg-yellow-400/50 transition-all duration-500 group-hover:bg-yellow-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}