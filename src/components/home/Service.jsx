import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ───────── IMAGES ───────── */
import img1 from "../../assets/ah-2.avif";
import img2 from "../../assets/za-10.jpeg";
import img3 from "../../assets/ad-1.jpg";
import img4 from "../../assets/za-7.jpeg";
import img5 from "../../assets/za-12.jpeg";
import img6 from "../../assets/za-9.jpeg";
import img7 from "../../assets/b-2.jpg";
import img8 from "../../assets/za-26.jpeg";


/* ───────── DATA ───────── */
/* ───────── DATA ───────── */
const services = [
  {
    title: "Balloon Decoration",
    img: img1,
    path: "/our-gallery",
  },
  {
    title: "Birthday Decoration",
    img: img2,
    path: "/our-gallery",
  },
  {
    title: "Anniversary Decoration",
    img: img3,
    path: "/our-gallery",
  },
  {
    title: "Haldi Decoration",
    img: img4,
    path: "/our-gallery",
  },
  {
    title: "All Type Decoration",
    img: img5,
    path: "/our-gallery",
  },
  {
    title: "Couple Entry",
    img: img6,
    path: "/our-gallery",
  },
  {
    title: "Birthday Surprise",
    img: img7,
    path: "/our-gallery",
  },
  {
    title: "Proposal Decoration",
    img: img8,
    path: "/our-gallery",
  },
];
export default function TrendingSetup() {
  const sliderRef = useRef(null);

  /* ───────── SCROLL ───────── */
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 lg:py-16">
      
      {/* Container */}
      <div className="mx-auto max-w-[90rem] px-3 sm:px-6 lg:px-8">
        
        {/* ───────── TOP BAR ───────── */}
        <div className="mb-8 flex items-center justify-between">
          
          {/* Title */}
          <h2
            className="
            text-[2rem]
            leading-none
            text-pink-700

            sm:text-4xl
            lg:text-5xl
          "
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
            }}
          >
            Trending Setup
          </h2>

          {/* View All */}
          <Link
            to="/our-gallery"
            className="
            hidden items-center gap-2
            text-sm text-pink-600
            transition-all duration-300
            hover:text-pink-800

            sm:flex
          "
          >
            View all

            <div
              className="
              flex h-8 w-8 items-center justify-center
              rounded-full
              bg-pink-50
            "
            >
              <ChevronRight size={16} />
            </div>
          </Link>
        </div>

        {/* ───────── SLIDER ───────── */}
        <div className="relative">
          
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="
            absolute left-0 top-1/2 z-20
            hidden -translate-y-1/2

            items-center justify-center
            rounded-full
            border border-pink-100
            bg-white

            shadow-lg
            transition-all duration-300
            hover:bg-pink-500
            hover:text-white

            lg:flex

            h-12 w-12
          "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="
            absolute right-0 top-1/2 z-20
            hidden -translate-y-1/2

            items-center justify-center
            rounded-full
            border border-pink-100
            bg-white

            shadow-lg
            transition-all duration-300
            hover:bg-pink-500
            hover:text-white

            lg:flex

            h-12 w-12
          "
          >
            <ChevronRight size={20} />
          </button>

          {/* Carousel */}
          <div
            ref={sliderRef}
            className="
            flex gap-4 overflow-x-auto
            scroll-smooth

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]

            lg:px-14
          "
          >
            {services.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="
                group flex-shrink-0

                w-[82%]
                sm:w-[48%]
                lg:w-[360px]
              "
              >
                
                {/* Card */}
                <div
                  className="
                  overflow-hidden
                  rounded-[22px]
                  border border-pink-100
                  bg-white

                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-xl hover:shadow-pink-100
                "
                >
                  
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
                      h-[260px] w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-105

                      sm:h-[320px]
                      lg:h-[420px]
                    "
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    
                    {/* Title */}
                    <h3
                      className="
                      line-clamp-2
                      text-[15px]
                      leading-snug
                      text-black

                      transition-colors duration-300
                      group-hover:text-pink-600

                      sm:text-lg
                    "
                      style={{
                        fontFamily:
                          "'Cormorant Garamond', serif",
                        fontWeight: 700,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ───────── MOBILE BUTTONS ───────── */}
        <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
          
          <button
            onClick={scrollLeft}
            className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-pink-100
            bg-white

            shadow-md
            transition-all duration-300
            hover:bg-pink-500
            hover:text-white
          "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-pink-100
            bg-white

            shadow-md
            transition-all duration-300
            hover:bg-pink-500
            hover:text-white
          "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}