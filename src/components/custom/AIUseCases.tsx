// @ts-nocheck
import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const useCasesData = [
  // 2. Oncology Digital Twin (Healthcare)
  { title: "Automated 3D Tumor Masking", category: "Oncology Digital Twin", desc: "Computer Vision | SEGMENTATION" },
  { title: "AI-Generated Clinical Summary", category: "Oncology Digital Twin", desc: "GenAI | CLINICAL REPORTING" },
  { title: "Digital Phenotyping & Radiomics", category: "Oncology Digital Twin", desc: "ML | RADIOMICS" },
  { title: "Therapy Response Forecasting", category: "Oncology Digital Twin", desc: "Predictive AI | PREDICTION HUB" },
  { title: "Synthetic CT Scan Generation", category: "Oncology Digital Twin", desc: "GenAI/GANs | DATA LAB" },
  { title: "Hands-free DICOM Voice Navigation", category: "Oncology Digital Twin", desc: "GenAI/STT | VOICE ASSISTANT" },
  { title: "Multi-Modal Data Fusion", category: "Oncology Digital Twin", desc: "Deep Learning | DIAGNOSTICS" },
  { title: "Recurrence risk scoring post-treatment", category: "Oncology Digital Twin", desc: "AI | PREDICTION HUB" },
  { title: "Automated tumor progression tracking over time", category: "Oncology Digital Twin", desc: "AI | SEGMENTATION" },
  { title: "Survival probability modeling per treatment path", category: "Oncology Digital Twin", desc: "AI | ANALYTICS" },

  // 3. Hospital Assistant Robot (Healthcare)
  { title: "24/7 Intelligent Patient Guidance & FAQ", category: "Hospital Assistant Robot", desc: "GenAI | PATIENT INTERACTION" },
  { title: "Crowd Management & Social Distancing", category: "Hospital Assistant Robot", desc: "Computer Vision | VISION AI" },
  { title: "Natural Language Speech-to-Text & TTS", category: "Hospital Assistant Robot", desc: "Speech AI | VOICE MANAGER" },
  { title: "Dynamic Obstacle Avoidance", category: "Hospital Assistant Robot", desc: "RL/Robotics | NAVIGATION AI" },
  { title: "Pathfinding & Autonomous Map Localization", category: "Hospital Assistant Robot", desc: "Traditional AI | NAVIGATION AI" },
  { title: "Patient Distress or Fall Detection", category: "Hospital Assistant Robot", desc: "Computer Vision | SAFETY AI" },
  { title: "Multi-lingual Translation for Patients", category: "Hospital Assistant Robot", desc: "GenAI | LANGUAGE AI" },
  { title: "Automated specimen delivery & tracking", category: "Hospital Assistant Robot", desc: "AI | LOGISTICS AI" },
  { title: "Real-time air quality & infection zone monitoring", category: "Hospital Assistant Robot", desc: "AI | SAFETY AI" },
  { title: "Robot self-diagnostic & maintenance prediction", category: "Hospital Assistant Robot", desc: "AI | PREDICTIVE OPS" },

  // 4. Insurance Automation / RCM (Healthcare related)
  { title: "OCR & Data Extraction from Insurance Cards/EOBs", category: "Insurance Automation", desc: "Computer Vision | OCR AI" },
  { title: "NER for Patient Name, DOB, Policy ID", category: "Insurance Automation", desc: "NLP | PATIENT ID" },
  { title: "Automated CPT Code Description", category: "Insurance Automation", desc: "GenAI | MEDICAL CODING" },
  { title: "Claim Denial Risk Prediction", category: "Insurance Automation", desc: "Predictive AI | DENIAL PREVENTION" },
  { title: "ICD-10 Structural Recognition & Validation", category: "Insurance Automation", desc: "NLP | ICD CODING" },
  { title: "NLP-based Insurance Benefit Parsing", category: "Insurance Automation", desc: "GenAI/RAG | BENEFIT VERIFICATION" },
  { title: "Payer Remark Sentiment Analysis", category: "Insurance Automation", desc: "NLP | FINANCIAL AI" },
  { title: "Automated prior authorization request drafting", category: "Insurance Automation", desc: "AI | PRIOR AUTH AI" },
  { title: "Real-time eligibility verification at check-in", category: "Insurance Automation", desc: "AI | ELIGIBILITY AI" },
  { title: "Payment pattern anomaly detection for fraud", category: "Insurance Automation", desc: "AI | FRAUD DETECTION" },

  // 5. LLLMS / LifeSpan AI (Longevity Platform - Healthcare/LifeSci)
  { title: "Biological Age Discovery & Gap Analysis", category: "LifeSpan AI", desc: "GenAI/Predictive | LIFESPAN AI" },
  { title: "Gene Importance Ranking (SHAP)", category: "LifeSpan AI", desc: "Explainable AI | GENOMICS AI" },
  { title: "Disease Risk Profiling", category: "LifeSpan AI", desc: "GenAI/Classification | RISK AI" },
  { title: "Synthetic Omics Data Synthesis", category: "LifeSpan AI", desc: "GenAI | CLINOMICS ENGINE" },
  { title: "Correlation Structure Preservation in Synthetic Data", category: "LifeSpan AI", desc: "Statistical AI | CLINOMICS ENGINE" },
  { title: "In-Silico Drug Perturbation Simulation", category: "LifeSpan AI", desc: "GenAI/Simulation | DRUG SIMULATION" },
  { title: "Pathway Enrichment Analysis", category: "LifeSpan AI", desc: "NLP/GenAI | PATHWAY AI" },
  { title: "Dynamic Prompt Orchestration Infrastructure", category: "LifeSpan AI", desc: "Infra AI | PLATFORM CORE" },
  { title: "Epigenetic clock calibration for aging biomarkers", category: "LifeSpan AI", desc: "AI | LIFESPAN AI" },
  { title: "Longevity intervention recommendation engine", category: "LifeSpan AI", desc: "AI | RISK AI" },

  // 6. Biologics Discovery Platform (LifeSci)
  { title: "Sub-atomic Ligand Binding Prediction", category: "Biologics Discovery", desc: "Quantum AI | BINDING ENGINE" },
  { title: "De Novo Protein Sequence Design", category: "Biologics Discovery", desc: "Generative Bio | PROTEIN DESIGN" },
  { title: "Automated Epitope Mapping", category: "Biologics Discovery", desc: "Computer Vision | EPITOPE ANALYZER" },
  { title: "In Silico ADMET Toxicity Profiling", category: "Biologics Discovery", desc: "Predictive | TOXICITY PROFILER" },
  { title: "Cryo-EM Image Super-Resolution", category: "Biologics Discovery", desc: "GenAI/GANs | IMAGE ENHANCER" },
  { title: "RNA-Sequence Expression Analysis", category: "Biologics Discovery", desc: "Deep Learning | GENOMICS ENGINE" },
  { title: "Molecular Dynamics Simulation", category: "Biologics Discovery", desc: "Physics-AI | PHYSICS SIMULATOR" },
  { title: "Rare Disease Drug Repurposing", category: "Biologics Discovery", desc: "Knowledge Graphs | KNOWLEDGE GRAPH" },
  { title: "Lab-on-a-Chip Data Synthesis", category: "Biologics Discovery", desc: "Reinforcement | LAB SYNTHESIS" },
  { title: "Double-Blind Validation Guardrails", category: "Biologics Discovery", desc: "Bias Detection | COMPLIANCE AGENT" },
  { title: "Antibody sequence optimization for specificity", category: "Biologics Discovery", desc: "AI | PROTEIN DESIGN" },
  { title: "Clinical trial protocol auto-generation", category: "Biologics Discovery", desc: "AI | COMPLIANCE AGENT" },

  // 9. Generative Chemistry (LifeSci)
  { title: "De Novo Small Molecule Design", category: "Generative Chemistry", desc: "GenAI/VAEs | MOLECULE DESIGN" },
  { title: "Automated Retrosynthesis Mapping", category: "Generative Chemistry", desc: "Graph AI | SYNTHESIS MAPPING" },
  { title: "Scaffold Hopping for IP Protection", category: "Generative Chemistry", desc: "GenAI | IP PROTECTION" },
  { title: "Solubility & Permeability Prediction", category: "Generative Chemistry", desc: "Predictive/GNN | PROPERTY PRED." },
  { title: "Multimodal Chemical NLP (Nach01)", category: "Generative Chemistry", desc: "LLM | CHEMICAL NLP" },
  { title: "Reaction Yield Optimization", category: "Generative Chemistry", desc: "Reinforcement | YIELD OPTIMIZER" },
  { title: "Metabolite Prediction", category: "Generative Chemistry", desc: "Predictive | METABOLISM PRED." },
  { title: "Physics-Informed Property Tuning", category: "Generative Chemistry", desc: "Physics-AI | PHYSICS TUNING" },
  { title: "Active Site Masking", category: "Generative Chemistry", desc: "Vision | SITE MASKING" },
  { title: "Molecular Fingerprint Comparison Search", category: "Generative Chemistry", desc: "Vector DB | SEARCH ENGINE" },
  { title: "Green chemistry route scoring for sustainability", category: "Generative Chemistry", desc: "AI | YIELD OPTIMIZER" },
  { title: "Crystal structure prediction for formulation", category: "Generative Chemistry", desc: "AI | PROPERTY PRED." },

  // Non-Healthcare Projects
  // 1. HR Suite (Hiring OS)
  { title: "Automated Resume Parsing", category: "HR Suite", desc: "GenAI | RECRUITMENT AI" },
  { title: "Semantic Resume-Job Matching", category: "HR Suite", desc: "NLP | TALENT MATCHING" },
  { title: "Written/Essay Auto-Scoring", category: "HR Suite", desc: "GenAI | ASSESSMENT AI" },
  { title: "Real-time Interview Transcription", category: "HR Suite", desc: "Speech AI | INTERVIEW AI" },
  { title: "Communication & Sentiment Analysis", category: "HR Suite", desc: "GenAI | BEHAVIORAL AI" },
  { title: "Autonomous Boolean Search Builder", category: "HR Suite", desc: "GenAI | RECRUITER AGENT" },
  { title: "Personalized Outreach Sequences", category: "HR Suite", desc: "GenAI | RECRUITER AGENT" },
  { title: "Skill Taxonomy & Alias Mapping", category: "HR Suite", desc: "NLP/ML | SKILLS GRAPH" },
  { title: "Project Description Enhancement", category: "HR Suite", desc: "GenAI | PORTFOLIO AI" },
  { title: "Candidate Drop-off Risk Prediction", category: "HR Suite", desc: "Predictive AI | ANALYTICS" },
  { title: "Bias Detection in Job Descriptions", category: "HR Suite", desc: "NLP | COMPLIANCE AI" },
  { title: "Auto-Generated Offer Letters", category: "HR Suite", desc: "GenAI | ONBOARDING" },
  { title: "Video interview body language analysis", category: "HR Suite", desc: "AI | INTERVIEW AI" },
  { title: "Cultural fit scoring from conversation patterns", category: "HR Suite", desc: "AI | BEHAVIORAL AI" },
  { title: "Automated reference check via AI calling", category: "HR Suite", desc: "AI | RECRUITMENT AI" },

  // 7. AI Calling Agent
  { title: "Sub-500ms Hyper-Inference Engine", category: "AI Calling Agent", desc: "Real-time AI | CORE INFERENCE" },
  { title: "Live Sentiment & Tone Steering", category: "AI Calling Agent", desc: "Emotion AI | EMOTION ENGINE" },
  { title: "Multi-Lingual Code-Switching", category: "AI Calling Agent", desc: "NLP | LANGUAGE AI" },
  { title: "Real-time Lead Qualification", category: "AI Calling Agent", desc: "Classification | LEAD QUALIFIER" },
  { title: "Voice-to-CRM Structured Mapping", category: "AI Calling Agent", desc: "Extraction | CRM INTEGRATION" },
  { title: "Predictive No-Show Modeling", category: "AI Calling Agent", desc: "Predictive | PREDICTIVE MODELING" },
  { title: "Automated Objection Handling via RAG", category: "AI Calling Agent", desc: "GenAI | FAQ HANDLER" },
  { title: "Bio-Acoustic Fraud Detection", category: "AI Calling Agent", desc: "Security | FRAUD DETECTION" },
  { title: "Post-Call Action Plan Generation", category: "AI Calling Agent", desc: "Summarization | POST-CALL LOGIC" },
  { title: "Agent Performance Self-Correction via RLHF", category: "AI Calling Agent", desc: "Reinforcement | FEEDBACK LOOP" },
  { title: "Appointment scheduling & rescheduling via voice", category: "AI Calling Agent", desc: "AI | CORE INFERENCE" },
  { title: "Compliance call recording & flagging", category: "AI Calling Agent", desc: "AI | COMPLIANCE AGENT" },

  // 8. LinkedIn Automation
  { title: "Contextual DM Triage & Priority Classification", category: "LinkedIn Automation", desc: "GenAI | DM MANAGER" },
  { title: "Hyper-Personalized Ice Breaker Generation", category: "LinkedIn Automation", desc: "GenAI/Vision | PERSONALIZATION" },
  { title: "Predictive Content Viral Scoring", category: "LinkedIn Automation", desc: "Analytics | CONTENT ANALYTICS" },
  { title: "Human-Mimetic Behavior Logic", category: "LinkedIn Automation", desc: "Behavioral AI | HUMAN SIMULATION" },
  { title: "Competitive Intelligence Scraping", category: "LinkedIn Automation", desc: "Extraction | INTELLIGENCE" },
  { title: "Auto-Engagement Warm-up Bot", category: "LinkedIn Automation", desc: "Interaction | ENGAGEMENT BOT" },
  { title: "Profile Optimization Advisor", category: "LinkedIn Automation", desc: "Multimodal | PROFILE AUDITOR" },
  { title: "Network Graph Expansion Logic", category: "LinkedIn Automation", desc: "Graph Theory | GRAPH ENGINE" },
  { title: "Automated Event Lead Generation", category: "LinkedIn Automation", desc: "Scraping | EVENT SCRAPER" },
  { title: "Smart Connection Fallback Logic", category: "LinkedIn Automation", desc: "Logic AI | SMART LOGIC" },
  { title: "AI-generated thought leadership post drafting", category: "LinkedIn Automation", desc: "AI | CONTENT ANALYTICS" },
  { title: "Decision-maker persona profiling from public data", category: "LinkedIn Automation", desc: "AI | INTELLIGENCE" },

  // 10. AI-Powered LMS
  { title: "Photorealistic 1-on-1 AI Tutors", category: "AI-Powered LMS", desc: "Synthetic Media | VIRTUAL TUTOR" },
  { title: "Real-time Logic-based Code Debugging", category: "AI-Powered LMS", desc: "Coding AI | DEBUGGER" },
  { title: "Automated Course Generation from PDFs", category: "AI-Powered LMS", desc: "RAG | COURSE GEN" },
  { title: "Predictive Student Attrition Alerts", category: "AI-Powered LMS", desc: "Analytics | ATTRITION PREDICTOR" },
  { title: "Adaptive Learning Path Routing", category: "AI-Powered LMS", desc: "Reinforcement | ADAPTIVE LEARNING" },
  { title: "Blockchain-Verified Credentialing", category: "AI-Powered LMS", desc: "Blockchain | CREDENTIALING" },
  { title: "AI Proctoring & Anti-Cheat", category: "AI-Powered LMS", desc: "Computer Vision | PROCTORING" },
  { title: "Natural Language SQL Queries", category: "AI-Powered LMS", desc: "NLP | SQL ASSISTANT" },
  { title: "Emotional Engagement Tracking", category: "AI-Powered LMS", desc: "Vision | ENGAGEMENT TRACKER" },
  { title: "Automated Resume/Portfolio Builder", category: "AI-Powered LMS", desc: "GenAI | CAREER BUILDER" },
  { title: "AI-generated quiz & assessment from lecture", category: "AI-Powered LMS", desc: "AI | COURSE GEN" },
  { title: "Peer collaboration matching via skill graph", category: "AI-Powered LMS", desc: "AI | ADAPTIVE LEARNING" },
];

