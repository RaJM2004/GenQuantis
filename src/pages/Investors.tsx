import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { 
  ArrowRight, 
  MapPin, 
  Briefcase, 
  TrendingUp,
  Cpu,
  Globe,
  Check,
  ShieldCheck,
  Headset,
  Play
} from "lucide-react";

export const Investors = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentCapacity: "",
    city: "",
    segment: "",
    background: ""
  });
  
  const [activeSegment, setActiveSegment] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application submitted! Our franchise team will contact you shortly.");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const franchiseSegments = [
    {
      id: "automation",
      title: "Automation (Robo AI)",
      description: "Enterprise-grade workflow automation delivering immediate ROI for SMEs and large corporates.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
      target: "SMEs, Enterprises",
      revenue: "SaaS + Setup Fees",
      investment: "₹20–50L",
      return: "₹3–10L / month"
    },
    {
      id: "marketing",
      title: "AI Marketing Agents",
      description: "Autonomous agents capable of lead generation and end-to-end campaign automation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      target: "Agencies, B2B",
      revenue: "Subscription + Performance",
      investment: "₹15–40L",
      return: "₹2–8L / month"
    },
    {
      id: "learning",
      title: "AI Learning Platform",
      description: "Personalized AI tutoring and skill training infrastructure for modern institutions.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80",
      target: "Universities, EdTech",
      revenue: "Subscription + Licensing",
      investment: "₹10–30L",
      return: "₹1–5L / month"
    },
    {
      id: "healthcare",
      title: "Healthcare AI",
      description: "Advanced clinic automation, patient triage, and diagnostic AI support systems.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      target: "Clinics, Hospitals",
      revenue: "Per-patient + SaaS",
      investment: "₹25–75L",
      return: "₹5–15L / month"
    },
    {
      id: "voice",
      title: "Voice AI Agents",
      description: "Human-like conversational AI for call center automation and enterprise customer support.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80",
      target: "BPOs, Enterprises",
      revenue: "Per-minute + SaaS",
      investment: "₹20–60L",
      return: "₹3–12L / month"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white/80 font-inter selection:bg-primary/30 overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION - Ultra Premium Full Background Style */}
      <div className="relative pt-32 lg:pt-48 pb-20 px-6 lg:px-24 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Image with Masking */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop" 
              alt="AI Technology Background" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>
          {/* Gradient Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full -mr-64 -mt-64 z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[100px] rounded-full -ml-32 -mb-32 z-0" />

        <div className="relative z-10 w-full lg:max-w-4xl">
          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">AI Franchise Acquisition</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[110px] font-bold tracking-tighter leading-[0.9] mb-8 font-space text-white"
            >
              Own the Future.<br />
              <span className="text-primary font-light italic">Not Just Equity.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mb-12"
            >
              Start your AI business in 30 days. Invest in a portfolio of ready-to-deploy, revenue-generating AI infrastructure.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button onClick={() => scrollToSection('apply')} className="group flex items-center justify-center gap-4 bg-primary text-black px-10 py-5 rounded-sm font-bold hover:bg-white transition-all uppercase text-[10px] tracking-widest shadow-[0_0_30px_rgba(66,140,252,0.2)]">
                Become a Partner
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="group flex items-center justify-center gap-4 border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-sm font-bold hover:border-white transition-all uppercase text-[10px] tracking-widest">
                Explore Segments
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 2. THE CONCEPT - Minimal Grid */}
      <div className="border-y border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-white/[0.02]">
            <h2 className="text-2xl font-light tracking-tight mb-2 font-space text-white">From Funding<br/><span className="font-bold uppercase text-[10px] tracking-[0.3em] text-primary">to Ownership</span></h2>
            <p className="text-sm text-white/40">Unlike traditional startups where investors wait for exits, here you own and operate.</p>
          </div>
          
          <div className="p-12 lg:p-16 hover:bg-white/[0.03] transition-colors group">
            <ShieldCheck className="w-8 h-8 mb-6 stroke-[1] text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-3 font-space uppercase tracking-tight text-white">Proven Products</h3>
            <p className="text-sm text-white/40 leading-relaxed">Enterprise-grade AI products, fully tested and deployed. Not just ideas or MVPs.</p>
          </div>
          
          <div className="p-12 lg:p-16 hover:bg-white/[0.03] transition-colors group">
            <TrendingUp className="w-8 h-8 mb-6 stroke-[1] text-cyan-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-3 font-space uppercase tracking-tight text-white">Recurring Revenue</h3>
            <p className="text-sm text-white/40 leading-relaxed">Generate predictable monthly income immediately through SaaS and licensing models.</p>
          </div>
          
          <div className="p-12 lg:p-16 hover:bg-white/[0.03] transition-colors group">
            <Globe className="w-8 h-8 mb-6 stroke-[1] text-primary group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold mb-3 font-space uppercase tracking-tight text-white">Scale Anywhere</h3>
            <p className="text-sm text-white/40 leading-relaxed">Expand your operations across geographies while we handle the central technical infrastructure.</p>
          </div>
        </div>
      </div>

      {/* 3. AI PRODUCT FRANCHISE PORTFOLIO - Editorial Layout */}
      <div className="py-32 px-6 lg:px-24 max-w-[1600px] mx-auto" id="portfolio">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <div className="text-primary font-bold text-[10px] tracking-[0.4em] uppercase mb-6">Investment Verticals</div>
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-6 font-space text-white">Choose Your <span className="text-primary font-light italic">Segment.</span></h2>
            <p className="text-xl text-white/40 max-w-2xl font-light">
              Select from five distinct, ready-to-market AI infrastructure verticals. 
              Each segment is a fully operational business waiting to be scaled.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* List of segments (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-0 border-t border-white/10">
            {franchiseSegments.map((segment, idx) => (
              <div 
                key={segment.id}
                className={`py-8 cursor-pointer border-b border-white/10 transition-all duration-500 group ${activeSegment === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                onClick={() => setActiveSegment(idx)}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className={`text-2xl lg:text-3xl font-bold font-space tracking-tight group-hover:translate-x-2 transition-transform uppercase ${activeSegment === idx ? 'text-primary' : 'text-white'}`}>{segment.title}</h3>
                  <span className="text-xs font-bold text-white/20 font-space">0{idx + 1}</span>
                </div>
                <motion.p 
                  initial={false}
                  animate={{ height: activeSegment === idx ? 'auto' : 0, opacity: activeSegment === idx ? 1 : 0 }}
                  className="text-sm text-white/40 mt-4 max-w-sm overflow-hidden font-light"
                >
                  {segment.description}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Active Segment Detail (Right Side) */}
          <div className="lg:col-span-7 bg-white/[0.02] p-8 lg:p-12 relative overflow-hidden group border border-white/10 rounded-3xl backdrop-blur-3xl shadow-2xl">
            <div className="aspect-[16/9] w-full overflow-hidden mb-12 rounded-2xl border border-white/5">
              <img 
                src={franchiseSegments[activeSegment].image} 
                alt={franchiseSegments[activeSegment].title}
                className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 scale-100 group-hover:scale-105"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="block text-[10px] uppercase tracking-widest text-white/20 mb-2 font-bold">Target Market</span>
                <span className="block text-sm font-bold text-white/80">{franchiseSegments[activeSegment].target}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="block text-[10px] uppercase tracking-widest text-white/20 mb-2 font-bold">Revenue Model</span>
                <span className="block text-sm font-bold text-white/80">{franchiseSegments[activeSegment].revenue}</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="block text-[10px] uppercase tracking-widest text-white/20 mb-2 font-bold">Investment</span>
                <span className="block text-sm font-bold text-white/80">{franchiseSegments[activeSegment].investment}</span>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <span className="block text-[10px] uppercase tracking-widest text-primary/40 mb-2 font-bold">Est. Return</span>
                <span className="block text-sm font-bold text-primary">{franchiseSegments[activeSegment].return}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. ROI DASHBOARD & 6. HOW IT WORKS - Side by Side Data */}
      <div className="bg-black text-white py-32 px-6 lg:px-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          
          {/* Financials List */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-12 font-space uppercase text-white">Financial <span className="text-primary font-light italic">Metrics.</span></h2>
            <div className="divide-y divide-white/5 border-y border-white/5">
              {franchiseSegments.map((segment) => (
                <div key={segment.id} className="py-6 flex justify-between items-center group cursor-default">
                  <div>
                    <h4 className="text-xl font-bold font-space uppercase tracking-tight group-hover:text-primary transition-colors text-white">{segment.title}</h4>
                    <span className="text-sm text-white/20 mt-1 block font-mono">Investment: {segment.investment}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-bold text-white/20 mb-1 uppercase tracking-widest">MRR Potential</span>
                    <span className="text-xl font-bold text-white group-hover:text-primary transition-colors font-space">{segment.return}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-12 font-space uppercase text-white">The <span className="text-primary font-light italic">Process.</span></h2>
            <div className="space-y-12">
              {[
                { title: "Select Product", desc: "Choose your preferred AI infrastructure vertical based on your market expertise." },
                { title: "Deploy Capital", desc: "Invest the required capital to secure exclusive regional or segment rights." },
                { title: "Platform Setup", desc: "We deploy the cloud architecture, AI models, and white-labeled interfaces." },
                { title: "Go-to-Market", desc: "Utilize our proven sales playbooks and marketing assets to acquire users." },
                { title: "Generate Returns", desc: "Earn recurring monthly revenue while we handle the technical maintenance." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="text-sm font-bold text-primary pt-1 group-hover:scale-110 transition-transform">0{idx + 1}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-space uppercase tracking-tight text-white group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-white/40 leading-relaxed max-w-sm text-sm font-light">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 8. SUPPORT & 10. TERRITORY - Clean Minimal Cards */}
      <div className="py-32 px-6 lg:px-24 max-w-[1600px] mx-auto relative border-t border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/[0.02] p-12 border border-white/5 rounded-[2.5rem] backdrop-blur-3xl shadow-xl hover:border-primary/30 transition-all duration-500"
          >
            <Cpu className="w-8 h-8 mb-8 stroke-[1] text-primary" />
            <h3 className="text-2xl font-bold mb-4 font-space uppercase tracking-tight leading-none text-white">Infrastructure <br/>Handled.</h3>
            <p className="text-white/40 leading-relaxed mb-8 text-sm font-light">We provide the central AI engine, continuous LLM upgrades, and maintain 99.9% uptime. You focus purely on business growth.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Pre-built products</li>
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Centralized tech updates</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/[0.02] p-12 border border-white/5 rounded-[2.5rem] backdrop-blur-3xl shadow-xl hover:border-cyan-500/30 transition-all duration-500"
          >
            <Briefcase className="w-8 h-8 mb-8 stroke-[1] text-cyan-400" />
            <h3 className="text-2xl font-bold mb-4 font-space uppercase tracking-tight leading-none text-white">Territory <br/>Exclusivity.</h3>
            <p className="text-white/40 leading-relaxed mb-8 text-sm font-light">Secure first-mover advantage with strict city or state-wise territorial rights. Build a monopoly in your region.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Regional Master options</li>
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Limited slots per sector</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white/[0.02] p-12 border border-white/5 rounded-[2.5rem] backdrop-blur-3xl shadow-xl hover:border-primary/30 transition-all duration-500"
          >
            <TrendingUp className="w-8 h-8 mb-8 stroke-[1] text-primary" />
            <h3 className="text-2xl font-bold mb-4 font-space uppercase tracking-tight leading-none text-white">Proven <br/>Use Cases.</h3>
            <p className="text-white/40 leading-relaxed mb-8 text-sm font-light">Our platforms are actively reducing costs and increasing revenue for real clients. The demand is already validated.</p>
            <ul className="space-y-3">
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Clinic throughput 3x</li>
              <li className="flex items-center text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]"><Check className="w-4 h-4 mr-3 text-primary" /> Call center costs -60%</li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* 11. APPLICATION FORM - Editorial Form Layout */}
      <div className="py-32 px-6 lg:px-24 border-t border-white/5 relative" id="apply">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="lg:w-1/3">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8 font-space text-white uppercase leading-[0.9]">Secure<br/><span className="text-primary font-light italic">Your Slot.</span></h2>
            <p className="text-white/40 leading-relaxed mb-8 font-light text-lg">
              Territories are granted on a first-come, first-serve basis following rigorous applicant vetting. Apply today to begin the conversation.
            </p>
            <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">Ideal Candidates</div>
            <p className="text-white/20 text-[10px] leading-relaxed uppercase tracking-[0.2em] font-bold">
              Entrepreneurs, IT Professionals, Doctors, and active Business Owners seeking high-yield technological assets.
            </p>
          </div>

          <div className="lg:w-2/3 bg-white/[0.02] p-10 lg:p-16 rounded-[2.5rem] border border-white/5 backdrop-blur-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg placeholder-white/5 text-white font-space" 
                    placeholder="Enter your name" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Email Address</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg placeholder-white/5 text-white font-space" 
                    placeholder="Enter your email" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg placeholder-white/5 text-white font-space" 
                    placeholder="+91" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Target City</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg placeholder-white/5 text-white font-space" 
                    placeholder="City/Region" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Investment Capacity</label>
                  <select name="investmentCapacity" required value={formData.investmentCapacity} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg text-white appearance-none cursor-pointer font-space">
                    <option value="" disabled hidden className="bg-black">Select Range</option>
                    <option value="10L-30L" className="bg-black text-white font-inter">₹10L - ₹30L</option>
                    <option value="30L-50L" className="bg-black text-white font-inter">₹30L - ₹50L</option>
                    <option value="50L-1Cr" className="bg-black text-white font-inter">₹50L - ₹1Cr</option>
                    <option value="1Cr+" className="bg-black text-white font-inter">₹1Cr+</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Segment</label>
                  <select name="segment" required value={formData.segment} onChange={handleInputChange} 
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg text-white appearance-none cursor-pointer font-space">
                    <option value="" disabled hidden className="bg-black">Select Vertical</option>
                    <option value="automation" className="bg-black text-white font-inter">Automation (Robo AI)</option>
                    <option value="marketing" className="bg-black text-white font-inter">AI Marketing Agents</option>
                    <option value="learning" className="bg-black text-white font-inter">AI Learning Platform</option>
                    <option value="healthcare" className="bg-black text-white font-inter">Healthcare AI</option>
                    <option value="voice" className="bg-black text-white font-inter">Voice AI Agents</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-primary transition-colors">Professional Background</label>
                <input type="text" name="background" required value={formData.background} onChange={handleInputChange} 
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-primary transition-colors text-lg placeholder-white/5 text-white font-space" 
                  placeholder="Tell us about your experience" />
              </div>

              <div className="pt-8">
                <button type="submit" className="group flex items-center justify-center gap-4 bg-primary text-black font-bold text-[10px] tracking-[0.4em] uppercase py-6 px-12 rounded-sm hover:bg-white transition-all w-full md:w-auto shadow-[0_0_30px_rgba(66,140,252,0.3)]">
                  Submit Application
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
