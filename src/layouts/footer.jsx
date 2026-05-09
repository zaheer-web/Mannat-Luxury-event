import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus,
  Youtube,
  Linkedin,
  Send,
  Home,
  Grid2X2,
  Image,
  Contact,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ───────── FLOATING BUTTON ───────── */}
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-3">
        
        {open && (
          <>
            {/* WhatsApp */}
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-[#25D366]
                text-white
                shadow-2xl
                transition-all duration-300
                hover:scale-110
              "
            >
              <MessageCircle size={24} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mannatluxuryevents?igsh=cGkxNXpmYXN5ZzJt"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-gradient-to-br from-pink-500 to-pink-700
                text-white
                shadow-2xl
                transition-all duration-300
                hover:scale-110
              "
            >
              <Instagram size={24} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61580287569524"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-14 w-14 items-center justify-center
                rounded-2xl
                bg-blue-500
                text-white
                shadow-2xl
                transition-all duration-300
                hover:scale-110
              "
            >
              <Facebook size={24} />
            </a>
          </>
        )}

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex h-16 w-16 items-center justify-center
            rounded-2xl
            bg-white
            text-[#b0004f]
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            transition-all duration-500
            hover:scale-110
          "
        >
          <Plus
            size={26}
            className={`transition-all duration-500 ${
              open ? "rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* ───────── DESKTOP FOOTER ───────── */}
      <footer className="relative hidden overflow-hidden bg-[#b0004f] text-white lg:block">
        
        {/* Container */}
        <div className="mx-auto max-w-[90rem] px-6 py-16 lg:px-12">
          
          {/* TOP GRID */}
          <div
            className="
              grid gap-14
              md:grid-cols-2
              lg:grid-cols-5
            "
          >
            
            {/* LEFT */}
            <div className="lg:col-span-2">
              
              <h2
                className="text-4xl leading-tight text-white font-bold"
              >
                Mannat Luxury Events
              </h2>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-[15px]
                  leading-8
                  text-white/80
                "
              >
                Your exclusive destination for
                luxury decoration setups,
                birthday surprises, wedding
                celebrations and premium event
                styling experiences.
              </p>

              {/* INPUT */}
              <div className="mt-8 flex max-w-md items-center overflow-hidden rounded-xl border border-white/20 bg-[#c00057]">
                
                <input
                  type="email"
                  placeholder="E-mail"
                  className="
                    h-[60px]
                    w-full
                    bg-transparent
                    px-5
                    text-white
                    placeholder:text-white/50
                    outline-none
                  "
                />

                <button
                  className="
                    mr-3
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    bg-white/10
                    transition-all duration-300
                    hover:bg-white
                    hover:text-[#b0004f]
                  "
                >
                  <Send size={16} />
                </button>
              </div>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="mb-6 text-lg font-bold">
                Customer Support
              </h3>

              <div className="space-y-4 text-white/80">
                <a
                  href="tel:7888735541"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone size={16} />
                  +91 78887 35541
                </a>

                <a
                  href="mailto:support@mannatluxury.com"
                  className="flex items-center gap-3 hover:text-white break-all"
                >
                  <Mail size={16} />
                  support@mannatluxury.com
                </a>

                <div className="flex items-center gap-3">
                  <MapPin size={16} />
                  India
                </div>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="mb-6 text-lg font-bold">
                Services
              </h3>

              <ul className="space-y-4 text-white/80">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Birthday Decoration
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Wedding Setup
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Balloon Decoration
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Baby Shower
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Surprise Room Decor
                  </Link>
                </li>
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="mb-6 text-lg font-bold">
                Quick Links
              </h3>

              <ul className="space-y-4 text-white/80">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-white">
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/our-gallery"
                    className="hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="hover:text-white"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="mt-16 flex flex-wrap items-center gap-5">
            
            <a
              href="#"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                text-white
                transition-all duration-300
                hover:bg-white
                hover:text-[#b0004f]
              "
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                text-white
                transition-all duration-300
                hover:bg-white
                hover:text-[#b0004f]
              "
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                text-white
                transition-all duration-300
                hover:bg-white
                hover:text-[#b0004f]
              "
            >
              <Youtube size={18} />
            </a>

            <a
              href="#"
              className="
                flex h-11 w-11 items-center justify-center
                rounded-full
                border border-white/20
                text-white
                transition-all duration-300
                hover:bg-white
                hover:text-[#b0004f]
              "
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 border-t border-white/10 pt-6">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Mannat Luxury Events.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ───────── MOBILE FIXED FOOTER ───────── */}
      <div
        className="
          fixed bottom-0 left-0 right-0 z-50
          border-t border-gray-200
          bg-white
          shadow-[0_-5px_30px_rgba(0,0,0,0.08)]
          lg:hidden
        "
      >
        <div className="grid grid-cols-5">
          
          {/* Home */}
          <Link
            to="/"
            className="
              flex flex-col items-center justify-center
              py-3 text-[#111]
            "
          >
            <Home size={20} />
            <span className="mt-1 text-[11px] font-medium">
              Home
            </span>
          </Link>

          {/* Services */}
          <Link
            to="/services"
            className="
              flex flex-col items-center justify-center
              py-3 text-[#111]
            "
          >
            <Grid2X2 size={20} />
            <span className="mt-1 text-[11px] font-medium">
              Services
            </span>
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917888735541"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex flex-col items-center justify-center
              py-3 text-green-500
            "
          >
            <MessageCircle size={20} />
            <span className="mt-1 text-[11px] font-medium">
              Chat
            </span>
          </a>

          {/* Gallery */}
          <Link
            to="/our-gallery"
            className="
              flex flex-col items-center justify-center
              py-3 text-[#111]
            "
          >
            <Image size={20} />
            <span className="mt-1 text-[11px] font-medium">
              Gallery
            </span>
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className="
              flex flex-col items-center justify-center
              py-3 text-[#111]
            "
          >
            <Contact size={20} />
            <span className="mt-1 text-[11px] font-medium">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}