import React from "react";
import heroImg from "../../assets/ma-1.png";

export default function HeroBanner() {
  return (
    <section className="w-full bg-white pt-24">
      
      {/* Container */}
      <div className="mx-auto max-w-8xl">
        
        {/* Banner */}
        <a
          href="https://wa.me/917888735541"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden block cursor-pointer"
        >
          
          {/* Image */}
          <img
            src={heroImg}
            alt="Luxury Event"
            className="
              w-full
              object-cover
              h-[300px]
              sm:h-[320px]
              md:h-[420px]
              lg:h-[620px]
              transition-transform duration-500 hover:scale-105
            "
          />

          {/* Optional Overlay */}
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition duration-300"></div>

        </a>
      </div>
    </section>
  );
}