import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  UsersRound,
  Wine,
  HeartHandshake,
  ShieldCheck,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Professional Ushers",
    description:
      "Create a warm and welcoming first impression with polished professionals who help guests feel comfortable from the moment they arrive.",
    icon: UsersRound,
    tag: "Guest Experience",
  },
  {
    number: "02",
    title: "Waiters & Waitresses",
    description:
      "Professional hospitality staff dedicated to delivering smooth, attentive and exceptional service throughout your event.",
    icon: Sparkles,
    tag: "Hospitality",
  },
  {
    number: "03",
    title: "Bottle Girls",
    description:
      "Stylish and energetic hospitality professionals who add elegance, excitement and unforgettable energy to your celebration.",
    icon: Wine,
    tag: "Premium Events",
  },
  {
    number: "04",
    title: "Bridal Assistants",
    description:
      "Dedicated support to help brides feel comfortable, organized and cared for throughout their special day.",
    icon: HeartHandshake,
    tag: "Wedding Support",
  },
  {
    number: "05",
    title: "Bouncers & Event Security",
    description:
      "Professional personnel helping maintain a safe, secure and well-organized environment for you and your guests.",
    icon: ShieldCheck,
    tag: "Safety & Security",
  },
  {
    number: "06",
    title: "Event Coordinators",
    description:
      "Experienced professionals helping bring the important details of your event together with confidence and precision.",
    icon: ClipboardCheck,
    tag: "Event Management",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0B0710] px-6 py-28 sm:py-36 lg:px-10"
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-52 top-20 h-[500px] w-[500px] rounded-full bg-[#6D3FA9]/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-52 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8A7E8]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C8A7E8]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C8A7E8]">
                What We Do
              </span>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#E8DDF2]/50">
              Every detail matters. Every guest matters. Every event deserves
              exceptional service.
            </p>
          </motion.div>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-4xl font-serif text-5xl leading-[0.95] text-[#F8F6F3] sm:text-6xl lg:text-8xl">
              People who make
              <span className="block italic text-[#C8A7E8]">
                moments memorable.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-7 transition-all duration-500 hover:border-[#C8A7E8]/40 hover:bg-[#140D20]"
              >
                {/* HOVER GLOW */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#6D3FA9]/20 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

                {/* TOP ROW */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-serif text-4xl italic text-[#C8A7E8]/30 transition-colors duration-500 group-hover:text-[#C8A7E8]">
                    {service.number}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.1,
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8A7E8]/20 bg-[#6D3FA9]/10 text-[#C8A7E8] transition-colors duration-500 group-hover:bg-[#6D3FA9]/30"
                  >
                    <Icon size={21} strokeWidth={1.5} />
                  </motion.div>
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-16">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.25em] text-[#C8A7E8]/70">
                    {service.tag}
                  </p>

                  <h3 className="max-w-xs font-serif text-3xl leading-tight text-[#F8F6F3] transition-colors duration-300 group-hover:text-[#C8A7E8]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#E8DDF2]/55">
                    {service.description}
                  </p>
                </div>

                {/* BOTTOM ARROW */}
                <div className="absolute bottom-7 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8DDF2]/10 text-[#E8DDF2]/40 transition-all duration-500 group-hover:border-[#C8A7E8]/40 group-hover:bg-[#6D3FA9] group-hover:text-[#F8F6F3]">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* BOTTOM ACCENT */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C8A7E8] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/60 p-7 sm:p-10 md:flex-row md:items-center"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
              Planning something special?
            </p>

            <h3 className="mt-3 max-w-xl font-serif text-3xl text-[#F8F6F3] sm:text-4xl">
              Let&apos;s make your next event exceptional.
            </h3>
          </div>

          <Link
            to="/contact"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-[#6D3FA9] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F6F3] transition-all duration-300 hover:bg-[#C8A7E8] hover:text-[#140D20] hover:shadow-[0_0_35px_rgba(109,63,169,0.4)]"
          >
            Make an Enquiry

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;