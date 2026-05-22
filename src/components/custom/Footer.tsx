// @ts-nocheck
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 py-xxl">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="font-grotesk font-bold text-2xl tracking-tight text-white mb-6">
              GenQuantis
            </div>
            <p className="text-[#8b919f] font-manrope max-w-sm leading-relaxed">
              Pioneering the 6th layer of quantum intelligence for the next generation of clinical excellence. Specialized in deploying autonomous AI agents for the modern healthcare ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-grotesk font-bold mb-6">Platform</h4>
              <ul className="space-y-4 text-[#8b919f] text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">AI Services</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#use-cases" className="hover:text-primary transition-colors">Use Cases</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-grotesk font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-[#8b919f] text-sm">
                <li><a href="#approach" className="hover:text-primary transition-colors">Our Approach</a></li>
                <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-grotesk font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-[#8b919f] text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-grotesk font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-[#8b919f] text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <div className="text-[#8b919f] text-sm font-manrope">
            © 2026 GenQuantis Intelligence Corp. All rights reserved.
          </div>
          <button className="px-8 py-3 rounded-btn bg-gradient-to-br from-[#428CFC] to-[#78A8FF] text-white font-manrope font-semibold text-sm hover:shadow-[0_0_16px_rgba(66,140,252,0.4)] transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
