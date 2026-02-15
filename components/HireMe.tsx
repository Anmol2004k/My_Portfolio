
import React from 'react';
import { motion } from 'framer-motion';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const HireMe: React.FC = () => {
  return (
    <section id="hire-me" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Work with <span className="text-blue-500">Me</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Choose the engagement model that best fits your needs. 
            I offer flexible options to help you bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Daily Hire Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative p-8 rounded-3xl bg-white/50 dark:bg-gray-900/50 border border-gray-300 dark:border-gray-800 backdrop-blur-md flex flex-col h-full overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Daily Hire</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-blue-500">₹2000</span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">/ 5 Hours</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <CheckIcon />
                <span>Deep analysis of your specific problem</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <CheckIcon />
                <span>Professional requirement mapping</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <CheckIcon />
                <span>Practical and useful solution suggestions</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <CheckIcon />
                <span>Skill-based development tasks</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <CheckIcon />
                <span>Clear communication and timely updates</span>
              </li>
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl text-center shadow-lg hover:bg-blue-700 transition-colors"
            >
              Hire for a Day
            </motion.a>
          </motion.div>

          {/* Project Based Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="relative p-8 rounded-3xl bg-white/50 dark:bg-gray-900/50 border border-purple-500/30 backdrop-blur-md flex flex-col h-full overflow-hidden group shadow-[0_10px_40px_rgba(168,85,247,0.1)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity text-purple-500">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Project-Based</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-purple-500">Custom</span>
                <span className="text-gray-600 dark:text-gray-400 font-medium">Pricing</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>End-to-end requirement analysis</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Problem-solving focused development</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Clean, scalable & maintainable code</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Regular feedback loops & updates</span>
              </li>
              <li className="flex gap-3 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span>Goal-oriented delivery & support</span>
              </li>
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                boxShadow: ["0 0 0px rgba(168, 85, 247, 0)", "0 0 20px rgba(168, 85, 247, 0.3)", "0 0 0px rgba(168, 85, 247, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl text-center shadow-lg hover:bg-purple-700 transition-colors"
            >
              Hire for a Project
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HireMe;
