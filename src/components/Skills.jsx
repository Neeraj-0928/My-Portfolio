import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, SiMysql, SiPandas, SiNumpy, 
  SiScikitlearn, SiPytorch, SiGit, SiGithub,
  SiJupyter, SiMongodb 
} from 'react-icons/si';
import { FaChartBar, FaDatabase, FaCogs, FaTable } from 'react-icons/fa';
import PageWrapper from './PageWrapper';

const skillsData = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#00758F]" /> },
      { name: "C", icon: <span className="text-xl font-bold font-serif text-[#A8B9CC]">C</span> }
    ]
  },
  {
    category: "AI / ML Libraries",
    items: [
      { name: "PyTorch & Vision", icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
      { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> }
    ]
  },
  {
    category: "Data Analytics",
    items: [
      { name: "Power BI", icon: <FaChartBar className="text-[#F2C811]" /> },
      { name: "Tableau", icon: <FaTable className="text-[#E97627]" /> },
      { name: "DAX & Power Query", icon: <FaCogs className="text-[#0078D4]" /> }
    ]
  },
  {
    category: "Tools & DBs",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Git & GitHub", icon: <SiGithub className="text-slate-700" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-[#F37626]" /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Skills = () => {
  return (
    <PageWrapper id="skills" className="py-24">
      <section className="relative w-full">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Technical <span className="text-gradient">Skills</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto"
          >
            {skillsData.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category} 
                variants={itemVariants}
                className="glass-card p-10 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group border-white/50"
              >
                <h3 className="text-2xl font-bold mb-8 text-slate-800 border-b border-slate-200/60 pb-5 uppercase tracking-wider">
                  {skillGroup.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="flex items-center group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mr-5 group-hover/item:scale-110 transition-all duration-500 bg-white/80 shadow-sm border-white group-hover/item:shadow-md group-hover/item:border-cyan-500/20">
                        <div className="text-2xl drop-shadow-sm">{skill.icon}</div>
                      </div>
                      <span className="text-slate-600 group-hover/item:text-slate-900 transition-colors font-bold text-base">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
