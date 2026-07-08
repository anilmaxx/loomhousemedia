import React from 'react';
import { motion } from 'framer-motion';

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

  // Container variants for staggered lists
  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-20 px-5 md:px-10 max-w-7xl mx-auto overflow-hidden" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Left Column: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold mb-4 block">
            About Us
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-5xl text-primary mb-8 leading-tight font-serif">
            Crafting Visual Stories That Grow Brands.
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="font-headline-md text-xl text-primary mb-4 font-semibold">
                Who We Are
              </h3>
              <p className="font-body-md text-[#50453d] leading-relaxed">
                Loom House Media is a creative agency specializing in social media management,
                food photography, cinematic reels, branding, and visual storytelling for restaurants,
                cafés, and hospitality brands. We help businesses build a memorable online
                presence through content that looks premium and drives real engagement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h3 className="font-headline-md text-xl text-primary mb-4 font-semibold">
                Our Services
              </h3>
              <motion.ul 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body-md text-[#50453d]"
              >
                {services.map((service, index) => (
                  <motion.li 
                    variants={listItemVariants}
                    key={index} 
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Showcase Reel & Accents */}
        <div className="md:col-span-6 md:col-start-7">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="relative aspect-[4/5] bg-[#f1ede8] rounded-2xl border border-[#82756c]/10 overflow-hidden shadow-md group transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              {/* Background Image Overlay for Reel placeholder */}
              <div className="absolute inset-0 z-0 bg-black/10 group-hover:bg-black/25 transition-all duration-300"></div>
              <motion.img
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2-h01V5E6bzyTk2-_6u1RFPhBL9uDGqiBZjGUOqDg55J-LhOIyttZ2ejh0par9DNotuguR5LZhCKN7GdTpeObdQNf1BgR2IJViqByTGbTHZTYXhWCoBMu2BtPodFxTmKl6I6SFg_MzytL9koHXEziiyrkWQXc3W-2WvXv5BzsKU8NLlij4Jy30z7Hy5is0mlt-zXTDUWajHdtqaRWSZOmo4m3MAZaYRdJSiyvlSiRsZm9CcX90LRt1Uadh1wwdnJknAA"
                alt="Video placeholder background"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
              />

              <motion.button
                onClick={() => window.open(reelUrl, '_blank')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="z-10 w-20 h-20 rounded-full bg-white/95 border-2 border-primary flex items-center justify-center shadow-lg cursor-pointer group-hover:bg-primary group-hover:text-white transition-all duration-300"
                aria-label="Open Instagram Showcase Reel"
              >
                <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors pl-1">
                  open_in_new
                </span>
              </motion.button>

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
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div 
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 mt-8"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 10px 20px rgba(0,0,0,0.05)" }}
              className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2">eco</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Premium
              </p>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 10px 20px rgba(0,0,0,0.05)" }}
              className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2">restaurant</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Hospitality
              </p>
            </motion.div>
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -4, shadow: "0 10px 20px rgba(0,0,0,0.05)" }}
              className="text-center p-4 bg-[#fdf9f4] rounded-xl border border-[#82756c]/5 shadow-sm transition-all duration-300"
            >
              <span className="material-symbols-outlined text-primary text-2xl mb-2">trending_up</span>
              <p className="text-[10px] font-label-sm uppercase tracking-wider text-primary font-semibold">
                Converts
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