const categories = [
  "All", "Oncology Digital Twin", "Hospital Assistant Robot", 
  "Insurance Automation", "LifeSpan AI", "Biologics Discovery", "Generative Chemistry",
  "HR Suite", "AI Calling Agent", "LinkedIn Automation", "AI-Powered LMS"
];

const AIUseCases = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(20);

  const filteredUseCases = useMemo(() => {
    return useCasesData.filter(item => {
      const matchesFilter = activeFilter === "All" || item.category === activeFilter;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const displayedItems = filteredUseCases.slice(0, displayCount);

  return (
    <section id="use-cases" className="py-xxl bg-background">
      <div className="max-w-container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-16">
          <span className="text-label-caps text-cyan tracking-widest uppercase">EXPLORE OUR CAPABILITIES</span>
          <h2 className="text-headline-lg font-grotesk text-white mt-4">115+ AI Use Cases Across 10 Verticals</h2>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-12 space-y-8">
          <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveFilter(cat); setDisplayCount(20); }}
                className={`px-6 py-2 rounded-full text-sm font-manrope font-medium whitespace-nowrap transition-all ${
                  activeFilter === cat 
                    ? 'bg-[#428CFC] text-white shadow-[0_0_12px_rgba(66,140,252,0.4)]' 
                    : 'border border-outline-variant text-on-surface-variant hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
            <input
              type="text"
              placeholder="Search use cases..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setDisplayCount(20); }}
              className="w-full bg-surface-container-low border-b border-outline-variant focus:border-[#428CFC] py-4 pl-12 pr-4 text-white outline-none transition-all glass-card focus:shadow-[0_4px_12px_rgba(66,140,252,0.1)]"
            />
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#428CFC] group-focus-within:w-full transition-all duration-500" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, i) => (
            <div 
              key={i} 
              className="glass-card p-6 rounded-card group hover:shadow-[inset_0_0_20px_rgba(66,140,252,0.1)] transition-all duration-300"
            >
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2 block">
                {item.category}
              </span>
              <h4 className="text-[16px] font-grotesk font-medium text-white mb-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-[12px] font-manrope text-[#8b919f] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Load More */}
        {displayCount < filteredUseCases.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setDisplayCount(prev => prev + 20)}
              className="px-8 py-3 rounded-btn border border-outline-variant text-white font-manrope hover:bg-white/5 transition-all"
            >
              Load More Use Cases
            </button>
          </div>
        )}

        {filteredUseCases.length === 0 && (
          <div className="text-center py-20 text-on-surface-variant font-manrope">
            No use cases found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default AIUseCases;
