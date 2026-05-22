import React from 'react';
import { motion } from 'framer-motion';

export const Roadmap = () => {
  const phases = [
    {
      phase: "PHASE 01 / CURRENT",
      title: "Hybrid Entanglement",
      desc: "Classical supercomputing infrastructure mapped with quantum-inspired probabilistic algorithms. Achieving 10x processing speeds on non-linear datasets.",
      align: "left"
    },
    {
      phase: "PHASE 02 / 2025",
      title: "True Qubit Integration",
      desc: "Direct API links to 433-qubit processors. GenQuantis OS acts as the translation layer between enterprise data structures and raw quantum states.",
      align: "right"
    },
    {
      phase: "PHASE 03 / 2027",
      title: "Absolute Supremacy",
      desc: "Fault-tolerant processing capable of rendering full-scale planetary economic models with zero predictive variance.",
      align: "left"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 lg:mb-24">
        <h2 className="text-3xl lg:text-4xl font-bold text-white">Roadmap to Synthesization</h2>
      </div>

      <div className="container mx-auto px-6 lg:max-w-5xl relative">
        {/* Vertical Line */}
        <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
        
        <div className="space-y-16 lg:space-y-24">
          {phases.map((p, i) => (
            <div key={i} className={`relative flex items-center justify-between gap-12 ${p.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: p.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full lg:w-[45%] pl-16 lg:pl-0 ${p.align === 'left' ? 'lg:text-right' : 'lg:text-left'}`}
              >
                <div className="text-primary font-inter text-[10px] font-bold tracking-widest uppercase mb-3 lg:mb-4">{p.phase}</div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">{p.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed opacity-60">{p.desc}</p>
              </motion.div>

              {/* Node on the line */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border border-primary rounded-full z-10 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-cyan shadow-[0_0_10px_#06B6D4]' : i === 1 ? 'bg-primary shadow-[0_0_10px_#428CFC]' : 'bg-white/20'}`} />
              </div>

              <div className="hidden lg:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
