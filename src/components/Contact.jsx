import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import PageWrapper from './PageWrapper';

const Contact = () => {
  const contactInfo = [
    { 
      label: 'Email', 
      value: 'sanjayniru1@gmail.com', 
      icon: <FiMail />,
      href: 'mailto:sanjayniru1@gmail.com'
    },
    { 
      label: 'Phone', 
      value: '+91 8217082348', 
      icon: <FiPhone />,
      href: 'tel:+918217082348'
    },
    { 
      label: 'LinkedIn', 
      value: 'neeraj-s-9831b2370', 
      icon: <FiLinkedin />,
      href: 'https://linkedin.com/in/neeraj-s-9831b2370'
    },
    { 
      label: 'GitHub', 
      value: 'Neeraj-0928', 
      icon: <FiGithub />,
      href: 'https://github.com/Neeraj-0928'
    }
  ];

  return (
    <PageWrapper id="contact" className="py-24">
      <section className="relative w-full">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Get In <span className="text-gradient">Touch</span></h2>
            <div className="w-24 h-1.5 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex flex-col gap-6"
            >
              {contactInfo.map((info, index) => (
                <a 
                  key={info.label} 
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 flex items-center gap-6 group hover:translate-x-3 transition-all duration-500 hover:shadow-cyan-500/10 border-white/40"
                >
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl text-[var(--color-primary)] group-hover:scale-110 transition-all duration-500 bg-white/80 shadow-md">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{info.label}</h4>
                    <p className="text-slate-800 font-bold text-sm md:text-base break-all group-hover:text-[var(--color-primary)] transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 glass-card p-10 md:p-14 relative overflow-hidden group border-white/40 shadow-2xl shadow-slate-200/50"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[var(--color-primary)]/5 rounded-full blur-[80px] group-hover:bg-[var(--color-primary)]/10 transition-colors duration-1000"></div>
              
              <form className="flex flex-col gap-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="glass px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 border-white/60 bg-white/40 text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="glass px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 border-white/60 bg-white/40 text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium transition-all"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows="5" 
                    placeholder="How can I help you?"
                    className="glass px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 border-white/60 bg-white/40 text-slate-800 font-bold placeholder:text-slate-400 placeholder:font-medium transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="px-12 py-5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-black rounded-2xl transition-all shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest text-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
