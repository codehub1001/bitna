import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "ushers",
    title: "Professional Ushers",
    description: "Elegant and welcoming guest management.",
  },
  {
    id: "waiters",
    title: "Waiters & Waitresses",
    description: "Professional hospitality and table service.",
  },
  {
    id: "bottle-girls",
    title: "Bottle Girls",
    description: "Stylish and energetic event service.",
  },
  {
    id: "bridal-assistants",
    title: "Bridal Assistants",
    description: "Dedicated support for the bride and bridal party.",
  },
  {
    id: "security",
    title: "Bouncers & Event Security",
    description: "Professional security and crowd management.",
  },
  {
    id: "coordinators",
    title: "Event Coordinators",
    description: "Seamless planning and event coordination.",
  },
];

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Celebration",
  "Brand Activation",
  "Birthday Party",
  "Other",
];

const budgetRanges = [
  "₦100,000 - ₦250,000",
  "₦250,000 - ₦500,000",
  "₦500,000 - ₦1,000,000",
  "₦1,000,000+",
  "I'm not sure yet",
];

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    location: "",
    budget: "",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const toggleService = (service) => {
    setSelectedServices((previous) =>
      previous.includes(service)
        ? previous.filter((item) => item !== service)
        : [...previous, service]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage = `
Hello BITNA Hospitality & Staffing,

I would like to make a booking enquiry.

CLIENT DETAILS
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

EVENT DETAILS
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}
Expected Guests: ${formData.guestCount}
Event Location: ${formData.location}

SERVICES REQUIRED
${selectedServices.map((service) => `• ${service}`).join("\n")}

BUDGET RANGE
${formData.budget || "Not specified"}

ADDITIONAL DETAILS
${formData.message || "No additional details provided."}
    `;

    const whatsappUrl = `https://wa.me/2347073978882?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      window.open(whatsappUrl, "_blank");

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guestCount: "",
        location: "",
        budget: "",
        message: "",
      });

      setSelectedServices([]);
    }, 1000);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0710] text-[#F8F6F3]">

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-32 sm:pt-40 lg:px-10">

        {/* BACKGROUND GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-[#6D3FA9]/20 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            opacity: [0.08, 0.2, 0.08],
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
              Book Our Services
            </span>
          </motion.div>

          {/* HEADING */}
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
            Your event.
            <span className="block italic text-[#C8A7E8]">
              Our expertise.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="mt-8 max-w-2xl text-base leading-8 text-[#E8DDF2]/60 sm:text-lg"
          >
            Tell us about your event and the experience you want to create.
            Our team will review your enquiry and connect with you to discuss
            the next steps.
          </motion.p>
        </div>
      </section>

      {/* BOOKING AREA */}
      <section className="relative px-6 pb-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-fit rounded-[2rem] border border-[#C8A7E8]/15 bg-[#140D20]/70 p-8 sm:p-10 lg:sticky lg:top-28"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
              The BITNA Experience
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight">
              Every detail deserves attention.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#E8DDF2]/50">
              From the first conversation to the final guest departure, our
              goal is to help create an event that feels effortless, polished
              and memorable.
            </p>

            {/* PROCESS */}
            <div className="mt-10 space-y-7">

              {[
                {
                  number: "01",
                  title: "Tell us about your event",
                  text: "Share your event details and the services you need.",
                },
                {
                  number: "02",
                  title: "We review your request",
                  text: "Our team will look through your enquiry carefully.",
                },
                {
                  number: "03",
                  title: "Let's create something exceptional",
                  text: "We connect with you to discuss availability and details.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="flex gap-4"
                >
                  <span className="font-serif text-xl text-[#C8A7E8]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-medium text-[#F8F6F3]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-[#E8DDF2]/40">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* WHATSAPP NOTE */}
            <div className="mt-10 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/50 p-5">
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C8A7E8]"
                />

                <p className="text-xs leading-6 text-[#E8DDF2]/50">
                  After submitting this form, your enquiry will be prepared
                  and sent to BITNA through WhatsApp for a faster response.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[2rem] border border-[#C8A7E8]/15 bg-[#F8F6F3] p-6 text-[#140D20] sm:p-10 lg:p-12"
          >

            {/* FORM HEADER */}
            <div className="mb-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#6D3FA9]">
                Event Enquiry
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                Tell us about your event.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#140D20]/55">
                The more details you provide, the better we can understand how
                to support your event.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -15, height: 0 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                    height: 0,
                  }}
                  className="mb-8 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0"
                  />

                  <div>
                    <p className="font-semibold">
                      Enquiry prepared successfully.
                    </p>

                    <p className="mt-1 text-sm">
                      WhatsApp has been opened so you can continue your
                      conversation with BITNA.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form
              onSubmit={handleSubmit}
              className="space-y-10"
            >

              {/* SECTION 1 */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">
                    01
                  </span>

                  <h3 className="font-serif text-2xl">
                    Your details
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234..."
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Event Location
                    </label>

                    <input
                      id="location"
                      name="location"
                      type="text"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Lekki, Lagos"
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">
                    02
                  </span>

                  <h3 className="font-serif text-2xl">
                    Event details
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">

                  {/* EVENT TYPE */}
                  <div className="relative">
                    <label
                      htmlFor="eventType"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Event Type
                    </label>

                    <div className="relative">
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full appearance-none border-b border-[#140D20]/20 bg-transparent px-0 py-4 pr-8 text-sm outline-none transition-colors focus:border-[#6D3FA9]"
                      >
                        <option value="">
                          Select event type
                        </option>

                        {eventTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-0 top-4 text-[#140D20]/50"
                      />
                    </div>
                  </div>

                  {/* DATE */}
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Event Date
                    </label>

                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors focus:border-[#6D3FA9]"
                    />
                  </div>

                  {/* GUEST COUNT */}
                  <div>
                    <label
                      htmlFor="guestCount"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Expected Guests
                    </label>

                    <input
                      id="guestCount"
                      name="guestCount"
                      type="number"
                      min="1"
                      required
                      value={formData.guestCount}
                      onChange={handleChange}
                      placeholder="e.g. 150"
                      className="w-full border-b border-[#140D20]/20 bg-transparent px-0 py-4 text-sm outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                    />
                  </div>

                  {/* BUDGET */}
                  <div className="relative">
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em]"
                    >
                      Estimated Budget
                    </label>

                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full appearance-none border-b border-[#140D20]/20 bg-transparent px-0 py-4 pr-8 text-sm outline-none transition-colors focus:border-[#6D3FA9]"
                      >
                        <option value="">
                          Select budget range
                        </option>

                        {budgetRanges.map((budget) => (
                          <option
                            key={budget}
                            value={budget}
                          >
                            {budget}
                          </option>
                        ))}
                      </select>

                      <ChevronDown
                        size={17}
                        className="pointer-events-none absolute right-0 top-4 text-[#140D20]/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 3 SERVICES */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">
                    03
                  </span>

                  <div>
                    <h3 className="font-serif text-2xl">
                      What do you need?
                    </h3>

                    <p className="mt-1 text-xs text-[#140D20]/50">
                      Select all services that apply.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((service) => {
                    const isSelected = selectedServices.includes(
                      service.title
                    );

                    return (
                      <motion.button
                        key={service.id}
                        type="button"
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleService(service.title)}
                        className={`group relative flex items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-[#6D3FA9] bg-[#6D3FA9]/10"
                            : "border-[#140D20]/10 hover:border-[#6D3FA9]/40"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                            isSelected
                              ? "border-[#6D3FA9] bg-[#6D3FA9] text-white"
                              : "border-[#140D20]/20 text-transparent"
                          }`}
                        >
                          <Check size={13} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold">
                            {service.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-[#140D20]/50">
                            {service.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4 MESSAGE */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">
                    04
                  </span>

                  <h3 className="font-serif text-2xl">
                    Tell us more
                  </h3>
                </div>

                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, your vision, or anything else you would like us to know..."
                  className="w-full resize-none rounded-2xl border border-[#140D20]/10 bg-transparent p-5 text-sm leading-7 outline-none transition-colors placeholder:text-[#140D20]/30 focus:border-[#6D3FA9]"
                />
              </div>

              {/* SUBMIT */}
              <div className="border-t border-[#140D20]/10 pt-8">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-sm text-xs leading-6 text-[#140D20]/45">
                    Your enquiry will be sent to BITNA through WhatsApp so our
                    team can respond and discuss your event with you.
                  </p>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{
                      scale: isSubmitting ? 1 : 1.02,
                    }}
                    whileTap={{
                      scale: isSubmitting ? 1 : 0.97,
                    }}
                    className="group flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#6D3FA9] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#140D20] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Preparing...
                      </>
                    ) : (
                      <>
                        Send Enquiry

                        <Send
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-[#C8A7E8]/10 bg-[#140D20] px-6 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">
            Ready to get started?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
            Let&apos;s create something
            <span className="italic text-[#C8A7E8]">
              {" "}exceptional.
            </span>
          </h2>
        </motion.div>
      </section>
    </main>
  );
};

export default Book;