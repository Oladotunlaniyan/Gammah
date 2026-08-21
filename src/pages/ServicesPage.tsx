import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Scale,
  X,
  FileText,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import HomeCta from "../components/HomeCta";


interface SubService {
  name: string;
  desc: string;
}

interface ServicePillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  icon: React.ElementType;
  subServices: SubService[];
  keyOutcome: string;
  sectors: string[];
  scopeDetails: string[];
}

// Reusable motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServicePillar | null>(null);

const pillars: ServicePillar[] = [
  {
    id: "pre-project-planning",
    number: "01",
    title: "Pre-Project and Planning",
    tagline: "Feasibility studies, planning, design review, and schedule development.",
    summary: "We support clients during the pre-project and planning phase with feasibility studies, project planning and coordination, design review and coordination, cost planning and budget monitoring, programme and schedule development, risk management, and stakeholder management.",
    icon: ShieldCheck,
    subServices: [
      { name: "Feasibility Studies", desc: "Independent assessment of project viability and requirements." },
      { name: "Project planning and coordination", desc: "End-to-end planning and coordination across all stakeholders." },
      { name: "Design review and coordination", desc: "Buildability, coordination, and alignment with project requirements." },
      { name: "Cost planning and budget monitoring", desc: "Establishing and tracking project budgets from inception." },
      { name: "Programme and schedule development", desc: "Creating realistic timelines and delivery schedules." },
      { name: "Risk management", desc: "Identifying and mitigating project risks before commitments are made." },
      { name: "Stakeholder management", desc: "Continuous coordination with all project stakeholders." }
    ],
    keyOutcome: "Clear requirements, realistic budgets, and achievable schedules from day one.",
    sectors: ["Private Developers", "Diaspora Investors", "Corporate Organisations", "Industrial Operators", "Financial Institutions", "Public-Sector Clients"],
    scopeDetails: [
      "Feasibility Studies",
      "Project planning and coordination",
      "Design review and coordination (Buildability, coordination, and alignment with project requirements)",
      "Cost planning and budget monitoring",
      "Programme and schedule development",
      "Risk management",
      "Stakeholder management"
    ]
  },
  {
    id: "procurement-commercial",
    number: "02",
    title: "Procurement & Commercial Advisory",
    tagline: "Procurement strategy, tender support, contract review, and commercial oversight.",
    summary: "We provide independent procurement and commercial advisory services including procurement strategy, tender evaluation and contractor selection support, contract review, and cost and commercial review.",
    icon: Scale,
    subServices: [
      { name: "Procurement strategy", desc: "Defining the optimal approach to sourcing and contracting." },
      { name: "Tender evaluation and contractor selection support", desc: "Independent assessment and selection of qualified contractors." },
      { name: "Contract review", desc: "Reviewing terms to protect client interests and reduce exposure." },
      { name: "Cost and commercial review", desc: "Independent assessment of costs and commercial positions." }
    ],
    keyOutcome: "Transparent procurement and fair contract terms that protect your investment.",
    sectors: ["Private Developers", "Corporate Organisations", "Industrial Operators", "Public-Sector Clients"],
    scopeDetails: [
      "Procurement strategy",
      "Tender evaluation and contractor selection support",
      "Contract review",
      "Cost and commercial review"
    ]
  },
  {
    id: "delivery-oversight",
    number: "03",
    title: "Project Delivery and Technical Oversight",
    tagline: "Construction monitoring, technical oversight, quality assurance, and progress reporting.",
    summary: "We deliver independent oversight during project execution including construction monitoring, technical oversight, quality assurance, contract administration, programme and schedule monitoring, cost and budget monitoring, progress reporting, risk management, and stakeholder coordination.",
    icon: Briefcase,
    subServices: [
      { name: "Construction monitoring", desc: "On-site monitoring of construction activities and compliance." },
      { name: "Technical oversight", desc: "Compliance, specifications, inspections, testing, and technical review." },
      { name: "Quality assurance", desc: "Verification that work meets required standards and specifications." },
      { name: "Contract administration", desc: "Managing contract compliance, changes, and documentation." },
      { name: "Programme and schedule monitoring", desc: "Tracking progress against agreed timelines." },
      { name: "Cost and budget monitoring", desc: "Ongoing tracking of actual costs against approved budgets." },
      { name: "Progress reporting", desc: "Regular transparent reporting on project status and performance." },
      { name: "Risk management", desc: "Ongoing identification and mitigation of delivery risks." },
      { name: "Stakeholder coordination", desc: "Managing communication and coordination across all parties." }
    ],
    keyOutcome: "Verified quality, controlled costs, and transparent progress throughout delivery.",
    sectors: ["Commercial Developments", "Infrastructure", "Industrial Projects", "Public-Sector Clients"],
    scopeDetails: [
      "Construction monitoring",
      "Technical oversight (Compliance, specifications, inspections, testing, and technical review)",
      "Quality assurance",
      "Contract administration",
      "Programme and schedule monitoring",
      "Cost and budget monitoring",
      "Progress reporting",
      "Risk management",
      "Stakeholder coordination"
    ]
  },
  {
    id: "closeout-handover",
    number: "04",
    title: "Project Close-out & Handover",
    tagline: "Defect management, final inspections, and documentation handover.",
    summary: "We manage the transition from project delivery to completion through project close-out, defect management, final inspections, and documentation and handover.",
    icon: FileText,
    subServices: [
      { name: "Project close-out", desc: "Structured completion and reconciliation of project activities." },
      { name: "Defect management", desc: "Snagging, punch lists, and tracking rectification of defects." },
      { name: "Final inspections", desc: "Independent verification that all work meets specifications." },
      { name: "Documentation and handover", desc: "Compilation and handover of all project records and certificates." }
    ],
    keyOutcome: "Complete documentation and defect-rectified handover.",
    sectors: ["Private Developers", "Corporate Organisations", "Public-Sector Clients"],
    scopeDetails: [
      "Project close-out",
      "Defect management (snagging/punch lists)",
      "Final inspections",
      "Documentation and handover"
    ]
  }
];
  return (
    <div className="pt-20 md:pt-24 bg-[#0a0e17] text-[#b8c4d0] font-sans min-h-screen">

      {/* 1. HERO BANNER */}
      <section className="relative w-full border-b border-white/10 bg-[#0d1321] overflow-hidden py-20 md:py-28">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-warm-gold/5 blur-3xl pointer-events-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl space-y-4"
          >
            <h1 className="font-sans font-black text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Global Expertise, Independent Project Controls
            </h1>
          <p className="font-sans text-base sm:text-lg text-[#94a3b8] leading-relaxed">
  We combine local market knowledge with international best practices to improve project delivery across Africa. As an independent consultancy, we do not undertake execution work or hold contracts we protect your investment, enforce standards, and manage risk on your behalf.
</p>
          </motion.div>

          {/* Quick Sector Tags */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono text-[#94a3b8]"
          >
            <span className="text-white font-semibold uppercase tracking-wider">Key Sectors:</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Construction &amp; Projects</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Infrastructure &amp; Energy</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Institutional &amp; Diaspora Capital</span>
            <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Asset recovery</span>
             <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">Industrial Projects</span>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SIDE-BY-SIDE CAPABILITY CARDS GRID */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl tracking-tight">
              Our Core Services
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#94a3b8] max-w-2xl">
              Click any service card to view complete scope deliverables, specialized modules, and engagement options.
            </p>
          </motion.div>

          {/* Grid Layout: 2-column or 3-column side-by-side cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.id}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedService(pillar)}
                  className="group cursor-pointer rounded-3xl bg-[#0d1321] border border-white/10 p-6 sm:p-8 hover:border-warm-gold/50 transition-colors duration-300 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden"
                >
                  {/* Card Header & Icon */}
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-black text-3xl text-warm-gold tracking-tight">
                        {pillar.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-warm-gold/10 border border-warm-gold/30 flex items-center justify-center text-warm-gold group-hover:bg-warm-gold group-hover:text-[#0a0e17] transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-sans font-extrabold text-white text-xl sm:text-2xl tracking-tight group-hover:text-warm-gold transition-colors leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#94a3b8] line-clamp-2">
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Brief sub-services list */}
                    <ul className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-[#b8c4d0]">
                      {pillar.subServices.slice(0, 3).map((sub, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0" />
                          <span className="truncate">{sub.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-warm-gold group-hover:text-white transition-colors">
                    <span>View Details &amp; Scope</span>
                    <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-warm-gold group-hover:text-[#0a0e17] transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0d1321]/60">
  <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

    {/* Section Header */}
    <motion.div
      className="max-w-5xl space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
        Pricing Structure
      </h2>
    </motion.div>

    {/* Pricing Models 3-Column Grid */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >

      {/* Model 1: Fixed Fee */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="rounded-3xl bg-[#0d1321] border border-white/10 p-8 flex flex-col h-full shadow-xl hover:border-warm-gold/40 transition-colors duration-300 relative group"
      >
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
              Fixed Fee
            </h3>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-xs text-[#94a3b8] block font-mono uppercase">Fee Range</span>
              <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                Charge per assignment
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
            For short-term engagements or standalone advisory services that do not require full lifecycle involvement.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
              Typically used for:
            </span>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Feasibility studies</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Design reviews and technical assessments</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Project audits and health checks</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Procurement and contract advisory</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Claims and dispute support</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>One-off inspections and reporting</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-white/10">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-warm-gold hover:text-[#0a0e17] text-white font-sans font-bold text-xs px-4 py-3 rounded-xl border border-white/10 transition-all"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

      {/* Model 2: Monthly Retainer */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="rounded-3xl bg-[#0d1321] border border-warm-gold/40 p-8 flex flex-col h-full shadow-2xl relative group hover:border-warm-gold/70 transition-colors duration-300"
      >
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
              Monthly Retainer
            </h3>
            <div className="p-3.5 rounded-xl bg-warm-gold/10 border border-warm-gold/30">
              <span className="text-xs text-warm-gold/80 block font-mono uppercase font-extrabold">Small to Medium Projects</span>
              <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                Charge per month
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
            For projects requiring continuous management, technical oversight, and client representation throughout the project lifecycle.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
              Consistent Oversight & Accountability
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Regular reporting, stakeholder coordination, and proactive project management. A minimum engagement period may apply depending on project size, complexity, duration, and level of involvement.
            </p>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-white/10">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-xs px-4 py-3 rounded-xl transition-all shadow-lg"
          >
            <span>Inquire for Retainer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
      {/* Model 3: Percentage of Project Value */}
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ y: -4 }}
        className="rounded-3xl bg-[#0d1321] border border-white/10 p-8 flex flex-col h-full shadow-xl hover:border-warm-gold/40 transition-colors duration-300 relative group"
      >
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
              Percentage of Project Value
            </h3>
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-xs text-[#94a3b8] block font-mono uppercase">Commercial Scale</span>
              <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                % of total project value
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
            For large commercial, institutional, infrastructure, and public-sector projects. Fees reflect increased responsibility, complexity, coordination, and risk management.
          </p>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
              Typically used for:
            </span>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Large-scale infrastructure programmes</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Institutional and public-sector developments</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                <span>Multi-phase commercial builds</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-white/10">
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-warm-gold hover:text-[#0a0e17] text-white font-sans font-bold text-xs px-4 py-3 rounded-xl border border-white/10 transition-all"
          >
            <span>Submit Institutional RFP</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>
      {/* 3. WHY INDEPENDENT MANAGEMENT MATTERS (COMPARISON MATRIX) */}
      <section className="py-20 md:py-28 border-y border-white/10 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">

          <motion.div
            className="text-center max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-sans font-black text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Why Independent Oversight Makes the Difference
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >

            {/* Traditional Model Card */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6"
            >
              <div className="flex items-center space-x-3 text-[#f87171]">
                <X className="w-6 h-6" />
                <h3 className="font-sans font-extrabold text-white text-xl">
                  Traditional Contractor Model
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-[#94a3b8]">
                <li className="flex items-start space-x-3">
                  <X className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Contractor self-reports progress and approves own variation invoices.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Unverified material quality leading to hidden structural defects under plaster.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Vague updates with zero real-time cloud data for overseas clients.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <X className="w-4 h-4 text-[#f87171] flex-shrink-0 mt-0.5" />
                  <span>Budget overruns paid upfront without milestone verification.</span>
                </li>
              </ul>
            </motion.div>

            {/* Gamah Independent Model Card */}
          <motion.div
  variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="p-8 rounded-3xl bg-navy-dark border border-warm-gold/40 space-y-6 shadow-2xl relative"
>
  <div className="flex items-center space-x-3 text-warm-gold">
    <ShieldCheck className="w-6 h-6" />
    <h3 className="font-sans font-extrabold text-white text-xl">
      Gamah Independent PMC Model
    </h3>
  </div>
  <ul className="space-y-4 text-xs sm:text-sm text-white">
    <li className="flex items-start space-x-3">
      <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
      <span>Ensures delivery aligns with your goals and quality standards.</span>
    </li>
    <li className="flex items-start space-x-3">
      <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
      <span>Ensures contractor selection and contract terms protect your interests.</span>
    </li>
    <li className="flex items-start space-x-3">
      <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
      <span>Technical oversight and quality assurance verify that work meets specifications at every phase.</span>
    </li>
    <li className="flex items-start space-x-3">
      <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
      <span>Continuous risk management and stakeholder coordination.</span>
    </li>
  </ul>
</motion.div>

          </motion.div>

        </div>
      </section>
  
     <HomeCta />
      {/* 6. FULL SCOPE MODAL POPUP */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={() => setSelectedService(null)}
          >
            <div className="h-full flex items-center justify-center p-4 pt-24">
              <motion.div
                className="relative w-full max-w-2xl bg-[#0d1321] border border-warm-gold/40 rounded-3xl p-8 sm:p-10 space-y-6 max-h-[calc(100vh-7rem)] overflow-y-auto shadow-2xl"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.97 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="cursor-pointer absolute top-6 right-6 p-2 rounded-full bg-white/5 text-[#94a3b8] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="space-y-2 border-b border-white/10 pb-6 pr-8">
                  <h3 className="font-sans font-black text-white text-2xl sm:text-3xl">
                    {selectedService.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#94a3b8] italic">
                    {selectedService.tagline}
                  </p>
                </div>

                {/* Summary */}
                <div className="space-y-3">
                  <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                    Service Overview
                  </h4>
                  <p className="text-sm text-[#b8c4d0] leading-relaxed">
                    {selectedService.summary}
                  </p>
                </div>

                {/* Key Impact Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-xs font-mono font-bold text-warm-gold uppercase tracking-wider">
                    Key Impact
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white">
                    {selectedService.keyOutcome}
                  </p>
                </div>

                {/* Scope Deliverables */}
                <div className="space-y-3">
                  <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                    Key Scope Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.scopeDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-white">
                        <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sub-Services List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-sans font-bold text-white text-sm uppercase tracking-wider text-warm-gold">
                    Specialized Modules
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.subServices.map((sub, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-navy-dark border border-white/5 space-y-1">
                        <p className="font-bold text-xs text-white">{sub.name}</p>
                        <p className="text-[11px] text-[#94a3b8]">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sectors Served */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#94a3b8]">Applicable Sectors:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.sectors.map((sec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-navy-dark border border-white/10 text-[#b8c4d0] px-2.5 py-1 rounded"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#94a3b8]">
                    <span>Guaranteed independent oversight under UK / COREN benchmarks.</span>
                  </div>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-xs px-6 py-3 rounded-xl transition-all"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}