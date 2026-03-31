import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineExternalLink, HiX } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import PageWrapper from './PageWrapper';

const projects = [
  {
    id: 1,
    title: "CT-Liver HCC Classification",
    coverImage: "/projects/ct_liver_cover.png",
    description: "Developed a deep learning pipeline using PyTorch and MobileNetV2 to classify Hepatocellular Carcinoma (HCC) from CT liver scans, featuring Grad-CAM integration for explainable AI.",
    tech: ["PyTorch", "MobileNetV2", "Grad-CAM", "Python"],
    live: "#",
    github: "https://github.com/Neeraj-0928/CT-liver",
    results: {
      metrics: "The MobileNetV2 architecture learned discriminative features from the raw CT slices. Analysis of the confusion matrix reveals a strong ability to detect negative cases, correctly identifying 7 out of 9 non-HCC scans (True Negatives). However, the model struggled with positive cases, accurately predicting only 4 out of 15 active HCC cases (True Positives) while yielding 11 False Negatives, resulting in an overall accuracy of 46%. Importantly, Grad-CAM overlays proved that when the model does make predictions, it focuses on biologically relevant lesion sites rather than image artifacts.",
      images: [
        { src: "/projects/ct-liver/sample_predictions.png?v=2", alt: "Grad-CAM Visual Predictions" },
        { src: "/projects/ct-liver/confusion_matrix.png?v=2", alt: "Model Confusion Matrix" }
      ]
    }
  },
  {
    id: 2,
    title: "Shark Tank USA Investment Analysis",
    coverImage: "/projects/startup_cover.png",
    description: "A comprehensive data analytics project cleaning and processing a Shark Tank dataset using Python, culminating in interactive Tableau dashboards to reveal investor patterns and founder outcomes.",
    tech: ["Python", "Pandas", "Tableau", "Data Analysis"],
    live: "#",
    github: "https://github.com/Neeraj-0928/-Startup-Investment-Analysis",
    results: {
      metrics: "The data pipeline processed and cleaned raw Shark Tank episode data, handling missing values and standardizing valuation metrics via Python. The resulting dataset was piped into Tableau to build an interactive storytelling dashboard. The visualizations dynamically contrast Founder vs. Investor equity shares, track successful pitch volumes over seasons, and identify the most active Sharks in the tank.",
      images: [
        { src: "/projects/startup-analysis/Dashboard.png?v=1", alt: "Aggregated Investment Dashboard" },
        { src: "/projects/startup-analysis/Visual_Dashboard.png?v=1", alt: "Founder vs Investor Dynamics" }
      ]
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageWrapper id="projects" className="py-24">
      <section className="relative w-full">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                variants={cardVariants}
                className="glass-card flex flex-col h-full overflow-hidden group relative z-10"
              >
                <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  {project.coverImage ? (
                    <>
                      <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 absolute inset-0 z-0 opacity-90 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-cyan-100/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white"></div>
                      <h3 className="text-3xl font-black text-center text-slate-200 group-hover:text-cyan-500/30 transition-colors duration-500 z-10 p-10 leading-tight uppercase tracking-tighter">{project.title}</h3>
                    </>
                  )}
                </div>
                
                <div className="p-10 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-gradient transition-all uppercase tracking-tight leading-tight">{project.title}</h3>
                    <p className="text-slate-600 mb-8 text-base leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-4 py-1.5 text-xs font-bold rounded-lg bg-cyan-50 text-[var(--color-primary)] border border-cyan-100/50 uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 relative z-20">
                      {project.results ? (
                        <button 
                          onClick={() => setSelectedProject(project)}
                          className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold transition-all shadow-lg shadow-cyan-500/20"
                        >
                          <HiOutlineExternalLink className="text-xl" />
                          Results
                        </button>
                      ) : (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold transition-all shadow-lg shadow-cyan-500/20">
                          <HiOutlineExternalLink className="text-xl" />
                          View
                        </a>
                      )}
                      
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl glass hover:bg-slate-50 text-slate-700 font-bold transition-all border border-slate-200">
                        <SiGithub className="text-xl" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Details Modal uses createPortal to escape framer-motion transform clipping */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedProject && selectedProject.results && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-5xl w-full max-h-[90vh] overflow-y-auto relative my-8 !bg-white/95"
              >
                <div className="sticky top-0 z-50 flex justify-between items-center p-8 border-b border-slate-50 bg-white/95 backdrop-blur-xl">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">{selectedProject.title} - <span className="text-gradient uppercase">Results</span></h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all cursor-pointer z-50 border-slate-100"
                  >
                    <HiX className="text-2xl" />
                  </button>
                </div>

                <div className="p-10 md:p-14">
                  <div className="mb-14">
                    <h4 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">Performance Summary</h4>
                    <p className="text-slate-600 leading-relaxed text-xl font-medium">
                      {selectedProject.results.metrics}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 mb-10">
                    {selectedProject.results.images.map((img, idx) => (
                      <div key={idx} className="glass p-6 flex flex-col items-center group rounded-3xl border-slate-100 bg-slate-50/30">
                        <div className="w-full bg-white rounded-2xl overflow-hidden mb-6 relative aspect-[4/3] flex items-center justify-center shadow-inner">
                          <img 
                            src={img.src} 
                            alt={img.alt} 
                            className="max-w-[95%] max-h-[95%] object-contain group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                        <p className="text-[var(--color-primary)] font-bold text-center text-lg">{img.alt}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-14">
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-black transition-all transform hover:-translate-y-1 shadow-2xl"
                    >
                      <SiGithub className="text-2xl" />
                      View Documentation on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </PageWrapper>
  );
};

export default Projects;
