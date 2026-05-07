import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

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
  const [playingIndex, setPlayingIndex] = useState(null);
  const [mutedIndex, setMutedIndex] = useState([0, 1, 2, 3]);

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

  const toggleMute = (e, index) => {
    e.stopPropagation();
    const current = videoRefs.current[index];
    if (!current) return;
    current.muted = !current.muted;
    setMutedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative bg-[#080808] py-24 overflow-hidden">

      {/* ── BG TEXTURE ── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 72px)",
        }}
      />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-yellow-500/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12">

        {/* ── HEADING ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-yellow-500" />
              <span className="text-yellow-500 text-[11px] font-bold uppercase tracking-[5px]">
                Watch Us Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Our <span className="text-yellow-400">Reels</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-500 text-sm sm:text-base max-w-xs sm:text-right leading-relaxed"
          >
            देखें हमारे latest decoration moments 🎥
          </motion.p>

        </div>

        {/* ── REEL GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">

          {reels.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#111] border border-white/5 hover:border-yellow-500/30 transition-all duration-400"
              style={{ aspectRatio: "9/16" }}
              onClick={() => handlePlayPause(index)}
            >

              {/* VIDEO */}
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.video}
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={(e) => {
                  e.target.currentTime = 0.1;
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

              {/* Top gold line */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 z-20" />

              {/* Label */}
              <div className="absolute top-3 left-3 z-20">
                <span className="bg-black/60 backdrop-blur-sm border border-yellow-500/20 text-yellow-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  {item.label}
                </span>
              </div>

              {/* Mute button */}
              <button
                onClick={(e) => toggleMute(e, index)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-yellow-400 hover:border-yellow-500/40 transition-all duration-200"
              >
                {mutedIndex.includes(index) ? (
                  <VolumeX size={13} />
                ) : (
                  <Volume2 size={13} />
                )}
              </button>

              {/* Play / Pause button — center */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  className={`
                    w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300
                    ${playingIndex === index
                      ? "bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100"
                      : "bg-yellow-500 shadow-[0_0_30px_rgba(245,193,24,0.5)]"}
                  `}
                >
                  {playingIndex === index ? (
                    <Pause size={20} className="text-white" />
                  ) : (
                    <Play size={20} className="text-black fill-black ml-1" />
                  )}
                </motion.div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${playingIndex === index ? "bg-yellow-400 animate-pulse" : "bg-white/30"}`} />
                  <span className="text-white/60 text-[11px] font-medium">
                    {playingIndex === index ? "Playing..." : "Tap to play"}
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