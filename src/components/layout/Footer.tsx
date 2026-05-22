import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-space font-bold text-white tracking-tighter">
              GENQUANTIS Pvt. Ltd.
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-md">
              GenQuantis is a deep-tech company building quantum-powered intelligence systems that help enterprises solve computationally impossible problems faster, smarter, and at scale. We combine quantum computing, AI, and advanced optimization technologies to unlock the next generation of business transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Platform</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <ul className="space-y-4">
                {[
                  { name: 'Lifescience and Discovery', path: 'https://aidiscovery.genquantis.com/' },
                  { name: 'Healthcare', path: 'https://www.curaquantis.com/' },
                  { name: 'Robotics', path: 'https://robotics.genquantis.com/' },
                  { name: 'AI Voice Agent', path: 'https://www.curaquantis.com/' },
                  { name: 'Academy', path: 'https://academy.genquantis.com/' },
                ].map(item => (
                  <li key={item.name}>
                    <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-bold text-[10px] block">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {['Blog', 'Careers', 'About', 'Security', 'Investors'].map(item => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-white/40 hover:text-primary text-sm transition-colors uppercase tracking-widest font-bold text-[10px] block">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Contact</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-white/40 text-sm leading-relaxed">
                  T-Hub Phase 2, Raidurg,<br />
                  Hyderabad, Telangana,<br />
                  India, 500081
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-white/40 text-sm">connect@genquantis.ai</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-white/40 text-sm">+91 7036955133</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-8">Initiate</h4>
            <p className="text-white/40 text-sm mb-6">Ready to transcend binary limits? Start your discovery sync today.</p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-black font-bold text-[10px] tracking-[0.2em] uppercase px-8 py-3 rounded-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(66,140,252,0.2)]"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row items-center justify-center text-center">
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
            © 2026 GENQUANTIS AI. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};
