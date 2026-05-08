import React from "react";
import heroImg from "../../assets/sasa-2.jpeg";

export default function HeroBanner() {
  return (
    <section className="w-full bg-white pt-24 sm:pt- lg:pt-pb- sm:pb- lg:pb-">
      
      {/* Container */}
      <div className="mx-auto max-w-8xl px- sm:px- lg:px-">
        
        {/* Banner */}
        <div className="relative overflow-hidden">
          
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
            lg:h-[520px]
          "
          />

          {/* Soft Overlay */}
         
        </div>
      </div>
    </section>
  );
}