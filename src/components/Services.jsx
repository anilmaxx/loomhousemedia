import React from 'react';
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

  return (
    <section className="py-20 bg-[#f7f3ee] border-y border-[#82756c]/10" id="services">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Block */}
          <div className="max-w-xl">
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary mb-4 font-serif">
              WHAT WE DO.
            </h2>
            <p className="font-body-lg text-lg text-on-surface-variant italic mb-10">
              End-to-end content &amp; branding solutions for hospitality brands.
            </p>
            
            <div className="space-y-6">
              {mainServices.map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/40 rounded-xl hover:bg-white/70 transition-all border border-[#82756c]/5">
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Image with Quote Overlay */}
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group">
            <img
              src={img23}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Plated dish close-up"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 md:p-12 text-center backdrop-blur-[1px]">
              <p className="text-white font-headline-md text-2xl md:text-3xl italic font-serif leading-relaxed drop-shadow">
                "We turn ambiance, flavor and experience into content that converts."
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="border-t border-[#82756c]/15 pt-12">
          <h3 className="text-center font-label-sm uppercase tracking-widest text-primary font-semibold mb-12">
            Our Approach
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-4 border border-[#82756c]/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-wider text-primary font-semibold mb-1">
                  {step.number} {step.title}
                </h4>
                <p className="text-[10px] text-on-surface-variant leading-relaxed max-w-[120px] mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
