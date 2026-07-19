import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#C8A7E8]/10 bg-[#0B0710] px-6 py-10 text-[#F8F6F3] lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* TOP ROW */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}
          <Link
            to="/"
            className="group w-fit"
          >
            <h2 className="font-serif text-3xl tracking-wide">
              BITNA
            </h2>

            <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#C8A7E8]">
              Hospitality & Staffing
            </p>
          </Link>

          {/* NAVIGATION */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#E8DDF2]/50">
            <Link
              to="/"
              className="transition-colors hover:text-[#C8A7E8]"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition-colors hover:text-[#C8A7E8]"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-[#C8A7E8]"
            >
              Contact
            </Link>

            <Link
              to="/book"
              className="transition-colors hover:text-[#C8A7E8]"
            >
              Book Now
            </Link>
          </nav>

          {/* SOCIAL */}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="BITNA Instagram"
            className="group flex w-fit items-center gap-2 text-xs text-[#E8DDF2]/50 transition-colors hover:text-[#C8A7E8]"
          >
            <FaInstagram size={16} />

            <span>Instagram</span>

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-[#C8A7E8]/10" />

        {/* BOTTOM ROW */}
        <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.15em] text-[#E8DDF2]/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} BITNA Hospitality & Staffing
          </p>

          <p>
            Lagos, Nigeria
          </p>

          <p className="text-[#C8A7E8]/60">
            Professional. Elegant. Reliable. Excellent.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;