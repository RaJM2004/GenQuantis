import React from 'react';
import { motion } from 'framer-motion';
import { Infinity, Sparkles } from 'lucide-react';

export const StackSection = () => {
  return (
    <section id="stack" className="py-24 px-6 lg:px-24 bg-black relative overflow-hidden">
      <div className="container mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-xl text-center lg:text-left"
        >

          <h2 className="text-[36px] lg:text-[56px] font-bold text-white mb-8 leading-[1.2] tracking-tight">
            Decoding the<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan">6<span className="text-[0.4em] ml-0.5 !text-white/90 relative -top-[1em]">th</span> Layer</span> Stack
          </h2>

          <p className="text-white/60 text-base mb-6 leading-relaxed">
            Traditional AI operates on binary constraints—layers 1 through 5 handle basic logic, deep learning, and generative synthesis. The 6<span className="text-[0.5em] ml-0.5 text-primary relative -top-[0.8em]">th</span> Layer introduces quantum entanglement principles into neural network architecture.
          </p>

          <p className="text-white/60 text-base mb-12 leading-relaxed">
            By mapping probabilistic states instead of absolute values, GenQuantis models achieve a conceptual depth previously restricted to theoretical physics.
          </p>

          <div className="space-y-4 text-left">
            {[
              { icon: <Infinity size={24} />, title: "Non-Linear Problem Solving", desc: "Bypasses sequential computation for simultaneous holistic analysis." },
              { icon: <Sparkles size={24} />, title: "Entangled Data Structures", desc: "Data points influence one another instantaneously regardless of distance." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/5 flex gap-5 group hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-space font-bold mb-1 text-sm uppercase tracking-wider">{item.title}</h4>
                  <p className="text-white/40 text-xs">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Diagram Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{
            y: [0, -20, 0],
            rotateY: [0, 360],
          }}
          transition={{
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 30, repeat: Infinity, ease: "linear" },
            opacity: { duration: 1.5 },
            scale: { duration: 1.5, ease: "easeOut" }
          }}
          whileHover={{
            rotateX: 10,
            rotateY: 10,
            scale: 1.08,
            transition: { duration: 0.4 }
          }}
          viewport={{ once: true }}
          className="relative w-full max-w-[900px] mx-auto cursor-pointer perspective-2000"
        >
          <div className="relative group">
            <img
              src="/stack-diagram.png"
              className="w-full h-full object-contain mix-blend-screen"
              alt="6th Layer Stack Framework"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};
