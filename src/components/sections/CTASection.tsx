import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 px-6 lg:px-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/20 blur-[150px] rounded-full opacity-30" />
      </div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[40px] lg:text-[80px] font-bold text-white mb-10 leading-[1.1] tracking-tighter">
            Initialize Your<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#2DD4BF]">Quantum Architecture</span>
          </h2>
          
          <p className="text-white/70 text-base lg:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
            Join the ecosystem of visionaries building the next layer of human-machine intelligence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-8">
            <button className="w-full sm:w-auto bg-[#60A5FA] text-[#1E3A8A] font-inter font-bold px-12 py-5 rounded-sm tracking-widest uppercase text-xs hover:bg-[#93C5FD] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(96,165,250,0.3)]">
              GET STARTED NOW <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto border border-white/10 bg-white/5 text-white font-inter font-bold px-12 py-5 rounded-sm tracking-widest uppercase text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              TALK TO AN ARCHITECT
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
