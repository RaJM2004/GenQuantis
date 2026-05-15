import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LifeScienceSection = () => {
  return (
    <section id="lifescience" className="bg-black text-white selection:bg-primary/30 border-t border-white/5">
      {/* Immersive Session: Biologics Digital Twin */}
      <div className="relative min-h-screen flex flex-col lg:flex-row items-stretch overflow-hidden">
        
        {/* Visual Column */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0jUZ4gRkxazF0hBTUb7BDyNwsmfwToGiFOtjDqwXc84oThGxb7NuV8ci84HVsrsbzoQajO3WbepMNauQh493xhnEaTCKSapqAwJcI4Hd6fOzSpro1-anGc22waKi7TxorhGgIkbHyymgWlSvMrdnCcKRMioX7J2FO8nkbA91txom0hXK4gVTkCo77pC5q8wPQHdIgXydbANCWnQNHyXFIFn-biFgdwIV6QxmKXtEfNeo5vKQTbcNrKyTaampTDK6n-_DCVtg75E"
              className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              alt="Biologics AI Digital Twin"
            />
          </motion.div>
          
          {/* Visual HUD Details */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute top-12 left-12 flex flex-col gap-4">
            <div className="w-20 h-20 border border-white/10 flex items-center justify-center backdrop-blur-xl bg-white/5 rounded-2xl">
              <span className="text-white font-space text-3xl font-bold opacity-20">01</span>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-4 text-primary mb-2">
              <Activity size={16} />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">94% ACCURACY IN PREDICTIVE SYNTHESIS</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '94%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-primary"
              />
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-32 bg-black relative">
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <div className="text-[120px] font-bold text-white font-space leading-none tracking-tighter">
              DTW
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-4 text-primary mb-6">
              <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                <Brain size={24} />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] font-inter">
                GENOMIC FIDELITY
              </span>
            </div>

            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-8 tracking-tighter font-space leading-none">
              Biologics AI <br />
              <span className="text-primary">Digital Twin.</span>
            </h2>
            
            <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-12 font-inter font-light max-w-xl">
              Create exact digital replicas of organic systems. Our AI-driven twins predict molecular interactions and systemic responses, significantly reducing R&D cycles for therapeutic biologics.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-16">
              {[
                "Quantum Simulation",
                "Molecular Mapping",
                "Predictive Synthesis",
                "Sub-atomic HUD"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/40 group">
                  <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-all">
                    <CheckCircle className="text-primary" size={14} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{feature}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/innovations"
              className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-12 py-5 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-primary hover:text-black hover:border-primary transition-all group/btn"
            >
              EXPLORE INNOVATIONS <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
