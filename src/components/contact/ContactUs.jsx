import React, {
  useState,
  useEffect,
} from "react";

import { motion } from "framer-motion";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Divider from "../home/Divider";

import contactBg from "../../assets/za-18.jpeg";

import { createContact } from "../../api/apiRoute";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

/* SEO */
import { setSEO } from "../../utils/seo";

export default function ContactUs() {
  
  /* ───────── SEO ───────── */
  useEffect(() => {
    setSEO({
      title:
        "Contact Decoration Services in Indirapuram & Noida 62 | Mannat Luxury Events",

      description:
        "Call or message Mannat Luxury Events for wedding, birthday and balloon decoration booking in Indirapuram & Noida 62.",

      keywords: [
        "contact decorator Indirapuram",
        "decoration services Noida 62",
        "event booking",
        "wedding decorator contact",
        "birthday decoration booking",
      ],

      url:
        "https://yourwebsite.com/contact-us",

      schema: {
        "@context":
          "https://schema.org",

        "@type": "ContactPage",

        name:
          "Contact Mannat Luxury Events",

        url:
          "https://yourwebsite.com/contact-us",

        areaServed: [
          "Indirapuram",
          "Noida 62",
        ],
      },
    });
  }, []);

  /* ───────── STATES ───────── */
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });

  /* ───────── HANDLE CHANGE ───────── */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /* ───────── SUBMIT ───────── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast.error(
        "All fields are required"
      );
      return;
    }

    if (
      !/^[a-zA-Z\s]+$/.test(
        formData.fullName
      )
    ) {
      toast.error(
        "Name should contain only letters"
      );
      return;
    }

    if (
      !/^\S+@\S+\.\S+$/.test(
        formData.email
      )
    ) {
      toast.error(
        "Invalid email address"
      );
      return;
    }

    if (
      !/^[0-9]{10}$/.test(
        formData.phone
      )
    ) {
      toast.error(
        "Phone must be 10 digits"
      );
      return;
    }

    try {
      setLoading(true);

      await createContact(
        formData
      );

      toast.success(
        "Message Sent 🎉"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Something went wrong ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

      {/* SEO H1 */}
      <h1 style={{ display: "none" }}>
        Contact Wedding and Birthday
        Decoration Services in
        Indirapuram and Noida 62
      </h1>

      {/* ───────── HERO ───────── */}
      <section
        className="
        relative overflow-hidden
        bg-white

        pt-28
        sm:pt-32
        lg:pt-36

        pb-10
        sm:pb-14
      "
      >
        
        {/* BG GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px),repeating-linear-gradient(90deg,#ec4899 0,#ec4899 1px,transparent 1px,transparent 72px)",
          }}
        />

        {/* PINK GLOW */}
        <div
          className="
          absolute left-[-120px] top-[-120px]

          h-[320px] w-[320px]

          rounded-full
          bg-pink-500/10

          blur-[120px]
        "
        />

        {/* CONTAINER */}
        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          
          {/* BANNER */}
          <div
            className="
            group relative overflow-hidden

            rounded-[40px]
            border border-pink-100

            shadow-2xl shadow-pink-100/50
          "
          >
            
            {/* IMAGE */}
            <motion.img
              src={contactBg}
              alt="contact"
              initial={{
                scale: 1,
              }}
              animate={{
                scale: 1.05,
              }}
              transition={{
                duration: 10,
              }}
              className="
              h-[500px]
              w-full
              object-cover

              sm:h-[450px]
            "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* CONTENT */}
            <div
              className="
              absolute inset-0 z-10

              flex items-center

              px-6
              sm:px-12
              lg:px-20
            "
            >
              
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="max-w-3xl"
              >
                
                {/* Label */}
                <div
                  className="
                  mb-5
                  flex items-center gap-3
                "
                >
                  <div className="h-[2px] w-8 bg-pink-500" />

                  <span
                    className="
                    text-[10px]
                    uppercase tracking-[5px]
                    text-pink-300
                  "
                  >
                    CONTACT US
                  </span>
                </div>

                {/* Heading */}
                <h2
                  className="
                  text-[3rem]
                  leading-[0.95]
                  text-white

                  sm:text-6xl
                  lg:text-7xl
                "
                  style={{
                    fontFamily:
                      "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                >
                  Let’s Plan

                  <br />

                  Your{" "}

                  <span className="text-pink-400">
                    Dream Event
                  </span>
                </h2>

                {/* Desc */}
                <p
                  className="
                  mt-7
                  max-w-2xl

                  text-sm
                  leading-8
                  text-white/80

                  sm:text-base
                "
                >
                  Book your luxury
                  decoration service in
                  Indirapuram & Noida 62
                  today and create
                  unforgettable moments.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ───────── CONTACT SECTION ───────── */}
      <section
        className="
        relative overflow-hidden
        bg-white

        py-20
        sm:py-24
      "
      >
        
        {/* BG GLOW */}
        <div
          className="
          absolute right-[-120px] top-[-120px]

          h-[320px] w-[320px]

          rounded-full
          bg-pink-500/10

          blur-[120px]
        "
        />

        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-10">
          
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* ───────── LEFT CARD ───────── */}
            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              rounded-[36px]
              border border-pink-100
              bg-[#fff7fb]

              p-8
              sm:p-10

              shadow-xl shadow-pink-100/40
            "
            >
              
              {/* Heading */}
              <h2
                className="
                text-[2.3rem]
                text-black

                sm:text-5xl
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                Get in{" "}

                <span className="text-pink-500">
                  Touch
                </span>
              </h2>

              {/* Desc */}
              <p
                className="
                mt-5
                text-sm
                leading-8
                text-black/60

                sm:text-base
              "
              >
                Contact us for birthday,
                wedding and luxury
                decoration bookings.
              </p>

              {/* ITEMS */}
              <div className="mt-10 space-y-6">
                
                {/* PHONE */}
                <div
                  className="
                  flex items-start gap-4
                "
                >
                  <div
                    className="
                    flex h-14 w-14
                    items-center justify-center

                    rounded-2xl
                    bg-pink-50

                    text-pink-500
                  "
                  >
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-black/50">
                      Phone
                    </p>

                    <p className="mt-1 text-black">
                      78887-35541
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div
                  className="
                  flex items-start gap-4
                "
                >
                  <div
                    className="
                    flex h-14 w-14
                    items-center justify-center

                    rounded-2xl
                    bg-pink-50

                    text-pink-500
                  "
                  >
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-black/50">
                      Email
                    </p>

                    <p className="mt-1 break-all text-black">
                      Soodmannat902gmail.com
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div
                  className="
                  flex items-start gap-4
                "
                >
                  <div
                    className="
                    flex h-14 w-14
                    items-center justify-center

                    rounded-2xl
                    bg-pink-50

                    text-pink-500
                  "
                  >
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-black/50">
                      Address
                    </p>

                    <p className="mt-1 text-black">
                      Ghaziabad
                      (Indirapuram &
                      Noida 62 Service
                      Area)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ───────── FORM ───────── */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{
                opacity: 0,
                x: 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
              rounded-[36px]
              border border-pink-100
              bg-white

              p-8
              sm:p-10

              shadow-xl shadow-pink-100/40
            "
            >
              
              {/* Heading */}
              <h2
                className="
                text-[2.3rem]
                text-black

                sm:text-5xl
              "
                style={{
                  fontFamily:
                    "'Cormorant Garamond', serif",
                  fontWeight: 700,
                }}
              >
                Send{" "}

                <span className="text-pink-500">
                  Message
                </span>
              </h2>

              {/* Inputs */}
              <div className="mt-8 space-y-5">
                
                <input
                  name="fullName"
                  value={
                    formData.fullName
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Your Name"
                  className="
                  h-14 w-full

                  rounded-2xl
                  border border-pink-100
                  bg-[#fff7fb]

                  px-5

                  text-black
                  outline-none

                  transition-all duration-300

                  focus:border-pink-400
                "
                />

                <input
                  name="email"
                  value={
                    formData.email
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Email"
                  className="
                  h-14 w-full

                  rounded-2xl
                  border border-pink-100
                  bg-[#fff7fb]

                  px-5

                  text-black
                  outline-none

                  transition-all duration-300

                  focus:border-pink-400
                "
                />

                <input
                  name="phone"
                  value={
                    formData.phone
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Phone"
                  className="
                  h-14 w-full

                  rounded-2xl
                  border border-pink-100
                  bg-[#fff7fb]

                  px-5

                  text-black
                  outline-none

                  transition-all duration-300

                  focus:border-pink-400
                "
                />

                <textarea
                  rows={5}
                  name="message"
                  value={
                    formData.message
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Message"
                  className="
                  w-full

                  rounded-2xl
                  border border-pink-100
                  bg-[#fff7fb]

                  p-5

                  text-black
                  outline-none

                  transition-all duration-300

                  focus:border-pink-400
                "
                />
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                disabled={loading}
                className="
                group

                mt-8
                flex h-[58px]
                w-full

                items-center justify-center
                gap-3

                rounded-2xl
                bg-pink-500

                px-8

                text-white

                shadow-[0_20px_60px_rgba(236,72,153,0.35)]

                transition-all duration-500
                hover:bg-pink-600
              "
              >
                
                {/* Icon */}
                <div
                  className="
                  flex h-9 w-9
                  items-center justify-center

                  rounded-full
                  bg-white/20
                "
                >
                  <Sparkles size={16} />
                </div>

                {/* Text */}
                <span className="text-[14px] tracking-[0.3px]">
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </span>

                {/* Arrow */}
                <ArrowRight
                  size={16}
                  className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
                />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>

      <Divider />

      {/* ───────── MAP ───────── */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-10">
        
        <div
          className="
          overflow-hidden

          rounded-[36px]
          border border-pink-100

          shadow-xl shadow-pink-100/40
        "
        >
          
          <iframe
            src="https://www.google.com/maps?q=Indirapuram&z=15&output=embed"
            className="h-[450px] w-full"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <div style={{ display: "none" }}>
        <a href="/decoration-in-indirapuram">
          Decoration in
          Indirapuram
        </a>

        <a href="/decoration-in-noida-62">
          Decoration in Noida 62
        </a>
      </div>
    </>
  );
}