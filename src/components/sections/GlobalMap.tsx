import React from 'react';
import { motion } from 'framer-motion';

export const GlobalMap = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Global Quantum Entanglement
        </h2>
        <p className="text-on-surface-variant text-sm max-w-2xl mx-auto opacity-70 leading-relaxed">
          Distributed nodes processing in absolute synchronization across the globe, achieving zero-latency data coherence.
        </p>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video bg-[#050810] rounded-2xl border border-white/5 overflow-hidden shadow-2xl"
        >
          {/* World Map Monochromatic */}
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg" 
            className="w-full h-full object-contain opacity-10 grayscale invert brightness-50"
            alt="World Map"
          />
          
          {/* Atmospheric Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,140,252,0.1)_0%,transparent_70%)]" />

          {/* Connection Lines (Curved) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            <motion.path
              d="M 200 150 Q 400 100 600 180"
              fill="none"
              stroke="rgba(6,182,212,0.3)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M 350 120 Q 500 140 600 180"
              fill="none"
              stroke="rgba(6,182,212,0.3)"
              strokeWidth="1"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </svg>

          {/* Nodes */}
          {/* North America */}
          <div className="absolute top-[38%] left-[24%]">
            <div className="w-3 h-3 bg-cyan rounded-full shadow-[0_0_15px_#06B6D4]" />
            <motion.div 
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-cyan rounded-full"
            />
          </div>

          {/* Europe */}
          <div className="absolute top-[32%] left-[46%]">
            <div className="w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_15px_#428CFC]" />
          </div>

          {/* Asia */}
          <div className="absolute top-[42%] left-[78%]">
            <div className="w-3 h-3 bg-cyan rounded-full shadow-[0_0_15px_#06B6D4]" />
            <motion.div 
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              className="absolute inset-0 bg-cyan rounded-full"
            />
          </div>

          {/* Legend */}
          <div className="absolute bottom-8 left-8 flex gap-6 bg-black/40 backdrop-blur-md border border-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_8px_#06B6D4]" />
              <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase">PRIME NODE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_#428CFC]" />
              <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase">RELAY NODE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
