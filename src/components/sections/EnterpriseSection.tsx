import React from 'react';
import { motion } from 'framer-motion';

export const EnterpriseSection = () => {
  return (
    <>
      {/* Enterprise Hero / Intro Section */}
      <section id="enterprise" className="relative min-h-[80vh] flex items-center justify-center text-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-40 grayscale" 
            alt="Technical Background"
          />
          <div className="absolute inset-0 bg-[#0B1120]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] lg:text-[80px] font-bold text-[#E2E8F0] mb-8 leading-[1] tracking-tighter font-space"
          >
            Enterprise Intelligence.<br />
            Redefined by the 6<span className="text-[0.5em] ml-0.5 relative -top-[0.8em]">th</span> Layer.
          </motion.h2>
          <p className="text-[#94A3B8] text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-inter">
            Applying quantum-classical hybrid models to the world's most complex industrial challenges. Seamless integration. Unprecedented computational clarity.
          </p>
        </div>
      </section>

      {/* Life Sciences & Biotech Modules */}
      <section id="healthcare-biotech" className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
            <h2 className="text-[32px] lg:text-[56px] font-bold text-[#E2E8F0] font-space leading-tight">
              Life Sciences & Biotech
            </h2>
            <div className="text-primary font-space text-[10px] font-bold tracking-[0.3em] mb-4">
              01 // LAYER_BIO
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
              <div className="rounded-xl overflow-hidden mb-10 aspect-[16/9] border border-white/10 shadow-2xl relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD52vvO5Q1MeQphnaWqkGuRjINwENMVZLse-5wCX5SJ4ISXjBFNmerasv4WfQuo_RZMIhtrQHfluP_BpUpCocgbiBrJvTrZB_fx5qrPV4MoLDTWqnKt26wSDfflN8n215YsiJ5_igrIO-ZmK47UNtZ_YTGKKOIkHYMtAcjFC8OJqc0snbhCMQ7exJfMg-tUpTPu4PLp17FY6YGy-Yzeu1cJR_UJeZy1v4jnL068n9Ngmh_XBMAYMM5ZYAX0PwQCb9cRV50aig6SYWY" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
                  alt="Protein Simulation"
                />
              </div>
              <h3 className="text-2xl lg:text-[40px] font-bold text-[#E2E8F0] mb-6 font-space tracking-tight">Protein Simulation at Scale</h3>
              <p className="text-[#94A3B8] text-sm lg:text-base leading-relaxed font-inter">
                Accelerate drug discovery workflows by modeling multi-million atom structures with sub-nanosecond precision across hybrid quantum topologies.
              </p>
            </div>

            <div className="p-10 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
              <div className="rounded-xl overflow-hidden mb-10 aspect-[16/9] border border-white/10 shadow-2xl relative">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDrBVGJMcfVy3W2ObUGAZMl7USmGh9Ku3_KvoeOgOwZHLZLQ4K4VGp3Bch9SliArU4LQbjaw8EwH_XO_YdO6D5O3Ay4d3aNRwWSe1flVdDaneFyPmfcjhuhojd_m6DsR0DeHd1j2egFSW9iWWsi3I7NhHUjaoZJ0WJn6ti48WicQfnOid8wke_d8uX553YFzQbgtpPQfFNflwy8FPXdjXpwvEj__VLLOmEoiJrfe18cG2_w0HkzpPym6zsJsiLeqRoA4WSzBNO9ts" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
                  alt="Molecular Discovery"
                />
              </div>
              <h3 className="text-2xl lg:text-[40px] font-bold text-[#E2E8F0] mb-6 font-space tracking-tight">Molecular Discovery</h3>
              <p className="text-[#94A3B8] text-sm lg:text-base leading-relaxed font-inter">
                Identify novel therapeutic pathways utilizing 6<span className="text-[0.5em] ml-0.5 relative -top-[0.8em]">th</span> Layer generative algorithms that map vast chemical spaces instantaneously.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
