import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import {
  Cpu, Activity, Layers, ArrowRight,
  FlaskConical, Target, Brain, Shield,
  Dna, ClipboardList, Zap, Microscope,
  Database, Network, Globe, Sparkles,
  Search, Lock, CheckCircle2, Terminal,
  BarChart3, Workflow, Rocket, Clock,
  Quote, TestTube, FlaskRound as Flask
} from 'lucide-react';

const FeatureCard = ({ title, icon: Icon, index }: { title: string, icon: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-white/90 font-space text-sm font-bold tracking-tight group-hover:text-white transition-colors uppercase">
        {title}
      </h3>
    </div>
  </motion.div>
);

const ArchitectureLayer = ({ number, title, subtitle, capabilities, functions, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group relative p-8 lg:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-700 mb-12"
  >
    <div className="absolute top-0 right-0 p-8 text-primary/10 font-space text-8xl font-bold italic select-none">
      L{number}
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/20">
          <Icon size={32} />
        </div>
        <div>
          <span className="text-primary font-space text-[10px] font-bold uppercase tracking-[0.4em] mb-2 block">Layer {number}</span>
          <h3 className="text-2xl lg:text-3xl font-bold text-white font-space leading-tight">
            {title}
          </h3>
          <p className="text-white/40 text-sm mt-1">{subtitle}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h4 className="text-white font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-4 h-px bg-primary/30" />
            Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-white/60 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {cap}
              </div>
            ))}
          </div>
        </div>

        {functions && (
          <div>
            <h4 className="text-cyan font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan/30" />
              {number === 7 || number === 8 ? 'Specifications' : 'Quantum Functions'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {functions.map((func: string, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full bg-cyan/5 border border-cyan/10 text-cyan/60 text-[10px] uppercase tracking-wider font-bold">
                  {func}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export const Innovations = () => {
  const capabilities = [
    { title: "Target Identification", icon: Target },
    { title: "Virtual Hit Screening", icon: Search },
    { title: "Molecular Docking", icon: Layers },
    { title: "Lead Optimization", icon: Zap },
    { title: "ADMET Intelligence", icon: Brain },
    { title: "Robotic Validation", icon: Cpu },
    { title: "Preformulation Analysis", icon: TestTube },
    { title: "Formulation Design", icon: FlaskConical },
    { title: "Clinical Candidate Selection", icon: ClipboardList }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 font-inter">
      <Navbar />

      {/* Hero Section (Preserved) */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Innovations Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-primary font-space text-[12px] font-bold tracking-[0.4em] uppercase mb-8"
          >
            RESEARCH_LAB_SYNC — V2.4.0
          </motion.div>

          <h1 className="text-[56px] lg:text-[100px] font-bold text-white mb-8 leading-[1] tracking-tighter font-space">
            Engineering the<br />
            <span className="text-primary">Future Reality.</span>
          </h1>

          <p className="text-white/60 text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            From theoretical physics to industrial application. Explore the frontiers of 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer intelligence and quantum biological mapping through our GQ BioQuantum™ ecosystem.
          </p>
        </div>
      </section>

      {/* Biologics Discovery (Preserved) */}
      <section id="research-labs" className="py-24 bg-black relative border-t border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -mr-64 -mt-64" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 text-primary">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Core Platform</span>
              </div>
              <h2 className="text-[48px] lg:text-[64px] font-bold text-white leading-tight font-space mb-8 tracking-tighter">
                Biologics<br />
                <span className="text-primary">Discovery.</span>
              </h2>
              <p className="text-white/50 text-xl leading-relaxed mb-10">
                Accelerate your drug discovery pipeline from protein target identification to screening millions of compounds with machine learning and robotic validation, now enhanced by GQ BioQuantum™ orchestration.
              </p>
              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                  <Cpu size={16} className="text-primary" />
                  Quantum-AI Fusion
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                  <Activity size={16} className="text-cyan-400" />
                  Validated Intelligence
                </div>
                <a
                  href="https://dicoveryplatform.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary/20 border border-primary/30 px-6 py-3 rounded-xl text-primary font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-black transition-all group/link"
                >
                  Launch Discovery Platform <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative aspect-square rounded-full border border-white/10 overflow-hidden backdrop-blur-3xl">
                <img
                  src="/biologics-discovery.png"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  alt="Biologics Discovery Visual"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow pointer-events-none" />
              <div className="absolute -inset-8 border border-white/5 rounded-full animate-reverse-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Identification Phase Visual - Immediately following Biologics Discovery */}
      <section className="py-20 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-6xl mx-auto"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-6 lg:p-12">
              <img 
                src="/Target Identification (1).png" 
                alt="Target Identification Workflow" 
                className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid (Preserved) */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FeatureCard key={cap.title} title={cap.title} icon={cap.icon} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW INTEGRATION: GQ BioQuantum Architecture */}
      <section id="bioquantum-architecture" className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary font-space text-[12px] font-bold tracking-[0.5em] uppercase mb-6"
            >
              The 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer Architecture
            </motion.div>
            <h2 className="text-5xl lg:text-[88px] font-bold text-white mb-8 leading-[1] tracking-tighter font-space uppercase">
              GQ <span className="text-primary">BioQuantum™</span>
            </h2>
            <p className="text-white/40 text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
              A next-generation Quantum-Centric Computing platform designed to solve the world’s most complex biological and medical challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center mb-32">
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 group hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                <Database size={32} />
              </div>
              <h3 className="text-primary font-space font-bold uppercase tracking-widest">Bits</h3>
              <p className="text-white/40 text-sm italic">Classical HPC & Cloud Infrastructure</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 group hover:border-primary/30 transition-all md:translate-y-12">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-primary font-space font-bold uppercase tracking-widest">Neurons</h3>
              <p className="text-white/40 text-sm italic">AI / Foundation Models / Generative AI</p>
            </div>
            <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-6 group hover:border-primary/30 transition-all">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto text-white group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <h3 className="text-primary font-space font-bold uppercase tracking-widest">Qubits</h3>
              <p className="text-white/40 text-sm italic">Quantum Computing & Optimization</p>
            </div>
          </div>

          <div className="space-y-4">
            <ArchitectureLayer
              number={1}
              title="Enterprise Experience Layer"
              subtitle="Industry Portals & User Personas"
              capabilities={["Pharma Research Portal", "Clinical Trial Workspace", "Precision Medicine Dashboard", "FDA Regulatory Workspace", "Molecular Design Studio"]}
              functions={["Medicinal Chemists", "Computational Biologists", "Regulatory Teams", "AI Scientists", "Quantum Researchers"]}
              icon={Globe}
              delay={0.1}
            />

            <div className="py-24">
              <h4 className="text-white font-space text-[12px] font-bold uppercase tracking-[0.6em] mb-16 text-center opacity-40 italic">Layer 2 — Industry Applications Ecosystem</h4>
              <div className="grid lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "GQ TargetAI™",
                    sub: "Target Discovery & Systems Biology",
                    caps: ["Multi-omics analytics", "Genome annotation", "Biomarker discovery"],
                    funcs: ["Quantum Graph Analytics", "Quantum Walk Algorithms"],
                    icon: Target
                  },
                  {
                    title: "GQ MoleculeStudio™",
                    sub: "Drug Design & Molecular Simulation",
                    caps: ["Binding affinity prediction", "Molecular docking", "Toxicity prediction"],
                    funcs: ["Variational Eigensolver (VQE)", "Hamiltonian Simulation"],
                    icon: FlaskConical
                  },
                  {
                    title: "GQ ProteinFold™",
                    sub: "Quantum Protein Prediction",
                    caps: ["Protein folding simulation", "Antibody engineering", "Mutation analysis"],
                    funcs: ["QAOA-based optimization", "Energy minimization"],
                    icon: Dna
                  },
                  {
                    title: "GQ TrialSync™",
                    sub: "Clinical Trial Optimization",
                    caps: ["Smart recruitment", "Trial simulation", "RWE integration"],
                    funcs: ["Portfolio optimization", "Monte Carlo simulation"],
                    icon: Activity
                  },
                  {
                    title: "GQ RegulatoryAI™",
                    sub: "FDA & EMA Acceleration",
                    caps: ["Submission intelligence", "Compliance validation", "Approval scoring"],
                    funcs: ["LLM Summarization", "Risk Scoring"],
                    icon: Shield
                  }
                ].map((app, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-[3rem] bg-white/[0.01] border border-white/5 text-left hover:bg-white/[0.03] transition-all"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <app.icon className="text-primary" size={24} />
                      <h3 className="text-white font-space font-bold uppercase">{app.title}</h3>
                    </div>
                    <p className="text-white/40 text-[10px] uppercase tracking-widest mb-4">{app.sub}</p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {app.caps.map((c, j) => <span key={j} className="text-[10px] text-white/60 bg-white/5 px-3 py-1 rounded-full">{c}</span>)}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {app.funcs.map((f, j) => <span key={j} className="text-[10px] text-primary/60 bg-primary/5 px-3 py-1 rounded-full font-bold">{f}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <ArchitectureLayer
              number={3}
              title="AI & Intelligence Layer"
              subtitle="Foundation Models & Scientific Reasoning"
              capabilities={["Biomedical Foundation Models", "Drug-target interaction", "Molecular language models", "Protein sequence transformers", "Clinical NLP systems"]}
              functions={["Generative AI", "LLMs for Science", "Deep Neural Networks", "Reinforcement Learning"]}
              icon={Brain}
              delay={0.1}
            />

            <ArchitectureLayer
              number={4}
              title="Quantum Intelligence Layer"
              subtitle="Native Algorithms & Simulation Engines"
              capabilities={["UCCSD Chemistry Simulation", "Many-body system simulation", "Electronic structure calculation", "Quantum Portfolio Optimization"]}
              functions={["VQE / QPE", "QAOA", "Quantum GANs", "Quantum Boltzmann Machines"]}
              icon={Zap}
              delay={0.1}
            />

            <ArchitectureLayer
              number={5}
              title="Hybrid Computing Orchestration"
              subtitle="Runtime & Workload Management"
              capabilities={["Workload distribution", "Quantum circuit orchestration", "Error mitigation", "Distributed scientific compute"]}
              functions={["IBM Qiskit", "Quantum Middleware", "Kubernetes Orchestration"]}
              icon={Workflow}
              delay={0.1}
            />

            <ArchitectureLayer
              number={8}
              title="Security & Governance"
              subtitle="Compliance & Post-Quantum Security"
              capabilities={["HIPAA / FDA / EMA Compliance", "GxP Validation", "Auditability", "Responsible AI Governance"]}
              functions={["Post-Quantum Cryptography", "Zero-Trust Architecture", "Secure Federated Learning"]}
              icon={Lock}
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* Enterprise Workflow (Refined) */}
      <section className="py-32 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-bold text-white font-space uppercase tracking-tighter">End-to-End Discovery Workflow</h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32 relative group"
          >
            <div className="absolute -inset-4 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl p-8 lg:p-16">
              <img
                src="/Workflow.png"
                alt="Discovery Workflow Diagram"
                className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Roadmap & Future (Refined) */}
      <section className="py-32 bg-white/[0.01] relative border-y border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="mb-24 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white font-space uppercase tracking-tighter">Strategic Roadmap</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { time: "Near-Term", items: ["Hybrid quantum-AI workflows", "Quantum optimization", "Clinical intelligence"] },
              { time: "Mid-Term", items: ["Utility-scale quantum chemistry", "Quantum-enhanced foundation models", "Digital biology twins"] },
              { time: "Long-Term", items: ["Fault-tolerant molecular simulation", "Autonomous drug discovery", "Quantum-native pharma R&D"] }
            ].map((phase, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-black/40 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock size={120} />
                </div>
                <h3 className="text-primary font-space font-bold uppercase tracking-widest mb-8 text-sm">{phase.time}</h3>
                <ul className="space-y-4">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Vision Section (Refined) */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-12 lg:p-20 rounded-[60px] bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-[60px]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 rounded-br-[60px]" />
              <div className="mb-10 text-primary/40">
                <Quote size={48} strokeWidth={1} />
              </div>
              <div className="space-y-8">
                <p className="text-2xl lg:text-3xl text-white/90 font-space leading-snug italic">
                  “At Genquantis, we believe the future of healthcare innovation will be powered by <span className="text-white font-bold not-italic">quantum-centric computing</span> — where AI, HPC, and quantum systems work together to solve the world’s most complex biological and medical challenges.”
                </p>
                <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent" />
                <p className="text-lg text-white/60 font-inter leading-relaxed">
                  GQ BioQuantum™ is designed to become the foundational intelligence platform for the next generation of pharmaceutical and healthcare enterprises.
                </p>
                <div className="pt-12 flex items-center gap-4">
                  <div className="w-12 h-px bg-white/20" />
                  <span className="text-white font-bold text-xl tracking-tight">— Founder, Genquantis</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Stethoscope = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z" />
    <path d="M10 2c0 7 3.5 12 10 12" />
    <path d="M14 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
    <path d="M10 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
    <path d="M12 4v14" />
    <circle cx="5" cy="5" r="3" />
    <path d="M3 14c0-3.5 1.5-6 6-6" />
    <path d="M17 14h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" />
  </svg>
);
