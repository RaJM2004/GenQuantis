import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Sparkles, BarChart3, Users, Shield, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const Product = () => {
  const products = [
    {
      icon: Cpu,
      name: "Automation (Robo AI)",
      description: "Enterprise-grade workflow automation delivering immediate ROI for SMEs and large corporates.",
      features: ["Workflow Automation", "Robotic Process Automation", "ERP Integration"],
      category: "SMEs, Enterprises",
      image: "https://images.openai.com/static-rsc-4/o51cd78gGIZRnr6EtYxY75fl_q5SGYPdN2t-801M_BXrNjIL3SDMnxACc8LE2H2I1dLOTL0opFLtruVQJaKLkvTxD0XKlg7OAHmgA7_335mS5GKlbsJ5qYIKW3K-cm3IlnrmFyrwymj4jWoHh_EUZmDc74J1RGSj1c7LZE89g5e9Gg423t2yQDouFFQfSXOi?purpose=fullsize"
    },
    {
      icon: BarChart3,
      name: "AI Marketing Agents",
      description: "Autonomous agents capable of lead generation and end-to-end campaign automation.",
      features: ["Lead Generation", "Campaign Automation", "Performance Analytics"],
      category: "Agencies, B2B",
      image: "https://images.openai.com/static-rsc-4/ZplliOEOLzr6tiBRmsutE2s2biQ52pPG5EUbyTZraOL5bqGOj46o_L8UHlZgqWZL8ndrIOKlIkg1Zm55QP1KmPkKlIwDpnxU4CCA33gRyTYHD8of84LmC0t53yAG23u3lv9ExCrfhMG45ZoYs88QiKGNI6EjQVhk02awnjnccNEhJbjuoT9uinPBX7vyAAQ0?purpose=fullsize"
    },
    {
      icon: Users,
      name: "AI Learning Platform",
      description: "Personalized AI tutoring and skill training infrastructure for modern institutions.",
      features: ["Personalized Tutoring", "Skill Assessment", "Curriculum Generation"],
      category: "Universities, EdTech",
      image: "https://images.openai.com/static-rsc-4/9sNWbTwEkVjPISJuYXMANoF0NVKvC_mGHKcvjud4P8ecMpMEpPA1IdcgANb0Ju86qtmjCyxFKIiwsNeno0M36mekgJ8Gzk-90_qjQ3MuDA1HKt2tBvK1A4hNIlPWJYp-IxocUo2ZsSKWjs9IIIHIa-crpdc8Yxj9JmiL9ovb9pz5VIHlrUiZtP_LCSoABjtR?purpose=fullsize"
    },
    {
      icon: Shield,
      name: "Healthcare AI",
      description: "Advanced clinic automation, patient triage, and diagnostic AI support systems.",
      features: ["Patient Triage", "Diagnostic Support", "Clinic Automation"],
      category: "Clinics, Hospitals",
      image: "https://images.openai.com/static-rsc-4/7zur3KJ6JX-K-YH1A9r6OLvHZH5r6GK8HiXmvsZvBeCbanpSxzXs_NnGBg4_5ghJwvaO43cOw0Bob-V7_8KpCK_9hn9YlQN6XsBeqlD1pPYyJ-cBBZWdiSiEnx7GM0K61nsTaxp8sW-ezhReP8Tw_V5BRQ3pn597kYweLmcmikRZaa2TQmoEk1tGQYgzBSkI?purpose=fullsize"
    },
    {
      icon: Sparkles,
      name: "Voice AI Agents",
      description: "Human-like conversational AI for call center automation and enterprise customer support.",
      features: ["Call Center Automation", "Conversational IVR", "Customer Support"],
      category: "BPOs, Enterprises",
      image: "https://images.openai.com/static-rsc-4/K_7L0ceaIUvTqNeSZPm63f6xCLgY4r7S3ARcU7l9DEwuBt8GZLWPnuy9UunW-WMFO6ueK0-NGOotSCVwdFRDMJW4uV7i8P4qxBwJr8mDEBi2XLMEsdd6gTJSgzvs5jb4oUYCrvvO0-HDANuN6yo1CD7L-a7WpA4x7sVMqq2vkwr03PRaei8kG7IAl7NmeuTs?purpose=fullsize"
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 font-inter">
      <Navbar />

      {/* Hero Section - Refined Typography */}
      <section className="relative min-h-[80vh] flex items-center px-6 lg:px-24 pt-32 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop"
            alt="Advanced Quantum Grid"
            className="w-full h-full object-cover grayscale brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(66,140,252,0.1)_0%,transparent_80%)]" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-bold tracking-[0.4em] uppercase text-primary mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Product Ecosystem
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white tracking-tighter font-space leading-[1.1]">
              Innovative <br />
              <span className="text-primary">Orchestration.</span>
            </h1>

            <p className="text-white/40 text-lg lg:text-xl max-w-xl mb-12 leading-relaxed font-inter font-light">
              Cutting-edge solutions engineered to transform your business and drive industrial innovation across the 6th Layer.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/contact" className="bg-primary text-black hover:bg-white transition-all px-10 py-4 font-bold text-[10px] tracking-widest uppercase rounded-sm inline-block w-fit">
                EXPLORE SOLUTIONS
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Product - Immersive Session */}
      <section className="relative min-h-[80vh] flex items-center bg-black border-t border-white/5 py-24 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Biologics Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight font-space tracking-tighter mb-8">
                Discover Our <br />
                <span className="text-primary">Flagship Platform.</span>
              </h2>
              <p className="text-lg lg:text-xl text-white/40 mb-12 font-light leading-relaxed max-w-2xl">
                <strong className="text-white font-semibold">Biologics Discovery Platform</strong><br />
                Powered by Advanced AI and Quantum Computing for unprecedented structural synthesis and drug mapping.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  "Quantum Drug Discovery",
                  "Accelerated R&D Pipelines",
                  "Next-Gen Predictive Modeling",
                  "Sub-atomic Simulation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/60">
                    <div className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-all">
                      <CheckCircle className="text-primary" size={14} />
                    </div>
                    <span className="text-sm font-medium tracking-tight uppercase tracking-widest text-[10px]">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-primary text-black hover:bg-white transition-all px-10 py-4 font-bold text-[10px] tracking-widest uppercase rounded-sm inline-block">
                  INITIALIZE PLATFORM
                </Link>
                <Link to="/contact" className="flex items-center gap-3 border border-white/10 text-white hover:border-primary transition-all px-10 py-4 font-bold text-[10px] tracking-widest uppercase rounded-sm backdrop-blur-sm">
                  LEARN MORE <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Suite Header */}
      <section className="bg-black pt-24 border-t border-white/5">
        <div className="text-center px-6">
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tighter font-space uppercase">
            The Product <span className="text-white/20">Suite.</span>
          </h2>
        </div>
      </section>

      {/* Products Suite Sessions */}
      {products.map((product, i) => (
        <div 
          key={product.name} 
          id={product.name.toLowerCase().replace(/[\s()]+/g, '-').replace(/-$/, '')}
          className="relative min-h-[70vh] flex flex-col lg:flex-row items-stretch border-b border-white/5"
        >
          <div className={`w-full lg:w-1/2 relative h-[40vh] lg:h-auto overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img 
                src={product.image} 
                className="w-full h-full object-cover grayscale brightness-50"
                alt={product.name}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-12 lg:p-20">
              <span className="text-primary font-bold text-[9px] tracking-[0.4em] uppercase mb-4">{product.category}</span>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 bg-black relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
            <motion.div
              initial={{ opacity: 0, x: i % 2 !== 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-8 border border-primary/20">
                <product.icon size={20} />
              </div>
              <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tighter font-space leading-tight uppercase">
                {product.name}
              </h3>
              <p className="text-white/40 text-base lg:text-lg leading-relaxed mb-10 max-w-xl font-inter font-light">
                {product.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/30">
                    <div className="w-1 h-1 rounded-full bg-primary/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-8 py-4 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-primary hover:text-black hover:border-primary transition-all group/btn"
              >
                LEARN MORE <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      ))}

      {/* Final Enterprise Module */}
      <section className="relative min-h-[70vh] flex items-center bg-black border-t border-white/5 py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://blog.iaac.net/wp-content/uploads/2024/03/1_3srZsMKZNODm6jpxr7Klwg.png" 
            className="w-full h-full object-cover grayscale opacity-20"
            alt="Enterprise Solution Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary text-black text-[9px] font-bold uppercase tracking-widest rounded-full mb-8">
              <Shield size={12} />
              Enterprise Solution
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-none font-space mb-8 uppercase">
              Integrated <span className="text-white/20">AI Suite.</span>
            </h2>
            <p className="text-white/40 text-lg lg:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Our comprehensive enterprise solution combines the power of quantum computing and expert consulting to transform global operations.
            </p>
            
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-primary text-black hover:bg-white transition-all px-10 py-5 font-bold text-[10px] tracking-widest uppercase rounded-sm shadow-[0_0_30px_rgba(66,140,252,0.4)] group/btn">
              CONTACT SALES <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
