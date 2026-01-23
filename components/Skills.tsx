
import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql, SiFirebase, SiDocker, SiAmazon, SiGit, SiVercel, SiLinux, SiGithubactions } from 'react-icons/si';

const skillGroups = [
  {
    category: "Frontend",
    accent: "group-hover:border-blue-500/50",
    glow: "bg-blue-500/5",
    skills: [
      { name: "React", icon: SiReact, props: { size: 24, color: "#61DAFB" } },
      { name: "Next.js", icon: SiNextdotjs, props: { size: 24, color: "#000000" } },
      { name: "TypeScript", icon: SiTypescript, props: { size: 24, color: "#3178C6" } },
      { name: "Tailwind", icon: SiTailwindcss, props: { size: 24, color: "#06B6D4" } },
      { name: "Framer", icon: SiFramer, props: { size: 24, color: "#0055FF" } },
      { name: "Redux", icon: SiRedux, props: { size: 24, color: "#764ABC" } }
    ]
  },
  {
    category: "Backend",
    accent: "group-hover:border-green-500/50",
    glow: "bg-green-500/5",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, props: { size: 24, color: "#339933" } },
      { name: "Express", icon: SiExpress, props: { size: 24, color: "#000000" } },
      { name: "PostgreSQL", icon: SiPostgresql, props: { size: 24, color: "#4169E1" } },
      { name: "MongoDB", icon: SiMongodb, props: { size: 24, color: "#47A248" } },
      { name: "GraphQL", icon: SiGraphql, props: { size: 24, color: "#E10098" } },
      { name: "Firebase", icon: SiFirebase, props: { size: 24, color: "#FFCA28" } }
    ]
  },
  {
    category: "DevOps",
    accent: "group-hover:border-purple-500/50",
    glow: "bg-purple-500/5",
    skills: [
      { name: "Docker", icon: SiDocker, props: { size: 24, color: "#2496ED" } },
      { name: "AWS", icon: SiAmazon, props: { size: 24, color: "#FF9900" } },
      { name: "Git", icon: SiGit, props: { size: 24, color: "#F05032" } },
      { name: "Vercel", icon: SiVercel, props: { size: 24, color: "#000000" } },
      { name: "Linux", icon: SiLinux, props: { size: 24, color: "#FCC624" } },
      { name: "CI/CD", icon: SiGithubactions, props: { size: 24, color: "#2088FF" } }
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
                      <div className="w-full h-full flex items-center justify-center">
                        <skill.icon {...skill.props} />
                      </div>
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
