import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Sparkles,
} from "lucide-react";

import { NavLink, Link } from "react-router-dom";
import logo from "../assets/image.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }) =>
    `
      relative
      transition-all duration-300
      hover:text-pink-500
      ${
        isActive
          ? "text-pink-500"
          : "text-[#111]"
      }
      after:absolute
      after:left-0
      after:-bottom-1
      after:h-[2px]
      after:bg-pink-500
      after:transition-all
      after:duration-300
      ${
        isActive
          ? "after:w-full"
          : "after:w-0 hover:after:w-full"
      }
    `;

  return (
    <>
      {/* ───────── NAVBAR ───────── */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "bg-white"
          }
        `}
      >
        <div
          className="
            max-w-[92rem]
            mx-auto
            px-4 sm:px-6 lg:px-8
          "
        >
          <div
            className="
              flex items-center justify-between
              h-[74px] md:h-[82px]
            "
          >
            {/* ───── LOGO ───── */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="logo"
                className="
                  h-10 sm:h-11 md:h-12
                  w-auto object-contain
                "
              />

              <div className="leading-tight">
                <h2
                  className="
                    text-black
                    text-sm sm:text-base md:text-lg
                    font-bold
                    tracking-wide
                    uppercase
                  "
                >
                  Mannat Luxury
                </h2>

                <p
                  className="
                    text-pink-500
                    text-[10px] sm:text-xs
                    font-semibold
                    tracking-[3px]
                    uppercase
                  "
                >
                  Events
                </p>
              </div>
            </Link>

            {/* ───── DESKTOP MENU ───── */}
            <div
              className="
                hidden lg:flex
                items-center gap-10
                text-[15px]
                font-semibold
              "
            >
              <NavLink
                to="/"
                className={navLinkClass}
              >
                HOME
              </NavLink>

              <NavLink
                to="/services"
                className={navLinkClass}
              >
                SERVICES
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
              >
                ABOUT
              </NavLink>

              <NavLink
                to="/our-gallery"
                className={navLinkClass}
              >
                GALLERY
              </NavLink>

              <NavLink
                to="/course"
                className={navLinkClass}
              >
                COURSE
              </NavLink>

              <NavLink
                to="/contact"
                className={navLinkClass}
              >
                CONTACT
              </NavLink>
            </div>

            {/* ───── RIGHT SIDE ───── */}
            <div className="flex items-center gap-3">
              
              {/* MOBILE CALL BUTTON */}
              <a
                href="tel:7888735541"
                className="
                  lg:hidden
                  flex items-center gap-2
                  bg-gradient-to-r
                  from-pink-500 to-pink-600
                  text-white
                  px-3 py-2
                  rounded-full
                  shadow-lg shadow-pink-200
                  text-xs
                  font-semibold
                "
              >
                <Phone size={14} />
                7888735541
              </a>

              {/* DESKTOP BUTTON */}
              <a
                href="https://wa.me/917888735541"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:block"
              >
                <button
                  className="
                    flex items-center gap-2
                    bg-gradient-to-r
                    from-pink-500 to-pink-600
                    text-white
                    px-6 py-3
                    rounded-full
                    font-semibold
                    shadow-xl shadow-pink-200
                    hover:scale-105
                    hover:shadow-pink-300
                    transition-all duration-300
                  "
                >
                  <Phone size={18} />
                  7888735541
                </button>
              </a>

              {/* MENU BUTTON */}
              <button
                className="
                  lg:hidden
                  h-11 w-11
                  flex items-center justify-center
                  rounded-full
                  bg-pink-50
                  text-pink-500
                  transition-all duration-300
                  hover:bg-pink-100
                "
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
              >
                {menuOpen ? (
                  <X size={26} />
                ) : (
                  <Menu size={26} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ───────── MOBILE MENU ───────── */}
      <div
        className={`
          fixed top-0 right-0
          h-screen
          w-[85%] sm:w-[70%]
          bg-white
          z-[60]
          transition-all duration-500 ease-in-out
          lg:hidden
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* TOP */}
        <div
          className="
            flex items-center justify-between
            px-5 py-5
            border-b border-pink-100
          "
        >
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-11 w-auto"
            />

            <div>
              <h2 className="font-bold text-black uppercase text-sm">
                Mannat Luxury
              </h2>

              <p
                className="
                  text-pink-500
                  text-[11px]
                  uppercase
                  tracking-[3px]
                  font-semibold
                "
              >
                Events
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              h-10 w-10
              rounded-full
              bg-pink-50
              text-pink-500
              flex items-center justify-center
            "
          >
            <X size={24} />
          </button>
        </div>

        {/* MENU LINKS */}
        <div className="p-6 flex flex-col">
          
          {[
            {
              name: "HOME",
              path: "/",
            },
            {
              name: "SERVICES",
              path: "/services",
            },
            {
              name: "ABOUT",
              path: "/about",
            },
            {
              name: "GALLERY",
              path: "/our-gallery",
            },
            {
              name: "COURSE",
              path: "/course",
            },
            {
              name: "CONTACT",
              path: "/contact",
            },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                py-4
                border-b border-pink-100
                text-[15px]
                font-semibold
                text-[#111]
                hover:text-pink-500
                transition-all duration-300
              "
            >
              {item.name}
            </NavLink>
          ))}

          {/* CALL BUTTON */}
          <a
            href="tel:7888735541"
            className="mt-8"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            <button
              className="
                w-full
                flex items-center justify-center gap-3
                bg-gradient-to-r
                from-pink-500 to-pink-600
                text-white
                py-4
                rounded-2xl
                font-semibold
                shadow-xl shadow-pink-200
              "
            >
              <Phone size={20} />
              Call Now : 7888735541
            </button>
          </a>

          {/* EXTRA BOX */}
          <div
            className="
              mt-6
              rounded-3xl
              bg-pink-50
              p-5
            "
          >
            <div className="flex items-center gap-2 text-pink-500">
              <Sparkles size={18} />
              <span className="font-semibold text-sm">
                Premium Decoration
              </span>
            </div>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-gray-600
              "
            >
              Luxury balloon decoration,
              birthday surprise setups,
              wedding decor & much more.
            </p>
          </div>
        </div>
      </div>

      {/* ───────── OVERLAY ───────── */}
      <div
        onClick={() =>
          setMenuOpen(false)
        }
        className={`
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-50
          transition-all duration-500
          lg:hidden
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />
    </>
  );
}