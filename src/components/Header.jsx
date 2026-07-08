import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#fdf9f4]/80 backdrop-blur-md border-b border-[#82756c]/10 transition-all duration-300 ${
        isScrolled ? 'h-16 shadow-sm' : 'h-20'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-5 md:px-10 h-full max-w-7xl mx-auto">
        <a href="#" className="font-headline-md text-2xl text-primary tracking-tight font-semibold">
          Loom House Media
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <a
            className="ml-4 font-label-sm text-xs uppercase tracking-wider px-6 py-2 bg-primary text-on-secondary rounded-full hover:bg-primary/90 transition-all shadow-sm hover:shadow"
            href="#contact"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Hamburguer Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-[#fdf9f4] border-l border-[#82756c]/10 z-50 p-6 flex flex-col gap-6 md:hidden shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="font-label-sm text-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline/5"
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-4 font-label-sm text-sm uppercase text-center tracking-wider px-6 py-3 bg-primary text-on-secondary rounded-full hover:bg-primary/90 transition-colors shadow"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
