import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function CourseBenefits() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🌟 Soft Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(234,179,8,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why People <span className="text-yellow-400">Choose Us</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We don’t just teach — we help you build a real business 🚀
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "Start From Zero",
            "Business Guidance",
            "Personal Support",
            "Fast Learning",
            "Focus on Earning",
            "High Demand Skill",
          ].map((title, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}

              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}

              className="group relative"
            >

              {/* 🌟 Animated Border */}
              <div className="absolute inset-0 rounded-2xl border border-yellow-500/20 
              group-hover:border-yellow-400 transition duration-300" />

              {/* 💎 Card */}
              <div className="relative bg-[#0a0a0a] rounded-2xl p-6 overflow-hidden">

                {/* ✨ Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10" />

                {/* 🔥 Bottom Line Animation */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-400 
                group-hover:w-full transition-all duration-500" />

                {/* CONTENT */}
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                  {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  This course helps you build real skills and start earning from day one.
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}