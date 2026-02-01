
import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../Assets/images/Dev.jpg';

const FloatingIcon = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl shadow-xl z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Main Profile Container */}
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-all duration-500">
                <img 
                    src={aboutImage} 
                  alt="Anmol | Full Stack Developer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating Tech Icons */}
              <FloatingIcon delay={0} className="top-0 -left-4 text-blue-400">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </FloatingIcon>
              <FloatingIcon delay={1} className="bottom-10 -left-8 text-purple-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </FloatingIcon>
              <FloatingIcon delay={2} className="top-10 -right-4 text-pink-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3zM8 4v4M16 4v4M4 11h16" /></svg>
              </FloatingIcon>
              <FloatingIcon delay={1.5} className="-bottom-4 right-10 text-green-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </FloatingIcon>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6">About <span className="text-blue-500">Me</span></h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a passionate Full Stack Developer with over 3 years of experience building 
              high-performance web applications. My mindset is centered around 
              <span className="text-white font-medium"> clean code, scalability, and user-centric design</span>.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I specialize in bridging the gap between elegant UI design and robust backend 
              architecture. Every pixel and every line of code is an opportunity to create 
              something meaningful.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Projects', value: '20+' },
                { label: 'Tech Stack', value: 'Modern' },
                { label: 'Location', value: 'Remote' }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500/30 transition-colors">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
