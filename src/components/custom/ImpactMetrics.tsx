// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: 14, label: 'Deployed Systems', suffix: '' },
  { value: 3, label: 'Patients Served', suffix: 'M+' },
  { value: 40, label: 'Faster Diagnostics', suffix: '%' },
  { value: 92, label: 'Accuracy Rate', suffix: '%' },
  { value: 6, label: 'Specialties Covered', suffix: '' },
  { value: 500, label: 'Provider Network', suffix: '+' },
];

const StatCounter = ({ end, duration = 2000, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactMetrics = () => {
  return (
    <section id="impact" className="py-xxl bg-[#2a2a2a] scanning-line relative">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-20 text-center">
          <span className="text-label-caps text-primary tracking-widest uppercase">IMPACT AT SCALE</span>
          <h2 className="text-headline-lg font-grotesk text-white mt-4">Delivering Measurable Outcomes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`text-center px-8 ${
                i % 3 !== 2 ? 'md:border-r border-white/10' : ''
              }`}
            >
              <div className="text-display-xl font-grotesk text-primary mb-4">
                <StatCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-label-caps text-[#8b919f] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
