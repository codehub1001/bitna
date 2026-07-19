import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Elegant Celebrations",
    category: "Weddings",
    size: "large",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Professional Service",
    category: "Hospitality",
    size: "small",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Memorable Moments",
    category: "Private Events",
    size: "small",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600",
    title: "Corporate Excellence",
    category: "Corporate Events",
    size: "large",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [direction, setDirection] = useState(0);

  const currentIndex = galleryImages.findIndex(
    (image) => image.id === selectedImage?.id
  );

  const showNextImage = () => {
    setDirection(1);
    const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const showPreviousImage = () => {
    setDirection(-1);
    const previousIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[previousIndex]);
  };

  // Bind hotkeys for accessibility
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") showNextImage();
      if (e.key === "ArrowLeft") showPreviousImage();
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  };

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden bg-[#0B0710] px-4 py-28 sm:px-6 sm:py-36 lg:px-10"
      >
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute left-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#6D3FA9]/10 blur-[150px]" />
        <div className="pointer-events-none absolute right-[-5%] top-10 h-[400px] w-[400px] rounded-full bg-[#C8A7E8]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end border-b border-[#C8A7E8]/10 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Sparkles size={14} className="text-[#C8A7E8]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C8A7E8]">
                  Moments We Create
                </span>
              </div>
              <h2 className="font-serif text-4xl font-normal leading-[1.1] text-[#F8F6F3] sm:text-5xl lg:text-6xl tracking-tight">
                Every event deserves{" "}
                <span className="block italic text-[#C8A7E8] mt-1">an exceptional touch.</span>
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#E8DDF2]/50 max-w-md lg:pb-2">
              From intimate celebrations to grand occasions, our team brings professionalism, 
              elegance, and meticulous attention to detail to every environment we serve.
            </p>
          </div>

          {/* ASYMMETRICAL BENTO GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:auto-rows-[300px]">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => {
                  setDirection(0);
                  setSelectedImage(image);
                }}
                className={`group relative overflow-hidden rounded-[1.5rem] border border-[#C8A7E8]/10 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#C8A7E8] ${
                  image.size === "large" ? "md:row-span-2 h-[450px] md:h-auto" : "h-[300px]"
                }`}
              >
                {/* Image Component */}
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Luxury Multi-layer Gradient Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0710] via-[#0B0710]/40 to-transparent opacity-80 transition duration-500 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-[#6D3FA9]/10 opacity-0 mix-blend-color-dodge transition duration-500 group-hover:opacity-100" />

                {/* Corner Action Arrow */}
                <div className="absolute right-6 top-6 flex h-12 w-12 -translate-x-2 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-[#140D20]/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-[#C8A7E8]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#C8A7E8]">
                    {image.category}
                  </p>
                  <h3 className="font-serif text-2xl font-light text-[#F8F6F3] tracking-wide">
                    {image.title}
                  </h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <a
              href="/gallery"
              className="group flex items-center gap-3 rounded-full border border-[#C8A7E8]/30 bg-[#140D20]/40 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-[#E8DDF2]/80 backdrop-blur-sm transition-all duration-300 hover:border-[#C8A7E8] hover:bg-[#6D3FA9]/20 hover:text-[#F8F6F3]"
            >
              View all moments
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#C8A7E8]"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* RE-ENGINEERED LIGHTBOX ACCESSIBILITY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0B0710]/98 p-4 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Upper Stage Control Deck */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8">
              <div className="text-left hidden md:block">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8A7E8]">
                  Gallery Frame
                </span>
                <p className="text-xs text-[#E8DDF2]/40 mt-0.5">
                  {currentIndex + 1} of {galleryImages.length}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#140D20]/40 text-white transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
                aria-label="Close layout view"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPreviousImage();
              }}
              className="absolute left-4 md:left-8 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/5 bg-[#140D20]/20 text-white backdrop-blur-sm transition-all hover:bg-[#140D20]/60 hover:border-white/20 active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Center Stage Presentation Space */}
            <div 
              className="relative w-full max-w-4xl flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden w-full flex justify-center items-center h-[55vh] md:h-[65vh]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.img
                    key={selectedImage.id}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl border border-white/5"
                  />
                </AnimatePresence>
              </div>

              {/* Lower Slide Text Deck */}
              <div className="mt-8 text-center max-w-xl px-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImage.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C8A7E8]">
                      {selectedImage.category}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-light md:text-3xl text-[#F8F6F3] tracking-wide">
                      {selectedImage.title}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Control Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNextImage();
              }}
              className="absolute right-4 md:right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/5 bg-[#140D20]/20 text-white backdrop-blur-sm transition-all hover:bg-[#140D20]/60 hover:border-white/20 active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;