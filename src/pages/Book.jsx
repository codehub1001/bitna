import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  { id: "ushers", title: "Professional Ushers", description: "Elegant and welcoming guest management." },
  { id: "waiters", title: "Waiters & Waitresses", description: "Professional hospitality and table service." },
  { id: "bottle-girls", title: "Bottle Girls", description: "Stylish and energetic event service." },
  { id: "bridal-assistants", title: "Bridal Assistants", description: "Dedicated support for the bride and bridal party." },
  { id: "security", title: "Bouncers & Event Security", description: "Professional security and crowd management." },
  { id: "coordinators", title: "Event Coordinators", description: "Seamless planning and event coordination." },
];

const eventTypes = ["Wedding", "Corporate Event", "Private Celebration", "Brand Activation", "Birthday Party", "Other"];

const budgetRanges = ["₦100,000 - ₦250,000", "₦250,000 - ₦500,000", "₦500,000 - ₦1,000,000", "₦1,000,000+", "I'm not sure yet"];

const Book = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  
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

  const todayStr = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return Boolean(formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.location.trim());
    }
    if (currentStep === 2) {
      return Boolean(formData.eventType && formData.eventDate && formData.guestCount && formData.budget);
    }
    if (currentStep === 3) {
      return selectedServices.length > 0;
    }
    if (currentStep === 4) {
      return true;
    }
    return true;
  };

  const nextStep = () => {
    if (isStepValid() && currentStep < 4) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!isStepValid()) return;

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

    const whatsappUrl = `https://wa.me/2347073978882?text=${encodeURIComponent(whatsappMessage)}`;

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
      setCurrentStep(1);
    }, 1000);
  };

  // Completely blocks the Enter key from doing ANYTHING inside inputs
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -45 : 45,
      opacity: 0,
    }),
  };

  return (
    <main className="min-h-screen bg-[#0B0710] text-[#F8F6F3] selection:bg-[#6D3FA9]/30 overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:pb-16 sm:pt-40 lg:px-10">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-40 top-20 h-[350px] w-[350px] rounded-full bg-[#6D3FA9]/20 blur-[120px] sm:h-[550px] sm:w-[550px] sm:blur-[150px]"
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5 flex items-center gap-2.5 sm:mb-7 sm:gap-3">
            <Sparkles size={15} className="text-[#C8A7E8]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8A7E8]">Book Our Services</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-5xl font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-[7.5rem]">
            Your event. <span className="block italic text-[#C8A7E8]">Our expertise.</span>
          </motion.h1>
        </div>
      </section>

      {/* BOOKING INTERFACE */}
      <section className="relative px-4 pb-24 sm:px-6 sm:pb-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          
          {/* PROGRESS SIDEBAR */}
          <motion.aside initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="h-fit rounded-3xl border border-[#C8A7E8]/15 bg-[#140D20]/70 p-6 sm:rounded-[2rem] sm:p-10 lg:sticky lg:top-28">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8A7E8]">Progress Tracking</p>
            <h2 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">Step {currentStep} of 4</h2>
            
            <div className="mt-4 flex gap-2">
              {[1, 2, 3, 4].map((stepNum) => (
                <div 
                  key={stepNum} 
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    stepNum <= currentStep ? "bg-[#6D3FA9]" : "bg-[#C8A7E8]/10"
                  }`} 
                />
              ))}
            </div>

            <p className="mt-6 text-xs leading-6 text-[#E8DDF2]/50 sm:text-sm">
              {currentStep === 1 && "Let's kick off by getting your basic administrative and contact info down."}
              {currentStep === 2 && "Awesome. Now feed us details regarding the expected scope, timeline, and size of the gig."}
              {currentStep === 3 && "Select the specialist crews required to pull off your event vision flawlessly."}
              {currentStep === 4 && "Review your booking layout details, drop a custom note, and lock it down!"}
            </p>

            <div className="mt-8 rounded-2xl border border-[#C8A7E8]/10 bg-[#0B0710]/50 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-[#C8A7E8]" />
                <p className="text-xs leading-5 text-[#E8DDF2]/50">
                  Your summary passes through securely to our team via WhatsApp instant messaging routing for immediate priority confirmation.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* APPLICATION INTERFACE BOX */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="rounded-3xl border border-[#C8A7E8]/15 bg-[#F8F6F3] p-6 text-[#140D20] sm:rounded-[2rem] sm:p-10 lg:p-12 shadow-xl">
            
            <AnimatePresence>
              {isSuccess && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <span className="font-semibold block">Enquiry prepared successfully.</span>
                    WhatsApp router launched to securely pass your request to BITNA.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* REPLACED <form> WITH <div onKeyDown={...}> TO KILL AUTO-SUBMIT TOTALLY */}
            <div onKeyDown={handleKeyDown} className="space-y-8">
              <div className="overflow-hidden min-h-[350px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentStep}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                    className="space-y-6"
                  >
                    {/* STEP 1: CLIENT DETAILS */}
                    {currentStep === 1 && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">01</span>
                          <h3 className="font-serif text-2xl">Your details</h3>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="group">
                            <label htmlFor="name" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Full Name</label>
                            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Your full name" className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                          <div className="group">
                            <label htmlFor="email" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Email Address</label>
                            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                          <div className="group">
                            <label htmlFor="phone" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Phone Number</label>
                            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+234..." className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                          <div className="group">
                            <label htmlFor="location" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Event Location</label>
                            <input id="location" name="location" type="text" required value={formData.location} onChange={handleChange} placeholder="e.g. Lekki, Lagos" className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: EVENT DETAILS */}
                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">02</span>
                          <h3 className="font-serif text-2xl">Event details</h3>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div className="group">
                            <label htmlFor="eventType" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Event Type</label>
                            <div className="relative">
                              <select id="eventType" name="eventType" required value={formData.eventType} onChange={handleChange} className="w-full appearance-none rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 pr-10 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10">
                                <option value="">Select event type</option>
                                {eventTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                              </select>
                              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#140D20]/40" />
                            </div>
                          </div>
                          <div className="group">
                            <label htmlFor="eventDate" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Event Date</label>
                            <input id="eventDate" name="eventDate" type="date" required min={todayStr} value={formData.eventDate} onChange={handleChange} className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                          <div className="group">
                            <label htmlFor="guestCount" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Expected Guests</label>
                            <input id="guestCount" name="guestCount" type="number" min="1" required value={formData.guestCount} onChange={handleChange} placeholder="e.g. 150" className="w-full rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                          </div>
                          <div className="group">
                            <label htmlFor="budget" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Estimated Budget</label>
                            <div className="relative">
                              <select id="budget" name="budget" required value={formData.budget} onChange={handleChange} className="w-full appearance-none rounded-xl border border-[#140D20]/15 bg-white px-4 py-3.5 pr-10 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10">
                                <option value="">Select budget range</option>
                                {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                              </select>
                              <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#140D20]/40" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: SERVICES */}
                    {currentStep === 3 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">03</span>
                          <div>
                            <h3 className="font-serif text-2xl">What do you need?</h3>
                            <p className="text-xs text-[#140D20]/50 mt-0.5">Select all services that apply to your event plan.</p>
                          </div>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2 max-h-[300px] overflow-y-auto p-1 border border-[#140D20]/5 rounded-2xl bg-white shadow-inner">
                          {services.map((service) => {
                            const isSelected = selectedServices.includes(service.title);
                            return (
                              <button key={service.id} type="button" onClick={() => toggleService(service.title)} className={`group relative flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all ${isSelected ? "border-[#6D3FA9] bg-[#6D3FA9]/5 ring-1 ring-[#6D3FA9]" : "border-[#140D20]/10 bg-white hover:border-[#6D3FA9]/30"}`}>
                                <div className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition-all ${isSelected ? "border-[#6D3FA9] bg-[#6D3FA9] text-white" : "border-[#140D20]/20 text-transparent bg-white"}`}>
                                  <Check size={12} className="stroke-[3]" />
                                </div>
                                <div>
                                  <p className="text-xs font-bold text-[#140D20]">{service.title}</p>
                                  <p className="mt-0.5 text-[11px] leading-relaxed text-[#140D20]/60">{service.description}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: ADDITIONAL INFO & CONFIRM */}
                    {currentStep === 4 && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#6D3FA9] text-xs font-semibold text-white">04</span>
                          <h3 className="font-serif text-2xl">Tell us more</h3>
                        </div>
                        <div className="group">
                          <label htmlFor="message" className="mb-2 block text-[11px] font-bold uppercase tracking-wider text-[#140D20]/70 transition-colors group-focus-within:text-[#6D3FA9]">Additional Notes</label>
                          <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Tell us more about your event layout specifications, coordination styles, setup requirements, or custom staffing details..." className="w-full resize-none rounded-xl border border-[#140D20]/15 bg-white p-4 text-sm shadow-sm outline-none transition-all focus:border-[#6D3FA9] focus:ring-2 focus:ring-[#6D3FA9]/10" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ACTION FOOTER */}
              <div className="mt-6 border-t border-[#140D20]/10 pt-6 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button type="button" onClick={prevStep} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#140D20]/60 hover:text-[#140D20] py-2 transition-colors">
                    <ArrowLeft size={14} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className="flex items-center gap-2 rounded-xl bg-[#6D3FA9] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#140D20] shadow-md hover:shadow-lg"
                  >
                    Next <ArrowRight size={14} />
                  </button>
                ) : (
                  <button
                    type="button" // Changed from type="submit" to type="button"
                    onClick={handleSubmit} // Explicit click handler
                    disabled={isSubmitting || !isStepValid()}
                    className="flex items-center gap-2 rounded-xl bg-[#6D3FA9] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all disabled:opacity-50 hover:bg-[#140D20] shadow-md hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-3 w-3 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Preparing...
                      </>
                    ) : (
                      <>
                        Send Enquiry <Send size={14} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Book;