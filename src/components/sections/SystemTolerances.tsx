import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldCheck, Gauge, Zap, Search, Box, ChevronRight } from 'lucide-react';

const toleranceData = [
  {
    id: "01",
    vector: "Operational Stability",
    technicalName: "Qubit Coherence Time",
    metric: "144.2 µs",
    percentage: 92,
    status: "OPTIMAL",
    color: "#428CFC",
    icon: <Activity size={18} />,
    businessImpact: "Ensures long-range computational sequences remain uninterrupted and error-free during complex simulations."
  },
  {
    id: "02",
    vector: "Processing Accuracy",
    technicalName: "Gate Fidelity",
    metric: "99.87%",
    percentage: 99,
    status: "STABLE",
    color: "#2DD4BF",
    icon: <ShieldCheck size={18} />,
    businessImpact: "Guarantees the mathematical integrity of every neural operation, preventing drift in high-stakes generative models."
  },
  {
    id: "03",
    vector: "Environmental Integrity",
    technicalName: "Thermal Noise Floor",
    metric: "15 mK",
    percentage: 85,
    status: "NOMINAL",
    color: "#A855F7",
    icon: <Gauge size={18} />,
    businessImpact: "Maintains a near-zero entropy environment, protecting sensitive quantum states from classical thermal interference."
  },
  {
    id: "04",
    vector: "Real-time Velocity",
    technicalName: "Sync Latency",
    metric: "0.02 ms",
    percentage: 96,
    status: "SYNCED",
    color: "#F472B6",
    icon: <Zap size={18} />,
    businessImpact: "Delivers instantaneous synchronization between global data centers and the 6<sup className='text-[0.6em] ml-0.5 uppercase'>th</sup> Layer orchestration engine."
  },
];

export const SystemTolerances = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #428CFC 1px, transparent 1px), linear-gradient(to bottom, #428CFC 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-primary font-inter text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_TOLERANCE_MATRIX
            </motion.div>
            <h2 className="text-4xl lg:text-[56px] font-bold text-white tracking-tighter font-space leading-tight mb-4">
              Operational <span className="text-white/30">Readout</span>
            </h2>
            <p className="text-white/40 text-sm max-w-xl mx-auto leading-relaxed">
              Monitoring the high-fidelity stability of the 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer fabric. These metrics represent the core reliability of our quantum-classical hybrid orchestration.
            </p>
          </div>

          {/* Interactive Matrix */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Metric Selection Grid */}
            <div className="grid gap-4">
              {toleranceData.map((item, i) => (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveTab(i)}
                  className={`relative p-8 rounded-xl cursor-pointer transition-all duration-500 border ${activeTab === i ? 'bg-white/[0.04] border-primary/40 shadow-[0_0_30px_rgba(66,140,252,0.1)]' : 'bg-transparent border-white/5 hover:border-white/20'}`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${activeTab === i ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg font-space mb-1 tracking-tight">{item.vector}</h3>
                        <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest font-inter">
                          {item.technicalName}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl lg:text-2xl font-bold text-white font-space">
                        {item.metric}
                      </div>
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-[9px] font-bold text-white/20 tracking-widest uppercase">
                          {item.status}
                        </span>
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: item.color }} />
                      </div>
                    </div>
                  </div>

                  {/* Subtle progress indicator */}
                  <div className="absolute bottom-0 left-0 h-[1px] bg-white/5 w-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: activeTab === i ? '100%' : '0%' }}
                      className="h-full bg-primary/40"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Insight Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-10 lg:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: toleranceData[activeTab].color, opacity: 0.3 }} />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase font-space">Impact Assessment</span>
                    <ChevronRight size={14} className="text-white/20" />
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-space leading-tight">
                    Why {toleranceData[activeTab].vector} Matters
                  </h4>
                  <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-12 font-inter">
                    {toleranceData[activeTab].businessImpact}
                  </p>

                  <div className="space-y-6 pt-8 border-t border-white/5">
                    <div className="flex justify-between items-center">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Platform Efficiency</span>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${toleranceData[activeTab].percentage}%` }}
                            className="h-full bg-primary"
                          />
                        </div>
                        <span className="text-white font-bold font-space text-sm">{toleranceData[activeTab].percentage}%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Protocol Sync</span>
                      <span className="text-white font-bold font-space text-sm uppercase">L6_RESONANCE_OK</span>
                    </div>
                  </div>
                </div>

                {/* Abstract background detail */}
                <div className="absolute bottom-[-5%] right-[-5%] opacity-[0.03]">
                  {toleranceData[activeTab].icon}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
