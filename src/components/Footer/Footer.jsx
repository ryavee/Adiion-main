import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Data Solutions', to: '/services' },
  { label: 'Web Development', to: '/services' },
  { label: 'Mobile Apps', to: '/services' },
  { label: 'AI & Automation', to: '/services' },
  { label: 'Cloud Services', to: '/services' },
];

const companyLinks = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Career', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

// Reusable nav list with hover arrow effect
const FooterLinkList = ({ links, handleNavigation }) => (
  <ul className="list-none p-0 m-0">
    {links.map(({ label, to }) => (
      <li key={label} className="group relative mb-[10px] leading-[1.6] pl-5">
        <span className="absolute left-0 top-0 text-white text-[0.9rem] opacity-0 -translate-x-[5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          ⇀
        </span>
        <Link
          to={to}
          onClick={() => handleNavigation(to)}
          className="text-[#ccc] no-underline transition-colors duration-300 hover:text-white"
        >
          {label}
        </Link>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  const location = useLocation();

  const handleNavigation = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="text-[#ccc] pt-[60px] px-5 pb-[30px] font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]"
      style={{ background: 'linear-gradient(135deg, #141414, #1f1f1f)' }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[25px]">

          {/* Brand */}
          <div className="text-[#ccc]">
            <Link
              to="/"
              onClick={() => handleNavigation('/')}
              className="text-[1.8rem] font-bold text-white no-underline"
            >
              ADIION
            </Link>
            <p className="mt-[15px] text-[0.95rem] leading-[1.6] text-[#bbb]">
              Empowering businesses with innovative IT solutions and smart automation.
            </p>
            <div className="flex gap-[14px] mt-5">
              <a
                href="https://www.facebook.com/share/1BwXMTbEPv/"
                target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-white text-[1.2rem] bg-[#1877f2] transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/Adiion_"
                target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-white text-[1.2rem] bg-black transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/adiion/"
                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-white text-[1.2rem] bg-[#0077b5] transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/_adiion_"
                target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-[38px] h-[38px] rounded-full flex items-center justify-center text-white text-[1.2rem] transition-transform duration-300 hover:scale-[1.15] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                style={{ background: 'radial-gradient(circle at 30% 80%, #feda75, #d62976, #962fbf, #4f5bd5)' }}
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="text-[#ccc]">
            <h3 className="text-white text-[1.2rem] mb-4 font-semibold pl-5">Services</h3>
            <FooterLinkList links={navLinks} handleNavigation={handleNavigation} />
          </div>

          {/* Company */}
          <div className="text-[#ccc]">
            <h3 className="text-white text-[1.2rem] mb-4 font-semibold pl-5">Company</h3>
            <FooterLinkList links={companyLinks} handleNavigation={handleNavigation} />
          </div>

          {/* Products */}
          <div className="text-[#ccc]">
            <h3 className="text-white text-[1.2rem] mb-4 font-semibold pl-5">Products</h3>
            <FooterLinkList links={[{ label: 'Cetrak', to: '/cetrak' }]} handleNavigation={handleNavigation} />
          </div>

          {/* Contact */}
          <div className="text-[#ccc]">
            <h3 className="text-white text-[1.2rem] mb-4 font-semibold pl-5">Contact</h3>
            <ul className="list-none p-0 m-0">
              <li className="flex items-start gap-[10px] mb-3 leading-[1.6]">
                <FaMapMarkerAlt className="text-[#ccc] text-[1rem] shrink-0 mt-1" />
                <span className="text-[#ccc]">
                  Chennai, Tamil Nadu<br />India 600053
                </span>
              </li>
              <li className="flex items-start gap-[10px] mb-3 leading-[1.6]">
                <a
                  href="mailto:info@adiion.com"
                  className="flex items-center gap-2 text-[#ccc] no-underline transition-colors duration-300 hover:text-white"
                >
                  <FaEnvelope className="text-[1rem] shrink-0" />
                  info@adiion.com
                </a>
              </li>
              <li className="flex items-start gap-[10px] mb-3 leading-[1.6]">
                <a
                  href="tel:+917029395817"
                  className="flex items-center gap-2 text-[#ccc] no-underline transition-colors duration-300 hover:text-white"
                >
                  <FaPhoneAlt className="text-[1rem] shrink-0" />
                  +91-7029395817
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333] pt-5 mt-10 text-center text-[0.9rem] text-[#888]">
          <p>© {new Date().getFullYear()} Adiion Digital Labs Private Limited | All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;