import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/2347073978882?text=Hello%20BITNA%20Hospitality%20%26%20Staffing%2C%20I'm%20interested%20in%20your%20services.";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Mobile menu staggering configurations
  const menuVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut",大众: 0.1, staggerChildren: 0.05 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.99,
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <nav className="relative flex h-[76px] items-center justify-between rounded-full border border-[#C8A7E9]/20 bg-[#140D20]/85 px-5 shadow-[0_10px_50px_rgba(11,7,16,0.45)] backdrop-blur-xl sm:px-7">

            {/* LOGO AREA */}
            <Link
              to="/"
              className="group flex items-center gap-3 select-none"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A7E9]/40 bg-[#6D3FA9]/20 transition-all duration-300 group-hover:border-[#C8A7E9] group-hover:bg-[#6D3FA9]/40">
                <span className="font-serif text-2xl font-bold italic text-[#C8A7E9]">
                  B
                </span>
              </div>

              <div className="hidden sm:block">
                <h1 className="font-serif text-lg tracking-[0.28em] text-[#F8F6F3] leading-none mb-1">
                  BITNA
                </h1>
                <p className="text-[8px] tracking-[0.35em] text-[#C8A7E9] leading-none">
                  HOSPITALITY
                </p>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-8 lg:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `group relative text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive
                        ? "text-[#C8A7E9]"
                        : "text-[#E8DDF2]/70 hover:text-[#F8F6F3]"
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-[#C8A7E9] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E9]/20 text-[#E8DDF2]/70 transition-all duration-300 hover:border-[#C8A7E9] hover:bg-[#6D3FA9]/30 hover:text-[#C8A7E9]"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={16} />
              </a>

              <Link
                to="/book"
                className="group flex items-center gap-2 rounded-full bg-[#6D3FA9] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F8F6F3] transition-all duration-300 hover:bg-[#C8A7E9] hover:text-[#140D20] hover:shadow-[0_0_20px_rgba(109,63,169,0.4)]"
              >
                <span>Book Now</span>
                <motion.div
                  animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  <ArrowUpRight size={14} />
                </motion.div>
              </Link>
            </div>

            {/* ACTION TRIGGERS FOR MOBILE CONTAINER */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E9]/20 text-[#E8DDF2] transition-colors hover:bg-[#6D3FA9]/30 lg:hidden"
              aria-label="Toggle Navigation Tray"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* TRANSITIONING MOBILE TRAY */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-3 overflow-hidden rounded-3xl border border-[#C8A7E9]/20 bg-[#140D20]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.div key={link.name} variants={itemVariants}>
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-2xl px-5 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                            isActive
                              ? "bg-[#6D3FA9]/30 text-[#C8A7E9]"
                              : "text-[#E8DDF2]/70 hover:bg-[#6D3FA9]/20 hover:text-[#F8F6F3]"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}

                  {/* Contextual Social Tray Added For Mobile Ergonomics */}
                  <motion.div variants={itemVariants} className="mt-4 pt-4 border-t border-[#C8A7E9]/10 flex gap-2 items-center">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#6D3FA9] px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8F6F3] transition-all hover:bg-[#C8A7E9] hover:text-[#140D20]"
                    >
                      <FaWhatsapp size={16} />
                      <span>Book Services</span>
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C8A7E9]/20 text-[#E8DDF2]/70"
                      aria-label="Instagram Profile"
                    >
                      <FaInstagram size={18} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* FIXED SPACER REPLACED WITH AN ANCHORED CONTAINER ELEMENT */}
      <div className="pt-[108px]" />
    </>
  );
};

export default Header;