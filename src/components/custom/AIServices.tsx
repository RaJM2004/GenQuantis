// @ts-nocheck
import React from 'react';
import { Bot, Sparkles, Mic, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI Agents',
    tag: 'AUTONOMOUS AGENTS',
    icon: <Bot className="text-primary" size={32} />,
    description: 'Autonomous clinical agents that manage triage, scheduling, follow-ups, and patient communication with clinician-level accuracy.',
  },
  {
    title: 'Generative AI',
    tag: 'LARGE LANGUAGE MODELS',
    icon: <Sparkles className="text-primary" size={32} />,
    description: 'Custom LLMs trained on proprietary medical literature to generate accurate patient reports and therapeutic summaries.',
  },
  {
    title: 'Conversational AI / Voice AI',
    tag: 'FRICTIONLESS INTERFACES',
    icon: <Mic className="text-primary" size={32} />,
    description: 'Voice-activated interfaces for frictionless operating rooms and natural language teleconsultation interactions.',
  },
];

const AIServices = () => {
  return (
    <section id="services" className="py-xxl bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <span className="text-label-caps text-primary tracking-widest uppercase">WHAT WE BUILD</span>
          <h2 className="text-headline-lg font-grotesk text-white mt-4">Our AI Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-card group hover:shadow-[0_0_30px_rgba(172,199,255,0.1),inset_0_0_20px_rgba(172,199,255,0.08)] transition-all duration-500"
            >
              <div className="mb-8">{service.icon}</div>
              <span className="text-label-caps text-secondary mb-4 block">{service.tag}</span>
              <h3 className="text-headline-md font-grotesk text-white mb-4">{service.title}</h3>
              <p className="text-body-md text-on-surface-variant mb-8 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-primary font-manrope font-semibold hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="ml-2" size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIServices;
