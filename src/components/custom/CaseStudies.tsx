// @ts-nocheck
import React from 'react';
import { ExternalLink } from 'lucide-react';

const cases = [
  {
    title: 'Revolutionizing Radiology in Zurich',
    description: '60% reduction in diagnostic lead times using AI Vision layer implemented across 12 hospitals.',
    visual: 'linear-gradient(135deg, #1E293B, #000000)',
    tag: 'DIAGNOSTICS',
  },
  {
    title: 'Telemedicine at Global Scale',
    description: '200 clinics across 3 continents with unified voice diagnostic engine serving 1.5M patients annually.',
    visual: 'linear-gradient(135deg, #334155, #131313)',
    tag: 'TELEHEALTH',
  },
  {
    title: 'Precision Pharma Distribution',
    description: 'Zero-failure AI oversight for temperature-sensitive biologics using real-time predictive logistics.',
    visual: 'linear-gradient(135deg, #0F172A, #1e1e1e)',
    tag: 'LOGISTICS',
  },
];

const CaseStudies = () => {
  return (
    <section className="py-xxl bg-surface">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <span className="text-label-caps text-primary tracking-widest uppercase">CASE STUDIES</span>
          <h2 className="text-headline-lg font-grotesk text-white mt-4">AI in Action — Real Healthcare Outcomes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cases.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div 
                className="h-[300px] rounded-card mb-8 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 flex items-center justify-center"
                style={{ background: item.visual }}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={48} />
              </div>
              <span className="text-label-caps text-primary mb-4 block">{item.tag}</span>
              <h3 className="text-headline-md font-grotesk text-white mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-body-md text-[#8b919f] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
