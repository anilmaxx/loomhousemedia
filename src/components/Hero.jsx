import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image and Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#442810]/20 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          alt="High-end hospitality interior design"
          className="w-full h-full object-cover grayscale-[10%] scale-105 transition-transform duration-[10s] ease-out animate-pulse-slow"
          src="src/assets/img23.jpg"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 px-5 max-w-4xl text-white select-none animate-fadeIn">
        <div className="mb-6 opacity-90 animate-bounce-slow">
          <span className="material-symbols-outlined text-4xl text-[#ffdcc3]">eco</span>
        </div>

        <h1 className="font-display-lg text-6xl md:text-8xl mb-4 tracking-wider font-extralight text-[#fdf9f4]">
          LOOM HOUSE
        </h1>

        <div className="dot-divider mb-8 opacity-70 max-w-xs mx-auto">
          <div className="dot bg-white"></div>
        </div>

        <p className="font-label-sm text-xs md:text-sm uppercase tracking-[0.25em] mb-12 text-[#ffdcc3] font-semibold">
          Visual Storytelling for <br className="md:hidden" /> Restaurants • Cafés • Hospitality
        </p>

        <div className="font-label-sm text-xs tracking-widest opacity-80 border border-white/20 px-4 py-1.5 rounded-full inline-block bg-white/5">
           PORTFOLIO
        </div>
      </div>

      {/* Down arrow scroll helper */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <a href="#about" className="text-white hover:text-[#ffdcc3] transition-colors" aria-label="Scroll Down">
          <span className="material-symbols-outlined text-3xl">keyboard_double_arrow_down</span>
        </a>
      </div>
    </section>
  );
}
