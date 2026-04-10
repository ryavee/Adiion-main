import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "./logo2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 backdrop-blur-md shadow-sm"
        : "bg-white"
        }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-[80px]">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Adiion Logo" className="h-[80px] mt-2" />
        </Link>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-[2px] bg-black transition ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition ${menuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-[2px] bg-black transition ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
          ></span>
        </div>

        {/* NAV */}
        <nav
          className={`absolute md:static top-[80px] left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-5 py-6 md:py-0 transition-all duration-300 ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
            }`}
        >
          

          {/* LEFT */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-5">

            <NavLink to="/" label="Home" location={location} />
            <NavLink to="/services" label="Services" location={location} />

            {/* DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <span className="cursor-pointer font-medium text-black">
                Products
              </span>

              <div
                className={`absolute top-10 left-0 bg-white shadow-lg rounded-md py-2 min-w-[150px] transition-all duration-200 ${productsOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
                  }`}
              >
                <Link
                  to="/cetrak"
                 className="block px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100"
                >
                  Cetrak
                </Link>
              </div>
            </div>

            <NavLink to="/about" label="About" location={location} />
            <NavLink to="/blog" label="Blog" location={location} />
            <NavLink to="/careers" label="Careers" location={location} />
          </div>

          {/* RIGHT */}
          <Link
            to="/contact"
            className={`border-2 border-indigo-800 px-4 py-1 rounded font-medium transition hover:shadow-lg hover:shadow-indigo-500/30 ${location.pathname === "/contact"
              ? "bg-indigo-800 text-white"
              : "text-indigo-800"
              }`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

/* 🔥 Reusable NavLink Component */
const NavLink = ({ to, label, location }) => {
  return (
    <Link
      to={to}
      className={`font-semibold tracking-wide transition ${
        location.pathname === to
          ? "text-pink-500 font-bold"
          : "text-gray-900 hover:text-pink-500"
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;