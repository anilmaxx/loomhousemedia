import React from 'react';
import { motion } from 'framer-motion';
import img23 from '../assets/img23.jpg';

export default function Services() {
  const mainServices = [
    {
      icon: 'smartphone',
      title: 'Social Media Management',
      description: 'Strategy, content planning, posting, community engagement, and analytics tracking.',
    },
    {
      icon: 'photo_camera',
      title: 'Food Photography',
      description: 'High-quality, mouth-watering food photography and styling that sells your dishes.',
    },
    {
      icon: 'movie',
      title: 'Cinematic Reels',
      description: 'Short-form videos, micro-reels, and teasers designed to grab attention and trend.',
    },
  ];

  const steps = [
    { number: '01', title: 'Discover', desc: 'We understand your brand and target audience.', icon: 'search' },
    { number: '02', title: 'Plan', desc: 'Customized social content strategy.', icon: 'edit_note' },
    { number: '03', title: 'Shoot', desc: 'Professional on-location photography.', icon: 'photo_camera' },
    { number: '04', title: 'Edit', desc: 'High-quality processing and edits.', icon: 'computer' },
    { number: '05', title: 'Deliver', desc: 'Consistent, on-brand content feeds.', icon: 'send' },
    { number: '06', title: 'Grow', desc: 'Engaging content that drives reservations.', icon: 'trending_up' },
  ];

  const serviceContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 100,
      },
    },
  };

  const stepContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 110,
      },
    },
  };

  return (
    <section className="py-20 bg-[#f7f3ee] border-y border-[#82756c]/10 overflow-hidden" id="services">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary mb-4 font-serif">
              WHAT WE DO.
            </h2>
            <p className="font-body-lg text-lg text-on-surface-variant italic mb-10">
              End-to-end content &amp; branding solutions for hospitality brands.
            </p>
            
            <motion.div 
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {mainServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={serviceItemVariants}
                  whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.75)" }}
                  className="flex items-start gap-4 p-4 bg-white/40 rounded-xl transition-all border border-[#82756c]/5 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-primary text-2xl flex-shrink-0 mt-0.5">
                    {service.icon}
                  </span>
                  <div>
                    <h4 className="font-label-sm text-sm uppercase tracking-wider text-primary font-semibold mb-1">
                      {service.title}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Block: Image with Quote Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group"
          >
            <motion.img
              src={img23}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
              alt="Plated dish close-up"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 md:p-12 text-center backdrop-blur-[1px] pointer-events-none">
              <p className="text-white font-headline-md text-2xl md:text-3xl italic font-serif leading-relaxed drop-shadow">
                "We turn ambiance, flavor and experience into content that converts."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Approach Section */}
        <div className="border-t border-[#82756c]/15 pt-12">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-label-sm uppercase tracking-widest text-primary font-semibold mb-12"
          >
            Our Approach
          </motion.h3>
          <motion.div 
            variants={stepContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-6 gap-8"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={stepItemVariants}
                className="text-center flex flex-col items-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, backgroundColor: "#442810", color: "#ffffff" }}
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-4 border border-[#82756c]/10 transition-all duration-300 shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </motion.div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold mb-1">
                  {step.number} {step.title}
                </h4>
                <p className="text-[10px] text-on-surface-variant leading-relaxed max-w-[120px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
