import React from 'react';

export default function About() {
  const reelUrl = 'https://www.instagram.com/reel/DZcfzypSHZb/';

  const services = [
    'Social Media Management',
    'Food Photography',
    'Cinematic Reels',
    'Content Strategy',
    'Graphic Design',
    'Brand Identity',
  ];

  return (
    <section className="py-20 px-5 md:px-10 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Content */}
        <div className="md:col-span-5">
          <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold mb-4 block">
            About Us
          </span>
          <h2 className="font-headline-lg text-4xl md:text-5xl text-primary mb-8 leading-tight font-serif">
            Crafting Visual Stories That Grow Brands.
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-headline-md text-xl text-primary mb-4 font-semibold">
                Who We Are
              </h3>
              <p className="font-body-md text-[#50453d] leading-relaxed">
                Loom House Media is a creative agency specializing in social media management,
                food photography, cinematic reels, branding, and visual storytelling for restaurants,
                cafés, and hospitality brands. We help businesses build a memorable online
                presence through content that looks premium and drives real engagement.
              </p>
            </div>

            <div>
              <h3 className="font-headline-md text-xl text-primary mb-4 font-semibold">
                Our Services
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-md text-[#50453d]">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Showcase Reel & Accents */}
        <div className="md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/5] bg-[#f1ede8] rounded-2xl border border-[#82756c]/10 overflow-hidden shadow-md group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              {/* Background Image Overlay for Reel placeholder */}
              <div className="absolute inset-0 z-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-h01V5E6bzyTk2-_6u1RFPhBL9uDGqiBZjGUOqDg55J-LhOIyttZ2ejh0par9DNotuguR5LZhCKN7GdTpeObdQNf1BgR2IJViqByTGbTHZTYXhWCoBMu2BtPodFxTmKl6I6SFg_MzytL9koHXEziiyrkWQXc3W-2WvXv5BzsKU8NLlij4Jy30z7Hy5is0mlt-zXTDUWajHdtqaRWSZOmo4m3MAZaYRdJSiyvlSiRsZm9CcX90LRt1Uadh1wwdnJknAA"
                alt="Video placeholder background"
              />

              <button
                onClick={() => window.open(reelUrl, '_blank')}
                className="z-10 w-20 h-20 rounded-full bg-white/95 border-2 border-primary flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:bg-primary group-hover:text-white"
                aria-label="Open Instagram Showcase Reel"
              >
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors pl-1">
                  open_in_new
                </span>
              </button>

              <div className="z-10 mt-6 text-white drop-shadow-md">
                <p className="font-label-sm text-xs uppercase tracking-widest mb-1 font-semibold">
                  Space for
                </p>
                <h4 className="font-headline-md text-2xl mb-4 font-serif">
                  SHOWCASE REEL
                </h4>
                <p className="font-body-md text-xs italic opacity-85">
                  Opens on Instagram
                </p>
              </div>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-2xl mb-2">eco</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Premium
              </p>
            </div>
            <div className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-2xl mb-2">restaurant</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Hospitality
              </p>
            </div>
            <div className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-2xl mb-2">trending_up</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Converts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
