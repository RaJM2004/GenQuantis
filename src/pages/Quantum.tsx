import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { StackSection } from '../components/sections/StackSection';
import { Applications } from '../components/sections/Applications';
import { GlobalMap } from '../components/sections/GlobalMap';
import { Roadmap } from '../components/sections/Roadmap';
import { SystemTolerances } from '../components/sections/SystemTolerances';
import { IntelligenceSection } from '../components/sections/IntelligenceSection';
import { EnterpriseSection } from '../components/sections/EnterpriseSection';
import { LifeScienceSection } from '../components/sections/LifeScienceSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { CTASection } from '../components/sections/CTASection';
import { motion } from 'framer-motion';

export const Quantum = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 relative">
      {/* Dynamic Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 0], 
            y: [0, 150, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-cyan/10 blur-[180px] rounded-full" 
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <StackSection />
        
        {/* Expanded Ecosystem Sections */}
        <IntelligenceSection />
        <EnterpriseSection />
        <LifeScienceSection />
        <SecuritySection />

        <Applications />
        <GlobalMap />
        <Roadmap />
        <SystemTolerances />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};
