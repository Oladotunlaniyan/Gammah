import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  FileText,
  Cpu,
  Scale,
  CheckCircle2,
  X,
  ChevronRight,
  Compass,
  Briefcase,
  Building2
} from "lucide-react";


interface SubService {
  name: string;
  desc: string;
}

interface ServicePillar {
  id: string;
  categoryLabel: string;
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
      id: "pmc-management",
      categoryLabel: "Project Management",
      number: "01",
      title: "Program & Project Management",
      tagline: "Unbiased, client-side project governance from inception to completion.",
      summary: "We act as your dedicated project management consultant (PMC). Operating strictly on the client's side, we manage risk, oversee contractors, enforce quality benchmarks, and keep schedules on track without supplier conflicts.",
      icon: Briefcase,
      subServices: [
        { name: "Client-Side PMC Leadership", desc: "Full representative oversight ensuring contractor compliance with project goals." },
        { name: "Site Supervision & Inspection", desc: "Daily on-site engineering presence monitoring structural execution." },
        { name: "Quality Assurance & COREN Compliance", desc: "Strict verification of concrete cube strengths, rebar spacing, and structural integrity." },
        { name: "HSE & Site Safety Governance", desc: "Enforcing international health, safety, and environmental standards on active sites." }
      ],
      keyOutcome: "Zero unverified change orders and 100% independent site supervision.",
      sectors: ["Commercial Real Estate", "Residential Estates", "Healthcare & Education"],
      scopeDetails: [
        "Inception & Feasibility Risk Management Plan",
        "Weekly Independent Site Progress Audits",
        "Material Testing Oversight (Concrete, Steel, Aggregates)",
        "Contractor Site Coordination & Conflict Resolution"
      ]
    },
    {
      id: "cost-commercial",
      categoryLabel: "Cost & Commercial",
      number: "02",
      title: "Cost & Commercial Management",
      tagline: "Precision quantity surveying, BOQ auditing, and capital protection.",
      summary: "Our RICS-aligned quantity surveying services protect your capital against cost overruns, inflated materials pricing, and unearned contractor claims. We audit every line item against real street prices.",
      icon: BarChart3,
      subServices: [
        { name: "Bill of Quantities (BOQ) Audit", desc: "Line-by-line verification of material quantities and unit rates before contract award." },
        { name: "Valuation & Payment Certification", desc: "Authorizing contractor disbursements only after physical work is measured and verified." },
        { name: "Value Engineering", desc: "Identifying cost optimization opportunities without compromising structural longevity." },
        { name: "Variations & Claims Management", desc: "Rigorous defense against inflated contractor variation requests and delay claims." }
      ],
      keyOutcome: "Average 12-18% capital savings identified through pre-construction BOQ auditing.",
      sectors: ["Institutional Developments", "Diaspora Real Estate", "Retail & Hospitality"],
      scopeDetails: [
        "Pre-Contract Cost Estimating & Market Rate Benchmarking",
        "Monthly Interim Valuation Measurement On-Site",
        "Contractor Financial Health & Liquidity Audits",
        "Final Account Negotiation & Settlement"
      ]
    },
    {
      id: "digital-controls",
      categoryLabel: "Digital Controls",
      number: "03",
      title: "Digital Project Controls & Analytics",
      tagline: "Cloud dashboards, drone surveillance, and real-time earned value tracking.",
      summary: "Eliminate distance and blind spots. Our digital controls suite connects overseas investors and developers to their construction site with live drone scans, time-lapse webcams, and EVM schedule analytics.",
      icon: Cpu,
      subServices: [
        { name: "Earned Value Management (EVM)", desc: "Scientific tracking comparing budget spent vs. actual physical work delivered." },
        { name: "Drone & 3D Progress Scanning", desc: "High-resolution orthomosaic imagery and volumetric progress verification." },
        { name: "Cloud Client Portal Access", desc: "24/7 online dashboard with milestone tracking, photos, and lab test certificates." },
        { name: "Schedule Variance Analysis", desc: "Early warning detection for critical path delays and bottleneck resolution." }
      ],
      keyOutcome: "Real-time visibility with zero hidden schedule slippage.",
      sectors: ["Diaspora Capital", "Commercial Real Estate", "Infrastructure & Logistics"],
      scopeDetails: [
        "Bi-weekly High-Resolution Drone Scans & 3D Site Mapping",
        "Cloud-based Progress Dashboard with Document Repository",
        "Automated Cost Performance Index (CPI) and Schedule Performance Index (SPI) Alerts",
        "Tamper-proof Digital Photo & Video Inspection Logs"
      ]
    },
    {
      id: "contract-advisory",
      categoryLabel: "Advisory & Risk",
      number: "04",
      title: "Contract & Procurement Advisory",
      tagline: "Equitable contract structuring, FIDIC/JCT governance, and procurement strategy.",
      summary: "Bad contracts breed construction disputes. We help clients structure robust, dispute-resistant contracts, select qualified contractors through transparent tendering, and mitigate legal risks.",
      icon: Scale,
      subServices: [
        { name: "Contract Structuring (JCT / FIDIC)", desc: "Adapting international standard contracts for West African legal frameworks." },
        { name: "Tender Management & Contractor Selection", desc: "Transparent, competitive bidding process with background financial due diligence." },
        { name: "Dispute Avoidance & Mediation", desc: "Early neutral evaluation to resolve contractor conflicts before litigation." },
        { name: "Risk Management & Feasibility Advice", desc: "Identifying site, soil, zoning, and regulatory risks prior to land purchase." }
      ],
      keyOutcome: "Dispute-free contract execution and enforceable performance guarantees.",
      sectors: ["Commercial Real Estate", "Infrastructure", "Public-Private Partnerships (PPP)"],
      scopeDetails: [
        "Contractor Prequalification & Background Checks",
        "Tender Analysis & Negotiations Matrix",
        "Milestone-based Escrow Payment Clauses",
        "Dispute Resolution Board Representation"
      ]
    },
    {
      id: "handover-governance",
      categoryLabel: "Contract & Handover",
      number: "05",
      title: "Handover & Asset Governance",
      tagline: "Flawless snagging, final account reconciliation, and operational readiness.",
      summary: "Crossing the finish line safely. We manage the delicate transition from construction to occupancy, ensuring every defect is rectified, as-built drawings are audited, and accounts are settled transparently.",
      icon: FileText,
      subServices: [
        { name: "Snagging & Defect Inspection", desc: "Comprehensive room-by-room audit identifying finishing, MEP, and structural defects." },
        { name: "Final Account Audit & Reconciliation", desc: "Detailed financial closeout ensuring no unearned retention funds are disbursed." },
        { name: "As-Built & Statutory Approval Audit", desc: "Verifying all statutory certificates, occupancy permits, and warranty documents." },
        { name: "Facility Operational Readiness", desc: "Guiding the handover of O&M manuals and facility management team onboarding." }
      ],
      keyOutcome: "100% defect-rectified handover and audit-ready asset documentation.",
      sectors: ["Residential Estates", "Commercial Buildings", "Healthcare & Hospitality"],
      scopeDetails: [
        "Digital Snagging List with Photo Evidence and Contractor Deadlines",
        "Final Account Certificate Verification",
        "Defects Liability Period (DLP) Monitoring",
        "Handover Asset Inventory & O&M Manual Handover"
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
              We bring UK-grade commercial governance and COREN structural discipline to capital projects across West Africa. As an independent PMC, we do not build—we protect your investment, enforce standards, and eliminate construction risk.
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
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-warm-gold bg-warm-gold/10 border border-warm-gold/20 px-2.5 py-0.5 rounded">
                        {pillar.categoryLabel}
                      </span>
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
            <p className="font-sans text-sm sm:text-base text-[#94a3b8]">
              Traditional construction setups create inherent conflicts of interest. Here is how our independent consultancy model protects your project.
            </p>
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
              <div className="absolute top-4 right-4 bg-warm-gold/10 text-warm-gold border border-warm-gold/30 px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-bold">
                Client Shield
              </div>
              <div className="flex items-center space-x-3 text-warm-gold">
                <ShieldCheck className="w-6 h-6" />
                <h3 className="font-sans font-extrabold text-white text-xl">
                  Gamah Independent PMC Model
                </h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-white">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                  <span>Zero contractor kickbacks; 100% loyal to client interests.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                  <span>Independent lab concrete cube and rebar tensile strength testing.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                  <span>Live 24/7 cloud progress dashboard with drone orthomosaic imagery.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-warm-gold flex-shrink-0 mt-0.5" />
                  <span>Escrow payment authorization only after physical work is measured on site.</span>
                </li>
              </ul>
            </motion.div>

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
            <p className="font-sans text-sm sm:text-base md:text-lg text-[#94a3b8] leading-relaxed">
              Our fee structure is designed to be transparent, flexible, and aligned with project size and complexity. We use three primary pricing models depending on the scope, project stage and level of engagement required, adopting a hybrid pricing strategy that balances recurring income with project-based fees to ensure healthy cash flow and profitability.
            </p>
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
              className="rounded-3xl bg-[#0d1321] border border-white/10 p-8 flex flex-col justify-between space-y-6 shadow-xl hover:border-warm-gold/40 transition-colors duration-300 relative group"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
                    Fixed Fee
                  </h3>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-[#94a3b8] block font-mono uppercase">Fee Range</span>
                    <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                      ₦150,000 – ₦500,000
                    </span>
                    <span className="text-xs text-[#94a3b8] block">/ per assignment</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
                  This model applies to short-term engagements or standalone services that do not require full project lifecycle involvement.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
                    Typically used for:
                  </span>
                  <ul className="space-y-2 text-xs text-[#94a3b8]">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>Design review and technical assessments</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>Procurement or contract advice</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>Project audits and health checks</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>Construction claims or dispute support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>One-off site inspections or reporting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-warm-gold flex-shrink-0 mt-0.5" />
                      <span>Advisory consultation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-warm-gold hover:text-[#0a0e17] text-white font-sans font-bold text-xs px-4 py-3 rounded-xl border border-white/10 transition-all"
                >
                  <span>Request Specialist Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

            {/* Model 2: Monthly Retainer */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="rounded-3xl bg-[#0d1321] border border-warm-gold/40 p-8 flex flex-col justify-between space-y-6 shadow-2xl relative group hover:border-warm-gold/70 transition-colors duration-300"
            >
              <div className="space-y-6">

                <div className="space-y-2">
                  <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
                     Monthly Retainer
                  </h3>
                  <div className="p-3.5 rounded-xl bg-warm-gold/10 border border-warm-gold/30">
                    <span className="text-xs text-warm-gold/80 block font-mono uppercase">Small to Medium Projects</span>
                    <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                      ₦250,000 – ₦400,000
                    </span>
                    <span className="text-xs text-warm-gold/80 block">/ month continuous support</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
                  This model applies where we provide ongoing project management and oversight throughout the construction lifecycle. The client pays a fixed monthly fee starting from ₦250,000 to ₦400,000/month for continuous support throughout the project duration.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-[#94a3b8]">
                  <p className="text-white font-semibold">
                    Cost Certainty &amp; Continuous Oversight
                  </p>
                  <p className="leading-relaxed">
                    This structure provides cost certainty while ensuring consistent oversight and accountability. A minimum monthly retainer applies depending on project size, complexity, duration, and level of site involvement.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
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
              className="rounded-3xl bg-[#0d1321] border border-white/10 p-8 flex flex-col justify-between space-y-6 shadow-xl hover:border-warm-gold/40 transition-colors duration-300 relative group"
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-white text-xl sm:text-2xl tracking-tight">
                    Percentage of Project Value
                  </h3>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                    <span className="text-xs text-[#94a3b8] block font-mono uppercase">Commercial Scale</span>
                    <span className="font-sans font-extrabold text-warm-gold text-lg sm:text-xl">
                      2% – 8%
                    </span>
                    <span className="text-xs text-[#94a3b8] block">of total construction cost</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#b8c4d0] leading-relaxed">
                  For large-scale commercial, institutional, and public-sector projects, fees are calculated as a percentage of the total construction cost. This model reflects the increased complexity, risk exposure, and responsibility associated with large projects.
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
                    Typical Ranges:
                  </span>
                  <ul className="space-y-2 text-xs text-[#94a3b8]">
                    <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <span>Small, large-scale developments</span>
                      <span className="font-bold text-warm-gold">5% – 8%</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <span>Medium-to-large commercial projects</span>
                      <span className="font-bold text-warm-gold">3% – 5%</span>
                    </li>
                    <li className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                      <span>Major infrastructure or public projects</span>
                      <span className="font-bold text-warm-gold">2% – 4%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
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
      {/* 5. CONSULTATION CTA FOOTER BANNER */}
      <section className="py-24 bg-[#0d1321] text-center border-t border-white/10 relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-warm-gold/5 blur-3xl rounded-full pointer-events-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <motion.div
          className="max-w-4xl mx-auto px-6 space-y-8 relative z-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-sans font-black text-white text-3xl sm:text-5xl tracking-tight leading-tight">
            Ready to Protect Your Capital &amp; Ensure Construction Excellence?
          </h2>
          <p className="font-sans text-[#94a3b8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Speak to our senior civil engineers and quantity surveyors in Lagos or London to review your drawings, BOQ documents, or active construction sites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-warm-gold hover:bg-warm-gold/90 text-[#0a0e17] font-sans font-bold text-base px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-[1.02]"
            >
              <span>Schedule Service Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white font-sans font-semibold text-base px-8 py-4 rounded-xl border border-white/10 transition-all"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </motion.div>
      </section>

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