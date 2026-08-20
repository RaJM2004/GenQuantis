import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MessageSquare, GraduationCap, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Platform',
      path: '#',
      subItems: [
        { name: 'AI Platform', path: '/#intelligence' },
        { name: 'Robotics Ecosystem', path: '/robo' },
        { name: 'Automation Stack', path: '/#stack' },
        { name: 'Agentic AI Systems', path: '/#intelligence' },
        { name: 'Industry Solutions', path: '/#applications' },
      ]
    },
    {
      name: 'Quantum',
      path: '/quantum',
    },
    {
      name: 'Products',
      path: '/product',
      subItems: [
        { name: 'Healthcare AI', path: '/product#healthcare-ai' },
        { name: 'Voice AI Agents', path: '/product#voice-ai-agents' },
        { name: 'Learning Platform', path: '/product#ai-learning-platform' },
        { name: 'AI Marketing Agents', path: '/product#ai-marketing-agents' },
        { name: 'Embedded AI Devices', path: '/robo' },
        { name: 'Enterprise SaaS', path: '/product' },
      ]
    },
    {
      name: 'Innovations',
      path: '/innovations',
      subItems: [
        { name: 'Research Labs', path: '/innovations#research-labs' },
        { name: 'QuantisOS™', path: '/innovations#bioquantum-architecture' },
        { name: 'AI Models', path: '/intelligence' },
        { name: 'Robotics Innovations', path: '/robo' },
        { name: 'Patents & IP', path: '/innovations#research-labs' },
        { name: 'Emerging Technologies', path: '/innovations#bioquantum-architecture' },
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',
      subItems: [
        { name: 'Core Enterprise Platforms', path: '/solutions#solutions-core' },
        { name: 'Healthcare & Life Sciences', path: '/solutions#solutions-healthcare' },
        { name: 'Cybersecurity & Infrastructure', path: '/solutions#solutions-security' },
        { name: 'Research & Innovation', path: '/solutions#solutions-research' },
        { name: 'Financial & Enterprise', path: '/solutions#solutions-finance' },
      ]
    },
    {
      name: 'Insights',
      path: '/insights',
      subItems: [
        { name: 'Whitepapers', path: '/insights#case-studies' },
        { name: 'Case Studies', path: '/insights#case-studies' },
        { name: 'Industry Reports', path: '/insights#case-studies' },
        { name: 'AI Trends', path: '/insights#case-studies' },
        { name: 'Webinars', path: '/insights#case-studies' },
        { name: 'Media Coverage', path: '/insights#case-studies' },
      ]
    },
    {
      name: 'Company',
      path: '/about',
      subItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Leadership', path: '/about#vision-mission' },
        { name: 'Vision & Mission', path: '/about#vision-mission' },
        { name: 'Global Presence', path: '/about' },
        { name: 'Partnerships', path: '/about' },
        { name: 'Security & Compliance', path: '/#security' },
        { name: 'Careers', path: '/careers' },
        { name: 'Investors', path: '/investors' },
        { name: 'Blog', path: '/blog' },
      ]
    },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      {/* Mini Top Bar */}
      <div className="hidden lg:flex border-b border-white/5 bg-black/40 px-6 lg:px-24 py-2 justify-between items-center text-[10px] font-bold tracking-[0.15em] uppercase text-white/40">
        <div className="flex items-center gap-6">
          <a
            href="https://www.curaquantis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary group cursor-pointer"
          >
            <Sparkles size={12} className="group-hover:animate-pulse" />
            <span className="group-hover:text-white transition-colors tracking-[0.2em]">AI Calling Agent</span>
          </a>
          <div className="w-[1px] h-3 bg-white/10" />
          <a href="tel:+917036955133" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={12} />
            +91 7036955133
          </a>
          <div className="w-[1px] h-3 bg-white/10" />
          <a href="mailto:connect@genquantis.com" className="flex items-center gap-2 hover:text-white transition-colors lowercase tracking-normal font-medium">
            <Mail size={12} />
            connect@genquantis.com
          </a>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://wa.me/917036955133"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer group"
          >
            <MessageSquare size={12} className="group-hover:scale-110 transition-transform" />
            <span>Chat with us</span>
          </a>
          <div className="w-[1px] h-3 bg-white/10" />
          <a
            href="https://academy.genquantis.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
          >
            <GraduationCap size={12} className="group-hover:scale-110 transition-transform" />
            <span>Academy</span>
          </a>
        </div>
      </div>

      <nav className="flex items-center justify-between px-6 lg:px-24 py-4 lg:py-6 relative">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="flex items-center cursor-pointer group"
          >
            <img
              src="/logo.png"
              alt="GenQuantis Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-white/50 font-inter text-[11px] font-bold tracking-[0.2em] uppercase">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
                onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`hover:text-primary transition-colors relative flex items-center gap-1.5 py-2 ${location.pathname === link.path ? 'text-white' : ''}`}
                >
                  {link.name}
                  {link.subItems && (
                    <ChevronDown
                      size={10}
                      className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-primary' : 'text-white/30 group-hover:text-primary'}`}
                    />
                  )}
                  <span className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>

                {link.subItems && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-72 z-[110]"
                      >
                        <div className="bg-black/95 backdrop-blur-2xl border border-white/10 py-3 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className={`block px-6 py-3 text-[9px] transition-all tracking-[0.2em] uppercase ${location.pathname === sub.path ? 'text-primary bg-white/5' : 'text-white/50 hover:text-primary hover:bg-white/5'}`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:block bg-primary text-black font-inter text-[10px] font-bold tracking-widest uppercase px-8 py-3 rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(66,140,252,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-center"
          >
            CONTACT
          </Link>
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 p-8 flex flex-col gap-6 lg:hidden overflow-hidden"
            >
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-4 border-b border-white/5 pb-6 mb-2">
                <a href="tel:+917036955133" className="text-white/40 text-[10px] font-bold flex items-center gap-2">
                  <Phone size={14} /> +91 7036955133
                </a>
                <a href="mailto:connect@genquantis.com" className="text-white/40 text-[10px] font-bold flex items-center gap-2">
                  <Mail size={14} /> connect@genquantis.com
                </a>
              </div>

              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-white/60 hover:text-primary'}`}
                    >
                      {link.name}
                    </Link>
                    {link.subItems && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-1 text-white/40 hover:text-primary"
                      >
                        <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {link.subItems && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-4 pl-4 border-l border-white/10 overflow-hidden"
                    >
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-xs font-bold uppercase tracking-widest transition-colors ${location.pathname === sub.path ? 'text-primary' : 'text-white/40 hover:text-primary'}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-black font-inter text-[10px] font-bold tracking-widest uppercase py-4 rounded-sm shadow-xl text-center"
              >
                CONTACT
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
