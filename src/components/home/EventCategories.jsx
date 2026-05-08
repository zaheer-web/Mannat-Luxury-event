import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ───────── IMAGES ───────── */
import birthdayImg from "../../assets/icon-1.webp";
import sameDayImg from "../../assets/icon-2.webp";
import anniversaryImg from "../../assets/icon-3.webp";
import babyImg from "../../assets/icon-5.webp";
import festiveImg from "../../assets/icon-6.webp";
import giftImg from "../../assets/icon-7.webp";
import kidsImg from "../../assets/icon-8.webp";

const services = [
  {
    image: birthdayImg,
    path: "/gallery/birthday",
  },
  {
    image: sameDayImg,
    path: "/gallery/sameday",
  },
  {
    image: anniversaryImg,
    path: "/gallery/anniversary",
  },
  {
    image: babyImg,
    path: "/gallery/babyshower",
  },
  {
    image: festiveImg,
    path: "/gallery/festive",
  },
  {
    image: kidsImg,
    path: "/gallery/gift",
  },
  {
    image: giftImg,
    path: "/gallery/kids",
  },
];

export default function EventCategories() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  /* ───────── SCROLL FUNCTIONS ───────── */
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -220,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 220,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-6 sm:py-10">
      
      {/* Container */}
      <div className="relative mx-auto max-w-[90rem]">
        
        {/* ───────── LEFT BUTTON ───────── */}
        <button
          onClick={scrollLeft}
          className="
          absolute left-1 top-1/2 z-20
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-pink-600 text-white
          shadow-lg

          transition-all duration-300
          hover:scale-105

          sm:left-3
          sm:h-10 sm:w-10
        "
        >
          <ChevronLeft size={18} />
        </button>

        {/* ───────── RIGHT BUTTON ───────── */}
        <button
          onClick={scrollRight}
          className="
          absolute right-1 top-1/2 z-20
          flex h-8 w-8 -translate-y-1/2
          items-center justify-center
          rounded-full
          bg-pink-600 text-white
          shadow-lg

          transition-all duration-300
          hover:scale-105

          sm:right-3
          sm:h-10 sm:w-10
        "
        >
          <ChevronRight size={18} />
        </button>

        {/* ───────── CAROUSEL ───────── */}
        <div
          ref={sliderRef}
          className="
          flex items-center gap-3
          overflow-x-auto
          scroll-smooth

          px-10 py-2

          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]

          sm:gap-5
          sm:px-16
          lg:justify-center
        "
        >
          {services.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="
              group flex-shrink-0 cursor-pointer
            "
            >
              
              {/* Image */}
              <div
                className="
                flex items-center justify-center
                transition-all duration-500
                group-hover:scale-105
              "
              >
                <img
                  src={item.image}
                  alt="category"
                  className="
                  object-contain

                  h-[85px]
                  w-[95px]

                  sm:h-[110px]
                  sm:w-[110px]

                  md:h-[120px]
                  md:w-[120px]

                  lg:h-[135px]
                  lg:w-[165px]
                "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}