import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ShieldAlert, Network, Layout, Router as RouterIcon, Cpu, Database } from 'lucide-react';

export const Security = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-24 pt-20 overflow-hidden">
        {/* Background Image - Technical Diagram */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuASzn0XNnKQLw6aoepte38GKB4v_bxOQw-TGn03iVHLinC1aa4rYY7gtj_OwxDeexYeLKAb85i86NM7euc3JOFhtrXPnFfLaWfyOXXnHjG2vYQq_anWtK6X3oFEsHCOy6X_Q-1ZSJo1Rlabmdcc013jMlcDw7FVGxNFzmd6M2eV0PQ9bBp54EmhHMqEvqAKpafmTbmKPU_gbCaeZePgLPxrr26idk9AZKzzjJxbdmRZED6XwopqPh_dO7GEI91tvLZQ02Dsxx0_pK4" 
            className="w-full h-full object-cover opacity-40" 
            alt="Security Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-bold tracking-[0.2em] uppercase text-white/60 mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <span className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                SYSTEM ACTIVE: PQC ENCRYPTED
              </motion.div>

              <h1 className="text-[38px] lg:text-[56px] font-bold text-white mb-6 leading-[1.1] tracking-tighter max-w-lg font-space">
                Architectural Resilience.<br />
                <span className="text-[#60A5FA]">Beyond the Quantum Horizon.</span>
              </h1>

              <p className="text-white/50 text-xs lg:text-sm max-w-sm mb-8 leading-relaxed font-inter">
                Post-Quantum Cryptography (PQC) engineered for the 6th Layer. Secure your enterprise against future threats today with impenetrable mathematical foundations.
              </p>

              <Link 
                to="/contact"
                className="inline-flex bg-[#60A5FA] text-white px-8 py-3.5 rounded-md font-bold tracking-widest uppercase text-[9px] items-center gap-3 shadow-[0_0_30px_rgba(96,165,250,0.3)] transition-transform hover:scale-105 active:scale-95"
              >
                INITIALIZE SECURITY PROTOCOL
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square w-full max-w-[480px] ml-auto"
            >
              {/* Removed the square box/card container */}
              <div className="relative z-10 w-full h-full overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeeaBe6_jtPxjvz2cLGZVtSlWBT1QaVyGUTqfHE26HS6QJBdICMoxk03_gBhO96OARX4IIw7KABzoQX67DW3uXDS_oZ93xf3L6Y_LtOJjHYYsg0lJ1wXT8ombuq4Er9jMbd3zszFmg-UY9L8Q4HFexghK1MdQ_pg_AwMsSnR2rH2Vq1F5NDpU3cUwknOy_aHoDAKiHsapdu-hjaIUi-jSLlMUg_EcbV3hJE18F9S_fOtbgmQkgjbwqCK1kLEf0EHBMJrU5auyWs4M" 
                  className="w-full h-full object-contain" 
                  alt="Lock Visualization"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Post-Quantum Cryptography Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-[52px] font-bold text-white mb-6 leading-tight font-space tracking-tight">
                Post-Quantum<br />Cryptography (PQC)
              </h2>
              <div className="w-16 h-[1px] bg-[#2D3748] mb-8" />
              <p className="text-white/80 text-sm lg:text-base mb-10 leading-relaxed font-inter max-w-xl">
                As quantum computing capabilities scale exponentially, classical encryption paradigms face imminent obsolescence. GenQuantis deploys advanced, NIST-compliant Post-Quantum Cryptographic algorithms to future-proof your digital infrastructure. Our protocols are designed to withstand attacks from both classical supercomputers and emerging quantum processors.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-4 items-start group">
                  <div className="w-8 h-8 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <ShieldAlert size={28} strokeWidth={1.5} />
                  </div>
                  <div className="border-b border-white/5 pb-6 w-full">
                    <h4 className="text-[#60A5FA] font-bold text-lg mb-1 font-space">Lattice-Based Cryptography</h4>
                    <p className="text-white/60 text-sm font-inter">Resilient against Shor's algorithm and complex algebraic attacks.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-8 h-8 flex items-center justify-center text-[#60A5FA] shrink-0">
                    <Network size={28} strokeWidth={1.5} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-[#60A5FA] font-bold text-lg mb-1 font-space">Hash-Based Signatures</h4>
                    <p className="text-white/60 text-sm font-inter">Stateful and stateless digital signatures for immutable authenticity.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQBkm9D_DdLYrAQ8G2G_nd098lXeknGCDEbNT-wcsgS7KF6retSSL80fCxTzBBgrs4LRCD9FlZChnywEdK2blyvte3cVEHSgDklegmAptI1lJxB32WO4dZdKxTQL-pYTL25xfH4bJSOv5PyczjovzP4jIHEaf0YA7Gz3OuXbVfaM2OWkyWfTeVpoyMaDTEuyQ8aH5jdx1W2YQ565uKaQDcA5jOJmdXuz6PgEoYZt7xoxWBRj3v03fojGIL80RNUqKRdEVDKauBCS0" 
                  className="w-full h-full object-cover opacity-80" 
                  alt="Post-Quantum Visualization"
                />
              </div>
              <div className="absolute inset-0 bg-primary/5 blur-[100px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Protection Layers Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] lg:text-[48px] font-bold text-white mb-4 font-space">
              Data Protection Layers
            </h2>
            <p className="text-white/50 text-sm lg:text-base max-w-3xl mx-auto font-inter">
              Our 6th Layer Defense-in-Depth strategy provides a unified, holographic approach to security, ensuring every interaction vector is isolated and fortified.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Layer 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold text-white font-space uppercase tracking-widest opacity-60">Layer 01</span>
                <Layout className="text-[#60A5FA]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-space">Application Edge</h3>
              <p className="text-white/30 text-xs leading-relaxed font-inter">
                Continuous runtime monitoring and anomaly detection at the user interface boundary.
              </p>
            </motion.div>

            {/* Layer 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold text-white font-space uppercase tracking-widest opacity-60">Layer 02</span>
                <RouterIcon className="text-[#60A5FA]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-space">Network Transit</h3>
              <p className="text-white/30 text-xs leading-relaxed font-inter">
                Quantum-resistant tunneling protocols securing data-in-motion across all physical nodes.
              </p>
            </motion.div>

            {/* Layer 03 - Active */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-xl bg-[#60A5FA]/[0.02] border border-[#60A5FA]/30 shadow-[0_0_30px_rgba(96,165,250,0.05)] transition-all group"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold text-[#60A5FA] font-space uppercase tracking-widest">Layer 03</span>
                <Cpu className="text-[#60A5FA]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-space">Quantum Barrier</h3>
              <p className="text-white/50 text-xs leading-relaxed font-inter">
                Primary encryption facade utilizing hybrid classical-quantum cryptographic primitives.
              </p>
            </motion.div>

            {/* Layer 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start mb-10">
                <span className="text-[10px] font-bold text-white font-space uppercase tracking-widest opacity-60">Layer 04</span>
                <Database className="text-[#60A5FA]" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-space">Core Repository</h3>
              <p className="text-white/30 text-xs leading-relaxed font-inter">
                Impenetrable data-at-rest storage with multi-factor, sharded cryptographic keys.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
