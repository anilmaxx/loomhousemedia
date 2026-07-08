import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf9f4] font-body-md text-[#1c1c19] antialiased overflow-x-hidden pt-20">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
