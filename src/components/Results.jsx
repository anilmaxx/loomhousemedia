import React from 'react';
import { motion } from 'framer-motion';

export default function Results() {
  const resultCards = [
    {
      icon: 'visibility',
      title: 'Increased Visibility',
      desc: 'Get discovered by more people in your local area and beyond.',
    },
    {
      icon: 'group',
      title: 'More Table Reservations',
      desc: 'Attract more diners and increase footfall with content that drives action.',
    },
    {
      icon: 'favorite',
      title: 'Stronger Engagement',
      desc: 'Build a loyal community that likes, shares, saves and recommends.',
    },
    {
      icon: 'movie',
      title: 'Scroll-Stopping Content',
      desc: 'Cinematic visuals and reels that capture attention and make people pause.',
    },
    {
      icon: 'star',
      title: 'Stronger Brand Identity',
      desc: 'Stand out with a consistent brand voice, look and feel that people remember.',
    },
    {
      icon: 'chat',
      title: 'Positive Experience',
      desc: 'Showcase your ambiance, food and service in the best possible light.',
    },
    {
      icon: 'trending_up',
      title: 'Consistent Growth',
      desc: 'Regular content, smart strategies and performance tracking that bring results.',
    },
    {
      icon: 'analytics',
      title: 'Measurable Impact',
      desc: 'We track what matters and optimize constantly to ensure better outcomes.',
    },
  ];

  const bentoContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const bentoItemVariants = {
    hidden: { opacity: 0, y: 25 },
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
    <section className="py-20 bg-[#f7f3ee] overflow-hidden" id="results">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
              Deliverables
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary font-serif mb-4 leading-tight">
              RESULTS WE CAN HELP YOU ACHIEVE.
            </h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-0.5 w-24 bg-primary/20 mb-8 origin-left"
            ></motion.div>
            <p className="font-body-md text-on-surface-variant text-base md:text-lg mb-6 font-semibold">
              We don't just create content. We create impact that grows your business.
            </p>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Our strategies are designed to turn your online presence into real-world results that you can see and measure.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md group"
          >
            <motion.img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy4wCxodyVD9wep_8ylK0m3FHGnF0DhzhT3dK9rUMDMfA4_pNaoiY3U3_moT3KoUVbf4_YLz-zpIBcfZV1oPh5NKmgIAuBGShjkaLpSUZvZZBeIDN5k9sBPZBe8qZYfmfoEwO8M-AwyvdHo9hrBCBPeMHgSFTx6sVnreA-5OeXTA1Ud9_4y2JM61yJmdTmOGMw3eHDo3eLWHkwX2SxiVv_pM4otMLmsGhyomAnnQnCE-Obu9bAyd7usx9_BZzACDY8_As"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              alt="Result statistics"
            />
            {/* Round Badge */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
              className="absolute bottom-6 right-6 w-32 h-32 bg-[#442810]/95 rounded-full flex flex-col items-center justify-center text-center p-4 text-white shadow-xl transition-all duration-300 cursor-pointer select-none"
            >
              <span className="material-symbols-outlined text-xl mb-1 text-[#ffdcc3]">eco</span>
              <p className="text-[9px] font-label-sm uppercase tracking-widest font-semibold leading-tight">
                Your growth is our success.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Results Bento Grid */}
        <motion.div 
          variants={bentoContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {resultCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={bentoItemVariants}
              whileHover={{ y: -6 }}
              className="bg-[#fdf9f4] p-8 border border-[#82756c]/10 rounded-2xl text-center shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.1, backgroundColor: "#442810", color: "#ffffff" }}
                className="w-12 h-12 rounded-full bg-[#f7f3ee] flex items-center justify-center mx-auto mb-4 text-primary transition-colors duration-300"
              >
                <span className="material-symbols-outlined text-xl">{card.icon}</span>
              </motion.div>
              <h4 className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                {card.title}
              </h4>
              <p className="text-[11px] text-[#50453d] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
