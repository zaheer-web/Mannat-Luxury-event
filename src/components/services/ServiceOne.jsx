import React from "react";
import { motion } from "framer-motion";
// import img from "../../assets/p-1.jpg";
import img from "../../assets/za-10.jpeg";

import { Link } from "react-router-dom";

function ServiceOne() {
  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE */}
      <motion.img
        src={img}
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10 }}
        alt="service"
      />

      {/* 💎 OVERLAYS */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black/40 z-10" />

      {/* 🎉 CONFETTI */}
      <div className="absolute left-0 top-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0, opacity: 1 }}
            animate={{
              y: 200,
              x: Math.random() * 100,
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
            className={`absolute w-2 h-2 ${
              i % 3 === 0
                ? "bg-yellow-400"
                : i % 3 === 1
                ? "bg-pink-400"
                : "bg-white"
            }`}
          />
        ))}
      </div>

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 120, opacity: 0 }}
            animate={{
              y: [-20, -180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${15 + i * 15}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 150, opacity: 0 }}
            animate={{
              y: [-30, -220],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 20 : -20],
            }}
            transition={{
              duration: 7,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${10 + i * 15}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="absolute inset-0 flex items-center z-30 md:mt-60 mt-80">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full px-4 sm:px-8 md:px-14 lg:px-20"
        >

          <div className="max-w-3xl text-white text-left">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Balloon Decoration{" "}
              <span className="text-yellow-400">
                Services 🎈
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Transform your celebrations into unforgettable moments with our
              creative balloon decoration and event styling services.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold 
                  hover:bg-yellow-400 transition duration-300 
                  shadow-lg shadow-yellow-500/30 hover:scale-105"
                >
                  Book Now
                </button>
              </a>

              <Link to="/our-gallery">
                <button
                  className="border border-yellow-400 px-8 py-3 rounded-xl 
                  text-yellow-400 hover:bg-yellow-400 hover:text-black 
                  transition duration-300 hover:scale-105"
                >
                  View Gallery
                </button>
              </Link>

            </div>

          </div>

        </motion.div>
      </div>
    </div>
  );
}

export default ServiceOne;