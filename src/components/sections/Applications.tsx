import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Microscope, TrendingUp, Factory, ShieldCheck, Database, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const appData = [
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "MOLECULAR MODELING & SYNTHESIS",
    desc: "Simulate complex protein folding and molecular interactions at unprecedented scales. By computing billions of potential bindings simultaneously, GenQuantis OS accelerates therapeutic discovery from years to microseconds.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4rI08j8Psg7ZS1xFuxiY7O9kRTyUdyUZv3qObOWT8ohqYDu_N4giekSTEah-N-Gw3RPnX4-fP7hL2Qq7EqduMxUvkW7zS87hKMLC6FppxIl0IdXMxANtr9f5oIkhv8KmWkqYpM29NBL9PuywtEzQIaaYBAN2hnENkVWJtoZglrQrW0qpKLlqZgyCZtmO1O1TLVsJWoesIjkCA60a6vIgNL2Fh52Ec3yYCiO5KtROUHSsPyrPtGoBpjaajFFeg3--LKCT0Qlw44lc",
    icon: <Microscope size={24} />,
    color: "from-blue-500/20",
    features: [
      { label: "TARGET IDENTIFICATION", detail: "Isolate anomaly markers with 99.99% predictive accuracy." },
      { label: "TOXICITY SIMULATION", detail: "Pre-clinical synthetic trials mapping multi-organ impact." }
    ],
    btn: "EXPLORE CLINICAL MODELS"
  },
  {
    id: "finance",
    title: "Finance",
    subtitle: "SYSTEMIC RISK OPTIMIZATION",
    desc: "Evaluate infinite market variables, global events, and sentiment indices simultaneously. Construct hyper-resilient investment portfolios that anticipate volatility before it manifests in classical data streams.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkAYWCDkGP_T_S6kc40d58dRhrRBNQVw_F6bzvHJJL4oa-JPQQqyf27uTsD3qwcJyvun37G0QXiGkBSfWr_JZWymzkRqVR-mGxjfSsunctwjkCzPrqZXgfGAoPDbhvLma16VP0Ro4H2gHSZ5qtwYksGd46ccM7TU7qS7cp9yG4nYmQFvw3V6kkTUhOvusjemMg4Sf3rwY0ep7qtgjbkD1z8y_oZnSgPBmTYLcMNmGeZK7MCGqEb6vkeESjRKfoEjed6JOayjBpBR8",
    icon: <TrendingUp size={24} />,
    color: "from-emerald-500/20",
    features: [
      { label: "ALGORITHMIC STRATEGY", detail: "Self-correcting execution protocols operating at microsecond latency." },
      { label: "BLACK SWAN MODELING", detail: "Stress-testing against exponentially improbable market collisions." }
    ],
    btn: "VIEW FINANCIAL ARCHITECTURES",
    badge: "+14.28% 📈"
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "GLOBAL SUPPLY CHAIN SYNTHESIS",
    desc: "Create omniscient digital twins of global supply networks. Predict cascading disruptions across geopolitical boundaries and optimize logistics through quantum-pathfinding algorithms.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-nUno-yWakcFjUCOwO5296r_-eM4-v5TnrsM6AcnVL0Iqr4dBhLvKHl2z3t2g8_NBJEe8TapTNyTC-YcIRFAj98KrzZYFY_3CWHtjVwuk8rE6u5j-Podcu5UDIy7wAY1RLLkFDS2GfVYcVdWtxKlpp-AXmPe-sqYGcd_nhrsQIVHTcHtPKVfUi9hMbkoq4ej6KMnc6X69vD4CqZHPuWp-OI3ohDbrFhX5iZQNNIrpnvkNoblwsrZuF_aDXmDQn5Z2UL4Eq2pV0eA",
    icon: <Factory size={24} />,
    color: "from-cyan-500/20",
    features: [
      { label: "RESOURCE ALLOCATION", detail: "Dynamic balancing of inventory against predicted demand spikes." },
      { label: "PREDICTIVE MAINTENANCE", detail: "Acoustic and vibrational ML models foresee hardware failure." }
    ],
    btn: "ANALYZE SUPPLY NETWORKS"
  }
];

export const Applications = () => {
  return (
    <section id="applications" className="bg-black py-0">
      <div className="py-24 lg:py-32 text-center px-6 border-b border-white/5">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-[80px] font-bold text-white mb-6 tracking-tighter font-space"
        >
          Architectural Applications
        </motion.h2>
        <p className="text-white/40 max-w-2xl mx-auto text-lg">
          Deploying the 6<span className="text-[0.5em] ml-0.5 relative -top-[0.8em]">th</span> Layer across the world's most critical industrial verticals.
        </p>
      </div>

      <div className="flex flex-col">
        {appData.map((app, i) => (
          <div key={app.id} className="relative min-h-screen flex flex-col lg:flex-row items-stretch border-b border-white/5">
            {/* Immersive Image Column */}
            <div className={`w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={app.img} 
                  className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                  alt={app.title}
                />
              </motion.div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-20">
                {app.badge && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-6 w-fit bg-black/80 backdrop-blur-xl border border-green-500/30 px-6 py-3 rounded-xl"
                  >
                    <div className="text-green-500 font-space font-bold text-xl">{app.badge}</div>
                    <div className="text-white/30 text-[9px] font-bold tracking-[0.2em] uppercase">VOLATILITY INDEXED</div>
                  </motion.div>
                )}
                <div className="flex gap-4 items-center mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary backdrop-blur-md border border-primary/30">
                    {app.icon}
                  </div>
                  <div className="h-[1px] w-20 bg-primary/30" />
                  <span className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase">SECTOR_{app.id.toUpperCase()}</span>
                </div>
              </div>
            </div>

            {/* Technical Detail Column */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-black relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              {/* Subtle accent gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} to-transparent opacity-10 pointer-events-none`} />

              <motion.div
                initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <h3 className="text-white/40 font-bold text-sm tracking-[0.3em] uppercase mb-4 font-space">
                  {app.subtitle}
                </h3>
                <h2 className="text-5xl lg:text-[72px] font-bold text-white mb-8 tracking-tighter leading-none font-space">
                  {app.title}
                </h2>
                <p className="text-white/60 text-lg lg:text-xl leading-relaxed mb-12 max-w-xl font-inter">
                  {app.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-12 mb-16">
                  {app.features.map((feature, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <h4 className="text-white font-bold text-xs tracking-widest uppercase font-space">
                          {feature.label}
                        </h4>
                      </div>
                      <p className="text-white/30 text-sm leading-relaxed border-l border-white/5 pl-4 ml-0.5">
                        {feature.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-10 py-5 rounded-sm text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-primary hover:text-black hover:border-primary transition-all group/btn shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  {app.btn} <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
