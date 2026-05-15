import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Activity, Shield, Beaker } from 'lucide-react';

export const IntelligenceSection = () => {
  return (
    <>
      {/* Intelligence Hero / Intro Section */}
      <section id="intelligence" className="relative min-h-[80vh] flex items-center justify-center text-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP3u5cj3J8BejkfvmrxvMysCOKT-WLncOlyMUVGze9nan6Lu5o1AM2l-uvW-YSx7FU0VVa-ddMCWpDwXEhyu0Cs-YNpKRrCDXKLPM7RzDmAJ_9PvML8T1Cod16oiL9CAGAaolHsGJWqDpwtRoTUwU4XKiOJPmOkIA4NUiKc_XxOLt67V4ss6Oz3Q6WqB7ID6-Yc2ToA8hdm7kIle8b4bW4fa_JTQsGwmBS1jE1BnE3hwQiFaSYXi9O1m1qcaTiyOWxTmb1pU3Drjw"
            className="w-full h-full object-cover opacity-60"
            alt="Intelligence Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 mb-12 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            System Online: Quantum Core Active
          </motion.div>

          <h2 className="text-[56px] lg:text-[100px] font-bold text-white mb-8 leading-[1] tracking-tighter font-space">
            Beyond Binary.<br />
            <span className="text-[#60A5FA]">Beyond AI.</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed mb-10 font-inter">
            Step into the 6<span className="text-[0.5em] ml-0.5 relative -top-[0.8em]">th</span> Layer. GenQuantis merges generative neural architectures with high-stakes quantum protocols, redefining computational limits for enterprise visionaries.
          </p>
        </div>
      </section>

      {/* The Classical Wall Section */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-[42px] lg:text-[64px] font-bold text-white mb-8 leading-tight font-space">
                The Classical Wall
              </h3>
              <p className="text-white/60 text-lg lg:text-xl mb-12 leading-relaxed max-w-xl font-inter">
                Traditional AI architectures hit a computational ceiling—bottlenecked by binary processing and linear data traversal. As dataset complexity grows exponentially, standard neural networks face diminishing returns in speed and cognitive depth.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-center py-6 border-t border-white/5">
                  <AlertTriangle className="text-orange-500/80 shrink-0" size={20} />
                  <p className="text-white/60 text-base font-inter">Linear processing latency in hyper-scale datasets.</p>
                </div>
                <div className="flex gap-4 items-center py-6 border-t border-white/5">
                  <AlertTriangle className="text-orange-500/80 shrink-0" size={20} />
                  <p className="text-white/60 text-base font-inter">Cryptographic vulnerabilities in standard cloud environments.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb_1-eGVcItmHk6cf39PV81GxT7o1JVFDdjr93I7DD7iINc-ZoBuaSmar5N7ez-kf0XEi0JSk9q69nmd5UBIaiYrsSTaR_j27pPqvdR30L-yzbGb9IXKpbjuR8ltmqOtF0Krmw5K8LhFNpJZJmu8VLK11Zaf2FO5_YVS8ndUebdVx9fHyYQPkYL2qaXpksYZDf4FZ2cbNBfmkgoJ9OYXG6cJPtEZpliw_vW2den4O5oAWwNEFUXhvH_8ycIrLoOeRqhf-zsq1z79U"
                className="w-full object-cover aspect-video lg:aspect-square opacity-60"
                alt="Classical Wall Illustration"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The 6th Layer Convergence Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQaPsNKdV7tZQZoQUAntoytAh6wTNzYejwyyADipUViDgL5G9TBmz9SBV25nMEX2HE-RgmdP87qucqYcKo07-sN7U-g9uvSZPX83HOn5WcSFT7W_78LnhMEP0ssjUk1khVXqL-k90uUe1jcblWacFQkM-f5CdhHfwnUosP_oe7CYsIUwDMIhTQvoRPxRXIS4ryzsv3sh4JWg7FPIhzpU-99f4xviCYwiEDQ7eYvMqv4rJPWCtR3O-1xqXpPWm5IEjr9z6YG0f1Vn8"
            className="w-full h-full object-cover opacity-25"
            alt="Convergence Waves Background"
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="text-4xl lg:text-[64px] font-bold text-white mb-6 leading-none tracking-tighter font-space">
              The 6<span className="text-[0.4em] ml-0.5 relative -top-[1.2em] uppercase">th</span> Layer Convergence
            </h2>
            <p className="text-white/60 text-sm lg:text-[16px] leading-relaxed max-w-2xl mx-auto font-inter">
              By bypassing binary limitations, we introduce a hybrid architecture where generative AI models operate on quantum-entangled pathways, enabling non-linear reasoning and instantaneous data correlation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[1200px] mx-auto"
          >
            <div className="relative aspect-[21/9] lg:aspect-[3/1] w-full rounded-md overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(66,140,252,0.1)] bg-[#050B15]">
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#428CFC] to-transparent z-20" />
              <div className="absolute inset-0 bg-[#428CFC]/5 z-10 pointer-events-none" />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg1gWSZk_uRUtjXWdCrE-GMkqQfzy15H8TC201Q3oOwcW3RfyDCE10gEj0HumI2ZgFPRloi1YiIMu5QZpm-tAVgwb63yD-yTzG9mV-Xv9HiQuknO_j9qxchzD9O52VtxRTuOWmjyXyNUnxlAlnzhEO_U4paJ83GcDd_wiS0Yyqd7HvpSdtQYhmg17_N7qSg0Y57BLb9Gn0JmbF66NJyQQoMvxw3lmtnjX3clNmMgx6QJyeOSGSBGeqDdZ2tRkIbq1s_GhNtSDtFw8"
                className="w-full h-full object-cover object-center opacity-90 scale-105"
                alt="Convergence Architecture"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architectural Pillars Section */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-white mb-16 font-space relative"
          >
            Architectural Pillars
            <div className="absolute -bottom-4 left-0 w-24 h-[2px] bg-primary/30" />
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                <Activity size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-space">Quantum Diagnostics</h3>
              <p className="text-white/40 leading-relaxed font-inter">
                Real-time quantum state analysis of neural net health, instantly identifying structural anomalies before execution.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-b from-[#1E293B] to-black border border-primary/30 shadow-[0_0_30px_rgba(66,140,252,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-8">
                <Shield size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-space">Sub-atomic Security</h3>
              <p className="text-white/60 leading-relaxed font-inter">
                Cryptographic protocols based on quantum uncertainty, rendering data streams mathematically unreachable by classical means.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/60 mb-8 group-hover:bg-primary/20 group-hover:text-primary transition-all">
                <Beaker size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-space">Accelerated Discovery</h3>
              <p className="text-white/40 leading-relaxed font-inter">
                Hyper-fast R&D pipelines for molecular mapping and complex financial structuring, simulating outcomes in microseconds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
