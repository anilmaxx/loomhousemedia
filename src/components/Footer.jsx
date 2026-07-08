import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#fdf9f4] py-12 border-t border-[#82756c]/20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full px-5 md:px-10 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="max-w-xs">
          <div className="font-headline-md text-2xl text-primary font-semibold mb-4">
            Loom House Media
          </div>
          <p className="font-body-md text-sm text-[#50453d] mb-6 leading-relaxed">
            Visual Storytelling for the Hospitality Industry. Creating impact that grows your business.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#" aria-label="Website">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#" aria-label="Instagram">
              <span className="material-symbols-outlined text-lg">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Right Links Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#services">
            Social Media Management
          </a>
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#services">
            Food Photography
          </a>
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#services">
            Cinematic Reels
          </a>
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#services">
            Brand Identity
          </a>
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
        </div>
      </div>

      {/* Copyright line */}
      <div className="w-full px-5 md:px-10 max-w-7xl mx-auto mt-12 pt-8 border-t border-[#82756c]/10 text-center md:text-left">
        <p className="font-label-sm text-[11px] text-on-surface-variant/70 tracking-wider">
          &copy; 2026 Loom House Media. Visual Storytelling for the Hospitality Industry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
