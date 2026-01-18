
import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Frontend",
    accent: "group-hover:border-blue-500/50",
    glow: "bg-blue-500/5",
    skills: [
      { name: "React", icon: <path d="M22.21 17.18c-1.5-4.59-4.57-7.31-4.57-7.31.81-2.04 1.13-4.13.91-5.91-.18-1.5-.72-2.55-1.59-3.13-1.07-.72-2.59-.72-4.19-.1-1.6.61-3.26 1.83-4.63 3.42-1.37-1.59-3.03-2.81-4.63-3.42-1.6-.62-3.12-.62-4.19.1-.87.58-1.41 1.63-1.59 3.13-.22 1.78.1 3.87.91 5.91 0 0-3.07 2.72-4.57 7.31-.5 1.54-.61 3.01-.26 4.19.43 1.45 1.62 2.37 3.23 2.51 1.6.14 3.51-.31 5.37-1.28 1.87.97 3.78 1.42 5.37 1.28 1.61-.14 2.8-.88 3.23-2.51.35-1.18.24-2.65-.26-4.19zM12 14.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/> },
      { name: "Next.js", icon: <><path d="M13 12h5v-2h-5V7l-4 4 4 4v-3z"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></>, },
      { name: "TypeScript", icon: <path d="M1.35 1.35h21.3v21.3H1.35V1.35zM20.25 18.9h-2.1v-6.9h-2.4v6.9h-2.1v-8.7h6.6v8.7z"/> },
      { name: "Tailwind", icon: <path d="M12.001 6.48c-3.144 0-4.716 1.572-4.716 4.717 0 3.144 1.572 4.716 4.716 4.716 3.145 0 4.717-1.572 4.717-4.716 0-3.145-1.572-4.717-4.717-4.717z"/> },
      { name: "Framer", icon: <path d="M12 24l-8-8h8l8-8H4V0h16v8l-8 8h8z"/> },
      { name: "Redux", icon: <path d="M12 2L4 12l8 10 8-10L12 2z"/> }
    ]
  },
  {
    category: "Backend",
    accent: "group-hover:border-green-500/50",
    glow: "bg-green-500/5",
    skills: [
      { name: "Node.js", icon: <path d="M12 2L4.5 6.4v11.2L12 22l7.5-4.4V6.4L12 2zm0 17.5L6.1 16.1V7.9L12 4.5l5.9 3.4v8.2L12 19.5z"/> },
      { name: "Express", icon: <path d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"/> },
      { name: "PostgreSQL", icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/> },
      { name: "MongoDB", icon: <path d="M12 1.5c-4.5 4.5-5 10.5-2.5 15.5 2.5 5 2.5 5 2.5 5.5s0-.5 2.5-5.5c2.5-5 2-11-2.5-15.5z"/> },
      { name: "GraphQL", icon: <path d="M12 2L2 12l10 10 10-10L12 2z"/> },
      { name: "Firebase", icon: <path d="M12 2L4 18l8 4 8-4-8-16z"/> }
    ]
  },
  {
    category: "DevOps",
    accent: "group-hover:border-purple-500/50",
    glow: "bg-purple-500/5",
    skills: [
      { name: "Docker", icon: <path d="M2 10.5h3v3H2v-3zm4 0h3v3H6v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zm-8-4h3v3H6v-3zm4 0h3v3h-3v-3z"/> },
      { name: "AWS", icon: <path d="M12 2L2 22h20L12 2z"/> },
      { name: "Git", icon: <path d="M12 2L2 12l10 10 10-10L12 2zm0 15l-5-5 5-5 5 5-5 5z"/> },
      { name: "Vercel", icon: <path d="M12 1L1 21h22L12 1z"/> },
      { name: "Linux", icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/> },
      { name: "CI/CD", icon: <path d="M4 4v16h16V4H4zm14 14H6V6h12v12z"/> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-blue-500">Expertise</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tools and technologies I use to architect, build, and deploy 
            exceptional digital products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] bg-gray-900/40 border border-gray-800/50 backdrop-blur-xl transition-all duration-500 group ${group.accent} hover:shadow-2xl overflow-hidden`}
            >
              {/* Subtle background glow */}
              <div className={`absolute inset-0 ${group.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <h3 className="text-2xl font-bold mb-8 text-white/90 relative z-10 flex items-center gap-3">
                {group.category}
                <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-700 to-transparent" />
              </h3>

              <div className="grid grid-cols-3 gap-y-8 gap-x-4 relative z-10">
                {group.skills.map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center gap-2 group/skill cursor-pointer"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-950 border border-gray-800 rounded-2xl p-2.5 transition-all duration-300 group-hover/skill:border-white/20 group-hover/skill:bg-gray-800 group-hover/skill:shadow-lg group-hover/skill:shadow-blue-500/10">
                      <svg 
                        className="w-full h-full text-gray-500 transition-colors duration-300 group-hover/skill:text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        {skill.icon}
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover/skill:text-gray-200 transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
