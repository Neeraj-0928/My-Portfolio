import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

const PageWrapper = ({ children, className = "", id }) => {
  return (
    <motion.div
      id={id}
      initial="initial"
      whileInView="in"
      viewport={{ once: true, margin: "-100px" }}
      variants={pageVariants}
      className={`pt-24 pb-12 px-6 max-w-7xl mx-auto w-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
