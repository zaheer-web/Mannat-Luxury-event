import React from "react";
import heroImg from "../../assets/ch-3.png";

export default function Banner() {
  return (
    <section className="w-full bg-white py-4 sm:py-6 lg:py-8">
      
      {/* Main Container */}
      <div className="mx-auto max-w-[90rem] px-3 sm:px-6 lg:px-8">
        
        {/* Banner Wrapper */}
        <div className="relative w-full overflow-hidden rounded- bg-pink-50">
          
          {/* Banner Image */}
          <img
            src={heroImg}
            alt="Luxury Event"
            className="
              w-full
              max-w-[90rem]
              mx-auto

              h-auto

              object-contain
              object-top

              rounded-
            "
          />

          {/* Light Overlay */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none rounded-xl" />
        </div>
      </div>
    </section>
  );
}