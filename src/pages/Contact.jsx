import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const whatsappLink =
    "https://wa.me/2347073978882?text=Hello%20BITNA%20Hospitality%20%26%20Staffing%2C%20I%27d%20like%20to%20make%20an%20enquiry.";

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0710] text-[#F8F6F3]">

      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 sm:pt-40 lg:px-10">

        {/* BACKGROUND GLOWS */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#6D3FA9]/20 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C8A7E8]/10 blur-[140px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* EYEBROW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <Sparkles
              size={15}
              className="text-[#C8A7E8]"
            />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A7E8]">
              Get In Touch
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl font-serif text-6xl leading-[0.92] sm:text-7xl lg:text-[8rem]"
          >
            Let&apos;s start a
            <span className="block italic text-[#C8A7E8]">
              conversation.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-[#E8DDF2]/60 sm:text-lg"
          >
            Have a question about our services, need more information, or
            simply want to connect with us? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="relative px-6 pb-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT - CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-8 sm:p-10 lg:p-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
              Contact BITNA
            </p>

            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight sm:text-5xl">
              We&apos;re here to help bring your vision to life.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#E8DDF2]/50">
              Whether you are planning a wedding, corporate event, private
              celebration, or brand activation, our team is ready to help you
              take the next step.
            </p>

            {/* CONTACT OPTIONS */}
            <div className="mt-12 space-y-4">

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/40 p-5 transition-all duration-300 hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6D3FA9]/25 text-[#C8A7E8]">
                  <MessageCircle size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/40">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm text-[#F8F6F3]">
                    Send us a message
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#E8DDF2]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C8A7E8]"
                />
              </a>

              {/* PHONE */}
              <a
                href="tel:+2347073978882"
                className="group flex items-center gap-4 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/40 p-5 transition-all duration-300 hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6D3FA9]/25 text-[#C8A7E8]">
                  <Phone size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/40">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-[#F8F6F3]">
                    +234 707 397 8882
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#E8DDF2]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C8A7E8]"
                />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:hello@bitnahospitality.com"
                className="group flex items-center gap-4 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/40 p-5 transition-all duration-300 hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6D3FA9]/25 text-[#C8A7E8]">
                  <Mail size={20} />
                </div>

                <div className="flex-1">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/40">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-[#F8F6F3]">
                    hello@bitnahospitality.com
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-[#E8DDF2]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C8A7E8]"
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/40 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6D3FA9]/25 text-[#C8A7E8]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/40">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-[#F8F6F3]">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - QUICK CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >

            {/* FEATURED WHATSAPP CARD */}
            <div className="relative flex min-h-[350px] flex-1 flex-col justify-between overflow-hidden rounded-[2rem] bg-[#6D3FA9] p-8 sm:p-10">

              {/* DECORATIVE CIRCLE */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#F8F6F3]/20"
              />

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#F8F6F3]/10"
              />

              <div className="relative z-10">
                <MessageCircle
                  size={35}
                  strokeWidth={1.5}
                  className="text-[#F8F6F3]"
                />

                <h2 className="mt-8 max-w-sm font-serif text-4xl leading-tight text-[#F8F6F3] sm:text-5xl">
                  Prefer a quick conversation?
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#F8F6F3]/70">
                  Chat directly with us on WhatsApp and let&apos;s discuss how
                  BITNA can help make your event exceptional.
                </p>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group relative z-10 mt-10 flex w-fit items-center gap-3 rounded-full bg-[#F8F6F3] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#140D20] transition-all duration-300 hover:bg-[#C8A7E8]"
              >
                Chat With Us

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* BOTTOM INFO GRID */}
            <div className="grid gap-6 sm:grid-cols-2">

              {/* LOCATION CARD */}
              <div className="rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-7">
                <MapPin
                  size={24}
                  className="text-[#C8A7E8]"
                />

                <p className="mt-8 text-[9px] uppercase tracking-[0.25em] text-[#E8DDF2]/40">
                  Based In
                </p>

                <p className="mt-2 font-serif text-2xl text-[#F8F6F3]">
                  Lagos
                </p>

                <p className="mt-1 text-sm text-[#E8DDF2]/50">
                  Nigeria
                </p>
              </div>

              {/* SOCIAL CARD */}
              <a
                href="#"
                className="group rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-7 transition-all duration-300 hover:border-[#C8A7E8]/40 hover:bg-[#6D3FA9]/20"
              >
                <FaInstagram
                  size={24}
                  className="text-[#C8A7E8]"
                />

                <p className="mt-8 text-[9px] uppercase tracking-[0.25em] text-[#E8DDF2]/40">
                  Follow Us
                </p>

                <div className="mt-2 flex items-center justify-between">
                  <p className="font-serif text-2xl text-[#F8F6F3]">
                    Instagram
                  </p>

                  <ArrowUpRight
                    size={17}
                    className="text-[#E8DDF2]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C8A7E8]"
                  />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL BRAND CTA */}
      <section className="border-t border-[#C8A7E8]/10 bg-[#140D20] px-6 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
            The BITNA Standard
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight text-[#F8F6F3] sm:text-6xl">
            Professional.
            <span className="italic text-[#C8A7E8]">
              {" "}Elegant.
            </span>
            <br />
            Reliable. Excellent.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#E8DDF2]/50">
            Whatever the occasion, we are ready to help make your event one to
            remember.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;