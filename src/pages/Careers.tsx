import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Briefcase, MapPin, Clock, ArrowRight, Brain, Zap, Globe } from 'lucide-react';

const JobCard = ({ title, location, experience, department, about, responsibilities, qualifications, preferred, delay }: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group p-8 lg:p-12 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 group-hover:bg-primary/10 transition-colors pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider">
              <Zap size={12} />
              {department}
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors font-space">
              {title}
            </h3>
            <div className="flex flex-wrap gap-6 text-white/40 text-sm font-inter">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary/60" />
                {location}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary/60" />
                {experience}
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 hover:bg-primary text-white hover:text-black font-bold text-xs uppercase tracking-widest transition-all group/btn self-start lg:self-center"
          >
            {isExpanded ? 'Hide Details' : 'View Details'}
            <ArrowRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-8 border-t border-white/5 space-y-10 font-inter">
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">About the Role</h4>
                  <p className="text-white/60 leading-relaxed">{about}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Key Responsibilities</h4>
                    <ul className="space-y-3">
                      {responsibilities.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-white/50 text-sm">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Required Qualifications</h4>
                    <ul className="space-y-3">
                      {qualifications.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-white/50 text-sm">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Preferred Skills</h4>
                    <ul className="space-y-3">
                      {preferred.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-white/50 text-sm">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">What We Offer</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Frontier Innovation",
                        "Advanced Research",
                        "Competitive Pay",
                        "ESOP Opportunities",
                        "Flexible Culture",
                        "Global Exposure"
                      ].map((item, i) => (
                        <div key={i} className="bg-white/5 px-4 py-2 rounded-lg text-white/40 text-[10px] font-bold uppercase tracking-wider text-center">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex justify-center">
                  <a 
                    href="mailto:careers@genquantis.com" 
                    className="bg-primary text-black font-bold text-xs uppercase tracking-[0.2em] px-12 py-4 rounded-full hover:bg-white transition-all"
                  >
                    Apply for this position
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export const Careers = () => {
  const jobs = [
    {
      title: "Quantum Computing Research Engineer",
      location: "Hyderabad / Bengaluru / Remote",
      experience: "3–8 Years",
      department: "Quantum Research & Advanced Systems",
      about: "Genquantis is seeking a Quantum Computing Research Engineer to develop next-generation quantum algorithms, optimization frameworks, and hybrid quantum-classical architectures for enterprise applications. You will work closely with AI scientists, systems engineers, and deep-tech researchers to translate advanced theoretical concepts into scalable commercial solutions.",
      responsibilities: [
        "Design and implement quantum algorithms for optimization, simulation, and machine learning",
        "Build hybrid quantum-classical workflows",
        "Conduct research in quantum advantage use cases across industries",
        "Collaborate with engineering teams to deploy experimental systems",
        "Publish technical findings and contribute to IP development"
      ],
      qualifications: [
        "Master’s or PhD in Quantum Computing, Physics, Computer Science, or related fields",
        "Experience with Qiskit, Cirq, PennyLane, or equivalent frameworks",
        "Strong understanding of linear algebra, quantum mechanics, and optimization",
        "Proficiency in Python and scientific computing"
      ],
      preferred: [
        "Experience with cloud quantum platforms",
        "Knowledge of AI/ML systems",
        "Research publications or patents in quantum technologies"
      ],
      delay: 0.1
    },
    {
      title: "AI & Deep Tech Systems Architect",
      location: "Hyderabad / Remote",
      experience: "5–10 Years",
      department: "Artificial Intelligence & Platform Engineering",
      about: "We are looking for a visionary AI & Deep Tech Systems Architect to lead the design of scalable intelligent systems that integrate AI, quantum computing, and advanced analytics platforms. This role requires both strategic thinking and hands-on technical leadership.",
      responsibilities: [
        "Architect enterprise-grade AI and deep-tech platforms",
        "Design scalable distributed systems and intelligent infrastructure",
        "Lead integration of quantum and AI workflows",
        "Collaborate with product and research teams on next-generation solutions",
        "Drive platform performance, security, and scalability"
      ],
      qualifications: [
        "Bachelor’s or Master’s degree in Computer Science or related field",
        "Strong experience in AI infrastructure and cloud-native systems",
        "Expertise in Python, distributed systems, APIs, and data engineering",
        "Experience with ML frameworks and scalable architecture design"
      ],
      preferred: [
        "Exposure to quantum computing ecosystems",
        "Experience in enterprise SaaS or deep-tech startups",
        "Understanding of cybersecurity and data governance"
      ],
      delay: 0.2
    },
    {
      title: "Business Strategy & Innovation Lead",
      location: "Hyderabad / Bengaluru",
      experience: "4–12 Years",
      department: "Strategy & Innovation",
      about: "Genquantis is seeking a Business Strategy & Innovation Lead to help shape market expansion, strategic partnerships, and commercialization of frontier technologies. This role bridges technology vision with real-world business transformation.",
      responsibilities: [
        "Identify emerging market opportunities in quantum and AI ecosystems",
        "Build strategic partnerships with enterprises, academia, and governments",
        "Develop go-to-market strategies for deep-tech solutions",
        "Conduct competitive and industry analysis",
        "Support fundraising, investor relations, and innovation initiatives"
      ],
      qualifications: [
        "MBA or equivalent strategic/business background",
        "Experience in technology consulting, innovation strategy, or enterprise transformation",
        "Strong communication and stakeholder management skills",
        "Analytical mindset with understanding of emerging technologies"
      ],
      preferred: [
        "Exposure to deep-tech or quantum computing industries",
        "Startup or venture ecosystem experience",
        "International business development exposure"
      ],
      delay: 0.3
    }
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden selection:bg-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6 pt-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Careers Background"
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
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#428CFC]" />
            SYSTEM STATUS: RECRUITING
          </motion.div>

          <h1 className="text-5xl lg:text-[100px] font-bold text-white mb-8 leading-[1.1] tracking-tighter max-w-5xl mx-auto font-space">
            Build the Future <br />
            <span className="text-primary">Beyond Classical Computing</span>
          </h1>

          <p className="text-white/50 text-lg lg:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-inter">
            At Genquantis, we are building the next frontier of intelligence through quantum computing, deep technology, and advanced AI systems.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-space leading-tight">
                Our mission is to solve <span className="text-primary">computationally complex</span> challenges.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-inter">
                We are looking for exceptional thinkers, builders, and researchers who are passionate about shaping the future of quantum-powered enterprise technology. Our environment is built for those who thrive in the intersection of theory and real-world impact.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Brain size={20} className="text-primary" />
                  <span className="text-white/80 font-space text-sm uppercase tracking-widest">Deep Tech</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Globe size={20} className="text-primary" />
                  <span className="text-white/80 font-space text-sm uppercase tracking-widest">Global Impact</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                alt="Genquantis Office Culture"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white font-space mb-6">Open Positions</h2>
              <p className="text-white/40 text-lg lg:text-xl font-inter">Join our mission to architect the future of computing.</p>
            </div>
            <div className="flex items-center gap-4 text-primary font-bold text-sm tracking-widest uppercase bg-primary/10 px-6 py-3 rounded-full border border-primary/20">
              <Briefcase size={18} />
              3 ROLES ACTIVE
            </div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-white font-space leading-tight italic">
              “At Genquantis, we are not just building technology — we are building the <span className="text-primary not-italic">computational foundation</span> of the future.”
            </h2>
            
            <div className="pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Careers Email</span>
                <p className="text-white font-space text-lg">careers@genquantis.com</p>
              </div>
              <div className="space-y-2">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Website</span>
                <p className="text-white font-space text-lg">www.genquantis.com</p>
              </div>
              <div className="space-y-2">
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">LinkedIn</span>
                <p className="text-white font-space text-lg">Genquantis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
