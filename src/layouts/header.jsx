import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/event.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "text-gray-200 hover:text-yellow-400 transition duration-300";

  return (
    <>
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-lg shadow-yellow-500/10"
            : "bg-transparent"
        }`}
      >
        <div
          className="
          max-w-7xl mx-auto
          flex items-center justify-between
          px-4 sm:px-6 lg:px-8
          py-3 md:py-4
        "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
          >
            <img
              src={logo}
              alt="logo"
              className="
              h-9 sm:h-10 md:h-12
              w-auto object-contain
            "
            />

            {/* Brand Name */}
            <div className="flex flex-col leading-tight">
              <span
                className="
                text-white
                text-xs sm:text-sm md:text-lg
                font-bold
                tracking-wide
                uppercase
              "
              >
                Mannat Luxury
              </span>

              <span
                className="
                text-yellow-400
                text-[10px] sm:text-xs md:text-sm
                font-semibold
                tracking-[2px] md:tracking-[4px]
                uppercase
              "
              >
                Events
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul
            className="
            hidden lg:flex
            gap-6 xl:gap-10
            font-semibold
            items-center
            text-sm xl:text-base
            tracking-wide
          "
          >
            <NavLink to="/" className={navLinkClass}>
              HOME
            </NavLink>

            <NavLink to="/services" className={navLinkClass}>
              SERVICES
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              ABOUT
            </NavLink>

            <NavLink to="/our-gallery" className={navLinkClass}>
              GALLERY
            </NavLink>

            <NavLink to="/course" className={navLinkClass}>
              COURSE
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              CONTACT
            </NavLink>
          </ul>

          {/* Desktop Button */}
          <a
            href="https://wa.me/7888735541"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <button
              className="
              hidden lg:flex items-center gap-2
              bg-yellow-500 text-black
              px-4 xl:px-6
              py-2.5
              rounded-lg
              font-semibold
              text-sm xl:text-base
              hover:bg-yellow-400
              transition-all duration-300
              shadow-lg shadow-yellow-500/30
            "
            >
              GET STARTED
              <Plus size={18} />
            </button>
          </a>

          {/* Mobile Icon */}
          <button
            className="
            lg:hidden
            text-white
            p-2
            rounded-lg
            hover:bg-white/10
            transition
          "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
        fixed top-0 right-0
        h-screen
        w-[85%] sm:w-[70%]
        bg-black/95 backdrop-blur-xl
        z-[60]
        transform transition-transform duration-500 ease-in-out
        lg:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        {/* Mobile Top */}
        <div
          className="
          flex items-center justify-between
          px-5 py-5
          border-b border-yellow-500/10
        "
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-auto object-contain"
            />

            <div className="flex flex-col leading-tight">
              <span className="text-white text-sm font-bold uppercase">
                Mannat Luxury
              </span>

              <span className="text-yellow-400 text-xs tracking-[3px] uppercase">
                Events
              </span>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <div
          className="
          flex flex-col
          gap-7
          p-6
          font-semibold
          text-base
        "
        >
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            HOME
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            SERVICES
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/our-gallery"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            GALLERY
          </NavLink>

          <NavLink
            to="/course"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            COURSE
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={navLinkClass}
          >
            CONTACT
          </NavLink>

          {/* Mobile Button */}
          <a
            href="https://wa.me/7888735541"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2"
          >
            <button
              className="
              w-full
              flex justify-center items-center gap-2
              bg-yellow-500 text-black
              px-6 py-3
              rounded-lg
              font-semibold
              hover:bg-yellow-400
              transition-all duration-300
              shadow-md shadow-yellow-500/30
            "
            >
              GET STARTED
              <Plus size={18} />
            </button>
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}