import React from 'react';
import { motion } from 'framer-motion';
import PageWrapper from './PageWrapper';

const About = () => {
  return (
    <PageWrapper id="about" className="py-24">
      <section className="relative w-full">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">About <span className="text-gradient">Me</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start max-w-6xl mx-auto">
            {/* Image Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/5 flex justify-center"
            >
              <div className="relative w-72 h-80 md:w-96 md:h-[450px] rounded-3xl overflow-hidden glass p-3 border border-[var(--color-primary)]/20 group shadow-xl shadow-cyan-500/5 hover:shadow-cyan-500/15 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none rounded-3xl"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}profile.jpg`} 
                  alt="Neeraj S" 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-1000 group-hover:scale-110" 
                />
              </div>
            </motion.div>

            {/* Information Side */}
            <div className="w-full lg:w-3/5 flex flex-col gap-10">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card p-10 md:p-14 relative overflow-hidden group border-white/40 shadow-2xl shadow-slate-200/50"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-[80px] group-hover:bg-[var(--color-primary)]/10 transition-colors duration-700"></div>
                <h3 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-4">
                  <span className="text-[var(--color-primary)]">{"//"}</span> My Journey
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
                  I am an analytical Engineering student specializing in <strong className="text-slate-900 font-bold border-b-2 border-[var(--color-primary)]/30">AI & Data Science</strong> with strong foundations in Machine Learning, Deep Learning, and Data Analytics.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  I am skilled in Python and Power BI for building intelligent, data-driven solutions and optimizing intelligent systems. Currently pursuing my B.E. at SDM Institute of Technology (Batch of 2027).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  { label: 'Data Analysis', icon: '📊' },
                  { label: 'Machine Learning', icon: '🤖' },
                  { label: 'Smart Systems', icon: '🧠' },
                  { label: 'Problem Solving', icon: '💡' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass-card p-6 md:p-8 text-center border-white/50 hover:border-[var(--color-primary)]/40 transition-all group flex flex-col items-center justify-center gap-4 hover:shadow-cyan-500/5"
                  >
                    <div className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-md">{item.icon}</div>
                    <h4 className="font-bold text-slate-800 text-xs md:text-sm uppercase tracking-wider">{item.label}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default About;
