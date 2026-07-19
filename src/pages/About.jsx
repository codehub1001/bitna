import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Crown,
  Heart,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Crown,
      number: "01",
      title: "Excellence",
      description:
        "We hold ourselves to a high standard because the details matter. From presentation to professionalism, we aim to deliver an experience that reflects the importance of your event.",
    },
    {
      icon: Users,
      number: "02",
      title: "People First",
      description:
        "Our people are at the heart of what we do. We carefully consider the energy, professionalism, and presence required to create an exceptional experience for every guest.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Reliability",
      description:
        "You should be able to focus on your event, not worry about your event staff. We show up prepared, professional, and ready to deliver.",
    },
    {
      icon: Heart,
      number: "04",
      title: "Care",
      description:
        "Every event is different. We take the time to understand your vision, your needs, and the experience you want your guests to have.",
    },
  ];

  const eventTypes = [
    "Weddings",
    "Corporate Events",
    "Private Celebrations",
    "Brand Activations",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0710] text-[#F8F6F3]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative px-6 pb-28 pt-32 sm:pt-40 lg:px-10">

        {/* Background ambient glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-[#6D3FA9]/20 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.2, 0.08],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8A7E8]/10 blur-[150px]"
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-3"
          >
            <Sparkles
              size={15}
              className="text-[#C8A7E8]"
            />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A7E8]">
              About BITNA
            </span>
          </motion.div>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl font-serif text-6xl leading-[0.9] sm:text-7xl lg:text-[8.5rem]"
          >
            We create the
            <span className="block italic text-[#C8A7E8]">
              experience behind
            </span>
            the occasion.
          </motion.h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="max-w-2xl text-base leading-8 text-[#E8DDF2]/60 sm:text-lg"
            >
              BITNA Hospitality & Staffing provides professional, elegant, and
              reliable event staffing for occasions that deserve to be
              remembered.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="flex items-center gap-4 lg:justify-end"
            >
              <div className="h-px w-16 bg-[#C8A7E8]/40" />

              <p className="max-w-[220px] text-xs uppercase leading-6 tracking-[0.2em] text-[#E8DDF2]/40">
                Professional.
                <br />
                Elegant.
                <br />
                Reliable.
                <br />
                Excellent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION / STORY
      ====================================================== */}

      <section className="relative px-6 pb-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]"
          >

            {/* Decorative circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-[#C8A7E8]/15"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-10 -top-10 h-[280px] w-[280px] rounded-full border border-[#C8A7E8]/10"
            />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
                  The BITNA Philosophy
                </p>

                <h2 className="mt-6 max-w-md font-serif text-4xl leading-tight sm:text-5xl">
                  Great events are felt before they are remembered.
                </h2>
              </div>

              <div className="mt-16">
                <div className="mb-5 flex items-center gap-3">
                  <Star
                    size={17}
                    className="fill-[#C8A7E8] text-[#C8A7E8]"
                  />

                  <span className="text-xs uppercase tracking-[0.2em] text-[#E8DDF2]/50">
                    Where Excellence Shines
                  </span>
                </div>

                <div className="h-px w-full bg-[#C8A7E8]/15" />

                <p className="mt-5 max-w-sm text-sm leading-7 text-[#E8DDF2]/45">
                  The atmosphere. The welcome. The service. The attention to
                  detail. We believe every part of an event contributes to how
                  people experience it.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center rounded-[2rem] border border-[#C8A7E8]/15 bg-[#F8F6F3] p-8 text-[#140D20] sm:p-12 lg:p-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#6D3FA9]">
              Who We Are
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
              More than staffing.
              <span className="block italic text-[#6D3FA9]">
                We are part of the experience.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-8 text-[#140D20]/60">
              <p>
                BITNA Hospitality & Staffing was created with a simple belief:
                the right people can transform the experience of an event.
              </p>

              <p>
                From the moment guests arrive to the final moments of a
                celebration, professional event staff play an important role
                in creating an atmosphere that feels organized, welcoming, and
                exceptional.
              </p>

              <p>
                That is why we provide carefully selected and professionally
                presented staff for weddings, corporate events, private
                celebrations, and brand activations.
              </p>

              <p>
                Whether you need a warm welcome at the entrance, attentive
                service throughout your event, support for a bride, professional
                security, or someone to help coordinate the moving parts,
                BITNA is here to help.
              </p>
            </div>

            <Link
              to="/book"
              className="group mt-10 flex w-fit items-center gap-3 rounded-full bg-[#6D3FA9] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#140D20]"
            >
              Work With Us

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES WE SUPPORT
      ====================================================== */}

      <section className="border-y border-[#C8A7E8]/10 bg-[#140D20] px-6 py-28 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
                Our World
              </p>

              <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
                Built for moments
                <span className="block italic text-[#C8A7E8]">
                  that matter.
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="max-w-xl text-sm leading-8 text-[#E8DDF2]/50"
            >
              Every event has its own energy, audience, and expectations. Our
              role is to understand what your occasion requires and provide
              people who can contribute to the experience in the right way.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-[#C8A7E8]/15 bg-[#0B0710]/50 p-7 transition-all duration-300 hover:border-[#C8A7E8]/40"
              >
                <span className="text-xs text-[#C8A7E8]">
                  0{index + 1}
                </span>

                <h3 className="mt-16 font-serif text-2xl text-[#F8F6F3]">
                  {event}
                </h3>

                <div className="mt-5 h-px w-8 bg-[#C8A7E8]/40 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}

      <section className="px-6 py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
              What We Stand For
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-tight sm:text-6xl">
              The standard behind
              <span className="block italic text-[#C8A7E8]">
                everything we do.
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-8 transition-all duration-300 hover:border-[#C8A7E8]/40 sm:p-10"
                >
                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6D3FA9]/20 text-[#C8A7E8] transition-all duration-300 group-hover:bg-[#6D3FA9] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="font-serif text-3xl text-[#C8A7E8]/30">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-10 font-serif text-3xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#E8DDF2]/50">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR SERVICES
      ====================================================== */}

      <section className="px-6 pb-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-[#6D3FA9] p-8 sm:p-12"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#F8F6F3]/60">
              What We Provide
            </p>

            <h2 className="mt-6 max-w-lg font-serif text-5xl leading-tight text-[#F8F6F3]">
              The right people.
              <span className="block italic text-[#E8DDF2]">
                The right presence.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#F8F6F3]/65">
              Our services are designed to support the different layers of
              your event, allowing you to focus on enjoying the occasion while
              our team helps take care of the experience.
            </p>

            <Link
              to="/book"
              className="group mt-10 flex w-fit items-center gap-3 rounded-full bg-[#F8F6F3] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#140D20] transition-all duration-300 hover:bg-[#C8A7E8]"
            >
              Explore Our Services

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-8 sm:p-12"
          >
            <div className="space-y-5">

              {[
                "Professional Ushers",
                "Waiters & Waitresses",
                "Bottle Girls",
                "Bridal Assistants",
                "Bouncers & Event Security",
                "Event Coordinators",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="flex items-center gap-4 border-b border-[#C8A7E8]/10 pb-5 last:border-0"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9]/20 text-[#C8A7E8]">
                    <Check size={14} />
                  </div>

                  <span className="text-sm text-[#F8F6F3]">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="border-t border-[#C8A7E8]/10 bg-[#140D20] px-6 py-32 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6D3FA9]/20 text-[#C8A7E8]">
            <CheckCircle2 size={25} />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
            Your event deserves the BITNA standard
          </p>

          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">
            Let&apos;s make your next event
            <span className="block italic text-[#C8A7E8]">
              unforgettable.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#E8DDF2]/50">
            Tell us about your event, your vision, and what you need. We would
            love to be part of making it exceptional.
          </p>

          <Link
            to="/book"
            className="group mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-[#F8F6F3] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#140D20] transition-all duration-300 hover:bg-[#C8A7E8]"
          >
            Book Our Services

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;