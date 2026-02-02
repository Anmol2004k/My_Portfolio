
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HireMe />
        <Contact />
      </main>

      <Footer />
      {/* ✅ Vercel Analytics & Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
