// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    tag: 'AI-POWERED AGENTS',
    headline: 'Autonomous Agents That Think, Act & Heal',
    sub: 'Deploy intelligent clinical agents that handle triage, scheduling, diagnostics, and patient communication — 24/7, without fatigue.',
    visual: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#acc7ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#428CFC" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#grad1)" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const x = 200 + 100 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 100 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                fill="#acc7ff"
                animate={{ r: [8, 12, 8] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="#428CFC"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="12" fill="#428CFC" className="qubit" />
      </svg>
    ),
  },
  {
    tag: 'GENERATIVE INTELLIGENCE',
    headline: 'From Raw Data to Clinical Insight — Instantly',
    sub: 'LLM-powered tools that write clinical notes, summarize diagnostics, generate reports, and surface evidence — in seconds.',
    visual: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {[...Array(8)].map((_, i) => (
          <motion.rect
            key={i}
            x="100"
            y={100 + i * 25}
            width="200"
            height="15"
            rx="4"
            fill="#acc7ff"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: [0, 200, 180], opacity: [0, 0.4, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
        <motion.path
          d="M50,300 Q200,50 350,300"
          stroke="#428CFC"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    tag: 'VOICE & CONVERSATIONAL AI',
    headline: 'AI That Listens, Understands & Responds',
    sub: 'Multilingual voice assistants and intelligent chatbots for patient intake, symptom triage, and real-time teleconsultation support.',
    visual: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <g transform="translate(200, 200)">
          {[...Array(12)].map((_, i) => (
            <motion.rect
              key={i}
              x={i * 15 - 90}
              y="-20"
              width="8"
              height="40"
              fill="#acc7ff"
              animate={{ height: [20, 60, 20], y: [-10, -30, -10] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </g>
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          stroke="#428CFC"
          strokeWidth="1"
          fill="none"
          animate={{ r: [100, 120, 100], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    ),
  },
  {
    tag: 'RESEARCH INTELLIGENCE',
    headline: 'Accelerate Discovery. Compress Timelines.',
    sub: 'AI-powered clinical research platform that automates hypothesis generation, literature analysis, and biomarker identification.',
    visual: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <g>
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={i}
              cx={150 + Math.random() * 100}
              cy={150 + Math.random() * 100}
              r="10"
              fill="#428CFC"
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 40 - 20, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          ))}
          <motion.path
            d="M150,150 L250,250 M150,250 L250,150 M200,100 L200,300"
            stroke="#acc7ff"
            strokeWidth="1"
            opacity="0.3"
          />
        </g>
      </svg>
    ),
  },
  {
    tag: 'CLINICAL AI PLATFORM',
    headline: 'End-to-End AI for the Modern Health System',
    sub: 'Integrated diagnostic, patient management, and care coordination AI — built for hospitals, clinics, and telemedicine providers at scale.',
    visual: (
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <rect x="50" y="50" width="300" height="200" rx="10" stroke="#acc7ff" strokeWidth="2" fill="none" opacity="0.5" />
        <motion.line x1="70" y1="200" x2="330" y2="200" stroke="#428CFC" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity }} />
        <rect x="70" y="80" width="40" height="40" fill="#acc7ff" opacity="0.3" />
        <rect x="130" y="80" width="180" height="10" fill="#acc7ff" opacity="0.2" />
        <rect x="130" y="100" width="140" height="10" fill="#acc7ff" opacity="0.2" />
      </svg>
    ),
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen bg-[#131313] flex items-center overflow-hidden">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, rgba(66,140,252,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 w-full pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cyan qubit" />
                  <span className="text-label-caps text-cyan">{slides[current].tag}</span>
                </div>
                
                <h1 className="text-display-xl font-grotesk text-white mb-6 leading-[1.1]">
                  {slides[current].headline}
                </h1>
                
                <p className="text-body-lg font-manrope text-secondary mb-10 max-w-xl">
                  {slides[current].sub}
                </p>

                <div className="flex items-center space-x-8 mb-10 text-[#8b919f] font-inter text-sm">
                  <span>14 Projects</span>
                  <span className="w-1 h-1 rounded-full bg-[#8b919f]" />
                  <span>6 Specialties</span>
                  <span className="w-1 h-1 rounded-full bg-[#8b919f]" />
                  <span>500+ Providers</span>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 rounded-btn bg-gradient-to-br from-[#428CFC] to-[#78A8FF] text-white font-manrope font-semibold hover:shadow-[0_0_24px_rgba(66,140,252,0.4)] transition-all">
                    Explore Solutions
                  </button>
                  <button className="px-8 py-4 rounded-btn border border-outline-variant text-white font-manrope font-semibold hover:bg-white/5 transition-all">
                    View Case Studies
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Visual */}
          <div className="hidden lg:flex justify-center items-center h-[500px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full max-w-[500px]"
                >
                  {slides[current].visual}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center space-x-6 z-20">
        <button onClick={prev} className="text-white/50 hover:text-white transition-colors">
          <ChevronLeft size={32} />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
            />
          ))}
        </div>
        <button onClick={next} className="text-white/50 hover:text-white transition-colors">
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;
