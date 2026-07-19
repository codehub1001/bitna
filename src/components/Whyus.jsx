import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  ShieldCheck,
  Gem,
  Star,
} from "lucide-react";

const values = [
  {
    id: "01",
    title: "Professional",
    description:
      "Our team is committed to delivering a polished and professional experience from the first interaction to the final moment of your event.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Elegant",
    description:
      "We understand the importance of presentation. Our staff bring confidence, poise and a refined presence to every occasion.",
    icon: Gem,
  },
  {
    id: "03",
    title: "Reliable",
    description:
      "You can count on us to show up prepared, attentive and ready to contribute to the smooth running of your event.",
    icon: Check,
  },
  {
    id: "04",
    title: "Excellent",
    description:
      "We go beyond simply providing staff. We strive to create exceptional experiences that leave a lasting impression.",
    icon: Star,
  },
];

const Whyus = () => {
  const [activeValue, setActiveValue] = useState(values[0]);

  const ActiveIcon = activeValue.icon;

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#140D20] px-6 py-28 sm:py-36 lg:px-10"
    >
      {/* BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D3FA9]/10 blur-[150px]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#C8A7E8]/10"
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-28 top-32 h-[350px] w-[350px] rounded-full border border-[#C8A7E8]/10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <Sparkles
                size={15}
                className="text-[#C8A7E8]"
              />

              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#C8A7E8]">
                Why Choose BITNA
              </span>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#E8DDF2]/50">
              Because your event deserves more than just staffing. It deserves
              people who understand the importance of every detail.
            </p>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-5xl leading-[0.95] text-[#F8F6F3] sm:text-6xl lg:text-8xl"
          >
            More than staff.
            <span className="block italic text-[#C8A7E8]">
              We create experiences.
            </span>
          </motion.h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-[#C8A7E8]/15"
          >
            {/* IMAGE */}
            <motion.img
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="BITNA hospitality team"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0710] via-[#140D20]/30 to-transparent" />

            {/* PURPLE COLOR OVERLAY */}
            <div className="absolute inset-0 bg-[#6D3FA9]/10 mix-blend-overlay" />

            {/* IMAGE TEXT */}
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
                The BITNA Standard
              </p>

              <h3 className="mt-3 max-w-sm font-serif text-4xl leading-tight text-[#F8F6F3]">
                Excellence is not an option.
                <span className="italic text-[#C8A7E8]">
                  {" "}It is our standard.
                </span>
              </h3>
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-6 top-6 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-[#C8A7E8]/30 bg-[#140D20]/70 text-center backdrop-blur-xl"
            >
              <Sparkles
                size={16}
                className="mb-2 text-[#C8A7E8]"
              />

              <span className="text-[8px] uppercase tracking-[0.2em] text-[#E8DDF2]/70">
                Since
              </span>

              <span className="font-serif text-lg text-[#F8F6F3]">
                BITNA
              </span>
            </motion.div>
          </motion.div>

          {/* VALUES SIDE */}
          <div>

            {/* VALUE SELECTORS */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {values.map((value) => {
                const isActive = activeValue.id === value.id;

                return (
                  <motion.button
                    key={value.id}
                    onClick={() => setActiveValue(value)}
                    whileTap={{ scale: 0.96 }}
                    className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-[#C8A7E8]/50 bg-[#6D3FA9]/30"
                        : "border-[#C8A7E8]/10 bg-[#0B0710]/30 hover:border-[#C8A7E8]/30"
                    }`}
                  >
                    <span
                      className={`text-[9px] tracking-[0.2em] ${
                        isActive
                          ? "text-[#C8A7E8]"
                          : "text-[#E8DDF2]/30"
                      }`}
                    >
                      {value.id}
                    </span>

                    <p
                      className={`mt-3 font-serif text-lg ${
                        isActive
                          ? "text-[#F8F6F3]"
                          : "text-[#E8DDF2]/60"
                      }`}
                    >
                      {value.title}
                    </p>

                    {isActive && (
                      <motion.div
                        layoutId="activeValue"
                        className="absolute bottom-0 left-0 h-[2px] w-full bg-[#C8A7E8]"
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* ACTIVE VALUE CONTENT */}
            <div className="mt-8 min-h-[260px] rounded-[2rem] border border-[#C8A7E8]/15 bg-[#0B0710]/40 p-8 sm:p-10">

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue.id}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D3FA9]/30 text-[#C8A7E8]">
                      <ActiveIcon
                        size={25}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="font-serif text-6xl italic text-[#C8A7E8]/15">
                      {activeValue.id}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-4xl text-[#F8F6F3]">
                    {activeValue.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-8 text-[#E8DDF2]/55">
                    {activeValue.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
              className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-sm text-sm leading-7 text-[#E8DDF2]/45">
                From intimate celebrations to large-scale events, we bring the
                people and professionalism needed to make every occasion shine.
              </p>

              <Link
                to="/book"
                className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#6D3FA9] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F8F6F3] transition-all duration-300 hover:bg-[#C8A7E8] hover:text-[#140D20] hover:shadow-[0_0_35px_rgba(109,63,169,0.4)]"
              >
                Work With Us

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;