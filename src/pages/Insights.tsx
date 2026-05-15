import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { 
  Dna, 
  Stethoscope, 
  Microscope, 
  Activity, 
  ShieldCheck, 
  Users, 
  Truck, 
  Database,
  ArrowRight,
  Target,
  Sparkles,
  Zap,
  Quote
} from 'lucide-react';

const InsightCard = ({ title, icon: Icon, challenge, useCase, impact, applications, advantage, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="group p-8 lg:p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-700 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors pointer-events-none" />
    
    <div className="relative z-10">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 border border-primary/20">
          <Icon size={32} />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-white font-space leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h4 className="text-primary font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/30" />
              Challenge
            </h4>
            <p className="text-white/60 leading-relaxed font-inter">{challenge}</p>
          </div>
          <div>
            <h4 className="text-cyan font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-cyan/30" />
              Quantum Use Case
            </h4>
            <p className="text-white/80 leading-relaxed font-inter italic">"{useCase}"</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-white font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Enterprise Impact
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {impact.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-white/40 text-xs">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-space text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Potential Applications
            </h4>
            <div className="flex flex-wrap gap-2">
              {applications.map((item: string, i: number) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] uppercase tracking-wider">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
            Genquantis Advantage
          </div>
          <p className="text-white/70 text-sm font-inter">{advantage}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export const Insights = () => {
  const insights = [
    {
      title: "Quantum-Powered Drug Discovery & Molecular Simulation",
      icon: Microscope,
      challenge: "Traditional drug discovery requires massive computational resources and years of experimentation to simulate molecular interactions accurately.",
      useCase: "Quantum computers can model molecular structures at the quantum-mechanical level, enabling highly accurate simulation of proteins, enzymes, and drug compounds.",
      impact: ["Accelerate identification", "Reduce R&D timelines", "Improve accuracy", "Lower failure rates"],
      applications: ["Protein folding", "Small molecule optimization", "Quantum chemistry", "Binding affinity", "Toxicity modeling"],
      advantage: "Hybrid quantum-AI platforms for pharmaceutical discovery.",
      delay: 0.1
    },
    {
      title: "Precision Medicine & Personalized Treatment Optimization",
      icon: Activity,
      challenge: "Every patient responds differently to therapies due to genetic, biological, and environmental variations.",
      useCase: "Quantum-enhanced AI can process massive genomic and clinical datasets to identify individualized treatment pathways.",
      impact: ["Personalized scale", "Faster diagnosis", "Improved efficacy", "Reduced adverse reactions"],
      applications: ["Genomic sequencing", "Oncology treatments", "Rare disease analysis", "Predictive modeling", "Biomarker discovery"],
      advantage: "Quantum-driven predictive healthcare intelligence engines.",
      delay: 0.2
    },
    {
      title: "Quantum-Accelerated Clinical Trial Optimization",
      icon: Users,
      challenge: "Clinical trials are expensive, time-consuming, and prone to operational inefficiencies.",
      useCase: "Quantum optimization algorithms can improve patient recruitment, trial design, resource allocation, and predictive modeling.",
      impact: ["Reduced trial costs", "Faster patient matching", "Improved success prob", "Optimized global ops"],
      applications: ["Cohort selection", "Adaptive simulation", "Response prediction", "Real-time optimization"],
      advantage: "Quantum optimization frameworks for trial management.",
      delay: 0.3
    },
    {
      title: "Genomics & Multi-Omics Intelligence Platforms",
      icon: Dna,
      challenge: "Life sciences organizations struggle to process exponentially growing genomic and biological datasets.",
      useCase: "Quantum-enhanced machine learning enables high-dimensional biological data analysis beyond classical limitations.",
      impact: ["Faster genomic insights", "Advanced disease prediction", "Improved population health", "Accelerated biomarker ID"],
      applications: ["DNA sequence analysis", "Multi-omics integration", "Evolutionary modeling", "Population genomics"],
      advantage: "Scalable quantum-AI computational biology platforms.",
      delay: 0.4
    },
    {
      title: "Quantum AI for Early Disease Detection",
      icon: Target,
      challenge: "Detecting diseases early often requires analyzing highly complex and subtle biological patterns.",
      useCase: "Quantum machine learning models can improve pattern recognition across imaging, pathology, genomics, and patient records.",
      impact: ["Earlier identification", "Improved survival rates", "Lower healthcare costs", "Better preventive systems"],
      applications: ["Cancer detection", "Neurological prediction", "Cardiovascular risk", "Radiology enhancement"],
      advantage: "Quantum-enhanced diagnostic intelligence systems.",
      delay: 0.5
    },
    {
      title: "Healthcare Supply Chain & Hospital Optimization",
      icon: Truck,
      challenge: "Healthcare systems face operational inefficiencies in logistics, scheduling, inventory, and emergency response coordination.",
      useCase: "Quantum optimization algorithms can solve highly complex operational problems in real time.",
      impact: ["Reduced operational costs", "Optimized resource allocation", "Improved throughput", "Smarter supply chains"],
      applications: ["Hospital scheduling", "ICU forecasting", "Inventory management", "Medical logistics"],
      advantage: "Enterprise-grade quantum optimization platforms.",
      delay: 0.6
    },
    {
      title: "Quantum Cybersecurity for Healthcare Data Protection",
      icon: ShieldCheck,
      challenge: "Healthcare organizations manage highly sensitive patient and genomic data vulnerable to cyber threats.",
      useCase: "Quantum-safe encryption and post-quantum cryptography secure critical healthcare infrastructure.",
      impact: ["Enhanced data protection", "Compliance readiness", "Future-proof infra", "Secure interoperability"],
      applications: ["Quantum-resistant encryption", "Secure health data exchange", "Genomic data protection", "Device security"],
      advantage: "Quantum-resilient security architecture for enterprises.",
      delay: 0.7
    },
    {
      title: "AI + Quantum Digital Twins for Human Biology",
      icon: Database,
      challenge: "Understanding complex biological systems requires advanced computational simulation capabilities.",
      useCase: "Quantum-enhanced digital twins can simulate organs, diseases, and treatment responses with unprecedented precision.",
      impact: ["Accelerated therapeutic dev", "Reduced experimental dependency", "Predictive ecosystems", "Advanced surgical planning"],
      applications: ["Organ-level simulations", "Personalized modeling", "Drug response simulations", "Disease forecasting"],
      advantage: "Next-gen computational biology and digital twins.",
      delay: 0.8
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 pt-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0jUZ4gRkxazF0hBTUb7BDyNwsmfwToGiFOtjDqwXc84oThGxb7NuV8ci84HVsrsbzoQajO3WbepMNauQh493xhnEaTCKSapqAwJcI4Hd6fOzSpro1-anGc22waKi7TxorhGgIkbHyymgWlSvMrdnCcKRMioX7J2FO8nkbA91txom0hXK4gVTkCo77pC5q8wPQHdIgXydbANCWnQNHyXFIFn-biFgdwIV6QxmKXtEfNeo5vKQTbcNrKyTaampTDK6n-_DCVtg75E" 
            className="w-full h-full object-cover opacity-40 grayscale brightness-[0.6]"
            alt="Insights Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,140,252,0.15)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#06B6D4]" />
            QUANTUM INSIGHTS: COHERENT
          </motion.div>

          <h1 className="text-4xl lg:text-[80px] font-bold text-white mb-8 leading-[1.1] tracking-tighter max-w-6xl mx-auto font-space">
            Genquantis <span className="text-primary">Quantum Advantage</span> <br />
            <span className="text-white/60 text-3xl lg:text-5xl">in Life Sciences & Healthcare</span>
          </h1>

          <p className="text-white/40 text-lg lg:text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-inter">
            Building quantum-powered intelligence systems designed to solve computational challenges that are beyond the capabilities of classical computing.
          </p>
        </div>
      </section>

      {/* Main Insights Grid */}
      <section id="case-studies" className="py-24 bg-black relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="space-y-8">
            {insights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Vision Section */}
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
                <h3 className="text-primary font-space tracking-widest uppercase text-sm mb-4">Founder Vision — Healthcare & Life Sciences</h3>
                
                <p className="text-2xl lg:text-3xl text-white/90 font-space leading-snug italic">
                  “At Genquantis, we believe the convergence of quantum computing, AI, and life sciences will <span className="text-white font-bold not-italic">redefine the future of human health.</span> Our mission is to empower healthcare and pharmaceutical enterprises with computational capabilities that accelerate discovery, personalize medicine, and improve lives at global scale.”
                </p>

                <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent" />

                <p className="text-lg text-white/60 font-inter leading-relaxed">
                  We are building the quantum intelligence infrastructure that will power the next generation of healthcare innovation.
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
