import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { 
  FileText, 
  Download, 
  Shield, 
  Cpu, 
  Zap,
  BrainCircuit, 
  Dna, 
  HeartPulse, 
  Timer, 
  ShieldCheck, 
  Grid3X3, 
  Globe, 
  Cloud, 
  TrendingUp, 
  FlaskConical,
  ArrowRight,
  Quote,
  Layers,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

const ProductCard = ({ title, tagline, description, features, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full flex flex-col"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors pointer-events-none" />
    
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-500">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors font-space tracking-tight">
            {title}
          </h3>
          <p className="text-primary/60 text-[10px] font-bold uppercase tracking-[0.2em]">{tagline}</p>
        </div>
      </div>

      <p className="text-white/50 text-sm leading-relaxed mb-8 font-inter">
        {description}
      </p>

      {features && (
        <div className="space-y-4 mb-8">
          <ul className="grid grid-cols-1 gap-2">
            {features.map((f: string, i: number) => (
              <li key={i} className="flex items-center gap-2 text-white/30 text-xs">
                <ChevronRight size={12} className="text-primary/60" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6 border-t border-white/5">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
          <span>{title.replace('GQ ', 'GQ-')}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-primary" />
        </div>
      </div>
    </div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle }: any) => (
  <div className="mb-16">
    <h2 className="text-primary font-space text-[12px] font-bold tracking-[0.4em] uppercase mb-4">{subtitle}</h2>
    <div className="h-px w-20 bg-primary/50 mb-8" />
    <h3 className="text-4xl lg:text-5xl font-bold text-white font-space tracking-tighter">{title}</h3>
  </div>
);

export const Solutions = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 font-inter">
      <Navbar />
      
      {/* Original Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 lg:px-24 pt-40 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2232" 
            className="w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
            alt="Solutions Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,140,252,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-space text-[12px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            WHITEPAPER_V2.0.4
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-[88px] font-bold text-white mb-8 leading-[1] tracking-tighter max-w-5xl font-space"
          >
            Quantum-Centric Life<br />Sciences OS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg lg:text-xl max-w-4xl leading-relaxed mb-12"
          >
            The definitive architecture for the 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer: Transcending binary constraints in drug discovery and predictive clinical modeling through high-coherence computational environments.
          </motion.p>
        </div>
      </section>

      {/* Original Executive Summary Section */}
      <section className="pb-32 px-6 lg:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A101C] rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl"
          >
            <div className="p-12 lg:p-20">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12 font-space border-b border-white/5 pb-8">
                Executive Summary
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <p className="text-white/50 text-lg leading-relaxed">
                    As biological datasets reach exascale complexity, classical infrastructure fails to capture the multi-dimensional nuances of molecular interactions. The GenQuantis OS introduces a decentralized, quantum-classical hybrid framework designed specifically for the biopharmaceutical lifecycle.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Cpu size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Hybrid Core</h4>
                        <p className="text-white/30 text-xs">Seamless 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer orchestration.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                        <Shield size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">State Security</h4>
                        <p className="text-white/30 text-xs">Quantum-entangled data fabric.</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    to="/contact"
                    className="inline-block bg-white text-black px-8 py-4 rounded-md font-bold text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5"
                  >
                    DOWNLOAD THE FULL PROTOCOL
                  </Link>
                </div>

                <div className="relative">
                  <div className="relative z-10 w-full h-full overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9m7e2si1kU1P8nvllX649p-oPiikKsvTu5unVNahkq9nrM2DJTV0dlzgFfveaqE54Ixz-I37zACjl7JWKQ7D4_f0Dy3ySoRTvvii-KqFsXd8Q12UhHpkjg6efI2cf1yYox75RevfkoFQDG_9IE_rIfDv7tt3g5NvBcxEZhxIP35UVf6Duj9wm38zO3hCXTeDv3QvYpdfUTf_Db94s-GBwLY5SiQT0Q91u4CXW1DZ8LSRhrcJ3GmJClLMZZ26siAZUH9lvi6Dq9KA" 
                      className="w-full h-full object-contain" 
                      alt="Solution Architecture"
                    />
                  </div>
                  <div className="absolute -inset-10 bg-primary/10 blur-[100px] -z-10 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: GQ Product Portfolio */}
      <section id="product-portfolio" className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-7xl font-bold text-white mb-8 font-space tracking-tight"
            >
              GQ Branded <span className="text-primary">Deep-Tech</span> Portfolio
            </motion.h2>
            <p className="text-white/40 text-lg max-w-3xl mx-auto">
              A unified ecosystem naming structure representing the next generation of Quantum + Intelligence + Enterprise systems.
            </p>
          </div>

          <div className="space-y-32">
            {/* Core Platforms */}
            <div id="solutions-core">
              <SectionHeader title="Core Enterprise Platforms" subtitle="Infrastructure Layers" />
              <div className="grid lg:grid-cols-2 gap-8">
                <ProductCard 
                  title="GQ Nexus™"
                  tagline="Quantum Intelligence Operating Platform"
                  description="A unified enterprise platform integrating quantum computing, AI, advanced analytics, and optimization engines."
                  features={["Hybrid quantum-classical workflows", "Enterprise AI orchestration", "Real-time optimization"]}
                  icon={Cpu}
                  delay={0.1}
                />
                <ProductCard 
                  title="GQ QuantumAI™"
                  tagline="Quantum-Enhanced AI Engine"
                  description="An advanced AI platform accelerated through quantum-inspired and quantum-native algorithms."
                  features={["Quantum machine learning (QML)", "Predictive intelligence", "Generative AI acceleration"]}
                  icon={BrainCircuit}
                  delay={0.2}
                />
              </div>
            </div>

            {/* Healthcare */}
            <div id="solutions-healthcare">
              <SectionHeader title="Healthcare & Life Sciences" subtitle="Bio-Quantum Precision" />
              <div className="grid lg:grid-cols-3 gap-8">
                <ProductCard 
                  title="GQ BioQuantum™"
                  tagline="Drug Discovery Platform"
                  description="Deep-tech platform for molecular simulation and pharmaceutical research optimization."
                  features={["Protein folding analysis", "Molecular simulation", "Toxicity prediction"]}
                  icon={Dna}
                  delay={0.1}
                />
                <ProductCard 
                  title="GQ PrecisionHealth™"
                  tagline="Precision Medicine Ecosystem"
                  description="Personalized healthcare intelligence ecosystem powered by quantum-enhanced analytics."
                  features={["Genomic intelligence", "Personalized modeling", "AI-driven diagnostics"]}
                  icon={HeartPulse}
                  delay={0.2}
                />
                <ProductCard 
                  title="GQ TrialSync™"
                  tagline="Clinical Trial Optimization"
                  description="Enterprise solution for pharmaceutical trial optimization and intelligent patient matching."
                  features={["Smart cohort selection", "Trial simulation", "Resource optimization"]}
                  icon={Timer}
                  delay={0.3}
                />
              </div>
            </div>

            {/* Security */}
            <div id="solutions-security">
              <SectionHeader title="Cybersecurity & Infrastructure" subtitle="The Quantum Shield" />
              <div className="grid lg:grid-cols-2 gap-8">
                <ProductCard 
                  title="GQ QuantumShield™"
                  tagline="Post-Quantum Security"
                  description="A future-ready cybersecurity framework designed for the protection of critical data in the quantum era."
                  features={["Quantum-safe encryption", "Secure communications", "Zero-trust architecture"]}
                  icon={ShieldCheck}
                  delay={0.1}
                />
                <ProductCard 
                  title="GQ HyperGrid™"
                  tagline="Logistics Optimization Engine"
                  description="Next-generation optimization for supply chains, smart cities, and industrial systems."
                  features={["Logistics routing", "Smart energy distribution", "Fleet intelligence"]}
                  icon={Grid3X3}
                  delay={0.2}
                />
              </div>
            </div>

            {/* Research */}
            <div id="solutions-research">
              <SectionHeader title="Research & Innovation" subtitle="The Frontier Labs" />
              <div className="grid lg:grid-cols-2 gap-8">
                <ProductCard 
                  title="GQ SimuVerse™"
                  tagline="Digital Twin Environment"
                  description="A simulation ecosystem for biological systems, industrial twins, and climate modeling."
                  features={["Industrial digital twins", "Climate modeling", "Material science"]}
                  icon={Globe}
                  delay={0.1}
                />
                <ProductCard 
                  title="GQ QuantumCloud™"
                  tagline="Quantum-as-a-Service (QaaS)"
                  description="Cloud-native access to hybrid quantum infrastructure for enterprises and developers."
                  features={["Quantum compute access", "Developer toolkit", "Scalable deployment"]}
                  icon={Cloud}
                  delay={0.2}
                />
              </div>
            </div>

            {/* Finance & Labs */}
            <div id="solutions-finance">
              <SectionHeader title="Financial & Enterprise" subtitle="Monetary Intelligence" />
              <div className="grid lg:grid-cols-2 gap-8">
                <ProductCard 
                  title="GQ FinQuantum™"
                  tagline="Financial Intelligence Platform"
                  description="Built for banking, capital markets, and high-frequency risk analytics."
                  features={["Portfolio optimization", "Fraud detection", "Risk modeling"]}
                  icon={TrendingUp}
                  delay={0.1}
                />
                <ProductCard 
                  title="GQ Labs™"
                  tagline="Frontier Research Division"
                  description="Advanced research across Neuromorphic computing, Quantum materials, and Cryptography."
                  features={["Quantum biology", "Neuromorphic systems", "Advanced cryptography"]}
                  icon={FlaskConical}
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Strategic Impact Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-20 font-space"
          >
            Strategic Industrial Impact
          </motion.h2>
 
          <div className="grid lg:grid-cols-2 gap-12 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3NPNxNUWTDIutps-M-vfyhNuv3Ewkb0Eqah3bMCj7bsWg0qmOXJ7LsSzZ5tPF92kvpcpwOROw-5qAuC1872-jNQK_NEG67BUePMWzPjxVszXB4FpUEsKII0q7WNtAuuGWYHnMB6fkywNfu7ph5ZsTjseiXdiIRqtZC3T10NWKqe508Uem6FPyEdA59PBSR2j3XvQwHWHnVU4YkOOkUvIYKBgARvlk7_f3BlSjEEo6swqvh9DBScHaN_jN3ZDYMsAQ2p-pJFJtLu4" 
                className="w-full aspect-[4/3] object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Impact Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">Clinical Acceleration</h3>
                <p className="text-white/60 mb-8 max-w-md">Reducing therapeutic development cycles by 64% through real-time predictive state modeling.</p>
                <div className="flex items-center gap-4 text-primary font-bold text-[10px] tracking-widest uppercase">
                  VIEW PROTOCOL <Zap size={14} />
                </div>
              </div>
            </motion.div>

            <div className="grid gap-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-white font-bold text-xl mb-4 font-space">Molecular High-Coherence</h4>
                <p className="text-white/40 leading-relaxed mb-6">Enabling sub-nanosecond simulations of complex protein-ligand binding scenarios across distributed quantum nodes.</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-primary" />
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all">
                <h4 className="text-white font-bold text-xl mb-4 font-space">Decentralized Intelligence</h4>
                <p className="text-white/40 leading-relaxed mb-6">A sovereign data orchestration layer that ensures intellectual property integrity across international research pipelines.</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Corporate Architecture */}
      <section className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="p-12 lg:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-5xl font-bold text-white font-space mb-12">Premium Corporate Architecture</h3>
              
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">Parent Brand</h4>
                  <div className="text-4xl font-bold text-white mb-8 tracking-tighter">Genquantis™</div>
                  <p className="text-white/40 text-sm leading-relaxed mb-8">
                    Concise, symbolic naming structures represent advanced computational ecosystems, creating strong technological recall and enterprise-grade branding.
                  </p>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">Ecosystem Architecture</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {["GQ Nexus™", "GQ QuantumAI™", "GQ BioQuantum™", "GQ PrecisionHealth™", "GQ QuantumShield™", "GQ HyperGrid™", "GQ SimuVerse™", "GQ FinQuantum™", "GQ Labs™"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-xs font-space">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Founder Product Vision */}
      <section className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-10 text-primary/40 flex justify-center">
              <Quote size={48} strokeWidth={1} />
            </div>

            <div className="space-y-8">
              <h3 className="text-primary font-space tracking-widest uppercase text-sm mb-4">Founder Product Vision</h3>
              
              <p className="text-2xl lg:text-3xl text-white/90 font-space leading-snug italic">
                “At Genquantis, we are building a portfolio of quantum-powered platforms designed to solve the world’s most computationally intensive challenges across healthcare, enterprise intelligence, cybersecurity, finance, and scientific discovery.”
              </p>

              <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent mx-auto" />

              <p className="text-lg text-white/60 font-inter leading-relaxed">
                Our GQ ecosystem represents the convergence of quantum computing, deep technology, and applied intelligence — creating transformative systems for the next era of human innovation.
              </p>

              <div className="pt-12 flex flex-col items-center gap-4">
                <div className="w-12 h-px bg-white/20" />
                <span className="text-white font-bold text-xl tracking-tight">— Founder, Genquantis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
