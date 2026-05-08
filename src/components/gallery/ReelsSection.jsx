import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

import reel1 from "../../assets/za-29.mp4";
import reel2 from "../../assets/za-31.mp4";
import reel3 from "../../assets/fa-10.mp4";
import reel4 from "../../assets/fa-13.mp4";

const reels = [
  { video: reel1, label: "Birthday Setup" },
  { video: reel2, label: "Balloon Decor" },
  { video: reel3, label: "Anniversary" },
  { video: reel4, label: "Surprise Entry" },
];

export default function ReelsSection() {
  const videoRefs = useRef([]);

  const [playingIndex, setPlayingIndex] =
    useState(null);

  const [mutedIndex, setMutedIndex] =
    useState([0, 1, 2, 3]);

  /* ───────── PLAY / PAUSE ───────── */
  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video || i === index) return;
      video.pause();
    });

    const current = videoRefs.current[index];

    if (!current) return;

    if (current.paused) {
      current.play();
      setPlayingIndex(index);
    } else {
      current.pause();
      setPlayingIndex(null);
    }
  };

  /* ───────── MUTE ───────── */
  const toggleMute = (e, index) => {
    e.stopPropagation();

    const current = videoRefs.current[index];

    if (!current) return;

    current.muted = !current.muted;

    setMutedIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
      
      {/* BG GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]" />

      {/* Container */}
      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
        
        {/* ───────── HEADING ───────── */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                    "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                Watch Us Work
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
              text-[2.5rem]
              leading-[1.05]
              text-black

              sm:text-5xl
              lg:text-6xl
            "
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Our{" "}

              <span className="text-pink-500">
                Reels
              </span>
            </h2>
          </motion.div>

          {/* Right Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="
            max-w-sm
            text-sm leading-7
            text-black/60

            sm:text-right
          "
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Watch our latest luxury decoration
            setups and beautiful celebration
            moments.
          </motion.p>
        </div>

        {/* ───────── REELS GRID ───────── */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          
          {reels.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-40px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="
              group relative overflow-hidden
              rounded-[24px]

              border border-pink-100
              bg-white

              shadow-lg shadow-pink-100/40

              transition-all duration-500

              hover:-translate-y-2
              hover:border-pink-300
              hover:shadow-2xl hover:shadow-pink-200/50
            "
              style={{ aspectRatio: "9/16" }}
              onClick={() =>
                handlePlayPause(index)
              }
            >
              
              {/* Top Border */}
              <div
                className="
                absolute left-0 top-0 z-30
                h-[3px] w-0
                bg-pink-500

                transition-all duration-500
                group-hover:w-full
              "
              />

              {/* VIDEO */}
              <video
                ref={(el) =>
                  (videoRefs.current[index] = el)
                }
                src={item.video}
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={(e) => {
                  e.target.currentTime = 0.1;
                }}
                className="
                absolute inset-0
                h-full w-full
                object-cover

                transition-transform duration-700
                group-hover:scale-105
              "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Label */}
              <div className="absolute left-3 top-3 z-20">
                
                <span
                  className="
                  rounded-full
                  border border-pink-200
                  bg-white/90

                  px-3 py-1

                  text-[10px]
                  uppercase tracking-[3px]
                  text-pink-500

                  backdrop-blur-md
                "
                  style={{
                    fontFamily:
                      "'Montserrat', sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Mute Button */}
              <button
                onClick={(e) =>
                  toggleMute(e, index)
                }
                className="
                absolute right-3 top-3 z-20

                flex h-9 w-9
                items-center justify-center

                rounded-full
                border border-white/20
                bg-white/20

                text-white
                backdrop-blur-md

                transition-all duration-300

                hover:bg-pink-500
              "
              >
                {mutedIndex.includes(index) ? (
                  <VolumeX size={14} />
                ) : (
                  <Volume2 size={14} />
                )}
              </button>

              {/* Play Button */}
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className={`
                    flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300

                    ${
                      playingIndex === index
                        ? "border border-white/30 bg-white/20 backdrop-blur-md"
                        : "bg-pink-500 shadow-[0_0_30px_rgba(236,72,153,0.45)]"
                    }
                  `}
                >
                  {playingIndex === index ? (
                    <Pause
                      size={20}
                      className="text-white"
                    />
                  ) : (
                    <Play
                      size={20}
                      className="ml-1 fill-white text-white"
                    />
                  )}
                </motion.div>
              </div>

              {/* Bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
                
                <div className="flex items-center gap-2">
                  
                  <div
                    className={`
                      h-2 w-2 rounded-full

                      ${
                        playingIndex === index
                          ? "animate-pulse bg-pink-400"
                          : "bg-white/50"
                      }
                    `}
                  />

                  <span
                    className="
                    text-[11px]
                    text-white
                  "
                    style={{
                      fontFamily:
                        "'Inter', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {playingIndex === index
                      ? "Playing..."
                      : "Tap to play"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}