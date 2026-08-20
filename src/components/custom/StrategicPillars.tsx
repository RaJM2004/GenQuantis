// @ts-nocheck
import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Deploy AI in Clinical Workflows',
    description: 'Embed intelligent automation into existing hospital systems without disrupting care delivery.',
  },
  {
    number: '02',
    title: 'Reshape Diagnostic Functions',
    description: 'Augment radiologists, pathologists, and clinicians with AI co-pilots that surface insights faster.',
  },
  {
    number: '03',
    title: 'Build New Care Models',
    description: 'Design AI-native telemedicine products, remote monitoring systems, and predictive care pathways.',
  },
];

const StrategicPillars = () => {
  return (
    <section className="py-xxl bg-[#131313]">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`p-12 relative ${
                i < pillars.length - 1 ? 'border-r border-white/5 md:border-r' : ''
              } ${i > 0 ? 'md:border-l-0' : ''}`}
            >
              <div className="text-display-xl font-grotesk text-primary mb-8 opacity-50">
                {pillar.number}
              </div>
              <h3 className="text-headline-md font-grotesk text-white mb-6 leading-tight">
                {pillar.title}
              </h3>
              <p className="text-body-md text-[#8b919f] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
