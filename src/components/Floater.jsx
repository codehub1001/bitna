import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Floater = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "2347073978882";

  const message =
    "Hello BITNA Hospitality & Staffing, I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] sm:bottom-7 sm:right-7">

      {/* =====================================================
          CHAT BOX
      ====================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.92,
              transformOrigin: "bottom right",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.92,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[78px] right-0 w-[calc(100vw-40px)] max-w-[370px] overflow-hidden rounded-[24px] border border-[#C8A7E8]/15 bg-[#140D20] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >

            {/* HEADER */}
            <div className="relative overflow-hidden bg-[#6D3FA9] px-6 py-6 text-white">

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-[#C8A7E8]/20 blur-3xl" />

              <div className="relative flex items-start justify-between">

                <div className="flex items-center gap-3">

                  {/* Logo */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 font-serif text-lg">
                    B
                  </div>

                  <div>
                    <h3 className="font-serif text-xl">
                      BITNA Support
                    </h3>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#C8A7E8]" />

                      <span className="text-[10px] uppercase tracking-[0.16em] text-white/70">
                        Usually replies quickly
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* CHAT BODY */}
            <div className="space-y-5 px-5 py-6">

              {/* TIME */}
              <p className="text-center text-[9px] uppercase tracking-[0.2em] text-[#E8DDF2]/25">
                BITNA Hospitality & Staffing
              </p>

              {/* MESSAGE */}
              <div className="flex items-end gap-3">

                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#6D3FA9]/20 font-serif text-sm text-[#C8A7E8]">
                  B
                </div>

                <div className="max-w-[260px] rounded-2xl rounded-bl-md bg-[#21152D] px-4 py-3">
                  <p className="text-sm leading-6 text-[#F8F6F3]">
                    Hello there 👋
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#E8DDF2]/60">
                    Planning an event? We&apos;d love to help you create an
                    exceptional experience.
                  </p>
                </div>
              </div>

              {/* OPTIONS */}
              <div className="space-y-3 pl-11">

                <p className="text-xs text-[#E8DDF2]/40">
                  How can we help you today?
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[#C8A7E8]/15 bg-[#1B1125] px-4 py-3 transition-all duration-300 hover:border-[#C8A7E8]/50 hover:bg-[#21152D]"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6D3FA9]/20 text-[#C8A7E8]">
                      <FaWhatsapp size={18} />
                    </div>

                    <div>
                      <p className="text-sm text-[#F8F6F3]">
                        Start a conversation
                      </p>

                      <p className="mt-1 text-[10px] text-[#E8DDF2]/40">
                        Chat with us on WhatsApp
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#C8A7E8] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            {/* FOOTER */}
            <div className="flex items-center justify-center gap-2 border-t border-[#C8A7E8]/10 px-5 py-4">
              <CheckCircle2
                size={13}
                className="text-[#C8A7E8]"
              />

              <span className="text-[9px] uppercase tracking-[0.15em] text-[#E8DDF2]/30">
                Professional. Elegant. Reliable.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING CHAT BUTTON
      ====================================================== */}

      <div className="relative">

        {/* Notification indicator */}
        {!isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1,
              type: "spring",
              stiffness: 300,
            }}
            className="absolute -right-1 -top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0B0710] bg-[#C8A7E8] text-[9px] font-bold text-[#140D20]"
          >
            1
          </motion.span>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#6D3FA9] text-white shadow-[0_10px_40px_rgba(109,63,169,0.5)] transition-colors duration-300 hover:bg-[#C8A7E8] hover:text-[#140D20]"
          aria-label={isOpen ? "Close support chat" : "Open support chat"}
        >
          {isOpen ? (
            <X size={23} />
          ) : (
            <MessageCircle size={24} />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Floater;