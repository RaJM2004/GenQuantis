// @ts-nocheck
import React from 'react';
import { Mail, ArrowUpRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Ashwin Kumar T S',
    title: 'Founder and CEO',
    location: 'India',
  },
  {
    name: 'Ananya P',
    title: 'Co-Founder and Director',
    location: 'India',
  },
];

export default function Leaders({ onSeeMore }) {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              LEADERSHIP TEAM
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold font-space text-white mb-6 leading-tight"
            >
              Meet Our <span className="text-[#60A5FA]">Artificial Intelligence</span> Team
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg font-inter max-w-2xl leading-relaxed"
            >
              Ushering in the future of AI in business, our AI team and industry experts ensure that clients have the full range of expertise to drive end-to-end AI business transformation.
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={onSeeMore}
            className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:text-primary transition-colors border border-white/10 hover:border-primary/50 px-6 py-3 rounded-sm bg-white/5 backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(66,140,252,0.2)]"
          >
            SEE MORE EXPERTS
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 backdrop-blur-sm transition-all duration-500 overflow-hidden"
            >
              {/* Card hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-6 items-center relative z-10">
                {/* Avatar Placeholder with glowing effect */}
                <div className="w-20 h-20 flex-shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(66,140,252,0.3)] transition-all duration-500">
                  <User size={28} className="text-white/40 group-hover:text-primary transition-colors" />
                </div>
                
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 font-space group-hover:text-primary transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                      {leader.title}
                    </p>
                    <p className="text-sm text-white/60 font-inter">
                      {leader.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action area */}
              <div className="mt-6 pt-4 border-t border-white/5 flex justify-end relative z-10">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary"
                >
                  <Mail size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
