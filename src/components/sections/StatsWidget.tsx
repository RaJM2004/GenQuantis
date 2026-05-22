import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export const StatsWidget = () => {
  return (
    <GlassCard showBrackets className="p-8">
      <div className="flex justify-between items-center mb-10 border-b border-white/5 pb-6">
        <div className="font-space text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">
          CORE NEURAL ENTANGLEMENT
        </div>
        <div className="text-[10px] font-bold text-primary">LIVE DATA FEED</div>
      </div>
      
      {/* Technical Bar Chart */}
      <div className="h-56 flex items-end gap-2 mb-12">
        {[40, 60, 30, 80, 50, 70, 90, 60, 80, 40, 60].map((h, i) => (
          <motion.div 
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse" }}
            className="flex-1 bg-gradient-to-t from-primary/5 to-primary/30 border-t border-primary/40 shadow-[0_0_10px_rgba(66,140,252,0.1)]"
          />
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className="font-inter text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">
            STABILITY
          </div>
          <div className="text-3xl font-space font-bold text-white">99.9%</div>
        </div>
        <div>
          <div className="font-inter text-[10px] font-bold tracking-widest uppercase text-white/40 mb-1">
            FLUX RATE
          </div>
          <div className="text-3xl font-space font-bold text-cyan">1.2e-4</div>
        </div>
      </div>
    </GlassCard>
  );
};
