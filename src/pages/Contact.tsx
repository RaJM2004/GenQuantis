import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30 font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:px-24 flex flex-col items-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Contact Background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-space text-[10px] font-bold tracking-[0.4em] uppercase mb-6"
          >
            Connectivity Node 06
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-[80px] font-bold text-white mb-8 leading-[1] tracking-tighter max-w-4xl font-space"
          >
            Initiate Contact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg lg:text-xl max-w-2xl leading-relaxed mb-12 mx-auto"
          >
            Bridge the gap between your enterprise and the 6th Layer. Our orchestration team is ready to synchronize your infrastructure.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-32 px-6 lg:px-24 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 p-10 lg:p-16 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-10 font-space">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Work Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter"
                    placeholder="john@acme.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white focus:outline-none focus:border-primary/50 transition-all font-inter resize-none"
                    placeholder="How can we help you transcend your limits?"
                  />
                </div>
                <button className="w-full bg-primary text-black font-bold text-[10px] tracking-[0.3em] uppercase py-5 rounded-lg hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20">
                  <Send size={16} /> INITIATE PROTOCOL
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <div className="lg:pl-12 space-y-12 py-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Global Headquarters</h3>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-white text-xl font-bold font-space mb-2">T-Hub Phase 2</p>
                    <p className="text-white/50 leading-relaxed font-inter">
                      Raidurg, Hyderabad, Telangana<br />
                      India, 500081
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-6">Direct Communication</h3>
                <div className="space-y-6">
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail size={24} />
                    </div>
                    <p className="text-white text-lg font-bold font-space">connect@genquantis.ai</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Phone size={24} />
                    </div>
                    <p className="text-white text-lg font-bold font-space">+91 7036955133</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-primary/[0.03] border border-primary/10"
              >
                <div className="flex gap-4 items-center mb-4 text-primary">
                  <MessageSquare size={20} />
                  <span className="font-bold text-xs tracking-widest uppercase">Support Protocol</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed">
                  Existing enterprise partners can access the 24/7 priority orchestration channel through their dedicated security token.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
