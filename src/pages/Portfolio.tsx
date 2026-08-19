import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import PartnersStrip from "../components/partnerStrip";
import Constructionthumb from "../assets/images/photo_2026-07-22_12-04-05.jpg";
import HomeCta from "../components/HomeCta";
import {
  Building2,
  Wind,
  Recycle,
  Wrench,
  Hammer,
  Layers,
  Paintbrush,
  ShieldCheck,
  ChevronsRight,
  CheckCircle2,
  MapPin,
  ArrowRight,
  X,
  Calculator,
  Send,
  Eye,
  Briefcase,
  FileCheck2
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  location: string;
  value: string;
  client: string;
  role: string;
  icon: React.ElementType;
  accentColor: string;
  badgeText: string;
  metrics: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  summary: string;
  keyDeliverables: string[];
  technicalScope: string[];
}

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 }
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);

  const [estimateForm, setEstimateForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Turnkey General Construction",
    estimatedBudget: "₦50M - ₦200M",
    location: "Lagos / International",
    details: ""
  });
  const [estimateSubmitted, setEstimateSubmitted] = useState(false);

  const projects: Project[] = [
    {
      id: "turnkey-general-construction",
      title: "Turnkey General Construction & Commercial Development",
      category: "General Construction",
      subtitle: "End-to-End Turnkey Execution, Structural Engineering & Site Governance",
      location: "Lagos & Abuja, Nigeria",
      value: "₦18.5 Billion Capital Scope",
      client: "Institutional Real Estate & Private Investors",
      role: "Lead Turnkey Contractor & Project Management Consultant",
      icon: Building2,
      accentColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
      badgeText: "Turnkey Construct Project",
      metrics: {
        label1: "Quality Pass",
        val1: "100% COREN Certified",
        label2: "Schedule Variance",
        val2: "Delivered On-Time",
        label3: "Cost Savings",
        val3: "14.2% BOQ Optimized"
      },
      summary: "Comprehensive turnkey general construction delivery covering architectural realization, foundation engineering, superstructure execution, MEP integration, and final asset handover. Operating strictly under COREN and RICS structural standards to ensure zero defects and total cost discipline.",
      keyDeliverables: [
        "Complete ground-up structural construction and piling supervision",
        "Quality assurance & independent concrete cube/rebar strength testing",
        "Turnkey contractor coordination & milestone-based escrow payments",
        "Full statutory approval clearance and occupancy certification"
      ],
      technicalScope: [
        "Site Preparation & Deep Piling Engineering",
        "Reinforced Concrete Frame & Slab Construction",
        "High-End Interior Fit-Out & Architectural Finishes",
        "Turnkey MEP Systems Integration & Commissioning"
      ]
    },
    {
      id: "commercial-ventilation-mep",
      title: "Commercial Ventilation & HVAC Climate Control Systems",
      category: "Commercial Ventilation",
      subtitle: "Industrial Air Distribution, Ductwork Engineering & Indoor Air Quality",
      location: "Commercial Districts & Industrial Parks",
      value: "₦8.2 Billion Technical Scope",
      client: "Commercial Facility Operators & Hospitality Hubs",
      role: "Specialized Mechanical & Ventilation Engineering Lead",
      icon: Wind,
      accentColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
      badgeText: "Commercial Ventilation Project",
      metrics: {
        label1: "Airflow Integrity",
        val1: "99.8% CFM Balanced",
        label2: "Energy Savings",
        val2: "22% Efficiency Gain",
        label3: "IAQ Rating",
        val3: "Grade-A Certified"
      },
      summary: "Engineering, installation, and compliance auditing for commercial-scale mechanical ventilation and HVAC systems. Designed for large-volume air exchange, moisture extraction, acoustic dampening, and high-efficiency thermal insulation across commercial buildings and healthcare facilities.",
      keyDeliverables: [
        "Custom galvanized steel ductwork fabrication and pressure testing",
        "High-capacity rooftop air handling units (AHU) and chillers integration",
        "Indoor air quality (IAQ) testing and HEPA filtration compliance",
        "Acoustic lining and thermal loss reduction optimizations"
      ],
      technicalScope: [
        "CFD Airflow Simulation & Duct Sizing",
        "VAV (Variable Air Volume) Smart Dampers",
        "Kitchen & Industrial Exhaust Extraction Systems",
        "Building Management System (BMS) Ventilation Automation"
      ]
    },
    {
      id: "international-recycled-metal-sourcing",
      title: "International Supply Chain & Recycled Metal Sourcing",
      category: "Recycled Metal Supply Chain",
      subtitle: "Cross-Border Circular Economy Sourcing, Scrap Metal Procurement & Logistics",
      location: "West Africa & International Ports",
      value: "$25.0 Million Global Supply",
      client: "Steel Rolling Mills & Industrial Infrastructure Developers",
      role: "Global Procurement & Supply Chain Governance Partner",
      icon: Recycle,
      accentColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
      badgeText: "International Supply Chain Sourcing",
      metrics: {
        label1: "Sourcing Integrity",
        val1: "100% Traceable Steel",
        label2: "Freight Reliability",
        val2: "Zero Port Delays",
        label3: "Cost Advantage",
        val3: "18% Procurement Savings"
      },
      summary: "International supply chain management for recycled metals and structural scrap steel. Connecting global scrap suppliers and circular economy networks with local steel rolling mills and infrastructure projects, ensuring metallurgical purity, international freight compliance, and cost-effective bulk delivery.",
      keyDeliverables: [
        "International vendor pre-qualification and quality grade inspection",
        "Customs clearance, port logistics, and multi-modal freight management",
        "Metallurgical spectrum analysis and tensile strength verification",
        "Hedging against global metal market price volatility and currency risk"
      ],
      technicalScope: [
        "HMS 1 & 2 / Shredded Scrap Quality Grading",
        "ISO Containerized & Bulk Vessel Freight Logistics",
        "ESG Circular Economy & Carbon Footprint Auditing",
        "Escrow-Backed Letters of Credit (LC) Financial Structuring"
      ]
    }
  ];

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimateSubmitted(true);
    setTimeout(() => {
      setEstimateSubmitted(false);
      setIsEstimateModalOpen(false);
    }, 2500);
  };

  return (
    <div className="pt-20 md:pt-24 bg-[#0a0e17] text-[#b8c4d0] font-sans space-y-0">

      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src={Constructionthumb}
            alt="Construction Equipment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/85"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10 space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase"
          >
            Our Portfolio
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Independent project management, structural engineering compliance, and capital protection across West Africa. Delivering UK-grade governance and COREN certified project oversight.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#featured-projects"
              className="inline-block bg-warm-gold hover:bg-gold text-white font-sans font-extrabold text-sm sm:text-base tracking-wider uppercase px-9 py-4 rounded-lg transition-colors duration-300 shadow-2xl"
            >
              VIEW OUR WORK
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. 6-CAPABILITY GRID */}
      <section className="py-20 md:py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          >
            {[
              { Icon: Building2, title: "Building Construction", desc: "Full client-side structural execution oversight, contractor coordination, and engineering compliance on active sites." },
              { Icon: Wrench, title: "Building Repairs", desc: "Structural retrofitting, defect remediation, concrete cube testing, and comprehensive rebar integrity audits." },
              { Icon: Hammer, title: "Demolition", desc: "Controlled site deconstruction, soil excavation testing, structural removal, and safety perimeter enforcement." },
              { Icon: Layers, title: "Foundation", desc: "Piling cap integrity verification, soil load capacity testing, and basement waterproofing oversight." },
              { Icon: Paintbrush, title: "Painting & Exterior", desc: "Facade finishing audits, MEP ductwork compliance, and luxury interior fit-out snagging inspections." },
              { Icon: ShieldCheck, title: "Site Management", desc: "24/7 site supervision, escrow payment authorization, contractor auditing, and COREN safety compliance." }
            ].map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex items-start space-x-5 group"
              >
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 group-hover:border-[#f59e0b] group-hover:text-[#f59e0b] transition-colors flex-shrink-0">
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-slate-900 text-lg tracking-tight">
                    {title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SPLIT BANNER SECTION */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden border-t border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="lg:col-span-5 bg-[#4a90d9] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-10"
        >
          {[
            { title: "Eco Friendly Construction", desc: "Sustainable materials specification, energy-efficient HVAC oversight, and environmental risk mitigation across all capital developments." },
            { title: "The Newest Technology Repairs", desc: "Real-time HD webcam site feeds, 3D orthomosaic drone scans, and automated Earned Value Management (EVM) tracking for overseas clients." },
            { title: "High Quality Construction Management", desc: "Rigorous COREN engineering supervision paired with UK RICS commercial cost controls to protect client capital from cost inflation." }
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={slideInLeft}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2 text-white">
                <ChevronsRight className="w-7 h-7 stroke-[2.5] flex-shrink-0" />
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl tracking-tight leading-snug">
                  {title}
                </h3>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#0a0e17]/85 leading-relaxed pl-9">
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideInRight}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 bg-[#f8fafc] text-slate-800 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6"
        >
          <h2 className="font-sans font-black text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            No Project Too Big Or Too Small
          </h2>

          <div className="w-12 h-1 bg-[#4a90d9] rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
            <p>
              Whether safeguarding an individual diaspora residential build in Ikoyi, or managing technical MEP compliance for multi-storey data centers in Abuja, Gamah Projects applies uniform engineering rigor. We treat every Naira of client capital with fiduciary responsibility.
            </p>
            <p>
              Our independent project management consultancy operates entirely free from contractor conflicts. By combining site-level engineering inspections with digital cloud dashboards, we give investors total transparency, verified milestone sign-offs, and complete peace of mind.
            </p>
          </div>
        </motion.div>
      </section>
      <PartnersStrip />

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="featured-projects" className="py-20 md:py-28 bg-[#0a0e17] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-3 border-b border-white/10 pb-8"
          >
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-2xl">
              Demonstrated capability across turnkey general construction, commercial ventilation system engineering, and international circular economy metal supply chain sourcing.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => {
              const IconComp = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-[#0d1321] border border-white/10 p-6 sm:p-7 hover:border-warm-gold/40 transition-colors duration-300 shadow-2xl relative overflow-hidden group flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-warm-gold/5 blur-3xl pointer-events-none group-hover:bg-warm-gold/10 transition-all"></div>

                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-warm-gold group-hover:scale-105 group-hover:border-warm-gold/50 transition-all flex-shrink-0 shadow-inner relative z-10">
                    <IconComp className="w-7 h-7 stroke-[1.75]" />
                  </div>

                  <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight leading-snug mt-3 group-hover:text-warm-gold transition-colors relative z-10">
                    {project.title}
                  </h3>

                  <p className="font-sans text-xs text-[#94a3b8] mt-2 relative z-10">
                    {project.subtitle}
                  </p>

                  <div className="mt-4 relative z-10">
                    <span className="text-[10px] font-mono uppercase text-[#94a3b8] block">Project Value / Scope</span>
                    <span className="font-mono font-extrabold text-warm-gold text-sm sm:text-base">
                      {project.value}
                    </span>
                  </div>

                  <div className="flex-1"></div>

                  <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedProject(project)}
                      className="w-full inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-colors shadow-md cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Technical Scope Details</span>
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* 5. WHY WORK WITH GAMAH PROJECTS SECTION */}
      {/* 5. WHY WORK WITH GAMAH PROJECTS SECTION */}
      <section className="py-20 bg-[#0d1321] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto space-y-3"
          >
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl">
              Why Work With Gamah Projects?
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#94a3b8]">
              We integrate civil engineering, specialized MEP ventilation systems, and international procurement governance under one independent umbrella.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                Icon: ShieldCheck,
                title: "Independent Advice. Unbiased Decisions.",
                desc: "Gamah operates solely on the client's behalf, unlike firms that may have an interest in design, construction or contracting. With our independent project management strategy, you'll get objective advice, transparent reporting, and professional oversight without the conflict of interest, to help you make better decisions."
              },
              {
                Icon: Wrench,
                title: "Technical Skills and Beyond Project Management Skills.",
                desc: "Gamah integrates project management with practical technical management, such as design review and buildability assessments, quality assurance, inspection, testing, cost and programme monitoring, risk management and contract administration. Not only do we monitor progress, we know what is going on the project and help ensure that it is delivered to the required standard."
              },
              {
                Icon: Building2,
                title: "International Standards, Local Understanding.",
                desc: "We introduce international project management experience and practices from high-end commercial construction in the UK to Nigeria and Africa. Gamah leverages state-of-the-art digital project controls, reporting frameworks, and tried and tested governance processes to provide clients with the systems, transparency, and accountability they need to safeguard investment and ensure projects are completed with greater confidence."
              }
            ].map(({ Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-[#0a0e17] border border-white/10 space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-amber-400`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-white text-xl">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
      {/* 6. REQUEST PROPOSAL SECTION */}
      <HomeCta />

      {/* 8. PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 md:top-24 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0d1321] border border-warm-gold/40 rounded-3xl p-8 sm:p-10 space-y-6 max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-white/10 pb-6 pr-8">
                <span className={`text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded border ${selectedProject.accentColor}`}>
                  {selectedProject.badgeText}
                </span>
                <h3 className="font-sans font-black text-white text-2xl sm:text-3xl pt-2">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#94a3b8]">
                  Location: {selectedProject.location} &bull; Value: {selectedProject.value}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                  Engagement Overview
                </h4>
                <p className="text-sm text-[#b8c4d0] leading-relaxed">
                  {selectedProject.summary}
                </p>
                <p className="text-xs text-[#94a3b8]">
                  Role: <span className="text-white font-medium">{selectedProject.role}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <div>
                  <span className="text-xs text-[#94a3b8] font-mono uppercase block">{selectedProject.metrics.label1}</span>
                  <span className="font-bold text-sm text-warm-gold">{selectedProject.metrics.val1}</span>
                </div>
                <div>
                  <span className="text-xs text-[#94a3b8] font-mono uppercase block">{selectedProject.metrics.label2}</span>
                  <span className="font-bold text-sm text-white">{selectedProject.metrics.val2}</span>
                </div>
                <div>
                  <span className="text-xs text-[#94a3b8] font-mono uppercase block">{selectedProject.metrics.label3}</span>
                  <span className="font-bold text-sm text-warm-gold">{selectedProject.metrics.val3}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                  Technical Scope &amp; Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.technicalScope.map((tech, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#0a0e17] border border-white/5 space-y-1">
                      <p className="font-bold text-xs text-white flex items-center space-x-2">
                        <FileCheck2 className="w-3.5 h-3.5 text-warm-gold inline mr-1" />
                        <span>{tech}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                  Key Governance Deliverables
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyDeliverables.map((h, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#94a3b8]">
                  Need advisory or execution for a similar scope?
                </span>
                <Link
                  to="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all"
                >
                  <span>Request Project Advisory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. ONLINE ESTIMATE FORM MODAL */}
      <AnimatePresence>
        {isEstimateModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 md:top-24 left-0 right-0 bottom-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setIsEstimateModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl bg-[#0d1321] border border-warm-gold/40 rounded-3xl p-8 space-y-6 max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-7rem)] overflow-y-auto shadow-2xl"
            >
              <button
                onClick={() => setIsEstimateModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 border-b border-white/10 pb-4 pr-8">
                <span className="text-xs font-mono font-bold text-warm-gold uppercase tracking-widest bg-warm-gold/10 px-3 py-1 rounded border border-warm-gold/30">
                  Independent Fee &amp; Scope Estimate
                </span>
                <h3 className="font-sans font-black text-white text-2xl">
                  Online Project Estimate Form
                </h3>
                <p className="font-sans text-xs text-[#94a3b8]">
                  Provide your project parameters to receive a complimentary fee estimate and risk review.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {estimateSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 text-center space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                      className="w-12 h-12 rounded-full bg-warm-gold/20 border border-warm-gold text-warm-gold flex items-center justify-center mx-auto"
                    >
                      <CheckCircle2 className="w-6 h-6" />
                    </motion.div>
                    <h4 className="font-bold text-white text-xl">Estimate Request Received!</h4>
                    <p className="text-xs text-[#b8c4d0]">
                      Our engineering and supply chain team will review your scope and contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleEstimateSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-[#94a3b8] block">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={estimateForm.name}
                          onChange={(e) => setEstimateForm({ ...estimateForm, name: e.target.value })}
                          placeholder="e.g. Dr. Oladipo Johnson"
                          className="w-full bg-[#0a0e17] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-warm-gold focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-[#94a3b8] block">Email Address</label>
                        <input
                          type="email"
                          required
                          value={estimateForm.email}
                          onChange={(e) => setEstimateForm({ ...estimateForm, email: e.target.value })}
                          placeholder="e.g. investor@domain.com"
                          className="w-full bg-[#0a0e17] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-warm-gold focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-[#94a3b8] block">Project Area</label>
                        <select
                          value={estimateForm.projectType}
                          onChange={(e) => setEstimateForm({ ...estimateForm, projectType: e.target.value })}
                          className="w-full bg-[#0a0e17] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-warm-gold focus:outline-none"
                        >
                          <option value="Turnkey General Construction">Turnkey General Construction</option>
                          <option value="Commercial Ventilation System">Commercial Ventilation System</option>
                          <option value="Recycled Metal Supply Chain">Recycled Metal Supply Chain</option>
                          <option value="Project Management & Audit">Project Management &amp; Audit</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-mono text-[#94a3b8] block">Estimated Budget</label>
                        <select
                          value={estimateForm.estimatedBudget}
                          onChange={(e) => setEstimateForm({ ...estimateForm, estimatedBudget: e.target.value })}
                          className="w-full bg-[#0a0e17] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:border-warm-gold focus:outline-none"
                        >
                          <option value="Under ₦50M">Under ₦50M</option>
                          <option value="₦50M - ₦200M">₦50M – ₦200M</option>
                          <option value="₦200M - ₦1B">₦200M – ₦1 Billion</option>
                          <option value="Above ₦1B / $1M+">Above ₦1 Billion / $1M+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#94a3b8] block">Scope Details &amp; Location</label>
                      <textarea
                        rows={3}
                        required
                        value={estimateForm.details}
                        onChange={(e) => setEstimateForm({ ...estimateForm, details: e.target.value })}
                        placeholder="Briefly describe your project requirements, location, current stage, and desired engagement model..."
                        className="w-full bg-[#0a0e17] border border-white/10 rounded-xl p-4 text-xs text-white focus:border-warm-gold focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsEstimateModalOpen(false)}
                        className="px-5 py-2.5 rounded-xl border border-white/10 text-xs text-[#94a3b8] hover:text-white cursor-pointer"
                      >
                        Cancel
                      </button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-warm-gold text-[#0a0e17] font-bold text-xs hover:bg-warm-gold/90 transition-colors flex items-center space-x-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Estimate Request</span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}