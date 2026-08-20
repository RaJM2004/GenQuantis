// @ts-nocheck
import React from 'react';

const OurApproach = () => {
  return (
    <section id="approach" className="py-xxl bg-[#1f1f1f]">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="pt-12 border-t-2 border-[#428CFC]">
            <h2 className="text-headline-lg font-grotesk text-white max-w-md">
              How We Build AI for Healthcare
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-body-lg font-manrope text-secondary leading-relaxed">
              <strong className="text-white block mb-2">Clinical Immersion</strong>
              We don't just write code; we shadow specialists. Our engineers spend time in clinics to understand the micro-frictions that slow down care delivery.
            </p>
            <p className="text-body-lg font-manrope text-secondary leading-relaxed">
              <strong className="text-white block mb-2">Digital Twin Modeling</strong>
              Every AI deployment starts with a Digital Twin simulation of your clinical workflow, ensuring 99.9% reliability before a single patient is touched.
            </p>
            <p className="text-body-lg font-manrope text-secondary leading-relaxed">
              <strong className="text-white block mb-2">Data Integrity</strong>
              Our platform uses a HIPAA-compliant audit ledger to track every AI decision, providing full transparency and accountability for clinical outcomes.
            </p>
            <p className="text-body-lg font-manrope text-secondary leading-relaxed">
              <strong className="text-white block mb-2">EHR Integration</strong>
              We build a frictionless layer that sits on top of your existing EHR, augmenting clinicians without forcing them to learn new, complex software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
