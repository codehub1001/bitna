import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "BITNA brought an incredible level of professionalism and elegance to our event. The team was warm, attentive and made everything feel seamless from start to finish.",
    name: "Amara",
    role: "Private Celebration",
    event: "Private Event",
    initials: "AM",
  },
  {
    id: 2,
    quote:
      "The staff were absolutely amazing. They were professional, well-presented and incredibly helpful throughout the entire event. We could focus on enjoying the moment.",
    name: "Chidinma",
    role: "Bride",
    event: "Wedding Celebration",
    initials: "CH",
  },
  {
    id: 3,
    quote:
      "What stood out most was the attention to detail. The team understood exactly what we needed and delivered an experience that our guests genuinely appreciated.",
    name: "David",
    role: "Event Host",
    event: "Corporate Event",
    initials: "DA",
  },
];

const trustItems = ["Professional", "Elegant", "Reliable", "Excellent", "Bespoke", "Attentive"];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused, activeIndex]);

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 50 : -50,
      filter: "blur(4px)"
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)"
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -50 : 50,
      filter: "blur(4px)"
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0B0710] px-4 py-28 sm:px-6 sm:py-36 lg:px-10"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D3FA9]/15 blur-[160px]"
        />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-[#C8A7E8]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* HEADER BLOCK */}
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end border-b border-[#C8A7E8]/10 pb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <Sparkles size={14} className="text-[#C8A7E8]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C8A7E8]">
                Client Experiences
              </span>
            </div>
            <p className="max-w-xs text-xs font-medium leading-relaxed uppercase tracking-wider text-[#E8DDF2]/40">
              The true measure of hospitality is the standard of moments we leave behind.
            </p>
          </div>

          <h2 className="font-serif text-4xl font-normal leading-[1.05] text-[#F8F6F3] sm:text-6xl lg:text-7xl tracking-tight">
            Experiences worth
            <span className="block italic text-[#C8A7E8] mt-1">talking about.</span>
          </h2>
        </div>

        {/* MAIN DISPLAY CONTAINER */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mt-16 overflow-hidden rounded-[2rem] border border-[#C8A7E8]/10 bg-[#140D20]/40 backdrop-blur-md shadow-2xl"
        >
          <div className="grid min-h-[480px] lg:grid-cols-[0.7fr_1.3fr]">
            
            {/* LEFT PROFILE & PANEL */}
            <div className="relative flex flex-col justify-between border-b border-[#C8A7E8]/10 p-8 sm:p-12 lg:border-b-0 lg:border-r bg-[#140D20]/20">
              
              {/* Giant Graphic Accent */}
              <div className="absolute -right-6 -top-6 text-[#6D3FA9]/10 pointer-events-none select-none">
                <Quote size={160} strokeWidth={1} />
              </div>

              <div className="relative space-y-6">
                <span className="inline-block rounded-full bg-[#6D3FA9]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#C8A7E8] border border-[#6D3FA9]/20">
                  Verified Booking
                </span>
                
                <div className="flex items-center gap-1 pt-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[#C8A7E8] text-[#C8A7E8]" />
                  ))}
                </div>
              </div>

              {/* Active Identity Card */}
              <div className="relative mt-12 flex items-center gap-4 bg-[#140D20]/60 p-4 rounded-2xl border border-[#C8A7E8]/5 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.initials}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8A7E8]/20 bg-[#6D3FA9]/20 font-serif text-sm font-semibold text-[#C8A7E8]"
                  >
                    {activeTestimonial.initials}
                  </motion.div>
                </AnimatePresence>

                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial.name}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="font-serif text-lg font-medium text-[#F8F6F3] tracking-wide truncate">
                        {activeTestimonial.name}
                      </p>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-[#C8A7E8]/60 mt-0.5 truncate">
                        {activeTestimonial.role}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* RIGHT SLIDE INTERACTIVE STREAM */}
            <div className="relative flex flex-col justify-between p-8 sm:p-12 lg:p-14 min-w-0">
              <div className="relative flex-1 flex flex-col justify-center min-h-[220px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeTestimonial.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <span className="font-serif text-6xl leading-none text-[#C8A7E8]/20 select-none block -mb-4">
                      “
                    </span>
                    <blockquote className="font-serif text-2xl font-light leading-relaxed text-[#F8F6F3] sm:text-3xl lg:text-4xl tracking-wide">
                      {activeTestimonial.quote}
                    </blockquote>
                    
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-6 bg-[#C8A7E8]/40" />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8DDF2]/40">
                        {activeTestimonial.event}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* COMPONENT INTERACTION CONTROLS */}
              <div className="mt-8 flex items-center justify-between border-t border-[#E8DDF2]/10 pt-6">
                
                {/* Pagination Indicators */}
                <div className="flex items-center gap-2.5">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > activeIndex ? 1 : -1);
                        setActiveIndex(index);
                      }}
                      className="group relative py-2"
                      aria-label={`Jump to review slide ${index + 1}`}
                    >
                      <span
                        className={`block h-1 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-8 bg-[#C8A7E8]"
                            : "w-3 bg-[#E8DDF2]/20 group-hover:bg-[#E8DDF2]/40"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Arrow Controllers */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={previousTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E8]/10 text-[#E8DDF2]/60 transition-all hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20 hover:text-[#C8A7E8] active:scale-95"
                    aria-label="Previous Review"
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A7E8]/10 text-[#E8DDF2]/60 transition-all hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20 hover:text-[#C8A7E8] active:scale-95"
                    aria-label="Next Review"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM INFINITE ROLLING TICKER STRIP */}
        <div className="mt-12 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div className="flex w-max gap-4 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-full border border-[#C8A7E8]/10 bg-[#140D20]/30 px-6 py-3 shrink-0"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#C8A7E8]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8DDF2]/40">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Tailwind Animation Extension Hook configuration for Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;