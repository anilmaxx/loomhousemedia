import React from 'react';
import { motion } from 'framer-motion';
import img46 from '../assets/img46.jpeg';

export default function Process() {
  const steps = [
    {
      num: '01.',
      icon: 'chat',
      title: 'Discovery',
      desc: 'We understand your brand, audience, and goals to create a clear roadmap.',
    },
    {
      num: '02.',
      icon: 'description',
      title: 'Strategy',
      desc: 'We plan content that aligns with your brand voice and speaks to your ideal customers.',
    },
    {
      num: '03.',
      icon: 'photo_camera',
      title: 'Creation',
      desc: 'We shoot, design and craft high-quality visuals that showcase your food and ambience.',
    },
    {
      num: '04.',
      icon: 'movie',
      title: 'Publish & Engage',
      desc: 'We post, engage and build a thriving community around your brand.',
    },
    {
      num: '05.',
      icon: 'analytics',
      title: 'Analyze & Grow',
      desc: 'We track performance, analyze insights and optimize to grow your business.',
    },
  ];

  const stepsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 90,
      },
    },
  };

  return (
    <section className="py-20 bg-[#fdf9f4] overflow-hidden" id="process">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: List of steps */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
                Workflow
              </span>
              <h2 className="font-display-lg text-3xl sm:text-4xl md:text-5xl text-primary font-serif mb-4">
                OUR PROCESS.
              </h2>
              <p className="font-body-md text-on-surface-variant mb-12">
                A strategic approach to content that drives real results.
              </p>
            </motion.div>

            <motion.div 
              variants={stepsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  variants={stepItemVariants}
                  whileHover={{ x: 6 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, backgroundColor: "#442810", color: "#ffffff" }}
                    className="w-12 h-12 rounded-full bg-[#f1ede8] border border-[#82756c]/15 flex items-center justify-center flex-shrink-0 text-primary transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </motion.div>
                  <div>
                    <h3 className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold mb-1 flex items-center gap-2">
                      <span className="opacity-60">{step.num}</span> {step.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Workspace image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 space-y-6"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md group">
              <motion.img 
                src={img46} 
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover" 
                alt="Workspace and cameras" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
