import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const AbstractAIModel = () => {
  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      {/* Outer abstract shape (wireframe) */}
      <Sphere args={[2.2, 32, 32]}>
        <meshStandardMaterial color="#0891b2" wireframe opacity={0.15} transparent />
      </Sphere>
      
      {/* Dynamic Liquid Core */}
      <Sphere args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#06b6d4"
          attach="material"
          distort={0.5}
          speed={4}
          roughness={0}
          metalness={1}
          emissive="#3b82f6"
          emissiveIntensity={1.2}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Internal Hot Core for depth */}
      <Sphere args={[0.6, 32, 32]}>
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#8b5cf6" 
          emissiveIntensity={2} 
          transparent 
          opacity={0.8} 
        />
      </Sphere>
    </Float>
  );
};

const Hero = () => {
  // Typing effect animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const tagline = "Turning data into insights and intelligent systems";

  return (
    <PageWrapper id="home" className="flex items-center justify-center min-h-[90vh] relative">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 -z-0 pointer-events-auto h-[110%] w-full">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 10]} intensity={2} />
          <pointLight position={[-10, 10, -10]} intensity={1.5} color="#06b6d4" />
          <pointLight position={[0, -10, 5]} intensity={1} color="#0284c7" />
          <Suspense fallback={null}>
            <AbstractAIModel />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        </Canvas>
      </div>

      <div className="max-w-4xl mx-auto text-center z-10 pointer-events-none mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-6 py-2 rounded-full border border-[var(--color-primary)]/20 glass text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest"
        >
          Welcome to my portfolio
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-8xl font-black mb-6 tracking-tighter text-slate-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm <span className="text-gradient">Neeraj S.</span>
        </motion.h1>

        <motion.h2 
          className="text-xl md:text-3xl text-slate-700 mb-6 font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Data Analyst & Machine Learning Enthusiast
        </motion.h2>

        <motion.div 
          className="text-lg md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 h-8 font-medium leading-relaxed"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {tagline.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6 pointer-events-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link 
            to="/projects" 
            className="px-10 py-4 w-full sm:w-auto rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="px-10 py-4 w-full sm:w-auto rounded-xl glass hover:bg-[#0891b2]/5 font-bold transition-all border border-[var(--color-primary)]/30 transform hover:scale-105 text-[var(--color-primary)]"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Hero;
