import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Select Service',
    message: '',
  });
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, service, message } = formData;

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (service === 'Select Service') {
      setError('Please select a service.');
      return;
    }
    if (!message.trim()) {
      setError('Please tell us a bit about your brand.');
      return;
    }

    const mailtoLink = `mailto:loomhousemedia9@gmail.com?subject=${encodeURIComponent(
      `New inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setIsSuccess(true);
    setError('');
    setFormData({
      name: '',
      email: '',
      service: 'Select Service',
      message: '',
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-primary text-white" id="contact">
      <div className="px-5 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Direct Contact Info */}
          <div>
            <h2 className="font-display-lg text-4xl md:text-5xl mb-8 tracking-tight font-serif text-[#fdf9f4]">
              LET'S CREATE SOMETHING MEANINGFUL, TOGETHER.
            </h2>
            <p className="font-body-lg text-white/80 mb-12 max-w-md">
              We partner with restaurants and cafés to bring their story to life, attract more customers and build a brand that lasts.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#ffdcc3] flex-shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-[10px] font-label-sm uppercase tracking-widest opacity-60">Phone</p>
                  <p className="font-body-md text-sm md:text-base font-semibold">+91 7382938312</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#ffdcc3] flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-[10px] font-label-sm uppercase tracking-widest opacity-60">Email</p>
                  <p className="font-body-md text-sm md:text-base font-semibold">loomhousemedia9@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#ffdcc3] flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-[10px] font-label-sm uppercase tracking-widest opacity-60">Location</p>
                  <p className="font-body-md text-sm md:text-base font-semibold">India | Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Availability Block */}
            <div className="mt-16 p-8 bg-white/5 rounded-2xl border border-white/10 max-w-md shadow-sm">
              <div className="flex items-center gap-4 mb-6 text-[#ffdcc3]">
                <span className="material-symbols-outlined">schedule</span>
                <h4 className="font-label-sm text-xs uppercase tracking-widest font-semibold">We're Available</h4>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-r border-white/10 pr-4">
                  <p className="text-[10px] font-label-sm uppercase opacity-60 mb-2">Monday - Saturday</p>
                  <p className="font-body-md text-xs md:text-sm font-semibold">10:00 AM - 7:00 PM</p>
                </div>
                <div className="pl-4">
                  <p className="text-[10px] font-label-sm uppercase opacity-60 mb-2">Flexible Across</p>
                  <p className="font-body-md text-xs md:text-sm font-semibold">Time Zones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl text-primary shadow-xl">
            <h3 className="font-headline-md text-2xl mb-8 italic text-center font-serif text-primary">
              Get in touch
            </h3>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-700 text-xs flex items-center gap-2">
                <span className="material-symbols-outlined">error</span>
                <span>{error}</span>
              </div>
            )}

            {isSuccess && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded text-green-700 text-xs flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                <span>Thank you! We will get back to you within 24 hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors text-primary text-sm placeholder:text-primary/40"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors text-primary text-sm placeholder:text-primary/40"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <select
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors text-primary text-sm appearance-none cursor-pointer"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option className="text-primary/40">Select Service</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Food Photography">Food Photography</option>
                  <option value="Cinematic Reels">Cinematic Reels</option>
                  <option value="Brand Identity">Brand Identity</option>
                </select>
                <div className="absolute right-0 top-3 pointer-events-none text-primary/40">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>

              <div>
                <textarea
                  className="w-full bg-transparent border-b border-primary/20 py-3 focus:outline-none focus:border-primary transition-colors text-primary text-sm placeholder:text-primary/40"
                  placeholder="Tell us about your brand"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                className="w-full py-4 bg-primary text-white font-label-sm text-xs rounded-full hover:bg-primary/95 hover:shadow-lg transition-all uppercase tracking-widest font-semibold cursor-pointer"
                type="submit"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
