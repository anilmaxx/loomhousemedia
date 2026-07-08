import React from 'react';
import img46 from '../assets/img46.jpg';

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

  return (
    <section className="py-20 bg-[#fdf9f4]" id="process">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: List of steps */}
          <div className="order-2 md:order-1">
            <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-semibold mb-2 block">
              Workflow
            </span>
            <h2 className="font-display-lg text-4xl md:text-5xl text-primary font-serif mb-4">
              OUR PROCESS.
            </h2>
            <p className="font-body-md text-on-surface-variant mb-12">
              A strategic approach to content that drives real results.
            </p>

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#f1ede8] border border-[#82756c]/15 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-label-sm text-xs uppercase tracking-wider text-primary font-semibold mb-1 flex items-center gap-2">
                      <span className="opacity-60">{step.num}</span> {step.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Grid of workspace images */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
              <img src={img46} className="w-full h-full object-cover" alt="Workspace and cameras" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
