import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PartyPopper,
  Cake,
  HeartHandshake,
  Flower2,
  Sparkles,
  Users,
  Gift,
  Gem,
} from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/ah-2.avif";
import img2 from "../../assets/za-10.jpeg";
import img3 from "../../assets/ad-1.jpg";
import img4 from "../../assets/za-7.jpeg";
import img5 from "../../assets/za-12.jpeg";
import img6 from "../../assets/za-9.jpeg";
import img8 from "../../assets/ba-2.webp";
import img9 from "../../assets/za-26.jpeg";

/* ───────── SERVICES ───────── */
const services = [
  {
    title: "Balloon Decoration",
    icon: PartyPopper,
    img: img1,
    path: "/our-gallery",
    tag: "Popular",
  },
  {
    title: "Birthday Decoration",
    icon: Cake,
    img: img2,
    path: "/our-gallery",
    tag: "Trending",
  },
  {
    title: "Anniversary Decoration",
    icon: HeartHandshake,
    img: img3,
    path: "/our-gallery",
    tag: null,
  },
  {
    title: "Haldi Decoration",
    icon: Flower2,
    img: img4,
    path: "/our-gallery",
    tag: null,
  },
  {
    title: "All Type Decoration",
    icon: Sparkles,
    img: img5,
    path: "/our-gallery",
    tag: "New",
  },
  {
    title: "Couple Entry",
    icon: Users,
    img: img6,
    path: "/our-gallery",
    tag: null,
  },
  {
    title: "Birthday Surprise",
    icon: Gift,
    img: img8,
    path: "/our-gallery",
    tag: null,
  },
  {
    title: "Proposal Decoration",
    icon: Gem,
    img: img9,
    path: "/our-gallery",
    tag: "Exclusive",
  },
];

/* ───────── CARD ───────── */
function ServiceCard({ service, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  });

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
    >
      <Link to={service.path} className="group block">
        <div className="relative overflow-hidden rounded-[28px] border border-white/5 bg-[#0d0d0d] transition-all duration-500 hover:border-yellow-500/30 hover:-translate-y-2">

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-yellow-500/10 blur-[70px]" />
          </div>

          {/* Top Border */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 group-hover:w-full" />

          {/* ───────── IMAGE ───────── */}
          <div className="relative h-52 overflow-hidden sm:h-60">
            <img
              src={service.img}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Tag */}
            {service.tag && (
              <span
                className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-[10px] uppercase tracking-[2px] text-black"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                {service.tag}
              </span>
            )}

            {/* Icon */}
            <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-yellow-500/20 bg-black/60 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:bg-yellow-500">
              <Icon
                size={20}
                className="text-yellow-400 transition-all duration-500 group-hover:text-black"
              />
            </div>
          </div>

          {/* ───────── CONTENT ───────── */}
          <div className="p-5">
            {/* Number Line */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className="text-[10px] tracking-[4px] text-yellow-500/60"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                0{index + 1}
              </span>

              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Title */}
            <div className="flex items-center justify-between gap-3">
              <h3
                className="text-[1.05rem] leading-snug text-white transition-colors duration-300 group-hover:text-yellow-400"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                {service.title}
              </h3>

              {/* Arrow */}
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-yellow-500/20 transition-all duration-500 group-hover:border-yellow-500 group-hover:bg-yellow-500">
                <ArrowRight
                  size={16}
                  className="text-yellow-400 transition-all duration-500 group-hover:translate-x-1 group-hover:text-black"
                />
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-5 flex items-center gap-2">
              <div className="h-[2px] w-0 bg-yellow-400 transition-all duration-500 group-hover:w-12" />

              <div className="h-2 w-2 rounded-full bg-yellow-500/40 transition-all duration-500 group-hover:bg-yellow-400" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ───────── MAIN SECTION ───────── */
function Service() {
  const headingRef = useRef(null);

  const headingInView = useInView(headingRef, {
    once: true,
  });

  return (
    <section className="relative overflow-hidden bg-[#070707] py-24">
      {/* ───────── BG EFFECTS ───────── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 70px),repeating-linear-gradient(90deg,#f5c518 0,#f5c518 1px,transparent 1px,transparent 70px)",
        }}
      />

      <div className="absolute top-0 left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* ───────── CONTAINER ───────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* ───────── HEADING ───────── */}
        <div
          ref={headingRef}
          className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          {/* Left */}
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={headingInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <div className="h-[2px] w-8 bg-yellow-500" />

              <span
                className="text-[10px] uppercase tracking-[5px] text-yellow-400"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                }}
              >
                What We Offer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl leading-[1.05] text-white"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
              }}
            >
              Our{" "}

              <span className="text-yellow-400">
                Services
              </span>
            </motion.h2>

            {/* Desc */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              We design luxury balloon decorations and premium setups
              that make every celebration unforgettable.
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/our-gallery"
              className="group inline-flex items-center gap-2 rounded-full border border-yellow-500/30 px-6 py-3 text-sm text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
              }}
            >
              View All Work

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* ───────── GRID ───────── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* ───────── STATS ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 overflow-hidden rounded-[28px] border border-white/5 bg-white/[0.03] sm:grid-cols-4"
        >
          {[
            { num: "500+", label: "Events Done" },
            { num: "8+", label: "Service Types" },
            { num: "4.9★", label: "Avg Rating" },
            { num: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div
              key={i}
              className="border border-white/5 px-6 py-6 text-center transition-all duration-300 hover:bg-yellow-500/[0.03]"
            >
              <p
                className="text-3xl text-yellow-400"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                {stat.num}
              </p>

              <p
                className="mt-2 text-[11px] uppercase tracking-wide text-white/45"
                style={{
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Service;