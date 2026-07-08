import React from 'react';
import { motion } from 'framer-motion';
import img23 from '../assets/img23.jpg';

export default function Hero() {
  const title = "LOOM HOUSE";

  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#442810]/20 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <motion.img
          alt="High-end hospitality interior design"
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="w-full h-full object-cover grayscale-[10%]"
          src={img23}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 px-5 max-w-4xl text-white select-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 0.9, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="material-symbols-outlined text-4xl text-[#ffdcc3]">eco</span>
          </motion.div>
        </motion.div>

        <h1 className="font-display-lg text-5xl sm:text-6xl md:text-8xl mb-4 tracking-wider font-extralight text-[#fdf9f4] hero-title flex justify-center flex-wrap gap-x-4">
          {title.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap">
              {word.split("").map((char, charIdx) => {
                // Calculate a staggering delay relative to global index
                const globalIdx = wordIdx * 5 + charIdx;
                return (
                  <motion.span
                    key={charIdx}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + globalIdx * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="dot-divider mb-8 opacity-70 max-w-xs mx-auto origin-center"
        >
          <div className="dot bg-white"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, letterSpacing: "0.15em", y: 15 }}
          animate={{ opacity: 1, letterSpacing: "0.25em", y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-label-sm text-xs md:text-sm uppercase mb-12 text-[#ffdcc3] font-semibold hero-subtitle"
        >
          Visual Storytelling for <br className="md:hidden" /> Restaurants • Cafés • Hospitality
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="font-label-sm text-xs tracking-widest border border-white/20 px-4 py-1.5 rounded-full inline-block bg-white/5 hero-pill"
        >
           WELCOME TO LOOM HOUSE MEDIA
        </motion.div>
      </div>

      {/* Down arrow scroll helper */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          href="#about" 
          className="text-white hover:text-[#ffdcc3] transition-colors block" 
          aria-label="Scroll Down"
        >
          <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
