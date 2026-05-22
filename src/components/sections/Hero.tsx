import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatsWidget } from './StatsWidget';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-24 pt-32 lg:pt-32 overflow-hidden bg-transparent">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJZj2HdBavT4FPfssWURiDmxPT44dN4BbFgFJtbufphFabWT90JeuG-ciFlOcl9axsK6k7gd89fuEGOvrxLaLEjaXHJsw9004q6TT4cmlZ09RdSfIhZk2d6N469dPZMVChVaMuLAnkLMfpwnzqC4IEvYcj4Sxyon0NnFeIjX2U8s6ywhsTRvp5zPyzpR-51uDW1xZ8EQPjFpbybZ2zEAIRMMC1HxLB972AN3nG0mfutGvrgLNRfQdnznk9xLJl06uY1yPXfpxZmyQ"
          alt="Quantum Vortex Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-8 lg:mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            SYSTEM OPTIMAL: 99.999% QUBIT COHERENCE
          </motion.div>

          <h1 className="text-[56px] lg:text-[110px] font-bold mb-8 lg:mb-10 text-white leading-[1] lg:leading-[0.85] tracking-tighter">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>6<span className="text-[0.4em] ml-0.5 relative -top-[1.2em]">th</span> Layer</motion.span><br />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#7EB4FF] to-[#00D2FF]">Quantum</motion.span><br />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] to-[#2DD4BF]">Intelligence</motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8 }}
            className="text-white text-base lg:text-lg max-w-xl mb-12 lg:mb-16 leading-relaxed"
          >
            Transcend binary limits. GenQuantis provides architectural clarity for enterprise visionaries and research architects operating at the intersection of high-stakes AI and quantum physics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 lg:gap-6"
          >
            <Link
              to="/contact"
              className="group bg-[#60A5FA] text-[#1E3A8A] font-inter font-bold px-10 py-5 rounded-sm tracking-widest uppercase text-xs hover:bg-[#93C5FD] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(96,165,250,0.4)]"
            >
              INITIALIZE CORE <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <button className="border border-white/10 bg-white/5 text-white font-inter font-bold px-10 py-5 rounded-sm tracking-widest uppercase text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
              <PlayCircle size={18} /> VIEW SIMULATION
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="relative lg:pl-12 w-full max-w-lg mx-auto lg:mx-0"
        >
          {/* Decorative Glow behind Stats */}
          <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
          <StatsWidget />
        </motion.div>
      </div>
    </section>
  );
};
