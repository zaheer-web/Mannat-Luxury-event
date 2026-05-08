import React from "react";
import { useNavigate } from "react-router-dom";

/* ───────── IMAGES ───────── */
import preWedding from "../../assets/ch-5.png";
import anniversary from "../../assets/ch-4.png";
import birthday from "../../assets/ch-1.png";
import kidsTheme from "../../assets/ch-2.png";

const categories = [
  {
    
    image: preWedding,
    path: "/gallery/pre-wedding",
  },
  {
    
    image: anniversary,
    path: "/gallery/anniversary",
  },
  {
   
    image: birthday,
    path: "/gallery/birthday",
  },
  {
    
    image: kidsTheme,
    path: "/gallery/babyshower",
  },
];

export default function EventCategories() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-5 sm:py-8 lg:py-10">
      
      {/* Container */}
      <div className="mx-auto max-w-[90rem] px-2 sm:px-6 lg:px-8">
        
        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          
          {categories.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="
              group relative cursor-pointer
              overflow-hidden rounded-xl
            "
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                h-[170px] w-full object-cover
                transition-all duration-700
                group-hover:scale-105

                sm:h-[260px]
                md:h-[320px]
                lg:h-[300px]
              "
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t from-black/40 via-black/5 to-transparent
              "
              />

              {/* Title */}
              <div
                className="
                absolute bottom-3 left-3
                sm:bottom-5 sm:left-5
                lg:bottom-7 lg:left-7
              "
              >
                <h2
                  className="
                  text-white
                  text-lg leading-none
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                "
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  {item.title}
                </h2>
              </div>

              {/* Hover Effect */}
              <div
                className="
                absolute inset-0
                bg-white/0
                transition-all duration-500
                group-hover:bg-white/5
              "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}