import React from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewSection() {
  const reviews = [
    {
      name: "Aarav Sharma",
      event: "Wedding Decoration",
      review:
        "Absolutely stunning decoration setup. Every detail looked luxurious and premium. Our guests were amazed with the entire wedding ambiance.",
    },
    {
      name: "Priya Malhotra",
      event: "Birthday Surprise",
      review:
        "Mannat Luxury Events made my birthday unforgettable. The balloon setup and romantic decoration were beyond my expectations.",
    },
    {
      name: "Ritika & Karan",
      event: "Anniversary Celebration",
      review:
        "Very professional team with beautiful creative ideas. The decoration looked elegant and classy. Highly recommended for luxury events.",
    },
    {
      name: "Neha Kapoor",
      event: "Baby Shower",
      review:
        "Everything was perfectly managed from start to finish. The pastel theme and floral decoration looked magical in photos.",
    },
    {
      name: "Rahul Verma",
      event: "Room Decoration",
      review:
        "Booked them for a surprise room setup and honestly it looked like a 5-star luxury experience. Amazing work and timely service.",
    },
    {
      name: "Simran Kaur",
      event: "Haldi Function",
      review:
        "The yellow floral setup and stage decoration were absolutely gorgeous. Everyone appreciated the creativity and premium finishing.",
    },
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-white
        to-pink-50
        py-20
        px-4
        sm:px-6
        lg:px-8
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          top-0
          left-0
          h-72
          w-72
          rounded-full
          bg-pink-200/30
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-72
          w-72
          rounded-full
          bg-pink-300/20
          blur-3xl
        "
      />

      {/* Container */}
      <div className="relative mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          
          <span
            className="
              inline-block
              rounded-full
              bg-pink-100
              px-5
              py-2
              text-sm
              font-semibold
              text-pink-600
            "
          >
            Client Reviews
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              text-black
              sm:text-4xl
              lg:text-5xl
            "
          >
            What Our
            <span className="text-pink-500">
              {" "}
              Clients Say
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-gray-600
            "
          >
            Luxury decoration experiences
            loved by our happy clients.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div
          className="
            absolute
            right-0
            top-[120px]
            z-10
            hidden
            gap-4
            lg:flex
          "
        >
          <button
            className="
              review-prev
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-pink-500
              shadow-lg
              transition-all
              duration-300
              hover:bg-pink-500
              hover:text-white
            "
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="
              review-next
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-pink-500
              shadow-lg
              transition-all
              duration-300
              hover:bg-pink-500
              hover:text-white
            "
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".review-prev",
            nextEl: ".review-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-16 pt-10 pb-10"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              
              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-pink-100
                  bg-white
                  p-7
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  h-full
                "
              >
                {/* Quote */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    text-pink-100
                  "
                >
                  <Quote size={60} />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="
                        fill-pink-500
                        text-pink-500
                      "
                    />
                  ))}
                </div>

                {/* Review */}
                <p
                  className="
                    mt-6
                    text-[15px]
                    leading-7
                    text-gray-600
                    min-h-[160px]
                  "
                >
                  “{item.review}”
                </p>

                {/* Bottom */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  "
                >
                  {/* Avatar */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-r
                      from-pink-500
                      to-pink-600
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    {item.name.charAt(0)}
                  </div>

                  {/* Name */}
                  <div>
                    <h4
                      className="
                        text-base
                        font-bold
                        text-black
                      "
                    >
                      {item.name}
                    </h4>

                    <p
                      className="
                        text-sm
                        text-pink-500
                        font-medium
                      "
                    >
                      {item.event}
                    </p>
                  </div>
                </div>

                {/* Hover Border */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-3xl
                    border-2
                    border-transparent
                    group-hover:border-pink-300
                    transition-all
                    duration-500
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}