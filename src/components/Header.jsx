import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Handle scroll detection for dynamic navbar sizing
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.98,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 300, damping: 24 } 
    },
  };

  return (
    <>
      {/* BACKDROP OVERLAY FOR MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-[#0B0710]/80 backdrop-blur-md lg:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10 transition-all duration-300">
        <div className="mx-auto max-w-7xl">
          <motion.nav
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`relative flex items-center justify-between rounded-full border px-5 transition-all duration-500 sm:px-7 ${
              scrolled
                ? "h-[64px] border-[#C8A7E9]/35 bg-[#140D20]/95 shadow-[0_10px_35px_rgba(11,7,16,0.7)] backdrop-blur-2xl"
                : "h-[76px] border-[#C8A7E9]/20 bg-[#140D20]/80 shadow-[0_10px_50px_rgba(11,7,16,0.45)] backdrop-blur-xl"
            }`}
          >
            {/* LOGO AREA */}
            <Link
              to="/"
              className="group flex items-center gap-3 select-none"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A7E9]/40 bg-[#6D3FA9]/20 shadow-inner transition-all duration-300 group-hover:border-[#C8A7E9] group-hover:bg-[#6D3FA9]/40 group-hover:shadow-[0_0_15px_rgba(200,167,233,0.3)]"
              >
                <span className="font-serif text-2xl font-bold italic text-[#C8A7E9]">
                  B
                </span>
              </motion.div>

              <div className="hidden sm:block">
                <h1 className="font-serif text-lg tracking-[0.28em] text-[#F8F6F3] leading-none mb-1 group-hover:text-white transition-colors">
                  BITNA
                </h1>
                <p className="text-[8px] tracking-[0.35em] text-[#C8A7E9] leading-none">
                  HOSPITALITY
                </p>
              </div>
            </Link>

            {/* DESKTOP LINKS WITH SLIDING INDICATOR */}
            <div className="hidden items-center gap-2 lg:flex">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="relative px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 select-none"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-300 ${
                        isActive
                          ? "text-[#C8A7E9] font-bold"
                          : "text-[#E8DDF2]/70 hover:text-[#F8F6F3]"
                      }`}
                    >
                      {link.name}
                    </span>

                    {/* Sliding Layout Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-[#6D3FA9]/25 border border-[#C8A7E9]/30"
                      />
                    )}
                  </NavLink>
                );
              })}
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-3 lg:flex">
              <motion.a
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E9]/20 bg-[#140D20]/50 text-[#E8DDF2]/70 transition-all duration-300 hover:border-[#C8A7E9] hover:bg-[#6D3FA9]/30 hover:text-[#C8A7E9] hover:shadow-[0_0_15px_rgba(109,63,169,0.4)]"
                aria-label="Instagram Profile"
              >
                <FaInstagram size={16} />
              </motion.a>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/book"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#6D3FA9] to-[#8852CD] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F8F6F3] shadow-md transition-all duration-300 hover:from-[#C8A7E9] hover:to-[#E8DDF2] hover:text-[#140D20] hover:shadow-[0_0_25px_rgba(200,167,233,0.5)]"
                >
                  <span>Book Now</span>
                  <motion.div
                    animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowUpRight size={14} className="transition-transform group-hover:rotate-45" />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* MOBILE ACTION TRIGGER */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E9]/30 bg-[#6D3FA9]/10 text-[#E8DDF2] transition-colors hover:bg-[#6D3FA9]/30 lg:hidden"
              aria-label="Toggle Navigation Tray"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={20} className="text-[#C8A7E9]" /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </motion.nav>

          {/* TRANSITIONING MOBILE TRAY */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-3 overflow-hidden rounded-3xl border border-[#C8A7E9]/25 bg-[#140D20]/95 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-2xl lg:hidden"
              >
                <div className="flex flex-col gap-1.5">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.div key={link.name} variants={itemVariants}>
                        <NavLink
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-2xl px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                            isActive
                              ? "bg-gradient-to-r from-[#6D3FA9]/40 to-[#6D3FA9]/10 border border-[#C8A7E9]/30 text-[#C8A7E9] pl-6 shadow-sm"
                              : "text-[#E8DDF2]/70 hover:bg-[#6D3FA9]/20 hover:text-[#F8F6F3] hover:pl-6"
                          }`}
                        >
                          <span>{link.name}</span>
                          {isActive && <Sparkles size={14} className="text-[#C8A7E9] animate-pulse" />}
                        </NavLink>
                      </motion.div>
                    );
                  })}

                  {/* Contextual Social & CTA Tray */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-3 pt-4 border-t border-[#C8A7E9]/15 flex gap-2.5 items-center"
                  >
                    <Link
                      to="/book"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6D3FA9] to-[#8852CD] px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-[#F8F6F3] shadow-lg transition-all hover:from-[#C8A7E9] hover:to-[#E8DDF2] hover:text-[#140D20]"
                    >
                      <Sparkles size={16} className="text-[#C8A7E9] group-hover:text-[#140D20] transition-colors" />
                      <span>Book Services</span>
                    </Link>

                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C8A7E9]/25 bg-[#6D3FA9]/10 text-[#E8DDF2]/80 transition-all hover:border-[#C8A7E9] hover:bg-[#6D3FA9]/30 hover:text-[#C8A7E9]"
                      aria-label="Instagram Profile"
                    >
                      <FaInstagram size={20} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* ANCHORED CONTAINER ELEMENT FOR SPACING */}
      <div className="pt-[108px]" />
    </>
  );
};

export default Header;