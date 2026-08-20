// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'AI Services', href: '#services' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Projects', href: '#projects' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#131313]/80 backdrop-blur-[20px] border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <div className="font-grotesk font-bold text-2xl tracking-tight text-white">
          GenQuantis
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface-variant hover:text-primary transition-colors font-manrope font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <button className="px-6 py-2.5 rounded-btn bg-gradient-to-br from-[#428CFC] to-[#78A8FF] text-white font-manrope font-semibold text-sm hover:shadow-[0_0_16px_rgba(66,140,252,0.4)] transition-all">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-background z-40 transition-transform duration-300 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-grotesk font-medium text-on-surface"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full py-4 rounded-btn bg-gradient-to-br from-[#428CFC] to-[#78A8FF] text-white font-manrope font-semibold text-lg">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
