import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Network, Cpu, BarChart3, Quote } from 'lucide-react';
import Leaders from '../components/custom/Leaders';
import TeamPage from '../components/custom/TeamPage';

export const Vision = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {showTeam ? (
        <div className="pt-20">
          <TeamPage onBack={() => setShowTeam(false)} />
        </div>
      ) : (
        <>
          {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhBhc1xV1rjoH_9z90nnxvhI8gKxlKgKkr9mpxir2pUz5rSfvGb3DHNH23JNwXqMF5HBogERJphjQSK-QS5kQQJ0LyRvJfmVqZ0rvD7WlJCjfE9Fc1lDwIvTEX0A1z3-D2ZkZsjgR-dvC3DwnGbjTM8N22I4vgvVbFQ-dKiEz0JhjTNdNSrK7PPBwZ6vTP7LVLoHxcjKFRuXqyzwP-kX6Kir3ZBrwY1jg3CswcN_0aHKalM-Run6_4j9OiFgWBkTVwfXxvntR6Ijo"
            className="w-full h-full object-cover opacity-60"
            alt="Vision Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 mb-12"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            SYSTEM STATUS: COHERENT
          </motion.div>

          <h1 className="text-5xl lg:text-[100px] font-bold text-white mb-8 leading-[1.1] tracking-tighter max-w-6xl mx-auto font-space">
            <span className="text-[#60A5FA]">About GenQuantis</span>
          </h1>

          <p className="text-white/70 text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-inter">
            Bridging the absolute gap between classical artificial intelligence and quantum synthesization. We engineer clarity in the deep cosmic voids of computational complexity.
          </p>
        </div>
      </section>

      {/* Beyond Binary Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-[42px] lg:text-[64px] font-bold text-white mb-6 font-space">
              Beyond Binary. <span className="text-[#60A5FA]">Beyond AI.</span>
            </h2>
            <p className="text-white/50 text-lg lg:text-xl max-w-3xl mx-auto font-inter">
              Solving the world's most complex industrial challenges through seamless Quantum-AI fusion.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1: Neural Entanglement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all border border-white/10">
                <Network size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 font-space">Neural Entanglement</h3>
              <div className="w-full h-[1px] bg-white/5 mb-6" />
              <p className="text-white/40 leading-relaxed font-inter text-sm lg:text-base">
                Architecture designed to weave classical neural networks seamlessly into quantum topologies, ensuring exponential scaling without coherence loss.
              </p>
            </motion.div>

            {/* Card 2: Qubit Orchestration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all border border-white/10">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 font-space">Qubit Orchestration</h3>
              <div className="w-full h-[1px] bg-white/5 mb-6" />
              <p className="text-white/40 leading-relaxed font-inter text-sm lg:text-base">
                Dynamic management of fragile quantum states across distributed hardware ecosystems, optimizing for noise reduction and operational stability.
              </p>
            </motion.div>

            {/* Card 3: Heuristic Modeling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all border border-white/10">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 font-space">Heuristic Modeling</h3>
              <div className="w-full h-[1px] bg-white/5 mb-6" />
              <p className="text-white/40 leading-relaxed font-inter text-sm lg:text-base">
                Advanced predictive engines that leverage quantum supremacy to simulate complex molecular and financial models in milliseconds rather than millennia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Vision Section */}
      <section id="vision-mission" className="py-32 bg-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-12 lg:p-20 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm overflow-hidden group">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-3xl" />

              <div className="mb-10 text-primary/40">
                <Quote size={48} strokeWidth={1} />
              </div>

              <div className="space-y-8">
                <p className="text-2xl lg:text-3xl text-white/90 font-space leading-snug italic">
                  Genquantis was founded on a simple but transformative belief: <span className="text-white font-bold not-italic">the future will not be built by incremental technology — it will be shaped by quantum leaps in intelligence.</span>
                </p>

                <div className="h-px w-20 bg-gradient-to-r from-primary/50 to-transparent" />

                <div className="space-y-6 text-lg text-white/60 font-inter leading-relaxed">
                  <p>
                    We are creating a deep-tech company at the intersection of quantum computing, artificial intelligence, and advanced computational systems to redefine how businesses solve problems, make decisions, and create value.
                  </p>
                  <p>
                    From accelerating scientific discovery and optimizing global industries to enabling next-generation financial, healthcare, and infrastructure systems, Genquantis exists to turn frontier technologies into real-world impact.
                  </p>
                  <p className="text-white/80 font-medium italic">
                    "Our mission is not merely to participate in the future of computing — but to architect it."
                  </p>
                  <p>
                    At Genquantis, we envision a world where quantum-powered intelligence becomes accessible, scalable, and transformative for enterprises and societies alike. We are building the technological foundation for a smarter, faster, and exponentially more capable future.
                  </p>
                </div>

                <div className="pt-12 flex flex-col items-start">
                  <span className="text-primary font-space tracking-widest uppercase text-sm mb-2">Architecting the Infinite</span>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-white/20" />
                    <span className="text-white font-bold text-xl tracking-tight">— Founder, Genquantis</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
          <Leaders onSeeMore={() => setShowTeam(true)} />
        </>
      )}

      <Footer />
    </div>
  );
};
