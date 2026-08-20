// @ts-nocheck
import React from 'react';
import { Mail, ArrowLeft, User } from 'lucide-react';
import { motion } from 'framer-motion';

const team = {
  leadership: [
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
  ],
  core: [
    {
      name: 'Sai Kiran',
      title: 'Sr Data Scientist',
      location: 'India',
    },
    {
      name: 'Raj Mange',
      title: 'AI/ML Developer',
      location: 'India',
    },
    {
      name: 'Ammar Raza',
      title: 'Embedded AI Developer',
      location: 'India',
    },
    {
      name: 'Prasad N',
      title: 'AI/ML Developer',
      location: 'India',
    },
  ],
  interns: [
    {
      name: 'Rahul Halkarni',
      title: 'AI/ML Intern',
      location: 'India',
    },
    {
      name: 'Navyashree',
      title: 'Front End Developer',
      location: 'India',
    },
  ],
};

const TeamSection = ({ title, members }) => (
  <div className="mb-20">
    <h2 className="text-xl font-bold font-space text-[#60A5FA] mb-8 border-b border-white/10 pb-4 tracking-wider uppercase">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 backdrop-blur-sm transition-all duration-500 overflow-hidden"
        >
          {/* Card hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex gap-6 items-center relative z-10">
            {/* Avatar Placeholder with glowing effect */}
            <div className="w-16 h-16 flex-shrink-0 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(66,140,252,0.3)] transition-all duration-500">
              <User size={24} className="text-white/40 group-hover:text-primary transition-colors" />
            </div>
            
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-bold text-white mb-1 font-space group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">
                  {member.title}
                </p>
                <p className="text-xs text-white/60 font-inter">
                  {member.location}
                </p>
              </div>
            </div>
          </div>

          {/* Action area */}
          <div className="mt-4 pt-3 border-t border-white/5 flex justify-end relative z-10">
            <a
              href="#"
              className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary"
            >
              <Mail size={12} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function TeamPage({ onBack }) {
  return (
    <div className="bg-black text-white min-h-screen py-32 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-primary transition-colors mb-12 border border-white/10 hover:border-primary/50 px-4 py-2 rounded-sm bg-white/5 backdrop-blur-sm"
        >
          <ArrowLeft size={14} />
          BACK TO HOME
        </motion.button>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            OUR STRENGTH
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold font-space text-white mb-6 leading-tight"
          >
            Our Team <span className="text-[#60A5FA]">Strength</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg font-inter max-w-3xl leading-relaxed"
          >
            Meet the experts driving innovation and delivering cutting-edge AI solutions.
          </motion.p>
        </div>

        <TeamSection title="Leadership" members={team.leadership} />
        <TeamSection title="Core Developer Team" members={team.core} />
        <TeamSection title="Interns" members={team.interns} />
      </div>
    </div>
  );
}
