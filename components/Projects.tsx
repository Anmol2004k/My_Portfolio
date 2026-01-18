
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Nova Dashboard",
    description: "A real-time data visualization platform built with Next.js and D3.js.",
    image: "https://picsum.photos/600/400?random=10",
    tech: ["Next.js", "D3.js", "Tailwind"],
    github: "#",
    live: "#"
  },
  {
    title: "Eco-Stream",
    description: "Collaborative environmental tracking tool with global heatmaps.",
    image: "https://picsum.photos/600/400?random=11",
    tech: ["React", "PostgreSQL", "Node.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Lumina Marketplace",
    description: "Premium NFT marketplace with lightning-fast transaction speeds.",
    image: "https://picsum.photos/600/400?random=12",
    tech: ["Solidity", "TypeScript", "Ether.js"],
    github: "#",
    live: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-blue-500">Work</span></h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Selection of projects that showcase my technical abilities and creative thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-3xl overflow-hidden group flex flex-col h-full shadow-xl"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <a href={project.github} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                   </a>
                   <a href={project.live} className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                   </a>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="pt-6 border-t border-gray-300 dark:border-gray-800 flex justify-between items-center">
                   <a href={project.live} className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                     View Case Study <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
