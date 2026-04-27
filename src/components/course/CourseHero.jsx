import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import courseImg from "../../assets/a1.jpeg";

export default function CourseHero() {
  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE */}
      <motion.img
        src={courseImg}
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 12 }}
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* 🎈 FLOATING ELEMENTS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, opacity: 0.8 }}
            animate={{
              y: -200,
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 0.4,
              repeat: Infinity,
            }}
            className="absolute w-2 h-2 rounded-full bg-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
            }}
          />
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="absolute inset-0 flex items-end md:items-center justify-start z-30 px-5 sm:px-8 md:px-16 pb-10 md:pb-0">

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white max-w-xl text-left"
        >

          {/* TAG */}
          <p className="text-yellow-400 font-semibold tracking-widest mb-2 text-xs sm:text-sm">
            START YOUR OWN BUSINESS 🚀
          </p>

          {/* HEADING */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Balloon Decoration <br />
            <span className="text-yellow-400">
              <Typewriter
                words={[
                  "Beginner Course 🎈",
                  "Earn ₹50K–₹1L/month 💰",
                  "Start Your Brand 🚀",
                ]}
                loop
                cursor
              />
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90">
            Learn balloon decoration professionally and start your own event business with complete guidance & support.
          </p>

          {/* BUTTONS */}
          <div className="mt-5 sm:mt-7 flex flex-wrap gap-3 sm:gap-4">

            <a
              href="https://wa.me/7888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 text-black px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-bold 
              hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30 text-sm sm:text-base">
                Enroll Now
              </button>
            </a>

           

          </div>

        </motion.div>

      </div>
    </div>
  );
}