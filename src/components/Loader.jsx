import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loader every time the route changes
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0B0710]"
        >
          {/* Ambient glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-72 w-72 rounded-full bg-[#6D3FA9]/30 blur-[100px]"
          />

          <div className="relative flex flex-col items-center">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#C8A7E8]/30"
            >
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-7px] rounded-full border border-transparent border-t-[#C8A7E8]"
              />

              <span className="font-serif text-4xl text-[#F8F6F3]">
                B
              </span>
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="mt-8 font-serif text-3xl tracking-[0.12em] text-[#F8F6F3]"
            >
              BITNA
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#C8A7E8]"
            >
              Hospitality & Staffing
            </motion.p>

            {/* Loading line */}
            <div className="mt-10 h-px w-40 overflow-hidden bg-[#C8A7E8]/15">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-[#C8A7E8]"
              />
            </div>

            {/* Loading text */}
            <motion.p
              animate={{
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#E8DDF2]/40"
            >
              Preparing your experience
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;