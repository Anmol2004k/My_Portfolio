import React from 'react';
// Lucide icons import: Modern aur clean icons ke liye
import { Github, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-300 dark:border-gray-900 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Section */}
        <div className="text-xl font-bold tracking-tighter">
          Anmol<span className="text-blue-500">Kumar</span>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anmol's Portfolio. Built with React & Framer Motion.
        </p>

        {/* Social Icons Section */}
        <div className="flex gap-4">
          {/* GitHub - Professional Dark Theme */}
          <a 
            href="https://github.com" 
            target='_blank' 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 hover:bg-[#24292e] hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} strokeWidth={2} />
          </a>
          
          {/* LinkedIn - Official Brand Blue (#0a66c2) */}
          <a 
            href="https://www.linkedin.com" 
            target='_blank' 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={2} fill="currentColor" />
          </a>

          {/* X (Twitter) - Latest Branding Black */}
          <a 
            href="https://x.com" 
            target='_blank' 
            rel="noopener noreferrer" 
            className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-800 text-black dark:text-white hover:bg-black hover:text-white transition-all duration-300"
            aria-label="X (Twitter)"
          >
            <X size={20} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
