import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';
import PageWrapper from './PageWrapper';

const Resume = () => {
  return (
    <PageWrapper id="resume" className="py-24 mb-10">
      <section className="relative w-full">
        <div className="w-full text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-14 relative overflow-hidden group border-white/40 shadow-2xl shadow-slate-200/50"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] group-hover:bg-[var(--color-primary)]/10 transition-colors duration-1000"></div>
            
            <h2 className="text-5xl font-black mb-6 relative z-10 text-slate-900 tracking-tight">My <span className="text-gradient uppercase">Resume</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full mb-16 relative z-10"></div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mt-12 relative z-10 text-left">
            {/* Experience & Education */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="glass-card p-10 rounded-3xl border-transparent relative overflow-hidden group hover:border-[var(--color-primary)]/20 transition-all shadow-xl shadow-slate-200/50">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[var(--color-primary)]"></div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Data Analytics Intern</h3>
                <p className="text-[var(--color-primary)] font-bold text-lg mb-6 uppercase tracking-wider">Elevate Labs | 2024 - 2025</p>
                <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 font-medium text-lg leading-relaxed">
                  <li>Collected, cleaned, and interpreted structured datasets using Python and Excel to derive actionable insights.</li>
                  <li>Built interactive Power BI and Tableau dashboards to visualize key performance metrics for stakeholders.</li>
                  <li>Strengthened SQL querying skills for efficient data extraction, transformation, and manipulation.</li>
                </ul>
              </div>

              <div className="glass-card p-10 rounded-3xl border-transparent relative overflow-hidden group hover:border-[#1e81b0]/20 transition-all shadow-xl shadow-slate-200/50">
                <div className="absolute top-0 left-0 w-2.5 h-full bg-[#1e81b0]"></div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">B.E. in AI & Data Science</h3>
                <p className="text-[#1e81b0] font-bold text-lg mb-6 uppercase tracking-wider">SDM Institute of Technology | 2027</p>
                <ul className="list-disc list-outside ml-5 text-slate-600 space-y-4 font-medium text-lg leading-relaxed">
                  <li>Current CGPA: <span className="text-slate-900 font-bold bg-[#1e81b0]/5 px-2 rounded">8.8</span></li>
                  <li>Relevant coursework: Machine Learning, Deep Learning, Data Structures, DB Management, Statistics.</li>
                </ul>
              </div>
            </motion.div>

            {/* Download Link Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 rounded-3xl border-cyan-500/20 flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-2xl shadow-cyan-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
              
              <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700 bg-white/80 shadow-md">
                <HiDownload className="text-5xl text-[var(--color-primary)]" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Full Resume</h3>
              <p className="text-slate-600 mb-12 max-w-md relative z-10 text-xl font-medium leading-relaxed">
                Interested in diving deeper into my background? Download my full length resume for my complete academic and project history.
              </p>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf" 
                download="Neeraj_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-12 py-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-black rounded-2xl transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 relative z-10 text-xl uppercase tracking-widest"
              >
                <HiDownload className="text-3xl" />
                Download PDF
              </motion.a>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;
