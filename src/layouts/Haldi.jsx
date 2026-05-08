import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// IMPORT IMAGES
import img1 from  "../assets/haldi/za-2.jpeg";
import img2 from  "../assets/haldi/za-3.jpeg";
import img3 from  "../assets/haldi/za-15.jpeg";
import img4 from  "../assets/haldi/za-18.jpeg";
import img5 from  "../assets/haldi/za-19.jpeg";
import img6 from  "../assets/haldi/za-20.jpeg";
import img7 from  "../assets/haldi/za-21.jpeg";
import img8 from  "../assets/haldi/za-22.jpeg";
import img9 from  "../assets/haldi/za-23.jpeg";
import img10 from  "../assets/haldi/fa-1.jpeg";
import img11 from  "../assets/haldi/fa-3.jpeg";
import img12 from  "../assets/haldi/fa-4.jpeg";
import img13 from  "../assets/haldi/fa-6.jpeg";
import img14 from  "../assets/haldi/fa-8.jpeg";
import img15 from  "../assets/haldi/p-1.jpg";
import img16 from  "../assets/haldi/za-5.jpeg";
import img17 from  "../assets/haldi/za-9.jpeg";
import img18 from  "../assets/haldi/za-12.jpeg";
import img19 from  "../assets/haldi/za-13.jpeg";



export default function Haldi() {
  const [showAll, setShowAll] = useState(false);

  // Fullscreen State
  const [selectedIndex, setSelectedIndex] = useState(null);

  // IMAGE ARRAY
  const images = [
    img1,
    img19,

    img2,
    img18,

    img3,
    img17,

    img4,
    img16,

    img5,
    img15,

    img6,
    img14,

    img7,
    img13,

    img8,
    img12,

    img9,
    img10,
    img11,
  
  ];

  const visibleImages = showAll ? images : images.slice(0, 8);

  // NEXT IMAGE
  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // PREV IMAGE
  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-gradient-to-b from-pink-50 to-white py-16 sm:py-20 pt-20 md:pt-40">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
            "
          >
            Our Event Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              mt-4
              text-gray-600
              max-w-2xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
            "
          >
            Wedding, Birthday, Haldi, Baby Shower,
            Engagement, Corporate Events &
            Luxury Decorations
          </motion.p>
        </div>

        {/* GALLERY GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            gap-4
            sm:gap-5
            lg:gap-6
          "
        >
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedIndex(index)}
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-lg
                group
                bg-white
                cursor-pointer
              "
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="
                  w-full
                  h-[180px]
                  sm:h-[240px]
                  lg:h-[300px]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/20
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                "
              />
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        {images.length > 8 && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="
                px-8
                py-3
                rounded-full
                bg-pink-500
                hover:bg-pink-600
                text-white
                font-semibold
                shadow-lg
                transition-all
                duration-300
              "
            >
              {showAll ? "Show Less" : "View All"}
            </motion.button>
          </div>
        )}
      </div>

      {/* FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-50
              bg-black/95
              flex
              items-center
              justify-center
              p-4
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="
                absolute
                top-5
                right-5
                text-white
                bg-white/10
                hover:bg-white/20
                p-2
                rounded-full
                transition
              "
            >
              <X size={28} />
            </button>

            {/* PREV BUTTON */}
            <button
              onClick={prevImage}
              className="
                absolute
                left-3
                sm:left-6
                text-white
                bg-white/10
                hover:bg-white/20
                p-3
                rounded-full
                transition
              "
            >
              <ChevronLeft size={34} />
            </button>

            {/* FULL IMAGE */}
            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={images[selectedIndex]}
              alt="Full View"
              className="
                max-w-full
                max-h-[90vh]
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />

            {/* NEXT BUTTON */}
            <button
              onClick={nextImage}
              className="
                absolute
                right-3
                sm:right-6
                text-white
                bg-white/10
                hover:bg-white/20
                p-3
                rounded-full
                transition
              "
            >
              <ChevronRight size={34} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}