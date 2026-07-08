import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Results', href: '#results' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fdf9f4]/80 backdrop-blur-md border-b border-[#82756c]/10 transition-all duration-500 ${
        isScrolled ? 'h-16 shadow-sm' : 'h-20'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="flex justify-between items-center w-full px-5 md:px-10 h-full max-w-7xl mx-auto">
        <a href="#" className="font-headline-md text-2xl text-primary tracking-tight font-semibold">
          Loom House Media
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 font-label-sm text-xs uppercase tracking-wider px-6 py-2 bg-primary text-on-secondary rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow"
            href="#contact"
          >
            Get in touch
          </motion.a>
        </div>

        {/* Mobile Hamburguer Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none z-50 relative"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Mobile Drawer Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Drawer Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
              className="fixed top-0 right-0 w-72 h-screen bg-[#fdf9f4] border-l border-[#82756c]/10 z-50 p-8 pt-24 flex flex-col gap-6 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1, duration: 0.4 }}
                    key={link.label}
                    className="font-label-sm text-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-3 border-b border-outline/5 block"
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.06 + 0.1, duration: 0.4 }}
                  className="mt-6 font-label-sm text-sm uppercase text-center tracking-wider px-6 py-3 bg-primary text-on-secondary rounded-full hover:bg-primary/90 transition-colors shadow block"
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
