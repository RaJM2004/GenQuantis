import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { BookOpen, Clock, User, ChevronRight } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6 pt-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-30 grayscale mix-blend-overlay"
            alt="Blog Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,140,252,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            THOUGHT LEADERSHIP: STABLE
          </motion.div>

          <h1 className="text-5xl lg:text-[100px] font-bold text-white mb-8 leading-[1] tracking-tighter max-w-5xl mx-auto font-space">
            What we <span className="text-primary">"think"</span>
          </h1>

          <p className="text-white/40 text-lg lg:text-xl max-w-4xl mx-auto mb-12 leading-relaxed font-inter">
            Exploring the convergence of Quantum Computing, AI, and Deep-Tech Infrastructure for the future enterprise.
          </p>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Blog Header */}
                <header className="space-y-6">
                  <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight font-space tracking-tight">
                    The Quantum Imperative: Why Enterprises Must Act Now on Quantum Computing, AI, and Deep-Tech Innovation
                  </h1>
                  <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-primary" />
                      By Genquantis
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      12 Min Read
                    </div>
                  </div>
                </header>

                <div className="text-white/60 text-lg leading-relaxed font-inter space-y-8">
                  <p className="text-white/80 text-xl font-medium">
                    The world is entering a new computational era.
                  </p>
                  
                  <p>
                    For decades, enterprises have relied on classical computing systems to power innovation, optimize operations, and drive digital transformation. But the complexity of modern scientific, industrial, and healthcare challenges is rapidly outgrowing the capabilities of traditional systems.
                  </p>

                  <p>
                    The next wave of transformation will not come from incremental improvements in software alone. It will emerge from the convergence of quantum computing, artificial intelligence, computational biology, advanced simulation, and deep-tech infrastructure.
                  </p>

                  <p>
                    At Genquantis, we believe this convergence represents one of the most significant technological shifts since the birth of the internet.
                  </p>

                  <p className="text-white border-l-2 border-primary pl-6 py-2 italic font-space text-2xl">
                    "The organizations that begin preparing today will become the leaders of the next decade."
                  </p>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">Why Quantum Computing Matters Now</h2>
                  <p>
                    Quantum computing is not simply a faster computer. It represents an entirely different computational model capable of solving classes of problems that are computationally impractical for even the world’s most powerful classical supercomputers.
                  </p>
                  <p>
                    Industries such as pharmaceuticals, healthcare, finance, manufacturing, logistics, cybersecurity, energy, and materials science are approaching computational ceilings where traditional systems struggle with:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-primary/80">
                    {["Molecular simulation", "High-dimensional optimization", "Complex predictive modeling", "Large-scale data correlation", "Real-time decision-making"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <ChevronRight size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p>
                    This is particularly transformative for life sciences and drug discovery, where the ability to simulate molecular behavior accurately could reduce years of research and billions in development costs.
                  </p>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">The Future Will Belong to Computational Intelligence</h2>
                  <p>
                    The future enterprise will not operate on isolated technologies. It will operate on integrated computational intelligence ecosystems powered by:
                  </p>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-6">
                    {["Quantum computing", "AI and machine learning", "Digital twins", "Real-world simulation", "Autonomous optimization", "Quantum-secure infra"].map((item, i) => (
                      <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-center text-white/40">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">Healthcare & Pharma: The Largest Opportunity</h2>
                  <p>
                    Among all industries, healthcare and pharmaceutical research may experience the most profound impact. Today’s drug discovery process is expensive, slow, and highly uncertain.
                  </p>
                  <p>
                    Quantum-enhanced AI systems can fundamentally transform:
                  </p>
                  <ul className="space-y-4">
                    {["Molecular simulation", "Protein folding analysis", "Biomarker discovery", "Clinical trial optimization", "Predictive toxicology", "Regulatory intelligence", "Personalized therapeutics"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#428CFC]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">AI Alone Is Not Enough</h2>
                  <p>
                    Artificial intelligence has transformed enterprise technology, but AI itself faces growing limitations: increasing energy consumption, massive training requirements, and scaling inefficiencies.
                  </p>
                  <p>
                    Quantum-enhanced AI introduces a new frontier. By combining quantum algorithms with advanced AI systems, enterprises may eventually unlock faster optimization, more efficient learning systems, and higher-dimensional pattern recognition.
                  </p>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">Cybersecurity Risks Are Accelerating</h2>
                  <p>
                    Quantum computing also introduces a major strategic challenge: current encryption systems may eventually become vulnerable to sufficiently advanced quantum systems.
                  </p>
                  <p>
                    Enterprises must begin preparing for post-quantum cryptography, quantum-secure communications, and future-proof infrastructure security.
                  </p>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8 text-primary">What Enterprises Should Do Now</h2>
                  <div className="space-y-12 pt-8">
                    <div>
                      <h4 className="text-white font-bold text-xl mb-4">1. Build a Quantum Readiness Strategy</h4>
                      <p>Organizations should begin assessing where quantum computing and advanced AI can create future value, focusing on optimization, simulation, and analytics.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-4">2. Invest in Hybrid Infrastructure</h4>
                      <p>The near future will be hybrid: Classical computing + AI + quantum acceleration. Prepare infrastructure that can integrate future quantum capabilities.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-4">3. Establish Deep-Tech Innovation Teams</h4>
                      <p>Companies need interdisciplinary teams combining AI, quantum research, data science, computational biology, and advanced engineering.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-4">4. Explore Quantum Use Cases Early</h4>
                      <p>Waiting for maturity may be a mistake. Begin pilot programs and simulation experiments to create institutional learning competitors cannot replicate.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xl mb-4">5. Prepare for Regulatory & Security Evolution</h4>
                      <p>Planning for quantum-safe encryption, AI governance, and simulation-based regulatory systems is critical for healthcare and finance.</p>
                    </div>
                  </div>

                  <div className="py-8 text-center text-primary/30 tracking-[1em]">⸻</div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-white font-space pt-8">Genquantis Perspective</h2>
                  <p>
                    At Genquantis, we believe the next era of enterprise transformation will be powered by computational intelligence at unprecedented scale. Quantum computing is not replacing classical systems overnight; it is augmenting human capability and enabling entirely new categories of innovation.
                  </p>

                  <div className="p-10 rounded-3xl bg-primary/5 border border-primary/20 mt-12">
                    <h3 className="text-white font-bold text-2xl mb-6 font-space italic">Final Thought</h3>
                    <p className="text-white/80 text-xl leading-relaxed font-space italic mb-8">
                      “The enterprises that lead the next decade will not simply digitize operations. They will computationally reinvent their industries.”
                    </p>
                    <div className="flex flex-col gap-1">
                      <span className="text-white font-bold tracking-widest uppercase text-sm">Genquantis</span>
                      <span className="text-primary font-bold tracking-widest uppercase text-[10px]">Engineering Intelligence Beyond Classical Computing</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
