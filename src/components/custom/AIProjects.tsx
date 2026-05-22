// @ts-nocheck
import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Discovery Platform',
    tag: 'RESEARCH AI',
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
        <path d="M50,100 Q100,20 150,100 T250,100 T350,100" stroke="#acc7ff" fill="none" strokeWidth="2" />
        <circle cx="150" cy="100" r="4" fill="#428CFC" />
        <circle cx="250" cy="100" r="4" fill="#428CFC" />
      </svg>
    ),
  },
  {
    title: 'Life Sciences Hub',
    tag: 'LIFE SCIENCES',
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
        <path d="M100,50 L300,150 M100,150 L300,50" stroke="#acc7ff" strokeWidth="1" />
        <circle cx="200" cy="100" r="40" stroke="#428CFC" fill="none" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Healthcare Solutions',
    tag: 'CLINICAL AI',
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
        <rect x="50" y="50" width="300" height="100" rx="4" stroke="#acc7ff" fill="none" strokeWidth="2" />
        <line x1="50" y1="80" x2="350" y2="80" stroke="#acc7ff" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Precision Robotics',
    tag: 'SURGICAL AI',
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
        <path d="M50,150 L100,50 L200,150 L300,50 L350,150" stroke="#428CFC" fill="none" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Global Consulting',
    tag: 'AI STRATEGY',
    visual: (
      <svg viewBox="0 0 400 200" className="w-full h-full opacity-60">
        {[...Array(20)].map((_, i) => (
          <circle key={i} cx={Math.random() * 400} cy={Math.random() * 200} r="2" fill="#acc7ff" />
        ))}
      </svg>
    ),
  },
];

const AIProjects = () => {
  return (
    <section id="projects" className="py-xxl bg-surface overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 mb-16 flex items-end justify-between">
        <div>
          <span className="text-label-caps text-primary tracking-widest uppercase">OUR WORK</span>
          <h2 className="text-headline-lg font-grotesk text-white mt-4">Pioneering AI Projects</h2>
        </div>
      </div>

      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {projects.map((project, i) => (
          <div
            key={i}
            className="h-[480px] glass-card holographic-border rounded-card p-8 flex flex-col justify-between group hover:scale-[1.02] hover:border-primary/40 transition-all duration-500 cursor-pointer"
          >
            <div>
              <span className="text-label-caps text-primary mb-4 block">{project.tag}</span>
              <h3 className="text-headline-md font-grotesk text-white">{project.title}</h3>
            </div>
            
            <div className="flex-grow flex items-center justify-center py-12">
              {project.visual}
            </div>

            <a
              href="#"
              className="inline-flex items-center text-primary font-manrope font-semibold group-hover:translate-x-2 transition-transform"
            >
              Learn More <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIProjects;
