import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Sparkles,
  Star,
} from "lucide-react";

const Banner = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-108px)] overflow-hidden bg-[#0B0710]">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="BITNA Hospitality event"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* DARK PURPLE OVERLAY */}
      <div className="absolute inset-0 bg-[#0B0710]/75" />

      {/* PURPLE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0710] via-[#140D20]/80 to-[#6D3FA9]/20" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0710] to-transparent" />

      {/* DECORATIVE PURPLE GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#6D3FA9]/30 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C8A7E8]/20 blur-[130px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-108px)] max-w-7xl items-center px-6 py-20 lg:px-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="flex items-center gap-1">
                <Sparkles
                  size={14}
                  className="text-[#C8A7E8]"
                />

                <Sparkles
                  size={9}
                  className="text-[#C8A7E8]/60"
                />
              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C8A7E8]">
                Premium Hospitality & Staffing
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-5xl leading-[0.95] text-[#F8F6F3] sm:text-7xl lg:text-[6.5rem]"
            >
              Where

              <span className="block italic text-[#C8A7E8]">
                Excellence
              </span>

              <span className="block">
                Shines.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="mt-8 max-w-xl text-base leading-8 text-[#E8DDF2]/75 sm:text-lg"
            >
              Premium event staffing designed to bring elegance,
              professionalism, and unforgettable service to every
              occasion.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.9,
                duration: 0.7,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >

              {/* PRIMARY CTA */}
              <Link
                to="/book"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#6D3FA9] px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F6F3] transition-all duration-300 hover:bg-[#C8A7E8] hover:text-[#140D20] hover:shadow-[0_0_35px_rgba(109,63,169,0.5)]"
              >
                Book Our Services

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>

              {/* SECONDARY CTA */}
              <button
                onClick={scrollToServices}
                className="group flex items-center justify-center gap-3 rounded-full border border-[#C8A7E8]/40 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#E8DDF2] transition-all duration-300 hover:border-[#C8A7E8] hover:bg-[#C8A7E8]/10"
              >
                Explore Services

                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </motion.div>

            {/* TRUST DETAILS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="mt-12 flex flex-wrap items-center gap-6 border-t border-[#E8DDF2]/15 pt-6"
            >
              <div>
                <p className="font-serif text-2xl text-[#F8F6F3]">
                  100%
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/60">
                  Professional
                </p>
              </div>

              <div className="h-10 w-px bg-[#E8DDF2]/20" />

              <div>
                <p className="font-serif text-2xl text-[#F8F6F3]">
                  24/7
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/60">
                  Support
                </p>
              </div>

              <div className="h-10 w-px bg-[#E8DDF2]/20" />

              <div>
                <p className="font-serif text-2xl text-[#F8F6F3]">
                  Lagos
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/60">
                  Nigeria
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT FLOATING CARDS */}
          <div className="relative hidden h-[500px] lg:block">

            {/* MAIN GLASS CARD */}
            <motion.div
              initial={{
                opacity: 0,
                x: 80,
                rotate: 4,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 4,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                rotate: 1,
                scale: 1.03,
              }}
              className="absolute right-10 top-10 h-[390px] w-[280px] overflow-hidden rounded-[2rem] border border-[#E8DDF2]/20 bg-[#140D20]/40 p-3 shadow-2xl backdrop-blur-xl"
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem]">

                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Elegant event"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0710] via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#C8A7E8]">
                    The BITNA Experience
                  </p>

                  <p className="mt-2 font-serif text-2xl text-[#F8F6F3]">
                    Elegance
                    <br />
                    in every detail.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TOP FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 z-20 rounded-2xl border border-[#C8A7E8]/25 bg-[#140D20]/80 px-5 py-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D3FA9]/30">
                  <Star
                    size={17}
                    className="fill-[#C8A7E8] text-[#C8A7E8]"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold text-[#F8F6F3]">
                    Exceptional Service
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-wider text-[#E8DDF2]/50">
                    Every time
                  </p>
                </div>
              </div>
            </motion.div>

            {/* BOTTOM FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-0 z-20 rounded-2xl border border-[#C8A7E8]/25 bg-[#140D20]/85 px-5 py-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#C8A7E8]">
                Our Promise
              </p>

              <p className="mt-2 font-serif text-xl text-[#F8F6F3]">
                Professional.
                <br />
                Elegant. Reliable.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[8px] uppercase tracking-[0.35em] text-[#E8DDF2]/50">
          Scroll to explore
        </span>

        <ChevronDown
          size={16}
          className="text-[#C8A7E8]"
        />
      </motion.div>
    </section>
  );
};

export default Banner;