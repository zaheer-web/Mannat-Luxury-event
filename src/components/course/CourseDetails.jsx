import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 }
  })
};

export default function CourseDetails() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6 relative overflow-hidden">

      {/* 🔥 SUBTLE GOLD GLOW BG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,179,8,0.08),transparent)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Course <span className="text-yellow-400">Highlights</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            Everything you need to build a successful decoration business
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "💰 Earnings Potential",
              desc: "Earn ₹50K – ₹1L+ monthly with event bookings & decorations."
            },
            {
              title: "🎁 Free Startup Kit",
              desc: "Includes ring stand, balloon pump, neon decor & tools worth ₹5000."
            },
            {
              title: "🎓 What You Will Learn",
              list: [
                "Balloon Basics & Types",
                "Arch & Ring Decoration",
                "Theme Setup",
                "Event Styling",
                "Client Handling"
              ]
            },
            {
              title: "📦 Kit Includes",
              desc: "All essential tools & materials to start your journey immediately."
            },
            {
              title: "⚡ Lifetime Support",
              desc: "Get guidance even after course completion for business growth."
            },
            {
              title: "📍 Course Details",
              list: [
                "3 Days Training",
                "Certificate Included",
                "Live Practice",
                "Limited Seats"
              ]
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >

              {/* 🌟 GRADIENT BORDER */}
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-yellow-500/60 via-yellow-300/30 to-yellow-600/60 opacity-60 group-hover:opacity-100 transition duration-500 blur-[0.5px]" />

              {/* 💎 CARD */}
              <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 border border-white/5 overflow-hidden">

                {/* ✨ INNER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
                bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-500/10" />

                {/* 💡 SHINE EFFECT */}
                <div className="absolute -left-32 top-0 w-32 h-full bg-white/10 rotate-12 
                group-hover:translate-x-[300%] transition duration-1000" />

                {/* CONTENT */}
                <h3 className="text-lg font-semibold text-yellow-400 mb-3 tracking-wide">
                  {card.title}
                </h3>

                {card.desc && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                )}

                {card.list && (
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {card.list.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-yellow-400">✔</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}