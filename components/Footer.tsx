
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter">
          Anmol<span className="text-blue-500">Kumar</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()}  Anmol's ,Portfolio. Built with React & Framer Motion.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Anmol2004k" target='_blank' rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/anmolkumar2028" target='_blank' rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/Anmol_thaakur" target='_blank' rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
