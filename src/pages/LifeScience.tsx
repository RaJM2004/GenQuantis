import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Beaker } from 'lucide-react';

export const LifeScience = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-24 pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD_zxJIxFM8fVEC7RSHALnPl-eMtW6ucVtWA3BjL1gEeSil8Cux8dZp8rUxU9j1fqdN5ZTdMK0KY1eIDxvVYTcR7G2f1BgHcH9xXUic-cSR8LNeQBAQ3UsBbN4vB7ooUvBJZMCwo90d8PMlLh4bVMidm4j5l6sARo_ijV9FxuJWCfx4FAcHHwASoTTpYwI55mF88GZDSnoYSe0O7LAtSIlK8sAK8Ow3gB1YS96S2W975u9BJFWHJIY1HLFXKRzSiLb_B9z_B2YIVY"
            className="w-full h-full object-cover"
            alt="Life Science Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-12 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            System Operational: Quantum Core Active
          </motion.div>

          <h1 className="text-[56px] lg:text-[100px] font-bold text-white mb-8 leading-[1] tracking-tighter max-w-4xl font-space">
            The 6<sup className="text-[0.6em] ml-0.5">th</sup> Layer of<br />
            <span className="text-[#A5C9FF]">Life Sciences</span>
          </h1>

          <p className="text-white/70 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-inter">
            Simulate biological complexity at quantum scales. GenQuantis OS maps the fundamental fabric of organic systems, enabling unprecedented precision in molecular discovery and digital twin orchestration.
          </p>

          <Link
            to="/contact"
            className="inline-flex bg-[#60A5FA] text-white px-8 py-4 rounded-md font-bold tracking-widest uppercase text-xs items-center gap-3 shadow-[0_0_30px_rgba(96,165,250,0.3)] transition-transform hover:scale-105 active:scale-95"
          >
            <Beaker size={20} /> INITIALIZE DIGITAL TWIN
          </Link>
        </div>
      </section>

      {/* Quantum Layer Session */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight font-space">
                Quantum Biological<br />Mapping
              </h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed font-inter">
                Our proprietary quantum layer bypasses classical limitations, allowing for the simulation of multi-million atom biological structures with sub-nanosecond precision.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Sub-atomic Precision', 'Real-time Folding', 'Entropy Management'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX0jUZ4gRkxazF0hBTUb7BDyNwsmfwToGiFOtjDqwXc84oThGxb7NuV8ci84HVsrsbzoQajO3WbepMNauQh493xhnEaTCKSapqAwJcI4Hm6fOzSpro1-anGc22waKi7TxorhGgIkbHyymgWlSvMrdnCcKRMioX7J2FO8nkbA91txom0hXK4gVTkCo77pC5q8wPQHdIgXydbANCWnQNHyXFIFn-biFgdwIV6QxmKXtEfNeo5vKQTbcNrKyTaampTDK6n-_DCVtg75E"
                  className="w-full object-cover"
                  alt="Quantum Mapping"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biologics AI Digital Twin Section */}
      <section className="py-32 bg-[#050B15] relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, order: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight font-space">
                Biologics AI<br />Digital Twin
              </h2>
              <p className="text-white/50 text-lg mb-12 leading-relaxed font-inter">
                Create exact digital replicas of organic systems. Our AI-driven twins predict molecular interactions and systemic responses, significantly reducing R&D cycles for therapeutic biologics.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    {/* DNA Icon placeholder if lucide-react doesn't have Dna, but it does */}
                    <Beaker size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Genomic Fidelity</h4>
                    <p className="text-white/30 text-xs">High-resolution mapping of genetic variations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, order: 2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:order-1 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYynEtipaIl4CB4wp5I13pqLSIAUVzmqgBDubhhCKTfV4bZSRd5OX4fxiqxnSutgEhTWeuq3NIzfJVeoFxeZp7kBXMn81wBAHtWuNZxmiqEQwiehLw9ecxJO2dt0BfPrdwuPyAG-qD4RQIGuV4UxJzvATQDP4P9MXhcss6vnucU3VSBYrNfTC1-ggWK-PI1FqQe6JqF7amGkfZY3bDebOpMmCAf9c_1PtE5ECF5JANrlLDLwbYukNiX59Y9kkaWEugi6jknQVbnHU"
                  className="w-full object-cover"
                  alt="Digital Twin Visualization"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
